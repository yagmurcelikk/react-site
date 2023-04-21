import { BrowserRouter, Routes, Route } from "react-router-dom";

import Anasayfa from "./Anasayfa";
import Iletisim from "./Iletisim";
import Hakkinda from "./Hakkinda";
import Layout from './Layout';
import NoPage from "./NoPage";
import Basvur from "./Basvur";
import Dokuman from "./Dokuman";
import Kullanici_gncl from "./Kullanici_gncl";


export default function Router() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Anasayfa/>} />
                    <Route path="Iletisim" element={<Iletisim />} />
                    <Route path="Hakkinda" element={<Hakkinda />} />
                    <Route path="Basvur" element={<Basvur />} />
                    <Route path="Dokuman" element={<Dokuman />} />
                    <Route path="Kullanici_gncl" element={<Kullanici_gncl />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}