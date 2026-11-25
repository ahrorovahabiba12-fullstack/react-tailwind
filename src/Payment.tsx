export default function PaymentSummary() {
    return <div className="w-full bg-[#0B1418]/80 border border-[#1F272A] rounded-2xl">
        <div className="w-full px-4 pt-6 pb-3 flex flex-col gap-1.5">

            <div className="flex justify-between items-center gap-2">
                <p className="font-normal text-[16px]">To‘lov narxi:</p>
                <p className="font-normal text-[16px]">1 560 000.00 UZS</p>
            </div>

            <div className="flex justify-between items-center gap-2">
                <p className="font-normal text-[16px]">Chegirma:</p>
                <p className="font-normal text-[16px]">156 000.00 UZS (10%)</p>
            </div>

            <div className="flex justify-between items-center">
                <p className="font-normal text-[16px]">Kupon:</p>
                <p className="font-normal text-[16px]">0 UZS</p>
            </div>

            <div className="flex justify-between items-center">
                <p className="font-normal text-[16px]">Yetkazib berish</p>
                <p className="font-normal text-[16px]">0 UZS</p>
            </div>

        </div>

        <div className="border-t border-[#1D2529]" />

        <div className="px-4 py-5">
            <div className="flex justify-between items-center gap-2">
                <p className="font-bold text-[20px]">Jami:</p>
                <p className="font-bold text-[20px] whitespace-nowrap">1 404 000.00 UZS</p>
            </div>
        </div>

        <div className="border-t border-[#1D2529]" />

        <div className="p-4">
            <p className="font-bold text-[16px] text-[#F7F9FA] mb-2">Kupon</p>

            <input className="w-full h-11 bg-[#13181C] border border-[#454F54] rounded-xl text-[#F7F9FA] font-medium text-[14px] pl-3 outline-none placeholder:text-[#454F54]" type="text" placeholder="Kupondagi kodni kiriting"/>

            <button className="w-full h-12.5 bg-[#1C92E0] rounded-lg flex flex-row items-center justify-center gap-2.5 mt-2">
                <img className="w-6 h-6" src="/money.svg" alt="icon" />
                <p className="font-medium text-[20px] text-white">Rasmiylashtirish</p>
            </button>
        </div>
    </div>
}
