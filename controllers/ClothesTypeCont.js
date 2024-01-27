import ClothesType from '../models/ClothesType.js'
export const GetAllTypes = async (req,res)=>{
    const GetAll = await ClothesType.find();
    res.json(GetAll)
}
export const AddNewType = async (req,res)=>{
    const AddNewData = new ClothesType({
        Name: req.body.name,
        
    })
    const save = await AddNewData.save();
    res.json(save)
}