import { Request, Response } from 'express';
import Reservacion from '../models/reservacion';

export const getReservas = async (req: Request, res: Response) => {
    const listReservas = await Reservacion.findAll()

    res.json(listReservas)
}

export const getReserva = async (req: Request, res: Response) => {
    const { id } = req.params;
    const reservacion = await Reservacion.findByPk(id);

    if (reservacion) {
        res.json(reservacion)
    } else {
        res.status(404).json({
            msg: `No existe una reservacion con el id ${id}`
        })
    }
}

export const deleteReserva = async (req: Request, res: Response) => {
    const { id } = req.params;
    const reserva = await Reservacion.findByPk(id);

    if (!reserva) {
        res.status(404).json({
            msg: `No existe un reservacion con el id ${id}`
        })
    } else {
        await reserva.destroy();
        res.json({
            msg: 'La reservacion fue eliminado con exito!'
        })
    }

}

export const postReserva = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Reservacion.create(body);

        res.json({
            msg: `La reserva fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateReserva = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const reserva = await Reservacion.findByPk(id);

    if(reserva) {
        await reserva.update(body);
        res.json({
            msg: 'La reserva fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe una reserva con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}