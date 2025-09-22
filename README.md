# Kevin D'Souza - Developer Portfolio

A modern developer portfolio inspired by Red Bull Racing F1 theme, built with Next.js and Tailwind CSS.

## 🏎️ Features

- **Red Bull Racing F1 Theme**: Deep navy backgrounds with red and yellow accents
- **Telemetry Grid Background**: Subtle grid pattern inspired by F1 telemetry displays
- **Responsive Design**: Optimized for all devices
- **Performance Focused**: Built with Next.js App Router for optimal performance
- **Modern UI**: Sleek, minimal design with high-performance aesthetics

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── about/           # About page
│   ├── projects/         # Projects listing
│   │   └── [project]/   # Individual project pages
│   ├── globals.css      # Global styles with F1 theme
│   ├── layout.tsx       # Root layout with header/footer
│   └── page.tsx         # Home page
└── components/
    ├── Header.tsx       # Navigation header
    └── Footer.tsx       # Site footer
```

## 🎨 Theme Details

The portfolio uses a Red Bull Racing inspired color scheme:

- **Background**: Deep navy (#0f172a) and dark navy (#1e293b)
- **Accents**: Red (#dc2626) and yellow (#fbbf24)
- **Text**: White primary, slate secondary
- **Grid Pattern**: Subtle telemetry-style grid overlay
- **Gradients**: Red and yellow energy overlays

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables required for basic deployment.

## 📝 Customization

### Adding Projects

1. Add project data to `/src/app/projects/page.tsx`
2. Create individual project pages in `/src/app/projects/[project-id]/`
3. Update the projects array with your project information

### Updating Content

- **Home page**: Edit `/src/app/page.tsx`
- **About page**: Edit `/src/app/about/page.tsx`
- **Header/Footer**: Edit components in `/src/components/`

### Styling

The F1 theme is defined in `/src/app/globals.css`. Key CSS variables:
- `--background`: Deep navy background
- `--accent-red`: Red accent color
- `--accent-yellow`: Yellow accent color
- `--telemetry-grid`: Grid pattern color

## 🏁 Performance

Built with performance in mind:
- Next.js App Router for optimal loading
- Tailwind CSS for minimal bundle size
- Optimized images and fonts
- Telemetry-inspired performance metrics display

## 📧 Contact

- **Email**: kevin@example.com
- **LinkedIn**: linkedin.com/in/kevindsouza
- **GitHub**: github.com/kevindsouza

---

*Built with the precision and performance of Formula 1 engineering* 🏎️
