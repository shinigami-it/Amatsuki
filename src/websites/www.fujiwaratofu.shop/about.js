import { getRoleMemberCount } from '../../services/discord/fetchRoles.js';

export async function GET({ params }) {
	const { guildId, roleId } = params;

	try {
		const count = await getRoleMemberCount(guildId, roleId);
		return new Response(JSON.stringify({ members: count }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: err.message }), { status: 500 });
	}
}
