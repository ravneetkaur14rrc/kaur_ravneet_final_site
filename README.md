#  Ravneet Kaur - Web Developer Portfolio
A responsive portfolio website showcasing my projects and skills, built with React and Material-UI.

##  Features
- **Project Gallery**: Display coursework with descriptions and technologies
- **Skills Section**: Interactive tech stack visualization
- **Responsive Design**: Mobile-friendly layout
- **Docker Support**: Easy container deployment
- **Modern UI**: Clean Material-UI components


##  Technologies Used
- **Frontend**: React 18, Material-UI 5
- **State Management**: React Context API
- **Routing**: React Router 6
- **Containerization**: Docker, NGINX
- **Build Tool**: Create React App


### Prerequisites
- Node.js (v16+)
- npm (v8+)
- Docker (optional)

### Installation
```bash
# Clone the repository
git clone https://github.com/ravneetkaur14rrc/kaur_ravneet_final_site.git

# Navigate to project directory
cd kaur_ravneet_final_site

# Install dependencies
npm install

# Start development server
npm start

# Build the Docker image
docker build -t portfolio-app .

# Run the container
docker run -d -p 5575:5575 --name my-portfolio portfolio-app

# Access the application
http://localhost:5575

# Project Directory
kaur_ravneet_final_site/
├── src/
│   ├── Components/    # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── WorkItem.jsx
│   │   └── SkillItem.jsx
│   ├── Pages/         # Page components
│   │   ├── Home.jsx
│   │   ├── Work.jsx
│   │   ├── Skills.jsx
│   │   └── Setup.jsx
│   ├── App.js         # Main application
│   └── index.js       # Entry point
├── public/            # Static assets
├── Dockerfile         # Production build config
├── nginx.conf         # Server configuration
└── package.json       # Project dependencies
