import express from 'express';
import  fs from 'fs';

const app = express();
const PORT = process.env.PORT || 8080;
const data = JSON.parse(fs.readFileSync('books.json').toString());
app.use(express.json());

app.get('/books', (req, res) => {
    const titles = data.map(book => book.title)
    res.status(200).send(titles)
});

app.get('/books/:id', (req, res) => {
    const {id} = req.params
    const book = data.find(book => book.id === Number(id))
    res.status(200).send(book)
});

app.post('/books', (req, res) => {
  const object = req.body;
  if(!object.title || !object.author || !object.year){
    return res.sendStatus(422)
  }
  let id = data.length+1
  let flag = 0
  while(flag === 0){
    flag = 1
    for(let i = 0; i < data.length; i++){
      if(data[i] === data.length){
        id++
        flag = 0
        break
      }
    }
  }
  const newBook = {
    id,
    title: object.title,
    author: object.author,
    year: object.year,
  }
  data.push(newBook)
  fs.writeFileSync('books.json', JSON.stringify(data));
  res.sendStatus(200);
})

app.put('/books/:id', (req, res) => {
  const {id} = req.params
  const object = req.body
  for(let i = 0; i < data.length; i++){
    if(data[i].id === Number(id)){
      data[i] = {
        id: Number(id),
        title: object.title || data[i].title,
        author: object.author || data[i].author,
        year: object.year || data[i].year,
      }
      break
    }
  }
  fs.writeFileSync('books.json', JSON.stringify(data))
  res.sendStatus(200);
})

app.delete('/books/:id', (req, res) => {
  const {id} = req.params
  for(let i = 0; i < data.length; i++){
    if(data[i].id === Number(id)){
      data.splice(i, 1)
      break
    }
  }
  fs.writeFileSync('books.json', JSON.stringify(data))
  res.sendStatus(200);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));