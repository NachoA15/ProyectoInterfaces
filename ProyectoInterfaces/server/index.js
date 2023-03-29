const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.listen(3001, () => {
	console.log('Server running on port 3001');
});

const mysql = require('mysql');
const db = mysql.createConnection({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.DB_USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});
db.connect();

const dbQuery = (query, req, res) => {
	db.query(query, (error, results) => {
		if (error) throw error;
		res.status(200).json(results);
	});
};

/** =========================================================================
 *  Consultas de las tablas
 *  =========================================================================
 */

app.get('/usuarios', (req, res) => {
	dbQuery('SELECT * FROM USUARIO', req, res);
})

app.post('/getUsuario', (req, res) => {
	let username = req.body.username;
	dbQuery("SELECT * FROM USUARIO WHERE username = '" + username + "';",req, res);
})

app.post('/addUsuario', (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let nombre = req.body.nombre;
	let correo = req.body.correo;
	let telefono = req.body.telefono;
	let valoracion = req.body.valoracion;

		db.query('INSERT INTO USUARIO (username, password, nombre, correo, telefono, valoracion) VALUES (?,?,?,?,?,?);', [username,password,nombre,correo,telefono,valoracion], (err,a,f) => {
			if (err) {
				if (err.sqlMessage.endsWith("for key 'usuario.username'")) {
					res.send('duplicated_username');
				} else if (err.sqlMessage.endsWith("for key 'usuario.correo'")) {
					res.send('duplicated_correo');
				}
				console.log(err.sqlMessage);
			}
			else console.log('Usuario ' + username + ' insertado exitosamente');
		})
})

app.post("/checkUsuario", (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	dbQuery("SELECT * FROM USUARIO WHERE username = '" + username + "' and password = '" + password + "';", req, res);
	console.log('OK');
})