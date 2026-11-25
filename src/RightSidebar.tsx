export default function RightSidebar() {
    return <div className="w-full shrink-0 lg:w-[59">
        <div className="h-34.5 overflow-hidden rounded-lg bg-[#0B4789] px-3 py-2.5">
            <div className="flex items-center gap-2">
                <img className="h-5 w-5" src="/green.svg" alt="icon" />
                <p className="text-[10px] font-semibold text-white">Yoshlar<br />portali</p>
            </div>
            <h2 className="my-2 text-[15px] font-bold leading-tight text-white">Aynan siz uchun qanday imtiyozlar borligini bilib oling</h2>
            <div className="flex h-8 w-27 items-center justify-center gap-2 rounded-md bg-[#1C92E0] text-xs font-medium">
                <p className="text-white">Batafsil</p>
                <img className="h-4 w-4" src="/arrow-forward.svg" alt="icon" />
            </div>
        </div>
    </div>;
}
