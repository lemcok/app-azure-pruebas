import { PORT } from './config'
import { buildApp } from "./app";

const server = buildApp()

async function main (){
   try {
      await server.listen({port:PORT})
      console.log(`Server running at http://localhost:${PORT}`);
   } catch (err) {
      console.log( err );
      process.exit(1)
   }
}

main();