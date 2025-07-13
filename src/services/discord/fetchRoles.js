import client from "./client.js";

export async function getRoleMemberCount(guildId, roleId) {
	const guildId = await client.guilds.fetch(guildId);
	if (!guild) throw new Error("Guild not found ❌");

	await guild.members.fetch();
	const role = guild.roles.cache.get(roleId);
	if (!role) throw new Error("Role not found ❌");

	return role.members.size;
}
