import { PortfolioData, Experience } from '../data/portfolio-data';

export class ExperienceComponent {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  private renderExperienceItem(exp: Experience): string {
    return `
      <div class="experience-item">
        <div class="experience-header">
          <span class="experience-period">${exp.period}</span>
          <span class="experience-check">✓</span>
        </div>
        <div class="experience-content">
          <h3 class="experience-title">${exp.title}</h3>
          <p class="experience-company">${exp.company}</p>
          <p class="experience-description">${exp.description}</p>
          <div class="experience-dates">
            <span class="start-date">${exp.startDate}</span>
            <span class="date-separator">-</span>
            <span class="end-date">${exp.endDate}</span>
          </div>
        </div>
      </div>
    `;
  }

  render(): string {
    const experienceItems = this.data.experience.map(exp => 
      this.renderExperienceItem(exp)
    ).join('');

    return `
      <section class="experience">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Experience</h2>
            <button class="expand-btn">↓</button>
          </div>
          <div class="card-content">
            ${experienceItems}
          </div>
        </div>
      </section>
    `;
  }
}
