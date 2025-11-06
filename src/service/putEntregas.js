

export const putEntregas = async (req, res) => {
    try {
        const idEntrega = req.params.id;
        const entrega = req.body;

        if (!idEntrega) {
            res.status(400).json({
                status: 400,
                data: [],
                message: "Id da entrega não esta sendo passada no parametro da URL, exemplo: 'entregas/1'."
            });
        }

        res.status(200).json({
            status: 200,
            data: [{}, {}],
            message: 'Atualização concluida.'
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            status: 500,
            data: [],
            message: JSON.stringify(e)
        });
    }
}