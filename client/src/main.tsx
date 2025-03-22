import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for font families and other global styles
const style = document.createElement('style');
style.textContent = `
  :root {
    --font-sans: 'Inter', sans-serif;
    --font-heading: 'Space Grotesk', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }
  
  body {
    font-family: var(--font-sans);
    background: linear-gradient(135deg, #111827, #1F2937);
    color: #E5E7EB;
  }
  
  .hero-gradient {
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(14, 165, 233, 0.2) 100%);
  }
  
  .project-card-gradient {
    background: linear-gradient(135deg, #1E293B 0%, #273549 100%);
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }
  
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .card-hover {
    transition: all 0.3s ease;
  }
  
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
  }
  
  .scrolled {
    background-color: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-blur {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
