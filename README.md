# bsale_test

Bsale Shop
Bsale Shop

Bsale Shop es un challenge tecnico para la empresa "Bsale" acerca de una tienda de licores.

El proyecto es una API RESTful. Su creación es parte de el proceso de seleccion para ser parte de el equipo de desarrolladores de dicha empresa, a continuacion se mostrara a detalle la elaboracion de cada una de las secciones que corresponden a la aplicacion tanto en el Front End como en el Back End.

Installation
Para poder hacer uso de el proyecto hacemos git clone al repositorio.

  cd api/
  npm install
  npm start
Environment Variables
Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

DB_HOST = mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com

DB_USER = bsale_test

DB_PASSWORD= bsale_test

DB_NAME = bsale_test

Back End
El Back End fue realizado usando las siguientes tecnologias:

NodeJS
Express
Mysql
Sequelize
Para comenzar con el desarrollo de la aplicacion, primero se hizo la conexion a la base de datos Mysql, para luego crear los modelos correspondientes haciendo uso de Sequelize y a su vez creando las relaciones de las mismas, para luego configurar el servidor para hacer la conexion a las rutas y a la base de datos. Una vez realizada esta tarea se procede a crear los controllers, los cuales son los encargados de hacer toda la logica para hacer uso de las rutas.

Las cuales son:

categories:

Contiene la peticion para obtener todas las categorias.
Contiene la peticion para obtener un producto segun su categoria.
Products:

Contiene la peticion para obtener todos los productos.
Contiene la peticion para obtener un producto segun su nombre.
Order:

Contiene la peticion para ordenar todos los productos en orden ascendente y descendente.
Front End
El Front End fue realizado usando las siguientes tecnologias:

JavaScript
HTML
CSS
En la realizacion del Front End en esta aplicacion se uso JavaScript Vanilla. El cual hace las peticiones correspondientes a la API para mostrar todas las secciones correspondientes a la aplicacion.

Se integro un buscador de productos, una seccion para filtrar por categorias asi como tambien un ordenamiento.

Todo lo anterior mencionado haciendo consumo de nuestra API RESTful.

Se agregaron estilos para dar una experiencia de usuario adecuada ademas de ser responsive.

🔗 Documentacion Detallada
Para visualizar el detalle de la documentacion de esta aplicacion puede ir al siguiente enlace.

Documentacion Detallada

Conclusiones
La experiencia durante el desarrollo de esta aplicacion estuvo llena de retos por resolver los cuales pienso que son la mejor manera de seguir superandose cada dia, Me parecio un aprendizaje el poder documentar todas las caracteristicas que posee dicha aplicacion sin duda alguna una enseñanza mas para seguir mejorando.

🔗 Links
portfolio linkedin