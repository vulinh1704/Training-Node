import mysql from 'mysql2';
let con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "my_store"
});

export function connectDatabase() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

export default con;