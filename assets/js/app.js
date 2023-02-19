'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<a class="navbar-brand" href="beranda"><img src='assets/images/logo.png' class="card-img-top content-image"></a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
   <li class="nav-item"><a class="nav-link" href="pendidikan.html">Pendidikan & Pelatihan</a></li>
   <li class="nav-item"><a class="nav-link" href="pengalaman.html">Pengalaman</a></li>
   <li class="nav-item"><a class="nav-link" href="sertifikasi.html">Sertifikasi</a></li>
   <li class="nav-item"><a class="nav-link" href="proyek.html">Proyek</a></li>
   <li class="nav-item"><a class="nav-link" href="publikasi.html">Publikasi</a></li>
   <li class="nav-item"><a class="nav-link" href="assets/CV.pdf" target="_blank">Unduh CV</a></li>
  </ul>
</div>
</nav>`);

/* Kita hide dulu ya
let footer = $(`
<footer class="footer">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
        <br>
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1267.195959177628!2d106.89722711679372!3d-6.339912383691934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1969b529e410e1d!2sMultimediary%20Gaswad!5e0!3m2!1sid!2sid!4v1613394018846!5m2!1sid!2sid" width="100%" height="380" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>

        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <div class="form-style-6">
            <h6 class="display">HUBUNGI SAYA</h6>
            <form action="beranda/kirim" method="Post">
			<p></p>
              <input type="text" name="name" placeholder="Nama Lengkap" required />
              <input type="email" name="email" placeholder="Alamat Email" required />
              <input type="text" name="phone" placeholder="No Handphone" />
              <input type="text" name="subject" placeholder="Judul" />
              <textarea name="message" placeholder="Isi Pesan" required ></textarea>
              <input type="submit" value="Kirim" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
`);
*/


// Window Loads
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
  
//toggler hamburger functions
    const menuBtn = document.querySelector('.navbar-toggler');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
      }
      else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
  });

});

// function for toggling hamburger is-active class
$(function(){
  
  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
  });

});


