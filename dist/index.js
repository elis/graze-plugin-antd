'use strict';

var react = require('react');

var index = (function (options) {
  return {
    client: client(options),
    server: server(options)
  };
});

var client = function client(options) {
  return {
    onLoad: function onLoad() {
      var _options$theme;

      options === null || options === void 0 ? void 0 : (_options$theme = options.theme) === null || _options$theme === void 0 ? void 0 : _options$theme.call(options);
    },
    Wrapper: function Wrapper(_ref) {
      var children = _ref.children;
      react.useEffect(function () {
        var jssStyles = document.getElementById('antd-server-side');

        if (jssStyles && jssStyles.parentNode) {
          setTimeout(function () {
            jssStyles.parentNode.removeChild(jssStyles);
          }, 800);
        }
      }, []);
      return children;
    }
  };
};

var server = function server(options) {
  return {
    onRequest: function onRequest() {
      return {};
    },
    output: function output(props, markup) {
      var _ref2, _options$theme2;

      var antd = require('antd/dist/antd.less');

      var theme = (_ref2 = options === null || options === void 0 ? void 0 : (_options$theme2 = options.theme) === null || _options$theme2 === void 0 ? void 0 : _options$theme2.call(options)) !== null && _ref2 !== void 0 ? _ref2 : '';

      var dropcss = require('dropcss');

      var cleaned = dropcss({
        html: "<html><body>".concat(markup, "</body></html>"),
        css: "".concat(theme) || "".concat(antd)
      });
      return ["<style id=\"antd-server-side\">".concat(cleaned.css, "</style>")];
    }
  };
};

module.exports = index;
//# sourceMappingURL=index.js.map
