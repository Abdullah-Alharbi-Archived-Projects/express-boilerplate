function apiMethod(req, res) {
  res.send({ message: "Users" });
}

function ssrMethod(req, res) {
  res.render("users", { name: "Abdullah Alharbi" });
}

module.exports = {
  apiMethod,
  ssrMethod
};
