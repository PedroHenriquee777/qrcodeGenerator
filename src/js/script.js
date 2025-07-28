const container = document.querySelector(".container");
qrInput = container.querySelector(".form input");
generateBtn = container.querySelector(".form button");
qrImg = document.querySelector(".qr-code .qrcode-img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) {
        alert("Please enter a valid URL or text");
        return
    }
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=%24${qrValue}`
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Generate QR Code"
        container.classList.add("active");
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        container.classList.remove("active");
    }
});





