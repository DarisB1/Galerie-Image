const body = document.querySelector("body");
const box = document.querySelector("#box");

const db = [
  {
    name: "chat",
    url: "chat.webp",
    alt: "chat brun",
    date: "02-08-2023",
  },
  {
    name: "chien",
    url: "chien.jpg",
    alt: "chien brun",
    date: "20-04-2023",
  },
  {
    name: "gecko",
    url: "leopard.jpg",
    alt: "gecko tacheté léopard",
    date: "12-12-2012",
  },
];

function Images() {
  for (let i = 0; i < db.length; i++) {
    const div = document.createElement("div");
    box.appendChild(div);
    div.innerHTML = `
    <h1>${db[i].name}</h1>
    <img src="${db[i].url}" alt="${db[i].alt}">
    <p>${db[i].date}</p>
    `;
  }
}

const inputName = document.querySelector("#inputName");
const inputUrl = document.querySelector("#inputUrl");
const inputAlt = document.querySelector("#inputAlt");
const inputDate = document.querySelector("#inputDate");
const inputBtn = document.querySelector("#inputBtn");

function lastIndex() {
    const div = document.createElement("div");
    div.className = "imagesBox";
    box.appendChild(div);
    const dbReverse = db.reverse();
    console.log(db);
    div.innerHTML = `
      <h1>${db[0].name}</h1>
      <img src="${db[0].url}" alt="${db[0].alt}">
      <p>${db[0].date}</p>
      `;
  }

inputBtn.addEventListener("click", () => {
  db.push({
    name: inputName.value,
    url: inputUrl.value,
    alt: inputAlt.value,
    date: inputDate.value,
  });
  console.log(db);
  lastIndex()
});

Images();



// a voir mercredi aprem
// function Images() {
//     const div = document.createElement("div");
//     body.appendChild(div);
//     let contenu;
//   for (let i = 0; i < db.length; i++) {

//     contenu = `
//     <h1>${db[i].name}</h1>
//     <img src="${db[i].url}" alt="${db[i].alt}">
//     <p>${db[i].date}</p>
//     `;
//   }
//   div.innerHTML = contenu
// }

// const inputName = document.querySelector("#inputName");
// const inputUrl = document.querySelector("#inputUrl");
// const inputAlt = document.querySelector("#inputAlt");
// const inputBtn = document.querySelector("#inputBtn");

// inputBtn.addEventListener("click", () => {
//   db.push({
//     name: inputName.value,
//     url: inputUrl.value,
//     alt: inputAlt.value,
//   });
//   console.log(db);

//   Images();
// });

// Images();
