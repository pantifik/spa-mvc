import appModels from './models/appModels'
import appViews from './views/appViews'

import Controller from "./controller";

const controller = new Controller(appViews, appModels);

controller.showCollections();
