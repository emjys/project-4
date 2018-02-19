const express = require('express');
const router = express.Router();

const tripController = require('../controllers/tripController')
const eventController = require('../controllers/eventController')
const locationController = require('../controllers/locationController')
const homeController = require('../controllers/homeController')

//==================== index ====================
router.get('/', homeController.index)
router.get('*', homeController.fourZeroFour)


//==================== Trip Control ====================
router.get('/trip/new', tripController.new) // ???
router.post('/trip/new', tripController.create) // create
router.get('/trip/main', tripController.main) // read
router.post('/trip/new', tripController.update) // update
router.post('/trip/delete', tripController.delete)

//==================== Location Control ====================
router.post('/location/new', locationController.create) // create
router.get('/location/getAllForTrip', locationController.getAllForTrip) // read
router.post('/location/delete', locationController.delete)

//==================== Event Control ====================
router.post('/event/new', eventController.create) // create
router.get('/event/view', eventController.view) // read
router.post('/event/new', eventController.update) // update
router.post('/event/delete', eventController.delete) // delete

//==================== 404 ====================
// router.get('*', authController.fourZeroFour)



module.exports = router;