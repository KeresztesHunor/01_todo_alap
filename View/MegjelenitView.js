import { egyszerreTobbTagetIr, ujTagekKozeIr } from "../qualityOfLifeMetodusok.js";
import TablaSor from "./TablaSorView.js";

class Megjelenit
{
    constructor(szuloElem, lista)
    {
        szuloElem.append(ujTagekKozeIr("table", { class: "table mb-3" }));
        const TABLAZAT_ELEM = szuloElem.children("table");
        TABLAZAT_ELEM.append(ujTagekKozeIr("tr", {}, egyszerreTobbTagetIr([
            ujTagekKozeIr("th", {}, "Tevékenység"),
            ujTagekKozeIr("th", {}, "Határidő")
        ])));
        lista.forEach((elem, index) => {
            new TablaSor(TABLAZAT_ELEM, elem, index);
        });
    }
}

export default Megjelenit;