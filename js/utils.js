
const createNode = (html) => {
  const newNode = document.createElement(`div`);
  newNode.innerHTML = html.trim();
  return newNode;
};

const appNode = document.querySelector(`.app`);
const mainNode = appNode.querySelector(`.main`);

const showScreen = (element) => {
  mainNode.innerHTML = ``;
  mainNode.appendChild(element);
};


export {showScreen, createNode};
