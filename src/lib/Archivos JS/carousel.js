/* eslint-disable no-restricted-syntax */
let counter = 0;

export const carousel = (iconRigth, iconLeft, arrayClassSlider) => {
  iconRigth.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-plusplus
    counter++;

    if (window.screen.width < 600) {
      for (const i of arrayClassSlider) {
        if (counter === 0) {
          i.style.left = '0px';
        }
        if (counter === 1) {
          i.style.left = '-270px';
        }
        if (counter === 2) {
          i.style.left = '-540px';
        }
        if (counter > 2) {
          counter = 2;
        }
      }
    } else {
      for (const i of arrayClassSlider) {
        if (counter === 0) {
          i.style.left = '0px';
        }
        if (counter === 1) {
          i.style.left = '-752px';
        }
        if (counter === 2) {
          i.style.left = '-1504px';
        }
        if (counter > 2) {
          counter = 2;
        }
      }
    }
  });

  iconLeft.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-plusplus
    counter--;

    if (window.screen.width < 600) {
      for (const i of arrayClassSlider) {
        if (counter === 0) {
          i.style.left = '0px';
        }
        if (counter === 1) {
          i.style.left = '-270px';
        }
        if (counter === 2) {
          i.style.left = '-540px';
        }
        if (counter > 2) {
          counter = 2;
        }
      }
    } else {
      for (const i of arrayClassSlider) {
        if (counter === 0) {
          i.style.left = '0px';
        }
        if (counter === 1) {
          i.style.left = '-752px';
        }
        if (counter === 2) {
          i.style.left = '-1504px';
        }
        if (counter < 0) {
          counter = 0;
        }
      }
    }
  });
};
