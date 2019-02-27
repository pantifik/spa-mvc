import ModelSuper from "./modelSuper";
import {toJson} from "unsplash-js";

export default class CollectionsModel extends ModelSuper {
  unsplashRequest(id, resolve) {
    this.unsplash.photos.getPhoto(id)
        .then(toJson)
        .then(json => {
          resolve(json);
        });
  }
}