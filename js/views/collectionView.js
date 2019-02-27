import View from  './view'

export default class CollectionView extends View{
  _createView(collections){
    let html = this._titleHTML();
    html += `<ul>`;
    collections.forEach((item) => {
      html += this._itemHTML(item.id, item.description)
    });
    html += '</ul>';
    return html;
  }
}