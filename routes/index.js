var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// update user by route params

/**
 * @swagger
 * /users/updateUser/{userInfoId}:
 *   put:
 *     tags:
 *         - Update User
 *     description: Update User
 *     parameters:
 *         - name: userInfoId
 *           description: Update User By userInfoId
 *           in: path
 *           type: integer
 *           required: true
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
 *     responses:
 *       200:
 *         description: Success Response
 */
