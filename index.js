import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import * as CarsCont from './controllers/PriceCont.js'
import * as ClothesType from './controllers/ClothesTypeCont.js'
import * as ScalesCont from './controllers/ScaleCont.js'
import multer, { diskStorage } from 'multer';
import TovarsModel from './models/TovarsModel.js';
import {config} from 'dotenv';

config();
const app = express();
app.use(cors());
app.use(express.json())

const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+'.jpg')
    },
    
})
const upload = multer({storage: storage})
//process.env.DB_CONN
mongoose.connect("mongodb+srv://user1:user1@cluster0.vdcz2es.mongodb.net/")
    .then(() => console.log('Успешно подключена бд'))
    .catch((err) => console.log(err))
app.get('/', CarsCont.index)
app.get("/scales",ScalesCont.GetAllScales)
app.post("/scales",ScalesCont.AddNewScale);
app.get('/price/table', CarsCont.GetAllPrices)
app.post('/price/table', CarsCont.AddNewCard)
app.post('/clothes/add',ClothesType.AddNewType)
app.use('/images', express.static('images'));
app.post('/tovar', upload.single('pr_img'),async function (req, res, next) {
    const data =JSON.parse(req.body.pr_val)
    const NewData = new TovarsModel({
        Name: data.name,
        Description: data.description,
        Price: data.price,
        Image: req.file.filename,
        Type:  data.type
    })
    const save = await NewData.save();
    res.json(save)
})
app.get("/products",async function (req, res, ) {
    const GetAll = await TovarsModel.find().populate('Type');
    res.json(GetAll)
})
app.listen(4444, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Сервер успешно запущен!')
    }

})