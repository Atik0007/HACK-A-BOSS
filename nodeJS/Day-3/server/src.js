require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use(express.json());

const { PORT } = process.env;
app.get('/', (req, res) => {
    res.send({
        message: 'Hello World',
    });
});
app.get('/api', (req, res) => {
    res.send({
        message: 'API page',
    });
});

app.post('/pro', (req, res) => {
    res.send({
        message: 'new pro',
    });
});

/* app.use((req, res) => {
    res.send({
        message: 'Hello World',
    });
}); */

app.use((req, res) => {
    res.status(404).send({
        message: 'Page not found',
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
