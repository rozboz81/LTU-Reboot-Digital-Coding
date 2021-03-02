var hoverElement = document.getElementById('hoverExample');
// console.log(hoverElement);
function alertBox(){
    alert('You hovered over my image');
}
hoverElement.addEventListener('mouseover',alertBox);