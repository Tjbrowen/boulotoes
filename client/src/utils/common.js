 export const sliderSettings={
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints:{
   400: {
    slidesPerView : 1
   },
   600:{
    slidesPerView: 2
   },
   750: {
    slidesPerView: 3
   },
   1100:{
    slidesPerView: 4
   },
    },

 };

 export const getMenuStyles = (menuOpened) => {
   if (document.documentElement.clientWidth <= 800) {
     return { right: !menuOpened && "-100%" };
   }
 };