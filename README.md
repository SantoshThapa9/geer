# Geer - Modern E-commerce Website

A modern, high-performance e-commerce website built with Next.js, inspired by [geer.in](https://geer.in).

## 🚀 Features

### Frontend (Next.js + React)

- Product Listing Page (`/products`) with search & filter
- Individual Product Page (`/products/[id]`) with detailed info
- Responsive, mobile-friendly design
- Modern UI with gradients, animations, hover effects
- Search by name/description, filter by category
- Navigation with active states
- **State Management**: Redux for global state
- **Icons**: React Icons for UI elements
- **Styling**: SCSS modules for modular, maintainable styles

### Backend (Next.js API Routes)

- GET `/api/products` - fetch all products
- POST `/api/products` - add new products
- GET `/api/products/[id]` - get product details
- DELETE `/api/products/[id]` - delete product
- Data persistence via JSON file (`data/products.json`)

### Admin Features

- Admin Panel (`/admin`) to add new products with validation
- Delete products from product detail page
- Real-time updates reflected site-wide

## ⚙️ SEO & Performance

- ✅ `robots.txt` added (`/public/robots.txt`) to guide search engine crawlers
- ✅ `sitemap.xml` auto-generated using `next-sitemap` (`/public/sitemap.xml`)
- ✅ Meta tags (`title`, `description`, `keywords`, Open Graph) for better sharing & discoverability
- ✅ Optimized Next.js image usage
- ✅ Semantic HTML and structured heading usage

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Redux, React Icons, SCSS modules
- **Backend**: Next.js API Routes
- **Styling**: SCSS with gradients & animations
- **Data Storage**: JSON file (easy DB swap)
- **Images**: Unsplash

## 📦 Installation

```bash
git clone https://github.com/SantoshThapa9/geer-intern-assignment
cd geer
npm install
npm run dev
```
"# geer" 
