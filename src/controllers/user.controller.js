const User = require('../database/models/User');

function index(req, res) {
  res.render("users", { name: "Abdullah Alharbi" });
}


function create(req, res) {
  return res.render("users/create");
}


async function store(req, res) {
  req.body.age = parseInt(req.body.age);

  const { firstName, lastName, age } = req.body;

  if (firstName && lastName && !isNaN(age)) {
    const user = await User.query().insertGraph({
      firstName, lastName, age
    });

    return res.render("users/created", { message: `Welcome ${user.fullName()}` });
  }

  // bad practice, i should flush message and redirect to create
  return res.render("users/create", { error: "All fields can not be empty." });
}





async function apiIndex(req, res) {
  const users = await User.query();

  if (users.length) {
      return res.json({ users });
  }

  return res.json({ message: 'No users yet.' });
}

module.exports = {
  index,
  create,
  store,
  apiIndex,
};
