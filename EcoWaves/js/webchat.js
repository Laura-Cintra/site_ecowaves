window.watsonAssistantChatOptions = {
    integrationID: "8c5bf846-213b-4b9f-a94b-c1840b120376", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "f2f8cb37-7a2d-4430-a069-2af9fbacbd07", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });