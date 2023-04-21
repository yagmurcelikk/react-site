import { Outlet, Link, Form } from "react-router-dom";
import { logout } from "./Function";
import React, { useState, useEffect } from "react";

//DOKUMAN BUTONU
export const dokumanbuton = () => {
    const formData = sessionStorage.getItem("formData");
    const dokumanData = sessionStorage.getItem("dokumanData");

    const basvur = document.getElementById("basvur");
    const basvur_gncl = document.getElementById("basvur_gncl");
    const dokuman = document.getElementById("dokuman");
    const dokuman_gncl = document.getElementById("dokuman_gncl");

    switch (true) {
        case Boolean(dokumanData):
            dokuman.style.display = "none";
            dokuman_gncl.style.display = "";
            basvur.style.display = "none";
            basvur_gncl.style.display = "block";
            break;
        case Boolean(formData):
            basvur.style.display = "none";
            basvur_gncl.style.display = "block";
            dokuman.style.display = "block";
            dokuman_gncl.style.display = "none";
            break;

        case !Boolean(formData):
            basvur_gncl.style.display = "none";
            dokuman.style.display = "none";
            dokuman_gncl.style.display = "none";
            break;
        default:
            basvur.style.display = "block";
            basvur_gncl.style.display = "none";
            dokuman.style.display = "none";
            break;
    }

};

const still = {
    display: 'inline-block',
    margin: '0 10px'
}

const Layout = () => {
    const [isLogin, setIsLogin] = useState(false);


    const handleLogin = () => {
        var kullanici = sessionStorage.getItem("user");

        if (kullanici != null) {
            setIsLogin(true);
            const user = JSON.parse(sessionStorage.getItem('user'))
            const header_sag = document.getElementById("header_sag");
            header_sag.innerHTML = "<i>" + user.ad_soyad + "&nbsp;&nbsp</i>";
            header_sag.style.fontSize="18px";
        }
    };

    useEffect(() => {
        handleLogin();
        dokumanbuton();
    }, [dokumanbuton]);

    const handleLogout = () => {
        logout();
        setIsLogin(false); // isLogin değeri false olarak değiştiriliyor
    };


    return (
        <>
            <nav>
                <div className="p-3 text-bg-dark" >
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
                                <li style={still}>
                                    <Link to="/" className="btn btn-outline-secondary">Anasayfa</Link>
                                </li>
                                <li style={still}>
                                    <Link to="/Iletisim" className="btn btn-outline-secondary">İletişim</Link>
                                </li>
                                <li style={still}>
                                    <Link to="/Hakkinda" className="btn btn-outline-secondary">Hakkında</Link>
                                </li>

                            </ul>

                            <div className="text-end" id="header_sag" style={{ display: 'inline-block' }} ></div>

                            <div class="dropdown">
                                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li id="basvur">
                                        <Link to="/Basvur" className="dropdown-item">Başvur</Link>
                                    </li>

                                    <li id="basvur_gncl"  >
                                        <Link to="/Basvur" className="dropdown-item">Başvuru Güncelle</Link>
                                    </li>

                                    <li id="dokuman"> {/*function'da Layout ile düzenledik */}
                                        <Link to="/Dokuman" className="dropdown-item">Dokuman</Link>
                                    </li>

                                    <li id="dokuman_gncl" > {/*function'da Layout ile düzenledik */}
                                        <Link to="/Dokuman" className="dropdown-item">Dokuman Güncelle</Link>
                                    </li>

                                    <li><hr class="dropdown-divider bgcolor-white" /></li>

                                    <li id="kullanici_gncl">
                                        <Link to="/Kullanici_gncl" className="dropdown-item">Kullanıcı Bilgileri</Link>
                                    </li>

                                    <li><div className="text-end" style={{ display: 'inline-block' }}>
                                        <a class="dropdown-item" href="#" onClick={handleLogout} >Çıkış</a>
                                    </div></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>
            <Outlet />

        </>
    );
}
export default Layout;