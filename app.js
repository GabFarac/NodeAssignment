import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;
const data = [
    {
      id: 1,
      title: "Example Book 1",
      author: "Author 1",
      year: 2020
    },
    {
      id: 2,
      title: "Example Book 2",
      author: "Author 2",
      year: 2018
    },
    {
      id: 3,
      title: "Example Book 3",
      author: "Author 3",
      year: 2022
    }
  ]

app.get('/books', (req, res) => {
    const titles = data.map(book => book.title)
    res.status(200).send(titles)
});

app.get('/books/:id', (req, res) => {
    const {id} = req.params
    const book = data.filter(book => book.id === Number(id))
    res.status(200).send(book[0])
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));