import mainDoggy from "./images/doggy.jpeg"


export class About {

  #createPlanNode() {
    const thePlan = document.createElement("div");
    const heading = document.createElement("h2");
    const description = document.createElement("span");
  
  
    heading.textContent = "The Plan";
    description.textContent = "We hope to go international so that we can reach doggys all over the world. But for now we are going to stick to trying to expand over California. After all, thats the population with the most doggys currently."
  
    thePlan.appendChild(heading);
    thePlan.appendChild(description);
  
    return thePlan;
  }

   #createPicAndTitle(){
    const picAndTitle = document.createElement("div");
    const doggyPic = document.createElement("img");
    const title = document.createElement("span")
  
    picAndTitle.classList.add("pic-and-title");
    doggyPic.classList.add("main-doggy");
  
    doggyPic.src = mainDoggy;
    doggyPic.alt = "picture of a dog";
    title.textContent = "Welcome to Doggy's!!!"
  
    picAndTitle.appendChild(doggyPic);
    picAndTitle.appendChild(title);
  
    return picAndTitle;
  }

  #createAboutUsNode() {
    const aboutUs = document.createElement("div");
    const heading = document.createElement("h2");
    const description = document.createElement("span");
  
    aboutUs.classList.add("about-us");
    heading.textContent = "About Us";
    description.textContent = "We are a group of doggys that are making food for all the other doggys in the world. Whether you are a good doggy or a bad doggy, every doggy deserves some food. Afterall, a world with no food, is no world at all...";
  
    aboutUs.appendChild(heading);
    aboutUs.appendChild(description);
  
    return aboutUs;
  }

  constructor() {
    this.contentContainer = document.querySelector(".content");
    this.thePlan = this.#createPlanNode();
    this.aboutUs = this.#createAboutUsNode();
    this.picAndTitle = this.#createPicAndTitle();
  }

  appendToContent = () => {
    this.contentContainer.appendChild(this.picAndTitle);
    this.contentContainer.appendChild(this.aboutUs);
    this.contentContainer.appendChild(this.thePlan);
  }

}

