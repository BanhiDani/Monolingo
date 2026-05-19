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
        </div>
        `
        this.sectionELEM.insertAdjacentHTML("beforeend", kod);
    }
}