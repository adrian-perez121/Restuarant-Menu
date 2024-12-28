import "../styles.css";
import { About } from "./about";
import { Menu } from "./menu";

const AboutPage = new About;
const MenuPage = new Menu;
const contentContainer = document.querySelector(".content");

// Delete everything to add in the new stuff when a button is clicked
document.querySelectorAll("header > button").forEach( (btn) => {
  btn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
  });
});

const AboutButton = document.querySelector("#about-btn");
const MenuButton  = document.querySelector("#menu-btn");

AboutButton.addEventListener("click", AboutPage.appendToContent);
MenuButton.addEventListener("click", MenuPage.appendMenuToContent);


