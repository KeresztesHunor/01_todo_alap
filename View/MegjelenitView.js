import TablaSor from "./TablaSorView.js";

class Megjelenit
{
    constructor(szuloElem, lista)
    {
        szuloElem.append("<table class='table mb-3'></table>");
        const TABLAZAT_ELEM = szuloElem.children("table");
        TABLAZAT_ELEM.append(`
            <tr>
                <th>Tevékenység</th>
                <th>Határidő</th>
            </tr>
        `);
        lista.forEach((elem, index) => {
            new TablaSor(TABLAZAT_ELEM, elem, index);
        });
    }
}

export default Megjelenit;