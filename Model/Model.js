import { TODOLIST2 } from "../adatok.js";

class Model
{
    #lista;

    constructor()
    {
        this.#lista = TODOLIST2;
    }

    get lista()
    {
        return this.#lista;
    }

    ujAdat(adat)
    {
        this.#lista.push(adat);
    }

    adatTorlese(index)
    {
        this.#lista.splice(index, 1);
    }

    toggleTevekenysegKesz(index)
    {
        this.#lista[index].kesz = !this.#lista[index].kesz;
    }
}

export default Model;