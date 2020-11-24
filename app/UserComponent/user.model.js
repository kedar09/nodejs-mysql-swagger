const userUtility = require('./user.utility');

const connection = require('../../config/database');

exports.getAllUser = function (result) {
    let sqlQuery = `select userInfoId,name,address,mobileNumber,DATE_FORMAT(dateOfBirth,
        '%Y-%m-%d') AS dateOfBirth from userinfo`;
    connection.query(sqlQuery, function (error, resultOfQuery) {
            if (error) {
                result(error, null);
            } else {
                result(null, resultOfQuery);
            }
        });
};

exports.getUserById = function (userInfoId, result) {
    let sqlQuery = `select userInfoId,name,address,mobileNumber,DATE_FORMAT(dateOfBirth,
        '%Y-%m-%d') AS dateOfBirth from userinfo where userInfoId = ${userInfoId}`;
    connection.query(sqlQuery, function (error, resultOfQuery) {
            if (error) {
                result(error, null);
            } else {
                result(null, resultOfQuery);
            }
        });
};


exports.addUser = function (req, result) {
    let sqlQuery = 'insert into userinfo set ?';
    connection.query(sqlQuery, req.body,
        function (error, records) {
            if (error) {
                result(error, null);
            } else {
                let resultAddUser = { message: 'UserInfo Inserted Successfully' };
                result(null, resultAddUser);
            }
        });
};

exports.updateUser = function (req, result) {
    let sqlQuery = "select count(*) as count from userinfo where userInfoId=?";
    
    connection.query(sqlQuery, [req.body.userInfoId],   
        function(error, recordsArray, fields){
        if (error){
            console.log("Error occured while fetching the data !")
        }else{
            if(recordsArray[0].count==0){
                console.log(recordsArray[0].count)
                 let resultDeleteUser = {message: 'User not found'};
                 result(null, resultDeleteUser);
            } else {
                userUtility.updateUser(req, result);
            }
        }
    });
};

exports.deleteUserById = function (req, result) {
    let sqlQuery = "select count(*) as count from userinfo where userInfoId=?";
    
    connection.query(sqlQuery, [req.params.userInfoId],   
        function(error, recordsArray, fields){
        if (error){
            console.log("Error occured while fetching the data !")
        }else{
            if(recordsArray[0].count==0){
                 let resultDeleteUser = {message: 'User not found'};
                 result(null, resultDeleteUser);
            } else {
                userUtility.deleteUserById(req, result);
            }
        }
    });
};

