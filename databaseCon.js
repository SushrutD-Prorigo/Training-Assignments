var mysql=require('mysql');
var con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root"
});
//get connection
con.connect(function(err){
	if (err) throw err;
	console.log("Connected");
});

/*
//executing query
con.query("show databases",function(err,result){

	if(err) throw err;
	console.log(result);
});
//creating new database
con.query("create database new",function(err,result){

	if(err) throw err;
	console.log("database created");
});


con.query("show databases",function(err,result){

	if(err) throw err;
	console.log(result);
});

con.query("use new",function(err,result){

	if(err) throw err;
	console.log("Using new....");
});

//create table
con.query("CREATE TABLE customers (id int,name VARCHAR(255))",function(err,result){

	if(err) throw err;
	console.log("Table created");
});

//add data into table


var stmt="insert into customers values(2,'Sarvesh')";
con.query(stmt,function(err,result){

	if(err) throw err;
	console.log("Row added");
});


//Diplay contents of table.
con.query("use new",function(err,result){

	if(err) throw err;
	con.query("select * from customers",function(err,result){

	if(err) throw err;
	console.log(result);
});
});
*/

//Diplay contents of table.
con.query("use new",function(err,result){

	if(err) throw err;
	con.query("select * from customers",function(err,result){

	if(err) throw err;
	for(let i=0;i<result.length;i++)
	{
		console.log("ID:"+result[i].id);
		console.log("Name:"+result[i].name);
	}
});
});
