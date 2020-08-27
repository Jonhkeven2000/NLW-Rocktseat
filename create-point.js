
function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (state of states) {
                ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

            }

        })
}

populateUFs()

function getCities(event) {
    const citySelect = document
    .querySelector("select[name=city]")
    const stateinput = document
    .querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOFSelectdState = event.target.selectedIndex
    stateinput.value = event.target.options[indexOFSelectdState]




    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios `

    fetch(url)
        .then(res => res.json())
        .then(cities => {



            for (city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

            }

            citySelect.disabled = false

        })
}
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)




const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("clik", handleSelectedItems)

}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [1, 2, 3, 4, 5, 6]

function handleSelectedItems(event) {
    //   adicionar ou remover uma classe com javascript 
    const itemLi = event.target

    itemli.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se existe itens selecionados
    // se sim, pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(function(item) {
        const itemFound = item == itemId //isso será true ou false
        return itemFound
    })

}

// se ja estiver selecionado 

if(alreadySelected >= 0) {
// tirar da seleção
const filteredItems = selectedItems.filter(item => {
    const itemIsDifferent = item != itemId
    return false 
})

selectedItems = filteredItems

} else {
    // se não estiver selecionado
    
    //  adicionar a  seleção
    selectedItems.push(itemId)
}

// atualizar o campo escondido com os items




