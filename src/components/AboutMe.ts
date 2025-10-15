import { PortfolioData } from '../data/portfolio-data';

export class AboutMe {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  render(): string {
    return `
      <section class="about-me" id="about" height:100%>
        <div class="card">
          <div class="about-content" style="height: 100%; padding: 0;">
            <div class="about-background">
              ${this.data.aboutMe.backgroundImage ? 
                `<img src="${this.data.aboutMe.backgroundImage}" alt="Profile" class="profile-bg">` : 
                '<div class="profile-placeholder">👤</div>'
              }
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
