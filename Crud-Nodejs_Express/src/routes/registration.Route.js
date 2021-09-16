const express = require('express');
const router = express.Router();
const multer = require('multer')
const regController = require('../controllers/registration.Controller')


const files = multer.diskStorage({
    destination: (req, file, cb) => {
        const isInvalid = Mime_Type[file.mimetype];
        let error = Error("Invalid File Type");
        if (isInvalid) {
            error = null
        }
        cb(error, "images");
    },
    filename: (req, file, cb)=>{
        const name = file.originalname;
        cb(null, Date.now()+new Date().getMilliseconds()+ ".png");
    }
});

const Mime_Type = {
    "images/jpeg": 'jpeg',
    "images/png": 'png',
}




//getAllUser route
router.get('/getAllUsers', regController.getAllUserList);
router.get('/:id', regController.getUserById);
router.post('/addUser', regController.addUser);









module.exports = router;