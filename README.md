# Minor Healthmint

A backend API for an e-commerce marketplace platform based on the healthmint architecture. This API provides authentication, product management, order processing, and user management functionalities.

## Features

- **User Authentication**

  - JWT-based authentication
  - User registration and login
  - Password encryption

- **Product Management**

  - Create, read, update, delete products
  - Product search and filtering
  - Product reviews and ratings

- **Order Processing**

  - Order creation and management
  - Order history tracking
  - Status updates

- **User Management**
  - User profiles
  - Role-based permissions (admin, customer)

## Technology Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM (Object Data Modeling)
- **JWT** - Authentication
- **bcrypt** - Password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd marketplace/backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables

```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the development server

```bash
npm run dev
```

## API Endpoints

### Authentication

- `POST /api/users` - Register a new user
- `POST /api/users/login` - Authenticate user & get token

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product by ID
- `POST /api/products` - Create a product (Admin only)
- `PUT /api/products/:id` - Update a product (Admin only)
- `DELETE /api/products/:id` - Delete a product (Admin only)

### Users

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users` - Get all users (Admin only)

### Orders

- `POST /api/orders` - Create new order
- `GET /api/orders/myorders` - Get logged in user orders
- `GET /api/orders/:id` - Get order by ID

## Deployment

This application can be deployed to Render using the included `render.yaml` configuration file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

Based on the healthmint application architecture.
