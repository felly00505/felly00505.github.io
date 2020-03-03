
var body = document.getElementsByTagName('body')[0];

function fadeOut() {
    body.classList.add('bodyfadeout');
}

function linkUrl() {
    location.href = 'XA002.html'
}
var bt5 = document.getElementById('kakuwa');
var cover = document.getElementById('cover');
bt5.addEventListener('click', function() {
    cover.classList.add('anime5');
    setTimeout(fadeOut, 1500);
    setTimeout(linkUrl, 2500);
});
// JavaScript Document