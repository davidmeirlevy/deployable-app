# Fastify Todos API

A simple REST API for managing todos, built with Fastify.

## Features

- ✅ Create, read, update, and delete todos
- ✅ In-memory storage
- ✅ JSON Schema validation
- ✅ Built-in logging

## Installation

```bash
npm install
```

## Running the App

### Development mode (with auto-reload)
```bash
npm run dev
```

### Production mode
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Health Check
- **GET** `/` - Check if the API is running

### Todos

#### Get all todos
```bash
GET /api/todos
```

#### Get a single todo
```bash
GET /api/todos/:id
```

#### Create a new todo
```bash
POST /api/todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread" // optional
}
```

#### Update a todo
```bash
PUT /api/todos/:id
Content-Type: application/json

{
  "title": "Buy groceries", // optional
  "description": "Updated description", // optional
  "completed": true // optional
}
```

#### Delete a todo
```bash
DELETE /api/todos/:id
```

## Example Usage

```bash
# Create a todo
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Fastify", "description": "Build a REST API"}'

# Get all todos
curl http://localhost:3000/api/todos

# Get a specific todo
curl http://localhost:3000/api/todos/1

# Update a todo
curl -X PUT http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Delete a todo
curl -X DELETE http://localhost:3000/api/todos/1
```

## Project Structure

```
.
├── server.js           # Main server file
├── routes/
│   └── todos.js        # Todo routes and handlers
├── store/
│   └── todos.js        # In-memory data store
├── package.json
└── README.md
```

## Todo Object Schema

```json
{
  "id": 1,
  "title": "Todo title",
  "description": "Todo description",
  "completed": false,
  "createdAt": "2025-10-22T12:12:29.000Z"
}
```
