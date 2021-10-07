import appModel from "../model/model.js";
const Task = {};
Task.getBlog = (req, res) => {
  appModel.getBlog(req, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};

Task.getFilms = (req, res) => {
  appModel.getFilms(req, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};
export default Task;
