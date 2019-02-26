import Unsplash, { toJson } from "unsplash-js";
import Model from "./model";
import CollectionsView from "./views/collectionsView";
import CollectionView from "./views/collectionView";
import ImgView from "./views/imgView";
import Controller from "./controller";


const unsplash = new Unsplash({
  applicationId: "a648727ceefb1f6631f97aa3e176c644fd6449f378d7527f19601555358da7ae",
  secret: "cfed8222b1379678d0217f2ed136889d9dec5030457bec781fcf276c7f726f5c"
});

const el = document.getElementById('app');


const collectionsView = new CollectionsView(el, 'Список коллекций', 'collections');
const collectionView = new CollectionView(el, 'Список фотографий', 'collection');
const imgView = new ImgView(el, '', 'image');

const views = {
  collections: collectionsView,
  collection: collectionView,
  img: imgView,
};

const model = new Model(unsplash);
const controller = new Controller(views, model);

controller.showCollections();
