export class Menu {
  #createMenuHeading() {
    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    return heading;
  }

  // Adds a new dive containing the food and the description to the 
  // food container
  addToFoodContainer(itemName, description) {
    const newFood = document.createElement("div");
    const heading = document.createElement("h2");
    const foodDescription = document.createElement("span");

    heading.textContent = itemName;
    foodDescription.textContent = description;

    newFood.appendChild(heading);
    newFood.appendChild(foodDescription);

    this.foodContainer.appendChild(newFood);
  }

  constructor() {
    this.contentContainer = document.querySelector(".content");
    this.foodContainer = document.createElement("div");
    this.foodContainer.classList.add("foods")

    this.addToFoodContainer("Salmon Snack", "A delicious bowl built for a bear! This bowl comes with a smoked salmon and some veggies on the side.");
    this.addToFoodContainer("Crunchies", "This is a bowl made up of the crunchies things you can find in existence. Wether its a granola bar or a bug, everything in here is crunchy!");
    this.addToFoodContainer("Peanut Butter", "Literally just peanut butter, nothing else. Best dish in the world.");

    this.menuHeading = this.#createMenuHeading();
  }

  appendMenuToContent = () => {
    this.contentContainer.appendChild(this.menuHeading);
    this.contentContainer.appendChild(this.foodContainer);
  }
}