const express = require('express');
const bodyParser = require('body-parser')
const knex = require('knex')
const app = express()
const cors = require('cors');

const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '',
        database: 'mirage'
    }
})

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Working')
    res.send('Hello World!')
});

app.post('/register', async (req, res) =>{
    const { name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(400).json('Please fill all the fields!')
    }else{
        try{
            const insertUser = await db('users').insert({
                name: name,
                email: email,
                password: password
            })
            if(insertUser){
                res.json({success: true})
            }
        }catch(error){
            console.log(error)
            res.status(400).json('Internal Server error')
        }
    }
})

app.post('/login', async (req, res) =>{
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json('Please fill all the fields!')
    }else{
        try{
            const user = await db('users').where({email: email, password: password}).select('*');
            if(user.length){
                res.json({success: true, data: user[0]})
            }else{
                res.json({success: false})
            }
        }catch(error){
            console.log(error)
            res.status(400).json('Internal Server error')
        }
    }
});

app.post('/adminlogin', async (req, res) =>{
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json('Please fill all the fields!')
    }else{
        try{
            const user = await db('admins').where({email: email, password: password}).select('*');
            if(user.length){
                res.json({success: true, data: user[0]})
            }else{
                res.json({success: false})
            }
        }catch(error){
            console.log(error)
            res.status(400).json('Internal Server error')
        }
    }
});

app.get('/vehicles', async (req, res) => {
    try{
        const vehicles = await db('vehicles').select('*');
        res.json(vehicles || {})
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.post('/addVehicle', async (req, res) => {
    const { brand, model, segment, price, color, transmission, fuel, odometer, registration, owner} = req.body;
    if(!brand || !model || !segment || !price || !color || !transmission || !fuel || !odometer || !registration || !owner){
        res.status(400).json('Please fill all the fields!')
    }
    try{
        const insertVehicle = await db('vehicles').insert({
            brand: brand,
            model: model,
            segment: segment,
            price: price,
            color: color,
            transmission: transmission,
            fuel: fuel,
            odometer: odometer,
            registration: registration,
            owner: owner
        })
        if(insertVehicle){
            res.json({success: true})
        }
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.delete('/deleteVehicle', async (req, res) => {
    const { id } = req.body;
    if(!id){
        res.status(400).json('Please provide vehicle id!')
    }
    try{
        const deleteVehicle = await db('vehicles').where({v_id: id}).del();
        if(deleteVehicle){
            res.json({success: true})
        }
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.put('/updateVehicle', async (req, res) => {
    const { id, brand, model, segment, price, color, transmission, fuel, odometer, registration, owner} = req.body;
    if(!id || !brand || !model || !segment || !price || !color || !transmission || !fuel || !odometer || !registration || !owner){
        res.status(400).json('Please fill all the fields!')
    }
    try{
        const updateVehicle = await db('vehicles').where({v_id: id}).update({
            brand: brand,
            model: model,
            segment: segment,
            price: price,
            color: color,
            transmission: transmission,
            fuel: fuel,
            odometer: odometer,
            registration: registration,
            owner: owner
        })
        if(updateVehicle){
            res.json({success: true})
        }
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.get('/brands', async (req, res) => {
    try{
        const brands = await db('vehicles').select('brand').distinct('brand');
        res.json(brands || {})
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.post('/bookVehicle', async (req, res) => {
    const { u_id, v_id } = req.body;
    const date = new Date().toLocaleDateString('en-GB');
    if(!u_id || !v_id){
        res.status(400).json('Please provide user id and vehicle id!')
    }
    try{
        const checkBooking = await db('bookings').where({u_id: u_id, v_id: v_id}).select('*');
        if(checkBooking.length){
            res.status(400).json('Vehicle already booked!')
        }else{
            const insertBooking = await db('bookings').insert({
                u_id: u_id,
                v_id: v_id,
                booking_date: date
            })
            if(insertBooking){
                res.json({success: true})
            }
        }
        
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.get('/bookings/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const bookings = await db('bookings').select('*').where('u_id', id).join('vehicles', 'bookings.v_id', 'vehicles.v_id').join('users', 'bookings.u_id', 'users.uid');
        res.json(bookings || {})
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.put('/bookings/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    if(!id || !status){
        res.status(400).json('Please provide booking id and status!')
    }
    try{
        const updateBooking = await db('bookings').where({booking_id: id}).update({
            status: status
        })
        if(updateBooking){
            res.json({success: true})
        }
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.get('/getBookings', async (req, res) => {
    const { id } = req.params;
    try{
        const bookings = await db('bookings').select('*').join('vehicles', 'bookings.v_id', 'vehicles.v_id').join('users', 'bookings.u_id', 'users.uid');
        res.json(bookings || {})
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.delete('/bookings/:id', async (req, res) => {
    const { id } = req.params;
    if(!id){
        res.status(400).json('Please provide booking id!')
    }
    try{
        const deleteBooking = await db('bookings').where({booking_id: id}).del();
        if(deleteBooking){
            res.json({success: true})
        }
    }catch(error){
        console.log(error)
        res.status(400).json('Internal Server error')
    }
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})