const Task = require("../models/Taks");

module.exports = class TaskController {
  static createTask(req, res) {
    res.render("tasks/create");
  }

  static async createTaskSave(req, res) {
    const tasks = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    await Task.create(tasks);

    res.redirect("/tasks");
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render("tasks/all", { tasks });
  }

  static async removeTask(req, res) {
    const id = req.body.id;
    await Task.destroy({ where: { id: id } });
    res.redirect("/tasks");
  }

  static async updateTask(req, res) {
    const id = req.params.id;

    const tasks = await Task.findOne({ where: { id: id } });

    res.render("tasks/edit", { tasks });
  }
};
