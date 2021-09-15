import refs from './refs.js';

const { lsiWords, accessInput, accessUl, accessGenerateButton, accessWebsite } = refs;

function createNewUlByKey(e) {
  if (e.code === 'Enter' || e.code === '13') {
    createNewUl();
  } else {
    return;
  }
}
function createNewUl() {
  accessInput.addEventListener('change', createNewVariation1);
  accessInput.addEventListener('change', createNewVariation2);

  accessInput.addEventListener('change', createNewVariation3);

  accessInput.addEventListener('change', createNewVariation4);

  accessInput.addEventListener('change', createNewVariation5);

  accessInput.addEventListener('change', createNewVariation6);
}

accessWebsite.addEventListener('change', randomBrandName);
function getWebsite(e) {
  const website = e.target.value;
  const newBrandName = [
    `${website}`,
    `at ${website}`,
    `from ${website}`,
    `by ${website}`,
    `to ${website}`,
  ];
  return newBrandName;
}
function randomBrandName(e) {
  const newBrandName = getWebsite(e);
  const randomBrand = newBrandName[Math.floor(Math.random() * newBrandName.length)];
  console.log(randomBrand);
  return randomBrand;
}

function createNewVariation1(e) {
  accessUl.textContent = 'Results';

  const anchor = e.target.value;
  lsiWords.forEach(lsiWord => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrand = randomBrandName();
    const arrayElements = [`${anchor}`, `${randomLsi}`, `${randomBrand}`];
    console.log(arrayElements.join(', '));
    const combination = `${anchor} ${randomLsi} ${randomBrand}`;
    let newLi = document.createElement('li');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation2(e) {
  const anchor = e.target.value;
  lsiWords.forEach(lsiWord => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrand = randomBrandName();
    const combination = `${randomLsi} ${anchor} ${randomBrand}`;
    let newLi = document.createElement('li');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation3(e) {
  const anchor = e.target.value;
  lsiWords.forEach(lsiWord => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrand = randomBrandName();
    const combination = `${randomBrand} ${randomLsi} ${anchor}`;
    let newLi = document.createElement('li');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation4(e) {
  const anchor = e.target.value;
  lsiWords.forEach(lsiWord => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrand = randomBrandName();
    const combination = `${randomBrand} ${anchor} ${randomLsi}`;
    let newLi = document.createElement('li');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation5(e) {
  const anchor = e.target.value;
  lsiWords.forEach(lsiWord => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrand = randomBrandName();
    const combination = `${randomLsi} ${randomBrand} ${anchor}`;
    let newLi = document.createElement('li');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

function createNewVariation6(e) {
  const anchor = e.target.value;
  lsiWords.forEach(lsiWord => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrand = randomBrandName();
    const combination = `${anchor} ${randomBrand} ${randomLsi}`;
    let newLi = document.createElement('li');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

accessInput.addEventListener('keydown', createNewUlByKey);
accessGenerateButton.addEventListener('click', createNewUl);
