function Buton4(){
    let A=document.getElementById('TSE-2');
    let B='TSE-7.jpg';
    A.setAttribute('src',B)
}

function Buton3(){
    let A=document.getElementById('TSE-3');
    let B='TSE-9.jpg';
    A.setAttribute('src',B)
}


function Buton5(){
    let A=document.getElementById('TSE-4');
    let B='TSE-8.jpg';
    A.setAttribute('src',B)
}

function Buton(){
    let A=document.getElementById('Yapı Bilgisi');
    let B='Yapı Bilgisi-5.jpg';
    A.setAttribute('src',B)
}

function Buton1(){
    let A=document.getElementById('Yapı Bilgisi-1');
    let B='Yapı Bilgisi-6.jpg';
    A.setAttribute('src',B)
}

function Buton2(){
    let A=document.getElementById('Yapı Bilgisi-2');
    let B='Yapı Bilgisi-7.jpg';
    A.setAttribute('src',B)
}

function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = (sidebar.style.width === "250px") ? "0" : "250px";
}

    // Kenar çubuğu dışında bir yere tıklandığında kenar çubuğunu kapat
    document.addEventListener("click", function (event) {
        var sidebar = document.getElementById("sidebar");
        var menuIcon = document.getElementById("menu-icon");

        if (event.target !== sidebar && event.target !== menuIcon) {
            sidebar.style.width = "0";
        }
    });

        var imagesSol = ["kaydedilen resimler/Ekran Resmi 2023-12-11 11.52.02.png", "kaydedilen resimler/Ekran Resmi 2023-12-11 11.54.09.png", "kaydedilen resimler/Ekran Resmi 2023-12-11 11.54.20.png", "kaydedilen resimler/Ekran Resmi 2023-12-11 11.55.33.png", "kaydedilen resimler/Ekran Resmi 2023-12-11 11.56.05.png"];
        var currentIndexSol = 0;
    
        var imagesOrta = ["kaydedilen resimler/Ekran Resmi 2023-12-11 11.59.12.png", "kaydedilen resimler/Ekran Resmi 2023-12-11 11.59.26.png", "kaydedilen resimler/Ekran Resmi 2023-12-11 11.59.38.png", "kaydedilen resimler/Ekran Resmi 2023-12-11 11.59.49.png"];
        var currentIndexOrta = 0;
    
        var imagesSag = ["kaydedilen resimler/IMG_6854.jpg", "kaydedilen resimler/AF81C428-90AD-477F-9E78-293568405D11_1_201_a.jpeg", "kaydedilen resimler/IMG_6856.jpg", "kaydedilen resimler/IMG_6857.jpg", "kaydedilen resimler/IMG_6859.jpg", "kaydedilen resimler/IMG_6860.jpg"];
        var currentIndexSag = 0;
    
        function changeImage(imgElement) {
            if (imgElement.parentNode.classList.contains("foto-grid-sol")) {
                currentIndexSol = (currentIndexSol + 1) % imagesSol.length;
                imgElement.src = imagesSol[currentIndexSol];
            } else if (imgElement.parentNode.classList.contains("foto-grid-orta")) {
                currentIndexOrta = (currentIndexOrta + 1) % imagesOrta.length;
                imgElement.src = imagesOrta[currentIndexOrta];
            } else if (imgElement.parentNode.classList.contains("foto-grid-sag")) {
                currentIndexSag = (currentIndexSag + 1) % imagesSag.length;
                imgElement.src = imagesSag[currentIndexSag];
            }
        }

/*
function openNav() {
    document.getElementById("B").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
    document.getElementById("B").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    }
*/

    