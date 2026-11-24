import Footer from "./Footer";
import Header from "./Header";
import CourseHeader from "./CourseHeader";
import RightSidebar from "./RightSidebar";

type Review = {
    name: string;
    date: string;
    stars?: string;
};

const reviews: Review[] = [
    { name: "Jasurbek Narzullayev", date: "7 Sentyabr 2022 y. 19:52", stars: "★★★★☆" },
    { name: "Muhammadamin Domlahonov", date: "7 Sentyabr 2022 y. 19:52", stars: "★★★☆☆" },
    { name: "Shoxruh Baxtiyorov", date: "7 Sentyabr 2022 y. 19:52", stars: "★★★★★" },
    { name: "Jasurbek Narzullayev", date: "7 Sentyabr 2022 y. 19:52", stars: "★★★★☆" }
];

export default function App() {
    return <div className="min-h-screen bg-[#111315] px-4 pt-5 text-white md:px-6">
        <Header />
        <div className="flex h-12 items-center gap-3 overflow-hidden pl-2 text-xs text-[#858B8F] md:pl-7">
            <img className="h-5 w-5 shrink-0" src="/home.svg" alt="icon" />
            <p className="shrink-0 text-sm text-[#6D7274]">Asosiy</p>
            <img className="h-2 w-2 shrink-0" src="/Frame.svg" alt="icon" />
            <p className="shrink-0 text-sm text-[#6D7274]">O‘rganish</p>
            <img className="h-2 w-2 shrink-0" src="/Frame.svg" alt="icon" />
            <p className="truncate text-sm text-white">Shaxmat donalari bilan tanishuv</p>
        </div>

        <CourseHeader />

        <div className="mt-8 flex flex-col items-start gap-6 lg:mt-12 lg:flex-row">
            <div className="min-w-0 w-full flex-1">
                <div className="overflow-hidden rounded-lg border border-[#25292C] bg-[#1A1D1F]">
                    <div className="flex h-14.5 items-center justify-between bg-[#202426] px-5"><h2 className="text-lg font-bold">1. Asosiy donalar</h2><p className="text-2xl">⌃</p></div>
                    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3">
                        <div>
                            <img className="h-38.25 w-78 rounded-md border border-[#344047] object-cover" src="/lesson-1.png" alt="image" />
                            <p className="mt-2 text-sm">1.1 Kirish</p>
                        </div>
                        <div>
                            <img className="h-38.25 w-78 rounded-md border border-[#344047] object-cover" src="lesson-2.png" alt="image" />
                            <p className="mt-2 text-sm">1.2 Mot qilish</p>
                        </div>
                        <div>
                            <img className="h-38.25 w-78 rounded-md border border-[#344047] object-cover" src="lesson-3.png" alt="image" />
                            <p className="mt-2 text-sm">1.3 Piyoda bilan tanishuv</p>
                        </div>
                    </div>
                    <div className="flex min-h-12 items-center justify-between border-t border-[#303436] px-4">
                        <h2 className="font-bold">2. Eng ko‘p foydalaniladigan donalar</h2>
                        <img src="arrow-down.svg" alt="icon" />
                    </div>
                    <div className="flex min-h-12 items-center justify-between border-t border-[#303436] px-4">
                        <h2 className="font-bold">3. Mot qilish oson bo‘lgan donalar</h2>
                        <img src="arrow-down.svg" alt="icon" />
                    </div>
                </div>

                <h2 className="mb-3 mt-11 text-xl font-bold">Kurs haqida izohlar</h2>

                <div className="overflow-hidden rounded-xl border border-[#25292C] bg-[#1A1D1F]">
                    {reviews.map((review, index) => <div key={index} className="border-b border-[#303436] px-4 py-4 last:border-b-0">
                        <div className="mb-3 flex items-center gap-2">
                            <img className="h-9 w-9 rounded-full object-cover" src="/human.png" alt="Foydalanuvchi" />
                            <div className="min-w-0">
                                <p className="font-medium">{review.name}</p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <p className="text-xs text-[#858B8F]">{review.date}</p>
                                    <p className="text-sm tracking-widest text-[#E8B82E]">{review.stars}</p>
                                </div>
                            </div>
                            <p className="ml-auto text-xl text-[#858B8F]">⋮</p>
                        </div>
                        <p className="text-[13px] leading-[1.45] text-[#D0D2D3]">2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o‘yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g‘alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karlsen va Karuana 12-o‘yinni o‘tkazishadi. Oq qismlarni amerikalik boshqaradi.</p>
                    </div>)}
                </div>
                <div className="flex justify-center py-5">
                    <button className="rounded-md bg-[#292D30] px-7 py-2 text-sm text-[#D4D6D7]">
                        Barcha izohlar
                    </button>
                </div>

            </div>

            <RightSidebar />

        </div>

        <Footer />
    </div>;
}
