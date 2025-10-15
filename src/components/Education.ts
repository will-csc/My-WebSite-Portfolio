import { PortfolioData, Education } from '../data/portfolio-data';

export class EducationComponent {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  private renderEducationItem(edu: Education): string {
    return `
      <div class="education-item">
        <div class="education-header">
          <span class="education-period">${edu.period}</span>
          <span class="education-check">✓</span>
        </div>
        <div class="education-content">
          <h3 class="education-institution">${edu.institution}</h3>
          <p class="education-degree">${edu.degree}</p>
          ${edu.gpa ? `<p class="education-gpa">GPA: ${edu.gpa}</p>` : ''}
        </div>
      </div>
    `;
  }

  render(): string {
    const educationItems = this.data.education.map(edu => 
      this.renderEducationItem(edu)
    ).join('');

    return `
      <section class="education">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Education</h2>
            <button class="expand-btn">↓</button>
          </div>
          <div class="card-content">
            ${educationItems}
          </div>
        </div>
      </section>
    `;
  }
}
