--  CADENA DE CONEXION EN pom.XML
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>mx.com.gm.jdbc</groupId>
    <artifactId>IntroduccionJDBC</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>18</maven.compiler.source>
        <maven.compiler.target>18</maven.compiler.target>
        <exec.mainClass>IntroduccionJDBC</exec.mainClass>
    </properties>
    <dependencies>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>        
            <version>8.0.19</version>
        </dependency>
    </dependencies>
</project>

-- despues de esto hacer click derecho en el proyecto y dar en clean and build, ojo con el groupId SI NO LO COMPLETA COMPLETARLO YO
-- new project, java with maven, java aplication, rellenar todo menoe el package