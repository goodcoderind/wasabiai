# WasabiAI Winter Camp Website

A Next.js and TypeScript frontend for the WasabiAI Winter Camp website. It presents the program, curriculum, team, and student projects through a responsive interface with a dark theme, green accents, and scroll animations.

## Project status

This repository is a **frontend prototype**. Its public information pages and interactive components are implemented; account and submission workflows still need backend integration.

- **Login and signup:** UI forms only. They do not authenticate users or create accounts; the current submit handlers log form values to the browser console. Use sample details when previewing them.
- **Contact form:** performs client-side validation and displays a success state, but does not send a message.
- **Referrals:** uses a placeholder referral link and static statistics; tracking and rewards need backend support.
- **Content and images:** review placeholder material before publishing a live camp website.

## Features

- Home, About, Projects, Contact, Login, Signup, and Referral pages
- Student project gallery with category filters
- Reusable page sections and shared navigation/footer
- Responsive layouts styled with Tailwind CSS
- Scroll-triggered animations using Framer Motion
- Desktop custom cursor and hover effects

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14, App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Scroll detection | react-intersection-observer |

## Local development

```bash
git clone https://github.com/goodcoderind/wasabiai.git
cd wasabiai
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The scripts in `package.json` are:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js linting |

## Pages

| Route | Content |
| --- | --- |
| `/` | Camp overview, curriculum, team, and student work |
| `/about` | Story, values, and team |
| `/projects` | Student project gallery with filters |
| `/contact` | Contact information and a form prototype |
| `/login` | Login form prototype |
| `/signup` | Registration form prototype |
| `/referral` | Referral UI with placeholder data |

## Project structure

```text
wasabiai/
├── app/                 # App Router pages, shared layout, and global styles
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
├── public/              # Public website assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Design system

### Colors

| Token | Value |
| --- | --- |
| Primary black | `#000000` |
| White | `#FFFFFF` |
| Electric green | `#0FFF67` |
| Charcoal gray | `#1A1A1A` |
| Slate gray | `#808080` |

### Typography

The global stylesheet loads Inter for body text, Space Grotesk for display text, and JetBrains Mono for monospace text. Font variables and utility classes are defined in `app/globals.css` and `tailwind.config.ts`.

### Glass effects

The shared `.glass` and `.glass-strong` classes use translucent white backgrounds, a 20–30px backdrop blur, and green borders. The stylesheet also defines a stronger `.glass-premium` variant.

### Responsive behavior and animation

Tailwind responsive utilities control page layouts and spacing. The custom cursor is enabled at desktop widths of 768px and above. Components use scroll-triggered reveals, hover effects, and staggered animations.

## Customization

- **Colors and theme:** edit `tailwind.config.ts` and the shared styles in `app/globals.css`.
- **Fonts and glass effects:** update the font imports, CSS variables, and utility classes in `app/globals.css`.
- **Homepage sections:** add components in `components/home/` and import them in `app/page.tsx`.
- **Animations:** adjust Framer Motion properties in the relevant component.
- **Images and copy:** replace placeholder material and update page components before deployment.

## Production build

```bash
npm run build
npm start
```

A Vercel deployment can be configured from the repository or through the Vercel CLI. Deploying the frontend does not implement the account, contact, or referral backends described above.

## License

This project is proprietary and confidential.

---

Built for WasabiAI.
