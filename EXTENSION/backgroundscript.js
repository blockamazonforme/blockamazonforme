function preventFunc( details ) {
    var linkedSite = encodeURIComponent(details.url);
    return {redirectUrl: chrome.runtime.getURL("blocked.html?q="+linkedSite)};
  
 
}

var urlList = [
    "*://a9.com/*",
"*://www.a9.com/*",
"*://www.abebooks.co.uk/*",
"*://www.abebooks.com/*",
"*://www.alexa.com/*",
"*://amazon.com/*",
"*://amzn.com/*",
"*://www.amazon.com/*",
"*://aws.amazon.com/*",
"*://www.amazon.ca/*",
"*://www.amazon.cn/*",
"*://www.amazon.fr/*",
"*://amazongames.com/*",
"*://www.amazongames.com/*",
"*://www.amazon.de/*",
"*://www.amazon.co.jp/*",
"*://kdp.amazon.com/*",
"*://www.amazonrobotics.com/*",
"*://studios.amazon.com/*",
"*://amazon.co.uk/*",
"*://www.amazon.co.uk/*",
"*://adbl.com/*",
"*://www.audible.com/*",
"*://www.elemental.com/*",
"*://blinkforhome.com/*",
"*://www.bookdepository.com/*",
"*://www.boxofficemojo.com/*",
"*://www.brillianceaudio.com/*",
"*://www.comixology.com/*",
"*://www.createspace.com/*",
"*://www.curse.com/*",
"*://www.dpreview.com/*",
"*://www.fabric.com/*",
"*://www.gamesparks.com/*",
"*://www.goodreads.com/*",
"*://www.imdb.com/*",
"*://www.pillpack.com/*",
"*://ring.com/*",
"*://www.rooftopcomedy.com/*",
"*://www.shopbop.com/*",
"*://deals.souq.com/*",
"*://egypt.souq.com/*",
"*://saudi.souq.com/*",
"*://sell.souq.com/*",
"*://supermarket.souq.com/*",
"*://uae.souq.com/*",
"*://www.deals.souq.com/*",
"*://www.twitch.tv/*",
"*://www.wholefoodsmarket.com/*",
"*://woot.com/*",
"*://www.woot.com/*",
"*://www.zappos.com/*"
];


// CHECK FOR FIRST RUN Inititalize if so
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
		chrome.storage.sync.set({state: true});
		var thisVersion = chrome.runtime.getManifest().version;
        //alert("FIRST "+thisVersion);
    }
});

// RUNS BLOCKER ON LOAD
chrome.webRequest.onBeforeRequest.addListener( preventFunc, { urls: urlList }, ["blocking"] );
//chrome.webRequest.onBeforeRequest.removeListener( preventFunc );



// LISTENER FOR POPUP ON OFF BUTTON
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{
    if( request.greeting === "STOP" )
    {
       	chrome.webRequest.onBeforeRequest.removeListener( preventFunc );	  
			  
    }
	else if ( request.greeting === "GO" )
	{
		chrome.webRequest.onBeforeRequest.addListener( preventFunc, { urls: urlList }, ["blocking"] );
	}
});