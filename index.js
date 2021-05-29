const express = require('express');
const app = express();


app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.get('/api/arsenal', (req,res) => {
    res.send(['Laca', 'Xhaka', 'Saka','ESR','Ozil']);
})

app.get('/api/arsenal/:year/:month', (req,res) => {
    res.send(req.params)
})

const port = process.env.PORT || 8000;
app.listen(8000, () => console.log(`Listening on port ${port}.....`));