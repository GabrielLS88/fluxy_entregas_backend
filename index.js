import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { getEntregas } from './src/service/getEntregas.js'; 
import { postEntregas } from './src/service/postEntregas.js';
import { putEntregas } from './src/service/putEntregas.js';
import { deleteEntregas } from './src/service/deleteEntregas.js';

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5090;

app.get('/entregas', getEntregas);

app.post('/entregas', postEntregas);

app.put('/entregas', putEntregas);

app.delete('/entregas', deleteEntregas);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});