# Business Card Website

A modern, responsive business card website built with React, TypeScript, and Vite. This project showcases a company focused on independent data transmission and privacy-focused technologies.

## 🚀 Features

- **Multilingual Support**: English and Russian language support
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and dynamic content switching
- **Contact Form**: Built-in contact form for user inquiries
- **Custom Typography**: Gilroy font family for professional appearance

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with custom properties
- **Fonts**: Gilroy font family
- **Linting**: ESLint with TypeScript support
- **Development**: Hot module replacement with Vite

## 📁 Project Structure

```
business-card/
├── public/
│   ├── fonts/           # Font files (Gilroy family)
│   └── icon.svg         # Site favicon
├── src/
│   ├── assets/
│   │   ├── css/         # Stylesheets
│   │   │   ├── components/  # Component-specific styles
│   │   │   ├── fonts.css    # Font definitions
│   │   │   ├── index.css    # Main styles
│   │   │   └── reset.css    # CSS reset
│   │   ├── icons/       # SVG icons
│   │   └── locales/     # Translation files
│   ├── components/      # React components
│   │   ├── switches/    # Toggle components
│   │   └── icons/       # Icon components
│   └── utils/           # Custom hooks and utilities
├── dist/                # Build output
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd business-card
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Internationalization

The project supports multiple languages through a custom language system:

- **English** (`en.json`) - Default language
- **Russian** (`ru.json`) - Secondary language

Language switching is handled through the `useLanguage` hook and `LanguageProvider` context.

## 🎨 Styling

The project uses a modular CSS approach:

- **Reset CSS**: Normalize browser defaults
- **Font CSS**: Custom Gilroy font family definitions
- **Component CSS**: Scoped styles for each component
- **Main CSS**: Global styles and animations

### Key Design Features

- **Color Scheme**: Professional blue (#0D72FE) primary color
- **Typography**: Gilroy font family with multiple weights
- **Animations**: Smooth transitions and fade effects
- **Responsive**: Mobile-first design approach

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: 1200px and above
- **Tablet**: 800px - 1199px
- **Mobile**: 400px - 799px
- **Small Mobile**: Below 400px

## 🔧 Configuration

### Vite Configuration

The project uses Vite with the following key configurations:

- **Port**: 3000 (development)
- **Build Output**: `dist/` directory
- **Source Maps**: Enabled for debugging
- **Asset Directory**: `assets/` for organized builds
- **Path Alias**: `@` points to `src/` directory

### Font Configuration

Custom Gilroy fonts are configured with:

- **Font Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Font Display**: Swap for better loading performance
- **Format**: TrueType (.ttf) format

## 🚀 Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

- **Static Hosting**: Deploy the `dist/` folder to any static hosting service
- **CDN**: Use services like Netlify, Vercel, or AWS S3
- **Server**: Serve the built files from any web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

For questions or support, please use the contact form on the website or reach out through the provided contact information.

---

**Built with ❤️ using React, TypeScript, and Vite**