#  Frontend – Next.js App (Item Manager)

This is the frontend for a full-stack web application built with **Next.js**. It interacts with a **Spring Boot + MongoDB** backend to allow authenticated users to add and view items.

---

##  Tech Stack

- ✅ **Next.js**
- ✅ **Bootstrap 5** (via CDN or npm)
- ✅ `localStorage` for authentication
- ✅ REST API connection to backend (`http://localhost:8080/api/items`)

---

##  Getting Started

### 1. Requirements

- Node.js v18+
- Backend must be running on `http://localhost:8080`
  (Use `./gradlew bootRun` in the backend folder)

---

### 2. Installation

Open terminal, then:

```bash
cd frontend
npm install
```

---

### 3. Running the App

Start the development server:

```bash
npm run dev
```

Then open your browser at:

> http://localhost:3000/login

---

### 4. Login Credentials

This app uses **hardcoded credentials** on the frontend:

- **Username:** `admin`
- **Password:** `password`

Once logged in, you're redirected to `/items` where you can add and view items.

---

##  Pages Overview

### `/login`

- Form that checks credentials
- On success → redirects to `/items`
- Uses `localStorage` to persist session

### `/items`

- Protected route (redirects to `/login` if unauthenticated)
- Shows a list of items fetched from backend (`GET /api/items`)
- Add new items using a form (`POST /api/items`)
- Shows success & error messages
- Styled using Bootstrap + custom CSS

---

##  Project Structure

```bash
frontend/
├── pages/
│   ├── login.js         # Login form
│   ├── items.js         # Items list + add form
├── styles/
│   └── globals.css      # Custom styles + Bootstrap tweaks
├── public/              # Static files
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

---

##  Error Handling

- Invalid login → error message
- Empty item field → blocked with frontend validation
- Backend down → friendly error shown
- Backend validation error (e.g., blank name) → message shown

---

##  Deployment

You can deploy this frontend to [Vercel](https://vercel.com/) easily:

```bash
npm run build
npm run start
```

Or connect this GitHub repo to Vercel directly.

---

##  Developed By

Mohamad Daher – Computer Science, AUB

