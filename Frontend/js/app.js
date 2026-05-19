import LanguageSelector from "./ui/LanguageSelector.js";
import ChatUI from "./ui/ChatUI.js";

const sectionELEM=document.querySelector("section");


new LanguageSelector(sectionELEM, "", "")

document.addEventListener("nyelvBeallit", (event) => {
    const nyelv = event.detail.nyelv;
    const nyelvSzint = event.detail.nyelv.szint
    new ChatUI(sectionELEM, nyelv, nyelvSzint);
});

    


