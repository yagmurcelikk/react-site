import React, { useEffect, useState } from "react";
import { dokumanbuton } from "./Layout";



function Dokuman() {

    // STATELER
    const [pasaport, setPasaport] = useState("");
    const [cv, setCv] = useState("");
    const [niyetmektubu, setNiyetmektubu] = useState("");
    const [ikametgah, setIkametgah] = useState("");
    const [diploma, setDiploma] = useState("");
    const [dilyeterlilik, setDilyeterlilik] = useState("");

    // pasaport dosyası seçildiğinde
    const handlePasaportChange = (event) => {
        setPasaport(event.target.value);
    };

    // cv dosyası seçildiğinde
    const handleCvChange = (event) => {
        setCv(event.target.value);
    };

    // niyetmektubu dosyası seçildiğinde
    const handleNiyetmektubuChange = (event) => {
        setNiyetmektubu(event.target.value);
    };

    // ikametgah dosyası seçildiğinde
    const handleIkametgahChange = (event) => {
        setIkametgah(event.target.value);
    };

    // diploma dosyası seçildiğinde
    const handleDiplomaChange = (event) => {
        setDiploma(event.target.value);
    };

    // dilyeterlilik dosyası seçildiğinde
    const handleDilyeterlilikChange = (event) => {
        setDilyeterlilik(event.target.value);
    };

    const silbuton = (id) => {
        var dokumanData = JSON.parse(sessionStorage.getItem("dokumanData"));
        const updatedData = { ...dokumanData };
        delete updatedData[id];
        sessionStorage.setItem("dokumanData", JSON.stringify(updatedData));

        setPasaport(updatedData.pasaport || "");
        setCv(updatedData.cv || "");
        setNiyetmektubu(updatedData.niyetmektubu || "");
        setIkametgah(updatedData.ikametgah || "");
        setDiploma(updatedData.diploma || "");
        setDilyeterlilik(updatedData.dilyeterlilik || "");

        bilgi_yazdir();
    };

    useEffect(() => {
        const dokumanData = JSON.parse(sessionStorage.getItem("dokumanData"));

        if (dokumanData) {
            setPasaport(dokumanData.pasaport || "");
            setCv(dokumanData.cv || "");
            setNiyetmektubu(dokumanData.niyetmektubu || "");
            setIkametgah(dokumanData.ikametgah || "");
            setDiploma(dokumanData.diploma || "");
            setDilyeterlilik(dokumanData.dilyeterlilik || "");
        }

    }, []);

    const bilgi_yazdir = () => {
        const dokumanData = JSON.parse(sessionStorage.getItem("dokumanData"));
        let sonuc = "";

        if (dokumanData) {
            if (dokumanData.pasaport) {
                sonuc += "<b>Pasaport</b>: <i>" + dokumanData.pasaport + "</i><br/>";
            }
            if (dokumanData.cv) {
                sonuc += "<b>Özgeçmiş</b>: <i>" + dokumanData.cv + "</i><br/>";
            }
            if (dokumanData.niyetmektubu) {
                sonuc += "<b>Niyet Mektubu</b>: <i>" + dokumanData.niyetmektubu + "</i><br/>";
            }
            if (dokumanData.ikametgah) {
                sonuc += "<b>İkametgah</b>: <i>" + dokumanData.ikametgah + "</i><br/>";
            }
            if (dokumanData.diploma) {
                sonuc += "<b>Diploma</b>: <i>" + dokumanData.diploma + "</i><br/>";
            }
            if (dokumanData.dilyeterlilik) {
                sonuc += "<b>Yabancı Dil Yeterlilik Belgesi</b>: <i>" + dokumanData.dilyeterlilik + "</i><br/>";
            }
        }

        if (sonuc) {
            document.getElementById("sonuc").innerHTML = sonuc;
        }
        else {
            document.getElementById("sonuc").innerHTML = "<b><i>Bütün belgeler silinmiştir.</i></b>";

        }
    };
    useEffect(() => {
        const dokumanData = JSON.parse(sessionStorage.getItem("dokumanData"));
        if (dokumanData) {
            bilgi_yazdir();
        }

        dokumanbuton();

    }, [])

    // FORM GÖNDERME
    const dokuman_form = (e) => {
        e.preventDefault();

        var dokumandizi = {};

        if (pasaport) {
            dokumandizi.pasaport = "Pasaport: " + pasaport;
        }
        if (cv) {
            dokumandizi.cv = "CV: " + cv;
        }
        if (niyetmektubu) {
            dokumandizi.niyetmektubu = "Niyet Mektubu: " + niyetmektubu;
        }
        if (ikametgah) {
            dokumandizi.ikametgah = "Ikametgah: " + ikametgah;
        }
        if (diploma) {
            dokumandizi.diploma = "Diploma: " + diploma;
        }
        if (dilyeterlilik) {
            dokumandizi.dilyeterlilik = "Dil Belgesi: " + dilyeterlilik;
        }

        sessionStorage.setItem("dokumanData", JSON.stringify(dokumandizi));
        bilgi_yazdir();
        dokumanbuton();
    };


    return (
        <>
            <div className="container" style={{ marginBottom: '20px', marginTop: '20px' }}>


                <div className="row justify-content-center">

                    <div className="col-8 my-3">

                        <div className="row justify-content-center">
                            <div className=" col mb-3">
                                <h5><i><b>Lütfen Dosyalarınızı yükleyin.</b></i></h5>
                            </div>


                        </div>

                        <div className="row justify-content-center">
                            <div className=" col-4 mb-3">
                                <span for="pasaport" className="form-label">Pasaport</span>
                            </div>
                            <div className="col-4 mb-3">
                                <input className="form-control form-control-sm" onChange={handlePasaportChange} type="file" id="pasaport" name="pasaport" multiple />
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={dokuman_form} className="w-100 btn btn-sm btn-outline-dark">Gönder</button>
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={() => silbuton("pasaport")} className="w-100 btn btn-sm btn-outline-dark">Sil</button>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className=" col-4 mb-3">
                                <span for="cv" className="form-label">Özgeçmiş</span>
                            </div>
                            <div className="col-4 mb-3">
                                <input className="form-control form-control-sm" onChange={handleCvChange} type="file" id="cv" name="cv" multiple />
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={dokuman_form} className="w-100 btn btn-sm btn-outline-dark">Gönder</button>
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={() => silbuton("cv")} className="w-100 btn btn-sm btn-outline-dark">Sil</button>
                            </div>

                        </div>

                        <div className="row justify-content-center">
                            <div className=" col-4 mb-3">
                                <span for="niyetmektubu" className="form-label">Niyet Mektubu</span>
                            </div>
                            <div className="col-4 mb-3">
                                <input className="form-control form-control-sm" onChange={handleNiyetmektubuChange} type="file" id="niyetmektubu" name="niyetmektubu" multiple />
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={dokuman_form} className="w-100 btn btn-sm btn-outline-dark">Gönder</button>
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={() => silbuton("niyetmektubu")} className="w-100 btn btn-sm btn-outline-dark">Sil</button>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className=" col-4 mb-3">
                                <span for="ikametgah" className="form-label">İkametgah</span>
                            </div>
                            <div className="col-4 mb-3">
                                <input className="form-control form-control-sm" onChange={handleIkametgahChange} type="file" id="ikametgah" name="ikametgah" multiple />
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={dokuman_form} className="w-100 btn btn-sm btn-outline-dark">Gönder</button>
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={() => silbuton("ikametgah")} className="w-100 btn btn-sm btn-outline-dark">Sil</button>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className=" col-4 mb-3">
                                <span for="diploma" className="form-label">Diploma</span>
                            </div>
                            <div className="col-4 mb-3">
                                <input className="form-control form-control-sm" onChange={handleDiplomaChange} type="file" id="diploma" name="diploma" multiple />
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={dokuman_form} className="w-100 btn btn-sm btn-outline-dark">Gönder</button>
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={() => silbuton("diploma")} className="w-100 btn btn-sm btn-outline-dark">Sil</button>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className=" col-4 mb-3">
                                <span for="dilyeterlilik" className="form-label">Yabancı Dil Yeterlilik Belgesi</span>
                            </div>
                            <div className="col-4 mb-3">
                                <input className="form-control form-control-sm" onChange={handleDilyeterlilikChange} type="file" id="dilyeterlilik" name="dilyeterlilik" multiple />
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={dokuman_form} className="w-100 btn btn-sm btn-outline-dark">Gönder</button>
                            </div>
                            <div className="col-2 bm-3">
                                <button type="button" onClick={() => silbuton("dilyeterlilik")} className="w-100 btn btn-sm btn-outline-dark">Sil</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-4  py-5">
                        <div className="row">
                            <div className="col mx-5" id="sonuc"></div>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    );


} export default Dokuman;