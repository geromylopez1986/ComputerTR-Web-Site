$(document).ready(function () {
  /* VARIABLES Y OBJETOS */
  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel);
  var myCarousel = document.querySelector("#myCarousel");
  let menuFijo = document.querySelector(".sticky__fin");
  let sticky = menuFijo.offsetTop;

  let logoStiky = document.querySelector(".logo a img");

  let backBtnProduct = document.querySelector(".back-event");
  let forwarBtnProduct = document.querySelector(".forwar-event");
  let productItems = document.querySelector(".product-items");

  let goLink = document.querySelector(".go__up a span");

  /* FUNCIONES Y METODOS */
  window.onscroll = () => {
    if (window.scrollY >= sticky) {
      $(".containedor").addClass("sticky");
      $(".go__up").css({
        transform: "rotate(360deg)",
        transition: "0.5s",
      });
      goLink.innerHTML = "keyboard_arrow_up";
      $(".go__up a").attr("href", "#start");
      logoStiky.style.width = "65px";
      $(".logo a img").attr("src", "img/LogoStiky.png");
    } else {
      $(".containedor").removeClass("sticky");
      $(".go__up").css({
        transform: "rotate(-360deg)",
        transition: "0.5s",
      });
      goLink.innerHTML = "keyboard_arrow_down";
      $(".go__up a").attr("href", "#constacto");
      logoStiky.style.width = "180px";
      $(".logo a img").attr("src", "img/Logo.png");
    }
  };
  /* CARRUCEL HEADER */
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    wrap: false,
  });
  /* LINKS MENU NAVEGATION */
  $("#navegatin #list li a").on("mouseenter", function () {
    $(this).addClass("activo");
  });
  $("#navegatin #list li a").on("mouseleave", function () {
    $(this).removeClass("activo");
  });

  backBtnProduct.addEventListener("click", () => {
    productItems.scrollLeft -= 700;
  });
  forwarBtnProduct.addEventListener("click", () => {
    productItems.scrollLeft += 700;
    $(".product-items").css({
      transition: "all 5.5s ease-in-out",
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("pizzaOrder");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  $(".list__navbar ul li").on("click", function () {});
}); /* FIN DE EL DOCUMENT READY */
