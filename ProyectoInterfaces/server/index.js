const express = require('express');
const fs = require('fs');
require('dotenv').config();
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.listen(3001, () => {
	console.log('Server running on port 3001');
});

const mysql = require('mysql');
const { log } = require('console');
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
 *  Usuarios
 *  =========================================================================
 */

app.get('/usuarios', (req, res) => {
	dbQuery('SELECT * FROM USUARIO', req, res);
})

app.post('/getUsuarioByUsername', (req, res) => {
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
	let localizacion = req.body.localizacion;

		db.query('INSERT INTO USUARIO (username, password, nombre, correo, telefono, valoracion, localizacion) VALUES (?,?,?,?,?,?,?);', [username,password,nombre,correo,telefono,valoracion,localizacion], (err,a,f) => {
			if (err) {
				if (err.sqlMessage.endsWith("for key 'usuario.username'")) {
					res.send('duplicated_username');
				} else if (err.sqlMessage.endsWith("for key 'usuario.correo'")) {
					res.send('duplicated_correo');
				}
				console.log(err.sqlMessage);
			}
			else {
				console.log('Usuario ' + username + ' insertado exitosamente')
				res.send('OK');
			};
		})
})

app.post("/getUsuario", (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	dbQuery("SELECT * FROM USUARIO WHERE username = '" + username + "' and password = '" + password + "';", req, res);
})

app.post("/getUsuarioByUsername", (req, res) => {
	let username = req.body.username;

	dbQuery("SELECT * FROM USUARIO WHERE username = '" + username + "';", req, res);
})

/** =========================================================================
 *  Anuncios
 *  =========================================================================
 */

app.get("/anuncios", (req,res) => {
	dbQuery("SELECT a.id 'idAnuncio', a.fecha_subida, a.reservado, a.nombre, a.precio, a.imagen, u.id 'idUsuario', u.username FROM ANUNCIO a JOIN USUARIO u on (a.vendedor = u.id);", req, res);
})

app.post("/addToFavoritos", (req, res) => {
	let userId = req.body.user;
	let anuncioId = req.body.anuncio;
	db.query("INSERT INTO FAVORITOS (user_id, anuncio_id) VALUES (?,?);", [userId, anuncioId], (err,a,f) => {
		if (err) {
			console.log(err.sqlMessage);
		}
		else {
			console.log('Añadido anuncio ' + anuncioId + ' a favoritos del usuario ' + userId + ' exitosamente')
			res.send('OK');
		};
	})
})

app.post("/deleteFavorito", (req, res) => {
	let userId = req.body.user;
	let anuncioId = req.body.anuncio;
	db.query("DELETE FROM FAVORITOS WHERE user_id = ? AND anuncio_id = ?;", [userId, anuncioId], (err,a,f) => {
		if (err) {
			console.log(err.sqlMessage);
		}
		else {
			console.log('Borrado anuncio ' + anuncioId + ' de favoritos del usuario ' + userId + ' exitosamente')
			res.send('OK');
		};
	})
})


app.post("/getIdFavoritos", (req, res) => {
	let userId = req.body.user;
	dbQuery("SELECT anuncio_id FROM FAVORITOS WHERE user_id = " + userId + ";", req, res);
})

app.post("/getFavoritos", (req, res) => {
	let userId = req.body.user;
	dbQuery("SELECT a.id 'idAnuncio', a.fecha_subida, a.reservado, a.nombre, a.precio, a.imagen, u.id 'idUsuario', u.username FROM FAVORITOS f JOIN ANUNCIO a ON (f.anuncio_id = a.id) JOIN USUARIO u on (a.vendedor = u.id) WHERE f.user_id = " + userId + ";", req, res);
})




/** =========================================================================
 *  Chats
 *  =========================================================================
 */

app.post("/saveChat", (req,res) => {
	let logChat = req.body.logChat;
	let message = req.body.message;
	let id = req.body.user;
	let user;

	console.log(id);
	db.query("SELECT * FROM USUARIO WHERE id ="+id+";", (error, results) => {
		if (error) throw error;
		user = results;
		console.log(user)

	rutaArchivo = `logChats/${logChat}`;
	message = `\n${user[0].id}: ${message}`;

	if(!fs.existsSync("logChats/")){
		fs.mkdir('logChats', (err) => {
			if(err){
				console.log(err);
			}else{
				console.log("Carpeta logChats creada");
			}
		});
	}

	fs.appendFile(rutaArchivo, message, (err => {
		if (err){
			console.error("El archivo no esta creado");
			fs.writeFile(rutaArchivo, message, (err => {
				console.log(err);
			}))
		}else{
			console.log("Se ha escrito el texto correctamente");
			res.send("Codigo 200");
		}
	}))
	});

	
})

app.get("/getMessages", (req, res) => {
	let logChat = req.query.logChat; 
	rutaArchivo = `logChats/${logChat}`;
	if(fs.existsSync(rutaArchivo)){
		fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
			if(err){
				console.log(err);
				res.send("202 NOT OK");
			}else{
				const messages = data.split("\n"); 
				
				console.log(messages);

				messages.forEach((linea, index) => {
					console.log(`Linea ${index+1}: ${linea}`)
				})
				res.send(messages);
			}
		})
	}else{
		console.log("El archivo no existe");
		res.send("202 NOT OK");
	}
})

