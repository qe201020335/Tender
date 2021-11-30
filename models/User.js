const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const CommentSchema = new mongoose.Schema({
    userId: String,
    date: String,
    message: String
});

const RestaurantSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    image: String,
    address:  {
        type: String,
        required: true
    },
    description: String,
    comments: [CommentSchema],
    likes: [String],
    dislikes: [String]
});

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid Email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    userType: {
        type: String,
        required: true
    },
    restaurant: RestaurantSchema,
    favourite: [String],
    likes: [String],
    dislikes: [String]
});

// Mongoose middleware runs prior to saving the document in the database.
UserSchema.pre('save', function(next) {
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
UserSchema.statics.findByEmailPassword = function(email, password) {
    // binds this to the User model
	const User = this
	// First find the user by their email
	return User.findOne({ email: email }).then((user) => {
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

const User = mongoose.model('User', UserSchema);
module.exports = { User };
