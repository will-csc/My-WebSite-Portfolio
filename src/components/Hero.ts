import { PortfolioData } from '../data/portfolio-data';

export class Hero {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  render(): string {
    const hashtags = this.data.hashtags.map(tag => 
      `<span class="hashtag">${tag}</span>`
    ).join('');

    return `
      <section class="hero">
        <div class="hero-content">
          <div class="hero-left">
            <div class="hero-arrow">
              <div class="arrow-large">↓</div>
            </div>
            <div class="hashtags">
              ${hashtags}
            </div>
            <div class="year">${this.data.personalInfo.year}</div>
          </div>
          
          <div class="hero-right">
            <div class="portfolio-text">
              <span class="portfolio-letter">P</span>
              <span class="portfolio-letter">O</span>
              <span class="portfolio-letter">R</span>
              <span class="portfolio-letter">T</span>
              <span class="portfolio-letter">F</span>
              <span class="portfolio-letter">O</span>
              <span class="portfolio-letter">L</span>
              <span class="portfolio-letter">I</span>
              <span class="portfolio-letter">O</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
