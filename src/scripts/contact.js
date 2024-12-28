export class Contact {
  #createHeading() {
    const heading = document.createElement('h1');
    heading.textContent = 'Contact';

    return heading;
  }

  #createContactInfo() {
    const contactInfo = document.createElement('span');
    contactInfo.innerHTML = `You can find us here at: <br>
    <span class="phone-number">000-000-0000</span>
    <br>
    or you can email us here at: <br>
    <span class="email">notrealemail@notreal.com</span>`;

    return contactInfo;
  }


  
  constructor() {
    this.contentContainer = document.querySelector(".content");
    this.heading = this.#createHeading();
    this.contactInfo = this.#createContactInfo();
    this.contactContainer = document.createElement("div");
    this.contactContainer.classList.add("contact-info");
  }


  appendContactToContent = () => {
    this.contactContainer.appendChild(this.heading);
    this.contactContainer.appendChild(this.contactInfo);

    this.contentContainer.appendChild(this.contactContainer);
  }
}