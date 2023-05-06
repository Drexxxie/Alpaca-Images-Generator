const img_sections = ["background", "neck", "hair", "ears", "accessories", "eyes", "mouth", "leg"];
img_sections.forEach((section) => {
    const btn_container = document.getElementById("customize-" + section).children[1].childNodes;
    btns_container.forEach((button) => {
        button.addEventListener("click", () => {
            const img_section = document.getElementById("img-" + section);
            if (button.classList.contains("custom-option-dont"))
            {//
                img_section.setAttribute("display", "none");
                img_section.style.display = "none";
            }
            else {
                img_section.style.display = "unset";
                img_section.setAttribute("src", button.children[0].getAttribute("src"))
            }
        });
    });
});

const btn_random = document.getElementById("btn_random");
btn_random.addEventListener("click", () => {
    img_sections.forEach(section); {
        const btns_container = document.getElementById("customize-" + section).children[1];
        btns_container.children[Math.floor(Math.random() *
            btns_container.childElementCount)].click();
    };
});

const btn_download = document.getElementById("btn-download");
btn_download.addEventListener("click", () => {
    const img_container = document.getElementsByClassName("img-container")[0];
    html2canvas(img_container).then((canvas) => {
        const download_link = document.createElement("a");
        download_link.href = canvas.toDataURL("image/png");
        download_link.download = "Alpaca.png";
        download_link.click();
    });
});