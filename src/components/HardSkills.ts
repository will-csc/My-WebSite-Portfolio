import { PortfolioData, Skill } from '../data/portfolio-data';

export class HardSkills {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  private renderSkillItem(skill: Skill): string {
    return `
      <div class="skill-item" style="background-color: ${skill.color || '#4A90E2'};">
        <span class="skill-icon">${skill.icon || '💻'}</span>
        <span class="skill-name">${skill.name}</span>
      </div>
    `;
  }

  render(): string {
    const skillItems = this.data.hardSkills.map(skill => 
      this.renderSkillItem(skill)
    ).join('');

    return `
      <section class="hard-skills">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Hard Skills</h2>
            <button class="expand-btn">↓</button>
          </div>
          <div class="card-content">
            <div class="skills-illustration">
              <div class="desk-setup">
                <div class="laptop">💻</div>
                <div class="notebook">📓</div>
                <div class="phone">📱</div>
              </div>
            </div>
            <div class="skills-grid">
              ${skillItems}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
