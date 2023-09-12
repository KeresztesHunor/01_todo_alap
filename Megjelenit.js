import TablaSor from "./TablaSor.js";

class Megjelenit
{
    constructor(szuloElem, lista)
    {
        const SZULO_ELEM = $(szuloElem);
        SZULO_ELEM.append("<table class='table mb-3'></table>");
        const TABLAZAT_ELEM = SZULO_ELEM.children("table");
        TABLAZAT_ELEM.append(`
            <tr>
                <th>Tevékenység</th>
                <th>Határidő</th>
            </tr>
        `);
        lista.forEach(elem => new TablaSor(TABLAZAT_ELEM, elem));
        $(window).on("keszGombraKattintott", event => {
            console.log(event.detail.sor);
            event.detail.sor.css("background-color", "green");
        });
        $(window).on("torolGombraKattintott", event => {
            console.log(event.detail.sor);
            event.detail.sor.remove();
        });
    }
}

export default Megjelenit;