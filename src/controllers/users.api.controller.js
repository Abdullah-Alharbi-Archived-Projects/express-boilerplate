const User = require('../database/models/User');

async function index(req, res) {
    const users = await User.query();

    if (users.length) {
        return res.json({ users });
    }

    return res.json({ message: 'No users yet.' });
}


module.exports = {
    index
};
