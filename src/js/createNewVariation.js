import refs from './refs.js';

const {
  keywords,
  lsiWords,
  brandName,
  accessInput,
  accessUl,
  accessSelectedWebsite,
  accessGenerateButton,
} = refs;
function saveSelectedWebsite() {
  localStorage.setItem('selected:', `${accessSelectedWebsite}`);
}

const checkSavedWebsite = saveSelectedWebsite();
function setUpSavedWebsite() {
  localStorage.removeItem('selected:');
  localStorage.setItem(checkSavedWebsite);
}
function createNewUlByKey(e) {
  if (e.code === 'Enter' || e.code === '13') {
    createNewUl();
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

function createNewVariation1(e) {
  accessUl.textContent = 'Results';

  const anchor = e.target.value;
  lsiWords.forEach(lsiWord => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrandName = brandName[Math.floor(Math.random() * brandName.length)];
    const combination = `${anchor} ${randomLsi} ${randomBrandName}`;
    console.log(combination);
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
    const randomBrandName = brandName[Math.floor(Math.random() * brandName.length)];
    const combination = `${randomLsi} ${anchor} ${randomBrandName}`;
    console.log(combination);
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
    const randomBrandName = brandName[Math.floor(Math.random() * brandName.length)];
    const combination = `${randomBrandName} ${randomLsi} ${anchor}`;
    console.log(combination);
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
    const randomBrandName = brandName[Math.floor(Math.random() * brandName.length)];
    const combination = `${randomBrandName} ${anchor} ${randomLsi}`;
    console.log(combination);
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
    const randomBrandName = brandName[Math.floor(Math.random() * brandName.length)];
    const combination = `${randomLsi} ${randomBrandName} ${anchor}`;
    console.log(combination);
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
    const randomBrandName = brandName[Math.floor(Math.random() * brandName.length)];
    const combination = `${anchor} ${randomBrandName} ${randomLsi}`;
    console.log(combination);
    let newLi = document.createElement('li');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

accessInput.addEventListener('keydown', createNewUl);
accessGenerateButton.addEventListener('click', createNewUl);
