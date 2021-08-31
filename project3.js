const mydiv = document.querySelector('#con');
const btn = document.querySelector('button');
alert("Once you click the close button, you can not resore the page!")
btn.addEventListener('click', function () {
    mydiv.setAttribute('class', 'closediv');
})