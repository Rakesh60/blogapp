import sql from "../database/database.js";

const Task = {};

Task.postBlog = (req, result) => {
  const { body, createdBy } = req.body;
  let query = `insert into user_info (body, user_id) values ('${body}')`;
  sql.query(query, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, response);
    }
  });
};
Task.getFilms = (req, result) => {
  const { body } = req.body;
  let query = `SELECT t2.name,group_concat(t1.title) as filmlist FROM film as t1, category as t2, film_category as t3 where t1.film_id = t3.film_id and t2.category_id = t3.category_id group by t2.name`;
  sql.query(query, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      const data = JSON.parse(JSON.stringify(response));
      const arrayData = data.map((val) => {
        return val.filmlist.split(",");
      });
      const obj = arrayData[0].map((val, index) => {
        return { id: index, film: val };
      });

      result(null, obj);
    }
  });
};
export default Task;
