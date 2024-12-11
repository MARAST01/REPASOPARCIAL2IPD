
# Imagen base de Node.js
FROM node:16
#cardel recomiendo no usar latest por cuesitones de retroalimentacion

# Instala MariaDB
RUN apt-get update && apt-get install -y mariadb-server && apt-get clean
#la sentencia run es lo que se va a ejecutar dentro del contenedor, el apt-get instala paquetes en este caso MariaDB

# Establece el directorio de trabajo
WORKDIR /usr/src/app
#el WORKDIR es el directorio de trabajo donde se va a trabajar

# Copia los archivos de la aplicación al contenedor
COPY . .
#copia los archivos hacia el contenedor

# Instala las dependencias de Node.js
RUN npm install
#construye los modulos de la app

# Configura MariaDB para ejecutarse en segundo plano y establece la contraseña de root
RUN echo "mysqld_safe &" > start.sh
RUN echo "sleep 5" >> start.sh
RUN echo "mysql -uroot -e \"ALTER USER 'root'@'localhost' IDENTIFIED BY 'root'; FLUSH PRIVILEGES;\"" >> start.sh
RUN echo "mysql -uroot -proot -e \"CREATE DATABASE IF NOT EXISTS billing;\"" >> start.sh
RUN echo "mysql -uroot -proot billing < /usr/src/app/schema.sql" >> start.sh
#esta configurando el MYsql,

# Ejecuta MariaDB y luego inicia Node.js
CMD sh start.sh && node index.js
#Iniciamos el index.js 

# Exponemos los puertos
EXPOSE 3000 3306
#el contenedor va a exponer los puertos 3000 node jsy 3306 db
#miremos ahora el index.js




