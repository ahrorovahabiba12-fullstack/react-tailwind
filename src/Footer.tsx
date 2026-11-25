export default function Footer() {
    return <div className="-mx-4 mt-10 bg-[#1A1D1F] text-white md:-mx-6">
        <div className="flex min-h-28.75 flex-col items-center justify-center gap-2 px-3 py-5">
            <img src="/logo.svg" alt="logo" className="w-[95px]" />
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
                <p className="text-xs">Biz haqimizda</p>
                <p className="text-xs">Cookie fayllari siyosati</p>
                <p className="text-xs">Foydalanish qoidalari</p>
                <p className="text-xs">Cookie fayllari siyosati</p>
            </div><div className="flex items-center gap-3">
                <img className="h-4 w-4" src="/instagram.svg" alt="icon" />
                <img className="h-4 w-4" src="/telegram.svg" alt="icon" />
                <img className="h-4 w-4" src="/youtube.svg" alt="icon" />
                <img className="h-4 w-4" src="/twitter.svg" alt="icon" />
                <img className="h-4 w-4" src="/facebook.svg" alt="icon" />
            </div>
        </div>
        <div className="flex min-h-9 items-center justify-between gap-2 border-t border-[#303436] px-4 py-3 text-xs md:px-6">
            <p>© UzChess. All rights reserved.</p>
            <img className="hidden h-4.5 w-8.25 md:block" src="/Group.svg" alt="icon" />
            <p>Foydalanish qoidalari</p>
        </div>
    </div>;
}
