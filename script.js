// botões HTML
const buttonShowAll = document.querySelector(".show-all");
const buttonMap = document.querySelector(".map");
const buttonSumAll = document.querySelector(".sum-all");
const buttonFilter = document.querySelector(".filter");

const resultSearch = document.querySelector(".search");

// lista
let list = document.querySelector("ul");
let myLi = ""

// Formatação para moeda (R$)
function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })

    return newValue
}

// Mostrar tudo - ForEach
function showAll(productsArray) {
    productsArray.forEach(product => {
        myLi += `
            <li class="li">
                <img src="${product.src}" alt="">
                <p>${product.name}</p>
                <p class="price">${formatCurrency(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
    myLi = ""

    resultSearch.innerHTML = "Nosso cardápio completo:"
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))

// Mapear - Map
function mapProducts() {
    const newPrices = menuOptions.map(product => ({
        ...product, // Spread Operator
        price: product.price * 0.9 // 10% de desconto
    }))

    showAll(newPrices)

    resultSearch.innerHTML = "Aplicados com 10% de desconto."
}

buttonMap.addEventListener("click", mapProducts)

// Somar tudo - Reduce
function sumAllProducts() {
    const sumAll = menuOptions.reduce((acc, product) => acc + product.price, 0)

    list.innerHTML = 
    `
        <li class="result">
            <p><b>Valor total:</b> ${formatCurrency(sumAll)}</p>
        </li>
    `

    resultSearch.innerHTML = "Todo nosso cardápio:"
}

buttonSumAll.addEventListener("click", sumAllProducts)

// Filtrar - Filter
function filterProducts() {
    const filteredProducts = menuOptions.filter( product => {
        if (product.vegan === true) {
            myLi += `
            <li class="li">
                <img src="${product.src}" alt="">
                <p>${product.name}</p>
                <p class="price">${formatCurrency(product.price)}</p>
            </li>
        `
        } else {
            myLi = ""
        }
    })

    showAll(filteredProducts)

    resultSearch.innerHTML = "Filtramos os lanches veganos:"
}

buttonFilter.addEventListener("click", filterProducts)































