const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  res.send(
    { hi: 'howdy' }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000
