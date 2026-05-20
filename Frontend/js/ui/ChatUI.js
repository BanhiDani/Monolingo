export default class ChatUI{ 
    #nyelv="";
    #nyelvSzint="";
    constructor(sectionELEM, nyelv, nyelvSzint){
        this.sectionELEM=sectionELEM;
        this.#nyelv;
        this.#nyelvSzint;
        this.chatMegjelenit();
    }
    chatMegjelenit(){
        let kod=`
        <div class="chatUI">
            <textarea>.............</textarea>
            <button id="kuld">Küldés</button>
        </div>
        `
        this.sectionELEM.insertAdjacentHTML("beforeend", kod);
    }
    uzenetKuld(){
        const kuldELEM=document.querySelector("#kuld")
        const textElem=document.querySelector("textarea")
        kuldELEM.addEventListener("click", ()=>{
            const esemeny = new CustomEvent("uzenet", {
                    detail: {uzenet: TEXTAREA.innerHTML}
                });
                document.dispatchEvent(esemeny);
                document.addEventListener("uzenet", (event) => {
                    console.log(event.detail.nyelv)
                })
        });
       
        
    }


    
}