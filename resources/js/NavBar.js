const app = Vue.createApp({
 template:` <nav class="navbar navbar-light fixed-top">
 <div class="container-fluid">
   <a class="navbar-brand" href="#section1" style="color: white; font-size: 3em;">JJ</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
     <div class="offcanvas-header">
       <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
       <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
     </div>
     <div class="offcanvas-body">
       <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#section1">Home</a>
         </li>
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#section2">About</a>
         </li>
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#section3">Skills</a>
         </li>
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#section4">Projects</a>
         </li>
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#section5">Testimonial</a>
         </li>
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#section6">Contact</a>
         </li>
       </ul>
     </div>
   </div>
 </div>
</nav>`

})
app.mount('#app');