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
            window.dispatchEvent(new CustomEvent("ujElemHozzaadasaEvent", {
                detail: {
                    tevekenyseg: this.#tevekenysegInputElem.val(),
                    hatarido: this.#hataridoInputElem.val().replaceAll("-", "."),
                    kesz: false
                }
            }));
        });
    }
}

export default Urlap;