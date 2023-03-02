const header = document.querySelector(".header");
const btnHeader = document.querySelector(".btn-header");

window.onscroll = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

btnHeader.onclick = () => {
  btnHeader.classList.toggle("isChecked");
  document.querySelector(".content-header").classList.toggle("translateX100");
};
// AOS
AOS.init({
  duration: 800,
});
