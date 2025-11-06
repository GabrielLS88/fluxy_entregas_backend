

export const postEntregas = async (req, res) => {
    try {
        const entrega = req.body;

        if(!entrega){
            res.status(400).json({
                status: 400,
                data: [],
                message: "Id da entrega não esta sendo passada no parametro da URL, exemplo: 'entregas/1'."
            });
        }

        res.status(200).json({
            status: 200,
            data: [{}, {}],
            message: 'Criação concluida.'
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