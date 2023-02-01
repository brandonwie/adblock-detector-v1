'use strict';

var react = require('react');

function useAdBlockDetector() {
  var _a = react.useState(false),
    isAdBlockDetected = _a[0],
    setIsAdBlockDetected = _a[1];
  react.useEffect(function () {
    var adBlockDetector = document.createElement('div');
    adBlockDetector.id = 'ads-by-google';
    adBlockDetector.className = 'test-ad';
    document.body.appendChild(adBlockDetector);
    if (getComputedStyle(adBlockDetector).display === 'none') {
      setIsAdBlockDetected(true);
      alert('AdBlock is enabled on this page.');
    }
    return function () {
      document.body.removeChild(adBlockDetector);
    };
  }, []);
  return isAdBlockDetected;
}

module.exports = useAdBlockDetector;
//# sourceMappingURL=index.js.map
