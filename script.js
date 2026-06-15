let cart = [];
let total = 0;

/* ADD TO CART */
function addCart(name, price){
cart.push({name, price});
total += price;

document.getElementById("total").innerText = total;
updateCart();
}

/* UPDATE CART */
function updateCart(){
let box = document.getElementById("cartItems");
box.innerHTML = "";

cart.forEach(item=>{
box.innerHTML += `<div>🍛 ${item.name} - ₹${item.price}</div>`;
});
}

/* FILTER */
function filterFood(type){
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
if(type==="all" || card.dataset.type===type){
card.style.display="block";
}else{
card.style.display="none";
}
});
}

/* SEARCH */
function searchFood(){
let val = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
let name = card.querySelector("h3").innerText.toLowerCase();
card.style.display = name.includes(val) ? "block":"none";
});
}

/* BILL */
function openBill(){
document.getElementById("bill").style.display="block";

let box = document.getElementById("billItems");
box.innerHTML="";

cart.forEach(item=>{
box.innerHTML += `<div>${item.name} - ₹${item.price}</div>`;
});

document.getElementById("billTotal").innerText = total;
}

/* ORDER */
function placeOrder(){
alert("🎉 Order Placed Successfully!");
cart=[];
total=0;

document.getElementById("cartItems").innerHTML="";
document.getElementById("total").innerText=0;
document.getElementById("bill").style.display="none";
}