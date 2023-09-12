class TablaSor
{
    #keszGomb;
    #torolGomb;

    constructor(szuloElem, elem)
    {
        let txt = "";
        for (const kulcs in elem)
        {
            txt += `<td class="border-2">${elem[kulcs]}</td>`
        }
        szuloElem.append(`
            <tr>
                ${txt}
                <td class="border-2">
                    <button class="kesz-gomb">✅</button>
                </td>
                <td class="border-2">
                    <button class="torol-gomb">❌</button>
                </td>
            </tr>
        `);
        this.sor = szuloElem.children("tr:last-child");
        this.#keszGomb = this.sor.children("td").children(".kesz-gomb");
        this.#torolGomb = this.sor.children("td").children(".torol-gomb");
        this.#keszGomb.on("click", () => this.#ujEsemeny("keszGombraKattintott"));
        this.#torolGomb.on("click", () => this.#ujEsemeny("torolGombraKattintott"));
    }

    #ujEsemeny(esemenyNev)
    {
        window.dispatchEvent(new CustomEvent(esemenyNev, { detail: this }));
    }
}

export default TablaSor;