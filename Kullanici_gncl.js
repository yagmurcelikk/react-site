import React, { useState } from 'react';

const Kullanici_gncl = () => {
    const [showEmailGuncelle, setShowEmailGuncelle] = useState(false);
    const [showKullaniciGuncelle, setShowKullaniciGuncelle] = useState(false);
    const [showSifreGuncelle, setShowSifreGuncelle] = useState(false);

    const emailInput = () => {
        setShowEmailGuncelle(!showEmailGuncelle); // Eğer showEmailGuncelle değişkeni true ise emailGuncelle div'i görünür, false ise emailGuncelle div'i gizlenir.
    };

    const kullaniciAdInput = () => {
        setShowKullaniciGuncelle(!showKullaniciGuncelle);
    };

    const SifreInput = () => {
        setShowSifreGuncelle(!showSifreGuncelle);
    };

    const kullaniciad_gnclle = (event) => {
        event.preventDefault();
        const user = JSON.parse(sessionStorage.getItem('user'));
        const newKullaniciAdi = document.getElementById('kullaniciadi_gncl').value;
        const clearadForm = () => {
            setShowKullaniciGuncelle(false);
        }

        if (newKullaniciAdi && newKullaniciAdi !== user.kullanici_adi) {
            user.kullanici_adi = newKullaniciAdi;
            sessionStorage.setItem('user', JSON.stringify(user));

            alert("Kullanıcı adınız güncellendi");
            clearadForm();
        }
        else if (!newKullaniciAdi) {
            alert("Lütfen bilgi giriniz");
        }
        else if (newKullaniciAdi == user.kullanici_adi) {
            alert("Kullanıcı adınız aynı olduğu için değiştirilmemiştir");
            return;
        }
    };

    const email_gunclle = (event) => {
        event.preventDefault();
        const user = JSON.parse(sessionStorage.getItem('user'));
        const newemail = document.getElementById('email_gncl').value;
        const clearemailForm = () => {
            setShowEmailGuncelle(false);
        }


        if (newemail && newemail !== user.email) {
            user.email = newemail;
            sessionStorage.setItem('user', JSON.stringify(user));

            alert("Email bilginiz güncellendi");

            clearemailForm();
        }
        else if (!newemail) {
            alert("Lütfen bilgi giriniz");
        }
        else if (newemail == user.email) {
            alert("Email bilginiz aynı olduğu için güncellenemedi.");
            return;
        }

    };

    const sifre_gunclle = (event) => {
        event.preventDefault();
        const user = JSON.parse(sessionStorage.getItem('user'));
        const newsifre = document.getElementById('sifre_gncl').value;
        const newresifre = document.getElementById('resifre_gncl').value;
        const clearsifreForm = () => {
            setShowSifreGuncelle(false);

        }

        if (newsifre && newresifre && newsifre !== user.sifre && newresifre !== user.reSifre && newsifre == newresifre) {
            user.sifre = newsifre;
            user.reSifre = newresifre
            sessionStorage.setItem('user', JSON.stringify(user));

            alert("Sifreniz güncellendi");
            clearsifreForm();
        }
        else if (!newsifre && !newresifre || !newresifre || !newsifre) {
            alert("Lütfen bilgi giriniz");
        }
        else if (newsifre == user.sifre && newresifre == user.reSifre && newsifre == newresifre) {
            alert("Lütfen farklı bir şifre giriniz");
        }
        else if (newsifre !== user.sifre && newresifre !== user.reSifre && newsifre !== newresifre) {
            alert("Şifreler uyuşmuyor");
            return;
        }

    };


    return (
        <>
            <div className="container" style={{ marginBottom: '20px', marginTop: '20px', marginLeft: '500px' }}>
                <div className='row justify-content-center'>

                    <div className='col' style={{ alignItems: 'center', alignSelf: 'center', fontSize: "20px", fontFamily: "'Times New Roman', Times, serif" }}>

                        <div className="row justify-content-center"> {/*KULLANICIADI GUNCELLE */}
                            <div className="row py-3">
                                <div className="col-4">
                                    <span>
                                        <i>Kullanıcı adınızı güncellemek için{" "}
                                            <a href="#" onClick={kullaniciAdInput}>
                                                tıklayın
                                            </a></i>
                                    </span>
                                </div>
                            </div>
                            {showKullaniciGuncelle && (
                                <form onSubmit={kullaniciad_gnclle}>
                                    <div className="row py-2">
                                        <div className='col-8'>
                                            <div className='row'>
                                                <div className="col-4">
                                                    <input type="text" className="form-control" id="kullaniciadi_gncl" name="kullaniciadi_gncl" />
                                                </div>
                                                <div className="col-2">
                                                    <button type="submit" className="w-100 btn btn-sm btn-outline-dark">
                                                        Güncelle
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>

                        <div className="row justify-content-center">{/*EMAIL GUNCELLE */}
                            <div className="row py-3">

                                <div className="col-4">
                                    <span>
                                        <i>Email adresini güncellemek için{" "}
                                            <a href="#" onClick={emailInput}>
                                                tıklayın
                                            </a></i>
                                    </span>
                                </div>
                                {showEmailGuncelle && (
                                    <form onSubmit={email_gunclle}>
                                        <div className="row py-2">
                                            <div className='col-8'>
                                                <div className='row'>
                                                    <div className="col-4">
                                                        <input type="email" className="form-control" id="email_gncl" name="email_gncl" placeholder="name@example.com" />
                                                    </div>
                                                    <div className="col-2">
                                                        <button type="submit" className="w-100 btn btn-sm btn-outline-dark">
                                                            Güncelle
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>

                        </div>

                        <div className="row justify-content-center"> {/*SIFRE GUNCELLE */}
                            <div className="row py-3">
                                <div className="col-4">
                                    <span>
                                        <i> Şifrenizi güncellemek için{" "}
                                            <a href="#" onClick={SifreInput}>
                                                tıklayın
                                            </a></i>
                                    </span>
                                </div>
                            </div>
                            {showSifreGuncelle && (
                                <form onSubmit={sifre_gunclle}>
                                    <div className="row py-2">
                                        <div className='col-8'>
                                            <div className='row'>
                                                <div className="col-3">
                                                    <input type="password" className="form-control" id="sifre_gncl" name="sifre_gncl" placeholder="Şifrenizi Giriniz" />
                                                </div>
                                                <div className="col-3">
                                                    <input type="password" className="form-control" id="resifre_gncl" name="resifre_gncl" placeholder="Tekrar Şifrenizi Giriniz" />
                                                </div>
                                                <div className="col-2">
                                                    <button type="submt" className="w-100 btn btn-sm btn-outline-dark">
                                                        Güncelle
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Kullanici_gncl;
