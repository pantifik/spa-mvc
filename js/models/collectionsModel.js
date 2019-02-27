import ModelSuper from "./modelSuper";
import {toJson} from "unsplash-js";

export default class CollectionsModel extends ModelSuper {
  unsplashRequest(resolve) {
    return this.unsplash.collections.listCollections(1, 10, "popular")
               .then(toJson)
               .then(json => {
                 resolve(json);
                 return json;
               });
  }
}