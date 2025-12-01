const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/delivery.controller');

router.post('/entrega', deliveryController.criarEntrega);
router.get('/entrega', deliveryController.listarEntregas);
router.get('/entrega/:id', deliveryController.buscarEntregaPorId);
router.delete('/entrega/:id', deliveryController.removerEntregaPorId);
router.put('/entrega/:id', deliveryController.atualizarEntrega);

module.exports = router;