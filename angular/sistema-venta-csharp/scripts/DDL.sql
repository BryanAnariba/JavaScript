CREATE DATABASE DBVentas
USE DBVentas;

CREATE TABLE Rol (
	idRol INT PRIMARY KEY IDENTITY( 1,1 ),
	nombre VARCHAR( 50 ),
	fechaRegistro DATETIME DEFAULT GETDATE()
)

CREATE TABLE Menu (
	idMenu INT PRIMARY KEY IDENTITY( 1,1 ),
	nombre VARCHAR( 50 ),
	icono VARCHAR( 50 ),
	url VARCHAR( 50 )
)

CREATE TABLE MenuRol (
	idMenuRol INT PRIMARY KEY IDENTITY( 1,1 ),
	idMenu INT REFERENCES Menu( idMenu ),
	idRol INT REFERENCES Rol( idRol )
)

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY IDENTITY ( 1,1 ),
	nombreCompleto VARCHAR( 50 ),
	correo VARCHAR( 50 ),
	idRol INT REFERENCES Rol( idRol ),
	clave VARCHAR( 255 ),
	fechaRegistro DATETIME DEFAULT GETDATE(),
)

CREATE TABLE Categoria (
	idCategoria INT PRIMARY KEY IDENTITY( 1,1 ),
	nombre VARCHAR( 50 ),
	esActivo BIT DEFAULT 1,
	fechaRegistro DATETIME DEFAULT GETDATE()
)

CREATE TABLE Producto (
	idProducto INT PRIMARY KEY IDENTITY ( 1,1 ),
	nombre VARCHAR( 100 ),
	idCategoria INT REFERENCES Categoria( idCategoria ),
	stock INT,
	precio DECIMAL( 15,2 ),
	esActivo BIT DEFAULT 1,
	fechaRegistro DATETIME DEFAULT GETDATE()
)

CREATE TABLE NumeroDocumento (
	idNumeroDocumento INT PRIMARY KEY IDENTITY( 1,1 ),
	ultimoNumero INT NOT NULL,
	fechaRegistro DATETIME DEFAULT GETDATE()
)

CREATE TABLE Venta (
	idVenta INT PRIMARY KEY IDENTITY ( 1,1 ),
	numeroDocumento VARCHAR( 40 ),
	tipoPago VARCHAR( 50 ),
	total DECIMAL( 15,2 ),
	fechaRegistro DATETIME DEFAULT GETDATE()
)


CREATE TABLE DetalleVenta (
	idDetalleVenta INT PRIMARY KEY IDENTITY ( 1,1 ),
	idVenta INT REFERENCES Venta( idVenta ),
	idProducto INT REFERENCES Producto( idProducto ),
	cantidad INT,
	precio DECIMAL( 15,2 ),
	total DECIMAL( 15,2 )
)