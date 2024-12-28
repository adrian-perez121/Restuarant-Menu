import "../styles.css";
import { About } from "./about";
import { Menu } from "./menu";
import { Contact } from "./contact";

const AboutPage = new About;
const MenuPage = new Menu;
const contactPage = new Contact;
const contentContainer = document.querySelector(".content");

// By default we start off with the about page
AboutPage.appendToContent();

// Delete everything to add in the new stuff when a button is clicked
document.querySelectorAll("header > button").forEach( (btn) => {
  btn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
  });
});

const AboutButton = document.querySelector("#about-btn");
const MenuButton  = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");

AboutButton.addEventListener("click", AboutPage.appendToContent);
MenuButton.addEventListener("click", MenuPage.appendMenuToContent);
contactButton.addEventListener("click", contactPage.appendContactToContent)


