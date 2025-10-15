import { PortfolioData, Skill } from '../data/portfolio-data';

export class SoftSkills {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  private renderSkillTag(skill: Skill, index: number): string {
    const isHighlighted = index % 3 === 0; // Highlight every 3rd skill
    const bgColor = isHighlighted ? '#4A90E2' : '#E0E0E0';
    const textColor = isHighlighted ? '#FFFFFF' : '#000000';
    
    return `
      <span class="skill-tag" style="background-color: ${bgColor}; color: ${textColor};">
        #${skill.name}
      </span>
    `;
  }

  render(): string {
    const skillTags = this.data.softSkills.map((skill, index) => 
      this.renderSkillTag(skill, index)
    ).join('');

    return `
      <section class="soft-skills">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Soft Skills</h2>
            <button class="expand-btn">↓</button>
          </div>
          <div class="card-content">
            <div class="skills-tags">
              ${skillTags}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
