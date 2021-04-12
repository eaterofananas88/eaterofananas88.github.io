const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('file');
const link = urlParams.get('link')
const pass = urlParams.get('pass')

const links = {"vbucks": "https://youtu.be/Z0Uh3OJCx3o", "donotrickrollme": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "verify": "https://eaterofananas88.xyz/access"}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function gotofile(filename) {
  var element = document.createElement('a');
  element.setAttribute('href', "files/" + atob(myParam));

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function gotolink(linkname, params) {
  if (links[link]) {
    var element = document.createElement('a');
    element.setAttribute('href', links[link] + params);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}

if (myParam != null) {
    if (getCookie("securitytoken") != "") {
      gotofile(myParam)
    } else {
      gotolink("verify", "?pass=" + pass + "https://eaterofananas88.xyz/?file=" + myParam)
    }

else if (link != null) {
    gotolink(link, "")
}
