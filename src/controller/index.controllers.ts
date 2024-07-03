import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../database/database";

class IndexController {
  public async index(req: Request, res: Response) {
    try {
      const usuarios = await prisma.usuario.findMany();
      //return res.json({ message: "API Works" });
      const newUser = await prisma.usuario.create({
        data: {
          nombre: "Marisol",
          apelldidos: "nuñez",
          username: "marisol02",
          password: "linux",
        },
      });
      return res.json(usuarios);
    } catch (error: any) {
      return res.status(500).json({ message: `Error ${error.message}` });
    }
  }

  public insert(req: Request, res: Response) {
    try {
      throw new RangeError("Error inesperdo");
      return res.json({ message: "API Works" });
    } catch (error: any) {
      return res.status(500).json({ message: `Error ${error.message}` });
    }
  }

  public update(req: Request, res: Response) {
    try {
      throw new RangeError("Error inesperdo");
      return res.json({ message: "API Works" });
    } catch (error: any) {
      return res.status(500).json({ message: `Error ${error.message}` });
    }
  }

  public delete(req: Request, res: Response) {
    try {
      throw new RangeError("Error inesperdo");
      return res.json({ message: "API Works" });
    } catch (error: any) {
      return res.status(500).json({ message: `Error ${error.message}` });
    }
  }
}

export const indexController = new IndexController();
