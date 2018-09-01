require('dotenv').config();
const express = require('express');
      bodyParser = require('body-parser');
       app = express();
      cors = require('cors');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;
var router = express.Router();

var jwt = require('jsonwebtoken');
var fs = require('file-system');

var Datastore = require('nedb');
var db = {};
var catalog = new Datastore({ filename: 'catalog.db', autoload: true });

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', router);

router.use('/photos', express.static(__dirname + '/photos'));


const beads = [
{

	stone: 'Smokey Quartz',
	size: '18 mm',
	cut: 'faceted',
	color: 'gray/clear',
	price: 1.00,
	shape: 'oval',
	image: '/static/photos/20180708_164320.png',
	_id: 01




},

{

	stone: 'Smokey Quartz',
	size: '4 mm',
	cut: 'smooth',
	color: 'gray/clear',
	price: 0.30,
	shape: 'teardrop',
	image: '/static/photos/20180708_164525.png',
	_id: 02




},

{

	stone: 'Smokey Quartz',
	size: '10 mm',
	cut: 'smooth',
	color: 'gray/clear',
	price: 0.35,
	shape: 'tube',
	image: '/static/photos/20180708_164816.png',
	_id: 03




},

{

	stone: 'Blue Sandstone',
	size: '4 mm',
	cut: 'smooth',
	color: 'blue',
	price: 0.15,
	shape: 'cube',
	image: '/static/photos/20180708_165551.png',
	_id: 04




},

{

	stone: 'Blue Sandstone',
	size: '7 mm',
	cut: 'smooth',
	color: 'blue',
	price: 0.40,
	shape: 'round',
	image: '/static/photos/20180708_165624.png',
	_id: 05




},

{

	stone: 'Blue Sandstone',
	size: '17 mm',
	cut: 'smooth',
	color: 'blue',
	price: 0.75,
	shape: 'block',
	image: '/static/photos/20180708_165855.png',
	_id: 06




},

{

	stone: 'Obsidian',
	size: '13 mm',
	cut: 'smooth',
	color: 'black',
	price: 0.50,
	shape: 'tube',
	image: '/static/photos/20180708_170214.png',
	_id: 07

},

{

	stone: 'Obsidian',
	size: '20 mm',
	cut: 'smooth',
	color: 'black',
	price: 3.00,
	shape: 'drop',
	image: '/static/photos/20180708_170446.png',
	_id: 08

},

{

	stone: 'Obsidian',
	size: '10 mm',
	cut: 'smooth',
	color: 'black',
	price: 0.35,
	shape: 'barrel',
	image: '/static/photos/20180708_170753.png',
	_id: 09

},

{

	stone: 'Obsidian',
	size: '3 mm',
	cut: 'smooth',
	color: 'black',
	price: 0.05,
	shape: 'chips',
	image: '/static/photos/20180708_171254.png',
	_id: 10

},

{

	stone: 'Snowflake Obsidian',
	size: '8 mm',
	cut: 'smooth',
	color: 'black/gray',
	price: 0.50,
	shape: 'round',
	image: '/static/photos/20180708_171647.png',
	_id: 11

},

{

	stone: 'Snowflake Obsidian',
	size: '7 mm',
	cut: 'smooth',
	color: 'black/gray',
	price: 0.50,
	shape: 'tube',
	image: '/static/photos/20180708_171825.png',
	_id: 12

},

{

	stone: 'Snowflake Obsidian',
	size: '20 mm',
	cut: 'smooth',
	color: 'black/gray',
	price: 0.75,
	shape: 'block',
	image: '/static/photos/20180708_172023.png',
	_id: 13

},

{

	stone: 'Hematite',
	size: '4 mm',
	cut: 'smooth',
	color: 'silver',
	price: 0.20,
	shape: 'cube',
	image: '/static/photos/20180708_172235.png',
	_id: 14

},

{

	stone: 'Hematite',
	size: '5 mm',
	cut: 'smooth',
	color: 'silver',
	price: 0.20,
	shape: 'round',
	image: '/static/photos/20180708_172558.png',
	_id: 15

},

{

	stone: 'Hematite',
	size: '40 mm',
	cut: 'smooth',
	color: 'silver',
	price: 3.00,
	shape: 'donut',
	image: '/static/photos/20180709_114309.png',
	_id: 16

},


{

	stone: 'Opalite',
	size: '20 mm',
	cut: 'smooth',
	color: 'clear',
	price: 5.00,
	shape: 'heart',
	image: '/static/photos/20180708_174019.png',
	_id: 17

},


{

	stone: 'Opalite',
	size: '10 mm',
	cut: 'smooth',
	color: 'clear',
	price: 0.70,
	shape: 'round',
	image: '/static/photos/20180708_174157.png',
	_id: 18

},


{

	stone: 'Opalite',
	size: '7 mm',
	cut: 'smooth',
	color: 'clear',
	price: 0.45,
	shape: 'round',
	image: '/static/photos/20180708_174407.png',
	_id: 19

},

{

	stone: 'Opalite',
	size: '4 mm',
	cut: 'faceted',
	color: 'clear',
	price: 0.60,
	shape: 'flat teardrop',
	image: '/static/photos/20180708_174735.png',
	_id: 20

},

{

	stone: 'Opalite',
	size: '3 mm',
	cut: 'faceted',
	color: 'clear',
	price: 0.50,
	shape: 'teardrop',
	image: '/static/photos/20180708_174956.png',
	_id: 21

},

{

	stone: 'Opalite',
	size: '2 mm',
	cut: 'faceted',
	color: 'clear',
	price: 0.30,
	shape: 'rondelle',
	image: '/static/photos/20180708_175148.png',
	_id: 22

},

{

	stone: 'White Moonstone',
	size: '8-10 mm',
	cut: 'smooth',
	color: 'white/clear',
	price: 0.40,
	shape: 'tube',
	image: '/static/photos/20180708_175617.png',
	_id: 23

},

{

	stone: 'Rainbow Moonstone',
	size: '12 mm',
	cut: 'smooth',
	color: 'white/clear',
	price: 0.80,
	shape: 'teardrop',
	image: '/static/photos/20180708_180002.png',
	_id: 24

},

{

	stone: 'Rainbow Moonstone',
	size: '2 mm',
	cut: 'faceted',
	color: 'white/clear',
	price: 0.10,
	shape: 'rondelle',
	image: '/static/photos/20180709_114423.png',
	_id: 25

},

{

	stone: 'Rainbow Moonstone',
	size: '10 mm',
	cut: 'faceted',
	color: 'white/clear',
	price: 0.60,
	shape: 'oval',
	image: '/static/photos/20180709_114704.png',
	_id: 26

},

{

	stone: 'Malachite-Pyrite Mix',
	size: '10 mm',
	cut: 'smooth',
	color: 'green/silver/gold',
	price: 1.00,
	shape: 'round',
	image: '/static/photos/20180709_115202.png',
	_id: 27

},

{

	stone: 'Sunstone',
	size: '6 mm',
	cut: 'smooth',
	color: 'pink',
	price: 0.15,
	shape: 'round',
	image: '/static/photos/20180709_115441.png',
	_id: 28

},

{

	stone: 'Sunstone',
	size: '8 mm',
	cut: 'smooth',
	color: 'pink',
	price: 0.35,
	shape: 'round',
	image: '/static/photos/20180709_115559.png',
	_id: 29

},

{

	stone: 'Sunstone',
	size: '4 mm',
	cut: 'smooth',
	color: 'pink',
	price: 0.20,
	shape: 'slab',
	image: '/static/photos/20180709_120038.png',
	_id: 30

},

{

	stone: 'Sunstone',
	size: '12 mm',
	cut: 'smooth',
	color: 'pink',
	price: 0.25,
	shape: 'oval',
	image: '/static/photos/20180709_120942.png',
	_id: 31

},

{

	stone: 'Pyrite',
	size: '10 mm',
	cut: 'smooth',
	color: 'gold/silver',
	price: 0.40,
	shape: 'chunk',
	image: '/static/photos/20180709_121518.png',
	_id: 32

},

{

	stone: 'Pyrite',
	size: '20-40 mm',
	cut: 'smooth',
	color: 'gold/silver',
	price: 1.15,
	shape: 'flat oval',
	image: '/static/photos/20180709_121646.png',
	_id: 33

},

{

	stone: 'Carnelian',
	size: '10-15 mm',
	cut: 'smooth',
	color: 'red/orange',
	price: 0.50,
	shape: 'square chunk',
	image: '/static/photos/20180709_122159.png',
	_id: 34

},

{

	stone: 'Carnelian',
	size: '9 mm',
	cut: 'smooth',
	color: 'red/orange/clear',
	price: 0.45,
	shape: 'round',
	image: '/static/photos/20180709_122351.png',
	_id: 35

},

{

	stone: 'Carnelian',
	size: '10 mm',
	cut: 'smooth',
	color: 'orange/red/clear',
	price: 0.50,
	shape: 'round',
	image: '/static/photos/20180709_123105.png',
	_id: 36

},

{

	stone: 'Carnelian',
	size: '12 mm',
	cut: 'smooth',
	color: 'red/orange/clear',
	price: 0.75,
	shape: 'round',
	image: '/static/photos/20180709_123404.png',
	_id: 37

},

{

	stone: 'Carnelian',
	size: '5 mm',
	cut: 'smooth',
	color: 'red/orange/clear',
	price: 0.15,
	shape: 'round',
	image: '/static/photos/20180709_123543.png',
	_id: 38

},

{

	stone: 'Carnelian',
	size: '12 mm',
	cut: 'faceted',
	color: 'red/orange/clear',
	price: 0.70,
	shape: 'round',
	image: '/static/photos/20180709_123843.png',
	_id: 39

},

{

	stone: 'Carnelian',
	size: '7 mm',
	cut: 'smooth',
	color: 'red/orange/clear',
	price: 0.50,
	shape: 'drop',
	image: '/static/photos/20180709_124047.png',
	_id: 40

},

{

	stone: 'Carnelian',
	size: '4 mm',
	cut: 'smooth',
	color: 'red/orange/clear',
	price: 0.15,
	shape: 'rondelle',
	image: '/static/photos/20180709_124253.png',
	_id: 41

},

{

	stone: 'Red Aventurine',
	size: '5 mm',
	cut: 'smooth',
	color: 'red/orange',
	price: 0.20,
	shape: 'rondelle',
	image: '/static/photos/20180709_124558.png',
	_id: 42

},

{

	stone: 'Red Aventurine',
	size: '10 mm',
	cut: 'smooth',
	color: 'red/orange',
	price: 0.35,
	shape: 'rectangle tube',
	image: '/static/photos/20180709_124758.png',
	_id: 43

},

{

	stone: 'Red Aventurine',
	size: '5 mm',
	cut: 'smooth',
	color: 'red/orange',
	price: 0.50,
	shape: 'slab',
	image: '/static/photos/20180709_124957.png',
	_id: 44

},

{

	stone: 'Red Aventurine',
	size: '15 mm',
	cut: 'faceted',
	color: 'red/orange',
	price: 0.75,
	shape: 'barrel',
	image: '/static/photos/20180709_125651.png',
	_id: 45
},

{

	stone: 'Red Aventurine',
	size: '5 mm',
	cut: 'smooth',
	color: 'red/orange',
	price: 0.20,
	shape: 'round',
	image: '/static/photos/20180709_125814.png',
	_id: 46

},

{

	stone: 'Sodalite',
	size: '4 mm',
	cut: 'smooth',
	color: 'blue/white',
	price: 0.20,
	shape: 'cube',
	image: '/static/photos/20180709_130045.png',
	_id: 47

},

{

	stone: 'Sodalite',
	size: '30 mm',
	cut: 'smooth',
	color: 'blue/white',
	price: 0.95,
	shape: 'flat oval',
	image: '/static/photos/20180709_130434.png',
	_id: 48

},

{

	stone: 'Sodalite',
	size: '6 mm',
	cut: 'smooth',
	color: 'blue/white',
	price: 0.35,
	shape: 'round',
	image: '/static/photos/20180709_130634.png',
	_id: 49

},

{

	stone: 'Sodalite',
	size: '10 mm',
	cut: 'smooth',
	color: 'blue/white',
	price: 0.55,
	shape: 'round',
	image: '/static/photos/20180709_130744.png',
	_id: 50

},

{

	stone: 'Amazonite',
	size: '20 mm',
	cut: 'smooth',
	color: 'green/blue/white',
	price: 0.70,
	shape: 'flat square',
	image: '/static/photos/20180709_203458.png',
	_id: 51

},
{

	stone: 'Amazonite',
	size: '20 mm',
	cut: 'smooth',
	color: 'green/blue/white',
	price: 0.60,
	shape: 'flat rectangle',
	image: '/static/photos/20180709_203654.png',
	_id: 52

},
{

	stone: 'Amazonite',
	size: '14 mm',
	cut: 'carved',
	color: 'green/blue/white',
	price: 1.15,
	shape: 'flower',
	image: '/static/photos/20180709_203913.png',
	_id: 53

},
{

	stone: 'Amazonite',
	size: '8 mm',
	cut: 'smooth',
	color: 'green/blue/white',
	price: 0.35,
	shape: 'round',
	image: '/static/photos/20180709_204109.png',
	_id: 54

},
{

	stone: 'Amazonite',
	size: '10 mm',
	cut: 'smooth',
	color: 'green/blue/white',
	price: 0.45,
	shape: 'round',
	image: '/static/photos/20180709_204253.png',
	_id: 55

},
{

	stone: 'Goldstone',
	size: '4 mm',
	cut: 'smooth',
	color: 'orange/brown',
	price: 0.30,
	shape: 'slab',
	image: '/static/photos/20180709_204810.png',
	_id: 56

},
{

	stone: 'Goldstone',
	size: '15 mm',
	cut: 'smooth',
	color: 'orange/brown',
	price: 2.50,
	shape: 'teardrop pendant',
	image: '/static/photos/20180709_205146.png',
	_id: 57

},
{

	stone: 'Goldstone',
	size: '7 mm',
	cut: 'smooth',
	color: 'orange/brown',
	price: 0.25,
	shape: 'round',
	image: '/static/photos/20180709_205536.png',
	_id: 58

},
{

	stone: 'Goldstone',
	size: '5 mm',
	cut: 'smooth',
	color: 'orange/brown',
	price: 0.15,
	shape: 'round',
	image: '/static/photos/20180709_205634.png',
	_id: 59

},
{

	stone: 'Unakite',
	size: '10 mm',
	cut: 'smooth',
	color: 'green/pink',
	price: 0.45,
	shape: 'flat sphere',
	image: '/static/photos/20180709_205930.png',
	_id: 60

},
{

	stone: 'Unakite',
	size: '6 mm',
	cut: 'smooth',
	color: 'green/pink',
	price: 0.55,
	shape: 'rectangular slab',
	image: '/static/photos/20180709_210137.png',
	_id: 61

},
{

	stone: 'Unakite',
	size: '10 mm',
	cut: 'smooth',
	color: 'green/pink',
	price: 0.35,
	shape: 'rectangular tube',
	image: '/static/photos/20180709_210352.png',
	_id: 62

},

{

	stone: 'Unakite',
	size: '12 mm',
	cut: 'smooth',
	color: 'green/pink',
	price: 0.60,
	shape: 'oval',
	image: '/static/photos/20180709_210553.png',
	_id: 63

},

{

	stone: 'Unakite',
	size: '6 mm',
	cut: 'smooth',
	color: 'green/pink',
	price: 0.30,
	shape: 'round',
	image: '/static/photos/20180709_210729.png',
	_id: 64

},

{

	stone: 'Unakite',
	size: '8 mm',
	cut: 'smooth',
	color: 'green/pink',
	price: 0.40,
	shape: 'round',
	image: '/static/photos/20180709_210841.png',
	_id: 65

},

{

	stone: 'Unakite',
	size: '12 mm',
	cut: 'smooth',
	color: 'green/pink',
	price: 0.70,
	shape: 'round',
	image: '/static/photos/20180709_211016.png',
	_id: 66

},

{

	stone: 'Unakite',
	size: '3 mm',
	cut: 'smooth',
	color: 'green/pink',
	price: 0.10,
	shape: 'rondelle',
	image: '/static/photos/20180709_211134.png',
	_id: 67

},

{

	stone: 'Black Agate',
	size: '5 mm',
	cut: 'smooth',
	color: 'black',
	price: 0.85,
	shape: 'rectangular slab',
	image: '/static/photos/20180709_211547.png',
	_id: 68

},

{

	stone: 'Green Kyanite',
	size: '4 mm',
	cut: 'natural',
	color: 'green',
	price: 0.75,
	shape: 'natural slab',
	image: '/static/photos/20180709_211810.png',
	_id: 69

},

{

	stone: 'Garnet',
	size: '5 mm',
	cut: 'smooth',
	color: 'red/purple',
	price: 0.40,
	shape: 'flatdrop',
	image: '/static/photos/20180709_212158.png',
	_id: 70

},

{

	stone: 'Garnet',
	size: '3 mm',
	cut: 'smooth',
	color: 'red/purple',
	price: 0.35,
	shape: 'flat rectangle',
	image: '/static/photos/20180709_212502.png',
	_id: 71

},

{

	stone: 'Garnet',
	size: '6 mm',
	cut: 'smooth',
	color: 'red/purple',
	price: 0.40,
	shape: 'flat diamonds',
	image: '/static/photos/20180709_212744.png',
	_id: 72

},

{

	stone: 'Clear Quartz',
	size: '8 mm',
	cut: 'smooth',
	color: 'clear',
	price: 0.35,
	shape: 'triangle',
	image: '/static/photos/20180709_212913.png',
	_id: 73

},

{

	stone: 'Agate',
	size: '16 mm',
	cut: 'smooth',
	color: 'gray/white/brown',
	price: 0.70,
	shape: 'oval pebble',
	image: '/static/photos/20180709_213400.png',
	_id: 74

}


]


