create database Taqueria;
use Taqueria;
create table usuario(
  id int(11) NOT NULL,
  nombre varchar(60) NOT NULL,
  apellido_paterno varchar(30) NOT NULL,
  apellido_materno varchar(30) NOT NULL,
  correo varchar(80) NOT NULL CHECK (`correo` regexp '^[^@]+@[^@]+\\.[^@]{2,}$'),
  usuario varchar(30) NOT NULL,
  contrasena varchar(24) NOT NULL,
  fecha_registro datetime NOT NULL,
  perfil varchar(20) NOT NULL,
  estatus int(1) NOT NULL,
  telefono varchar(10) NOT NULL CHECK (`telefono` regexp '^[0-9]{10}')
);
INSERT INTO usuario (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `correo`, `usuario`, `contrasena`, `fecha_registro`, `perfil`, `estatus`, `telefono`) VALUES
(1, 'Jesus', 'Romero', 'Arvizu', 'jesus@ues.mx', 'Admin', 'admin123', '2024-03-11 23:49:09', 'Admin', 1, '6621112233'),
(2, 'Kenai', 'Graff', 'Moreno', 'kenai@ues.mx', 'kenai', 'kenai123', '2024-03-11 23:49:09', 'Usuario', 1, '6629998877');
select * from usuario;
create table Producto(
Id int auto_increment primary key,
Nombre varchar(60),
Precio decimal(10,2)
);
create table detalleVenta(
IdVenta int auto_increment primary key,
IdProd int references Producto(Id),
Cantidad int,
Total decimal(10,2)
)