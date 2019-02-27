import Unsplash from "unsplash-js";
import CollectionModel from "./collectionModel";
import CollectionsModel from "./collectionsModel";
import ImgModel from "./imgModel";

const unsplash = new Unsplash({
  applicationId: "a648727ceefb1f6631f97aa3e176c644fd6449f378d7527f19601555358da7ae",
  secret: "cfed8222b1379678d0217f2ed136889d9dec5030457bec781fcf276c7f726f5c"
});

const collectionModel = new CollectionModel(unsplash);
const collectionsModel = new CollectionsModel(unsplash);
const imgModel = new ImgModel(unsplash);

export default {
  collection: collectionModel,
  collections: collectionsModel,
  img: imgModel,
}