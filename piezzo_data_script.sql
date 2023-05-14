use bdinterfaces;

INSERT INTO usuario(username,password,nombre,correo,telefono,valoracion,descripcion,localizacion,imagen) VALUES('nacho','nacho','Nacho A.','esenacho@gmail.com','112233',5,'Toco la guitarra','Málaga','https://files2.soniccdn.com/files/2022/03/28/boden-nx-plini-signature-natural-blackwood-mahogany-trem-6-string-headless-guitar.jpeg');
INSERT INTO usuario(username,password,nombre,correo,telefono,valoracion,descripcion,localizacion,imagen) VALUES('music man','musicman','Music Man','musicman@info.com','765433',5,'Hacemos instrumentos eléctricos de mucha calidad.','EE.UU.','https://cdn.shopify.com/s/files/1/0288/1498/articles/EBMM_logo_600x.jpg?v=1567753250');
INSERT INTO usuario(username,password,nombre,correo,valoracion,descripcion,localizacion,imagen) VALUES('gavin_harrison','gavin','Gavin Harrison','gh@contact.com',5,'Drummer for Porcupine Tree and Pineapple Thief','London','https://i.ytimg.com/vi/DmVLKp7M6fY/maxresdefault.jpg');
INSERT INTO usuario(username,password,nombre,telefono,valoracion,localizacion,imagen) VALUES('manujerez','manuj','Manu Jerez ','67891011',5,'Moriles','https://static.vecteezy.com/system/resources/previews/009/267/561/non_2x/user-icon-design-free-png.png');
INSERT INTO usuario(username,password,nombre,correo,telefono,valoracion,localizacion,imagen) VALUES('ivan','ivan','Iván D.','ivandel@gmail.com','234781',5,'Málaga','https://sm.ign.com/t/ign_es/news/s/sony-expec/sony-expects-to-be-done-with-ps4-games-by-2025_a2x8.1200.jpg');
INSERT INTO usuario(username,password,nombre,valoracion,localizacion,imagen) VALUES('juanjo','juanjo','Juanjo',5,'Málaga','https://static.vecteezy.com/system/resources/previews/009/267/561/non_2x/user-icon-design-free-png.png');

INSERT INTO anuncio(vendedor,fecha_subida,reservado,nombre,precio,descripcion,imagen) VALUES(1,'2023-05-14 13:55:56',0,'Novation Mininova',350,'Sintetizador compacto con un potente motor de sonido. Incluye vocoder.','https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/294771/10353987_800.jpg');
INSERT INTO anuncio(vendedor,fecha_subida,reservado,nombre,precio,descripcion,imagen) VALUES(2,'2023-05-03 00:00:00',0,'Music Man Majesty 7 String',5200,'La nueva Music Man Majesty, versión 7 cuerdas. Cuerpo de mahogany y mástil de arce tostado.','https://www.musicman.es/assets/images/instruments/expanded/majesty-20th/sub-header-right.jpg');
INSERT INTO anuncio(fecha_subida,reservado,nombre,precio,descripcion,vendedor,imagen) VALUES('2023-05-09 00:00:00',0,'Sabian AAX Stage Ride 20"',475,'Ride de la gama AAX de Sabian, en buen estado.',3,'https://media.sweetwater.com/images/items/750/22012X-large.jpg?v=ab0fec13b91bd876');
INSERT INTO anuncio(vendedor,fecha_subida,reservado,nombre,precio,imagen) VALUES(4,'2023-05-14 14:04:30',0,'Saxofón Alto',1295,'https://www.instrumentomania.com/11651-large_default/saxofon-alto-keilwerth-jk-2103.jpg');
INSERT INTO anuncio(vendedor,fecha_subida,reservado,nombre,precio,descripcion,imagen) VALUES(1,'2023-05-14 14:06:23',0,'Boss Overdrive Pedal',120,'Famoso pedal para conseguir un buen sonido Overdrive. Usado dos veces en un estudio de grabación.','https://cdn.shoplightspeed.com/shops/609677/files/41160630/768x768x1/boss-boss-os-2-overdrive-distortion-pedal.jpg');
INSERT INTO anuncio(vendedor,fecha_subida,reservado,nombre,precio,descripcion,imagen) VALUES(5,'2023-05-12 00:00:00',0,'Ibanez SR305EB-WK',400,'Mi hermano no para de tocar en casa y hace mucho ruido, por eso lo vendo.','https://musicalcedar.com/wp-content/uploads/2021/02/Ibanez-SR305EB-Musical-Cedar.png');
INSERT INTO anuncio(vendedor,fecha_subida,reservado,nombre,precio,descripcion,imagen) VALUES(6,'2023-05-13 00:00:00',0,'Yamaha MPG16X',140,'Mesa de mezclas de 16 canales','https://img.pccomponentes.com/articles/25/258683/yamaha-mgp16x-mesa-de-mezclas-16-canales-95de29f4-4234-4ebd-9d0c-42bccc122c80.jpg');

INSERT INTO comentario(autor,usuario,fecha_publicacion,texto) VALUES(1,2,'2023-05-14 14:43:16','Buen vendedor, muy profesional');