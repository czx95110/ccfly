function getXMLHTTPRequest() {
  var xhr = null;
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  }else if(typeof ActiveXObject != "undefined"){
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return xhr;
}

function sendRequest(url, params, method) {
  if(!method){
    method='post';
  }
  var xhr = getXMLHTTPRequest();
  if(xhr){
    xhr.open(method,url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(params);
  }
}