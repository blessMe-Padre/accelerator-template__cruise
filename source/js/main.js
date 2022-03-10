window.addEventListener('DOMContentLoaded', () => {

  const navToggle = document.querySelector('.nav-toggle');
  const pageNav = document.querySelector('.nav');

  pageNav.classList.remove('nav--opened');
  pageNav.classList.add('nav--closed');

  navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('nav-toggle--closed')) {
      navToggle.classList.remove('nav-toggle--closed');
      navToggle.classList.add('nav-toggle--opened');
      pageNav.classList.remove('nav--closed');
      pageNav.classList.add('nav--opened');
    } else {
      navToggle.classList.remove('nav-toggle--opened');
      navToggle.classList.add('nav-toggle--closed');
      pageNav.classList.remove('nav--opened');
      pageNav.classList.add('nav--closed');
    }
  });


  const menuLinks = document.querySelectorAll('.anchor-link[data-goto]');

  function onMenuLinkClick(evt) {
    const menuLink = evt.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
      if (pageNav.classList.contains('nav--opened')) {
        pageNav.classList.remove('nav--opened');
        pageNav.classList.add('nav--closed');
        navToggle.classList.remove('nav-toggle--opened');
        navToggle.classList.add('nav-toggle--closed');
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      evt.preventDefault();
    }
  }

  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });

  }


  const formInput = document.querySelectorAll('.form__input');

  formInput.forEach((el) => {
    el.addEventListener('change', changeHandler);
  });

  // записывает изменение значения инпута в localStorage
  function changeHandler(e) {
    localStorage.setItem(e.target.name, e.target.value);
  }

  // записывает значения инпута из localStorage в инпут формы
  function getCheckStorage() {
    for (let i = 0; i < formInput.length; i++) {
      formInput[i].value = localStorage.getItem(formInput[i].name);
    }
  }
  getCheckStorage();
});
