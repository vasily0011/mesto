export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    console.dir(this);
    this._container.prepend(element);
  }

  renderItems(data) {
    console.dir(this);
    console.dir(data);
    data.forEach(item => {
      this._renderer(item)
    });
  }
}