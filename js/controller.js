export  default class Controller {
  constructor(view, model) {
    this.model = model;
    this.view = view;
    
    view.bindClick(({target}) => {
      if(target.className === 'collections__item') {
        
        this.showCollection(target.dataset.id);
  
        let state = {
          method: 'showCollection',
          id: target.dataset.id
        };
        this.setLocation(state, `collection=${target.dataset.id}`)
      }
      if(target.className === 'collection__item') {
        this.showImage(target.dataset.id);
        
        let state = {
          method: 'showImage',
          id: target.dataset.id
        };
        this.setLocation(state, `image=${target.dataset.id}`)
      }
      
    });
  
    window.onpopstate = this.popStateHendler.bind(this);
    
    this.state = {};
    this.state.collections = [];
  }
  showCollections() {
    this.model.getCollections(this.view.viewCollections.bind(this.view))
  }
  showCollection(collectionId) {
    this.model.getCollection( +collectionId, this.view.viewCollection.bind(this.view))
  }
  showImage(imageId) {
    this.model.getImage(imageId, this.view.viewImage.bind(this.view))
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