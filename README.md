# zoheir.dev

Modern portfolio website built with Next.js, TypeScript, and CSS Modules. Features a clean, developer-focused design with smooth animations and full responsiveness.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Fonts:** Inter & JetBrains Mono
- **Runtime:** Bun

## ✨ Features

- 🎨 Modern, terminal-inspired design
- 📱 Fully responsive across all devices
- ⚡ Smooth scrolling and animations
- 🧩 Modular component architecture
- 🔧 TypeScript interfaces ready for API integration
- 🎯 SEO optimized with metadata
- 🌙 Dark theme with custom color palette

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Main page with data objects
├── components/
│   ├── about/              # About section
│   ├── contact/            # Contact section with links
│   ├── experience/         # Timeline-based experience
│   ├── footer/             # Footer component
│   ├── header/             # Navigation with mobile menu
│   ├── hero/               # Hero section with animations
│   └── skills/             # Skills grid with categories
├── styles/
│   └── globals.css         # Global styles and CSS variables
├── types/
│   └── portfolio.ts        # TypeScript interfaces
└── utils/
    └── smoothScroll.ts     # Smooth scroll utility
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/zoheirkabuli/zoheir.dev.git
cd zoheir.dev

# Install dependencies
bun install

# Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Customization

All content is managed through data objects in `src/app/page.tsx`. Update these objects to customize your portfolio:

- `heroData` - Hero section content
- `aboutData` - About section paragraphs
- `skillsData` - Skills categories and tags
- `experienceData` - Work experience timeline
- `contactData` - Contact information and links

### Example:

```typescript
const heroData: HeroData = {
  greeting: "$ whoami",
  name: "Your Name",
  title: "Your Title",
  // ...
};
```

## 🔄 API Integration

The project is structured for easy API integration. TypeScript interfaces in `src/types/portfolio.ts` define the data structure. To integrate with an API:

1. Create API routes in `src/app/api/`
2. Fetch data in `page.tsx` using `async/await`
3. Pass fetched data to components as props

## 🎨 Styling

The project uses CSS Modules for component-scoped styling. Global styles and CSS variables are defined in `src/styles/globals.css`:

```css
:root {
  --bg-primary: #0a192f;
  --bg-secondary: #112240;
  --text-primary: #ccd6f6;
  --text-secondary: #8892b0;
  --accent: #64ffda;
  --border: #1e2d4d;
}
```

## 📦 Build & Deploy

```bash
# Build for production
bun run build

# Start production server
bun run start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zoheirkabuli/zoheir.dev)

## 📄 License

MIT License - feel free to use this project for your own portfolio.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Zoheir Kabuli - [zoheyrk@gmail.com](mailto:zoheyrk@gmail.com)

Portfolio: [zoheir.dev](https://zoheir.dev)
