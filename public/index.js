// document.addEventListener('DOMContentLoaded', function() { 
    const navBarLinks = document.querySelectorAll('.nav-item');
    for(let link of navBarLinks){
      if (link.getAttribute('href') === document.URL.slice(41)){
        // link.classList.remove('nav-link')
        link.classList.add('bg-info')
        link.classList.add('pt-2')
        link.classList.add('pb-2')


        console.log(link.classList)
      }
    }
  
    