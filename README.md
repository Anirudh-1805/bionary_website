# Bionary Tech Club Website

A stunning, dynamic, and highly-interactive website for the Bionary university tech club. Built with modern web technologies and featuring cutting-edge animations and 3D elements.

## 🚀 Features

### Core Pages
- **Home**: Full-screen hero with animated tagline, 3D particle background, and parallax scrolling
- **About**: Animated timeline, mission statement, and club history with GSAP animations
- **Team**: Interactive member cards with 3D hover effects and filtering by department/batch
- **Events**: Expandable event cards with video embeds and category filtering
- **Gallery**: Masonry layout with lightbox functionality and smooth zoom effects
- **Contact**: Animated form with confetti effect and social media integration
- **Blog**: Filterable articles with staggered card animations

### Technical Features
- ✨ **3D Animations**: React Three Fiber for immersive 3D experiences
- 🎭 **Smooth Animations**: Framer Motion and GSAP for fluid interactions
- 🌙 **Dark/Light Mode**: Theme toggle with system preference detection
- 📱 **Fully Responsive**: Mobile-first design with perfect responsiveness
- ⚡ **High Performance**: Optimized for 90+ Lighthouse scores
- 🎨 **Modern UI**: Tailwind CSS with custom design system
- 🔄 **Smooth Scrolling**: Lenis.js for buttery smooth scroll experience

## 🛠️ Tech Stack

| Purpose | Technology |
|---------|------------|
| **UI Framework** | React.js with Vite |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion, GSAP |
| **3D Elements** | Three.js, React Three Fiber |
| **Smooth Scroll** | Lenis.js |
| **Icons** | Lucide React |
| **Routing** | React Router DOM |

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bionary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
bionary/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── 3d/           # 3D components (Three.js)
│   │   └── layout/       # Layout components
│   ├── contexts/          # React contexts
│   ├── data/             # Sample data files
│   ├── pages/            # Page components
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Space Blue (`#0f172a`)
- **Accents**: Neon Cyan (`#00ffff`), Violet (`#8b5cf6`), Pink (`#ec4899`)
- **Neutral**: Space Gray scale for backgrounds and text

### Typography
- **Primary**: Inter (sans-serif)
- **Display**: Poppins (headings)

### Animations
- **Entrance**: Staggered fade-in with spring physics
- **Hover**: Scale and glow effects
- **Transitions**: Smooth 300ms duration with easing

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## 📊 Performance Optimization

### Implemented Optimizations
- ✅ **Lazy Loading**: Images and components load on demand
- ✅ **Code Splitting**: Automatic route-based code splitting
- ✅ **Image Optimization**: Responsive images with proper sizing
- ✅ **Bundle Optimization**: Tree shaking and minification
- ✅ **Caching**: Proper cache headers for static assets

### Lighthouse Score Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

## 🔧 Customization

### Adding New Team Members
Edit `src/data/team.js`:
```javascript
{
  id: 9,
  name: "New Member",
  role: "Developer",
  department: "Development",
  batch: "2025",
  image: "path/to/image.jpg",
  bio: "Member description",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
  },
  skills: ["React", "Node.js", "TypeScript"]
}
```

### Adding New Events
Edit `src/data/events.js`:
```javascript
{
  id: 9,
  title: "New Event",
  description: "Event description",
  date: "2024-04-20",
  time: "02:00 PM",
  location: "Event Location",
  type: "upcoming",
  category: "Workshop",
  image: "path/to/image.jpg",
  registration: "https://forms.gle/eventlink",
  speakers: ["Speaker Name"],
  tags: ["Tag1", "Tag2"]
}
```

### Modifying Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  neon: {
    cyan: '#00ffff',
    violet: '#8b5cf6',
    pink: '#ec4899',
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **React Three Fiber** for 3D capabilities
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Unsplash** for sample images

## 📞 Support

For questions or support, please contact:
- **Email**: contact@bionary.com
- **GitHub**: [github.com/bionary](https://github.com/bionary)
- **Discord**: [discord.gg/bionary](https://discord.gg/bionary)

---

**Built with ❤️ by the Bionary Tech Club Team** 