import { tagbeTageketIr, tagekKozeIr } from "../qualityOfLifeMetodusok.js";
import TablaSor from "./TablaSorView.js";

class Megjelenit
{
    constructor(szuloElem, lista)
    {
        szuloElem.append(
            tagekKozeIr("table", { class: "table mb-3" })
        );
        const TABLAZAT_ELEM = szuloElem.children("table");
        TABLAZAT_ELEM.append(
            tagbeTageketIr("tr", {}, [
                tagekKozeIr("th", {}, "Tevékenység"),
                tagekKozeIr("th", {}, "Határidő")
            ])
        );
        lista.forEach((elem, index) => {
            new TablaSor(TABLAZAT_ELEM, elem, index);
        });
    }
}

export default Megjelenit;