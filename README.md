# Emre Yavuz — Personal Portfolio 🚀

Welcome to the repository of my personal developer portfolio! This is a modern, premium, and fully responsive portfolio website built with React.js, Sass, and custom styling to showcase my engineering experience, education, skills, and technical projects.

🔗 Live Demo: **[emreeyavuzz.github.io](https://emreeyavuzz.github.io)**

---

## ✨ Features

- **Responsive Design:** Optimized for all devices (Mobile, Tablet, Desktop).
- **Internationalization (i18n):** Seamlessly switch between **Turkish** and **English** with local translation files.
- **Dynamic Category Badges:** Custom colors/gradients applied to project cards dynamically based on technology stacks (`fullstack`, `backend`, `frontend`, `systems`, `mobile`, `ai`, etc.).
- **Smooth Animations:** Integrated using `react-reveal` and modern CSS keyframes.
- **Dark Mode Support:** Clean toggles for an immersive dark theme experience.

---

## 🛠️ Tech Stack

- **Core:** React.js, JavaScript (ES6+), HTML5, CSS3/Sass
- **Animations:** Lottie, React Reveal
- **Icons:** FontAwesome
- **Deployment:** GitHub Pages

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EmreeYavuzz/EmreeYavuzz.github.io.git
   cd EmreeYavuzz.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up environment variables to fetch dynamic GitHub profile/pin data:
   ```bash
   cp env.example .env
   # Add your GitHub token and username inside .env
   ```

### Local Development

Run the development server locally:
```bash
npm start
```

### Production Build

To build the project for production:
```bash
npm run build
```

---

## 📦 Deployment

Deploy directly to **GitHub Pages** (runs the production build and deploys to the `gh-pages` branch automatically):
```bash
npm run deploy
```

---

## 📂 Project Structure

- `src/portfolio.js`: Central configuration file for personal details, skills, education, and projects.
- `src/i18n/`: Contains translation JSON files (`tr.js` and `en.js`) for multilingual support.
- `src/containers/`: Sections of the page (Skills, Projects, Education, etc.).
- `src/components/`: Reusable UI components (Badges, Buttons, Cards, etc.).
