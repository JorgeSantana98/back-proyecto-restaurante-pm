import { Router } from 'express';
import { getReservas, getReserva,deleteReserva, postReserva, updateReserva } from '../controllers/reservacionController';

const router = Router();

router.get('/', getReservas);
router.get('/:id', getReserva);
router.delete('/:id', deleteReserva);
router.post('/', postReserva);
router.put('/:id', updateReserva);

export default router;