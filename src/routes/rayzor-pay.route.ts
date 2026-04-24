import express from 'express'
import { createPaymentLink } from '../controllers/rayzor-pay.controller.js';

const router = express.Router();

router.post('/',createPaymentLink)


export default router