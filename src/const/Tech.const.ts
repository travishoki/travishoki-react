import ImgActionScript from '~images/icons/tech-icons/action-script.jpg';
import ImgAmp from '~images/icons/tech-icons/amp-bind.jpg';
import ImgAngularJs from '~images/icons/tech-icons/angular-js.jpg';
import ImgClaudeCode from '~images/icons/tech-icons/claude-code.jpg';
import ImgCoffeeScript from '~images/icons/tech-icons/coffee-script.jpg';
import ImgCss from '~images/icons/tech-icons/css.jpg';
import ImgDjango from '~images/icons/tech-icons/django.jpg';
import ImgFirebase from '~images/icons/tech-icons/firebase.jpg';
import ImgGrunt from '~images/icons/tech-icons/grunt.jpg';
import ImgHandlebarsJs from '~images/icons/tech-icons/handlebars-js.jpg';
import ImgHtml from '~images/icons/tech-icons/html.jpg';
import ImgJavascript from '~images/icons/tech-icons/javascript.jpg';
import ImgJquery from '~images/icons/tech-icons/jquery.jpg';
import ImgLessCss from '~images/icons/tech-icons/less-css.jpg';
import ImgNodeJs from '~images/icons/tech-icons/node-js.jpg';
import ImgPhp from '~images/icons/tech-icons/php.jpg';
import ImgPython from '~images/icons/tech-icons/python.jpg';
import ImgReactJs from '~images/icons/tech-icons/react-js.jpg';
import ImgReactNative from '~images/icons/tech-icons/react-native.jpg';
import ImgRedux from '~images/icons/tech-icons/redux.jpg';
import ImgScss from '~images/icons/tech-icons/sass.jpg';
import ImgSql from '~images/icons/tech-icons/sql.jpg';
import ImgTypescript from '~images/icons/tech-icons/typescript.jpg';
import ImgWebpack from '~images/icons/tech-icons/webpack.jpg';
import ImgWordpress from '~images/icons/tech-icons/wordpress.jpg';

export const ACTION_SCRIPT = 'ACTION_SCRIPT';
export const AMP = 'AMP';
export const ANGULAR_JS = 'ANGULAR_JS';
export const CLAUDE_CODE = 'CLAUDE_CODE';
export const COFFEE_SCRIPT = 'COFFEE_SCRIPT';
export const CSS = 'CSS';
export const DJANGO = 'DJANGO';
export const FIREBASE = 'FIREBASE';
export const GRUNT = 'GRUNT';
export const HANDLEBARS_JS = 'HANDLEBARS_JS';
export const HTML = 'HTML';
export const JAVASCRIPT = 'JAVASCRIPT';
export const JQUERY = 'JQUERY';
export const LESS_CSS = 'LESS_CSS';
export const NODE_JS = 'NODE_JS';
export const PHP = 'PHP';
export const PYTHON = 'PYTHON';
export const REACT_JS = 'REACT_JS';
export const REACT_NATIVE = 'REACT_NATIVE';
export const REDUX = 'REDUX';
export const SCSS = 'SCSS';
export const SQL = 'SQL';
export const TYPESCRIPT = 'TYPESCRIPT';
export const WEBPACK = 'WEBPACK';
export const WORDPRESS = 'WORDPRESS';

export type TechInfo = {
	image: string;
	label: string;
};

export const TECH = {
	ACTION_SCRIPT: { image: ImgActionScript, label: 'Action Script' },
	AMP: { image: ImgAmp, label: 'AMP' },
	ANGULAR_JS: { image: ImgAngularJs, label: 'Angular JS' },
	CLAUDE_CODE: { image: ImgClaudeCode, label: 'Claude Code' },
	COFFEE_SCRIPT: { image: ImgCoffeeScript, label: 'Coffee Script' },
	CSS: { image: ImgCss, label: 'CSS' },
	DJANGO: { image: ImgDjango, label: 'Django' },
	FIREBASE: { image: ImgFirebase, label: 'Firebase' },
	GRUNT: { image: ImgGrunt, label: 'Grunt' },
	HANDLEBARS_JS: { image: ImgHandlebarsJs, label: 'Handlebars JS' },
	HTML: { image: ImgHtml, label: 'HTML' },
	JAVASCRIPT: { image: ImgJavascript, label: 'Javascript' },
	JQUERY: { image: ImgJquery, label: 'jQuery' },
	LESS_CSS: { image: ImgLessCss, label: 'LESS CSS' },
	NODE_JS: { image: ImgNodeJs, label: 'Node JS' },
	PHP: { image: ImgPhp, label: 'PHP' },
	PYTHON: { image: ImgPython, label: 'Python' },
	REACT_JS: { image: ImgReactJs, label: 'React JS' },
	REACT_NATIVE: { image: ImgReactNative, label: 'React Native' },
	REDUX: { image: ImgRedux, label: 'Redux' },
	SCSS: { image: ImgScss, label: 'SCSS' },
	SQL: { image: ImgSql, label: 'SQL' },
	TYPESCRIPT: { image: ImgTypescript, label: 'Typescript' },
	WEBPACK: { image: ImgWebpack, label: 'Webpack' },
	WORDPRESS: { image: ImgWordpress, label: 'Wordpress' },
} satisfies Record<string, TechInfo>;

export type TechKey = keyof typeof TECH;

export type TechFilterType = TechKey | null | 'all' | 'null';
