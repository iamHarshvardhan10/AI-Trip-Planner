import express from 'express'

const router = express.Router();

router.get('/get', async (req, res) => {
    res.json({
        message: 'Trip created successfully',
    })
});


export default router;