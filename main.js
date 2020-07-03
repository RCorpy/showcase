const productList = {
    "apple" : 1,
    "banana" : 2,
    "bread" : 3,
    "carrot" : 4,
    "egg" : 5,
    "grape" : 6,
    "lettuce" : 7,
    "orange" : 8,
    "pear" : 9,
    "strawberry" : 10,
    "tomato" : 11,
    "water" : 12,
}

const productKeys = Object.keys(productList)
const leftDiv = document.getElementById("left")
const billUl = document.getElementById("table")
const totalDiv = document.getElementsByClassName("total")[0]

let bill = {}

createCard = (name) => `
<div class="item">
    <img src="media/${name}.png" alt="grocery image" draggable='true' ondragstart='onDragStart(event)' id="${name}">
    <p>${name} price : ${productList[name]} </p>
</div>
`

printBill=()=>{
    billUl.innerHTML=``
    let total = 0
    let plural = ""
    for(let item in bill){
        bill[item]>1 ? plural='s' : plural = ""
        billUl.innerHTML+=`
        <tr>
            <td>${bill[item]}x</td>
            <td>${item}${plural}</td>
            <td>${bill[item]*productList[item]}€</td>
        </tr>
        `
        total += bill[item]*productList[item]
    }
    totalDiv.innerHTML= `Total: ${total}€`
}

onDragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id)
    console.log(event.target.id)
}

onDragOver = (event) => {
    event.preventDefault();
  }

onDrop = (event) => {
    let item = event.dataTransfer.getData('text')
    bill[item] ? bill[item]+=1 : bill[item] = 1
    printBill()
}

productKeys.forEach((item)=>leftDiv.innerHTML += createCard(item))