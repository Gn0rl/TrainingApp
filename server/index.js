import express from 'express'
import cors from 'cors'
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express(),
 PORT = 5000
 app.use(cors())
 app.use(express.json())
 app.get( '/' , ( req, res ) => {
    res.sendFile(`${__dirname}/data/${req.query.src}`)
 } ) //express.static( path.join(__dirname, 'data'))

app.get('/user', (req, res) => {  
    res.json(JSON.parse(fs.readFileSync( 'data/users.json' ))[req.query.id || -1])
})

// app.get('/', (req,res) => {
//     res.json(fs.readFileSync('data/errors.json')[0])
// })

app.get('/login', (req, res) => {
    console.log(req.query.password,JSON.parse(fs.readFileSync( 'data/users.json' )).filter(user => user.name ===  req.query.username ? user.password : null)[0])
    if( req.query && req.query.password && req.query.username &&
    req.query.password === JSON.parse(fs.readFileSync( 'data/users.json' )).filter(user => user.name ===  req.query.username ? user.password : null)[0].password){
        try {
            console.log(req.query)
            res.json(JSON.parse(fs.readFileSync( 'data/users.json' )).filter(user => user.name === req.query.username))
        } catch {
            res.json(JSON.parse(fs.readFileSync('data/errors.json')))
        }
    }
    else{
        res.json(JSON.parse(fs.readFileSync('data/errors.json')))
    }
})

app.get('/register', (req, res) => {
    let breaked = false;
    JSON.parse(fs.readFileSync( 'data/users.json' )).forEach(user => {
        if(user.name === req.query.username){res.json(JSON.parse(fs.readFileSync('data/errors.json'))); breaked = true}
    });
    if(!breaked){
        let newUser = {
            name: req.query.username,
            password: req.query.password,
        }
        
        let newUsers = Array.from(JSON.parse(fs.readFileSync('data/users.json')))
    
        newUsers.push(newUser)
    
        fs.writeFileSync('./data/users.json', JSON.stringify(newUsers, 4, 4))
        res.json(newUser)
    }
})

app.get('/change', ( req, res ) => {
    const users = Array.from(JSON.parse(fs.readFileSync('data/users.json')))
    let userNow
    users.forEach( (user, i) => {
        if ( user.name === req.query.username ) userNow = i
    } ) 
    users[userNow][req.query.key] = req.query.value
    fs.writeFileSync('./data/users.json', JSON.stringify(users, 4, 4))
    res.json(users[userNow])
})
app.get( '/programs', ( req, res ) => {
    res.json(JSON.parse(fs.readFileSync('data/programs.json')))
} )
app.get( '/program', ( req, res ) => {
    res.json(JSON.parse(fs.readFileSync('data/programs.json'))[Number(req.query.id)])
} )

app.get('/news', (req, res) => {
    res.json(JSON.parse(fs.readFileSync('data/news.json')))
})

app.listen( PORT, function () {
    console.log(`Server started on port ${PORT}`)
} )