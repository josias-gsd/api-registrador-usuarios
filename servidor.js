import express from "express";
import rotaCadastrar from "./routers/cadastro.js";
import usuariosRota from "./routers/cadastro.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", rotaCadastrar);
app.use("/", usuariosRota);

app.listen(3001, () => console.log("Servidor Rodando🤾"));
