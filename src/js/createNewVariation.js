import refs from './refs.js';

const { keywords, lsiWords, brandName, accessInput, accessUl } = refs;

function createNewUlByKey(e) {
  if (e.code === 'Enter' || e.code === '13') {
    allVariations(e);
    addPicture();
  }
}

function createPicture() {
  return `<img class="devil" src="https://cdn1.flamp.ru/7f8ab1a043a092dc9b8251a21ce5ce95.png" alt="" width="300" height="300" />`;
}

function addPicture() {
  const createdPicture = createPicture();
  console.log(createdPicture);
  accessUl.insertAdjacentHTML('beforeend', `${createdPicture}`);
}

function createNewUlByClick(e) {
  accessUl.innerHTML = '';
  allVariations(e);

  addPicture();
}

function allVariations(e) {
  createNewVariation1(e);
  createNewVariation2(e);
  createNewVariation3(e);
  createNewVariation4(e);
  createNewVariation5(e);
  createNewVariation6(e);
}

function createNewVariation1(e) {
  accessUl.textContent = 'Results';
  accessUl.style.fontSize = '30px';

  const anchor = e.target.value;
  lsiWords.forEach(lsiWord => {
    const randomLsi = lsiWords[Math.floor(Math.random() * lsiWords.length)];
    const randomBrandName = brandName[Math.floor(Math.random() * brandName.length)];
    const combination = `${anchor} ${randomLsi} ${randomBrandName}`;
    let newLi = document.createElement('li');
    newLi.classList.add('newAnchor');
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
    let newLi = document.createElement('li');
    newLi.classList.add('newAnchor');
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
    let newLi = document.createElement('li');
    newLi.classList.add('newAnchor');
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
    let newLi = document.createElement('li');
    newLi.classList.add('newAnchor');
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
    let newLi = document.createElement('li');
    newLi.classList.add('newAnchor');
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
    let newLi = document.createElement('li');
    newLi.classList.add('newAnchor');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

accessInput.addEventListener('keydown', createNewUlByKey);
// accessGenerateButton.addEventListener('click', createNewUlByClick);
