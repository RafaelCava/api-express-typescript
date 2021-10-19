const swaggerAutogen = require('swagger-autogen')

swaggerAutogen()('./swagger/swagger.json', ['./src/App.ts'])
