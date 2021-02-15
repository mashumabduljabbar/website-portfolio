//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "System Developer",
    cardImage: "assets/images/experience-page/logoofon.png",
    place: "PT. Persada Nusantara Telekomunikasi (OFON)",
    time: "(1 Oktober 2020 – Sekarang)",
    desp: "<li>Pengembangan sistem informasi dan manajemen database perusahaan.</li><li>Menganalisis kebutuhan pengguna, merancang dan mengembangkan solusi bisnis.</li><li>Advisor untuk maintenance dan troubleshooting jaringan telekomunikasi di beberapa kota.</li>",
  },
  {
    title: "IT Leader",
    cardImage: "assets/images/experience-page/logoofon.png",
    place: "PT. Persada Nusantara Telekomunikasi (OFON)",
    time: "(21 Desember 2019 – 30 September 2020)",
    desp: "<li>Menangani urusan teknis dan non-teknis untuk Operator berlisensi.</li><li>Tugas administratif dan interaksi dengan stakeholder.</li><li>Memastikan infrastruktur layanan dibangun di semua area jangkauan dan gangguan teratasi.</li>",
  },
  {
    title: "Network Development Specialist",
    cardImage: "assets/images/experience-page/logoofon.png",
    place: "PT. Persada Nusantara Telekomunikasi (OFON)",
    time: "(21 Desember 2018 – 20 Desember 2019)",
    desp:"<li>Pengelolaan proyek dan pengembangan wilayah cakupan layanan dan pembangunan infrastruktur jaringan telekomunikasi di beberapa kota besar di Indonesia.</li>",
  },
  {
    title: "OLO Engineer Senior",
    cardImage: "assets/images/experience-page/logoofon.png",
    place: "PT. Persada Nusantara Telekomunikasi (OFON)",
    time: "(21 Oktober 2017 – 20 Desember 2018)",
    desp:"<li>Menangani komunikasi dengan mitra interkoneksi dan hubungan dengan PIC teknis dan non-teknis dengan operator berlisensi lainnya.</li><li>Menghadiri pertemuan dengan regulator (KOMINFO).</li><li> Mengelola pengoperasian sistem penagihan telepon.</li>",
  },
  {
    title: "Officer MIS",
    cardImage: "assets/images/experience-page/logoofon.png",
    place: "PT. Persada Nusantara Telekomunikasi (OFON)",
    time: "(01 Juni 2016 – 20 Oktober 2017)",
    desp:"<li>Pengelolaan sistem informasi perusahaan</li><li>Pengelolaan database</li><li>Pengadaan aplikasi dan sistem pendukung karyawan</li><li>IT Support</li><li>Inventaris peralatan jaringan</li><li>Pengelolaan internet untuk kantor pusat dan kantor cabang.</li>",
  },
  {
    title: "Officer Technic",
    cardImage: "assets/images/experience-page/logobbtnew.png",
    place: "PT. Batam Bintan Telekomunikasi (BBT)",
    time: "(01 September 2015 s/d 31 Agustus 2016)",
    desp:"<li>Pengembangan Web Portal dan Database</li><li>Konfigurasi SIP Server, Klien VoIP dan IMS (IP Multimedia Subsystem)</li><li>Mengoperasikan softswitch dan IP PBX</li><li>Switching dan Routing untuk Interkoneksi Telco Provider</li><li>Perawatan dan pemecahan masalah perangkat IT.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
