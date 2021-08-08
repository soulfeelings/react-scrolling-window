"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var element = document.getElementById('root');
var cr = React.createElement;

var Td = function Td(props) {
  return /*#__PURE__*/React.createElement("td", {
    key: props.name
  }, "__", props.name, "__");
};

var Tr = function Tr(_ref) {
  var number = _ref.number,
      height = _ref.height;
  return /*#__PURE__*/React.createElement("tr", {
    style: {
      height: height
    }
  }, /*#__PURE__*/React.createElement(Td, {
    name: "Sergey " + number
  }));
};

var App = function App(_ref2) {
  var count = _ref2.count,
      rowHeight = _ref2.rowHeight,
      trCount = _ref2.trCount;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      start = _React$useState2[0],
      changeStart = _React$useState2[1];

  var wrapperTableRef = React.useRef();

  function getTopScrollingPosition() {
    return start * rowHeight;
  }

  function getBottomScrollingPosition(length) {
    return rowHeight * (length - (start + trCount));
  }

  function onScroll(e) {
    var newStart = Math.floor(e.target.scrollTop / rowHeight);
    changeStart(newStart);
  }

  React.useEffect(function () {
    wrapperTableRef.current.addEventListener('scroll', onScroll);

    (function () {
      return wrapperTableRef.current.removeEventListener('scroll', onScroll);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapperTableRef,
    style: {
      height: trCount * rowHeight + 1 + 'px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: getTopScrollingPosition()
    }
  }), /*#__PURE__*/React.createElement("table", {
    style: {
      borderSpacing: "0px"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, new Array(count).slice(start, start + trCount).fill(Tr).map(function (E, i) {
    return /*#__PURE__*/React.createElement(E, {
      key: start + i,
      number: start + i,
      height: rowHeight
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: getBottomScrollingPosition(count)
    }
  }));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, {
  count: 100000,
  rowHeight: 30,
  trCount: 10
}), element);