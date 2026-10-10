'use client';

import { useEffect } from 'react';

export default function ChatwootWidget() {
  useEffect(() => {
    const websiteToken = process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN;

    if (!websiteToken) return;

    const script = document.createElement('script');
    script.src = 'https://app.chatwoot.com/packs/js/sdk.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.chatwootSettings = {
        position: 'right',
        type: 'standard',
        brandId: websiteToken,
      };

      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken,
          baseUrl: 'https://app.chatwoot.com',
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
