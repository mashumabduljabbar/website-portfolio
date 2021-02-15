AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Python Data Science - SanberCode",
    cardImage: "assets/images/education-page/pythondatascience.jpg",
    moocLink: "assets/images/education-page/pythondatascience2.jpg",
  },
  {
    title: "Path Pengembangan Web Node.js - Progate",
    cardImage: "assets/images/education-page/progate.jpg",
    moocLink: "assets/images/education-page/progate.jpg",
  },
  {
    title: "Python - DTS KOMINFO",
    cardImage: "assets/images/education-page/pythondts.jpg",
    moocLink: "assets/images/education-page/pythondts.jpg",
  },
  {
    title: "PCAP Programming Essentials in Python - Python Institute",
    cardImage: "assets/images/education-page/pcaptraining.jpg",
    moocLink: "assets/images/education-page/pcaptraining.jpg",
  },
  {
    title: "SQL and Relational Databases - Cognitive Class",
    cardImage: "assets/images/education-page/sql101.jpg",
    moocLink: "assets/images/education-page/sql101.jpg",
  },
  {
    title: "Introduction to Packet Tracer - Cisco",
    cardImage: "assets/images/education-page/intropacket.jpg",
    moocLink: "assets/images/education-page/intropacket.jpg",
  },
  {
    title: "Introduction to Cybersecurity - Cisco",
    cardImage: "assets/images/education-page/introcyber.jpg",
    moocLink: "assets/images/education-page/introcyber.jpg",
  },
  {
    title: "Python-101 for Data Science - Cognitive Class",
    cardImage: "assets/images/education-page/python101.jpg",
    moocLink: "assets/images/education-page/python101.jpg",
  },
  {
    title: "Be A White Hat Hacker and Pen Tester - Eduonix",
    cardImage: "assets/images/education-page/whitehacker.jpg",
    moocLink: "assets/images/education-page/whitehacker.jpg",
  },
  {
    title: "Certified Network Security Specialist - ICSI",
    cardImage: "assets/images/education-page/icsi.jpg",
    moocLink: "assets/images/education-page/icsi.jpg",
  },
  {
    title: "Outlier Detection Algorithms - Udemy",
    cardImage: "assets/images/education-page/datamining.jpg",
    moocLink: "assets/images/education-page/datamining.jpg",
  },
  {
    title: "RPKI - APJII",
    cardImage: "assets/images/education-page/rpki.jpg",
    moocLink: "assets/images/education-page/rpki.jpg",
  },
  {
    title: "HTML Fundamentals Course - SOLOLEARN",
    cardImage: "assets/images/education-page/html.jpg",
    moocLink: "assets/images/education-page/html.jpg",
  },
  {
    title: "SEO For Beginners Online Course - Udemy",
    cardImage: "assets/images/education-page/seoudemy.jpg",
    moocLink: "assets/images/education-page/seoudemy.jpg",
  },
  {
    title: "PHP Tutorial Course - SOLOLEARN",
    cardImage: "assets/images/education-page/php.jpg",
    moocLink: "assets/images/education-page/php.jpg",
  },
  {
    title: "Phyton 3 Tutorial Course - SOLOLEARN",
    cardImage: "assets/images/education-page/phyton3.jpg",
    moocLink: "assets/images/education-page/phyton3.jpg",
  },
  {
    title: "Google Web Designer Basics - Google",
    cardImage: "assets/images/education-page/googleweb.jpg",
    moocLink: "assets/images/education-page/googleweb2.jpg",
  },
  {
    title: "Java Fundamental - PT Mitra Industri Telematika",
    cardImage: "assets/images/education-page/java.jpg",
    moocLink: "assets/images/education-page/java.jpg",
  },
  {
    title: "Workshop CodeIgniter Batch III - CyberLearning.ID",
    cardImage: "assets/images/education-page/codeigniter.jpg",
    moocLink: "assets/images/education-page/codeigniter.jpg",
  },
  {
    title: "Delighted Customer Service - VIP Development Center",
    cardImage: "assets/images/education-page/customerservice.jpg",
    moocLink: "assets/images/education-page/customerservice.jpg",
  },
  {
    title: "Linux Enterprise Server Development - vSchool.ID",
    cardImage: "assets/images/education-page/rhel.jpg",
    moocLink: "assets/images/education-page/rhel.jpg",
  },
  {
    title: "Cisco Certified Network Associate (CCNA) - IDNetworkers",
    cardImage: "assets/images/education-page/ccnatraining.jpg",
    moocLink: "assets/images/education-page/ccnatraining.jpg",
  },
  {
    title: "Workshop Laravel Framework - Wabeta Education",
    cardImage: "assets/images/education-page/laravel.jpg",
    moocLink: "assets/images/education-page/laravel.jpg",
  },
  {
    title: "B4J Programming Workshop - Facult of Computer M.H.T University",
    cardImage: "assets/images/education-page/B4J.jpg",
    moocLink: "assets/images/education-page/B4J.jpg",
  },
  {
    title: "Android Web App Training - WebHozz Training",
    cardImage: "assets/images/education-page/androidwebapp.jpg",
    moocLink: "assets/images/education-page/androidwebapp.jpg",
  },
  {
    title: "Android Development Training - WebHozz Training",
    cardImage: "assets/images/education-page/androidtraining.jpg",
    moocLink: "assets/images/education-page/androidtraining.jpg",
  },
  {
    title: "MikroTik Certified Routing Engineer (MTCRE) - IDNetworkers",
    cardImage: "assets/images/education-page/mtcre.jpg",
    moocLink: "assets/images/education-page/mtcre.jpg",
  },
  {
    title: "MikroTik Certified Network Associate (MTCNA) - IDNetworkers",
    cardImage: "assets/images/education-page/mtcna.jpg",
    moocLink: "assets/images/education-page/mtcna.jpg",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="400" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:10px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
