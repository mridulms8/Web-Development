//const Images = document.getElementsByTagName('img');
/*for (let image of Images) {
    image.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
}*/

/*const squareImgs = document.getElementsByClassName('square');
for (let img of squareImgs) {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
}*/

/*const paragraphAnchorTags = document.querySelectorAll('p a');

for (let anchors of paragraphAnchorTags) {
    console.log(anchors.href);
}*/
const links = document.querySelectorAll('a');

for (let link of links) {
    link.style.color = 'rgb(31,173,234)';
}
