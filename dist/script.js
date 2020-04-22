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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/cards */ "./src/js/cards.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


console.log(_js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["ACTION (SET A)"]);

var Cards = /*#__PURE__*/function () {
  function Cards() {
    _classCallCheck(this, Cards);

    this.cardsName = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"].names;
    this.ActionA = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["ACTION (SET A)"];
    this.ActionB = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["ACTION (SET B)"];
    this.AnimalA = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["ANIMAL (SET A)"];
    this.AnimalB = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["ANIMAL (SET B)"];
    this.Clothes = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["CLOTHES"];
    this.Emotions = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["EMOTIONS"];
    this.Cook = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["COOK"];
    this.Body = _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"]["BODY"];
  }

  _createClass(Cards, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('wrapper');
      this.image = document.createElement('img');
      this.menuBlock = document.createElement('div');
      this.navBlock = document.createElement('div');
      this.switcherBlock = document.createElement('div');
      this.train = document.createElement('div');
      this.play = document.createElement('div');
      this.switcher = document.createElement('div');
      this.trainText = document.createElement('p');
      this.playText = document.createElement('p');
      this.playButton = document.createElement('div');
      this.pointBlock = document.createElement('div');
      this.input = document.createElement("input");
      this.cardsBlock = document.createElement('div');
      var body = document.querySelector('body');
      body.appendChild(this.wrapper);
      this.wrapper.appendChild(this.menuBlock);
      this.menuBlock.appendChild(this.navBlock);
      this.menuBlock.appendChild(this.pointBlock);
      this.menuBlock.appendChild(this.switcherBlock);
      this.switcherBlock.appendChild(this.trainText);
      this.switcherBlock.appendChild(this.switcher);
      this.switcherBlock.appendChild(this.playText);
      this.switcher.appendChild(this.input);
      this.wrapper.appendChild(this.cardsBlock);
      this.trainText.innerHTML = 'Train';
      this.playText.innerHTML = 'Play';
      this.trainText.classList.add('mode_name');
      this.playText.classList.add('mode_name');
      this.menuBlock.classList.add('menu_block');
      this.switcherBlock.classList.add('switcher_block');
      this.navBlock.classList.add('nav_block');
      this.switcher.classList.add('toggle');
      this.cardsBlock.classList.add('cards_wrapper');
      this.playButton.classList.add('offButton');
      this.playButton.innerHTML = 'Start Game';
      this.input.type = "checkbox";
      this.input.classList.add('switch-input');
      this.pointBlock.classList.add('point_block');

      var toggle = function toggle() {
        if (!document.querySelector('.switch-input').checked) {
          document.querySelectorAll('.cards').forEach(function (e) {
            e.classList.remove('play_mode');
          });
        } else if (document.querySelector('.switch-input').checked) {
          document.querySelectorAll('.cards').forEach(function (e) {
            e.classList.add('play_mode');
          });
        }
      };

      document.querySelector('.toggle').addEventListener('click', toggle);
      var content = '';

      for (var i = 0; i < this.cardsName.length; i++) {
        content += "\n          \n            <div class=\"forCards\">\n            <div class=\"cards_icon\">\n      <img src=\"../src/img/forMenu/".concat(i, ".jpg\" alt=\"icon\">\n        </div>\n        <div class=\"cards_name\"> \n        <span><a id=\"links_").concat(i, "\" class=\"link_on_name\" href=\"#\">").concat(this.cardsName[i], "</a></span>\n        </div>\n        </div>\n      \n            ");
      }

      this.cardsBlock.insertAdjacentHTML('beforeend', content);
      document.querySelectorAll('.forCards').forEach(function (el) {
        el.classList.add('cards');
      });
      document.querySelectorAll('.cards_icon').forEach(function (element) {
        element.appendChild(_this.image);
      });

      function shuffle(a) {
        for (var _i = a.length - 1; _i > 0; _i--) {
          var j = Math.floor(Math.random() * (_i + 1));
          var _ref = [a[j], a[_i]];
          a[_i] = _ref[0];
          a[j] = _ref[1];
        }

        return a;
      }

      var stars = '';

      var pushStar = function pushStar(e) {
        stars += "\n            <img class=\"stars\" src=\"../src/img/".concat(e, ".svg\" alt=\"icon\">\n\n");
      };

      var youWin = function youWin() {
        var deletedContent = document.querySelector('.cards_wrapper');

        while (deletedContent.firstElementChild) {
          deletedContent.removeChild(deletedContent.firstElementChild);
        }

        document.querySelector('.offButton').remove();
        var winContent = '';
        winContent += "\n\n    <div class=\"win-container\">\n    <img src=\"../src/img/success.jpg\" alt=\"icon\">\n    </div>\n\n";

        _this.cardsBlock.insertAdjacentHTML('beforeend', winContent);

        new Audio("../src/audio/success.mp3").play();
      };

      var youLose = function youLose() {
        var deletedContent = document.querySelector('.cards_wrapper');

        while (deletedContent.firstElementChild) {
          deletedContent.removeChild(deletedContent.firstElementChild);
        }

        document.querySelector('.offButton').remove();
        var winContent = '';
        winContent += "\n\n    <div class=\"win-container\">\n    <img src=\"../src/img/failure.jpg\" alt=\"icon\">\n    </div>\n\n";

        _this.cardsBlock.insertAdjacentHTML('beforeend', winContent);

        new Audio("../src/audio/badgame.mp3").play();
        setTimeout(function () {
          document.location.reload(true);
        }, 10000);
      };

      var BuildCards = function BuildCards() {
        var playMode = document.querySelector('.switch-input').checked;
        var propsWord = event.target.innerText;
        var container = document.querySelector('.cards_wrapper');

        while (container.firstElementChild) {
          container.removeChild(container.firstElementChild);
        }

        var trainCards = '';

        var drawTrain = function drawTrain() {
          for (var _i2 = 0; _i2 < _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"][propsWord].length; _i2++) {
            trainCards += "\n\n                <div class=\"card-container\">\n                <div class=\"card\">\n                <div class=\"font\" style=\"background-image: url(../src/img/".concat(_js_cards__WEBPACK_IMPORTED_MODULE_0__["default"][propsWord][_i2].word, ".jpg);\">\n                \n                <div class=\"card-header\">").concat(_js_cards__WEBPACK_IMPORTED_MODULE_0__["default"][propsWord][_i2].word, "</div>\n                </div>\n        \n                <div class=\"back\" style=\"background-image: url(../src/img/").concat(_js_cards__WEBPACK_IMPORTED_MODULE_0__["default"][propsWord][_i2].word, ".jpg);\">\n                \n                <div class=\"card-header\">").concat(_js_cards__WEBPACK_IMPORTED_MODULE_0__["default"][propsWord][_i2].translation, "</div>\n                </div>\n                <div class=\"rotate\" style=\"background-image: url(../src/img/rotate.png);\"></div>\n                </div>\n                </div>\n\n            ");
          }

          _this.cardsBlock.insertAdjacentHTML('beforeend', trainCards);

          var rotate = function rotate() {
            event.target.parentElement.classList.add('translate');
          };

          document.querySelectorAll('.rotate').forEach(function (e) {
            e.addEventListener('click', rotate);
          });
          document.querySelectorAll('.card').forEach(function (e) {
            e.addEventListener('mouseover', function () {
              event.target.parentElement.classList.remove('translate');
            });
            e.addEventListener('click', function () {
              console.log(event.target.innerText);
              new Audio("../src/audio/".concat(event.target.innerText, ".mp3")).play();
            });
          });
        };

        var drawPlay = function drawPlay() {
          for (var _i3 = 0; _i3 < _js_cards__WEBPACK_IMPORTED_MODULE_0__["default"][propsWord].length; _i3++) {
            trainCards += "\n\n            <div class=\"card-container\">\n            <div class=\"card\">\n            <div class=\"font\" style=\"background-image: url(../src/img/".concat(_js_cards__WEBPACK_IMPORTED_MODULE_0__["default"][propsWord][_i3].word, ".jpg);\">\n            \n            <div class=\"card-header\" style=\"opacity:0;\">").concat(_js_cards__WEBPACK_IMPORTED_MODULE_0__["default"][propsWord][_i3].word, "</div>\n            </div>\n    \n            </div>\n            <div class=\"rotate\" style=\"background-image: url(../src/img/rotate.png);\"></div>\n            </div>\n            </div>\n\n        ");
          }

          _this.cardsBlock.insertAdjacentHTML('beforeend', trainCards);

          _this.wrapper.appendChild(_this.playButton);

          document.querySelectorAll('.font').forEach(function (e) {
            e.classList.add('hidden_text');
            e.addEventListener('click', function () {});
          });
          var hiddenWords = document.querySelectorAll('.card-header');
          var currentWords = [].map.call(hiddenWords, function (obj) {
            return obj.innerText;
          });
          var stack = [];

          var playAudio = function playAudio(x) {
            new Audio("../src/audio/".concat(x, ".mp3")).play();
          };

          var counter = 0;
          var currentAudio;
          var currentText;
          var goodTry = [];
          var badTry = [];
          document.querySelector('.offButton').addEventListener('click', function () {
            playAudio(currentWords[counter]);
            document.querySelector('.offButton').innerHTML = 'Retry';
            document.querySelector('.offButton').classList.add('retry_button');
          });
          document.querySelectorAll('.font').forEach(function (e) {
            e.addEventListener('click', function () {
              if (event.target.innerText == currentWords[counter]) {
                counter++;
                console.log(currentWords);
                goodTry.push('+');
                new Audio("../src/audio/correct.mp3").play();
                pushStar('star-win');
                document.querySelector('.point_block').insertAdjacentHTML('beforeend', stars);
                stars = '';
                event.target.parentElement.parentElement.classList.add('true');
                setTimeout(function () {
                  playAudio(currentWords[counter]);
                }, 2000);
              } else {
                console.log('error');
                pushStar('star');
                new Audio("../src/audio/error.mp3").play();
                document.querySelector('.point_block').insertAdjacentHTML('beforeend', stars);
                stars = '';
                badTry.push('-');
              }

              if (goodTry.length == 8 && badTry.length == 0) {
                youWin();
              } else if (goodTry.length == 8 && badTry.length > 0) {
                youLose();
              }
            });
          });
        };

        if (!playMode) {
          drawTrain();
        } else {
          drawPlay();
        }
      };

      document.querySelectorAll('.link_on_name').forEach(function (el) {
        el.addEventListener('click', BuildCards);
        document.querySelector('.sidebar').classList.remove('active');
      });
      document.querySelectorAll('.train_cards').forEach(function (cards) {
        cards.addEventListener('click', function () {
          console.log(event.target);
        });
      });
    }
  }]);

  return Cards;
}();

