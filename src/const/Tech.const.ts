import { TechType } from '~components/TechCatalogue/TechCatalogue.types';
import ImgCursor from '~images/icons/software-icons/cursor.png';
import ImgActionScript from '~images/icons/tech-icons/action-script.jpg';
import ImgAmp from '~images/icons/tech-icons/amp-bind.jpg';
import ImgAngularJs from '~images/icons/tech-icons/angular-js.jpg';
import ImgClaudeCode from '~images/icons/tech-icons/claude-code.jpg';
import ImgCoffeeScript from '~images/icons/tech-icons/coffee-script.jpg';
import ImgCss from '~images/icons/tech-icons/css.jpg';
import ImgDjango from '~images/icons/tech-icons/django.jpg';
import ImgExpress from '~images/icons/tech-icons/express.jpg';
import ImgFirebase from '~images/icons/tech-icons/firebase.jpg';
import ImgGrunt from '~images/icons/tech-icons/grunt.jpg';
import ImgHandlebarsJs from '~images/icons/tech-icons/handlebars-js.jpg';
import ImgHtml from '~images/icons/tech-icons/html.jpg';
import ImgJavascript from '~images/icons/tech-icons/javascript.jpg';
import ImgJest from '~images/icons/tech-icons/jest.jpg';
import ImgJquery from '~images/icons/tech-icons/jquery.jpg';
import ImgLessCss from '~images/icons/tech-icons/less-css.jpg';
import ImgNodeJs from '~images/icons/tech-icons/node-js.jpg';
import ImgPhpMyAdmin from '~images/icons/tech-icons/php-my-admin.jpg';
import ImgPhp from '~images/icons/tech-icons/php.jpg';
import ImgPython from '~images/icons/tech-icons/python.jpg';
import ImgReactJs from '~images/icons/tech-icons/react-js.jpg';
import ImgReactNative from '~images/icons/tech-icons/react-native.jpg';
import ImgRedux from '~images/icons/tech-icons/redux.jpg';
import ImgScss from '~images/icons/tech-icons/sass.jpg';
import ImgSql from '~images/icons/tech-icons/sql.jpg';
import ImgStripe from '~images/icons/tech-icons/stripe.jpg';
import ImgTypescript from '~images/icons/tech-icons/typescript.jpg';
import ImgWebpack from '~images/icons/tech-icons/webpack.jpg';
import ImgWooCommerce from '~images/icons/tech-icons/woo-commerce.jpg';
import ImgWordpress from '~images/icons/tech-icons/wordpress.jpg';

export const ACTION_SCRIPT = 'ACTION_SCRIPT';
export const AMP = 'AMP';
export const ANGULAR_JS = 'ANGULAR_JS';
export const CLAUDE_CODE = 'CLAUDE_CODE';
export const COFFEE_SCRIPT = 'COFFEE_SCRIPT';
export const CSS = 'CSS';
export const CURSOR = 'CURSOR';
export const DJANGO = 'DJANGO';
export const EXPRESS = 'EXPRESS';
export const FIREBASE = 'FIREBASE';
export const GRUNT = 'GRUNT';
export const HANDLEBARS_JS = 'HANDLEBARS_JS';
export const HTML = 'HTML';
export const JAVASCRIPT = 'JAVASCRIPT';
export const JEST = 'JEST';
export const JQUERY = 'JQUERY';
export const LESS_CSS = 'LESS_CSS';
export const NODE_JS = 'NODE_JS';
export const PHP = 'PHP';
export const PHP_MY_ADMIN = 'PHP_MY_ADMIN';
export const PYTHON = 'PYTHON';
export const REACT_JS = 'REACT_JS';
export const REACT_NATIVE = 'REACT_NATIVE';
export const REDUX = 'REDUX';
export const SCSS = 'SCSS';
export const SQL = 'SQL';
export const STRIPE = 'STRIPE';
export const TYPESCRIPT = 'TYPESCRIPT';
export const WEBPACK = 'WEBPACK';
export const WOO_COMMERCE = 'WOO_COMMERCE';
export const WORDPRESS = 'WORDPRESS';

export type TechInfo = {
	image: string;
	label: string;
	type: TechType;
};

export const TECH = {
	ACTION_SCRIPT: {
		image: ImgActionScript,
		label: 'Action Script',
		type: 'legacy',
	},
	AMP: { image: ImgAmp, label: 'AMP', type: 'frontend' },
	ANGULAR_JS: { image: ImgAngularJs, label: 'Angular JS', type: 'frontend' },
	CLAUDE_CODE: { image: ImgClaudeCode, label: 'Claude Code', type: 'tool' },
	COFFEE_SCRIPT: {
		image: ImgCoffeeScript,
		label: 'Coffee Script',
		type: 'frontend',
	},
	CSS: { image: ImgCss, label: 'CSS', type: 'frontend' },
	CURSOR: { image: ImgCursor, label: 'Cursor', type: 'tool' },
	DJANGO: { image: ImgDjango, label: 'Django', type: 'backend' },
	EXPRESS: { image: ImgExpress, label: 'Express', type: 'backend' },
	FIREBASE: { image: ImgFirebase, label: 'Firebase', type: 'backend' },
	GRUNT: { image: ImgGrunt, label: 'Grunt', type: 'tool' },
	HANDLEBARS_JS: {
		image: ImgHandlebarsJs,
		label: 'Handlebars JS',
		type: 'backend',
	},
	HTML: { image: ImgHtml, label: 'HTML', type: 'frontend' },
	JAVASCRIPT: { image: ImgJavascript, label: 'Javascript', type: 'frontend' },
	JEST: { image: ImgJest, label: 'Jest', type: 'frontend' },
	JQUERY: { image: ImgJquery, label: 'jQuery', type: 'legacy' },
	LESS_CSS: { image: ImgLessCss, label: 'LESS CSS', type: 'frontend' },
	NODE_JS: { image: ImgNodeJs, label: 'Node JS', type: 'backend' },
	PHP: { image: ImgPhp, label: 'PHP', type: 'backend' },
	PHP_MY_ADMIN: { image: ImgPhpMyAdmin, label: 'phpMyAdmin', type: 'backend' },
	PYTHON: { image: ImgPython, label: 'Python', type: 'backend' },
	REACT_JS: { image: ImgReactJs, label: 'React JS', type: 'frontend' },
	REACT_NATIVE: {
		image: ImgReactNative,
		label: 'React Native',
		type: 'frontend',
	},
	REDUX: { image: ImgRedux, label: 'Redux', type: 'frontend' },
	SCSS: { image: ImgScss, label: 'SCSS', type: 'frontend' },
	SQL: { image: ImgSql, label: 'SQL', type: 'backend' },
	STRIPE: { image: ImgSql, label: 'Stripe', type: 'integrations' },
	TYPESCRIPT: { image: ImgTypescript, label: 'Typescript', type: 'frontend' },
	WEBPACK: { image: ImgWebpack, label: 'Webpack', type: 'tool' },
	WOO_COMMERCE: {
		image: ImgWooCommerce,
		label: 'Woo Commerce',
		type: 'integrations',
	},
	WORDPRESS: { image: ImgWordpress, label: 'Wordpress', type: 'cms' },
} satisfies Record<string, TechInfo>;

export type TechKey = keyof typeof TECH;

export type TechFilterType = TechKey | null | 'all' | 'null';
