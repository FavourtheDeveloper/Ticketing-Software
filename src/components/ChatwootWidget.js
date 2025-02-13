import { useEffect } from "react";

const ChatwootWidget = () => {
    useEffect(() => {   
        const BASE_URL="https://dev.afexjenkins.click"; 
        const script=document.createElement("script")
        script.src= `${BASE_URL}/packs/js/sdk.js`;
        script.defer = true;
        script.async = true;

        script.onload= () => {
          window.chatwootSDK.run({
            websiteToken: 'EheaCk2wAS9iC9SC7MGb7sg5',
            baseUrl: BASE_URL,
            user: {
                identifier: 'iglory13@gmail.com', // Your user's identifier
                name: 'Glory Isaiah',              // User's name
                email: 'iglory13@gmail.com',     // User's email
                avatar_url: '',                // Optional
                identifier_hash: 'ZQF5rHEXfGTDMrhUkFq9Kh6e' // Your validation token
              }
          })
        }
        
        document.body.appendChild(script);
        
      return () => {
        document.body.removeChild(script)
      }
    }, [])
    return null;
}

export default ChatwootWidget;