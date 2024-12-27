let test = document.createElement("div");
const content = document.querySelector(".content")

function createPlanNode() {
  const thePlan = document.createElement("div");
  const heading = document.createElement("h2");
  const description = document.createElement("span");


  heading.textContent = "The Plan";
  description.textContent = "We hope to go international so that we can reach doggys all over the world. But for now we are going to stick to trying to expand over California. After all, thats the population with the most doggys currently."

  thePlan.appendChild(heading);
  thePlan.appendChild(description);

  return thePlan;
}

export class About {
  constructor() {
    this.contentContainer = document.querySelector(".content");
    this.thePlan = createPlanNode();
  }

  appendToContent = () => {
    this.contentContainer.appendChild(this.thePlan);

  }

}

