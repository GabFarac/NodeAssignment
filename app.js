import express from 'express';
import data from './books.json' assert {type:'json'}

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.get('/books', (req, res) => {
    const titles = data.map(book => book.title)
    res.status(200).send(titles)
});

app.get('/books/:id', (req, res) => {
    const {id} = req.params
    const book = data.filter(book => book.id === Number(id))
    res.status(200).send(book[0])
});

app.post('/books', (req, res) => {
  const object = req.body;
  data.push(object);
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
    }
  }
  res.sendStatus(200);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));