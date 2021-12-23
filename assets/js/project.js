/* Project Cards */

const projectcards = document.querySelector(".projectcards");


// Array of object for projects
const projects = [
  {
    title: "Prediksi Kepuasan Pelanggan Maskapai Penerbangan",
    cardImage: "assets/images/project-page/prediksikepuasanpelanggan.jpg",
    description: "Prediksi menggunakan Machine Learning.",
    tags: ["Python", "Supervised", "Machine Learning"],
    Previewlink: "https://github.com/mashumabduljabbar/portfolio-data-science/blob/main/Memprediksi_Kepuasan_Para_Pelanggan_Sebuah_Maskapai_Penerbangan_Menggunakan_Supervised_Machine_Learning.ipynb",
    Githublink: "https://github.com/mashumabduljabbar/portfolio-data-science/blob/main/Memprediksi_Kepuasan_Para_Pelanggan_Sebuah_Maskapai_Penerbangan_Menggunakan_Supervised_Machine_Learning.ipynb",
  },{
    title: "Batu-Gunting-Kertas",
    cardImage: "assets/images/project-page/batuguntingkertas.jpg",
    description: "Prediksi Batu-Gunting-Kertas dengan Tensorflow.",
    tags: ["Python", "Machine Learning", "Tensorflow"],
    Previewlink: "https://github.com/mashumabduljabbar/python-Dicoding/blob/master/prediksi-gambar-rockscissorspaper.ipynb",
    Githublink: "https://github.com/mashumabduljabbar/python-Dicoding/blob/master/prediksi-gambar-rockscissorspaper.ipynb",
  },{
    title: "LINE Messaging Chatbot",
    cardImage: "assets/images/project-page/line.jpg",
    description: "Chatbot dengan LINE Messaging API",
    tags: ["Line", "PHP", "Chatbot"],
    Previewlink: "https://line.me/R/ti/p/%40892ufvng",
    Githublink: "https://github.com/mashumabduljabbar/line-chatbot",
  },{
    title: "Parameter Wisata Halal",
    cardImage: "assets/images/project-page/parameterwisata.jpg",
    description: "Platform assesmen obyek wisata berbasis syariah.",
    tags: ["Android", "Webview", "Playstore"],
    Previewlink: "https://play.google.com/store/apps/details?id=com.parameterwisatahalal.parameterwisatahalal",
    Githublink: "https://github.com/mashumabduljabbar/myportofolio/tree/master/Android/ParameterWisataHalal",
  },{
    title: "OFON TELEPHONE SERVICE",
    cardImage: "assets/images/project-page/ofons.jpg",
    description: "Company Profile OFON",
    tags: ["PHP", "MySQL", "Website"],
    Previewlink: "https://web.archive.org/web/20170429032747/https://ofon.co.id/",
    Githublink: "https://github.com/mashumabduljabbar/myportofolio/tree/master/Web/2017-OFONv1",
  },{
    title: "Sistem Informasi OFON Teleponi",
    cardImage: "assets/images/project-page/simfoni.jpg",
    description: "Portal Management Pelanggan",
    tags: ["Sistem Informasi", "Portal", "Website"],
    Previewlink: "https://simfoni.ofon.co.id/",
    Githublink: "#",
  },{
    title: "AWM TOUR & TRAVEL",
    cardImage: "assets/images/project-page/awmtourandtravel.jpg",
    description: "Company Profile AWM TOUR & TRAVEL",
    tags: ["Sistem Informasi", "Database", "Website"],
    Previewlink: "https://web.archive.org/web/20200819083726/https://awmtour.co.id/",
    Githublink: "https://github.com/mashumabduljabbar/myportofolio/tree/master/Web/2020-AWMTour",
  },{
    title: "BOX-OFFICE MOVIE",
    cardImage: "assets/images/project-page/boxmovies.jpg",
    description: "Web Javascript dengan data diambil dengan API",
    tags: ["HTML5", "CSS3", "JS", "API"],
    Previewlink: "https://github.com/mashumabduljabbar/frontend-dicoding/",
    Githublink: "https://github.com/mashumabduljabbar/frontend-dicoding/",
  },{
    title: "Filter Make Up di Instagram",
    cardImage: "assets/images/project-page/MakeUp.jpg",
    description: "Efek lipstick, blush on, eyelash dan softlens hijau.",
    tags: ["Filter", "Instagram", "SparkAR"],
    Previewlink: "https://www.instagram.com/ar/449383966443594/?ch=ODEwYmUxMWQyNTdlNjY0NzI0MGMxYzgxZjhjOWUyNDM%3D",
    Githublink: "https://github.com/mashumabduljabbar/Portfolio/tree/main/Augmented%20Reality%20-%20Filter%20Make%20Up%20di%20Instagram",
  },{
    title: "Filter Topeng Ant Mant di Instagram",
    cardImage: "assets/images/project-page/Antman.jpg",
    description: "Efek Topeng Ant Man dan Perubahan Suara.",
    tags: ["Filter", "Instagram", "SparkAR"],
    Previewlink: "https://www.instagram.com/ar/449383966443594/?ch=ODEwYmUxMWQyNTdlNjY0NzI0MGMxYzgxZjhjOWUyNDM%3D",
    Githublink: "https://github.com/mashumabduljabbar/Portfolio/tree/main/Augmented%20Reality%20-%20Filter%20Topeng%20Ant%20Mant%20di%20Instagram",
  },{
    title: "MORE",
    cardImage: "assets/images/project-page/GitHub-logo.png",
    description: "<a style='color: yellow;' href='https://github.com/mashumabduljabbar/myportofolio/' target='_blank'>https://github.com/mashumabduljabbar/myportofolio/</a>",
    tags: ["Git"],
    Previewlink: "https://github.com/mashumabduljabbar/myportofolio/",
    Githublink: "https://github.com/mashumabduljabbar/myportofolio/",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, tags, Previewlink, Githublink }) => {
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="data">
          <div class="title-div">
            <h2 class="title" style="text-align:center;"><a href="${Githublink}">${title}</a></h2>
			</div>
          <div class="content">
			<p>${description}
			<ul class="menu-content"><br>
              <li><a target="_blank"  href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a target="_blank" href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
			</p>
            <div class="searchdiv" style="margin-top:5px;margin-bottom:15px;">
            ${tags.map(tag => (
                `<button class="tagbutton">
                 <span>${tag}</span>
                </button>`
              )
      ).join("")
      }
              </div>
          </div>
        </div>
      </div>
    </div>`)
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  button = document.getElementsByClassName("tagbutton");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
