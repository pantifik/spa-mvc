
export default class View{
  constructor(parent, templates) {
    this.parent = parent;
    this.templates = templates;
  }
  viewCollections(collections) {
    this.render(this.templates.collections(collections));
  }
  viewCollection(collection) {
    
    this.render(this.templates.collection(collection));
  }
  viewImage(imageData) {
    
    this.render(this.templates.image(imageData));
  }
  
  bindClick(hendler){
    this.parent.addEventListener('click', (e) => {
      e.preventDefault();
      hendler(e)
    })
  }
  
  render(view) {
    this.parent.innerHTML = view;
  }
}