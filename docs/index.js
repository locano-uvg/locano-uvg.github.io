
import { presentations } from './presentations.js';

const grid = document.querySelector('.projects-grid');


function createCardHTML(presentation, index) {
  const delay = index * 100; // Stagger delay in ms
  const paddedIndex = (index + 1).toString().padStart(2, '0');

  return `
       <div class="project-card" id="card-${presentation.id}">
<div class="project-header" data-number="${paddedIndex}" onclick="toggleProject('${presentation.id}')">
  <div class="project-title">
    <span class="project-icon">▸</span>
    ${presentation.title}
  </div>
</div>
<div class="project-content">
  <p>
    ${presentation.description}
  </p>
  <div class="project-links">
    <a href="${presentation.content}" class="btn btn-primary" target="_blank">
      CONTENIDO
    </a>
    <a href="${presentation.repository}" class="btn btn-secondary" target="_blank">
      REPOSITORIO
    </a>
  </div>
</div>
</div>
    `;
}

function renderPresentations(searchTerm = '') {
  grid.innerHTML = '';
  console.log(presentations);
  const filteredPresentations = presentations.filter(p => {
    if (!p.active) return false;
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term);
  });

  filteredPresentations.forEach((presentation, index) => {
    const card = createCardHTML(presentation, index);
    card.style.animationDelay = `${index * 100}ms`;
    grid.appendChild(card);
  });
}

// Initial render
renderPresentations();
