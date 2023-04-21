
import React from 'react';
import ReactDOM from 'react-dom/client';
import Giris_form from "./Giris_form";
import Footer from './Footer';


function Kayit_form() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const ad_soyad = document.getElementById('ad_soyad').value.trim();
        const kullanici_adi = document.getElementById('kullanici_adi').value.trim();
        const email = document.getElementById('email').value.trim();
        const sifre = document.getElementById('sifre').value.trim();
        const reSifre = document.getElementById('reSifre').value.trim();
        const yazi = document.getElementById("sonuc");

        if (!ad_soyad || !kullanici_adi || !email || !sifre || !reSifre) {
            yazi.innerHTML = "Lütfen tüm alanları doldurun!";
            yazi.style.color = "red";
            return;
        }

        if (sifre !== reSifre) {
            yazi.innerHTML = "Şifreler eşleşmiyor!";
            yazi.style.color = "red";
            return;
        }

        const user = {
            ad_soyad,
            kullanici_adi,
            email,
            sifre,
            reSifre,
        };

        sessionStorage.setItem('user', JSON.stringify(user));

        yazi.innerHTML = "Giriş Sayfasına Yönlendiriliyorsunuz.";
        yazi.style.color = "green";

        const root = ReactDOM.createRoot(document.getElementById('root'));
        setTimeout(function () {
            root.render(
                <Giris_form />
            )
        }, 1000)
    };


    return (
        <>
        <div className="container">
            <div className="row justify-content-center py-5 ">
                <div className="col-4 border border-danger py-2">
                    <form onSubmit={handleSubmit}>
                        <h3 align="center">
                            <i className="fa-sharp fa-solid fa-user-plus">&nbsp;&nbsp;</i>Kayıt Ol
                        </h3>
                        <div className="form-floating py-2">
                            <input type="text" className="form-control" id="ad_soyad" placeholder="Ad Soyad" />
                            <label htmlFor="floatingInput" style={{ color: 'black' }}>
                                Ad Soyad
                            </label>
                        </div>
                        <div className="form-floating py-2">
                            <input type="text" className="form-control" id="kullanici_adi" placeholder="Kullanıcı Adı" />
                            <label htmlFor="floatingInput" style={{ color: 'black' }}>
                                Kullanıcı Adı
                            </label>
                        </div>
                        <div className="form-floating py-2">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" style={{ color: 'black' }}>
                                Email
                            </label>
                        </div>
                        <div className="form-floating py-2">
                            <input type="password" className="form-control" id="sifre" placeholder="Şifrenizi Giriniz" />
                            <label htmlFor="floatingPassword" style={{ color: 'black' }}>
                                Şifre
                            </label>
                        </div>
                        <div className="form-floating py-2">
                            <input type="password" className="form-control" id="reSifre" placeholder="Tekrar Şifrenizi Giriniz" />
                            <label htmlFor="floatingPassword" style={{ color: 'black' }}>
                                Şifrenizi tekrar girin
                            </label>
                        </div>
                        <p id="sonuc"></p>
                        <button className="w-100 btn btn-sm btn-outline-dark" type="submit">
                            Kayıt ol
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className='Kayit_form'>
                <Footer/>
            </div>
        </>
    );
}
export default Kayit_form;