const express = require('express');
const fs = require('fs');
const path = require('path');
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
	let imagen = req.body.imagen;

		db.query('INSERT INTO USUARIO (username, password, nombre, correo, telefono, valoracion, localizacion, imagen) VALUES (?,?,?,?,?,?,?,?);', [username,password,nombre,correo,telefono,valoracion,localizacion,imagen], (err,a,f) => {
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

app.post("/updateUsuario", (req, res) => {
	let usuarioId = req.body.usuarioId;
	let username = req.body.username;
	let imagen = req.body.imagen;
	let nombre = req.body.nombre;
    let localizacion = req.body.localizacion;
	let email = req.body.email;
    let telefono = req.body.telefono; 
    let descripcion = req.body.descripcion;

	if(email === ""){
		db.query("UPDATE USUARIO SET username = '" + username + "', imagen = '" + imagen + "', nombre = '" + nombre + "', localizacion = '" + localizacion + "', correo = NULL, telefono = '"
		 + telefono + "', descripcion = '" + descripcion + "' WHERE id = " + usuarioId + ";", (err,a,f) => {
		if (err) {
			console.log(err.sqlMessage);
		}
		else {
			console.log('Actualizado usuario ' + usuarioId + ' exitosamente')
			res.send('OK');
		};
	})
	}else{
		db.query("UPDATE USUARIO SET username = '" + username + "', imagen = '" + imagen + "', nombre = '" + nombre + "', localizacion = '" + localizacion + "', correo = '" +
	email + "', telefono = '" + telefono + "', descripcion = '" + descripcion + "' WHERE id = " + usuarioId + ";", (err,a,f) => {
		if (err) {
			console.log(err.sqlMessage);
		}
		else {
			console.log('Actualizado usuario ' + usuarioId + ' exitosamente')
			res.send('OK');
		};
	})
	}

	
})

/** =========================================================================
 *  Anuncios
 *  =========================================================================
 */

app.get("/anuncios", (req,res) => {
	dbQuery("SELECT a.id 'idAnuncio', a.vendedor, a.fecha_subida, a.reservado, a.nombre, a.precio, a.descripcion, a.imagen, u.id 'idUsuario', u.username FROM ANUNCIO a JOIN USUARIO u on (a.vendedor = u.id);", req, res);
})

app.post("/getAnunciosByUser", (req, res) => {
	let userId = req.body.user;
	dbQuery("SELECT a.id 'idAnuncio', a.fecha_subida, a.reservado, a.nombre, a.precio, a.descripcion, a.imagen, u.id 'idUsuario', u.username FROM ANUNCIO a JOIN USUARIO u on (a.vendedor = u.id) WHERE a.vendedor = " + userId + ";", req, res);
})

app.post("/getAnuncioById", (req, res) => {
	let anuncioId = req.body.anuncio;
	dbQuery("SELECT a.id 'idAnuncio', a.vendedor, a.fecha_subida, a.reservado, a.nombre, a.precio, a.descripcion, a.imagen, u.id 'idUsuario', u.username 'username' FROM ANUNCIO a JOIN USUARIO u on (a.vendedor = u.id) WHERE a.id = " + anuncioId + ";", req, res);
})

app.post("/deleteAnuncio", (req,res) => {
	let anuncioId = req.body.anuncio;
	db.query("DELETE FROM ANUNCIO WHERE id = ?;", [anuncioId], (err,a,f) => {
		if (err) {
			console.log(err.sqlMessage);
		}
		else {
			console.log('Borrado anuncio ' + anuncioId + ' exitosamente')
			res.send('OK');
		};
	})
})

app.post("/deleteFromFavoritos", (req, res) => {
	let anuncioId = req.body.anuncio;
	db.query("DELETE FROM FAVORITOS WHERE idAnuncio = ?;", [anuncioId], (err,a,f) => {
		if (err) {
			console.log(err.sqlMessage);
		}
		else {
			console.log('Borrado todos los anuncios ' + anuncioId + ' de favoritos exitosamente')
			res.send('OK');
		};
	})
})

app.post('/addProduct', (req, res) => {
    let fecha_subida = req.body.fecha_subida;
    let reservado= req.body.reservado;
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let descripcion = req.body.descripcion;
    let vendedor = req.body.vendedor;
    let imagen = req.body.imagen;

	db.query('INSERT INTO ANUNCIO (fecha_subida, reservado, nombre, precio, descripcion, vendedor, imagen) VALUES (?,?,?,?,?,?,?);', [fecha_subida.toString().substring(0,10),reservado,nombre,precio,descripcion,vendedor,imagen], (err,a,f) => {
		if (err) {
			if (err.sqlMessage.endsWith("for key 'usuario.username'")) {
				res.send('duplicated_username');
			} else if (err.sqlMessage.endsWith("for key 'usuario.correo'")) {
				res.send('duplicated_correo');
			}
			console.log(err.sqlMessage);
		}
		else {
			console.log('Anuncio ' + nombre + ' insertado exitosamente')
			res.send('OK');
		};
	})
})

app.post("/addToFavoritos", (req, res) => {
	let userId = req.body.user;
	let anuncioId = req.body.anuncio;
	db.query("INSERT INTO FAVORITOS (idUsuario, idAnuncio) VALUES (?,?);", [userId, anuncioId], (err,a,f) => {
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
	db.query("DELETE FROM FAVORITOS WHERE idUsuario = ? AND idAnuncio = ?;", [userId, anuncioId], (err,a,f) => {
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
	dbQuery("SELECT idAnuncio FROM FAVORITOS WHERE idUsuario = " + userId + ";", req, res);
})

app.post("/getFavoritos", (req, res) => {
	let userId = req.body.user;
	dbQuery("SELECT a.id 'idAnuncio', a.fecha_subida, a.reservado, a.nombre, a.precio, a.imagen, u.id 'idUsuario', u.username FROM FAVORITOS f JOIN ANUNCIO a ON (f.idAnuncio = a.id) JOIN USUARIO u on (a.vendedor = u.id) WHERE f.idUsuario = " + userId + ";", req, res);
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

	//console.log(id);
	db.query("SELECT * FROM USUARIO WHERE id ="+id+";", (error, results) => {
		if (error) throw error;
		user = results;
		console.log(user)

	rutaArchivo = `logChats/${logChat}`;
	finalMessage = `\n${user[0].id}: ${message}`;

	if(!fs.existsSync("logChats/")){
		fs.mkdir('logChats', (err) => {
			if(err){
				console.log(err);
			}else{
				console.log("Carpeta logChats creada");
			}
		});
	}
	if(message !== ""){
	fs.appendFile(rutaArchivo, finalMessage, (err => {
		if (err){
			console.error("El archivo no esta creado");
			fs.writeFile(rutaArchivo, finalMessage, (err => {
				console.log(err);
			}))
			
		}else{
			console.log("Se ha escrito el texto correctamente");
			res.send("Codigo 200");
		}
	}))
	}else{
		res.send("Codigo 202 Mensaje vacio")
	}
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
				
				//console.log(messages);

				messages.forEach((linea, index) => {
					//console.log(`Linea ${index+1}: ${linea}`)
				})
				res.send(messages);
			}
		})
	}else{
		console.log("El archivo no existe");
		res.send([]);
	}
})

app.get("/getChats", (req,res) => {
	let myId = req.query.id;
	let rutaArchivo = './logChats';
  
	const archivos = fs.readdirSync(rutaArchivo);
  
	const archivosFiltrados = archivos.filter(archivo => {
	  const nombreArchivo = path.parse(archivo).name;
	  const idVendedor = nombreArchivo.split('-')[0].replace('chat', '');
	  const idComprador = nombreArchivo.split('-')[1];
	  return idVendedor === myId || idComprador === myId;
	});
  
	console.log(archivosFiltrados);
  
	const productosConOtrosIds = archivosFiltrados.map(archivo => {
	  const idProducto = archivo.split('-')[2].replace('.txt', '');
	  const idVendedor = archivo.split('-')[0].replace('chat', '');
	  const idComprador = archivo.split('-')[1];
	  const otroId = idVendedor === myId ? idComprador : idVendedor;
	  return {id: idProducto, otroId: otroId};
	});
  
	console.log(productosConOtrosIds);
  
	const promises = productosConOtrosIds.map(producto => {
	  return new Promise((resolve, reject) => {
		db.query("SELECT a.id, a.nombre, a.precio, u.username, a.vendedor FROM ANUNCIO a JOIN USUARIO u ON (a.vendedor = u.id) WHERE a.id = " + producto.id, (error, results) => {
		  if (error) reject(error);
		  else resolve({producto: results, otroId: producto.otroId});
		});
	  });
	});
  
	Promise.all(promises)
	  .then(results => {
		console.log(results);
		res.send(results).status(200);
	  })
	  .catch(error => {
		console.error(error);
		res.send(error).status(500);
	  });
  })


/** =========================================================================
 *  Comentarios
 *  =========================================================================
 */

app.get("/comentarios", (req,res) => {
	dbQuery("SELECT c.id 'idComentario', c.autor 'idAutor', c.fecha_publicacion 'date', c.texto 'text', u.username FROM COMENTARIO c JOIN USUARIO u on (c.autor = u.id);", req, res);
})

app.post("/getComentariosByUser", (req,res) => {
	let usuario = req.body.user;
	dbQuery("SELECT c.usuario 'idUsuario', c.autor 'idAutor', c.fecha_publicacion 'date', c.texto 'text', u.username FROM COMENTARIO c JOIN USUARIO u ON (c.autor = u.id) WHERE c.usuario = '" + usuario + "'; ", req, res);
})

app.post("/addComment", (req,res) => {
	let usuario = req.body.usuario;
	let autor = req.body.autor;
	let fecha_publicacion = req.body.fecha_publicacion;
	let texto = req.body.texto;
	
	db.query('INSERT INTO COMENTARIO (usuario, autor, fecha_publicacion, texto) VALUES (?,?,?,?);', [usuario, autor, fecha_publicacion.toString().substring(0,10), texto], (err,a,f) =>{
		if(err){
			console.log(err.sqlMessage);
		}else{
			console.log("Comentario de " + autor + " añadido correctamente");
			res.send('OK');
		}
	})
})

