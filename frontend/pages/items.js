import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ItemsPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth') === 'true';
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      fetchItems();
    }
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/items');
      if (!response.ok) throw new Error('Failed to fetch items');
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError('Could not load items. Backend might be down.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:8080/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newItemName })
      });

      if (response.ok) {
        setNewItemName('');
        setSuccess('✅ Item added successfully');
        fetchItems();
      } else {
        const data = await response.json();
        setError(data.name || 'Failed to add item');
      }
    } catch (err) {
      setError('❌ Server error. Please try again later.');
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    router.push('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light px-4">
        <span className="navbar-brand mb-0 h1">🗂️ Item Manager</span>
        <button onClick={logout} className="btn btn-outline-danger">Logout</button>
      </nav>

      <div className="container mt-5" style={{ maxWidth: '600px' }}>
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="card-title mb-3">Items</h4>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit} className="mb-4">
              <div className="input-group">
                <input
                  className="form-control"
                  placeholder="📝 Enter item name"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Add Item</button>
              </div>
            </form>

            <ul className="list-group">
              {items.map((item) => (
                <li key={item.id} className="list-group-item d-flex align-items-center">
                  🧾 {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
