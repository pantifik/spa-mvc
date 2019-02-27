import CollectionsView from "./collectionsView";
import CollectionView from "./collectionView";
import ImgView from "./imgView";

const el = document.getElementById('app');

const collectionsView = new CollectionsView(el, 'Список коллекций', 'collections');
const collectionView = new CollectionView(el, 'Список фотографий', 'collection');
const imgView = new ImgView(el, '', 'image');

export default {
  collections: collectionsView,
  collection: collectionView,
  img: imgView,
}