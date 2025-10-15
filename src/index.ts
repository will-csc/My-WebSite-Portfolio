import { portfolioData } from './data/portfolio-data.js';
import { Header } from './components/Header.js';
import { AboutMe } from './components/AboutMe.js';
import { ExperienceComponent } from './components/Experience.js';
import { Introduction } from './components/Introduction.js';
import { GetInTouch } from './components/GetInTouch.js';
import { Expertise } from './components/Expertise.js';
import { HardSkills } from './components/HardSkills.js';
import { SoftSkills } from './components/SoftSkills.js';
import { EducationComponent } from './components/Education.js';

class PortfolioApp {
  private data = portfolioData;

  constructor() {
    this.init();
  }

  private init(): void {
    this.render();
    this.attachEventListeners();
  }

  private getCurrentPage(): 'about' | 'resume' {
    const hash = window.location.hash || '#about';
    return hash === '#resume' ? 'resume' : 'about';
  }

  private setActiveNav(): void {
    const page = this.getCurrentPage();
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (!href) return;
      if ((page === 'about' && href === '#about') || (page === 'resume' && href === '#resume')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  private render(): void {
    const app = document.getElementById('app');
    if (!app) return;

    const header = new Header(this.data);
    const page = this.getCurrentPage();

    if (page === 'about') {
      const aboutMe = new AboutMe(this.data);
      const introduction = new Introduction(this.data);
      const getInTouch = new GetInTouch(this.data);
      app.innerHTML = `
        ${header.render()}
        <main class="main-content">
          <div class="content-grid">
            <div class="left-column">
              ${aboutMe.render()}
            </div>
            <div class="right-column">
              ${introduction.render()}
              ${getInTouch.render()}
            </div>
          </div>
        </main>
      `;
      // Match left photo card height to right column content
      const leftCard = document.querySelector('.left-column > .card') as HTMLElement | null;
      const rightColumn = document.querySelector('.right-column') as HTMLElement | null;
      const fitHeights = () => {
        if (leftCard && rightColumn) {
          leftCard.style.height = `${rightColumn.scrollHeight}px`;
        }
      };
      fitHeights();
      window.addEventListener('resize', fitHeights);
    } else {
      const experience = new ExperienceComponent(this.data);
      const expertise = new Expertise(this.data);
      const hardSkills = new HardSkills(this.data);
      const softSkills = new SoftSkills(this.data);
      const education = new EducationComponent(this.data);
      app.innerHTML = `
        ${header.render()}
        <main class="main-content">
          <div class="content-grid">
            <div class="left-column">
              ${experience.render()}
              ${education.render()}
            </div>
            <div class="right-column">
              ${expertise.render()}
              ${hardSkills.render()}
              ${softSkills.render()}
            </div>
          </div>
        </main>
      `;
    }
    this.setActiveNav();
  }

  private attachEventListeners(): void {
    // Simple hash router
    window.addEventListener('hashchange', () => {
      this.render();
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (!href) return;
        if (href.startsWith('#')) {
          e.preventDefault();
          window.location.hash = href;
        }
      });
    });

    // Expand/collapse cards
    document.querySelectorAll('.expand-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = (e.target as HTMLElement).closest('.card');
        if (card) {
          const content = card.querySelector('.card-content');
          if (content) {
            content.classList.toggle('expanded');
            const btn = card.querySelector('.expand-btn');
            if (btn) {
              btn.textContent = content.classList.contains('expanded') ? '↑' : '↓';
            }
          }
        }
      });
    });

    // See more button
    const seeMoreBtn = document.querySelector('.see-more-btn');
    if (seeMoreBtn) {
      seeMoreBtn.addEventListener('click', () => {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Resume download button
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'public/resume.png';
        link.download = 'curriculo.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }

    // Edit button
    const editBtn = document.querySelector('.edit-btn');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        // Aqui você pode implementar a lógica para editar o portfólio
        alert('Modo de edição será implementado!');
      });
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
