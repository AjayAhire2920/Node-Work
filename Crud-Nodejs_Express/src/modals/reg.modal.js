const dbConn = require('../../Config/db.config');
const date = require('date-and-time')

var Users = function(signup){
    this.reg_id = signup.reg_id;
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

Users.updateUser = (req, result)=>{
    Users = req.body
    const now  =  new Date(); 
    const updatedDate = date.format(now,'YYYY-MM-DD HH:mm:ss'); 
    // console.log(req.file.filename);
    // var updatedDate = new Date();
    dbConn.query("UPDATE signup SET reg_logo ='"+req.file.filename+"', reg_username ='"+Users.reg_username+"', reg_restname ='"+Users.reg_restname+"', reg_fname ='"+Users.reg_fname+"', reg_lname ='"+Users.reg_lname+"', reg_email ='"+Users.reg_email+"', reg_mobile ='"+Users.reg_mobile+"', reg_password ='"+Users.reg_password+"', updatedAt ='"+updatedDate+"', status ='"+Users.status+"' WHERE signup.accountId ='"+Users.reg_id+"'", (err, res1)=>{
        if(err){
            result(err, null)
            console.log("failed "+ err);
        }else{
            result(null, res1)
            console.log("success "+res1);
        }
    });
}

Users.deleteUser = (req, result)=>{
   Users = req.body
    dbConn.query("DELETE from signup WHERE signup.accountId = '"+Users.reg_id+"'", (err, res1)=>{
        if(err){
            result(err, null);
            console.log(err);
        }else{
            result(null, res1)
            console.log(res1);
        }
    });
}



module.exports = Users;