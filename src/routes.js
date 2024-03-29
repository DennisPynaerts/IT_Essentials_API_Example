const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Campus = require('./models/campus');
const Docent = require('./models/docent');

router.get(`/`, (req, res) => {
    console.log(`/ route called`);
    res.send(`<h1>Welcome to my API, these are the available routes:</h1>`)
});

router.get('/', (req, res) => {
    console.log('/campus route called');
    res.send(
        `<h1>Welcome to my API, these are the available routes</h1>` +
        `<h2></h2>` +
        `Where you are right now`
        `<hr/>` +
        `<h2>Campus</h2>` +
        `Returns all campuses in the database using .find()` +
        `<hr/>`
    );
});

router.get('/campus', async(req, res) => {
    console.log('/campus route called');
    try {
        res.json(await Campus.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/docent', async(req, res) => {
    console.log('/docent route called');
    try {
        res.json(await Docent.find().populate('campussen').sort('voornaam'));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/campus/:id', async(req, res) => {
    console.log('/campus/: id route called');
    try {
        res.send(await Campus.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/campus/create', async(req, res) => {
    console.log('/campus/create route called');
    try {
        res.send(await Campus.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/campus/update/:id', async(req, res) => {
    console.log('/campus/update route called');
    try {
        res.send(await Campus.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/campus/delete/:id', async(req, res) => {
    console.log('/campus/delete/:id route called');
    try {
        res.send(await Campus.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// alle docenten ophalen met hun campussen, gesorteerd op voornaam
router.get('/docent', async(req, res) => {
    console.log('/docent route called');
    try {
        res.json(await Docent.find().populate('campussen').sort('voornaam'));
        console.log('Retrieved all teachers');
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// docent aanmaken
router.post('/docent/create', async(req, res) => {
    console.log('/docent/create route called');
    try {
        res.send(await Docent.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// router.post('/docent/create', async(req, res) => {
//     console.log('/docent/create route called');
//     try {
//         const docent = new Docent({
//             voornaam: req.body.voornaam,
//             achternaam: req.body.achternaam,
//             campussen: req.body.campussen
//         });
//         await docent.save();
//         res.send(docent);
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

// docent updaten
router.put('/docent/update/:id', async(req, res) => {
    console.log('/docent/update route called');
    try {
        res.send(await Docent.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// docent verwijderen
router.delete('/docent/delete/:id', async(req, res) => {
    console.log('/docent/delete/:id route called');
    try {
        res.send(await Docent.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;