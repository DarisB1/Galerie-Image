import { db } from "/images.js";

const body = document.querySelector("body");
const box = document.querySelector("#box");

function Galerie() {
    const ul = document.createElement('ul');
    ul.className = "allImg";
    for (let i = 0; i < db.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${db[i].url}" alt="${db[i].id}">
        `;
        ul.appendChild(li);
    }
    box.appendChild(ul);
}

Galerie();

const tous = document.getElementById('tous');
const sport = document.getElementById("sport");
const animaux = document.getElementById("animaux");
const nature = document.getElementById("nature");
const ville = document.getElementById("ville");

tous.addEventListener("click", () => {
    box.innerHTML = "";
    const ul = document.createElement('ul');
    ul.className = "allImg"; 
    for (let i = 0; i < db.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${db[i].url}" alt="${db[i].id}">
        `;
        ul.appendChild(li);    
    }
    box.appendChild(ul);
});

sport.addEventListener("click", () => {
    let T = [];
    for (let i = 0; i < db.length; i++) {
        if (db[i].category === "sport") {
            T.push(db[i]);
        }
    }
    box.innerHTML = "";
    const ul = document.createElement('ul');
    ul.className = "allImg";
    for (let i = 0; i < T.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${T[i].url}" alt="${T[i].id}">
        `;
        ul.appendChild(li);    
    }
    box.appendChild(ul);
});

animaux.addEventListener("click", () => {
    let T = [];
    for (let i = 0; i < db.length; i++) {
        if (db[i].category === "animal") {
            T.push(db[i]);
        }
    }
    box.innerHTML = "";
    const ul = document.createElement('ul');
    ul.className = "allImg";
    for (let i = 0; i < T.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${T[i].url}" alt="${T[i].id}">
        `;
        ul.appendChild(li);    
    }
    box.appendChild(ul);
});

nature.addEventListener("click", () => {
    let T = [];
    for (let i = 0; i < db.length; i++) {
        if (db[i].category === "nature") {
            T.push(db[i]);
        }
    }
    box.innerHTML = "";
    const ul = document.createElement('ul');
    ul.className = "allImg";  
    for (let i = 0; i < T.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${T[i].url}" alt="${T[i].id}">
        `;
        ul.appendChild(li);    
    }
    box.appendChild(ul);
});

ville.addEventListener("click", () => {
    let T = [];
    for (let i = 0; i < db.length; i++) {
        if (db[i].category === "city") {
            T.push(db[i]);
        }
    }
    box.innerHTML = "";
    const ul = document.createElement('ul');
    ul.className = "allImg";  
    for (let i = 0; i < T.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${T[i].url}" alt="${T[i].id}">
        `;
        ul.appendChild(li);    
    }
    box.appendChild(ul);
});

allImg.addEventListener("click", ()=>{
  console.log(ok);
})