const express = require("express");
const app = express();
const pokemonRoutes = require('./routes/pokemonRoutes')

app.use(express.json());
app.use(pokemonRoutes);


const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.status(404).json({ message: "invalid url" });
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server Error" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app