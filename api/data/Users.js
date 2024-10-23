const bcrypt = require('bcryptjs')
const users = [
    {
        name: "Super Admin",
        email: "aleza@node.com",
        password: bcrypt.hashSync("zaa275", 10),
        isAdmin: true,
    },

    {
        name: "User",
        email: "user@gmail.com",
        password: bcrypt.hashSync("user1", 10)
    },
]

module.exports = users;