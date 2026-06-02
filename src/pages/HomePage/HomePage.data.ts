import {
	ACTION_SCRIPT,
	CSS,
	DJANGO,
	GRUNT,
	HANDLEBARS_JS,
	FIREBASE,
	HTML,
	JAVASCRIPT,
	JQUERY,
	LESS_CSS,
	NODE_JS,
	PHP,
	PYTHON,
	REACT_JS,
	REACT_NATIVE,
	REDUX,
	SCSS,
	SQL,
	TechKey,
	TYPESCRIPT,
	WEBPACK,
	WORDPRESS,
	CLAUDE_CODE,
	PHP_MY_ADMIN,
} from '~const/Tech.const';

// Ordered for display by what I want to advertise first
export const DISPLAYED_LIST: TechKey[] = [
	// Frontend
	REACT_JS,
	REACT_NATIVE,
	REDUX,
	TYPESCRIPT,
	JAVASCRIPT,
	CSS,
	HTML,
	LESS_CSS,
	SCSS,

	// Backend
	NODE_JS,
	DJANGO,
	HANDLEBARS_JS,
	PHP,
	PHP_MY_ADMIN,
	PYTHON,
	SQL,
	FIREBASE,

	// Content Management System
	WORDPRESS,

	// Tools
	CLAUDE_CODE,
	WEBPACK,
	GRUNT,

	// Legacy Tech
	JQUERY,
	ACTION_SCRIPT,
];
