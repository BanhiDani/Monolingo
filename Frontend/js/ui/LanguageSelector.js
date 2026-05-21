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
            <p class="szint_gomb">A1</p>
            <p class="szint_gomb">A2</p>
            <p class="szint_gomb">B1</p>
            <p class="szint_gomb">B2</p>
            <p class="szint_gomb">C1</p>
            <p class="szint_gomb">C2</p>
        </div>
        `
        this.sectionELEM.insertAdjacentHTML("beforeend", kod);
    }
    kattintasEsemeny() {
        const gombELEM=document.querySelectorAll(".gomb");
        const szintGombELEM=document.querySelectorAll(".szint_gomb");
        this.sectionELEM.addEventListener("click", (event) => {
        if (event.target.classList.contains("gomb")){;
                if (this.#nyelv==="") {
                    this.#nyelv=event.target.innerText;
                    this.UIEltuntet();
                    this.szintUI();
                }}
        if (event.target.classList.contains("szint_gomb")){
            if (this.#nyelv!=""){
                this.#nyelvSzint = event.target.innerText;
                this.UIEltuntet();
                const esemeny = new CustomEvent("nyelvBeallit", {
                    detail: {szint: this.#nyelvSzint, nyelv: this.#nyelv
                    }
                })
                document.dispatchEvent(esemeny);
            };
            }
        });
    }
}