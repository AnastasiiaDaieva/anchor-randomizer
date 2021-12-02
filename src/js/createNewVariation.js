import refs from './refs.js';

const {
  keywords,
  lsiWords,
  accessInput,
  accessUl,
  accessGenerateButton,
  accessKeywordField,
  accessLsiField,
  accessWebsiteField,
  accessForm,
} = refs;

accessForm.addEventListener('submit', cb);

let dataFromForm = {
  keyword: '',
  lsi: [],
  website: '',
};
let typedLsi = [];

function cb(e) {
  e.preventDefault();
  const typedKeyword = e.target.elements.keyword.value;
  typedLsi = e.target.elements.LSI.value;
  const typedWebsiteName = e.target.elements.website.value;

  dataFromForm.lsi.push(typedLsi);
  dataFromForm.keyword = typedKeyword;
  dataFromForm.website = typedWebsiteName;
  dataFromForm['brandOption'] = [
    `${dataFromForm.website}`,
    `at ${dataFromForm.website}`,
    `from ${dataFromForm.website}`,
    `by ${dataFromForm.website}`,
    `to ${dataFromForm.website}`,
    `with ${dataFromForm.website}`,
  ];
  console.log(e.target.elements);
  console.log(dataFromForm);
  createNewVariation1(dataFromForm);
}

function assignValues(data) {}

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

  // const anchor = e.target.value;
  const { keyword, lsi, website, brandOption } = dataFromForm;

  lsi.map(lsiWord => {
    const randomLsi = lsi[Math.floor(Math.random() * lsi.length)];
    const randomBrandOption = brandOption[Math.floor(Math.random() * brandOption.length)];
    const combination = `${keyword} ${randomLsi} ${randomBrandOption}`;
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
    const randomBrandOption = brandOption[Math.floor(Math.random() * brandOption.length)];
    const combination = `${randomLsi} ${anchor} ${randomBrandOption}`;
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
    const randomBrandOption = brandOption[Math.floor(Math.random() * brandOption.length)];
    const combination = `${randomBrandOption} ${randomLsi} ${anchor}`;
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
    const randomBrandOption = brandOption[Math.floor(Math.random() * brandOption.length)];
    const combination = `${randomBrandOption} ${anchor} ${randomLsi}`;
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
    const randomBrandOption = brandOption[Math.floor(Math.random() * brandOption.length)];
    const combination = `${randomLsi} ${randomBrandOption} ${anchor}`;
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
    const randomBrandOption = brandOption[Math.floor(Math.random() * brandOption.length)];
    const combination = `${anchor} ${randomBrandOption} ${randomLsi}`;
    let newLi = document.createElement('li');
    newLi.classList.add('newAnchor');
    // let newText = combination.Math.floor(Math.random() * Math.floor(3)) - 1;
    newLi.textContent = `${combination}`;
    accessUl.appendChild(newLi);
  });
}

// accessInput.addEventListener('keydown', createNewUlByKey);
