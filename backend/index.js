const express = require('express')
const app = express()
const port = 5000
const path = require('path');
const mongoDB = require("./db")
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
const __dirname1 = path.resolve().split('\\').slice(0, -1).join('\\');
console.log(__dirname1);
app.use(express.static(path.join(__dirname1, "/build")));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname1, "build", "index.html"));
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})