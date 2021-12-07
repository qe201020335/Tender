const { User } = require('../../models/user')

module.exports = {
	authenticate: (req, res, next) => {
		if (req.session.userId) {
			User.findById(req.session.userId).then((user) => {
				if (!user) {
					return Promise.reject()
				} else {
					req.user=user
					next()
				}
			}).catch((error) => {
				res.status(401).send("Unauthorized")
			})
		} else {
			res.status(401).send("Unauthorized")
		}
	}
}