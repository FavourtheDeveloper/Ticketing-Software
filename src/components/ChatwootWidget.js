import { useEffect } from "react";

const ChatwootWidget = () => {
  useEffect(() => {   
    const BASE_URL = "https://dev.afexjenkins.click"; 
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;

    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: "EheaCk2wAS9iC9SC7MGb7sg5",
          baseUrl: BASE_URL,
          user: {
            identifier: "iglory13@gmail.com",
            name: "Glory Isaiah",
            email: "iglory13@gmail.com",
            avatar_url: "",
            identifier_hash: import.meta.env.REACT_APP_HASH, // Ensure it's prefixed correctly
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
