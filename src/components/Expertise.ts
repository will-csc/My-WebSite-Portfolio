import { PortfolioData } from '../data/portfolio-data';

export class Expertise {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  render(): string {
    const expertiseItems = this.data.expertise.map(skill => 
      `<span class="expertise-item">${skill}</span>`
    ).join('');

    return `
      <section class="expertise">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Expertise</h2>
            <button class="expand-btn">↓</button>
          </div>
          <div class="card-content">
            <div class="expertise-list">
              ${expertiseItems}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
