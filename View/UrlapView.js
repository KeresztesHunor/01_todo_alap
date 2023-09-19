import { TODOLIST2 } from "../adatok.js";

class Urlap
{
    #tevekenysegInputElem;
    #hataridoInputElem;
    #submitGomb;

    constructor(szuloElem)
    {
        szuloElem.append(`
            <div>
                <label for="iTevekenyseg">Tevékenység megnevezése:</label>
                <input id="iTevekenyseg" type="text" placeholder="tevékenység" name="tevekenyseg">
                <label for="iHatarido">Határidő</label>
                <input id="iHatarido" type="date" placeholder="határidő" name="hatarido">
                <button>Submit</button>
            <div/>
        `);
        this.#tevekenysegInputElem = $("#iTevekenyseg");
        this.#hataridoInputElem = $("#iHatarido");
        this.#submitGomb = szuloElem.children("div:last-child").children("button");
        this.#submitGomb.on("click", () => {
            this.#adatotListabaIr(this.#tevekenysegInputElem.val(), this.#hataridoInputElem.val().replaceAll("-", "."));
            window.dispatchEvent(new CustomEvent("ujElemHozzaadasaEvent", { detail: TODOLIST2 }));
        });
    }

    #adatotListabaIr(tevekenyseg, hatarido)
    {
        TODOLIST2.push({
            tevekenyseg: tevekenyseg,
            hatarido: hatarido
        });
    }
}

export default Urlap;