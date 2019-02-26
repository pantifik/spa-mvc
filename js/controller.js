export  default class Controller {
  constructor(views, model) {
    this.model = model;
    this.views = views;
    this.showCollectionsView = this.views.collections.show.bind(this.views.collections);
    this.showCollectionView = this.views.collection.show.bind(this.views.collection);
    this.showImgView = this.views.img.show.bind(this.views.img);
    
    views.collections.bindClick(({target}) => {
      if(target.className === 'collections__item') {
  
        this.showCollection(target.dataset.id);
  
        let state = {
          method: 'showCollection',
          id: target.dataset.id
        };
        this.setLocation(state, `collection=${target.dataset.id}`)
      }
      if(target.className === 'collection__item') {
        this.showImg(target.dataset.id);
        
        let state = {
          method: 'showImg',
          id: target.dataset.id
        };
        this.setLocation(state, `image=${target.dataset.id}`)
      }
      
    });
  
    window.onpopstate = this.popStateHendler.bind(this);
  }
  
  
  showCollections() {
    this.model.getCollections(this.showCollectionsView)
  }
  showCollection(id) {
    this.model.getCollection(id, this.showCollectionView)
  }
  showImg(id) {
    this.model.getImage(id, this.showImgView)
  }
  
  
  setLocation(state, curLoc){
    history.pushState(state, null, curLoc);
    console.log(history.state)
  }
  
  popStateHendler({state}){
    if(state) {
      this[state.method](state.id);
      return
    }
    this.showCollections();
  }
}