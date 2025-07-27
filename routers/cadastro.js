import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const cadastro = express.Router();

cadastro.post("/cadastrar", async (req, res) => {
  try {
    const user = req.body;

    const data = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro no Servidor" });
  }
});

cadastro.get("/usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany({ omit: { password: true } });
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro no Servidor" });
  }
});

cadastro.delete("/deletar/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário" });
  }
});

export default cadastro;
