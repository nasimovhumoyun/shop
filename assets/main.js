let accaunt = document.querySelector(".accaunt")
let shop = document.querySelector(".shop")
let login = document.querySelector(".login")
let basket = document.querySelector(".basket") 
let modal1 = document.querySelector(".modal1")
let modal2 = document.querySelector(".modal2")
let icbasket = document.querySelector("#basket")
accaunt.addEventListener("click",()=>{
    modal1.style.cssText = `
    top: 0px;
    left: 0px; 
    transition: 1s;
    `
    login.style.cssText = `
    top: 100px;
    left: 350px; 
    transition: 1s;
    `

})
shop.addEventListener("click",()=>{
    modal2.style.cssText = `
    top: 0px;
    right: 0px;
    transition: 1s;
    `
    basket.style.cssText = `
    top:0;
    right: 0px;
    transition: 1s;
    `
})
modal1.addEventListener("click",()=>{
    modal1.style.cssText = `
    top: -90vh;
    left: 0px; 
    transition: 1s;
    `
    login.style.cssText = `
    top: -300px;
    left: 350px; 
    transition: 1s;
    `

})
modal2.addEventListener("click",()=>{
    modal2.style.cssText = `
    top:0;
    right: -100%;
    transition: 1s;
    `
    basket.style.cssText = `
    top: 0px;
    right: -500px;
    transition: 1s;
    `
})
icbasket.addEventListener("click",()=>{
    icbasket.style.color = "rgb(0, 119, 255) ";
})