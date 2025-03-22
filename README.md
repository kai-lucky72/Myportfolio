# Personal Portfolio Website

A professional, responsive portfolio website focused on showcasing tech skills, projects, and professional experience.

## Features

- Modern, responsive design with a tech-focused aesthetic
- Dark/light mode functionality for better user experience
- Project showcase with GitHub links
- Skills and competencies visualization
- Contact form for professional inquiries
- Interactive UI elements with smooth animations

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Styling**: Shadcn UI components
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Downloading from Replit (If applicable)

If you're developing this project on Replit and want to move it to your local environment:

1. In Replit, click the three dots (...) in the files pane
2. Select "Download as ZIP"
3. Extract the ZIP file to your desired location
4. Initialize a new Git repository (if you downloaded the ZIP):
   ```bash
   cd your-extracted-folder
   git init
   git add .
   git commit -m "Initial commit from Replit"
   git branch -M main
   git remote add origin https://github.com/kai-lucky72/Myportfolio.git
   ```
5. Push to your GitHub repository (optional):
   ```bash
   git push -u origin main
   ```

### Installation

Choose ONE of the following methods:

#### Option A: If you downloaded from Replit
1. Navigate to your extracted folder:
   ```bash
   cd your-extracted-folder
   ```

#### Option B: If you're cloning fresh from GitHub
1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/kai-lucky72/Myportfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Myportfolio
   ```

### Running the Project

After following either Option A or B above:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Deployment

This project is set up to be deployed on Vercel. Follow these detailed steps:

### Deploying to Vercel

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   
   a. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one
   
   b. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```
   
   c. Connect your GitHub repository:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Select your GitHub repository
   - Authorize Vercel to access your repository if prompted
   
   d. Configure project settings:
   - **Framework Preset**: Select "Other"
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   
   e. Click "Deploy"
   
3. **Access your deployed site**:
   - Vercel will provide a unique URL (e.g., `your-portfolio.vercel.app`)
   - You can also set up a custom domain in the Vercel project settings

### Running Locally After Deployment

1. Pull the latest changes:
   ```bash
   git pull origin main
   ```

2. Install dependencies if needed:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## You can access this portfolio here https://lucky-portfolio.onrender.com

## License

This project is open source and available under the MIT License.

## Contact

For any inquiries, please reach out to: kagabolucky72@gmail.com
