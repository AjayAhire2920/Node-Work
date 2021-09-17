const dbConn = require('mysql');
const userModal = require('../modals/reg.modal');

// Get All Users List
exports.getAllUserList = (req, res)=>{
    userModal.getAllUsers((err, res1)=>{
        if(err){
            res.json({
                 status:400,
                 message:err
             });
        }else{
            res.json({                
                status:200,
                message:res1
            });
            console.log(res1);
        }
    });
}

exports.getUserById = (req, res)=>{
    // console.log("User By Id");
  userModal.getUserById(req.params.id, (err, res1)=>{
      if(err){
          res.json({
              data: null,
              message:"failed"
          });
      }else{
          res.json({
              data: res1,
              message:"success"
          });
      }
  });
}


exports.addUser = (req, res)=>{    
//   console.log("Body", req.body);
  const userReqData = new Users(req.body);

  userModal.addUser(userReqData, (err, res1)=>{
    if(err){
        res.json({
            data: null,
            status: false
        });
    }else{
        res.json({
            data: res1,
            status: true
        });
    }
  });

}