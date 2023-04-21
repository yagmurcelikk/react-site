import React from 'react';
import ReactDOM from 'react-dom/client';
import Giris_form, { navigate } from './Giris_form';
import Kayit_form from './Kayit_form';
import Router from './Router';

export const girisKontrol = function girisKontrol() {

    var kullanici = sessionStorage.getItem("user");
    if (kullanici == null) { //kullanıcı boşsa boş degeri ata
        sessionStorage.setItem("user", "{}")
        kullanici = "{}"
    }

    var isLogin = false;

    var kullanici_ayrik = JSON.parse(kullanici);

    const ad_soyad = document.getElementById("ad_soyad").value
    const kullanici_adi = document.getElementById("kullanici_adi").value
    const mail = document.getElementById("email").value;
    const sifre = document.getElementById("sifre").value;
    const yazi = document.getElementById("sonuc");

    if (ad_soyad === kullanici_ayrik.ad_soyad && kullanici_adi === kullanici_ayrik.kullanici_adi && mail === kullanici_ayrik.email && sifre === kullanici_ayrik.sifre) {

        yazi.innerHTML = "Giriş bilgileriniz doğru, Yönlendiriliyorsunuz.";
        yazi.style.color = "green";

        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);

        const root = ReactDOM.createRoot(document.getElementById('root'));
        setTimeout(function () {
            root.render(
                <Router />
            )
        }, 1000);

    }

    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }

    return isLogin;
};



//KAYİT FORM
export const kayit = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Kayit_form />
    )

};

//CIKIS
export const logout = function logout() {
    var isLogin = sessionStorage.getItem("isLogin");
    isLogin = false;
    sessionStorage.setItem("isLogin", isLogin);

    window.location.replace("/");

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Giris_form />,

    )
};



