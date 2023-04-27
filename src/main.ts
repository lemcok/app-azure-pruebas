import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import { withRefResolver } from 'fastify-zod'
import swaggerUI from "@fastify/swagger-ui"

   const app = Fastify({
      logger: true
   })

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
   app.get("/", async(request, reply) => ({message: 'Welcome to our api'}))

   async function start(){
      try {
         const port = Number(process.env.PORT) || 8080
         await app.listen({port, host: '0.0.0.0'}, () => {
            console.log(`Server running at http://localhost:${port}`);
         })
      } catch (err) {
         app.log.error(err)
         console.log( err );
         process.exit(1)
      }
   }

   start()