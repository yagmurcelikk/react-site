import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dokumanbuton } from "./Layout";

const Basvur = () => {

    // Formun önceki halindeki verileri saklamak için bir state tanımladım
    const [formData, setFormData] = useState({
        isiminput: "",
        soyisiminput: "",
        tcinput: "",
        dtarihinput: "",
        cinsiyetinput: "",
        uyrukinput: "",
        ikinciuyruk: "",
        uaciklama: "",
        engel: "",
        engelDurumu: "",
        aciklama: "",
        telefoninput: "",
        emailinput: "",
        adresinput: "",
        sehirinput: "",
        ulkeinput: "",
        mduruminput: "",
        uniinput: "",
        boluminput: "",
        mtarihinput: "",
        gpainput: ""
    });

    // Form gönderildiğinde session storage'a verileri kaydedildi
    const navigate = useNavigate();
    const basvuru_formu = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        sessionStorage.setItem("formData", JSON.stringify(data));
        navigate("/");
        dokumanbuton();

    };

    // Form açıldığında önceki verileri al
    useEffect(() => {
        const oncekiFormData = sessionStorage.getItem("formData");
        if (oncekiFormData) {
            setFormData(JSON.parse(oncekiFormData));

            const mezuniyetSecim = document.getElementById("mezuniyetsecim");
            if (JSON.parse(oncekiFormData).mduruminput == "1") {
                mezuniyetSecim.textContent = "Bir önceki seçiminiz: Lisans"
            }
            else if (JSON.parse(oncekiFormData).mduruminput == "2") {
                mezuniyetSecim.textContent = "Bir önceki seçiminiz: Yükseklisans"
            }
            else if (JSON.parse(oncekiFormData).mduruminput == "3") {
                mezuniyetSecim.textContent = "Bir önceki seçiminiz: Doktora"
            };

            const engelSecim = document.getElementById("engelsecim");
            if (JSON.parse(oncekiFormData).aciklama) {
                engelSecim.textContent = "Bir önceki seçiminiz: Var"
            } else {
                engelSecim.textContent = "Bir önceki seçiminiz: Yok"
            }


            const uyrukSecim = document.getElementById("uyruksecim");
            if (JSON.parse(oncekiFormData).uaciklama) {
                uyrukSecim.textContent = "Bir önceki seçiminiz: Var"
            } else {
                uyrukSecim.textContent = "Bir önceki seçiminiz: Yok"
            }




        }
        dokumanbuton()
    }, [dokumanbuton]);

    //ENGEL VE UYRUK ACIKLAMASI
    const [ikinciUyruk, setIkinciUyruk] = useState(false);
    const [engelDurumu, setEngelDurumu] = useState(false);
    useEffect(() => {
        const uaciklamaInput = document.getElementById("uaciklama");
        const aciklamaInput = document.getElementById("aciklama");

        if (ikinciUyruk) {
            uaciklamaInput.disabled = false;
        } else {
            uaciklamaInput.disabled = true;
        }

        if (engelDurumu) {
            aciklamaInput.disabled = false;
        } else {
            aciklamaInput.disabled = true;
        }
    }, [ikinciUyruk, engelDurumu]);

    return (
        <>
            <div className="container" style={{marginBottom:'20px', marginTop:'20px'}}>


                <div className="row">
                    <div className="col-12 my-3 ">
                        <h3 className="text-center">Başvuru Formu</h3>
                    </div>
                </div>

                <form id="basvuru_formu" onSubmit={basvuru_formu} >
                    <div className="row justify-content-center">

                        <div className="col-4" style={{ borderRight: "2px solid red" }}>
                            <div className="row justify-content-center">
                                <div className="col-12 py-2">
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6 py-2">
                                    <h3>Kişisel Bilgiler</h3>
                                </div>
                            </div>

                            <div className="row justify-content-center">{/*İSİM/SOYİSİM*/}
                                <div className="col-6 form-group">
                                    <label for="isim" className="col-form-label">İsim:</label>
                                    <input type="text" id="isiminput" name="isiminput" defaultValue={formData.isiminput} className="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                                <div className="col-6 form-group">
                                    <label for="soyisim" className="col-form-label">Soyisim:</label>
                                    <input type="text" id="soyisiminput" name="soyisiminput" defaultValue={formData.soyisiminput} className="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>

                            <div className="row justify-content-center">{/*TC/DTARİH*/}
                                <div className="col-6 form-group">
                                    <label for="tc" class="col-form-label">T.C. Kimlik / Pasaport No:</label>
                                    <input type="text" id="tcinput" name="tcinput" defaultValue={formData.tcinput} className="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                                <div className="col-6 form-group">
                                    <label for="dtarih" className="col-form-label ">Doğum Tarihi:</label>
                                    <input type="date" id="dtarihinput" name="dtarihinput" defaultValue={formData.dtarihinput} className="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>

                            <div className="row justify-content-center">{/*CİNSİYET/UYRUK*/}
                                <div className="col-6 form-group">
                                    <label for="cinsiyet" className="col-form-label">Cinsiyet:</label>
                                    <input type="text" id="cinsiyetinput" name="cinsiyetinput" defaultValue={formData.cinsiyetinput} className="form-control form-control-sm"
                                        required />
                                    <div className="valid-feedback"></div>
                                </div>
                                <div className="col-6 form-group">
                                    <label for="uyruk" className="col-form-label">Uyruk:</label>
                                    <input type="text" id="uyrukinput" name="uyrukinput" defaultValue={formData.uyrukinput} className="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>

                            <div className="row justify-content-center">{/*2.uyruk*/}

                                <div className="row">
                                    <div className="col-auto py-3">
                                        <span>İkinci bir uyruğunuz var mı?</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3 py-3 form-check form-group">

                                        <input type="radio" class="form-check-input" id="uvar" name="ikinciuyruk" defaultValue={formData.ikinciuyruk}
                                            onChange={() => setIkinciUyruk(true)} required />
                                        <label className="form-check-label" for="validationFormCheck2">var</label>

                                    </div>

                                    <div className="col-3 py-3 form-check mb-3 form-group">
                                        <input type="radio" className="form-check-input" id="uyok" name="ikinciuyruk" defaultValue={formData.ikinciuyruk}
                                            onChange={() => setIkinciUyruk(false)} required />
                                        <label className="form-check-label" for="validationFormCheck3">yok</label>
                                        <div className="invalid-feedback"></div>

                                    </div>

                                    <div className="col-6 form-group">
                                        <label for="uaciklama" className="col-form-label">Açıklama:</label>

                                        <input type="text" id="uaciklama" name="uaciklama" placeholder="Var ise nedir?" defaultValue={formData.uaciklama}
                                            className="form-control form-control-sm" required disabled />
                                        <div className="valid-feedback"></div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-auto">
                                        <i><p id="uyruksecim"></p></i>
                                    </div>
                                </div>

                            </div>


                            <div className="row justify-content-center">{/*ENGEL/AÇIKLAMA*/}

                                <div className="row">
                                    <div className="col-auto py-md-3">
                                        <span>Engel Durumu:</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3 py-3 form-check form-group">

                                        <input type="radio" className="form-check-input" id="evar" name="engel" defaultValue={formData.engelDurumu} onChange={() => setEngelDurumu(true)}
                                            required />
                                        <label className="form-check-label" for="validationFormCheck2">var</label>

                                    </div>

                                    <div className="col-3 py-3 form-check mb-3 form-group">
                                        <input type="radio" class="form-check-input" id="eyok" name="engel" defaultValue={formData.engelDurumu}
                                            onChange={() => setEngelDurumu(false)} required />
                                        <label className="form-check-label" for="validationFormCheck3">yok</label>
                                        <div className="invalid-feedback"></div>
                                    </div>

                                    <div class="col-6 form-group">
                                        <label for="aciklama" class="col-form-label">Açıklama:</label>

                                        <input type="text" id="aciklama" name="aciklama" placeholder="Var ise nedir?Açıklayınız." defaultValue={formData.aciklama}
                                            class="form-control form-control-sm" required disabled />
                                        <div class="valid-feedback"></div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-auto">
                                        <i><p id="engelsecim"></p></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4" style={{ borderRight: "2px solid red" }}>

                            <div className="row justify-content-center b">
                                <div className="col-12 py-2">
                                </div>
                            </div>

                            <div className="row justify-content-center ">
                                <div className="col py-2" style={{paddingLeft:"120px"}}>
                                    <h3>İletişim Bilgileri</h3>
                                </div>
                            </div>

                            <div className="row justify-content-center">{/*TELEFON*/}
                                <div className="col-6 form-group">
                                    <label for="telefon" className="col-form-label">Telefon:</label>
                                    <input type="number" id="telefoninput" name="telefoninput" defaultValue={formData.telefoninput} className="form-control form-control-sm"
                                        required />
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>
                            <div className="row justify-content-center">{/*EMAİL*/}
                                <div className="col-6 form-group">
                                    <label for="mail" className="col-form-label">E-mail:</label>
                                    <input type="email" id="emailinput" name="emailinput" defaultValue={formData.emailinput} className="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>




                            <div className="row justify-content-center">{/*ADRES*/}
                                <div className="col-6 form-group">
                                    <label for="adres" className="col-form-label">Adres:</label>
                                    <textarea id="adresinput" name="adresinput" defaultValue={formData.adresinput} rows="1" className="form-control form-control-sm"
                                        placeholder="Cadde,Sokak,Apt..." required></textarea>
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>
                            <div className="row justify-content-center">{/*SEHİR*/}
                                <div className="col-6 form-group">
                                    <label for="sehir" className="col-form-label">Şehir:</label>
                                    <input type="text" id="sehirinput" name="sehirinput" defaultValue={formData.sehirinput} className="form-control form-control-sm" required />
                                    <div class="valid-feedback"></div>
                                </div>
                            </div>
                            <div className="row justify-content-center">{/*Ulke*/}
                                <div className="col-6 form-group">
                                    <label for="ulke" className="col-form-label">Ülke:</label>
                                    <input type="text" id="ulkeinput" name="ulkeinput" defaultValue={formData.ulkeinput} className="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>

                        </div>

                        <div className="col-4">
                            <div className="row justify-content-center">
                                <div className="col-12 py-2">
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-6 py-2">
                                    <h3>Eğitim Bilgileri</h3>
                                </div>
                            </div>

                            <div className="row justify-content-center">{/*MDURUM/ÜNİ*/}
                                <div className="col-6 form-group px-4">
                                    <label for="mdurum" className="col-form-label">Mezuniyet Durumu:</label>
                                    <select className="form-select form-select-m mb-3" aria-label="select example" id="mduruminput" name="mduruminput" defaultValue={formData.mduruminput}
                                        required>
                                        <option value="">Seç</option>
                                        <option value="1">Lisans</option>
                                        <option value="2">Yükseklisans</option>
                                        <option value="3">Doktora</option>

                                    </select>
                                    <div className="valid-feedback"></div>
                                    
                                </div>

                                <div className="col-6 form-group px-4">
                                    <label for="uni" className="col-form-label">Üniversite:</label>
                                    <input type="text" id="uniinput" name="uniinput" defaultValue={formData.uniinput} className="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto px-4">
                                    <i><p id="mezuniyetsecim"></p></i>
                                </div>
                            </div>

                            <div className="row justify-content-center"> {/*BÖLÜM*/}
                                <div className="col-6 form-group px-4">
                                    <label for="inputName" className="col-form-label">Bölüm:</label>
                                    <input type="text" id="boluminput" name="boluminput" defaultValue={formData.boluminput} class="form-control form-control-sm" required />
                                    <div className="valid-feedback"></div>
                                </div>
                                <div className="col-6 form-group px-4">
                                    <label for="inputName" className="col-form-label ">Mezuniyet Tarihi:</label>
                                    <input type="date" id="mtarihinput" name="mtarihinput" defaultValue={formData.mtarihinput} className="form-control form-control-sm" required />
                                    <span><i style={{ fontSize: "smaller;" }}>Devam ediyor ise tahmini mezuniyet tarihinizi
                                        giriniz.</i></span>
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>

                            <div className="row justify-content-center"> {/*GPA*/}
                                <div className="col-6 form-group px-4">
                                    <label for="inputName" className="col-form-label">GPA:</label>
                                    <input type="number" step="0.05" id="gpainput" name="gpainput" defaultValue={formData.gpainput} className="form-control form-control-sm"
                                        required />
                                    <div className="valid-feedback"></div>
                                </div>
                            </div>



                            <div className="row justify-content-center py-5" style={{ alignSelf: "center;" }}>
                                <div className="col-6 px-4">
                                    <button type="submit" className="w-100 btn btn-sm btn-outline-dark">Gönder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form >

            </div >

        </>
    );
};
export default Basvur;