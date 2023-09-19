import Model from "../Model/Model.js";
import Megjelenit from "../View/MegjelenitView.js";
import Urlap from "../View/UrlapView.js";

class Controller
{
    constructor()
    {
        const UJ_ADAT_ELEM = $("#ujadat");
        new Urlap(UJ_ADAT_ELEM);
        const TAROLO_ELEM = $("#tarolo");
        const MODEL = new Model();
        this.#megjelenit(TAROLO_ELEM, MODEL.lista);
        this.#customEventreFeliratkozas("ujElemHozzaadasaEvent", (event) => {
            MODEL.ujAdat(event.detail);
            this.#megjelenit(TAROLO_ELEM, MODEL.lista);
        });
        this.#customEventreFeliratkozas("keszGombraKattintottEvent", (event) => {
            event.detail.toggleTevekenysegKesz();
            MODEL.toggleTevekenysegKesz(event.detail.index);
        });
        this.#customEventreFeliratkozas("torolGombraKattintottEvent", (event) => {
            MODEL.adatTorlese(event.detail.index);
            this.#megjelenit(TAROLO_ELEM, MODEL.lista);
        });
    }

    #customEventreFeliratkozas(eventNev, metodus)
    {
        $(window).on(eventNev, metodus);
    }

    #megjelenit(taroloElem, lista)
    {
        taroloElem.empty();
        new Megjelenit(taroloElem, lista);
    }
}

export default Controller;