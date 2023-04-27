import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import { withRefResolver } from 'fastify-zod'
import swaggerUI from "@fastify/swagger-ui"

   const app = Fastify()
   const port = Number(process.env.PORT) || 3000

   //:::Register Swagger
   app.register( fastifySwagger, withRefResolver({
      // exposeRoute: true,
      openapi: {
         info: {
            title: 'Devathon ed4 API',
            description: 'http://localhost:4000',
            version: '1.0.0'
         },
      }, 
   }))
   app.register(swaggerUI,{
      routePrefix: '/docs',
      uiConfig: {
         docExpansion: 'list',
         deepLinking: false
       },
       staticCSP: true,
       transformStaticCSP: (header) => header,
       transformSpecificationClone: true
   })
   
   //↓ Register routes
   app.get("/", () => ({message: 'Welcome to our api'}))

   app.listen({port:port}, () => {
      try {
         console.log(`Server running at http://localhost:${port}`);
      } catch (err) {
         console.log( err );
         process.exit(1)
      }
   })