router.get('/beads', (req, res) => {
catalog.find({}).exec(function(err, beads) {
    if (err) res.send(err);

res.status(200).json(beads);
});
});


router.post('/beads', (req, res) => {
 
 let name = req.body.stone;
 let number = Date.now() + Math.random().toString().slice(18);

let _id = name + number;

let bead = {

	_id: _id,
	stone: req.body.stone,
	size: req.body.size,
	cut: req.body.cut,
	color: req.body.color,
	price: req.body.price,
	shape: req.body.shape

}

catalog.insert(bead, function(err, bead) {
	res.json(bead);
});
});


router.get('/beads/:id', (req, res) => {

var beadId = req.params.id;

catalog.findOne({ _id: beadId }, function(err, beadItem) {
	res.json(beadItem);
})
})

router.put('/beads/:id', (req, res) => {

	var beadId = req.params.id;

	let bead = {
		image: req.body.image,
		_id: beadId,
		stone: req.body.stone,
		size: req.body.size,
		cut: req.body.cut,
		color: req.body.color,
		price: req.body.price,
		shape: req.body.shape
	}

	catalog.update({ _id: beadId }, bead, function(err, numReplaced) {
		if(err) res.send(err);

	res.status(200).json(bead);
	});
});

router.delete('/beads/:id', (req, res) => {

	var beadId = req.params.id;

	catalog.remove({ _id: beadId }, {}, function(err, numRemoved) {
		if(err) res.send(err);
		res.sendStatus(200);
	});
});





app.listen(port, function(){
  console.log('Server listening on port ' + port)
});