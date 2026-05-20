export default class LanguageSelector{ 
    #nyelv="";
    #nyelvSzint="";
    constructor(sectionELEM, nyelv, nyelvSzint){
        this.sectionELEM=sectionELEM;
        this.#nyelv=nyelv;
        this.#nyelvSzint=nyelvSzint;
        this.nyelvUI();
        this.kattintasEsemeny();
    }
    nyelvUI(){
        let kod=`
        
        <div class="nyelvUI">
            <h1>Válassz nyelvet!</h1>
            <p class="gomb">Spanyol</p>
            <p class="gomb">Olasz</p>
            <p class="gomb">Német</p>
            <p class="gomb">Angol</p>
        </div>
        `
        this.sectionELEM.insertAdjacentHTML("beforeend", kod);
    }
    UIEltuntet() {
        this.sectionELEM.innerHTML=""
    }
    szintUI(){
        let kod=`
        <div class="nyelvUI">
            <h1>Válassz szintet!</h1>
            <p class="gomb">A1</p>
            <p class="gomb">A2</p>
            <p class="gomb">B1</p>
            <p class="gomb">B2</p>
            <p class="gomb">C1</p>
            <p class="gomb">C2</p>
        </div>
        `
        this.sectionELEM.insertAdjacentHTML("beforeend", kod);
    }
    kattintasEsemeny() {
        const gombELEM=document.querySelectorAll(".gomb");
        gombELEM.forEach(gomb => { 
            gomb.addEventListener("click", (event) => {
            const katt=event.detail.innerHTML;
                if (this.#nyelv==="") {
                    this.#nyelv=katt;
                    this.UIEltuntet();
                    this.szintUI();
                    }
                    
                else if (this.#nyelv!=""){
                    this.#nyelvSzint = katt;
                    this.UIEltuntet();
                    const esemeny = new CustomEvent("nyelvBeallit", {
                        detail: {szint: this.#nyelvSzint, nyelv: this.#nyelv}
                    });
                    document.dispatchEvent(esemeny);
                }
            });
        });
    }
}




