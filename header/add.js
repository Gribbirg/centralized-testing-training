"use strict"

document.body.innerHTML +=
    `<header id="header">
        <img id="logo" src="/centralized-testing-training/images/logo.png" height="60px" alt="Logo">
            <h1 id="header_head">Подготовка к ЦТ</h1>
            <nav id="up_nav">
               <a id="restart_href" href="/centralized-testing-training/"><img alt="restart" src="/centralized-testing-training/images/restart.png" height="40px" class="theme_img"></a>
               <a href="/centralized-testing-training/"><img alt="home" src="/centralized-testing-training/images/home.png" height="40px" class="theme_img"></a>
            </nav>
    </header>`

function setRestartHref(subject) {
    let restart = document.getElementById("restart_href");
    restart.href = `/centralized-testing-training/${subject}`;
    restart.style.visibility = "initial";
    document.getElementById("header").onclick = function (event) {
        if (event.target.closest("#restart_href")) {
            cleanStorage();
        }
    }
}