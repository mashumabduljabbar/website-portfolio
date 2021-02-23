AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Aspara Clouder - Cloud Computing ACLC01",
    ID: "ACLC01210200046745",
    DATE: "2021-02-23",
    EXPIRED: "2023-02-23",
    cardImage: "assets/images/certification-page/aclc01.png",
    moocLink: "assets/images/certification-page/aclc01.pdf",
    Badge: "https://edu.alibabacloud.com/certification/clouder_oss",
	// https://xuecdn2.aliyunedu.net/img_7d6862c32b573f44c26c9b24a8c9c12d.png
  },{
    title: "Aspara Clouder - Cloud Computing ACLC05",
    ID: "ACLC05210200046501",
    DATE: "2021-02-19",
    EXPIRED: "2023-02-19",
    cardImage: "assets/images/certification-page/acaoss.png",
    moocLink: "assets/images/certification-page/acaoss.pdf",
    Badge: "https://edu.alibabacloud.com/certification/clouder_oss",
	// https://xuecdn2.aliyunedu.net/img_40b6fc8a6f9927d6523ac3519ff86927.png
  },{
    title: "Scrum Master Professional Certificate (SMPC)",
    ID: "56968286",
    DATE: "2021-02-06",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/scrummaster.png",
    moocLink: "assets/images/certification-page/scrummaster.pdf",
    Badge: "https://www.youracclaim.com/badges/75ed50f4-5cf2-4d8e-bc66-48597f32f8a2",
  },
  {
    title: "Alibaba Cloud Associate Cloud (ACA) Security",
    ID: "IACA02210200045530L",
    DATE: "2021-02-06",
    EXPIRED: "2023-02-06",
    cardImage: "assets/images/certification-page/acacloudsecurity.png",
    moocLink: "assets/images/certification-page/acacloudsecurity.pdf",
    Badge: "https://edu.alibabacloud.com/certification/aca_cloudsecurity",
  },
  {
    title: "NSE 2 Network Security Associate",
    ID: "b4nXLLpHsM",
    DATE: "2021-01-10",
    EXPIRED: "2023-01-10",
    cardImage: "assets/images/certification-page/nse2.png",
    moocLink: "assets/images/certification-page/nse2.pdf",
    Badge: "https://training.fortinet.com/mod/customcert/verify_certificate.php",
  },
  {
    title: "NSE 1 Network Security Associate",
    ID: "A0Pqfe49qf",
    DATE: "2021-01-06",
    EXPIRED: "2023-01-06",
    cardImage: "assets/images/certification-page/nse1.png",
    moocLink: "assets/images/certification-page/nse1.pdf",
    Badge: "https://training.fortinet.com/mod/customcert/verify_certificate.php",
  },
  {
    title: "Cyber Security Foundation Professional Certificate (CSFPC)",
    ID: "01010010180805057623798",
    DATE: "2020-09-13",
    EXPIRED: "2023-09-12",
    cardImage: "assets/images/certification-page/csfpc.png",
    moocLink: "assets/images/certification-page/csfpc.pdf",
    Badge: "https://www.youracclaim.com/badges/539e6526-bc69-43c3-8ee4-7d060734820a",
  },
  {
    title: "HCIA-Routing & Switching (HCIA-RS)",
    ID: "01010010180805057623798",
    DATE: "2020-09-13",
    EXPIRED: "2023-09-12",
    cardImage: "assets/images/certification-page/hcia-rs.png",
    moocLink: "assets/images/certification-page/hcia-rs.pdf",
    Badge: "https://e.huawei.com/en/talent/#/cert/certificate-verification",
  },
  {
    title: "PCAP – Certified Associate in Python Programming",
    ID: "YjXn.hvds.MW3O",
    DATE: "2020-07-30",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/pcap.png",
    moocLink: "assets/images/certification-page/pcap.pdf",
    Badge: "https://www.youracclaim.com/badges/a6d74f47-4fdf-4b7f-a48c-bb1bc7aa96a0",
  },
  {
    title: "Juniper Networks Certified Associate, Junos (JNCIA-Junos)",
    ID: "JPR00297543",
    DATE: "2020-07-17",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/jncia-junos.png",
    moocLink: "assets/images/certification-page/jncia-junos.pdf",
    Badge: "https://www.youracclaim.com/badges/e62840d2-fe03-4d09-87c7-9945424f5df9",
  },
  {
    title: "Multi Cloud Networking Associate (MCNA)",
    ID: "2020-1953",
    DATE: "2020-07-08",
    EXPIRED: "2023-07-08",
    cardImage: "assets/images/certification-page/ace.png",
    moocLink: "assets/images/certification-page/ace.pdf",
    Badge: "https://www.youracclaim.com/badges/9f11dca7-0de2-4fe5-b9cd-ff1c18aa8bb5",
  },
  {
    title: "Scrum Foundation Professional Certificate (SFPC)",
    ID: "CLVPNFNNYY-SLJKKKZV-XHRCTHPRMS",
    DATE: "2020-07-03",
    EXPIRED: "Seumur Hidup",
    cardImage: "assets/images/certification-page/CertiProf-Badge-SFPC.png",
    moocLink: "assets/images/certification-page/sfpc.pdf",
    Badge: "https://www.youracclaim.com/badges/64a6eac6-d432-4648-986a-a0779255e2d8",
  },
  {
    title: "MikroTik Certified Routing Engineer (MTCRE)",
    ID: "1603RE077",
    DATE: "2016-03-13",
    EXPIRED: "2019-03-12",
    cardImage: "assets/images/certification-page/mtcre.png",
    moocLink: "assets/images/certification-page/mtcre.pdf",
	Badge: "https://mikrotik.com/certificateSearch",
  },
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
	ID : "1603NA159",
	DATE : "2016-03-06",
    EXPIRED: "2019-03-05",
    cardImage: "assets/images/certification-page/MikroTik-Certified-Network-Associate1.png",
    moocLink: "assets/images/certification-page/mtcna.pdf",
	Badge: "https://mikrotik.com/certificateSearch",
  },
];

const experience = [
  {
    img: "assets/images/certification-page/c1.png"
  },
  {
    img: "assets/images/certification-page/c2.jpg"
  },
  {
    img: "assets/images/certification-page/c3.png"
  },
  {
    img: "assets/images/certification-page/c4.png"
  },
  {
    img: "assets/images/certification-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, ID, DATE, EXPIRED, cardImage, moocLink, Badge }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="400" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a title="Sertifikat"  href="${moocLink}" target="_blank"><i class="fa fa-file-pdf fa-3x" aria-hidden="true" style="color: white;"></i></a>                                   
                    <a title="Badge" href="${Badge}" target="_blank"><i class="fa fa-info-circle fa-3x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:10px;">${title}
					<br> ID Sertifikasi : ${ID}<br> Tanggal : ${DATE}<br> Berlaku s/d : ${EXPIRED}</h6>
					
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
