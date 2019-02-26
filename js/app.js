import Unsplash, { toJson } from "unsplash-js";
import Model from "./model";
import View from "./view";
import Controller from "./controller";
import Templates from "./templates";


const unsplash = new Unsplash({
  applicationId: "a648727ceefb1f6631f97aa3e176c644fd6449f378d7527f19601555358da7ae",
  secret: "cfed8222b1379678d0217f2ed136889d9dec5030457bec781fcf276c7f726f5c"
});

let el = document.getElementById('app');

const templates = new Templates();
const view = new View(el, templates);
const model = new Model(unsplash);
const controller = new Controller(view, model);

controller.showCollections();
