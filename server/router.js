const router = require('express').Router();

router.get('/', (req, res) => {
    return res.send('All good :)');
});

module.exports = router;