const colors = {
    p: 'green',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    padrao: '#616161',
    get(tag) {
        // equivalente a colors['string'] no caso string é a tagName
        return this[tag] ? this[tag] : this.padrao
    }
}

// seleciona elementos com classe tag
// percorre a NodeList com forEach

document.querySelectorAll('.tag').forEach(box => {
    // .tagName retorna uma string do nome da tag em MAISCULO daquele elemento
    // toLowerCase trasnforma em minuscula
    const tagName = box.tagName.toLowerCase()

    // aplica uma borda de cor única para cada tag, usando funcao definida dentro de colors
    box.style.borderColor = colors.get(tagName)

    // se o elemento box não tem em sua ClassList(lista de todas as classes) o elemento 'nolabel'
    if (!box.classList.contains('nolabel')) {
        // cria a label
        const label = document.createElement('label')

        // define o background como cinza 
        label.style.backgroundColor = colors.get(tagName)

        // insere a nome da tag no HTML 
        label.textContent = tagName

        //insere antes da referencia box.PrimeiroFilho, o label
        box.insertBefore(label, box.firstChild)
    }
})