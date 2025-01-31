import { BOARD_EMOJI, getMessageFromBoard, updateReactionCount } from "../common/board.js";

import dotenv from "dotenv";

dotenv.config();
/**
 * @param {import("discord.js").Message | import("discord.js").PartialMessage} message
 * @param {import("discord.js").Collection<string, import("discord.js").MessageReaction>} reactions
 */
export default async function (message, reactions) {
	if (message.partial) message = await message.fetch();
	if (!reactions.get(BOARD_EMOJI) || message.guild?.id !== process.env.GUILD_ID) return;
	const boardMessage = await getMessageFromBoard(message);
	if (!boardMessage) return;
	await updateReactionCount(0, boardMessage);
}
