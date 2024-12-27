import "./styles.css";
import { About } from "./about";

const AboutPage = new About;
const AboutButton = document.querySelector("#about-btn")

AboutButton.addEventListener("click", AboutPage.appendToContent)

