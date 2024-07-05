import jsonFetchableController from "./controllers/jsonFetchable";
import jsonFetchableRoutes from "./routes/jsonFetchable";

export default async (plugin) => {
  plugin.controllers.documentation = {
    ...plugin.controllers.documentation,
    ...jsonFetchableController,
  };

  plugin.routes = [...plugin.routes, ...jsonFetchableRoutes.routes];

  return plugin;
};
