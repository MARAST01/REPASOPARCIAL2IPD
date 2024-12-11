#levantar un servicio de bd con mysql sin tener que instalarlo usando docker hub 

# Imagen base
FROM mysql:9.1.0

#variables de entorno
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=prueba
ENV MYSQL_USER=prueba
ENV MYSQL_PASSWORD=prueba

# puerto

EXPOSE 3306 
#puerto por defecto de mysql

#no logueamos en hub.docker.com/
#nos logueamos en consola docker login

# guardamos y ejecutamos en consola esto docker image build -t my-mysql
# para ver que se creo con exito ejecutamos docker image ls

#y ejecutamos docker run -p 3306:3306 my-mysql:latest 

#verificamos la imagen con docker ps 

#ahora abrimos el adminer



