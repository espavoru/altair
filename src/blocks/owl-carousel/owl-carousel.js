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
         stagePadding: 30,
         center: true
       },
       480 : {
         items: 1,
         margin: 20,
         stagePadding: 100
       },
       768 : {
         items: 2,
         margin: 20,
         stagePadding: 100
       },
       992 : {
         items: 2,
         margin: 20,
         stagePadding: 150
       },
       1200 : {
         items: 3,
         stagePadding: 100
       },
       1800 : {
         items: 3,
         stagePadding: 350
       }
     }
   });

 });
