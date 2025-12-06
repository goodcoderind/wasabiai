# WasabiAI Winter Camp Website

A hyper-modern, fully responsive multi-page website for WasabiAI Winter Camp with cutting-edge glassmorphism design, smooth animations, and a premium Gen-Z aesthetic.

## 🚀 Features

- **Glassmorphism Design**: Frosted glass effects with backdrop blur
- **Smooth Animations**: Scroll-triggered animations using Framer Motion
- **Custom Cursor**: Magnetic cursor effects on interactive elements
- **Fully Responsive**: Mobile-first design that works on all devices
- **Multi-page**: Homepage, About, Projects, Contact, Login, Signup, Referral
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll Detection**: react-intersection-observer

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System

### Colors
- **Primary Black**: `#000000`
- **Pure White**: `#FFFFFF`
- **Electric Green**: `#0FFF67`
- **Charcoal Gray**: `#1A1A1A`
- **Slate Gray**: `#808080`

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 600, 700, 900

### Glassmorphism
- Background: `rgba(255, 255, 255, 0.05)` to `rgba(255, 255, 255, 0.1)`
- Backdrop Filter: `blur(20px)` to `blur(30px)`
- Border: `rgba(15, 255, 103, 0.2)` to `rgba(15, 255, 103, 0.3)`

## 📁 Project Structure

```
WASABIAI/
├── app/
│   ├── about/
│   ├── contact/
│   ├── login/
│   ├── projects/
│   ├── referral/
│   ├── signup/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about/
│   ├── auth/
│   ├── contact/
│   ├── home/
│   ├── projects/
│   ├── referral/
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   └── Navigation.tsx
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Pages

- **Homepage** (`/`): Complete landing page with all sections
- **About** (`/about`): Story, values, and team
- **Projects** (`/projects`): Student project gallery with filters
- **Contact** (`/contact`): Contact form with validation
- **Login** (`/login`): User login page
- **Signup** (`/signup`): User registration page
- **Referral** (`/referral`): Referral program page

## 🎬 Animations

- Scroll-triggered fade-in animations
- Hover effects on interactive elements
- Magnetic cursor effects
- Staggered element reveals
- Smooth page transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: > 1440px

## 🚀 Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

Deploy to Vercel:
```bash
vercel
```

## 📝 Notes

- All images are placeholders - replace with actual images
- Form submissions need backend integration
- Authentication logic needs to be implemented
- Referral system needs backend support

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.ts` to modify the color palette.

### Adding Sections
Create new components in `components/home/` and import them in `app/page.tsx`.

### Modifying Animations
Adjust animation parameters in component files using Framer Motion.

## 📄 License

This project is proprietary and confidential.

---

Built with ❤️ for WasabiAI
# wasabiai
