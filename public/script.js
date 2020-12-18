const button = document.getElementsByClassName('button1');
const modal = document.getElementsByClassName('modal');
const description = document.getElementsByClassName('description');
const button2 = document.getElementsByClassName('button2');

for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener('click', (event) => {
    modal[i].classList.toggle('show');
    document.getElementById('container').append(event.target.parentNode.querySelector('.modal').cloneNode(true));
  });
}

for (let i = 0; i < button2.length; i += 1) {
  button2[i].addEventListener('click', (event) => {
    event.target.parentNode.remove();
    console.log(event.target.parentNode);
  });
}
