const express = require("express");
const router = express.Router();
const connectToMongoDB = require('../db');
const { exists } = require("../mongodb_models/signup");
const Signup = require('../mongodb_models/signup')

connectToMongoDB();


router.get('/', (req, res) => {
    res.send("Hello world from router")
})

router.post('/redirect-page', (req, res) => {
    // console.log(req.body);
    // res.send(req.body)
    res.type('application/json')
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Fill out all the compulsory fields!!" })

    }
    else if (!name || !email || !password || !cpassword || password != cpassword) {
        return res.status(422).json({ error: "Password and confirm password does not match" })
    }
    else {
        Signup.findOne({ userEmailAddress: email })
            .then((exist) => {
                if (exist)
                    return res.status(422).json({ error: "Email already registered!! Try another email." })
            })
        const user = new Signup({ username: name, userEmailAddress: email, password: password });
        user.save().then((e) => {
            return res.status(200).json({ message: "Datainserted successfully!!" })
        })
    }

})

module.exports = router;