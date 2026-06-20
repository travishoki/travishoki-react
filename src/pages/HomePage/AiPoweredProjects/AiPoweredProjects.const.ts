export const foodCardsAiIntegration = [
	'AI-Powered Natural Language Food Filter.',
	'Integrated Claude (Anthropic\'s LLM) to let users search a food card collection using plain English instead of traditional dropdowns and form inputs. A user can type something like "easy breakfast ideas" or "difficult desserts alphabetically" and the app intelligently maps that to structured filter state, including category, difficulty, sort order, and keyword search, all at once.',
	'Under the hood, the query is sent to Claude Haiku with a carefully engineered system prompt that enforces strict JSON output and defines parsing rules (e.g. "easy" maps to a sort order, not a difficulty rating). The response is validated before being applied, so ambiguous or incomplete AI output degrades gracefully rather than breaking the UI.',
	'Skills demonstrated: prompt engineering, LLM API integration (@anthropic-ai/sdk), structured output parsing, and translating unstructured user intent into typed application state.',
];
