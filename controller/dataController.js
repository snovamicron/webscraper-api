
// models
const dataModel = require('../models/dataModel')



exports.setData = async (req, res) => {
    try {
            const response = await dataModel.create(req.body)
            res.status(200).json({
                success:true,
                response
            })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'internal server error'
        })
    }
}





