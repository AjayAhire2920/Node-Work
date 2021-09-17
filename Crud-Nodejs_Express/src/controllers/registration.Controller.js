const dbConn = require('../../Config/db.config');
const userModal = require('../modals/reg.modal');


// Get All Users List
exports.getAllUserList = (req, res) => {
    userModal.getAllUsers((err, res1) => {
        if (err) {
            res.json({
                status: 400,
                message: err
            });
        } else {
            res.json({
                status: 200,
                message: res1
            });
            console.log(res1);
        }
    });
}

exports.getUserById = (req, res) => {
    // console.log("User By Id");
    userModal.getUserById(req.params.id, (err, res1) => {
        if (err) {
            res.json({
                data: null,
                message: "failed"
            });
        } else {
            res.json({
                data: res1,
                message: "success"
            });
        }
    });
}


exports.addUser = (req, res) => {
      console.log("Body", req.body);
      console.log(req.file.filename);
    var signup = req.body;
    var reg_logo = req.file.filename;
    var reg_username = signup.reg_username;
    var reg_restname = signup.reg_restname;
    var reg_fname = signup.reg_fname;
    var reg_lname = signup.reg_lname;
    var reg_email = signup.reg_email;
    var reg_password = signup.reg_password;
    var reg_mobile = signup.reg_mobile;
    var reg_status = signup.status;
    var reg_date = new Date();
    var updatedAt = new Date();

    if (!req.body.reg_email) {
        res.status(400).send({
            error: true,
            message: "Please Provide All Data"
        });
    } else {
        var query = ("INSERT INTO signup (reg_logo, reg_username, reg_restname, reg_fname, reg_lname, reg_email, reg_password, reg_mobile, status, reg_date, updatedAt) VALUES (?,?,?,?,?,?,?,?,?,?,?)");

        dbConn.query(query, [reg_logo, reg_username, reg_restname, reg_fname, reg_lname, reg_email, reg_password, reg_mobile, reg_status, reg_date, updatedAt],
            (err, res1) => {
                if (err) {
                    res.json({
                        data: null,
                        status: false,
                    });
                } else {
                    res.json({
                        data: res1,
                        status: true
                    });
                }
            });
    }

}

exports.updateUser = (req, res)=>{
    console.log("INto update");
    console.log(req.body);
    console.log(req.file.filename);
    userModal.updateUser(req, (err, res1)=>{
        if(err){
            res.json({
                "message":"Failed",
                "status": false,
                "data":null
            });
        }else{
            res.json({
                "message":"success",
                "status": true,
                "data": res1
            });
        }
    });
}


exports.deleteUser = (req, res)=>{
    console.log("into Delete User");

    userModal.deleteUser(req, (err, res1)=>{
        if(err){
            res.json({
                "status": false,
                "data":null
            });
        }else{
            res.json({
                "status": true,
                "data":res1
            });
        }
    })
}