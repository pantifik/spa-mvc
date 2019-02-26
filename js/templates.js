export default class Templates{
  collections(collections){
    let html = '<h3 class="title">collections</h3><ul id="collections">';
    collections.forEach((item) => {
      html += `
          <li>
            <a href="#" class="collections__item" data-id="${item.id}"> ${item.title} </a>
          </li>`
    });
    html += '</ul>';
    return html;
  }
  collection(collection){
    let html = '<h3 class="title">collection</h3><ul id="collection">';
    collection.forEach((item) => {
      html += `
          <li>
            <a href="#" class="collection__item" data-id="${item.id}"> ${item.description || 'noname'} </a>
          </li>`
    });
    html += '</ul>';
    return html;
  }
  image(imageData){
    let html = '';
  
    html += `
        <div class="image__box">
          <h3 class="image__title">${imageData.description  || 'noname'}</h3>
          <img src="${imageData.urls.small}">
          <div class="image__info">
          <p class="image__row"><span>User.name:</span> ${imageData.user.name}</p>
          <p class="image__row"><span>created_at:</span> ${imageData.created_at}</p>
          <p class="image__row"><span>downloads:</span> ${imageData.downloads}</p>
</div>
</div>
          `;
    html += '';
    return html;
  }
}