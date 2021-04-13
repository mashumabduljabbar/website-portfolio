<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<link rel="stylesheet" href="<?php echo base_url();?>assets/css/education.css" />
  <!--Header Section-->
<div class="container pt-5" style="width: 100%; min-height: 80%;">
  <section style="height: 90vh;">
    <div class="container-fluid px-3 pt-5">
      <div class="row text-dark mx-auto">
        <div class="col-md-6"> <img class="img-fluid d-block  animate__animated animate__zoomIn animate__delay-1s"
            src="./assets/images/education-page/wisuda.png" draggable="true" style="margin-top: 45px;"> </div>
        <div class="px-md-5 p-3 col-md-6 d-flex flex-column align-items-center justify-content-center animate__animated animate__zoomIn animate__delay-1s">
          <h2 class="main-heading mb-0">Pendidikan</h2>
          <p class=" pre-heading font-weight-bolder text-center animate__animated animate__fadeInUp animate__delay-2s">
           Belajarlah karena tidak ada seorangpun yang dilahirkan dalam keadaan berilmu. –  Imam Syafi'i
          </p>
        </div>
      </div>
    </div>
  </section>
</div>


  <!-- Education Section  -->
<section class="s2">
  <div class="container-sm  edSection">
    <div class="conatiner text-center mb-5">
      <h1 class="head" data-aos="fade-up" data-aos-delay="300">Riwayat Pendidikan</h1>
    </div>
      <!-- CARDS -->
      <div class="card mb-5" data-aos="fade-left" data-aos-delay="500">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12">
            <img src="assets/images/education-page/logo-universitas-bina-nusantara-ubinus.jpg" height="8%">
          </div>
          <div class="col-xl-6 col-md-6 col-sm-12 p-5">
            <h4>Pasca Sarjana</h4>
            <div class="qual">
            <h6><em>Universitas Bina Nusantara</em></h6>
            <h6><em>Magister Teknik Informatika (M.T.I.)</em></h6>
            <h6><em>Teknik Informatika</em></h6>
            <h6><em>2019-2020</em></h6>
			<h6><em>GPA : 3.83 / 4.0</em></h6></div>
          </div>
        </div>
      </div>
      <div class="card mb-5" data-aos="fade-right" data-aos-delay="500">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12 p-5">
            <img src="assets/images/education-page/440px-Logo_umht2020.png" height="100%">
          </div>
          <div class="col-xl-6 col-md-6 col-sm-12 p-5">
            <h4>Sarjana</h4>
            <div class="qual">
              <h6><em>Universitas Mohammad Husni Thamrin</em></h6>
              <h6><em>Sarjana Komputer (S.Kom.)</em></h6>
              <h6><em>Teknik Informatika</em></h6>
              <h6><em>2016-2018</em></h6>
			  <h6><em>GPA : 3.63 / 4.0</em></h6></div>
          </div>
        </div>
      </div>
      <div class="card mb-5" data-aos="fade-right" data-aos-delay="500">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12 p-5">
            <img src="assets/images/education-page/polkam.png" height="100%">
          </div>
          <div class="col-xl-6 col-md-6 col-sm-12 p-5">
            <h4>Diploma</h4>
            <div class="qual">
              <h6><em>Politeknik Kampar</em></h6>
              <h6><em>Ahli Madya (A.Md.)</em></h6>
              <h6><em>Teknik Informatika</em></h6>
              <h6><em>2016-2018</em></h6>
			  <h6><em>GPA : 3.63 / 4.0</em></h6></div>
          </div>
        </div>
      </div>
      <div class="card mb-5" data-aos="fade-left" data-aos-delay="500">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12 p-5">
            <img src="assets/images/education-page/education.png">
          </div>
          <div class="col-xl-6 col-md-6 col-sm-12 p-5">
            <h4>Sekolah Menengah</h4>
            <div class="qual">
              <h6><em>SMK Negeri 5 Pekanbaru</em></h6>
              <h6><em>Multimedia</em></h6>
              <h6><em>2009-2012</em></h6></div>
        </div>
      </div>
    </div>
</div>
</section>           

  <!--MOOCs Cards-->
  <div id="mooc" class="container-fluid">
    <h4 class="text-center pb-2 pt-5" data-aos="fade-up" data-aos-delay="300">Pelatihan</h4>
    <div class="row moocs">
      <!-- Dynamic MOOCs Cards -->
    </div>
  </div>

  <!-- Dynamic footer section -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script type="text/javascript" src="<?php echo base_url();?>assets/js/education.js?rndstr=<?php echo strtotime("now");?>"></script>