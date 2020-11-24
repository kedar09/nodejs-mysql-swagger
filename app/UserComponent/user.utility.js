const connection = require('../../config/database');

exports.deleteUserById= function(req, result) {
    let sqlQuery = 'delete from userinfo where userInfoId = ?';
    connection.query(sqlQuery, req.params.userInfoId, function (error, records) {
            if (error) {
                result(error, null);
            } else {
                let resultDeleteUserById = { message: 'UserInfo Deleted Successfully' };
                result(null, resultDeleteUserById);
            }
        });
}

exports.updateUser= function(req, result) {
    let userInfoId = req.body.userInfoId;
    delete req.body.userInfoId;
    connection.query('update userinfo set ? where userInfoId = ?', [req.body, userInfoId] ,
        function (error, records) {
            if (error) {
                console.log(error);
                result(error, null);
            } else {
                let resultUpdateUser = { message: 'UserInfo Updated Successfully' };
                result(null, resultUpdateUser);
            }
        });;
}