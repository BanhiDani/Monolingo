export default class LanguageSelector{ 
    #nyelv="";
    #nyelvSzint="";
    constructor(sectionELEM){
        this.sectionELEM=sectionELEM;
        this.#nyelv;
        this.#nyelvSzint;
        this.nyelvUI();
        this.kattintasEsemeny();
    }


    nyelvUI(){
        let kod=`
        <div class="nyelvUI">
            <h1>Válassz nyelvet!<h1>
            <p class="gomb">Spanyol</p>
            <p class="gomb">Olasz</p>
            <p class="gomb">Német</p>
            <p class="gomb">Angol</p>
        </div>
        `
        this.sectionELEM.insertAdjacentHTML("beforeend", kod);
    }
    szintUI(){
        let kod=`
        <div class="nyelvUI">
            <h1>Válassz szintet!<h1>
            <p class="gomb">1</p>
            <p class="gomb">2</p>
            <p class="gomb">3</p>
            <p class="gomb">4</p>
        </div>
        `
        this.sectionELEM.insertAdjacentHTML("beforeend", kod);
    }
    kattintasEsemeny(){
        const gombELEM=document.querySelectorAll(".gomb");
        for (let index = 0; index < gombELEM.length; index++) {
            const gomb = gombELEM[index].innerHTML;
            gombELEM[index].addEventListener("click", ()=>{
                this.#nyelv=gomb
                this.gombKattint();
            })  
        }
    
    }
    gombKattint(){
        const event = new CustomEvent("gombnyomas", 
            {detail:{szint: this.#nyelvSzint, nyelv: this.#nyelv}}

        );
    }

}