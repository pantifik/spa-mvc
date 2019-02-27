import {setLocation} from './libs/helpers'

export  default class Controller {
  constructor(views, models) {
    this.models = models;
    
    this.views = views;
    this.showCollectionsView = this.views.collections.show.bind(this.views.collections);
    this.showCollectionView = this.views.collection.show.bind(this.views.collection);
    this.showImgView = this.views.img.show.bind(this.views.img);
    
    views.collections.bindClick(({target}) => {
      if(target.className === 'collections__item') {
        let state = {
          method: 'showCollection',
          id: target.dataset.id
        };
        
        this.showCollection(target.dataset.id);
        setLocation(state, `collection=${target.dataset.id}`)
      }
      if(target.className === 'collection__item') {
        let state = {
          method: 'showImg',
          id: target.dataset.id
        };
        
        this.showImg(target.dataset.id);
        setLocation(state, `image=${target.dataset.id}`)
      }
      
    });
  
    window.onpopstate = this.popStateHendler.bind(this);
  }
  
  
  showCollections() {
    this.models.collections.unsplashRequest(this.showCollectionsView)
  }
  showCollection(id) {
    this.models.collection.unsplashRequest(id, this.showCollectionView)
  }
  showImg(id) {
    this.models.img.unsplashRequest(id, this.showImgView)
  }
  
  
  
  
  popStateHendler({state}){
    if(state) {
      this[state.method](state.id);
      return
    }
    this.showCollections();
  }
}