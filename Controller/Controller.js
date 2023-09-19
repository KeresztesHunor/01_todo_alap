import Model from "../Model/Model.js";
import Megjelenit from "../View/MegjelenitView.js";
import Urlap from "../View/UrlapView.js";

class Controller
{
    constructor()
    {
        const TAROLO_ELEM = $(".tarolo");
        const UJ_ADAT_ELEM = $(".ujadat");
        const MODEL = new Model();
        new Megjelenit(TAROLO_ELEM, MODEL.lista);
        new Urlap(UJ_ADAT_ELEM);
        $(window).on("ujElemHozzaadasaEvent", event => {
            console.log(event.detail.tevekenyseg + "\n" + event.detail.hatarido);
            TAROLO_ELEM.empty();
            new Megjelenit(TAROLO_ELEM, event.detail);
        });
        $(window).on("keszGombraKattintott", event => {
            console.log(event.detail.sor);
            event.detail.sor.toggleClass("bg-success");
            MODEL.tevekenysegKeszKapcsolasa(event.detail.index);
        });
        $(window).on("torolGombraKattintott", event => {
            console.log(event.detail.sor);
            MODEL.adatTorlese(event.detail);
            TAROLO_ELEM.empty();
            new Megjelenit(TAROLO_ELEM, MODEL.lista);
        });
    }
}

export default Controller;