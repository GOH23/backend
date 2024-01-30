import ScaleModel from '../models/ScaleModel.js'
export const GetAllScales = async (req,res)=>{
    const GetAll = await ScaleModel.find();
    res.json(GetAll)
}
export const AddNewScale = async (req,res)=>{
    const AddNewData = new ScaleModel({
        Name: req.body.title,
        ScalePrice: req.body.price,
    })
    const save = await AddNewData.save();
    res.json(save)
}