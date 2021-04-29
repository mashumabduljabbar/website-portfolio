//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "System Developer",
    cardImage: "assets/images/experience-page/logoofon.png",
    place: "PT. Persada Nusantara Telekomunikasi (OFON)",
    time: "(1 Oktober 2020 – Sekarang)",
    desp: "<li>Menganalisis persyaratan sistem informasi dan menerjemahkan persyaratan pengguna atau manajemen.</li><li>Mengawasi pelaksanaan roadmap pengembangan sistem dan menjembatani komunikasi antara tim dan pemangku kepentingan.</li><li>Berkomunikasi dengan pihak ketiga dalam hal pengumpulan persyaratan dan kebutuhan pengembangan sistem.</li><li>Komunikasikan sistem yang telah dikembangkan kepada tim operasional dan tim penjualan.</li>",
  },
  {
    title: "IT Leader",
    cardImage: "assets/images/experience-page/logoofon.png",
    place: "PT. Persada Nusantara Telekomunikasi (OFON)",
    time: "(21 Desember 2018 - 30 September 2020)",
    desp: "<li>Membuat perencanaan pembangunan infrastruktur jaringan telekomunikasi dan  implementasi atas kebijakan Regulator Telekomunikasi, serta monitoring  pelaksanaannya.</li><li>Menyediakan layanan telekomunikasi dan pengembangan pada lingkup IT untuk mendukung konsep Future Telephony.</li><li>Melakukan fungsi asisten manajer operasional terhadap layanan telekomunikasi dan sistem informasi, beserta monitoring terhadap penyelesaian penanganan gangguan layanan.</li><li>Melakukan analisa dan perencanaan pengembangan layanan telekomunikasi dan sistem IT, serta bekerjasama dengan vendor atau pihak ketiga.</li>",
  },
  {
    title: "Officer MIS",
    cardImage: "assets/images/experience-page/logoofon.png",
    place: "PT. Persada Nusantara Telekomunikasi (OFON)",
    time: "(01 Juni 2016 – 20 Desember 2018)",
    desp:"<li>Membuat sistem informasi dan desain database, serta memfasilitasi kebutuhan CRUD (Create, Read, Update, Delete) sesuai permintaan.</li><li>Mendukung siklus pengembangan sistem dan bekerja dengan seluruh tim untuk terus berinovasi dalam meningkatkan kualitas dan kinerja sistem.</li><li>Memantau log aplikasi, sumber daya perangkat keras sistem, dan jaringan telekomunikasi.</li><li>Menangani pengoperasian dan pemeliharaan sistem, dan terlibat dalam QA (Quality Assurance) dan UAT (User Acceptance Testing).</li>",
  },
  {
    title: "Officer Technic",
    cardImage: "assets/images/experience-page/Logobbtnew.png",
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
    title: "Ikatan Alumni Universitas MH Thamrin",
    cardImage: "assets/images/experience-page/logo-ika.jpg",
    description:
      "Sekretaris Jenderal<br>(Periode : 2019 - 2021)",
  },
  {
    title: "Panitia Webinar Digital Entrepreneurship",
    cardImage: "assets/images/experience-page/IGFeedmoderator.jpg",
    description:
      "Ketua Panitia<br>(2020)",
  },
  {
    title: "Marijo Belajar",
    cardImage: "assets/images/experience-page/marijo-belajar-497x375.jpg",
    description:
      "Volunteer Public Relation<br>(2020)",
  },
  {
    title: "Kita Korban Bullying",
    cardImage: "assets/images/experience-page/kkb.png",
    description:
      "Volunteer Public Relation<br>(2020)",
  },
  {
    title: "Human Webinar",
    cardImage: "assets/images/experience-page/Logo-Muhammadiyah-Covid-19-Horizontal-1.png",
    description:
      "Volunteer Public Relation<br>(2020)",
  },
  {
    title: "Resimen Mahasiswa Batalyon 041 Indra Buana",
    cardImage: "assets/images/experience-page/indra-buana1.png",
    description:
      "Komandan Kompi<br>(2013 - 2015)",
  },
  {
    title: "Himpunan Mahasiswa Program Studi Teknik Informatika",
    cardImage: "assets/images/experience-page/universitasterbaik.xyz.png",
    description:
      "Pengurus<br>(2013)",
  },
  {
    title: "School Update Riau Televisi",
    cardImage: "assets/images/experience-page/su.jpeg",
    description:
      "Pengurus<br>(2009 - 2012)",
  },
  {
    title: "Pramuka",
    cardImage: "assets/images/experience-page/pramuka2blogo.png",
    description:
      "Anggota<br>(2006 - 2012)",
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
    title: "PT. Batam Bintan Telekomunikasi",
    image: "assets/images/experience-page/Logobbtnew.png",
    time: "12 November - 30 Desember 2014",
    desp: "<li>Pengambilan gambar dan pembuatan design Kalender Perusahaan Tahun 2015</li><li>Konfigurasi aplikasi Radius dan MikroTik</li><hr /><li>Laporan Akhir : Manajamen bandwidth hotspot BBZON-Wifi menggunakan RADIUSdesk dan Captive Portal Chillispot pada wilayah operasi PT. Batam Bintan Telekomunikasi.</li>",
  },
  {
    title: "PT. Riau Media Televisi",
    image: "assets/images/experience-page/rtv.jpg",
    time: "17 Januari - 27 Juni 2011",
    desp: "<li>Peliputan Berita.</li><li>Produksi Program</li><li>Menulis berita televisi</li><li>Pengambilan gambar</li><li>Editing gambar</li><li>Presenter news</li><hr /><li>Terlibat penuh dalam produksi program TV School Update dan School Update Weekend</li>",
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
