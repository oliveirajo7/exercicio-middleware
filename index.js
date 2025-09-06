import express from 'express';
import { autenticarUsuario } from './auth.js';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("Chamando API");
  next();
});

const usuario = {
  id: 1,
  nome: "admin",
  email: "admin@gmail.com",
};

app.get('/usuarios', (req, res) => {
  res.status(200).json(usuario);
});

app.post('/usuarios', autenticarUsuario, (req, res) => {
  res.status(201).json({ mensagem: "Rota Permitida" });
});

app.listen(3000); 