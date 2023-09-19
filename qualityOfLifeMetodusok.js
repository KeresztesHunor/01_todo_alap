export function tagbeTageketIr(tag, parameterek = {}, tagLista = [])
{
    let txt = "";
    tagLista.forEach(elem => txt += elem);
    return tagekKozeIr(tag, parameterek, txt);
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

export function tagekKozeIr(tag, parameterek = {}, tartalom = "")
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