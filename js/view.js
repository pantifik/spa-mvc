
export default class View{
  constructor(parent, title, className) {
    this.parent = parent;
    this.title = title;
    this.className = className;
  }
  
  _titleHTML() {
    return `<h3 class="title">${this.title}</h3><ul id="${this.className}">`
  }
  
  _itemHTML(id, text) {
    return `<li>
              <a href="#" class="${this.className}__item" data-id="${id}"> ${text}</a>
            </li>`
  }
  
  _createView(collections){
    let html = this._titleHTML();
    html += `<ul>`;
    collections.forEach((item) => {
      html += this._itemHTML(item.id, item.title)
    });
    html += '</ul>';
    return html;
  }
  
  bindClick(hendler){
    this.parent.addEventListener('click', (e) => {
      e.preventDefault();
      hendler(e)
    })
  }
  
  show(collection) {
    this.parent.innerHTML = this._createView(collection);
  }
}