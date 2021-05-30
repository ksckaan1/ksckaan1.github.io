if (window.innerWidth > 501) {
    forDesktop();
} else {
    forMobile();
}
//resize listener
window.addEventListener("resize", () => {
    if (window.innerWidth > 501) {
        forDesktop();
    } else {
        forMobile();
    }
})
//Sections
var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");
var section3 = document.querySelector(".section3");


//scrolldown button event
document.querySelector("#scrolldown").addEventListener("click", () => {
    document.querySelector(".section1").scrollTop = window.innerHeight;
});

//social icons
var twitterSc = document.querySelector("#twitter")
var instagramSc = document.querySelector("#instagram")
var githubSc = document.querySelector("#github")
var emailSc = document.querySelector("#email")


twitterSc.addEventListener("click", () => {
    location.href = "https://twitter.com/ksckaan1"
})
instagramSc.addEventListener("click", () => {
    location.href = "https://instagram.com/kscukaan"
})
githubSc.addEventListener("click", () => {
    location.href = "https://github.com/ksckaan1"
})
emailSc.addEventListener("click", () => {
    location.href = "mailto:kaanksc@hotmail.com"
})


function forDesktop() {
    var sections = document.querySelectorAll("section");

    var sectionWidth = window.innerWidth - 300;
    sections.forEach((section, i) => {
        section.style.left = (i * sectionWidth) + "px";
    });

    //Menu Buttons
    var aboutButton = document.querySelector("#aboutButton");
    var projectButton = document.querySelector("#projectButton");
    var linksButton = document.querySelector("#linksButton");



    //container

    var container = document.querySelector(".container");
    aboutButton.addEventListener('click', () => {
        sections.forEach((section, i) => {
            section.style.left = (i * sectionWidth) + "px";
        });
        container.style.left = 300 - sections[0].style.left.replace("px", "") + "px";
        document.querySelector(".section1").scrollTop = 0;
    })
    projectButton.addEventListener('click', () => {
        sections.forEach((section, i) => {
            section.style.left = (i * sectionWidth) + "px";
        });
        container.style.left = 300 - sections[1].style.left.replace("px", "") + "px";
    })
    linksButton.addEventListener('click', () => {
        sections.forEach((section, i) => {
            section.style.left = (i * sectionWidth) + "px";
        });
        container.style.left = 300 - sections[2].style.left.replace("px", "") + "px";
    })
}

function forMobile() {
    var sections = document.querySelectorAll("section");
    var pageTitle = document.querySelector("#title");

    var sectionWidth = window.innerWidth;
    sections.forEach((section, i) => {
        section.style.left = (i * sectionWidth) + "px";
    });

    //Menu Buttons
    var aboutButton = document.querySelector("#aboutButton");
    var projectButton = document.querySelector("#projectButton");
    var linksButton = document.querySelector("#linksButton");



    //container

    var container = document.querySelector(".container");
    var header = document.querySelector("header");
    aboutButton.addEventListener('click', () => {
        sections.forEach((section, i) => {
            section.style.left = (i * sectionWidth) + "px";
        });
        container.style.left = "-" + sections[0].style.left.replace("px", "") + "px";
        document.querySelector(".section1").scrollTop = 0;
        header.style.left = "-" + window.innerWidth + "px";
        pageTitle.innerHTML = "About Me";
    })
    projectButton.addEventListener('click', () => {
        sections.forEach((section, i) => {
            section.style.left = (i * sectionWidth) + "px";
        });
        container.style.left = "-" + sections[1].style.left.replace("px", "") + "px";
        header.style.left = "-" + window.innerWidth + "px";
        pageTitle.innerHTML = "My Projects";
    })
    linksButton.addEventListener('click', () => {
        sections.forEach((section, i) => {
            section.style.left = (i * sectionWidth) + "px";
        });
        container.style.left = "-" + sections[2].style.left.replace("px", "") + "px";
        header.style.left = "-" + window.innerWidth + "px";
        pageTitle.innerHTML = "Links";
    })
}

document.querySelector("#backButton").addEventListener("click", () => {
    document.querySelector("header").style.left = "0px";
})

document.querySelectorAll("section a").forEach((a) => {
    a.setAttribute("target", "_blank")
});