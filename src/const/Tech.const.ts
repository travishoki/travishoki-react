import ImgActionScript from '~images/icons/tech-icons/action-script.jpg';
import ImgAmp from '~images/icons/tech-icons/amp-bind.jpg';
import ImgAngularJs from '~images/icons/tech-icons/angular-js.jpg';
import ImgCoffeeScript from '~images/icons/tech-icons/coffee-script.jpg';
import ImgCss from '~images/icons/tech-icons/css.jpg';
import ImgDjango from '~images/icons/tech-icons/django.jpg';
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
export const COFFEE_SCRIPT = 'COFFEE_SCRIPT';
export const CSS = 'CSS';
export const DJANGO = 'DJANGO';
export const GRUNT = 'GRUNT';
export const HANDLEBARS_JS = 'HANDLEBARS_JS';
export const HTML = 'HTML';
export const JAVSCRIPT = 'JAVSCRIPT';
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

export type TechKeys = {
	ACTION_SCRIPT: 'ACTION_SCRIPT';
	AMP: 'AMP';
	ANGULAR_JS: 'ANGULAR_JS';
	COFFEE_SCRIPT: 'COFFEE_SCRIPT';
	CSS: 'CSS';
	DJANGO: 'DJANGO';
	GRUNT: 'GRUNT';
	HANDLEBARS_JS: 'HANDLEBARS_JS';
	HTML: 'HTML';
	JAVSCRIPT: 'JAVSCRIPT';
	JQUERY: 'JQUERY';
	LESS_CSS: 'LESS_CSS';
	NODE_JS: 'NODE_JS';
	PHP: 'PHP';
	PYTHON: 'PYTHON';
	REACT_JS: 'REACT_JS';
	REACT_NATIVE: 'REACT_NATIVE';
	REDUX: 'REDUX';
	SCSS: 'SCSS';
	SQL: 'SQL';
	TYPESCRIPT: 'TYPESCRIPT';
	WEBPACK: 'WEBPACK';
	WORDPRESS: 'WORDPRESS';
};

export type TechFilterType = keyof TechKeys | null | 'all' | 'null';

export const TECH_IMAGES = {
	ACTION_SCRIPT: ImgActionScript,
	AMP: ImgAmp,
	ANGULAR_JS: ImgAngularJs,
	COFFEE_SCRIPT: ImgCoffeeScript,
	CSS: ImgCss,
	DJANGO: ImgDjango,
	GRUNT: ImgGrunt,
	HANDLEBARS_JS: ImgHandlebarsJs,
	HTML: ImgHtml,
	JAVSCRIPT: ImgJavascript,
	JQUERY: ImgJquery,
	LESS_CSS: ImgLessCss,
	NODE_JS: ImgNodeJs,
	PHP: ImgPhp,
	PYTHON: ImgPython,
	REACT_JS: ImgReactJs,
	REACT_NATIVE: ImgReactNative,
	REDUX: ImgRedux,
	SCSS: ImgScss,
	SQL: ImgSql,
	TYPESCRIPT: ImgTypescript,
	WEBPACK: ImgWebpack,
	WORDPRESS: ImgWordpress,
};
