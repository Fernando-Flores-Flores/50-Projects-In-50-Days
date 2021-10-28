const container = document.querySelector('.container');
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')

openBtn.addEventListener('click',()=> container.classList.add('show'))
closeBtn.addEventListener('click',()=> container.classList.remove('show'))