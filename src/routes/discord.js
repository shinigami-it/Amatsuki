const express = require('express');
const router = express.Router();
const client = require('../services/discord/client.js');

router.get('/members/:guildId', async (req, res) => {
  try {
    const guild = await client.guilds.fetch(req.params.guildId);
    if (!guild) return res.status(404).json({ error: 'Guild not found' });
    await guild.members.fetch();
    res.json({ members: guild.memberCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/roles/:guildId/:roleId', async (req, res) => {
  try {
    const guild = await client.guilds.fetch(req.params.guildId);
    if (!guild) return res.status(404).json({ error: 'Guild not found' });
    await guild.members.fetch();
    const role = guild.roles.cache.get(req.params.roleId);
    if (!role) return res.status(404).json({ error: 'Role not found' });
    res.json({ members: role.members.size });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/guild/:guildId', async (req, res) => {
  try {
    const guild = await client.guilds.fetch(req.params.guildId);
    if (!guild) return res.status(404).json({ error: 'Guild not found' });
    res.json({
      id: guild.id,
      name: guild.name,
      memberCount: guild.memberCount,
      iconURL: guild.iconURL(),
      description: guild.description || null,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
