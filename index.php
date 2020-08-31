<?php

    $url = $_GET['url'] ?? 'home';

    if (file_exists($url . '.html')) {
        require "$url.html";
    } else {
        require '404.html';
    }
    