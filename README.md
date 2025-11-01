# 🎓 SkillSwap - Local Skill Exchange Platform

## 📌 Project Overview

**SkillSwap** is an interactive web platform designed to connect individuals within local communities who want to offer, learn, and trade skills. Whether it's guitar lessons, language exchange, coding help, or yoga training, SkillSwap makes it easy to browse skill listings, book sessions, and connect with skilled providers nearby.

---

## 🌐 Live URL

**Live Site:** [Your Live URL Here - e.g., https://skillswap-yourname.netlify.app](https://your-live-url.com)

---

## 🎯 Purpose

The purpose of SkillSwap is to:
- Foster community learning and skill exchange
- Make local skill-sharing accessible and affordable
- Connect learners with experienced skill providers
- Build a platform for collaborative growth and knowledge sharing

---

## ✨ Key Features

### 🔐 Authentication System
- **Email/Password Registration & Login** with validation
- **Google Sign-In** integration for quick access
- **Password Reset** functionality via email
- **Private Routes** protection for authenticated users
- **Profile Management** - Update name and profile picture

### 🎨 User Interface
- **Hero Slider** showcasing platform benefits (Swiper.js)
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** using AOS (Animate on Scroll)
- **Interactive Skill Cards** with ratings and pricing
- **Top Rated Providers** carousel with Marquee effect

### 📚 Skill Management
- **Browse Skills** - View 6+ skill listings with detailed information
- **Skill Details Page** - Protected route showing:
  - Provider information
  - Pricing and ratings
  - Available slots
  - Enrollment trends chart (Recharts)
  - Booking form with toast notifications
- **Filter by Category** - Music, Language, Coding, Fitness, etc.

### 👤 User Dashboard
- **My Profile Page** - View and update user information
- **User Avatar Display** in navbar (shows on hover)
- **Persistent Authentication** across page refreshes

### 🎯 Booking System
- **Session Booking Form** with validation
- **Success Notifications** using React-Toastify
- **Email confirmation** for bookings

### 🔒 Security
- **Firebase Authentication** with secure configuration
- **Environment Variables** for API keys protection
- **Protected Routes** for sensitive pages

---

## 🛠️ Technologies Used

### Frontend Framework
- **React.js** - Component-based UI library
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library

### Backend & Database
- **Firebase Authentication** - User authentication and management
- **Firebase Hosting** - Deployment platform

### NPM Packages

| Package | Version | Purpose |
|---------|---------|---------|
| `swiper` | ^11.x | Hero slider/carousel functionality |
| `aos` | ^2.3.4 | Scroll animations |
| `react-toastify` | ^10.x | Toast notifications for user feedback |
| `react-icons` | ^5.x | Icon library (FaEye, FiEyeOff, etc.) |
| `recharts` | ^2.x | Data visualization charts |
| `react-fast-marquee` | ^1.x | Scrolling marquee for providers |
| `firebase` | ^10.x | Backend authentication services |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase account

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/skillswap.git
   cd skillswap
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🚀 Deployment

The project is deployed on **[Netlify/Firebase/Surge]** with continuous deployment from the main branch.

### Build Command
```bash
npm run build
```

### Deploy Command
```bash
npm run deploy
```

## 🔑 Key Functionalities

### Authentication Flow
1. User registers with email/password or Google
2. Email validation (uppercase, lowercase, 6+ characters)
3. Automatic login after registration
4. Profile picture and name stored in Firebase
5. Persistent login state across sessions

### Booking Flow
1. User browses skill listings on homepage
2. Clicks "View Details" on a skill card
3. Redirected to login if not authenticated
4. Views detailed skill information and charts
5. Fills booking form and submits
6. Receives success notification

---

## 🎨 Design Highlights

- **Minimalist & Modern** design focused on clarity
- **Glassmorphism** effects on cards and modals
- **Smooth Transitions** on hover and scroll
- **Consistent Color Scheme** using Tailwind's primary colors
- **Mobile-First Approach** ensuring perfect responsiveness

---

## 🐛 Known Issues & Future Enhancements

### Future Features
- [ ] Real-time chat between learners and providers
- [ ] Payment integration for premium skills
- [ ] Review and rating system
- [ ] Advanced search and filtering
- [ ] User dashboard with booking history
- [ ] Email notifications for bookings

---

## 👨‍💻 Developer

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 📄 License

This project is created as part of an academic assignment. All rights reserved.

---

## 🙏 Acknowledgments

- **Swiper.js** for the beautiful slider component
- **AOS Library** for smooth scroll animations
- **React-Toastify** for elegant notifications
- **Recharts** for interactive data visualization
- **Firebase** for robust authentication services
