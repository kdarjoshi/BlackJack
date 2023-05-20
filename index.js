
let cards = []
let isalive = false
let isblackjack = false
let sum = 0
let message=""
let messageEl = document.querySelector("#messageel")
let sumEl = document.querySelector("#sumel")
let cardEl = document.querySelector("#cardel")
console.log(cards)
function startGame(){
    player.sayHello()
    if(cards.length===0){
        isalive = true
        let firstCard = getRandomCard()
        cards.push(firstCard)
        let secondCard = getRandomCard()
        cards.push(secondCard)
        sum = firstCard + secondCard
        renderGame()
    }
    else{
        console.log("You have already started the game!!")
    }
}
function renderGame(){
    cardEl.textContent = "Cards: "
    // cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    for(let i=0;i<cards.length;i++)
        cardEl.textContent+=cards[i] +" "
    sumEl.textContent = "Sum: " + sum
    if(sum>21){
        message = "Sorry! You are out of the Game!"
        isalive = false
    }
    else if(sum===21){
        message = "Bravo!! It's a BlackJack!!"
        isblackjack = true
    }
    else{
        message = "Do u want to draw a card?"

    }
    messageEl.textContent = message
}

function newCard() {
    if(isalive && isblackjack===false){
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {
    let randomnumber = Math.floor(Math.random()*13+1)
    if(randomnumber===1)
        return 11
    else if(randomnumber>10)
        return 10
    return randomnumber
}
let player = {
    name: "kdar",
    score: "$20",
    sayHello: function(){
        console.log("Hello HI Namaskara!!")
    }
}

let playername = "Kdar"
let playerscore = "$10"
let playerel = document.querySelector("#player")
playerel.textContent = player.name +": "+ player.score
// let messages = ["hello","Hi","Whatsapp","Instagram","Facebook"]
// for(let i=0;i<messages.length;i++)
//     console.log(messages[i])

// let getdummy = document.querySelector("#dummy")
// for(let i=0;i<messages.length;i++)
//     getdummy.textContent += messages[i]

// let maxval = getMax()
// function getMax(){
//     if(firstCard > secondCard)
//         console.log(firstCard)
//     else if(firstCard < secondCard)
//         return secondCard
//     else
//         return firstCard
// }

// console.log(maxval)
// let person = {
//     name: "kdarjoshi",
//     age: 20,
//     country: "India"
// }

// function logdata(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }
// logdata()
// let country = ["India","Srilanka","USA","UK"]
// function callrand(){
//     let num = Math.floor(Math.random() * 4)
//     console.log(country[num])
// }
// callrand()

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
function fighter(){
    let emone = Math.floor(Math.random() * fighters.length)
    let emtwo = Math.floor(Math.random() * fighters.length)
    document.querySelector("#emoji").textContent = fighters[emone] + " vs " + fighters[emtwo]
}