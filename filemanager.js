const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('file');

console.log(myParam)

function download(filename) {
  var element = document.createElement('a');
  element.setAttribute('href', "https://eaterofananas.000webhostapp.com/files/" + myParam);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

if (myParam != null) {

    download(myParam, "ronc")

}