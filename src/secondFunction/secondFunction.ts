import { useEffect, useState } from 'react';

export function secondFunction() {
  const [isAdBlockDetected, setIsAdBlockDetected] = useState<boolean>(false);

  useEffect(() => {
    const adBlockDetector = document.createElement('div');
    adBlockDetector.id = 'ads-by-google';
    adBlockDetector.className = 'test-ad';
    document.body.appendChild(adBlockDetector);

    if (getComputedStyle(adBlockDetector).display === 'none') {
      setIsAdBlockDetected(true);
      alert('AdBlock is enabled on this page.');
    }
    return () => {
      document.body.removeChild(adBlockDetector);
    };
  }, []);

  return isAdBlockDetected;
}
