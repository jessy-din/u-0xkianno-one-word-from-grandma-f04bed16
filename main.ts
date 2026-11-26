import { writeFileSync, mkdirSync } from "node:fs";

// One word Grandma would text about AI (max 30 chars, one word only).
const line = "Witchcraft";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Grandma has spoken. One word, no explanation, no emoji.
