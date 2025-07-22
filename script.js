
let cardGameDiv=document.getElementById("cardGame")
console.log(cardGameDiv,"ss");
let gridCards=document.createElement("div")
gridCards.setAttribute("class", "grid lg:grid-cols-4 grid-cols-3 gap-5 flex-grow px-10")
gridCards.innerHTML +=`
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
    <div class="card card-body"></div>
`
cardGameDiv.append(gridCards)