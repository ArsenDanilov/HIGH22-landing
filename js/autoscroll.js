// window.onload = function () {
//     const container = document.querySelector('.autoscroll-block__container');
//     const content = document.querySelector('.autoscroll-block__content');
//     const containerReverse = document.querySelector('.autoscroll-block__container_reverse');
//     const contentReverse = document.querySelector('.autoscroll-block__content_reverse');

//     let scrollAmount = 0;
//     const speed = 0.3;

//     function autoScroll() {
//         scrollAmount += speed;
//         if (scrollAmount > content.offsetWidth - container.offsetWidth) {
//             scrollAmount = 0;
//         }
//         content.style.transform = 'translateX(' + -scrollAmount + 'px)';
//         requestAnimationFrame(autoScroll);
//     }

//     function autoScrollReverse() {
//         scrollAmount += speed;
//         if (scrollAmount > contentReverse.offsetWidth - containerReverse.offsetWidth) {
//             scrollAmount = 0;
//         }
//         contentReverse.style.transform = 'translateX(' + scrollAmount + 'px)';
//         requestAnimationFrame(autoScrollReverse);
//     }

//     requestAnimationFrame(autoScroll);
//     requestAnimationFrame(autoScrollReverse);
// };