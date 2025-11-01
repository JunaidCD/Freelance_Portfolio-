# 🚀 Professional Portfolio - Junaid Mollah

A modern, professional portfolio website showcasing blockchain development expertise and freelance services. Built with React, Vite, and TailwindCSS featuring glassmorphism effects, smooth animations, and client-focused design.

## 🌟 Live Demo
Visit the live portfolio: [https://your-portfolio-url.com](https://your-portfolio-url.com)

## 👨‍💻 About
Professional blockchain developer and smart contract engineer specializing in Web3 solutions, DApps, and full-stack development. This portfolio showcases delivered projects, professional services, and client testimonials.


## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism Effects**: Beautiful frosted glass components with backdrop blur
- **Gradient Animations**: Dynamic color gradients and glow effects
- **Responsive Layout**: Perfectly optimized for all device sizes
- **Dark Theme**: Professional dark color scheme with accent colors

### 🚀 **Professional Sections**
- **Hero Section**: Professional introduction with call-to-action buttons
- **My Services**: Blockchain and web development service offerings
- **My Work**: Portfolio of delivered projects and client solutions
- **Client Milestones & Recognitions**: Professional achievements and certifications
- **Contact Form**: EmailJS-powered contact system for client inquiries
- **Responsive Navigation**: Clean, professional navigation with smooth transitions

### 🛠️ **Technical Features**
- **React 18**: Latest React with hooks and modern patterns
- **Vite**: Lightning-fast development and build tool
- **TailwindCSS**: Utility-first CSS framework with custom animations
- **EmailJS**: Contact form integration for client inquiries
- **Lucide Icons**: Beautiful, consistent icon library
- **Responsive Design**: Mobile-first approach with professional styling

## 🏗️ **Project Structure**

```
Portfolio/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Professional navigation
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Skills.jsx          # Services and expertise
│   │   ├── Projects.jsx        # Portfolio showcase
│   │   ├── Achievements.jsx    # Professional milestones
│   │   └── Contact.jsx         # EmailJS contact form
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles and animations
├── .env                       # Environment variables (EmailJS config)
├── .env.example              # Environment template
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # This file
```

## 🚀 **Quick Start**

### Prerequisites
- Node.js 16+ 
- npm or yarn
- EmailJS account (for contact form functionality)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📧 **EmailJS Setup (Required for Contact Form)**

The contact form uses EmailJS to send emails. Follow these steps to set it up:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (200 emails/month)
- Verify your email address

### 2. Set Up Email Service
- Dashboard → **Email Services** → **Add New Service**
- Choose **Gmail** (recommended)
- Connect your Gmail account via OAuth
- Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
- Dashboard → **Email Templates** → **Create New Template**
- Template settings:
  ```
  To Email: your-email@gmail.com
  From Name: {{from_name}} - Portfolio Contact
  Reply To: {{from_email}}
  Subject: New Portfolio Contact: {{subject}}
  ```
- Template content:
  ```
  New contact from your portfolio:
  
  Name: {{from_name}}
  Email: {{from_email}}
  Subject: {{subject}}
  
  Message:
  {{message}}
  
  ---
  Sent from your portfolio contact form
  ```
- Copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
- Dashboard → **Account** → **General**
- Copy your **Public Key** (e.g., `user_abcd1234`)

### 5. Update Environment Variables
Edit your `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abcd1234
```

### 6. Restart Development Server
```bash
npm run dev
```

## 🎨 **Customization Guide**

### **Personal Information**
Update your personal details in these files:
- `src/components/Hero.jsx` - Name, professional title, and introduction
- `src/components/Contact.jsx` - Contact information and social links

### **Services**
Modify `src/components/Skills.jsx` to update your service offerings:
```javascript
const services = [
  {
    title: 'Blockchain Development',
    description: 'Smart contracts and DApps',
    icon: Code,
    // Add your services here
  }
]
```

### **Projects**
Update `src/components/Projects.jsx`:
```javascript
const mainProjects = [
  {
    title: 'Your Project',
    description: 'Project description',
    techStack: ['React', 'Solidity'],
    demoUrl: 'https://yourproject.com',
    codeUrl: 'https://github.com/yourusername/project'
  }
]
```

### **Achievements**
Modify `src/components/Achievements.jsx` to add your professional milestones and certifications.

### **Colors & Styling**
Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Your primary color
  },
  accent: {
    500: '#22c55e', // Your accent color
  }
}
```

## 🎯 **Key Sections**

### **Hero Section**
- Animated typewriter effect showing different roles
- Floating background elements
- Call-to-action buttons with hover effects
- Social media links

### **About Section**
- Personal introduction with glassmorphism card
- Key highlights with animated icons
- Statistics counter
- Professional summary

### **Skills Section**
- Categorized skill bars with animations
- Progress bars triggered by scroll
- Technology cloud with additional skills
- Interactive hover effects

### **Projects Section**
- Filterable project gallery
- Interactive project cards
- Technology tags
- GitHub and live demo links
- Featured project highlighting

### **Experience Section**
- Professional timeline design
- Achievement highlights
- Technology stack for each role
- Education section

### **Contact Section**
- Functional contact form
- Contact information cards
- Social media integration
- Form validation and submission

## 🌟 **Performance Features**

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Placeholder system for images
- **Smooth Scrolling**: CSS scroll-behavior and intersection observer
- **Minimal Bundle**: Tree-shaking and code splitting
- **Fast Refresh**: Instant development updates with Vite

## 📱 **Responsive Design**

- **Mobile First**: Designed for mobile and scaled up
- **Breakpoints**: Tailored for all screen sizes
- **Touch Friendly**: Optimized for touch interactions
- **Cross Browser**: Compatible with all modern browsers

## 🔧 **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 **Dependencies**

### **Core**
- `react` - UI library
- `react-dom` - React DOM renderer
- `vite` - Build tool and dev server

### **Styling**
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing

### **UI & Functionality**
- `lucide-react` - Icon library
- `@emailjs/browser` - Email service integration
- `react` - Core React functionality

## 🚀 **Deployment**

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### **Vercel**
1. Connect your GitHub repository
2. Vercel will automatically detect Vite and deploy

### **GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/portfolio"`
3. Add scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d dist"`
4. Deploy: `npm run deploy`

## 🎨 **Design Credits**

This portfolio is inspired by modern design trends including:
- Glassmorphism design patterns
- Gradient color schemes
- Smooth micro-interactions
- Professional SaaS application UIs

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 **Support**

If you have any questions or need help customizing the portfolio, feel free to reach out:
- **Email**: junaidmollah17@gmail.com
- **LinkedIn**: [Junaid Mollah](https://linkedin.com/in/junaid-mollah-a59150319)
- **GitHub**: [JunaidCD](https://github.com/JunaidCD)

---

**Made with ❤️ by Junaid Mollah - Blockchain Developer & Smart Contract Engineer**
