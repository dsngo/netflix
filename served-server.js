module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});exports.getAPIDetails=exports.addAPIData=exports.setSearchTerm=undefined;var _axios=__webpack_require__(27);var _axios2=_interopRequireDefault(_axios);var _actions=__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var setSearchTerm=exports.setSearchTerm=function setSearchTerm(searchTerm){return{type:_actions.SET_SEARCH_TERM,searchTerm:searchTerm}};var addAPIData=exports.addAPIData=function addAPIData(apiData){return{type:_actions.ADD_API_DATA,apiData:apiData}};var getAPIDetails=exports.getAPIDetails=function getAPIDetails(imdbID){return function(dispatch){return _axios2.default.get('http://localhost:3000/'+imdbID).then(function(response){return dispatch(addAPIData(response.data))}).catch(function(error){return console.log('axios',error)})}};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(setSearchTerm,'setSearchTerm','C:/Users/Rhaps/Desktop/React/Review/js/redux/actionCreators.jsx');__REACT_HOT_LOADER__.register(addAPIData,'addAPIData','C:/Users/Rhaps/Desktop/React/Review/js/redux/actionCreators.jsx');__REACT_HOT_LOADER__.register(getAPIDetails,'getAPIDetails','C:/Users/Rhaps/Desktop/React/Review/js/redux/actionCreators.jsx')}();;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var SET_SEARCH_TERM=exports.SET_SEARCH_TERM='SET_SEARCH_TERM';var ADD_API_DATA=exports.ADD_API_DATA='ADD_API_DATA';;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(SET_SEARCH_TERM,'SET_SEARCH_TERM','C:/Users/Rhaps/Desktop/React/Review/js/redux/actions.jsx');__REACT_HOT_LOADER__.register(ADD_API_DATA,'ADD_API_DATA','C:/Users/Rhaps/Desktop/React/Review/js/redux/actions.jsx')}();;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(2);var _reactRouterDom=__webpack_require__(1);var _actionCreators=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Header=function Header(props){var utilSpace=props.showSearch?_react2.default.createElement('input',{onChange:function onChange(e){return props.setSearchTerm(e.target.value)},value:props.searchTerm,type:'text',placeholder:'Search'}):_react2.default.createElement('h2',null,_react2.default.createElement(_reactRouterDom.Link,{to:'/search'},'Back'));return _react2.default.createElement('header',null,_react2.default.createElement('h1',null,_react2.default.createElement(_reactRouterDom.Link,{to:'/',onClick:function onClick(){return props.setSearchTerm('')}},'svideo')),utilSpace)};var mapStateToProps=function mapStateToProps(state){return{searchTerm:state.searchTerm}};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{setSearchTerm:function setSearchTerm(searchTerm){return dispatch((0,_actionCreators.setSearchTerm)(searchTerm))}}};var _default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Header);exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(Header,'Header','C:/Users/Rhaps/Desktop/React/Review/js/Header.jsx');__REACT_HOT_LOADER__.register(mapStateToProps,'mapStateToProps','C:/Users/Rhaps/Desktop/React/Review/js/Header.jsx');__REACT_HOT_LOADER__.register(mapDispatchToProps,'mapDispatchToProps','C:/Users/Rhaps/Desktop/React/Review/js/Header.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/Header.jsx')}();;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-console:0 */
const express = __webpack_require__(9);
const React = __webpack_require__(0);
const ReactDOMServer = __webpack_require__(10);
const { StaticRouter } = __webpack_require__(1);
const _ = __webpack_require__(11);
const fs = __webpack_require__(12);
const compression = __webpack_require__(13);
const webpackDevMiddleware = __webpack_require__(14);
const webpackHotMiddleware = __webpack_require__(15);
const webpack = __webpack_require__(4);
const config = __webpack_require__(16);

const PORT = process.env.PORT || 3030;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
const App = __webpack_require__(19).default;

const server = express();
server.use(compression());
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );
  server.use(webpackHotMiddleware(compiler));
}
server.use('/public/', express.static('public')); // Make sure to understand this
server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(App)
    )
  );
  if (context.url) {
    res.redirect(context.url);
  }
  res.write(template({ body }));
  res.end();
});
console.log(`Listening on port: ${PORT}`);
server.listen(PORT);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(17);
const webpack = __webpack_require__(4);
const nodeExternals = __webpack_require__(18);

