# Stokku - Warehouse Inventory Management System

A comprehensive warehouse inventory management system built with Next.js, designed to streamline inventory tracking, product management, and warehouse operations with real-time updates and analytics.

## 🎯 Project Overview

Stokku is a modern web-based inventory management solution that helps businesses efficiently manage their warehouse operations. It provides real-time stock tracking, product categorization, automated alerts, and comprehensive reporting capabilities.

## ✨ Key Features

### 📦 Product Management
- **CRUD Operations**: Create, read, update, and delete products
- **Multiple Images**: Support for multiple product images with drag-and-drop upload
- **Product Categories**: Organize products into customizable categories
- **Unique Product Codes**: Automatic validation for unique product identifiers
- **Product Search**: Advanced search by name, category, or product code

### 🔐 Authentication & Authorization
- **Secure Login**: Email/password authentication with NextAuth.js
- **User Registration**: New user account creation with validation
- **Session Management**: Secure JWT-based session handling
- **Protected Routes**: Dashboard and API endpoints require authentication

### 🎨 User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Built with Ant Design components for consistent experience
- **Dark/Light Mode**: Sidebar with dark theme for better visibility
- **Intuitive Navigation**: Easy-to-use sidebar navigation

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Ant Design**: Enterprise-class UI design language
- **Tailwind CSS**: Utility-first CSS framework
- **TanStack Query**: Data fetching and caching

### Backend
- **Next.js API Routes**: Server-side API endpoints
- **Prisma**: Modern database toolkit
- **PostgreSQL**: Robust relational database
- **NextAuth.js**: Authentication solution
- **bcryptjs**: Password hashing

### Development Tools
- **ESLint**: Code linting and formatting
- **TypeScript**: Type checking and IntelliSense
- **Prisma Migrate**: Database migrations
- **Yarn**: Package manager

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd stokku-app
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # Seed the database (optional)
   npx prisma db seed
   ```

5. **Start Development Server**
   ```bash
   yarn dev
   ```

6. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
stokku-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # Dashboard layout
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable UI components
│   ├── features/              # Feature-based modules
│   │   ├── auth/             # Authentication features
│   │   ├── dashboard/        # Dashboard features
│   │   └── home/             # Landing page features
│   ├── helpers/              # Utility functions
│   ├── layouts/              # Page layouts
│   ├── services/             # API service layers
│   └── types/                # TypeScript type definitions
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
└── README.md
```

## 🎯 Usage Guide

### For Administrators
1. **Setup Categories**: Create product categories in the dashboard
2. **Add Products**: Register new products with images and details
3. **Manage Stock**: Adjust stock levels as inventory changes
4. **Generate Reports**: Export inventory data to Excel or PDF

## 🔧 API Endpoints

### Products
- `GET /api/products` - List all products
- `POST /api/products` - Create new product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Categories
- `GET /api/categories` - List all categories
- `POST /api/categories` - Create new category
- `PUT /api/categories/[id]` - Update category
- `DELETE /api/categories/[id]` - Delete category

### Stock Management
- `POST /api/stocks/adjust` - Adjust stock levels

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/[...nextauth]` - Authentication endpoints

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our coding standards
4. Test your changes thoroughly
5. Commit using conventional commits: `git commit -m 'feat: add amazing feature'`
6. Push to your branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Ensure all tests pass
- Follow the existing code style and patterns

### Reporting Issues
- Use GitHub Issues to report bugs
- Provide detailed reproduction steps
- Include screenshots when relevant
- Check existing issues before creating new ones

## 🐛 Known Issues

- File upload size limit currently set to 5MB per image
- PDF export requires modern browser support
- Mobile experience optimized for tablets and larger screens

### Performance Improvements
- **Image Optimization**: Automatic image compression and CDN integration
- **Database Indexing**: Optimized queries for large datasets
- **Caching Strategy**: Redis integration for improved performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
---

**Built with ❤️ for warehouse management teams everywhere**
