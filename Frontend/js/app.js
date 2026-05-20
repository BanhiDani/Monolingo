import Services from "./services/ApiClient.js";
import LanguageSelector from "./ui/LanguageSelector.js";
import ChatUI from "./ui/ChatUI.js";

const sectionELEM=document.querySelector("section");

//const Services = new Services("");


const nyelv="";
const nyelvSzint="";

new LanguageSelector(sectionELEM, nyelv, nyelvSzint)

document.addEventListener("nyelvBeallit", (event) => {
    const nyelv = event.detail.nyelv;
    const nyelvSzint = event.detail.szint
    new ChatUI(sectionELEM, nyelv, nyelvSzint);
    console.log(nyelv)
    console.log(nyelvSzint)
    const adat = {
        nyelv: event.detail.nyelv,
        szint: event.detail.nyelv
    };
});