const devPort = 9090;
const config = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${devPort}`,
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx',
  ],
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: '[name]-bundle.js',
    publicPath: '/public/js/',
  },
  devServer: {
    hot: true,
    publicPath: '/public/js/',
    historyApiFallback: true,
    port: devPort,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx|js)?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        include: [
          path.resolve(__dirname, 'js'),
          path.resolve('node_modules/preact-compat/src'),
        ],
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
};
if (process.env.NODE_ENV === 'server') {
  config.target = 'node';
  config.externals = [nodeExternals()];
  config.entry = './server.js';
  config.output = {
    path: __dirname,
    filename: 'served-server.js',
    libraryTarget: 'commonjs2',
  };
  delete config.devtool;
  delete config.devServer;
  config.stats.chunks = false;
  config.resolve.alias = {
    react: 'preact-compat',
    'react-dom': 'preact-compat',
  };
  config.plugins = [];
}
if (process.env.NODE_ENV === 'development') {
  config.entry = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './js/ClientApp.jsx',
  ];
}
if (process.env.NODE_ENV === 'production') {
  config.entry = './js/ClientApp.jsx';
  delete config.devtool;
  delete config.devServer;
  config.stats.chunks = false;
  config.resolve.alias = {
    react: 'preact-compat',
    'react-dom': 'preact-compat',
  };
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
    }),
  ];
}
module.exports = config;

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(2);var _reactRouterDom=__webpack_require__(1);var _store=__webpack_require__(20);var _store2=_interopRequireDefault(_store);var _AsyncRoute=__webpack_require__(23);var _AsyncRoute2=_interopRequireDefault(_AsyncRoute);var _FourOhFour=__webpack_require__(24);var _FourOhFour2=_interopRequireDefault(_FourOhFour);var _data=__webpack_require__(25);var _data2=_interopRequireDefault(_data);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var App=function App(){return _react2.default.createElement(_reactRedux.Provider,{store:_store2.default},_react2.default.createElement('div',{className:'app'},_react2.default.createElement(_reactRouterDom.Switch,null,_react2.default.createElement(_reactRouterDom.Route,{exact:true,path:'/',component:function component(props){return _react2.default.createElement(_AsyncRoute2.default,{props:props,loadingPromise:Promise.resolve().then(function(){return __webpack_require__(26)})})}}),_react2.default.createElement(_reactRouterDom.Route,{path:'/search',component:function component(props){return _react2.default.createElement(_AsyncRoute2.default,{props:Object.assign({shows:_data2.default.shows},props),loadingPromise:Promise.resolve().then(function(){return __webpack_require__(28)})})}}),_react2.default.createElement(_reactRouterDom.Route,{path:'/details/:id',render:function render(props){var shows=_data2.default.shows.filter(function(show){return props.match.params.id===show.imdbID});return _react2.default.createElement(_AsyncRoute2.default,{props:Object.assign({show:shows[0]},props),loadingPromise:Promise.resolve().then(function(){return __webpack_require__(30)})})}}),_react2.default.createElement(_reactRouterDom.Route,{component:_FourOhFour2.default}))))};var _default=App;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(App,'App','C:/Users/Rhaps/Desktop/React/Review/js/App.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/App.jsx')}();;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};var _redux=__webpack_require__(5);var _reduxThunk=__webpack_require__(21);var _reduxThunk2=_interopRequireDefault(_reduxThunk);var _reducers=__webpack_require__(22);var _reducers2=_interopRequireDefault(_reducers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var store=(0,_redux.createStore)(_reducers2.default,(0,_redux.compose)((0,_redux.applyMiddleware)(_reduxThunk2.default),(typeof window==='undefined'?'undefined':_typeof(window))==='object'&&typeof window.devToolsExtension!=='undefined'?window.devToolsExtension():function(f){return f}));var _default=store;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(store,'store','C:/Users/Rhaps/Desktop/React/Review/js/redux/store.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/redux/store.jsx')}();;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _redux=__webpack_require__(5);var _actions=__webpack_require__(6);var searchTerm=function searchTerm(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var action=arguments[1];return action.type===_actions.SET_SEARCH_TERM?action.searchTerm:state};var apiData=function apiData(){var _ref;var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];return action.type===_actions.ADD_API_DATA?(_ref={},_ref[action.apiData.imdbID]=action.apiData,_ref):state};var rootReducer=(0,_redux.combineReducers)({searchTerm:searchTerm,apiData:apiData});var _default=rootReducer;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(searchTerm,'searchTerm','C:/Users/Rhaps/Desktop/React/Review/js/redux/reducers.jsx');__REACT_HOT_LOADER__.register(apiData,'apiData','C:/Users/Rhaps/Desktop/React/Review/js/redux/reducers.jsx');__REACT_HOT_LOADER__.register(rootReducer,'rootReducer','C:/Users/Rhaps/Desktop/React/Review/js/redux/reducers.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/redux/reducers.jsx')}();;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var AsyncRoute=function(_Component){_inherits(AsyncRoute,_Component);function AsyncRoute(){var _temp,_this,_ret;_classCallCheck(this,AsyncRoute);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}return _ret=(_temp=(_this=_possibleConstructorReturn(this,_Component.call.apply(_Component,[this].concat(args))),_this),_this.state={loaded:false},_this.component=null,_temp),_possibleConstructorReturn(_this,_ret)}AsyncRoute.prototype.componentDidMount=function componentDidMount(){var _this2=this;this.props.loadingPromise.then(function(module){_this2.component=module.default;_this2.setState({loaded:true})})};AsyncRoute.prototype.render=function render(){if(this.state.loaded){return _react2.default.createElement(this.component,this.props.props)}return _react2.default.createElement('h1',null,'Loading...')};return AsyncRoute}(_react.Component);var _default=AsyncRoute;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(AsyncRoute,'AsyncRoute','C:/Users/Rhaps/Desktop/React/Review/js/AsyncRoute.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/AsyncRoute.jsx')}();;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FourOhFour=function FourOhFour(){return _react2.default.createElement('h1',null,'404!')};var _default=FourOhFour;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(FourOhFour,'FourOhFour','C:/Users/Rhaps/Desktop/React/Review/js/FourOhFour.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/FourOhFour.jsx')}();;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
	"shows": [
		{
			"title": "House of Cards",
			"year": "2013–",
			"description": "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
			"poster": "hoc.jpg",
			"imdbID": "tt1856010",
			"trailer": "NTzycsqxYJ0"
		},
		{
			"title": "Orange Is the New Black",
			"year": "2013–",
			"description": "The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.",
			"poster": "oitnb.jpg",
			"imdbID": "tt2372162",
			"trailer": "th8WT_pxGqg"
		},
		{
			"title": "Master of None",
			"year": "2015–",
			"description": "The personal and professional life of Dev, a 30-year-old actor in New York.",
			"poster": "mon.jpg",
			"imdbID": "tt4635276",
			"trailer": "6bFvb3WKISk"
		},
		{
			"title": "Narcos",
			"year": "2015–",
			"description": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
			"poster": "n.jpg",
			"imdbID": "tt2707408",
			"trailer": "U7elNhHwgBU"
		},
		{
			"title": "Black Mirror",
			"year": "2011–",
			"description": "A television anthology series that shows the dark side of life and technology.",
			"poster": "bm.jpg",
			"imdbID": "tt2085059",
			"trailer": "jDiYGjp5iFg"
		},
		{
			"title": "Stranger Things",
			"year": "2016–",
			"description": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
			"poster": "st.jpg",
			"imdbID": "tt4574334",
			"trailer": "9Egf5U8xLo8"
		},
		{
			"title": "Game of Thrones",
			"year": "2011–",
			"description": "Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.",
			"poster": "got.jpg",
			"imdbID": "tt0944947",
			"trailer": "giYeaKsXnsI"
		},
		{
			"title": "Billions",
			"year": "2016–",
			"description": "U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby \"Axe\" Axelrod in a battle between two powerful New York figures.",
			"poster": "b.jpg",
			"imdbID": "tt4270492",
			"trailer": "_raEUMLL-ZI"
		},
		{
			"title": "Silicon Valley",
			"year": "2014–",
			"description": "Follows the struggle of Richard Hendricks, a silicon valley engineer trying to build his own company called Pied Piper.",
			"poster": "sv.jpg",
			"imdbID": "tt2575988",
			"trailer": "69V__a49xtw"
		},
		{
			"title": "Breaking Bad",
			"year": "2008–2013",
			"description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
			"poster": "bb.jpg",
			"imdbID": "tt0903747",
			"trailer": "XZ8daibM3AE"
		},
		{
			"title": "The Americans",
			"year": "2013–",
			"description": "Two Soviet intelligence agents pose as a married couple to spy on the American government.",
			"poster": "ta.jpg",
			"imdbID": "tt2149175",
			"trailer": "HjuUkbhsI24"
		},
		{
			"title": "Homeland",
			"year": "2011–",
			"description": "A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.",
			"poster": "h.jpg",
			"imdbID": "tt1796960",
			"trailer": "KyFmS3wRPCQ"
		},
		{
			"title": "Atlanta",
			"year": "2008–2013",
			"description": "Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; \"Earnest 'Earn' Marks,\" an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.",
			"poster": "a.jpg",
			"imdbID": "tt4288182",
			"trailer": "MpEdJ-mmTlY"
		},
		{
			"title": "Veep",
			"year": "2012–",
			"description": "Former Senator Selina Meyer finds that being Vice President of the United States is nothing like she hoped and everything that everyone ever warned her about.",
			"poster": "v.jpg",
			"imdbID": "tt1759761",
			"trailer": "I2HoCG_iyhU"
		},
		{
			"title": "Westworld",
			"year": "2016–",
			"description": "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",
			"poster": "ww.jpg",
			"imdbID": "tt0475784",
			"trailer": "eX3u0IlBBO4"
		},
		{
			"title": "Daredevil",
			"year": "2015–",
			"description": "A blind lawyer with his other senses superhumanly enhanced fights crime as a costumed superhero.",
			"poster": "dd.jpg",
			"imdbID": "tt3322312",
			"trailer": "m5_A0Wx0jU4"
		},
		{
			"title": "Arrested Development",
			"year": "2003–",
			"description": "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.",
			"poster": "ad.jpg",
			"imdbID": "tt0367279",
			"trailer": "vzVhPCMAxWQ"
		},
		{
			"title": "Unbreakable Kimmy Schmidt",
			"year": "2015–",
			"description": "A woman is rescued from a doomsday cult and starts life over again in New York City.",
			"poster": "uks.jpg",
			"imdbID": "tt3339966",
			"trailer": "ZBJHP2B4bjc"
		},
		{
			"title": "Marco Polo",
			"year": "2014–",
			"description": "In a world replete with greed, betrayal, sexual intrigue and rivalry, \"Marco Polo\" is based on the famed explorer's adventures in Kublai Khan's court in 13th century China.",
			"poster": "mp.jpg",
			"imdbID": "tt2189461",
			"trailer": "CeUhXYmGKU4"
		},
		{
			"title": "Bloodline",
			"year": "2015–",
			"description": "A family of adult siblings find that their secrets and scars are revealed when their black sheep of a brother returns home.",
			"poster": "bl.jpg",
			"imdbID": "tt3520702",
			"trailer": "tRnS8FkcXNk"
		},
		{
			"title": "BoJack Horseman",
			"year": "2014–",
			"description": "Meet the most beloved sitcom horse of the '90s - 20 years later. BoJack Horseman was the star of the hit TV show \"Horsin' Around,\" but today he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
			"poster": "bh.jpg",
			"imdbID": "tt3398228",
			"trailer": "5sGsBoX6vUo"
		},
		{
			"title": "Hemlock Grove",
			"year": "2013–",
			"description": "A teenage girl is brutally murdered, sparking a hunt for her killer. But in a town where everyone hides a secret, will they find the monster among them?",
			"poster": "hg.jpg",
			"imdbID": "tt2309295",
			"trailer": "rlZUsPcChgI"
		},
		{
			"title": "The Killing",
			"year": "2011–",
			"description": "A police investigation, the saga of a grieving family, and a Seattle mayoral campaign all interlock after the body of 17-year-old Rosie Larsen is found in the trunk of a submerged car.",
			"poster": "tk.jpg",
			"imdbID": "tt1637727",
			"trailer": "OkbfvPeH3G0"
		},
		{
			"title": "Love",
			"year": "2016–",
			"description": "A program that follows a couple who must navigate the exhilarations and humiliations of intimacy, commitment and other things they were hoping to avoid.",
			"poster": "l.jpg",
			"imdbID": "tt4061080",
			"trailer": "Ym3LoSj9Xj8"
		},
		{
			"title": "Flaked",
			"year": "2016–",
			"description": "Will Arnett will star as a self-help guru who needs a decent amount of help himself.",
			"poster": "f.jpg",
			"imdbID": "tt4973548",
			"trailer": "iKOpvm7BcOo"
		},
		{
			"title": "Jessica Jones",
			"year": "2015–",
			"description": "A former superhero decides to reboot her life by becoming a private investigator.",
			"poster": "jj.jpg",
			"imdbID": "tt2357547",
			"trailer": "nWHUjuJ8zxE"
		},
		{
			"title": "Wet Hot American Summer: First Day of Camp",
			"year": "2015–",
			"description": "Follow the counselors and campers on their first day at Camp Firewood in the summer of 1981.",
			"poster": "whas.jpg",
			"imdbID": "tt4341500",
			"trailer": "PLlMTn_Jzok"
		},
		{
			"title": "Club de Cuervos",
			"year": "2015–",
			"description": "When the patriarch of a prominent family dies, his heirs battle to determine who will gain control of his beloved soccer team: The Cuervos of Nuevo Toledo.",
			"poster": "cdc.jpg",
			"imdbID": "tt4680240",
			"trailer": "TvUVBVRlCV8"
		},
		{
			"title": "Making a Murderer",
			"year": "2015–",
			"description": "Filmed over a 10-year period, Making a Murderer is an unprecedented real-life thriller about Steven Avery, a DNA exoneree who, while in the midst of exposing corruption in local law enforcement, finds himself the prime suspect in a grisly new crime.",
			"poster": "mam.jpg",
			"imdbID": "tt5189670",
			"trailer": "qxgbdYaR_KQ"
		},
		{
			"title": "Sense8",
			"year": "2015–",
			"description": "A group of people around the world are suddenly linked mentally, and must find a way to survive being hunted by those who see them as a threat to the world's order.",
			"poster": "s8.jpg",
			"imdbID": "tt2431438",
			"trailer": "riLgCIvE9aU"
		},
		{
			"title": "Fuller House",
			"year": "2016–",
			"description": "D.J. Tanner-Fuller is a widow and mother of three. Things become too much to handle, so she asks for help from her sister Stephanie and her best friend Kimmy.",
			"poster": "fh.jpg",
			"imdbID": "tt3986586",
			"trailer": "CXuGLswn2l0"
		},
		{
			"title": "w/ Bob & David",
			"year": "2016–",
			"description": "Bob and David emerge from the time machine they entered sixteen years ago and are reunited with the cast of Mr. Show.",
			"poster": "wbd.jpg",
			"imdbID": "tt4574708",
			"trailer": "QyZ9l8anS9I"
		}
	]
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(1);var _reactRedux=__webpack_require__(2);var _actionCreators=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Landing=function(_Component){_inherits(Landing,_Component);function Landing(){var _temp,_this,_ret;_classCallCheck(this,Landing);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}return _ret=(_temp=(_this=_possibleConstructorReturn(this,_Component.call.apply(_Component,[this].concat(args))),_this),_this.handleSetSearchTerm=function(){var _this2;return(_this2=_this).__handleSetSearchTerm__REACT_HOT_LOADER__.apply(_this2,arguments)},_this.handleSearchSubmit=function(){var _this3;return(_this3=_this).__handleSearchSubmit__REACT_HOT_LOADER__.apply(_this3,arguments)},_temp),_possibleConstructorReturn(_this,_ret)}Landing.prototype.__handleSetSearchTerm__REACT_HOT_LOADER__=function __handleSetSearchTerm__REACT_HOT_LOADER__(e){this.props.setSearchTerm(e.target.value)};Landing.prototype.__handleSearchSubmit__REACT_HOT_LOADER__=function __handleSearchSubmit__REACT_HOT_LOADER__(e){e.preventDefault();this.props.history.push('/search')};Landing.prototype.render=function render(){return _react2.default.createElement('div',{className:'landing'},_react2.default.createElement('h1',null,'svideo'),_react2.default.createElement('form',{onSubmit:this.handleSearchSubmit},_react2.default.createElement('input',{type:'text',value:this.props.searchTerm,onChange:this.handleSetSearchTerm,placeholder:'Search'})),_react2.default.createElement(_reactRouterDom.Link,{to:'/search'},'or Browse All'))};return Landing}(_react.Component);var mapStateToProps=function mapStateToProps(state){return{searchTerm:state.searchTerm}};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{setSearchTerm:function setSearchTerm(searchTerm){return dispatch((0,_actionCreators.setSearchTerm)(searchTerm))}}};var _default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Landing);exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(Landing,'Landing','C:/Users/Rhaps/Desktop/React/Review/js/Landing.jsx');__REACT_HOT_LOADER__.register(mapStateToProps,'mapStateToProps','C:/Users/Rhaps/Desktop/React/Review/js/Landing.jsx');__REACT_HOT_LOADER__.register(mapDispatchToProps,'mapDispatchToProps','C:/Users/Rhaps/Desktop/React/Review/js/Landing.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/Landing.jsx')}();;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});exports.Unwrapped=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(2);var _ShowCard=__webpack_require__(29);var _ShowCard2=_interopRequireDefault(_ShowCard);var _Header=__webpack_require__(7);var _Header2=_interopRequireDefault(_Header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Search=function Search(props){return _react2.default.createElement('div',{className:'search'},_react2.default.createElement(_Header2.default,{showSearch:true}),_react2.default.createElement('div',null,props.shows.filter(function(show){return(show.title+' '+show.description+' '+show.year).toLowerCase().indexOf(props.searchTerm.toLowerCase())>=0}).map(function(show){return _react2.default.createElement(_ShowCard2.default,_extends({key:show.imdbID},show))})))};var mapStateToProps=function mapStateToProps(state){return{searchTerm:state.searchTerm}};var Unwrapped=exports.Unwrapped=Search;var _default=(0,_reactRedux.connect)(mapStateToProps)(Search);exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(Search,'Search','C:/Users/Rhaps/Desktop/React/Review/js/Search.jsx');__REACT_HOT_LOADER__.register(mapStateToProps,'mapStateToProps','C:/Users/Rhaps/Desktop/React/Review/js/Search.jsx');__REACT_HOT_LOADER__.register(Unwrapped,'Unwrapped','C:/Users/Rhaps/Desktop/React/Review/js/Search.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/Search.jsx')}();;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ShowCard=function ShowCard(props){return _react2.default.createElement(_reactRouterDom.Link,{to:'/details/'+props.imdbID},_react2.default.createElement('div',{className:'show-card'},_react2.default.createElement('img',{src:'./public/img/posters/'+props.poster,alt:props.title+' Show Poster'}),_react2.default.createElement('div',null,_react2.default.createElement('h3',null,props.title),_react2.default.createElement('h4',null,'(',props.year,')'),_react2.default.createElement('p',null,props.description))))};var _default=ShowCard;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(ShowCard,'ShowCard','C:/Users/Rhaps/Desktop/React/Review/js/ShowCard.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/ShowCard.jsx')}();;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(2);var _actionCreators=__webpack_require__(3);var _Header=__webpack_require__(7);var _Header2=_interopRequireDefault(_Header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Details=function(_React$Component){_inherits(Details,_React$Component);function Details(){_classCallCheck(this,Details);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments))}Details.prototype.componentDidMount=function componentDidMount(){if(!this.props.rating){this.props.getAPIDetails(this.props.show.imdbID)}};Details.prototype.render=function render(){var _props$show=this.props.show,title=_props$show.title,description=_props$show.description,year=_props$show.year,poster=_props$show.poster,trailer=_props$show.trailer;var rating=this.props.rating?_react2.default.createElement('h3',null,this.props.rating):_react2.default.createElement('img',{id:'spin',src:'/public/img/loading.png',alt:'loading indicator'});return _react2.default.createElement('div',{className:'details'},_react2.default.createElement(_Header2.default,null),_react2.default.createElement('section',null,_react2.default.createElement('h1',null,title),_react2.default.createElement('h2',null,'(',year,')'),rating,_react2.default.createElement('img',{alt:''+description,src:'/public/img/posters/'+poster}),_react2.default.createElement('p',null,description)),_react2.default.createElement('div',null,_react2.default.createElement('iframe',{title:'OK',src:'https://www.youtube-nocookie.com/embed/'+trailer+'?rel=0&amp;controls=0&amp;showinfo=0',frameBorder:'0',allowFullScreen:true})))};return Details}(_react2.default.Component);var mapStateToProps=function mapStateToProps(state,ownProps){var apiData=state.apiData[ownProps.show.imdbID]||{};return{rating:apiData.rating}};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{getAPIDetails:function getAPIDetails(imdbID){return dispatch((0,_actionCreators.getAPIDetails)(imdbID))}}};var _default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Details);exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(Details,'Details','C:/Users/Rhaps/Desktop/React/Review/js/Details.jsx');__REACT_HOT_LOADER__.register(mapStateToProps,'mapStateToProps','C:/Users/Rhaps/Desktop/React/Review/js/Details.jsx');__REACT_HOT_LOADER__.register(mapDispatchToProps,'mapDispatchToProps','C:/Users/Rhaps/Desktop/React/Review/js/Details.jsx');__REACT_HOT_LOADER__.register(_default,'default','C:/Users/Rhaps/Desktop/React/Review/js/Details.jsx')}();;

/***/ })
/******/ ]);