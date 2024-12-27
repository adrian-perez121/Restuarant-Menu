let test = document.createElement("div");
const content = document.querySelector(".content")
export class About {
  constructor() {
    let test = document.createElement("div");
    test.classList.add("about");
    test.textContent = "Jello this is a test";
    const content = document.querySelector(".content");
    content.appendChild(test);
    
  }
}

