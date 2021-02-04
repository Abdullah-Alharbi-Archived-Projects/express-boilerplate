async function index(req, res) {
  res.render("index", { message: "World" });
}

module.exports = {
  index
};
