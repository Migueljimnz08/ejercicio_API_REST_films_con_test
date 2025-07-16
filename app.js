const express = require('express');
const cowsay = require('cowsay');
const app = express();
const port = process.env.PORT || 3000;

// Rutas
const filmsRoutes = require('./routes/films')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Rutas
//API
app.use('/api/film', filmsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Film not found' });
});

app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Example app listening on port http://localhost:${port}`,
      f: "tux", // Use the tux ASCII art // tux
    })
  );
});

module.exports = app;