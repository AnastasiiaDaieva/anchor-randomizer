import refs from './refs.js';

const { keywords, lsiWords, brandName, accessInput, accessUl, accessGenerateButton } = refs;

function createNewUlByKey(e) {
  if (e.code === 'Enter' || e.code === '13') {
    createNewUl();
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

function createNewUl() {
  accessUl.innerHTML = '';
  accessInput.addEventListener('change', createNewVariation1);
  accessInput.addEventListener('change', createNewVariation2);

  accessInput.addEventListener('change', createNewVariation3);

  accessInput.addEventListener('change', createNewVariation4);

  accessInput.addEventListener('change', createNewVariation5);

  accessInput.addEventListener('paste', createNewVariation6);
  accessInput.addEventListener('paste', createNewVariation1);
  accessInput.addEventListener('paste', createNewVariation2);

  accessInput.addEventListener('paste', createNewVariation3);

  accessInput.addEventListener('paste', createNewVariation4);

  accessInput.addEventListener('paste', createNewVariation5);

  accessInput.addEventListener('paste', createNewVariation6);
  accessInput.addEventListener('change', addPicture);
  accessInput.addEventListener('paste', addPicture);
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
accessGenerateButton.addEventListener('click', createNewUl);
