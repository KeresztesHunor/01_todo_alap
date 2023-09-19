import { dictionaryElemeketIrKi, tagbeTageketIr, tagekKozeIr } from "../qualityOfLifeMetodusok.js";

class TablaSor
{
    //int

    #index;

    //HTML element

    #sor;

    constructor(szuloElem, elem, index)
    {
        this.#index = index;
        szuloElem.append(
            tagbeTageketIr("tr", { class: elem.kesz ? "bg-success" : "" }, [
                dictionaryElemeketIrKi(elem, (kulcs, ertek) => {
                    return tagekKozeIr("td", { class: "border-2" }, ertek)
                }),
                tagbeTageketIr("td", { class: "border-2" }, [
                    tagekKozeIr("button", { class: "kesz-gomb btn" }, "✅")
                ]),
                tagbeTageketIr("td", { class: "border-2" }, [
                    tagekKozeIr("button", { class: "torol-gomb btn" }, "❌")
                ])
            ])
        );
        this.#sor = szuloElem.children("tr:last-child");
        const TD_ELEM = this.#sor.children("td");
        const KESZ_GOMB = TD_ELEM.children(".kesz-gomb");
        const TOROL_GOMB = TD_ELEM.children(".torol-gomb");
        const EVENT = {
            detail: this
        }
        const KESZ_GOMBRA_KATTINTOTT_EVENT = new CustomEvent("keszGombraKattintottEvent", EVENT);
        const TOROL_GOMBRA_KATTINTOTT_EVENT = new CustomEvent("torolGombraKattintottEvent", EVENT);
        KESZ_GOMB.on("click", () => {
            window.dispatchEvent(KESZ_GOMBRA_KATTINTOTT_EVENT);
        });
        TOROL_GOMB.on("click", () => {
            window.dispatchEvent(TOROL_GOMBRA_KATTINTOTT_EVENT);
        });
    }

    get index()
    {
        return this.#index;
    }

    toggleTevekenysegKesz()
    {
        this.#sor.toggleClass("bg-success");
    }
}

export default TablaSor;