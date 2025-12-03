const Delivery = require('../models/Delivery');

// Criar nova entrega
exports.criarEntrega = async (req, res) => {
    try {
        const {
            product,
            code_product,
            price_product,
            zip_code,
            house_number,
            code_tracking,
            status,
            deliveryDate
        } = req.body;

        const novaEntrega = new Delivery({
            product,
            code_product,
            price_product,
            zip_code,
            house_number,
            code_tracking,
            status,
            deliveryDate
        });

        await novaEntrega.save();
        res.status(201).json(novaEntrega);
    }
    catch (err) {
        res.status(400).json({ erro: err.message });
    }
};


// Listar todas as entregas
exports.listarEntregas = async (req, res) => {
    try {
        const entregas = await Delivery.find();
        res.status(200).json(entregas);
    }
    catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


// Buscar entrega por ID
exports.buscarEntregaPorId = async (req, res) => {
    try {
        const entrega = await Delivery.findById(req.params.id);
        if (!entrega) return res.status(404).json({ erro: 'Entrega não encontrada' });

        res.json(entrega);
    }
    catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


// Atualizar entrega por ID
exports.atualizarEntrega = async (req, res) => {
    try {
        const dadosAtualizados = req.body;

        const entregaAtualizada = await Delivery.findByIdAndUpdate(
            req.params.id,
            dadosAtualizados,
            { new: true }
        );

        if (!entregaAtualizada) {
            return res.status(404).json({ erro: 'Entrega não encontrada' });
        }

        res.json(entregaAtualizada);
    }
    catch (err) {
        res.status(400).json({ erro: err.message });
    }
};


// Remover entrega por ID
exports.removerEntregaPorId = async (req, res) => {
    try {
        const entrega = await Delivery.findByIdAndDelete(req.params.id);

        if (!entrega) return res.status(404).json({ erro: 'Entrega não encontrada' });

        res.status(204).json({ mensagem: 'Entrega removida com sucesso' });
    }
    catch (err) {
        res.status(500).json({ erro: err.message });
    }
};
