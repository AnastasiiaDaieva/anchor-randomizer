import refs from "./js/refs.js";

const { keywords, lsiWords, brandNames, accessInput, accessUl } = refs;

// const keyword = keywords[Math.floor(Math.random() * keywords.length)];

// const finalPhrase1 = `${keyword} ${lsiWord} ${brandName}`;
// const finalPhrase2 = `${lsiWord} ${keyword} ${brandName}`;
// const finalPhrase3 = `${brandName} ${lsiWord} ${keyword}`;
// const finalPhrase4 = `${brandName} ${keyword} ${lsiWord}`;
// const finalPhrase5 = `${lsiWord} ${brandName} ${keyword}`;
// const finalPhrase6 = `${keyword} ${brandName} ${lsiWord}`;

// const accessToList = document.querySelector(".options");

// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// const li4 = document.createElement("li");
// const li5 = document.createElement("li");
// const li6 = document.createElement("li");

// const accessToLi1 = document.querySelector(".option-one");
// const accessToLi2 = document.querySelector(".option-two");
// const accessToLi3 = document.querySelector(".option-three");
// const accessToLi4 = document.querySelector(".option-four");
// const accessToLi5 = document.querySelector(".option-five");
// const accessToLi6 = document.querySelector(".option-six");

// accessToLi1.textContent = finalPhrase1;
// accessToLi2.textContent = finalPhrase2;
// accessToLi3.textContent = finalPhrase3;
// accessToLi4.textContent = finalPhrase4;
// accessToLi5.textContent = finalPhrase5;
// accessToLi6.textContent = finalPhrase6;

// accessToList.appendChild(
//   accessToLi1,
//   accessToLi2,
//   accessToLi3,
//   accessToLi4,
//   accessToLi5,
//   accessToLi6
// );

function createNewUl(e) {
  if (e.code === "Enter") {
    accessInput.addEventListener("change", createNewVariation1);
    accessInput.addEventListener("change", createNewVariation2);

    accessInput.addEventListener("change", createNewVariation3);

    accessInput.addEventListener("change", createNewVariation4);

    accessInput.addEventListener("change", createNewVariation5);

    accessInput.addEventListener("change", createNewVariation6);
  }
}

function createNewVariation1(e) {
  const anchor = e.target.value;
  lsiWords.forEach((lsiWord) => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrandName =
      brandNames[Math.floor(Math.random() * brandNames.length)];
    const combination = `${anchor} ${randomLsi} ${randomBrandName}`;
    console.log(combination);
    let newLi = document.createElement("li");
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation2(e) {
  const anchor = e.target.value;
  lsiWords.forEach((lsiWord) => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrandName =
      brandNames[Math.floor(Math.random() * brandNames.length)];
    const combination = `${randomLsi} ${anchor} ${randomBrandName}`;
    console.log(combination);
    let newLi = document.createElement("li");
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation3(e) {
  const anchor = e.target.value;
  lsiWords.forEach((lsiWord) => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrandName =
      brandNames[Math.floor(Math.random() * brandNames.length)];
    const combination = `${randomBrandName} ${randomLsi} ${anchor}`;
    console.log(combination);
    let newLi = document.createElement("li");
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation4(e) {
  const anchor = e.target.value;
  lsiWords.forEach((lsiWord) => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrandName =
      brandNames[Math.floor(Math.random() * brandNames.length)];
    const combination = `${randomBrandName} ${anchor} ${randomLsi}`;
    console.log(combination);
    let newLi = document.createElement("li");
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation5(e) {
  const anchor = e.target.value;
  lsiWords.forEach((lsiWord) => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrandName =
      brandNames[Math.floor(Math.random() * brandNames.length)];
    const combination = `${randomLsi} ${randomBrandName} ${anchor}`;
    console.log(combination);
    let newLi = document.createElement("li");
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation6(e) {
  const anchor = e.target.value;
  lsiWords.forEach((lsiWord) => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrandName =
      brandNames[Math.floor(Math.random() * brandNames.length)];
    const combination = `${anchor} ${randomBrandName} ${randomLsi}`;
    console.log(combination);
    let newLi = document.createElement("li");
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

accessInput.addEventListener("keydown", createNewUl);
