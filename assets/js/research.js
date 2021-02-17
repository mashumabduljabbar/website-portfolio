/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Fraud Detection Call Detail Record Using Machine Learning in Telecommunications Company",
        authors : "Ma’shum Abdul Jabbar, Suharjito",
        conferences : "Advances in Science, Technology and Engineering Systems Journal Volume 5, Issue 4, Page No 63-69",
        researchYr : 2020,
        doi : "<a href='http://dx.doi.org/10.25046/aj050409' target='_blank' style='color:blue;'>10.25046/aj050409</a>",
        citebox : "popup1", //popup2 popup3 dst
        image : "assets/images/research-page/astesj.jpg",
        citation: {
            vancouver: "M.A. Jabbar, Suharjito \"Fraud Detection Call Detail Record Using Machine Learning in Telecommunications Company\", Advances in Science, Technology and Engineering Systems Journal, vol. 5, no. 4, pp. 63-69 (2020)"
        },
        abstract: "Fraud calls have a serious impact on telecommunications operator revenues. Fraud detection is very important because service providers can feel a significant loss of income. We conducted a fraud research case study on one of the operators that experienced fraud in 2009 and 2018. Call Detail Record (CDR) containing records of customer conversations such as source and destination number, call start time, duration of calls at the operator can be a source of information to use in fraud detection. The method used in this study uses machine learning with unsupervised learning techniques which are quite popular methods used in fraud detection. The purpose of this study is to propose an effective method that can be applied to detect fraud on the CDR. Variables used include caller number, number dialled, duration, fee and destination city of the dataset totalling 11,418 rows from record periods 01 to 31 May 2018. In analyzing our CDR using the K-Means and DBSCAN algorithms, we then evaluate the results to calculate accuracy by comparing to actual fraud data. Based on evaluations using confusion matrix on actual CDR fraud, we obtained the K-Means algorithm to show a better accuracy value to model fraud on telecommunications CDR compared to DBSCAN.",
        absbox: "absPopup1" // absPopup2 absPopup3 dst
    },
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, doi, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr> 
                <td class="imgCol"><img src="${image}" class="img0r" width="100%"></td>
                <td class = "researchTitleName">
                    <a href="https://astesj.com/v05/i04/p09/" target="_blank" style='color:blue;' class="paperTitle"> ${title} </a> 
                    <div> Penulis : ${authors} </div> <div class="rConferences"> Publikasi : ${conferences} 
                        <div class="researchY">Tahun : ${researchYr}</div> <div class="researchY">DOI : ${doi}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRAK
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            BIBTEX
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

