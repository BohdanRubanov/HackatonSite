import cookieParser from 'cookie-parser'

import router from './studyApp/studyRouter'
import regRouter from './registrationApp/regRouter'

import express, { Express, Request, Response } from 'express'

import path from 'path'


const app: Express = express()
//створення експерес застосунку

//вказівник на застосунок або сервіс запущений на комп'ютері
const PORT = 8000
//адреса на наш комп'ютер
const HOST = 'localhost'


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))
app.use(express.json()) 
app.use(cookieParser())

app.use('/static/', express.static(path.join(__dirname, 'static'))) 
app.use('/study/', router)
app.use('/', regRouter)

//оброблення get запиту, першим аргументом посилання, другим функція на цей запит
//ця функція відправляє відповідь
app.get('/', (req: Request, res: Response) => {
    res.render('index')
    console.log("ktoto zashel na stranicu")
})
app.get('/aboutUs/', (req: Request, res: Response) => {
    res.render('aboutUs')
   
})
app.get('/events/', (req: Request, res: Response) => {
    res.render('events')
   
})
app.get('/masterclass/', (req: Request, res: Response) => {
    res.render('masterclass')
   
})
app.get('/study/', (req: Request, res: Response) => {
    res.render('study')
   
})
app.get('/reports/', (req: Request, res: Response) => {
    res.render('reports')
   
})
app.get('/profile/', (req: Request, res: Response) => {
    res.render('profile')
   
})

//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () =>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})