import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";
import PaymentSummary from "./Payment";
import RightSidebar from "./RightSidebar";

export default function App() {
    return <div className="min-h-screen bg-[#111315] px-4 pt-5 text-white md:px-6">
        <Header />

        <div className="flex h-12 items-center gap-3 overflow-hidden pl-2 text-xs text-[#858B8F] md:pl-7">
            <img className="h-5 w-5 shrink-0" src="/home.svg" alt="icon" />
            <p className="shrink-0 text-sm text-[#6D7274]">Asosiy</p>
            <img className="h-2 w-2 shrink-0" src="/Frame.svg" alt="icon" />
            <p className="shrink-0 text-sm text-[#6D7274]">Savatcha</p>
        </div>

        <div className="flex felx-row">
            <div className="flex flex-col gap-5 p-7.75">
                <Cart image="image.png" title="Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani" price="155 000.00 uzs" oldPrice="205 000.00 uzs" />
                <Cart image="image 1.png" title="Shaxmatchilar klubi nishoni" price="2 000 000.00 uzs" oldPrice="2 500 000.00 uzs" />
                <Cart image="image 2.png" title="“Shox”lar uchun shox donasi ko‘rinishidagi nishon" price="525 250.00 uzs" oldPrice="600 000.00 uzs" />
            </div>

            <div className="flex flex-col gap-6">
                <RightSidebar />
                <PaymentSummary/>
            </div>
        </div>

        <Footer />
    </div>;
}
