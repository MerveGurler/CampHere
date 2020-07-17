const { camperDatabase } = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const campers = await camperDatabase.load()
    
    res.render('campers' , { campers })
})

router.post('/', async (req, res) => {
    const camper = await camperDatabase.insert(req.body) 

    res.send(camper)
})

router.delete('/:camperId', async (req, res) => {
  await camperDatabase.removeBy('id', req.params.camperId) 

  res.send('OK')
})

router.get('/:camperId', async (req, res) => {
    const camper = await camperDatabase.find(req.params.camperId)
    if (!camper) return res.status(404).send('Cannot find friends')
    res.render('camper', { camper})
})

router.post('/:camperId/followings', async (req, res) => {
    const camper = await camperDatabase.find(req.params.camperId)

    camper.follow(banu)

    await camperDatabase.update(camper)

    res.send('OK')
})

module.exports = router