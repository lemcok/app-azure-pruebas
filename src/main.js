import express from 'express'

const app = express()
const port = process.env.PORT || 3000;

app.use('/', async(req, res) => {
   res.json({message: 'welcome my api'})
})
app.listen(port, async() => {
   console.log( `server at http://localhost:${port}` )
})