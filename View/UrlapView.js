import { tagekKozeIr, paratlanTagetIr, tagbeTageketIr } from "../qualityOfLifeMetodusok.js";

class Urlap
{
    constructor(szuloElem)
    {
        szuloElem.append(
            tagbeTageketIr("div", {}, [
                tagekKozeIr("label", { for: "iTevekenyseg" }, "Tevékenység megnevezése:"),
                paratlanTagetIr("input", { id: "iTevekenyseg", type: "text", placeholder: "Tevékenység", name: "tevekenyseg" }),
                tagekKozeIr("label", { for: "iHatarido" }, "Határidő"),
                paratlanTagetIr("input", { id: "iHatarido", type: "date", placeholder: "Határidő", name: "hatarido" }),
                tagekKozeIr("button", { class: "btn btn-success" }, "Submit")
            ])
        );
        const TEVEKENYSEG_INPUT_ELEM = $("#iTevekenyseg");
        const HATARIDO_INPUT_ELEM = $("#iHatarido");
        const SUBMIT_GOMB = szuloElem.children("div:last-child").children("button");
        SUBMIT_GOMB.on("click", () => {
            window.dispatchEvent(new CustomEvent("ujElemHozzaadasaEvent", {
                detail: {
                    tevekenyseg: TEVEKENYSEG_INPUT_ELEM.val(),
                    hatarido: HATARIDO_INPUT_ELEM.val().replaceAll("-", "."),
                    kesz: false
                }
            }));
        });
    }
}

export default Urlap;