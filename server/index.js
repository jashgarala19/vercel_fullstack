const express = require('express')
const cors = require('cors')
const app = express()
app.use(
    cors({
      origin: "*",
    })
  );

app.get('/', (req, res) => {
    res.send('Express JS on Vercel')
})

app.get('/ping', (req, res) => {
    res.send('pongggg 🏓')
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



