// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Project Data
  const projects = [
    {
      title: "E-Commerce AWS Platform",
      description: "Una plataforma de comercio electrónico escalable alojada en AWS con frontend moderno y backend robusto usando Node.js.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["AWS", "React", "Node.js", "Express"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Dashboard Analítico",
      description: "Un panel de control interactivo para visualización de datos en tiempo real, desarrollado con Vue y D3.js.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "D3.js", "TailwindCSS"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "App de Gestión de Tareas",
      description: "Aplicación Full Stack para la gestión de tareas de equipos, con autenticación y base de datos en PostgreSQL.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["PostgreSQL", "React", "Redux", "Docker"],
      demoLink: "#",
      repoLink: "#"
    }
  ];

  const projectGrid = document.getElementById('project-grid');

  // Render Projects
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const techTags = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

    card.innerHTML = `
      <div class="project-img-wrapper">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="project-details">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${techTags}
        </div>
        <div class="project-links">
          <a href="${project.demoLink}" class="btn btn-primary" target="_blank" rel="noopener">Ver Demo</a>
          <a href="${project.repoLink}" class="btn btn-outline" target="_blank" rel="noopener">Código</a>
        </div>
      </div>
    `;

    projectGrid.appendChild(card);
  });
});
