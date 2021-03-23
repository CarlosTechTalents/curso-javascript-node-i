// Al ejecutar esta petición en un navegador, en Herramientas de Desarrollador, en la sección Network, ya podremos ver los datos traidos por la petición GET

const request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/users')
request.send()
