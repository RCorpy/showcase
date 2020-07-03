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
<div class="item">
    <img src="media/${name}.png" alt="grocery image" draggable='true' ondragstart='onDragStart(event)' id="${name}">
    <p>${name} price : ${productList[name]} </p>
</div>
`

onDragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id)
    console.log(event.target.id)
}

onDragOver = (event) => {
    event.preventDefault();
  }

onDrop = (event) => {
    console.log(event.dataTransfer.getData('text')+" dropped")
}
productKeys.forEach((item)=>leftDiv.innerHTML += createCard(item))