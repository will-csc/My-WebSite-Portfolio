import { PortfolioData } from '../data/portfolio-data';

export class Header {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  render(): string {
    return `
      <header class="header">
        <div class="header-top">
          <div class="header-left">
            <div class="logo">
              <span class="logo-icon">👤</span>
              <span class="logo-text">${this.data.personalInfo.name}</span>
            </div>
          </div>
          <div class="header-right">
            <span class="portfolio-title">Developer Portfolio</span>
          </div>
        </div>
        
        <nav class="navigation">
          <div class="nav-links">
            <a href="#about" class="nav-link active">About me</a>
            <a href="#resume" class="nav-link">Resume</a>
          </div>
        </nav>
      </header>
    `;
  }
}
