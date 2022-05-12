import express, { Request, Response, Express } from 'express'
// import router from './route'
// import DBConnect from './dbConfigs'
// import { RequestHandler } from 'express-serve-static-core'
import path from 'path'

// call express
const server: Express = express() // define our app using express

// configure app to use bodyParser for
// Getting data from body of requests
// server.use(express.urlencoded({ extended: true }) as RequestHandler)
server.use(express.json())

// connect to database. right now it's just working with mongodb
// but in near future it will be configured for other databases as well
// DBConnect.dbConnection()

// Send index.html on root request
server.use(express.static(path.join(__dirname, '../../public')))
server.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
  // res.send('Hello')
})

// START THE SERVER
// =============================================================================
const port: number = Number(process.env.PORT) || 8080 // set our port
server.listen(port)
console.log(`Server listening on ${port}`)
