import { PortfolioData } from '../data/portfolio-data';

export class Introduction {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  render(): string {
    return `
      <section class="introduction">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">${this.data.introduction.title}</h2>
            <button class="expand-btn">↓</button>
          </div>
          <div class="card-content">
            <div class="intro-content">
              <div class="intro-text">
                <div class="intro-subtitle">${this.data.introduction.subtitle}</div>
                <p class="intro-description">${this.data.introduction.description}</p>
              </div>
              <div class="intro-illustration">
                ${this.data.introduction.illustration ? 
                  `<img src="${this.data.introduction.illustration}" alt="Illustration" class="illustration-img">` :
                  '<div class="illustration-placeholder">💻</div>'
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
