import React, { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk.to script
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/675746c749e2fd8dfef58495/1iemeov2v";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      var s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []); // Empty dependency array to ensure it runs only once on mount

  return null; // No visible UI for this component
};

export default TawkToChat;
