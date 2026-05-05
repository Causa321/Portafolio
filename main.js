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

  // Form Handling
  const contactForm = document.getElementById('registration-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formStatus = document.getElementById('form-status');
      
      const data = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value,
        asunto: document.getElementById('subject').value // Opcional, pero útil
      };

      formStatus.textContent = 'Enviando a AWS...';
      formStatus.className = 'form-status';

      try {
        // Nota: He convertido el ARN proporcionado a una URL de API Gateway válida
        const response = await fetch('https://0upxmogtqj.execute-api.us-east-1.amazonaws.com/f3jwb4n', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          formStatus.textContent = '¡Datos guardados en AWS con éxito!';
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error('Error en la respuesta del servidor');
        }
      } catch (error) {
        console.error('Error:', error);
        formStatus.textContent = 'Hubo un error al enviar los datos. Inténtalo de nuevo.';
        formStatus.className = 'form-status error';
      }

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
      }, 5000);
    });
  }
});
