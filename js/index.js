function showNavList(){
    document.querySelector('#nav-list').classList.toggle('hidden')
}
document.querySelector('#nav-bar-icon').addEventListener('click', showNavList)

//some internet magic

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

//some internet magic
