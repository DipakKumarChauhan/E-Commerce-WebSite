const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema (
    {
        name: {
            type:String,
            required:true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/.+@.+\..+/, "Please enter a valid email address"] // this is used t see email is valid or not

        },
        pasword: {
            type: String,
            require: true,
            minLength: 6,
        },
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },

    },
    {
        timestamps: true
    }
);

// Password Hash MiddleWare
userSchema.pre("save", async function (next){
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10); // we are using salt method  to generate has higher number better hash but slower process
    this.pasword= await bcrypt.hash(this.password,salt);
    next();
});

// match User Entered Password to Hashed password in DB

userSchema.methods.matchPassword = async function( enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password); // this will return boolean value
}

model.exports = mongoose.model('User', userSchema);
