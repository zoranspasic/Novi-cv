$(document).ready(function () {

  hideAll();

  $("a").click(function () {

    event.preventDefault();

    let izbor = $(this).attr("href");

    if (izbor == "#pocetak") {
      $("#glavni-projekti").hide();
      $("#glavni-kontakt").hide();
      $("#glavni-cv").hide();
      $("#glavni").show();

    }

    else if (izbor == "#glavni-cv") {
      $("#glavni").hide();
      $("#glavni-projekti").hide();
      $("#glavni-kontakt").hide();
      $("#glavni-cv").show(1000);
    }

    else if (izbor == "#glavni-projekti") {
      $("#glavni").hide(1000);
      $("#glavni-cv").hide(1000);
      $("#glavni-kontakt").hide(1000);
      $("#glavni-projekti").show(1000);
    }

    else if (izbor == "#glavni-kontakt") {
      $("#glavni").hide(1000);
      $("#glavni-cv").hide(1000);
      $("#glavni-projekti").hide(1000);
      $("#glavni-kontakt").show(1000);
    }

    else if (izbor == "#cvenglish") {

      hideSer();

      $("#nav-eng").show();
      $("#glavni-eng").show();
      $("#glavni-cv-eng").hide();
      $("#glavni-projekti-eng").hide();
      $("#glavni-kontakt-eng").hide();

    }

    else if (izbor == "#glavni-cv-eng") {

      $("#glavni-eng").hide(1000);
      $("#glavni-cv-eng").show(1000);
      $("#glavni-projekti-eng").hide(1000);
      $("#glavni-kontakt-eng").hide(1000);
    }

    else if (izbor == "#glavni-projekti-eng") {

      $("#glavni-eng").hide(1000);
      $("#glavni-cv-eng").hide(1000);
      $("#glavni-projekti-eng").show(1000);
      $("#glavni-kontakt-eng").hide(1000);

    }

    else if (izbor == "#glavni-kontakt-eng") {

      $("#glavni-eng").hide(1000);
      $("#glavni-cv-eng").hide(1000);
      $("#glavni-projekti-eng").hide(1000);
      $("#glavni-kontakt-eng").show(1000);

    }

    else if (izbor == "#pocetak-eng") {

      $("#glavni-eng").show();
      $("#glavni-cv-eng").hide();
      $("#glavni-projekti-eng").hide();
      $("#glavni-kontakt-eng").hide();

    }

    else if (izbor == "./index.html") {

      $("#nav").show();
      $("#glavni").show();

      hideAll();

    }

  });

  function hideAll() {

    $("#glavni-cv").hide();
    $("#glavni-projekti").hide();
    $("#glavni-kontakt").hide();

    $("#nav-eng").hide();
    $("#glavni-eng").hide();
    $("#glavni-cv-eng").hide();
    $("#glavni-projekti-eng").hide();
    $("#glavni-kontakt-eng").hide();

  }

  function hideSer() {

    $("#nav").hide();
    $("#glavni").hide();
    $("#glavni-cv").hide();
    $("#glavni-projekti").hide();
    $("#glavni-kontakt").hide();

  }

});