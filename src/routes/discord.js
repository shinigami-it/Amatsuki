const express = require('express');
const { getRoleMemberCount, getRoleMembmerCounts } = require('../services/discord/fetchRoles.js');

const router = express.Router();

router.get('/roles/:guildId/:roleId', async (req, res) => {
    try {
        const { guildId, roleId } = req.params
        const count = await getRoleMemberCount(guildId, roleId)
        res.json({ members: count })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router