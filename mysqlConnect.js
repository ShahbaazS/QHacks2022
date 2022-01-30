
var mySql = require("mysql2"); //require module for Node JS to use MySql.

//connection object for mySql connection.
var con = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Bubbles06',
    database : 'uni_courses',
});

//connect method with callback function for error.
con.connect(
    function(error){
    if(error) {
        console.log(error);
    }
     else {
         console.log('SQL Database Connected!');
    }
    //var sql = "CREATE TABLE uni_courses (id INT AUTO_INCREMENT PRIMARY KEY, university VARCHAR(255), coursename VARCHAR(255), coursereview VARCHAR(255))"; //made table.

    con.query(sql,function(error,result){
        if(error){
            console.log(error);
        }
        else{
            console.log("table created" + result);
        }
    });

});

module.exports = con;