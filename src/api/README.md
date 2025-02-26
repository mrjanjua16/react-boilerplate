# API Integration Layer

This directory contains all API-related code and configurations.

## Structure

- `generated/` - Contains auto-generated API clients from Swagger/OpenAPI specs
- `axios.instance.ts` - Axios instance with interceptors and common configuration
- `index.ts` - Exports all API-related functionality

## Usage

### Generating API Clients

1. Update the Swagger URL in `package.json`'s `generate-api` script
2. Run the generator:
   ```bash
   pnpm run generate-api
   ```

### Using API Clients

```typescript
import { DefaultApi, apiInstance } from '../api';

// Create an API instance
const api = new DefaultApi(undefined, import.meta.env.VITE_API_BASE_URL, apiInstance);

// Use the API
const response = await api.someEndpoint();
```

### Authentication

The axios instance automatically:

- Adds authentication tokens to requests
- Handles 401 unauthorized responses
- Redirects to login on authentication failures

### Error Handling

The axios instance includes interceptors for:

- Request authentication
- Response error handling
- Automatic logout on authentication failures
