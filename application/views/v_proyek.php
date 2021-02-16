<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/project.css" />
	<div class="container pt-5" style="width: 100%; min-height: 50%">
      <section style="height: 70vh">
        <div class="px-3 pt-5">
          <div class="row text-dark">
            <div
              class="col-md-8 d-flex mt-5 flex-column text-center justify-content-center animate__animated animate__zoomIn animate__delay-1s"
            >
              <h2 class="main-heading mb-0">Proyek</h2>
              <p
                class="pre-heading font-weight-bolder"
                class="mb-0 mt-3 text-center animate__animated animate__zoomIn animate__delay-2s"
              >
                Saya orang yang menyukai dunia IT, teknologi dan desain. Selama karir profesional saya, saya telah mengerjakan banyak proyek berbeda dan di berbagai posisi. Beberapa di antaranya adalah: pengembang perangkat lunak, administrator sistem, analis programmer, pemimpin tim, manajer proyek, desainer grafis, editor video, spesialis pemecahan masalah, insinyur jaringan, pembuat konten, dll. Dalam semua itu, saya memiliki kesempatan untuk mendapatkan banyak keterampilan dan pengetahuan dan untuk bekerja dengan orang-orang dari latar belakang yang berbeda.
              </p>
            </div>
            <div class="col-md-4" style="margin-top: 45px">
              <img
                class="img-header img-fluid d-block img-fluid d-block animate__animated animate__zoomIn animate__delay-1s"
                src="./assets/images/project-page/projects.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="project-box">
      <div class="NeuInput-outer">
        <input
          type="text"
          name="search"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Search..."
          autocomplete="off"
        />
        <svg
          id="search"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
          />
        </svg>
      </div>
      <div class="row page-content projectcards">
        <!-- Dynamic project card -->
      </div>
    </div>
    <!-- Dynamic footer section -->

    <!-- script -->
    <script src="<?php echo base_url();?>assets/js/project.js"></script>