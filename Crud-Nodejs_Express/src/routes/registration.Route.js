const express = require('express');
const router = express.Router();
const multer = require('multer')
const uploads = multer({
    dest: 'images/'
})
const regController = require('../controllers/registration.Controller')


const filesStored = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = Mine_Type[file.mimetype];
        let error = Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname;
        cb(null, Date.now() + new Date().getMilliseconds() + ".png");
    }
});

const Mine_Type = {
    "image/jpeg": 'jpeg',
    "image/png": 'png'
}



//getAllUser route
router.get('/getAllUsers', regController.getAllUserList);
router.get('/:id', regController.getUserById);
// router.post('/addUser', uploads.single('reg_logo'), regController.addUser); //works fine
router.route('/addUser').post(multer({storage: filesStored}).single("reg_logo"), regController.addUser);
router.route('/updateUser').post(multer({storage:filesStored}).single("reg_logo"), regController.updateUser);


router.delete('/deleteUser',regController.deleteUser)

// app.route('/registration/signup').post(multer({storage: storage}).single("reg_logo"),regController.regUsers);








module.exports = router;