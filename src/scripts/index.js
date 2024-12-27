import "../styles.css";
import { About } from "../scripts/about";

const AboutPage = new About;
const AboutButton = document.querySelector("#about-btn")

AboutButton.addEventListener("click", AboutPage.appendToContent)

