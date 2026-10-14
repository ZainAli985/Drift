import express from "express"
const app = express()
const port = 3000
let c;

const sum = (a,b) =>{
   c = a+b;
  return c;
};

sum(5,5);

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Hello World!",
    result: c, 
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})