# Professional Portfolio Website

A personalized, modern portfolio website with dark and light mode, showcasing projects, skills, and professional experience.

![Portfolio Screenshot](/public/images/portfolio-screenshot.png)

## Features

- ✅ Modern, responsive design with masculine tech-focused aesthetic
- ✅ Dark and light mode theme toggle
- ✅ Animated UI components using Framer Motion
- ✅ Project showcase with GitHub links
- ✅ Skills visualization
- ✅ Contact form
- ✅ Mobile-friendly navigation

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- Framer Motion for animations
- Express backend

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/kai-lucky72/tugendane.git
   cd tugendane
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## How to Deploy for Free

### Option 1: Deploy on Vercel (Recommended)

1. Create a free account on [Vercel](https://vercel.com/)

2. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```

3. Deploy using Vercel CLI:
   ```bash
   vercel login
   vercel
   ```

   Or simply connect your GitHub repository to Vercel through their dashboard and follow the setup instructions.

4. Configure build settings in Vercel:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 2: Deploy on Netlify

1. Create a free account on [Netlify](https://www.netlify.com/)

2. Connect your GitHub repository through Netlify's dashboard

3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### Option 3: Deploy on GitHub Pages

1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

4. Configure GitHub repository settings to use gh-pages branch

## Customization

To customize this portfolio for your own use:

1. Update personal information in `client/src/lib/constants.ts`
2. Replace the profile image with your own in `public/images/`
3. Update project information and links in `client/src/lib/constants.ts`
4. Modify skills and experience in the constants file

## License

MIT

## Contact

Lucky Kagabo - kagabolucky72@gmail.com