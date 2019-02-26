import {toJson} from "unsplash-js";

export default class Model {
  constructor(unsplash) {
    this.unsplash = unsplash;
  }
  getCollections(resolve) {
    return this.unsplash.collections.listCollections(1, 10, "popular")
                  .then(toJson)
                  .then(json => {
                    resolve(json);
                    return json;
                  });
  }
  getCollection(id, resolve) {
    this.unsplash.collections.getCollectionPhotos(+id)
            .then(toJson)
            .then(json => {
              resolve(json);
            });
  }
  getImage(id, resolve) {
    this.unsplash.photos.getPhoto(id)
            .then(toJson)
            .then(json => {
              resolve(json);
            });
  }
  
  
}