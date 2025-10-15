import { PortfolioData, ContactInfo } from '../data/portfolio-data';

export class GetInTouch {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  private renderContactItem(contact: ContactInfo): string {
    const bgColor = contact.backgroundColor || '#4A90E2';
    const textColor = contact.backgroundColor === '#FFFFFF' ? '#000000' : '#FFFFFF';
    const iconMap: Record<string, string> = {
      email: 'public/email.png',
      linkedin: 'public/linkedin.png',
      github: 'public/github.png',
      whatssap: 'public/whatssap.png'
    };
    const iconSrc = iconMap[contact.type] || '';
    
    return `
      <div class="contact-item" style="background-color: ${bgColor}; color: ${textColor};">
        ${iconSrc ? `<img src="${iconSrc}" alt="${contact.type}" class="contact-icon" style="width:24px;height:24px;"/>` : `<div class="contact-icon">${contact.icon}</div>`}
        <div class="contact-line"></div>
        <a href="${contact.url}" class="contact-link" style="color: ${textColor};">
          ${contact.label}
        </a>
      </div>
    `;
  }

  render(): string {
    const contactItems = this.data.contacts.map(contact => 
      this.renderContactItem(contact)
    ).join('');

    return `
      <section class="get-in-touch">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Entre em Contato</h2>
            <button class="expand-btn">↓</button>
          </div>
          <div class="card-content">
            <div class="contacts-grid">
              ${contactItems}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
