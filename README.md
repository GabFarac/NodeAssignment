## Question Prompt:

You are tasked with building a basic web server using Express.js that serves as an API for a simple database stored in a JSON file. The database contains information about books. Your goal is to create an Express server with the following routes:

1. **GET `/books`:** This route should return the list of all books in the database.
2. **GET `/books/:id`:** This route should return the book with the specified ID.
3. **POST `/books`:** This route should allow the addition of a new book to the database.
4. **PUT `/books/:id`:** This route should allow updating the information of an existing book based on the provided ID.
5. **DELETE `/books/:id`:** This route should allow the deletion of a book from the database based on the provided ID.

### Instructions:

1. Create an Express server in a file called `app.js`.
2. Use the provided `books.json` file as your database. You can assume the JSON file is an array of objects, where each object represents a book with the following properties: `id`, `title`, `author`, and `year`.
3. Implement the routes mentioned above. Ensure that the routes handle different HTTP methods appropriately.
4. Test your API using tools like Postman or curl commands to make sure all routes work as expected.

### `books.json` Sample Data:

```json
[
  {
    "id": 1,
    "title": "Example Book 1",
    "author": "Author 1",
    "year": 2020
  },
  {
    "id": 2,
    "title": "Example Book 2",
    "author": "Author 2",
    "year": 2018
  },
  {
    "id": 3,
    "title": "Example Book 3",
    "author": "Author 3",
    "year": 2022
  }
]
```

### Grading Criteria:

- Proper implementation of the specified routes (GET, POST, PUT, DELETE).
- Handling of route parameters (e.g., `:id`) to perform actions on specific books.
- Correctly reading and writing data to the `books.json` file.
- Error handling for cases where a book with a specified ID does not exist.
