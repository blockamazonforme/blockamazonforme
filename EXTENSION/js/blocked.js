const urlParams = new URLSearchParams(window.location.search);
const blockSite = urlParams.get('q');
const decodeSite = decodeURIComponent(blockSite);

var outputLink = "The URL <a href='"+blockSite+"'>"+blockSite+"</a> is owned by Amazon.";

document.getElementById('output').innerHTML = outputLink;