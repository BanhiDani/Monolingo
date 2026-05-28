export default class ChatUI{ 
   
    constructor(sectionELEM, kuldElem, valasz){
        this.sectionELEM=sectionELEM;
        this.kuldElem=kuldElem;
        this.valasz=valasz;
        this.chatMegjelenit();
        this.uzenetKuld();
    }

    static AIvalasz(valasz){
        const fogadElem=document.querySelector("#uzenetFogad");
        fogadElem.value+=`${valasz}\n`
    }

    chatMegjelenit(){
        let kod=`
        <div class="chatUI">
            <textarea readonly id="uzenetFogad"></textarea>
            <textarea placeholder="Ide írj!" id="uzenetKuld"></textarea>
            <button id="kuld">Küldés</button>
        </div>
        `
        this.sectionELEM.insertAdjacentHTML("beforeend", kod);
    }

    uzenetKuld(){
        this.kuldGombELEM=document.querySelector("#kuld")
        this.kuldElem=document.querySelector("#uzenetKuld")
        this.kuldGombELEM.addEventListener("click", ()=>{
                const szoveg = this.kuldElem.innerHTML.trim();
                //this.sajatEsemeny();  
                const esemeny = new CustomEvent("uzenet", {
                    detail: {uzenet: szoveg}
        });   
        document.dispatchEvent(esemeny);
        this.kuldElem.value="";
            })
        };
        
        
   
   
    
}