"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SimpleModal;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Simple modal react componants
 * @param {string} text Text you want to input
 * @param {boolean} IsOpen State variable that define if the modal is opened or closed
 * @param {Function} closeModal setState function that will allow the modal to be closed
 * @returns
 */
function SimpleModal(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "Your text here" : _ref$text,
    _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    _ref$closeModal = _ref.closeModal,
    closeModal = _ref$closeModal === void 0 ? function () {} : _ref$closeModal;
  var modalContainerStyle = Object.assign({
    position: "absolute"
  }, {
    top: "40%"
  }, {
    left: "25%"
  }, {
    background: "#fbfbfb"
  }, {
    width: "50%"
  }, {
    height: "15%"
  }, {
    textAlign: "center"
  }, {
    alignContent: "center"
  }, {
    fontSize: "20px"
  }, {
    border: "1px solid hsl(0, 0%, 80%)"
  }, {
    borderRadius: "5px"
  }, {
    boxShadow: "1px 1px 7px rgb(0 0 0 / 35%)"
  });
  var modalButtonStyle = Object.assign({
    position: "absolute"
  }, {
    top: "-20%"
  }, {
    right: "2%"
  }, {
    background: "#e76e6e"
  }, {
    width: "70px"
  }, {
    height: "20px"
  }, {
    textAlign: "center"
  }, {
    fontSize: "14px"
  }, {
    fontWeight: "bold"
  }, {
    border: "1px solid #5b0000"
  }, {
    borderRadius: "5px"
  });
  var modalOutsideStyle = Object.assign({
    display: isOpen ? "block" : "none"
  }, {
    position: "absolute"
  }, {
    background: "#ffffff80"
  }, {
    width: "100%"
  }, {
    height: "100%"
  }, {
    zIndex: 1
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: modalOutsideStyle,
    onClick: closeModal
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: modalContainerStyle,
    className: "react-modal"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: modalButtonStyle,
    onClick: closeModal
  }, "Close"), text));
}