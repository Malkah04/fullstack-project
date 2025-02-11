const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user.model');
const mongouri ="mongodb+srv://malk04:Mx0wSJBask92oSYB@cluster0.pmz7i.mongodb.net/"
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/sign', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json('Please fill all fields');
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json('User with email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json('User Created');
    } catch (error) {
        res.status(400).json(error);
    }
});


app.post('/login', async (req, res) => {
    try {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json('Please fill all fields');
    }
    const emailexist= await User.findOne({ email });
    if(!emailexist){
        return res.status(404).json('User not found');
    }
    const validPassword = await bcrypt.compare(password, emailexist.password);
    if (!validPassword) {
        return res.status(400).json('wrong Password,try again');
    }
    res.status(200).json('User Logged in');
    } catch (error) {
        res.status(400).json(error);
    }
})




mongoose.set("strictQuery", false)
mongoose
.connect(mongouri)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(7000, () => console.log('app started on port 7000'))
}).catch((error) => {
    console.log('cant connect to mongodb'+error)
})

