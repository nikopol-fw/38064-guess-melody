// Родительский класс для всех View

export default class AbstractView {
  constructor(htmlClasses = []) {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    } else {
      this.htmlClasses = htmlClasses;
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this._render(this.template);
    this.bind(this._element);
    return this._element;
  }

  bind() {

  }

  _render(html, tag = `section`) {
    const node = document.createElement(tag);
    if (this.htmlClasses.length > 0) {
      node.classList.add(...this.htmlClasses);
    }
    node.innerHTML = html.trim();
    return node;
  }
}
