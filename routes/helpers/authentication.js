const { Account } = require('../../models/Account')

module.exports = {
	authenticate: (req, res, next) => {
		if (req.session.userId) {
			Account.findById(req.session.userId).then((account) => {
				if (!account) {
					return Promise.reject()
				} else {
					req.session.userType = account.userType
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