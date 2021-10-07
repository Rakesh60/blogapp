import appController from "../controller/appController.js";

const Route = (app) => {
  app.route("/blogs").get(appController.getBlog);
  app.route("/films").get(appController.getFilms);
};
export default Route;
