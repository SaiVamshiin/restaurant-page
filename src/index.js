import {pageLoad} from "./pageload"
import { homePage } from "./home"
import { menuPage } from "./menu"
import { contactPage } from "./contact"

const tabs = document.querySelector("[data-tab-target]");
const tabContents = document.querySelector("[data-tab-content]");
const burger = document.querySelector(".hamburger");

burger.addEventListener("click",()=> {
    document.querySelector("ul").classList.toggle("active");
    burger.classList.toggle("toggle");
});


tabs.forEach((tab) => 
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active")
    });
     tabs.forEach((tab) => {
        tab.classList.remove("red")
     });
     tab.classList.add("red")
     target.classList.add("active")
    })
);

// Navigation menu tab is colored to red if clicked.

document.querySelector(".order-now").addEventListener("click", () => {
    document.querySelector(`[data-tab-target = "#menu"]`).classList.add("red");
});


//Make sure page doesn't refresh on form submit
document.querySelector(`[type="submit"]`).addEventListener("click", () => {
    document.querySelector("form").reset();
  });
