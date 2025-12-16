# Welcome

git init
git commit -m "first commit"
git branch -M main
git remote add origin <The GITHUB repository here>
git push origin main



<>
Portfolio Website - Complete Product Scope
Overview
A professional, responsive portfolio website with password-protected content management capabilities.

Technology Stack
Category	Technology
Framework	React 18 + TypeScript
Build Tool	Vite
Styling	Tailwind CSS + CSS Variables
Routing	React Router DOM v6
UI Components	Shadcn UI (Radix primitives)
Icons	Lucide React
State Management	React Context API
Data Persistence	localStorage
Architecture
Portfolio Website - Complete Product Scope
Overview
A professional, responsive portfolio website with password-protected content management capabilities.

Technology Stack
Category	Technology
Framework	React 18 + TypeScript
Build Tool	Vite
Styling	Tailwind CSS + CSS Variables
Routing	React Router DOM v6
UI Components	Shadcn UI (Radix primitives)
Icons	Lucide React
State Management	React Context API
Data Persistence	localStorage
Architecture

Flowchart
Features
1. Multi-Page Routing
Separate pages: Home /, Resume /resume, Projects /projects, Contact /contact
Seamless navigation via React Router
404 Not Found page
2. Password-Protected Edit Mode
Password: JM2022
Unlocks editing for publications (title, description, date, images)
Toggle via navigation menu
3. Profile Image Upload
Click-to-upload on hero section
Persisted in localStorage (with size validation <500KB)
Camera overlay on hover
4. Publications Management
6 pre-loaded publications with images from /public
Editable text fields (title, description, date)
Session-based image uploads (temporary)
External links to articles
5. Desktop/Mobile Preview Toggle
Switch between desktop and mobile views
Phone-frame container for mobile preview
Adaptive font sizes
6. Mobile Navigation
Three-dot menu (MoreVertical icon)
Dropdown with all navigation options
Edit mode toggle in mobile menu
7. Responsive Design
Mobile-first approach
Breakpoints: sm, md, lg
Fluid typography and spacing
8. Design System
Sans-serif typography (Inter)
Color palette: Gold, Coral, Teal accents
CSS variables for theming
Consistent spacing and shadows
File Structure
src/
├── components/
│   ├── Layout.tsx          # Main layout with nav
│   ├── PasswordDialog.tsx  # Edit mode authentication
│   └── ui/                 # Shadcn components
├── contexts/
│   ├── EditContext.tsx     # Edit mode state
│   └── DataContext.tsx     # Publications & profile data
├── pages/
│   ├── HomePage.tsx        # Hero section
│   ├── ResumePage.tsx      # Experience & education
│   ├── ProjectsPage.tsx    # Publications grid
│   └── ContactPage.tsx     # Contact information
└── index.css               # Design tokens & global styles
Data Flow
<lov-mermaid> flowchart LR A[User Action] --> B{Edit Mode?} B -->|Yes| C[Update State] C --> D[Save to localStorage] D --> E[Re-render UI] B -->|No| F[View Only]
This is your complete portfolio system - a self-contained, editable professional website.