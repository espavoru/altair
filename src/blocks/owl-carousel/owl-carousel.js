$(document).ready(function(){

   $("#owl-carousel-blog-posts").owlCarousel({
     items: 3,
     margin: 50,
     nav: true,
     loop: true,
//     center: true,
     stagePadding: 270,
     responsive : {
       0 : {
         items: 1,
         nav: true,
         loop: true,
         center: true
       },
       480 : {
         items: 3
       },
       768 : {
         items: 3
       },
       992 : {
         items: 3
       },
       1200 : {
         items: 2
       },
       1800 : {
         items: 3
       }
     }
   });

 });
