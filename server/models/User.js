const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//import extra schema here (like when you add Galleries and MediaCMS connections)


//below is main User schema

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
);

//hash user password for safety
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

//compare and validate password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);
module.exports = User;
