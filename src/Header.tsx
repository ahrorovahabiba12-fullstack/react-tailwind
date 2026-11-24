export default function Header() {
    return <div className="flex h-[14 w-full items-center justify-between rounded-xl border border-[#2B3033] bg-[#1A1D1F] px-3 md:px-5">
        <div className="flex items-center gap-3 md:gap-4">
            <img className="w-19.5" src="/logo.svg" alt="logo" />
            <div className="h-7 w-px bg-[#34383A]" />
                <div className="flex items-center gap-2 text-sm text-white">
                    <p>O‘zbekcha</p>
                    <img src="arrow-down.svg" alt="icon" />
                </div>
            </div>
        <div className="hidden h-full items-center gap-8 text-xs text-white lg:flex">
            <p className="py-5">Asosiy</p>
            <p>Yangiliklar</p>
            <p>Kurslar</p>
            <p>Kutubxona</p>
            <p>Bog‘lanish</p>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
            <img className="h-5 w-5" src="/search2.svg" alt="search" />
            <img className="h-5 w-5" src="/savat.svg" alt="cart" />
            <img className="h-5 w-5" src="/notification.svg" alt="notification" />
            <div className="hidden h-6 w-px bg-[#3D4549] md:block" />
                <p className="hidden whitespace-nowrap text-xs md:block">Jasurbek Pulatov</p>
                <img className="h-7 w-7 rounded-full object-cover" src="/human.png" alt="avatar" />
        </div>
    </div>;
}
