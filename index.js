import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Digimon from './model/Digimon.js';

const app = express();

app.use(express.json())
app.use(cors())

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})

const DB = 'mongodb+srv://admin:123@cluster0.2hxqm.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( (client) => {
    console.log('Database is connected...')
})

app.post('/add-digimon', async(req, res) => {
    const digimon = new Digimon(req.body);
    try {
        await digimon.save();
        res.status(201).json({
            status: 'Success',
            data: {
                digimon
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

app.get('/get-digimon', async (req, res) => {
    const digimons = await Digimon.find();
    try {
        res.status(200).json({
            digimons
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

app.patch('/update-digimon/:id', async (req, res) => {
    const updatedDigimon = await Digimon.findByIdAndUpdate(req.params.id, req.body, {new: true});
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                updatedDigimon
            }
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

app.delete('/delete-digimon/:id', async (req, res) => {
    await Digimon.findByIdAndDelete(req.params.id);
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                message: 'Sucess',
                data: {}
            }
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})