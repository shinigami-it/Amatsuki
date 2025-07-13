const client = require("./client.js");

async function getRoleMemberCount(guildId, roleId) {
	const guild = await client.guilds.fetch(guildId);
	if (!guild) throw new Error("Guild not found ❌");

	await guild.members.fetch();
	const role = guild.roles.cache.get(roleId);
	if (!role) throw new Error("Role not found ❌");

	return role.members.size;
}

module.exports = { getRoleMemberCount };