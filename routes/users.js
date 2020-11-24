var express = require("express");
var router = express.Router();
var userValidator = require("../app/UserComponent/user.validator");

/**
 * @swagger
 * /users/getAllUser:
 *   get:
 *     tags:
 *         - Get All User
 *     description: Get all User
 *     responses:
 *       200:
 *         description: Success Response
 */
router.get("/getAllUser", userValidator.getAllUser);

/**
 * @swagger
 * /users/getUserById/{userInfoId}:
 *   get:
 *     tags:
 *         - Get User By userInfoId
 *     description: Get User By userInfoId
 *     parameters:
 *         - name: userInfoId
 *           description: Get User By userInfoId
 *           in: path
 *           type: integer
 *           required: true
 *     responses:
 *       200:
 *         description: Success Response
 */
router.get("/getUserById/:userInfoId", userValidator.getUserById);

/**
 * @swagger
 * /users/addUser:
 *   post:
 *     tags:
 *         - Add New User
 *     description: Add New User
 *     parameters:
 *         - name: reqBody
 *           description: Request Body User
 *           in: body
 *           schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  address:
 *                      type: string
 *                  dateOfBirth:
 *                      type: string
 *                  mobileNumber:
 *                      type: integer
 *              required:
 *                  - name
 *                  - address
 *     responses:
 *       200:
 *         description: Success Response
 */
router.post("/addUser", userValidator.addUser);

/**
 * @swagger
 * /users/updateUser:
 *   put:
 *     tags:
 *         - Update User
 *     description: Update User
 *     parameters:
 *         - name: reqBody
 *           description: Request Body User
 *           in: body
 *           schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  address:
 *                      type: string
 *                  dateOfBirth:
 *                      type: string
 *                  mobileNumber:
 *                      type: integer
 *                  userInfoId: 
 *                      type: integer
 *              required:
 *                  - userInfoId
 *     responses:
 *       200:
 *         description: Success Response
 */
router.put("/updateUser", userValidator.updateUser);

/**
 * @swagger
 * /users/deleteUserById/{userInfoId}:
 *   delete:
 *     tags:
 *         - Delete User By userInfoId
 *     description: Delete User By userInfoId
 *     parameters:
 *         - name: userInfoId
 *           description: Delete User By userInfoId
 *           in: path
 *           type: integer
 *           required: true
 *     responses:
 *       200:
 *         description: Success Response
 */
router.delete("/deleteUserById/:userInfoId", userValidator.deleteUserById);

module.exports = router;
