import Model from "../Model/Model.js";
import Megjelenit from "../View/MegjelenitView.js";
import Urlap from "../View/UrlapView.js";

class Controller
{
    constructor()
    {
        const UJ_ADAT_ELEM = $(".ujadat");
        new Urlap(UJ_ADAT_ELEM);
        const TAROLO_ELEM = $(".tarolo");
        const MODEL = new Model();
        new Megjelenit(TAROLO_ELEM, MODEL.lista);
        $(window).on("ujElemHozzaadasaEvent", (event) => {
            MODEL.ujAdat(event.detail);
            TAROLO_ELEM.empty();
            new Megjelenit(TAROLO_ELEM, MODEL.lista);
        });
        $(window).on("keszGombraKattintottEvent", (event) => {
            event.detail.sor.toggleClass("bg-success");
            MODEL.toggleTevekenysegKesz(event.detail.index);
        });
        $(window).on("torolGombraKattintottEvent", (event) => {
            MODEL.adatTorlese(event.detail.index);
            TAROLO_ELEM.empty();
            new Megjelenit(TAROLO_ELEM, MODEL.lista);
        });
    }
}

export default Controller;