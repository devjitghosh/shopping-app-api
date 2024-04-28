import express from 'express';
const app = express();
import router from './routes/routes';
import bodyparser from 'body-parser';
import cors from 'cors';

app.use(express.static('public'))
app.use(bodyparser.json());
app.use(cors());
app.get('/', (req, res, next)=> {
    res.status(200).json({
        status: 'success',
        body: "base path"
    })
});

app.use(router);

export default app;