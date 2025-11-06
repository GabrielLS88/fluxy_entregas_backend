

export const getEntregas = async (req, res) => {
    try{
        res.status(200).json({
            status: 200,
            data: [{},{}],
            message: 'Consulta concluida.'
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            status: 500,
            data: [],
            message: JSON.stringify(e)
        });
    }    
}