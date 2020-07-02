const productList = {
    "apple" : 1,
    "banana" : 2,
    "bread" : 3,
    "carrots" : 4,
    "eggs" : 5,
    "grapes" : 6,
    "lettuce" : 7,
    "orange" : 8,
    "pear" : 9,
    "strawberry" : 10,
    "tomato" : 11,
    "water" : 12,
}

const productKeys = Object.keys(productList)
const leftDiv = document.getElementById("left")

createCard = (name) => `
<div>
    <img src="media/${name}.png" alt="grocery image">
    <p>${name} price : ${productList[name]} </p>
</div>
`

productKeys.forEach((item)=>leftDiv.innerHTML += createCard(item))