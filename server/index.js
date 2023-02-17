const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({origin:true}));

   

app.get('/', (req, res) => {
    res.send('Express JS on Vercel')
})

app.get('/ping', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.send('jash 🏓')
})


const port = process.env.PORT || 8000

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})



