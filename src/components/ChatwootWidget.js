import { useEffect } from "react";

const ChatwootWidget = () => {
  useEffect(() => {   
    const BASE_URL = import.meta.env.VITE_CHATWOOT_BASE_URL; 
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;

    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: import.meta.env.VITE_CHATWOOT_TOKEN,
          baseUrl: BASE_URL,
          user: {
            identifier: "iglory13@gmail.com",
            name: "Glory Isaiah",
            email: "iglory13@gmail.com",
            avatar_url: "",
            identifier_hash: import.meta.env.VITE_CHATWOOT_HASH, // Ensure it's prefixed correctly
          },
        });
      } else {
        console.error("Chatwoot SDK not loaded.");
      }
    };
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatwootWidget;
