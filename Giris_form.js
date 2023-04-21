import Footer from './Footer';
import { girisKontrol, kayit } from './Function';


function Giris_form() {

    return (
        <>
            <div className='container'>
                <div className="row justify-content-center py-5 ">

                    <div className="col-4 border border-danger py-2">
                        <form>

                            <h2 align="center"><i className="fa-solid fa-right-to-bracket">&nbsp;&nbsp;</i>Giriş Yap</h2>
                            <div className="form-floating py-2">
                                <input type="text" className="form-control" id="ad_soyad" placeholder="Ad Soyad" />
                                <label for="floatingInput" style={{ color: 'black' }} >Ad Soyad</label>
                            </div>
                            <div class="form-floating py-2">
                                <input type="text" className="form-control" id="kullanici_adi" placeholder="Kullanıcı Adı" />
                                <label for="floatingInput" style={{ color: 'black' }}>Kullanıcı Adı</label>
                            </div>
                            <div class="form-floating py-2">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                <label for="floatingInput" style={{ color: 'black' }}>Email adresi</label>
                            </div>
                            <div class="form-floating py-2">
                                <input type="password" className="form-control" id="sifre" placeholder="Şifrenizi Giriniz" />
                                <label for="floatingPassword" style={{ color: 'black' }}>Şifrenizi Giriniz</label>
                            </div>

                            <p id="sonuc"></p>

                        </form>
                        <p>Hesabınız yok mu?
                            <a href="#" onClick={() => kayit()} >Kayıt ol</a>
                        </p>
                        <button className="w-100 btn btn-sm btn-outline-dark" onClick={() => girisKontrol()} id="giris">Giriş</button> {/*Formun içinde olsaydı preventdefault yapardık */}
                    </div>

                </div>
            </div>
            <div className='Giris_form'>
                <Footer/>
            </div>
        </>
    );
}
export default Giris_form;