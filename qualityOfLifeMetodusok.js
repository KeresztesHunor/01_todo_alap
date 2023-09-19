export function egyszerreTobbTagetIr(tagLista = [])
{
    let txt = "";
    tagLista.forEach(elem => txt += elem);
    return txt;
}

export function dictionaryElemeketIrKi(dict, metodus)
{
    let txt = "";
    for (const kulcs in dict)
    {
        txt += metodus(kulcs, dict[kulcs]);
    }
    return txt;
}

export function ujTagekKozeIr(tag, parameterek = {}, tartalom = "")
{
    return `<${tag}${parametereketKiir(parameterek)}>${tartalom}</${tag}>`;
}

export function paratlanTagetIr(tag, parameterek = {})
{
    return `<${tag}${parametereketKiir(parameterek)}>`;
}

function parametereketKiir(parameterek)
{
    return dictionaryElemeketIrKi(parameterek, (kulcs, ertek) => ` ${kulcs}="${ertek}"`);
}