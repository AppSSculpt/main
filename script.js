
function createQRCode(qrCodeValue) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeValue,
        width: 120,
        height: 120,
    });
}


function displayMaterial(materialValue) {
    document.getElementById("material").textContent = "Material: " + materialValue;
}


function displayCodigo(codigoValue) {
    document.getElementById("codigo").textContent = "Código: " + codigoValue;
}

function displayTotal(totalValue) {
    document.getElementById("total").textContent = "Total: " + totalValue;
}



function createCustomImageAndDownload() {
    
    var container = document.querySelector(".custom-qrcode-container");

    
    html2canvas(container).then(function(canvas) {
        
        var customImage = new Image();
        customImage.src = canvas.toDataURL("image/png");

        
        var downloadLink = document.createElement("a");
        downloadLink.href = customImage.src;
        downloadLink.download = materialValue + ".png";

        
        downloadLink.click();
    });
}

var downloadButton = document.getElementById("downloadCustomImage");
if (downloadButton) {
    downloadButton.addEventListener("click", createCustomImageAndDownload);
}


var urlParams = new URLSearchParams(window.location.search);
var qrCodeValue = urlParams.get("qr_code");
var materialValue = urlParams.get("material");
var codigoValue = urlParams.get("qr_code");
var totalValue = urlParams.get("total");

createQRCode(qrCodeValue);
displayMaterial(materialValue);
displayCodigo(codigoValue);
displayTotal(totalValue);



window.addEventListener("scroll", function() {
    var h1 = document.querySelector("h1");
    if (window.scrollY > 0) {
        h1.style.top = "-100px"; 
    } else {
        h1.style.top = "0"; 
    }
});


document.getElementById('downloadCustomImage').addEventListener('click', function() {
    var btn = this;
    btn.classList.add('downloading');
    setTimeout(function() {
      btn.classList.remove('downloading');
    }, 3000); 
  });
