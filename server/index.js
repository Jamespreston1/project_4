const express = require('express');
const supabase = require("./supabase.js")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Enable JSON parsing

app.get('/', async (req, res) => {
    const { data } = await supabase.from("project4").select();
  res.json(data);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

