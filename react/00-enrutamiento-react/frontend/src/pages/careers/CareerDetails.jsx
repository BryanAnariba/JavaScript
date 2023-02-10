import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data/info';

export const CareerDetails = () => {
    const { id } = useParams();
    const [ career, setCareer ] = useState({});

    useEffect(() => {
        //console.log({ id });
        let careerData = [];
        careerData = data.careers.filter( careerItem => careerItem.id === Number(id) );
        console.log({ careerData });
        if ( careerData.length === 0 ) {  
            throw new Error( `Could not find that career` );
        } 
        setCareer( careerData[0] );
        
    },[]);

    return (
        <div className="career-details">
            <h2>Career Details for { career.title }</h2>
            <p>Starting Salary: { career.salary }</p>
            <p>Location: { career.location }</p>
        </div>
    );
}

/*
CREATE DATABASE DBCarritoCompras
GO

USE DBCarritoCompras
GO

CREATE TABLE Categoria (
	idCategoria INT PRIMARY KEY IDENTITY,
	descripcionCategoria VARCHAR( 100 ),
	estadoCategoria BIT DEFAULT 1,
	createdAt DATETIME DEFAULT GETDATE(),
	updatedAt DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE Marca (
	idMarca INT PRIMARY KEY IDENTITY,
	descripcionMarca VARCHAR( 100 ),
	estadoMarca BIT DEFAULT 1,
	createdAt DATETIME DEFAULT GETDATE(),
	updatedAt DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE Producto (
	idProducto INT PRIMARY KEY IDENTITY,
	nombreProducto VARCHAR(150),
	descripcionProducto VARCHAR(250),
	idMarca INT REFERENCES Marca( idMarca ),
	idCategoria INT REFERENCES Categoria( idCategoria ),
	precioProducto DECIMAL( 15,2 ) DEFAULT 0,
	stockProducto INT,
	rutaImagenProducto VARCHAR( 255 ),
	nombreImagenProducto VARCHAR( 255 ),
	estadoProducto BIT DEFAULT 1,
	createdAt DATETIME DEFAULT GETDATE(),
	updatedAt DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE Cliente (
	idCliente INT PRIMARY KEY IDENTITY,
	nombreCliente VARCHAR( 100 ),
	apellidosCliente VARCHAR( 100 ),
	correoCliente VARCHAR( 100 ),
	claveCliente VARCHAR( 255 ),
	reestablece BIT DEFAULT 0,
	createdAt DATETIME DEFAULT GETDATE(),
	updatedAt DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE Carrito (
	idCarrito INT PRIMARY KEY IDENTITY,
	idCliente INT REFERENCES Cliente( idCliente ),
	idProducto INT REFERENCES Producto( idProducto ),
	cantidad INT
);
GO

CREATE TABLE Venta (
	idVenta INT PRIMARY KEY IDENTITY,
	idCliente INT REFERENCES Cliente( idCliente ),
	totalProducto INT,
	montoTotal DECIMAL( 15,2 ),
	contacto VARCHAR( 50 ),
	idDistrito VARCHAR( 10 ),
	telefono VARCHAR( 50 ),
	direccion VARCHAR( 255 ),
	idTransaccion VARCHAR( 50 ),
	createdAt DATETIME DEFAULT GETDATE()
); 
GO

CREATE TABLE DetalleVenta (
	idDetalleVenta INT PRIMARY KEY IDENTITY,
	idVenta INT REFERENCES Venta( idVenta ),
	idProducto INT REFERENCES Producto( idProducto ),
	cantidad INT,
	total decimal( 15,2 )
);
GO

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY IDENTITY,
	nombreUsuario VARCHAR( 100 ),
	apellidoUsuario VARCHAR( 100 ),
	correoUsuario VARCHAR( 100 ),
	claveUsuario VARCHAR( 255 ),
	reestablecer BIT DEFAULT 1,
	estadoUsuario BIT DEFAULT 1,
	createdAt DATETIME DEFAULT GETDATE(),
	updatedAt DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE Departamento (
	idDepartamento VARCHAR( 2 ) PRIMARY KEY NOT NULL,
	descripcionDepartamento VARCHAR( 45 ) NOT NULL
);
GO

CREATE TABLE Provincia (
	idProvincia VARCHAR( 4 ) PRIMARY KEY NOT NULL,
	idDepartamento VARCHAR( 2 ) REFERENCES Departamento( idDepartamento ) NOT NULL,
	descripcionProvincia VARCHAR( 45 ) NOT NULL
);
GO

CREATE TABLE Distrito (
	idDistrito VARCHAR( 6 ) PRIMARY KEY NOT NULL,
	idProvincia VARCHAR( 4 ) REFERENCES Provincia( idProvincia ),
	idDepartamento VARCHAR( 2 ) REFERENCES Departamento( idDepartamento ) NOT NULL,
	descripcionProvincia VARCHAR( 45 )
);
GO

*/
