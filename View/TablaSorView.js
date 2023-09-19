class TablaSor
{
    #keszGomb;
    #torolGomb;
    #index;
    #sor;
    #keszGombraKattintottEvent;
    #torolGombraKattintottEvent;

    constructor(szuloElem, elem, index)
    {
        this.#index = index;
        let txt = "";
        for (const kulcs in elem)
        {
            txt += `<td class="border-2">${elem[kulcs]}</td>`
        }
        szuloElem.append(`
            <tr class="${elem.kesz ? "bg-success" : ""}">
                ${txt}
                <td class="border-2">
                    <button class="kesz-gomb btn">✅</button>
                </td>
                <td class="border-2">
                    <button class="torol-gomb btn">❌</button>
                </td>
            </tr>
        `);
        this.#sor = szuloElem.children("tr:last-child");
        this.#keszGomb = this.#sor.children("td").children(".kesz-gomb");
        this.#torolGomb = this.#sor.children("td").children(".torol-gomb");
        const EVENT = {
            detail: this
        }
        this.#keszGombraKattintottEvent = new CustomEvent("keszGombraKattintottEvent", EVENT);
        this.#torolGombraKattintottEvent = new CustomEvent("torolGombraKattintottEvent", EVENT);
        this.#keszGomb.on("click", () => {
            window.dispatchEvent(this.#keszGombraKattintottEvent);
        });
        this.#torolGomb.on("click", () => {
            window.dispatchEvent(this.#torolGombraKattintottEvent);
        });
    }

    get index()
    {
        return this.#index;
    }

    get sor()
    {
        return this.#sor;
    }
}

export default TablaSor;