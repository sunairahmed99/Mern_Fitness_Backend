const multer = require('multer');
const path = require('path');

const UserStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,'../Multer/images'));
    },
    filename: (req, file, cb) => {
      cb(null, 'Users/'+Date.now() + file.originalname);
    },
  });
  const Userupload = multer({ storage: UserStorage});

  module.exports = Userupload