const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('file');
const link = urlParams.get('link')

var links = JSON.parse("assets/links.json")

function gotofile(filename) {
  var element = document.createElement('a');
  element.setAttribute('href', "files/" + myParam);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function gotolink(linkname) {
  if (links[link]) {
    var element = document.createElement('a');
    element.setAttribute('href', links[link]);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}

if (myParam != null) {

    gotofile(myParam)

} else if (link != null) {
    goto(link)
}
