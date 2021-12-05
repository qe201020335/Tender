const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    userType: {
        type: String,
        required: true
    }
});

// Mongoose middleware runs prior to saving the document in the database.
AccountSchema.pre('save', function(next) {
    // binds this to User document instance
	const user = this; 
	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model to find a User document by comparing the hashed password
AccountSchema.statics.findByUsernamePassword = function(username, password) {
    // binds this to the User model
	const User = this
	// First find the user by their username
	return User.findOne({ username: username }).then((user) => {
		if (!user) {
            // return a rejected promise
			return Promise.reject()
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject("wrong password")
				}
			})
		})
	})
}

const Account = mongoose.model('Account', AccountSchema);
module.exports = { Account };
