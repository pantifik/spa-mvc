import View from  '../view'

export default class ImgView extends View{
  _createView(imageData){
    let html = this._titleHTML();
    html += `
        <div class="${this.className}__box">
          <img src="${imageData.urls.small}">
          <div class="${this.className}__info">
          <p class="${this.className}__row"><span>User.name:</span> ${imageData.user.name}</p>
          <p class="${this.className}__row"><span>created_at:</span> ${imageData.created_at}</p>
          <p class="${this.className}__row"><span>downloads:</span> ${imageData.downloads}</p>
</div>
</div>
          `;
    return html;
  }
}