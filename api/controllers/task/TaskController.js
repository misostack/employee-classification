/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
// declare var sails: any;

module.exports = {
  index: (req, res, next) => {
    const tasks = [
      {
        id: "uuid_v4()",
        title: "Task title", // string(75)
        description: "Rest API Design with task entity", // string(160)
        details: "", // text
        status: "pending",
        createdAt: "timestamp",
        updatedAt: "timestamp",
      },
    ];
    res.status(200).json(tasks);
  },
  show: (req, res, next) => {
    const task = {
      id: req.params.id,
      title: `Task title ${req.params.id}`, // string(75)
      description: "Rest API Design with task entity", // string(160)
      details: "", // text
      status: "pending",
      createdAt: "timestamp",
      updatedAt: "timestamp",
    };
    res.status(200).json(task);
  },
};
