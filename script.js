const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$ 99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$ 275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$ 160,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price:"R$ 1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price:"R$ 870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price:"R$ 510,00",
    type: "Action Figures",
  },
];

let actionFiguresArray = []
let paintingsArray = []

function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type == "Paintings") {
      paintingsArray.push(productsArray[i]);
    }
    else if (productsArray[i].type == "Action Figures") {
      actionFiguresArray.push(productsArray[i]);
    }
  }
}


function cardForActionFigures() {
  for (let i = 0; i < actionFiguresArray.length; i++) {
      let list1 = actionFiguresArray[i];

      let card = document.createElement("div");
      card.setAttribute("class", "card-div")

      let img = document.createElement("img")
      img.src = list1.image
      img.alt = list1.name

      let name = document.createElement("h3")
      name.innerHTML = list1.name
      name.classList.add("title-action")

      let price = document.createElement("p")
      price.innerHTML = list1.price

      let li = document.createElement("li")

      card.appendChild(img)
      card.appendChild(name)
      card.appendChild(price)
      li.appendChild(card)
      
      let cardsActionFigures = document.querySelector(".cardsActionFigures")
      cardsActionFigures.appendChild(li)
  }
}

function cardForPaintings() {
  
  let cardsPaintings = document.querySelector(".cardsPaintings")
  
  for (let i = 0; i < paintingsArray.length; i++) {
    let list1 = paintingsArray[i];
    let li = document.createElement("li")
    let card = document.createElement("div");
    card.setAttribute('class', 'card-div')
    
        let img = document.createElement("img")
        img.src = list1.image
        img.alt = list1.name
        
        let name = document.createElement("h3")
        name.innerHTML = list1.name
        name.classList.add("title-paintings")
        
        let price = document.createElement("p")
        price.innerHTML = list1.price
        
        
        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(price)
        li.appendChild(card)
        cardsPaintings.appendChild(li)   
  }
}

separateItems(productsArray)
cardForPaintings()
cardForActionFigures()