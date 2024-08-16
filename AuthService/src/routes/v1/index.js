const  express = require("express");

const UserController = require("../../controllers/user-controllers")

const {  AuthRequestValidators }  = require('../../middlewares/index');
const { validateIsAdminRequest } = require("../../middlewares/auth-reqest-validator");

const router = express.Router();

router.post("/signup", AuthRequestValidators.validateUserAuth, UserController.create);
router.post("/signin", AuthRequestValidators.validateUserAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);

router.get('/isadmin',AuthRequestValidators,validateIsAdminRequest,UserController.isAdmin)



module.exports= router;