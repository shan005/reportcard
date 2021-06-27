const Admin = require('../model/admins')



const adminSignup = async function (req, res) {
    let isValidParams = req.body.email && req.body.password

    let promise = new Promise(async function (resolve, reject) {
        try {
            if (isValidParams) {
                let admin = await Admin.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }).then((admin) => {
                    resolve({ success: true, message: "Admin Signup Successfully" })
                })

            } else {
                reject({ success: true, message: "Please provide Email And Password" })
            }
        } catch (error) {
            console.log(error);
            reject({ success: false, message: "Admin Signup Error", error: error })
        }
    });
    promise.then(function (data) {
        res.send({ success: data.success, message: data.message })
    }).catch(function (error) {
        res.send({ success: error ? error.success : false, message: error ? error.message : 'Admin signup error' })
    });
}


module.exports = {
    adminSignup
}