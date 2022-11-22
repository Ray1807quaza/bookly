const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { urlencoded } = require('express')
require('dotenv').config();
const { readdirSync } = require('fs')

app = express();

app.use(cors())
app.use(express.json({ limit: '5mb' }))
app.use(urlencoded({ extended: true }))

mongoose.connect(process.env.DATABASE_STRING).then(() => {
  console.log('db connected');
}).catch(error => {
  console.log("Database Error =>", error)
})

app.get("/api/test", (req, res) => {
  return Response(res, 200, true, { message: 'app is up and running' })
})

readdirSync('./routes').map((e) => app.use('/api', require(`./routes/${e}`)))

app.use((req, res, next) => {
  return Response(res,400,false,{message: 'endpoint not found'})
});

app.listen(8000, () => { console.log('server is listening to port 8000'); })