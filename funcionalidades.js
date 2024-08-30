window.addEventListener('load', ()=>{
    let button = document.querySelector('.chat-button')

    button.addEventListener('click', (e)=> {
e.preventDefault();

    })

})

document.addEventListener("scroll", function() {
    const chatButton = document.querySelector(".chat-button");
    const footer = document.querySelector(".footer-bottom");
    
    const footerRect = footer.getBoundingClientRect();
    
    if (footerRect.top < window.innerHeight && footerRect.bottom >= 0) {
      chatButton.classList.add("hidden");
    } else {
      chatButton.classList.remove("hidden");
    }
  });
  