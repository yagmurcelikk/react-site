import { useState } from 'react';

const Iletisim = () => {
    const [mesajDisabled, setMesajDisabled] = useState(true);
    const [mesaj, setMesaj] = useState('');

    const igonder = (e) => {

        e.preventDefault();
        const ad = document.getElementById('ad').value;
        const email = document.getElementById('email').value;
        const mesaj = document.getElementById('mesaj').value;

        if (mesaj == "") { // mesaj alanı boş ise formu gönderme
            alert('Lütfen bir mesaj girin.');
            return;
        }

        const iletisimData = { ad: ad, email: email, mesaj: mesaj }; //FOrm verilerini Json objesi olarak al
        var idata = sessionStorage.getItem('iletisimData');
        if (!idata) { //idata degiskeninde veri yoksa
            idata = []; //dizi oluştur
        } else {
            idata = JSON.parse(idata); // veri varsa, diziyi alın
        }

        idata.push(iletisimData); // Yeni verileri diziye eklemek
        sessionStorage.setItem('iletisimData', JSON.stringify(idata));

        // Formu sıfırlamak
        document.getElementById('iletisim').reset();
        setMesaj('');
        setMesajDisabled(true);
        alert('Mesajınız başarıyla gönderildi');

    };

    const addegistiginde = () => {
        setMesajDisabled(!document.getElementById('email').value); //email'de deger yoksa
    };

    const emaildegistiginde = () => {
        setMesajDisabled(!document.getElementById('ad').value);
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form id="iletisim" onSubmit={igonder}>
                            <div className="row justify-content-center">
                                <div className="col-auto py-2">
                                    <h4>Bizimle İletişime Geçin</h4>
                                </div>
                            </div>

                            <div className="row justify-content-center py-3">
                                <div className="col-6 form-group">
                                    <label htmlFor="ad">Ad Soyad:</label>
                                    <input type="text" className="form-control" id="ad" onChange={addegistiginde} required />
                                </div>
                                <div className="col-6 form-group">
                                    <label htmlFor="email">E-Posta:</label>
                                    <input type="email" className="form-control" id="email" onChange={emaildegistiginde} required />
                                </div>
                            </div>
                            <div className="row justify-content-center py-3">
                                <div className="form-group">
                                    <label htmlFor="mesaj">Mesaj:</label>
                                    <textarea className="form-control" id="mesaj" placeholder="Mesajınızı girin." disabled={mesajDisabled}></textarea>
                                </div>
                            </div>
                            <button type="submit" className="w-auto btn btn-sm btn-outline-dark">Gönder</button>

                            <div className="row justify-content-center py-3">
                                <div className="form-group">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    );
}

export default Iletisim;
