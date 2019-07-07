let APIURL = "";

switch (window.location.hostname) {
    case "localhost":
        APIURL = "http://localhost:3000";
        break;
    case "tdm-vgbacklogmanagerclient.herokuapp.com":
        APIURL = "https://tdm-vgbacklogmanager.herokuapp.com";

} 

export default APIURL;