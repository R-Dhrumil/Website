const root = document.querySelector(":root");
const violet = document.querySelector(".violet");
const sofa = document.getElementById("sofa");
const green = document.querySelector(".green");

violet.addEventListener('click' , ()=>{
    root.style.setProperty('--background2', '#b692de');
    root.style.setProperty('--background1', '#cdb0ea');
    sofa.src = "sofa3.png";
});

green.addEventListener('click', ()=>{
    root.style.setProperty('--background2', '#606d5e');
    root.style.setProperty('--background1', '#9aa096');
    sofa.src = "sofa2.png";
})