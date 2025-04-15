# Backend – Spring Boot + MongoDB API

This is the backend for a full-stack web application that manages a list of items. It exposes a REST API built with **Spring Boot** and stores data in **MongoDB**.

---

## Tech Stack

- ✅ Java 23
- ✅ Spring Boot 3
- ✅ MongoDB (local)
- ✅ Gradle

---

##  Getting Started

### 1. Requirements

- Java 23 (required)
- Gradle
- MongoDB installed and running locally on `mongodb://localhost:27017`

---

### 2. Project Setup

Clone the repository and navigate to the root of the project (where `build.gradle` is located):

```bash
cd myproject
```

If needed, configure MongoDB connection in `src/main/resources/application.properties` (default uses localhost).

---

### 3. Running the Application

Start MongoDB if it's not already running:

```bash
mongod
```

Then run the Spring Boot app:

```bash
./gradlew bootRun
```

If successful, the backend will start on:

> http://localhost:8080

---

##  API Endpoints

- `GET /api/items` – Fetch all items
- `POST /api/items` – Add a new item (`{ "name": "Milk" }`)

###  Postman Example (POST)

1. Open Postman
2. Create a new **POST** request:  
   `http://localhost:8080/api/items`
3. Go to the **Body** tab → Select `raw` → Choose `JSON` from the dropdown
4. Enter this JSON:

```json
{
  "name": "Milk"
}
```

5. Hit **Send**. You should get a response with the created item.

---

##  Project Structure

```bash
myproject/
├── src/main/java/com/example/myproject
│   ├── controller/       # REST endpoints
│   ├── model/            # Data model (Item.java)
│   ├── repository/       # MongoDB interface
│   ├── config/           # CORS configuration (CorsConfig.java)
│   ├── MyprojectApplication.java
│
├── src/main/resources/
│   └── application.properties
│
├── build.gradle          # Build config

```

---

##  Testing

- Use Postman to test the API
- CORS is configured to allow requests from `http://localhost:3000`

---

##  Notes

- The project is preconfigured to connect to MongoDB on `localhost:27017`
- CORS is handled under the `config/` package inside `myproject`
- No authentication is used on the backend (handled by frontend only)

---

##  Developed By

Mohamad Daher – Computer Science, AUB

