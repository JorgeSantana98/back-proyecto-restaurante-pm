import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { Login } from '../models/login';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) => {

    const { usuario, contrasenia } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await Login.findOne({ where: { usuario: usuario } });

    if(user) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${usuario}`
        })
    } 
 
    const hashedPassword = await bcrypt.hash(contrasenia, 10);
    
    try {
        // Guardarmos usuario en la base de datos
        await Login.create({
            usuario: usuario,
            contrasenia: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${usuario} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {

    const { usuario, contrasenia } = req.body;

   // Validamos si el usuario existe en la base de datos
   const user: any = await Login.findOne({ where: { usuario: usuario } });

   if(!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${usuario} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(contrasenia, user.contrasenia)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   // Generamos token
   const token = jwt.sign({
    usuario: usuario
   }, process.env.SECRET_KEY || 'pepito123');
   
   res.json(token);
}