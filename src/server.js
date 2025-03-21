import app from "./app.js";

const PORT = process.env.PORT || 3333;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default server;
