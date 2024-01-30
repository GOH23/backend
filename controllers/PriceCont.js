import PriceSchema from '../models/PriceModel.js'
export const GetAllPrices= async (req,res)=>{
    const GetAll = await PriceSchema.find();
    res.json(GetAll)
}
export const index = async (req,res)=>{
    res.json({
        mess: 'rest api by GOH33'
    })
}
export const AddNewCard = async (req,res)=>{
    const AddNewData = new PriceSchema({
        Name: req.body.title,
        Price: req.body.price,
    })
    const save = await AddNewData.save();
    res.json(save)
}