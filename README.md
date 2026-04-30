# Task 7 Backend Environment Setup

This project is a small Node.js and Express API for Task 7. It provides a clean starter backend with environment variable support and two simple JSON endpoints.

## Features

- Express server with JSON responses
- `dotenv` for environment-based configuration
- Health check endpoint for quick verification
- Example environment file for local setup

## Project Structure

```text
Task 7/
  src/
    app.js
    server.js
  .env.example
  .gitignore
  package.json
  README.md
```

## Prerequisites

- Node.js 18 or newer
- npm

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your environment file:

   ```bash
   copy .env.example .env
   ```

3. Start the server:

   ```bash
   npm start
   ```

   For development with auto-restart support:

   ```bash
   npm run dev
   ```

## Environment Variables

| Variable | Description | Default |
| --- | --- | --- |
| `PORT` | Port used by the server | `3000` |
| `NODE_ENV` | Application environment | `development` |

## API Endpoints

### `GET /`

Returns a simple status message.

Example response:

```json
{
  "message": "Task 7 backend environment is running."
}
```

### `GET /health`

Returns a health check response.

Example response:

```json
{
  "status": "ok"
}
```

## Notes

- Keep `.env` out of version control.
- `src/app.js` defines the Express app.
- `src/server.js` loads environment variables and starts the server.
