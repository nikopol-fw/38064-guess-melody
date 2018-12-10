
const template = `
  <section class="game__screen"></section>
`;


const layout = document.createElement(`section`);
layout.classList.add(`game`, `gamees`);
layout.innerHTML = template.trim();

const gameScreen = layout.querySelector(`.game__screen`);


const changeLayoutState = (layoutClass) => {
  Array.from(layout.classList).forEach((classItem) => {
    if (classItem !== `game`) {
      layout.classList.remove(classItem);
    }
  });

  layout.classList.add(layoutClass);
};


export {layout, gameScreen, changeLayoutState};
