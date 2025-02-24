# ExpressJS CRUD API with TypeScript

This is a simple CRUD backend server built using ExpressJS and TypeScript, with SQLite for data persistence using Prisma ORM.

## Prerequisites

- Node.js (>=14.x)
- npm or yarn

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Initialize Prisma:
   ```sh
   npx prisma init
   ```

4. Configure the database in `prisma/schema.prisma` (default is SQLite).
   ```sh
   example:

   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"
   }
   generator client {
     provider = "prisma-client-js"
   }
   model Resource {
     id    Int     @id @default(autoincrement())
     name  String
     type  String
     value String
   }
   ```

5. Apply database migrations:
   ```sh
   npx prisma migrate dev --name init
   ```

## Running the Server

Start the Express server:
   ```sh
   npx ts-node-dev src/server.ts
   ```

The server runs on `http://localhost:3000` by default.

## API Endpoints

### Create a Resource
   ```http
   POST /resources
   ```
   **Body:**
   ```json
   {
     "name": "Resource Name",
     "type": "Type",
     "value": "Some Value"
   }
   ```

### List Resources
   ```http
   GET /resources
   ```
   **Optional Query Parameters:**
   - `name` (string) - Filter by name
   - `type` (string) - Filter by type

### Get Resource Details
   ```http
   GET /resources/:id
   ```

### Update Resource
   ```http
   PUT /resources/:id
   ```
   **Body:**
   ```json
   {
     "name": "Updated Name",
     "type": "Updated Type",
     "value": "Updated Value"
   }
   ```

### Delete Resource
   ```http
   DELETE /resources/:id
   ```

## License
This project is licensed under the MIT License.