window.onload = function () {
  var cards = new Cards();
  cards.init();
};

var bounce = function bounce() {
  var element = document.getElementById('sidebar');
  element.classList.toggle('active');
};

document.querySelector('.bounce').addEventListener('click', bounce);
document.querySelectorAll('.link_on_name').forEach(function (e) {
  e.addEventListener('click', function () {
    console.log(document.querySelector('.sidebar'));
    document.querySelector('.sidebar').classList.remove('active');
  });
});

/***/ }),

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cards = {
  names: ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Cook', 'Body'],
  "ACTION (SET A)": [{
    word: 'cry',
    translation: 'плакать',
    image: 'img/cry.jpg',
    audioSrc: 'audio/cry.mp3'
  }, {
    word: 'dance',
    translation: 'танцевать',
    image: 'img/dance.jpg',
    audioSrc: 'audio/dance.mp3'
  }, {
    word: 'dive',
    translation: 'нырять',
    image: 'img/dive.jpg',
    audioSrc: 'audio/dive.mp3'
  }, {
    word: 'draw',
    translation: 'рисовать',
    image: 'img/draw.jpg',
    audioSrc: 'audio/draw.mp3'
  }, {
    word: 'fish',
    translation: 'ловить рыбу',
    image: 'img/fish.jpg',
    audioSrc: 'audio/fish.mp3'
  }, {
    word: 'fly',
    translation: 'летать',
    image: 'img/fly.jpg',
    audioSrc: 'audio/fly.mp3'
  }, {
    word: 'hug',
    translation: 'обнимать',
    image: 'img/hug.jpg',
    audioSrc: 'audio/hug.mp3'
  }, {
    word: 'jump',
    translation: 'прыгать',
    image: 'img/jump.jpg',
    audioSrc: 'audio/jump.mp3'
  }],
  "ACTION (SET B)": [{
    word: 'open',
    translation: 'открывать',
    image: 'img/open.jpg',
    audioSrc: 'audio/open.mp3'
  }, {
    word: 'play',
    translation: 'играть',
    image: 'img/play.jpg',
    audioSrc: 'audio/play.mp3'
  }, {
    word: 'point',
    translation: 'указывать',
    image: 'img/point.jpg',
    audioSrc: 'audio/point.mp3'
  }, {
    word: 'ride',
    translation: 'ездить',
    image: 'img/ride.jpg',
    audioSrc: 'audio/ride.mp3'
  }, {
    word: 'run',
    translation: 'бегать',
    image: 'img/run.jpg',
    audioSrc: 'audio/run.mp3'
  }, {
    word: 'sing',
    translation: 'петь',
    image: 'img/sing.jpg',
    audioSrc: 'audio/sing.mp3'
  }, {
    word: 'skip',
    translation: 'пропускать, прыгать',
    image: 'img/skip.jpg',
    audioSrc: 'audio/skip.mp3'
  }, {
    word: 'swim',
    translation: 'плавать',
    image: 'img/swim.jpg',
    audioSrc: 'audio/swim.mp3'
  }],
  "ANIMAL (SET A)": [{
    word: 'cat',
    translation: 'кот',
    image: 'img/cat.jpg',
    audioSrc: 'audio/cat.mp3'
  }, {
    word: 'chick',
    translation: 'цыплёнок',
    image: 'img/chick.jpg',
    audioSrc: 'audio/chick.mp3'
  }, {
    word: 'chicken',
    translation: 'курица',
    image: 'img/chicken.jpg',
    audioSrc: 'audio/chicken.mp3'
  }, {
    word: 'dog',
    translation: 'собака',
    image: 'img/dog.jpg',
    audioSrc: 'audio/dog.mp3'
  }, {
    word: 'horse',
    translation: 'лошадь',
    image: 'img/horse.jpg',
    audioSrc: 'audio/horse.mp3'
  }, {
    word: 'pig',
    translation: 'свинья',
    image: 'img/pig.jpg',
    audioSrc: 'audio/pig.mp3'
  }, {
    word: 'rabbit',
    translation: 'кролик',
    image: 'img/rabbit.jpg',
    audioSrc: 'audio/rabbit.mp3'
  }, {
    word: 'sheep',
    translation: 'овца',
    image: 'img/sheep.jpg',
    audioSrc: 'audio/sheep.mp3'
  }],
  "ANIMAL (SET B)": [{
    word: 'bird',
    translation: 'птица',
    image: 'img/bird.jpg',
    audioSrc: 'audio/bird.mp3'
  }, {
    word: 'fish',
    translation: 'рыба',
    image: 'img/fish1.jpg',
    audioSrc: 'audio/fish.mp3'
  }, {
    word: 'frog',
    translation: 'жаба',
    image: 'img/frog.jpg',
    audioSrc: 'audio/frog.mp3'
  }, {
    word: 'giraffe',
    translation: 'жирафа',
    image: 'img/giraffe.jpg',
    audioSrc: 'audio/giraffe.mp3'
  }, {
    word: 'lion',
    translation: 'лев',
    image: 'img/lion.jpg',
    audioSrc: 'audio/lion.mp3'
  }, {
    word: 'mouse',
    translation: 'мышь',
    image: 'img/mouse.jpg',
    audioSrc: 'audio/mouse.mp3'
  }, {
    word: 'turtle',
    translation: 'черепаха',
    image: 'img/turtle.jpg',
    audioSrc: 'audio/turtle.mp3'
  }, {
    word: 'dolphin',
    translation: 'дельфин',
    image: 'img/dolphin.jpg',
    audioSrc: 'audio/dolphin.mp3'
  }],
  "CLOTHES": [{
    word: 'skirt',
    translation: 'юбка',
    image: 'img/skirt.jpg',
    audioSrc: 'audio/skirt.mp3'
  }, {
    word: 'pants',
    translation: 'брюки',
    image: 'img/pants.jpg',
    audioSrc: 'audio/pants.mp3'
  }, {
    word: 'blouse',
    translation: 'блузка',
    image: 'img/blouse.jpg',
    audioSrc: 'audio/blouse.mp3'
  }, {
    word: 'dress',
    translation: 'платье',
    image: 'img/dress.jpg',
    audioSrc: 'audio/dress.mp3'
  }, {
    word: 'boot',
    translation: 'ботинок',
    image: 'img/boot.jpg',
    audioSrc: 'audio/boot.mp3'
  }, {
    word: 'shirt',
    translation: 'рубашка',
    image: 'img/shirt.jpg',
    audioSrc: 'audio/shirt.mp3'
  }, {
    word: 'coat',
    translation: 'пальто',
    image: 'img/coat.jpg',
    audioSrc: 'audio/coat.mp3'
  }, {
    word: 'shoe',
    translation: 'туфли',
    image: 'img/shoe.jpg',
    audioSrc: 'audio/shoe.mp3'
  }],
  "EMOTIONS": [{
    word: 'sad',
    translation: 'грустный',
    image: 'img/sad.jpg',
    audioSrc: 'audio/sad.mp3'
  }, {
    word: 'angry',
    translation: 'сердитый',
    image: 'img/angry.jpg',
    audioSrc: 'audio/angry.mp3'
  }, {
    word: 'happy',
    translation: 'счастливый',
    image: 'img/happy.jpg',
    audioSrc: 'audio/happy.mp3'
  }, {
    word: 'tired',
    translation: 'уставший',
    image: 'img/tired.jpg',
    audioSrc: 'audio/tired.mp3'
  }, {
    word: 'surprised',
    translation: 'удивлённый',
    image: 'img/surprised.jpg',
    audioSrc: 'audio/surprised.mp3'
  }, {
    word: 'scared',
    translation: 'испуганный',
    image: 'img/scared.jpg',
    audioSrc: 'audio/scared.mp3'
  }, {
    word: 'smile',
    translation: 'улыбка',
    image: 'img/smile.jpg',
    audioSrc: 'audio/smile.mp3'
  }, {
    word: 'laugh',
    translation: 'смех',
    image: 'img/laugh.jpg',
    audioSrc: 'audio/laugh.mp3'
  }],
  "COOK": [{
    word: 'sad',
    translation: 'грустный',
    image: 'img/sad.jpg',
    audioSrc: 'audio/sad.mp3'
  }, {
    word: 'angry',
    translation: 'сердитый',
    image: 'img/angry.jpg',
    audioSrc: 'audio/angry.mp3'
  }, {
    word: 'happy',
    translation: 'счастливый',
    image: 'img/happy.jpg',
    audioSrc: 'audio/happy.mp3'
  }, {
    word: 'tired',
    translation: 'уставший',
    image: 'img/tired.jpg',
    audioSrc: 'audio/tired.mp3'
  }, {
    word: 'surprised',
    translation: 'удивлённый',
    image: 'img/surprised.jpg',
    audioSrc: 'audio/surprised.mp3'
  }, {
    word: 'scared',
    translation: 'испуганный',
    image: 'img/scared.jpg',
    audioSrc: 'audio/scared.mp3'
  }, {
    word: 'smile',
    translation: 'улыбка',
    image: 'img/smile.jpg',
    audioSrc: 'audio/smile.mp3'
  }, {
    word: 'laugh',
    translation: 'смех',
    image: 'img/laugh.jpg',
    audioSrc: 'audio/laugh.mp3'
  }],
  "BODY": [{
    word: 'sad',
    translation: 'грустный',
    image: 'img/sad.jpg',
    audioSrc: 'audio/sad.mp3'
  }, {
    word: 'angry',
    translation: 'сердитый',
    image: 'img/angry.jpg',
    audioSrc: 'audio/angry.mp3'
  }, {
    word: 'happy',
    translation: 'счастливый',
    image: 'img/happy.jpg',
    audioSrc: 'audio/happy.mp3'
  }, {
    word: 'tired',
    translation: 'уставший',
    image: 'img/tired.jpg',
    audioSrc: 'audio/tired.mp3'
  }, {
    word: 'surprised',
    translation: 'удивлённый',
    image: 'img/surprised.jpg',
    audioSrc: 'audio/surprised.mp3'
  }, {
    word: 'scared',
    translation: 'испуганный',
    image: 'img/scared.jpg',
    audioSrc: 'audio/scared.mp3'
  }, {
    word: 'smile',
    translation: 'улыбка',
    image: 'img/smile.jpg',
    audioSrc: 'audio/smile.mp3'
  }, {
    word: 'laugh',
    translation: 'смех',
    image: 'img/laugh.jpg',
    audioSrc: 'audio/laugh.mp3'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map