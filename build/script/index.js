"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fn = function fn(x, y) {
  return x * y;
};

var Demo =
/*#__PURE__*/
function () {
  function Demo() {
    _classCallCheck(this, Demo);
  }

  _createClass(Demo, [{
    key: "test",
    value: function test() {
      // eslint-disable-next-line no-console
      console.log("demo func test");
    }
  }]);

  return Demo;
}();

exports.module.fn = fn;
exports.module.Demo = Demo;