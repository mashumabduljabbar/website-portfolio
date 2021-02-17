/* Project Cards */

const projectcards = document.querySelector(".projectcards");


// Array of object for projects
const projects = [
  {
    title: "Batu-Gunting-Kertas",
    cardImage: "assets/images/project-page/batuguntingkertas.jpg",
    description: "Prediksi Batu-Gunting-Kertas dengan Tensorflow",
    tags: ["Python", "Machine Learning", "Tensorflow"],
    Previewlink: "https://github.com/multimediary/python-Dicoding/blob/master/prediksi-gambar-rockscissorspaper.ipynb",
    Githublink: "https://github.com/multimediary/python-Dicoding",
  },{
    title: "Filter Instagram Make Up",
    cardImage: "assets/images/project-page/MakeUp.jpg",
    description: "Filter Instagram : Makeup dan Lensa Mata Hijau",
    tags: ["Filter", "Instagram", "SparkAR"],
    Previewlink: "https://www.instagram.com/ar/449383966443594/",
    Githublink: "https://github.com/multimediary/filter-ig-makeup",
  },{
    title: "Parameter Wisata Halal",
    cardImage: "assets/images/project-page/parameterwisata.png",
    description: "Platform assesmen obyek wisata berbasis syariah",
    tags: ["Android", "Webview", "Playstore"],
    Previewlink: "https://play.google.com/store/apps/details?id=com.parameterwisatahalal.parameterwisatahalal",
    Githublink: "https://github.com/multimediary/myportofolio/tree/master/Android/ParameterWisataHalal",
  },{
    title: "LINE Messaging Chatbot",
    cardImage: "assets/images/project-page/line.jpg",
    description: "Chatbot dengan LINE Messaging API",
    tags: ["Line", "PHP", "Chatbot"],
    Previewlink: "https://github.com/multimediary/line-chatbot",
    Githublink: "https://github.com/multimediary/line-chatbot",
  },{
    title: "OFON TELEPHONE SERVICE",
    cardImage: "assets/images/project-page/ofon.jpg",
    description: "Company Profile OFON",
    tags: ["PHP", "MySQL", "Website"],
    Previewlink: "https://web.archive.org/web/20170429032747/https://ofon.co.id/",
    Githublink: "https://github.com/multimediary/myportofolio/tree/master/Web/2017-OFONv1",
  },{
    title: "Sistem Informasi OFON Teleponi",
    cardImage: "assets/images/project-page/simfoni.jpg",
    description: "Portal Management Pelanggan",
    tags: ["Sistem Informasi", "Portal", "Website"],
    Previewlink: "https://simfoni.ofon.co.id/",
    Githublink: "#",
  },{
    title: "AWM TOUR & TRAVEL",
    cardImage: "assets/images/project-page/awmtour.jpg",
    description: "Company Profile AWM TOUR & TRAVEL",
    tags: ["Sistem Informasi", "Database", "Website"],
    Previewlink: "https://web.archive.org/web/20200819083726/https://awmtour.co.id/",
    Githublink: "https://github.com/multimediary/myportofolio/tree/master/Web/2020-AWMTour",
  },{
    title: "Kata Sandi",
    cardImage: "assets/images/project-page/katasandi.jpg",
    description: "Blog Pribadi",
    tags: ["Blog", "Website"],
    Previewlink: "https://web.archive.org/web/20200819030113/https://katasandi.biz.id/",
    Githublink: "https://github.com/multimediary/myportofolio/tree/master/Web/2020-AWMTour",
  },{
    title: "CORONA VIRUS DISEASE 2019",
    cardImage: "assets/images/project-page/corona.jpg",
    description: "Proyek Team membuat Web Corona",
    tags: ["Website", "HTML5", "CSS3"],
    Previewlink: "https://multimediary.github.io/kelas-d-01/",
    Githublink: "https://github.com/multimediary/kelas-d-01/",
  },{
    title: "BOX-OFFICE MOVIE",
    cardImage: "assets/images/project-page/boxmovie.jpg",
    description: "Web Javascript dengan data diambil dengan API",
    tags: ["HTML5", "CSS3", "JS", "API"],
    Previewlink: "https://github.com/multimediary/frontend-dicoding/",
    Githublink: "https://github.com/multimediary/frontend-dicoding/",
  },{
    title: "Python Django Infest Academy",
    cardImage: "assets/images/project-page/django.jpg",
    description: "Aplikasi CRUD dengan Python Django",
    tags: ["HTML5", "CSS3", "Python", "Django"],
    Previewlink: "https://github.com/multimediary/django-movies-crud",
    Githublink: "https://github.com/multimediary/django-movies-crud",
  },{
    title: "MORE",
    cardImage: "assets/images/project-page/GitHub-logo.png",
    description: "<a style='color: yellow;' href='https://github.com/multimediary/myportofolio/' target='_blank'>https://github.com/multimediary/myportofolio/</a>",
    tags: ["Git"],
    Previewlink: "https://github.com/multimediary/myportofolio/",
    Githublink: "https://github.com/multimediary/myportofolio/",
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
