const dbConn = require('../../Config/db.config');

var Users = function(signup){
    this.reg_logo = signup.reg_logo;
    this.reg_username = signup.reg_username;
    this.reg_restname = signup.reg_restname;
    this.reg_fname = signup.reg_fname;
    this.reg_lname = signup.reg_lname;
    this.reg_email = signup.reg_email;
    this.reg_password = signup.reg_password;
    this.reg_mobile = signup.reg_mobile;
    this.status = signup.status ? signup.status : 1;
    this.reg_date = new Date();
    this.updatedAt = new Date();
}

Users.getAllUsers = (result) =>{
    dbConn.query('SELECT * from signup', (err, res1)=>{
        if(err){
            console.log("Error While Fetaching Data");
            result(err,null)
        }else{
            console.log("Success");
            result(null, res1);
        }
    });
}

Users.getUserById = (id, result)=>{
    dbConn.query('SELECT * from signup where accountId=?', id, (err, res1)=>{
        if(err) {
            result(err,null)
            console.log("Failed");
        }else{
            result(null,res1);
            console.log("Success");
        }       
    });
}

Users.addUser = (userReqData, result)=>{
    dbConn.query('INSERT INTO signup SET ?', userReqData, (err, res1)=>{
        if(err){
            result(err, null)
        }else{
            result(null, res1.accountId)
        }
    });
}



module.exports = Users;