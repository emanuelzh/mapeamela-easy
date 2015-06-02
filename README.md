#mapeamela-easy
Otra herramienta mas de mapeo porque ushahidi es un desmadre y otras estaban gachas.

Ejemplo de uso en [denunciaq.citydevs.mx](http://denunciaq.citydevs.mx)

--

#Requerimientos
- Un Web Server con PHP 5.4+
- MySQL o MariaDB
- [Composer](http://getcomposer.com)

#Instalación

```
# clonar el repo
git clone https://github.com/emanuelzh/mapeamela-easy.git

# cd en el directorio principal
cd mapeamela-easy

# instalar las dependencias de php con Composer
composer install
```

#Configuracion de DB

```
# entrar a la consola de mysql
mysql -u root -p

# crear la base de datos
mysql> CREATE DATABASE mapeo;

# crear el usuario y asignar privilegios
mysql> CREATE USER 'mapeo'@'localhost' IDENTIFIED BY 'password';
mysql> GRANT ALL ON mapeo.* TO 'mapeo'@'%' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
```
Una vez creada la base de datos podemos ejecutar el script que define la estructura

```
# desde el directorio principal
mysql -u root -p mapeo < support/db.sql
```

Finalmente hay que configurar el script para utilizar la base de datos que hemos creado mediante un archivo ```.env```

```
# copiar el archivo .env de ejemplo 
cp .env-example .env

# editar el archivo .env
vim .env
```

Actualizamos los valores en el archivo .env con los datos que creamos

```
DB_USER="mapeo"
DB_PASS="password"
DB_NAME="mapeo"
```

#API
Se puede obtener la informacion del mapeo en formato JSON llamando al script ``data.php``

```
# obtener los datos utilizando cURL
curl -X GET http://denunciaq.citydevs.mx/data.php
```

Y obtenemos la siguiente estructura

```
{
    "status": 200,
    "message": "ok",
    "data": [
        {
            "id": "1",
            "lat": "20.594083537456697",
            "lng": "-100.40250478845212",
            "tipo": "5",
            "fecha_hora": "2015-05-29 18:30:00",
            "created": "2015-05-31 18:42:19",
            "descripcion": "Cortaron el ULock con un sable de luz",
            "tipo_nombre": "Robo (bicicleta)"
        },
        {
            "id": "2",
            "lat": "20.580645118355548",
            "lng": "-100.39044557672116",
            "tipo": "1",
            "fecha_hora": "2015-05-21 15:00:00",
            "created": "2015-05-31 18:57:45",
            "descripcion": "Estaba distraido en tinder y llegó un dude y me quito el telefono y se echo a correr",
            "tipo_nombre": "Asalto (sin arma)"
        }
    ]
}
```

#Comentarios, quejas y contribuciones

- Si te gusta y quieres que siga desarrollando cosas dale estella e invitame una chela.
- Si tiene una bronca o algo falla abre un issue.
- Si quieres contribuir con una funcionalidad o arreglar un bug haz fork al repo, edita y solicita un pull request.
- Si tienes comentarios y mentadas (o me quieres comprar una chela) escribe a [@emanuelzh](http://twitter.com/emanuelzh) o [emanuel@citydevs.mx](mailto:emanuel@citydevs.mx)