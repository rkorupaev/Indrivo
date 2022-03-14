const tabs = document.querySelectorAll('.tabs-list__item');
const content = document.querySelectorAll('.content');

tabs.forEach((item, index) => {
   item.addEventListener('click', (evt)=> {
       evt.preventDefault();
       document.querySelector('.tabs-list__item--active').classList.remove('tabs-list__item--active');
       document.querySelector('.content--active').classList.remove('content--active');
       item.classList.add('tabs-list__item--active');
       content[index].classList.add('content--active');
   });
});
