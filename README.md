# Tarea de Consumo de APIs BLCE
## Información General
Este trabajo fue desarrollado utilizando el framework de Angular el cual se encuentra en [Angular CLI](https://github.com/angular/angular-cli) en la version 18.2.11.
Tambien se implementó material para poder darle diseño a la tabla en la que se muestran los datos que se recuperan de la API a la cual  se está realizando la consulta. 
Por otra parte la API que se consumió en este proyecto consite en un datos de usuarios de los cuales se recuperaron sus ids, nombres, correos y el rol que tenían cada uno de ellos, la API se puede encontrar en el siguiente link: https://api.escuelajs.co/api/v1/users

## Conexión del servicio con la API

Para realizar la conexión con la API se realizó la creación de un servicio en el cual se importa el componente HttpClient con el cual se mantendrá la comunicación entre el nuetro proyecto y la API.
Posterior a ello se realiza la obtención de los datos mediante el método getUsers con el cual se obtienen el observable de la API y se exporta para poder utilizarlo dentro de nuestro proyecto.
![image](https://github.com/user-attachments/assets/743fa1ec-cc83-4bf4-a180-313faf2ff23f)

## Componente de la lista de usuario (arcivo ts)
### Inicialización
Debido a que se utilizó el componente Table de angular material primero de declaran las columnas de la tabla ddentro de un arreglo de string, así mismo se declara una variable de los datos del MatTable que esté vacía en un primer momento debido a que es esta es donde se guardaran los datos de la API.
![image](https://github.com/user-attachments/assets/0b98452b-bf27-4fb4-b20c-d50dd44567b7)

### Método ngOnInit()
Con el método ngOnInit se recuperan los datos del observable el getUsers obteniendo los datos de y asignandoselos a la variable de dataSource que se creó con anterioridad. Este método es importante porque se ejecuta al momento de incializar la ventana de la página permitiendo que se colsulten y se obtengan los datos una sola vez.
![image](https://github.com/user-attachments/assets/1bc52be6-4db5-4697-84ab-37b9ea211539)

### Método ngAfterViewInit()
Tambien se cuenta con el método ngAfterViewInit con el cual se espera a que todos los hijos terminen sus procesos para poder actualizar la página, esto es muy importante para que al momento de filtrar o avanzar entre las paginaciones, se puedan realizar todos los procesos de manera adecuada antes de mostarar la página.
![image](https://github.com/user-attachments/assets/f2bf0bb9-a820-43b0-8154-48c8044f18ba)


### Método applyFilter()
Este método se usa principalmente para el filtro que se implementó, en este métodod se obtiene el valor que se está buscando en el input, posteriormente realiza el filtro de todos aquellos datos que coincidan con el valor ingresado, finalmente se realiza la actualización de la página y del paginador a los primeros elementos.
![image](https://github.com/user-attachments/assets/8e00e369-fd55-463f-9b76-cdc5cc27f49f)

### Método handleError()
Finalmente este método se utiliza para que al momento que ocurra un error de que no se encuentre una URL del avatar o no deje acceder al archivo se coloque en su lugar una imagen por default que se seleccionó anteriormente y se alojó en la carpeta public del proyecto.
![image](https://github.com/user-attachments/assets/ce8b8531-5dbd-4071-ae13-9e0afa46ece0)


## Componente de la lista de usuario (archivo html)

El archivo está compuesto inicialmente por un encabezado del tittulo principal de la tabla y seguido del filtro que se implementó utilizando el form de material. Se realiza el llamado al método de applyFilter cada vez que se ingresan carcateres en el input y de esta manera se realiza el filtro.
![image](https://github.com/user-attachments/assets/ec770813-c7a3-4584-be80-f116a9efc252)

El cuerpo principal del html consiste en el mat-table de material en el cual ya nos ofrece la opción de tener tablas dinámicas en las cuales se adapta de acuerdo a los datos que se van presentando, ademas que va acomodando los datos de acerdo a las colunas que se han declarado con anterioridad dentro del archivo ts, gracias al componente de material ya no es necesario iterar mediante *NgFor o @for debido a que esto ya lo realiza el mismo componete.
![image](https://github.com/user-attachments/assets/a12f0b61-64e9-4d5c-96b4-2fa27e9ec33f)

Otro punto a reconocer es que al moneto de declara que se está realizando la etiqueta table se especifica de donde se están obteniendo los datos con los que se rellenará la tabla.
![image](https://github.com/user-attachments/assets/fd7dcb1e-5865-49ec-ba17-d85b19015216)

Finalmente es importante recalcar que en el apartado de imagenes se colocan las imagenes que se hayan encontrado y ademas se realiza el manejo del error para cuando no haya acceso a las imagenes.
![image](https://github.com/user-attachments/assets/f74f9eae-f599-44e8-84eb-01d937bf66f8)

Por último se ejecuta el apartado de la paginación utilizando el mat-paginator de material.
![image](https://github.com/user-attachments/assets/8ba3e798-f04e-425c-b84d-bcd38a8342ef)


## Ejecución

La ejecución muestra la tabla con los datos que se estan consumiendo de la API, hay algunos registros en los cuales no se puede acceder a la imagen es por ello que aparecen una imagen con una foto de usuario. 
![image](https://github.com/user-attachments/assets/9c4c0944-128f-4b06-ae48-dde6e6dca459)


