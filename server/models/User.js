const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must be an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  //Customer Information: Both the Customer flag must be true, id match/logged in, plus the customer arrays point to what contains the gallery info, not the actual paths...I think...?
  customer: {
    type: Boolean,
    required: false,
    unique: false,
    default: false,
  },
  customer_galleries: [
    {
      type: String,
      trim: true,
    },
  ],
  cust_invoices: [
    {
      type: String,
      trim: true,
    },
  ],
  cust_projects: [
    {
      type: String,
      trim: true,
    }
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
