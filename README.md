# Iota Psi Omega (ΙΨΩ) Website

A modern, responsive website for Iota Psi Omega, a co-ed entrepreneurial business fraternity and incubator.

## Features

- 🎨 Modern, dark-mode first design
- 📱 Fully responsive layout
- ⚡ Built with Next.js and Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 🌐 SEO optimized
- ♿ Accessibility focused

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript
- React Icons

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/i-psi-omega-site.git
   cd i-psi-omega-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Export static files:
   ```bash
   npm run export
   # or
   yarn export
   ```

## Deployment

### GitHub Pages

1. Update the `next.config.js` file with your repository name:
   ```js
   const nextConfig = {
     basePath: '/i-psi-omega-site',
     // ... other config
   }
   ```

2. Add a GitHub Actions workflow file at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - run: npm run export
         - uses: JamesIves/github-pages-deploy-action@4.1.4
           with:
             branch: gh-pages
             folder: out
   ```

3. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. Enable GitHub Pages in your repository settings and select the `gh-pages` branch.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Navbar.tsx     # Navigation component
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Programs.tsx   # Programs section
│   ├── RushProcess.tsx # Rush process section
│   ├── Values.tsx     # Values section
│   └── Contact.tsx    # Contact section
├── public/            # Static assets
│   └── logos/        # Partner logos
├── styles/           # Additional styles
├── next.config.js    # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json      # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/) 