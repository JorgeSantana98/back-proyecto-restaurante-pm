import { Router } from 'express';
import { getReservas, getReserva,deleteReserva, postReserva, updateReserva } from '../controllers/reservacionController';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken,getReservas);
router.get('/:id', getReserva);
router.delete('/:id', deleteReserva);
router.post('/', postReserva);
router.put('/:id', updateReserva);

export default router;