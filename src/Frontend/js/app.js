import Services from "./services/ApiClient.js";
import LanguageSelector from "./ui/LanguageSelector.js";
import ChatUI from "./ui/ChatUI.js";


const sectionELEM=document.querySelector("section");

let nyelv="";
let nyelvSzint="";
let AIuzenet="";

const services= new Services();
new LanguageSelector(sectionELEM, nyelv, nyelvSzint)

document.addEventListener("nyelvBeallit", (event) => {
    const nyelv = event.detail.nyelv;
    const nyelvSzint = event.detail.szint
    console.log(nyelv)
    console.log(nyelvSzint)
    /*const adat = {
        language: event.detail.nyelv,
        level: event.detail.szint
    }; */
    //services.postAdat("http://localhost:3000/api/chat", adat, (v)=>{console.log("a", v)})
    new ChatUI(sectionELEM, AIuzenet);
});

document.addEventListener("uzenet", (event)=>{
    const uzenet = event.detail.uzenet;
    console.log(uzenet)
    const chatAdat = {
            language: nyelv,
            level: nyelvSzint,
            message: uzenet}
    services.postAdat("http://localhost:3000/api/chat", chatAdat, (reply)=>{
        let valasz=reply.message;
        ChatUI.AIvalasz(valasz);
        }
    )
})