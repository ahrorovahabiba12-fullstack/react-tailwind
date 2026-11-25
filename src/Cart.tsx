import Counter from "./Counter"

export default function Cart({ image, title, price, oldPrice }) {
    return <div className="relative flex flex-row items-center w-5xl h-44 bg-[#1A1D1F] rounded-xl border border-[#1F272A]">

        <div className="p-4">
            <div className="w-36 h-36 py-5.5 px-9 rounded-lg border border-[#FFFFFF]/8">
                <img className="w-17 h-25 rounded-sm" src={image} alt="image" />
            </div>
        </div>

        <div className="flex flex-col pt-6 pb-8.75">
            <div className="pb-8.5">
                <p className="w-150.5 text-[20px]">{title}</p>
            </div>

            <div className="w-50.75 h-15.5 gap-1">
                <p className="text-[24px] text-[#82CC27]">{price}</p>
                <p className="text-[16px] text-[#F7F9FA]/64 line-through decoration-red-500 decoration-1">{oldPrice}</p>
            </div>
        </div>

        <button className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1D1F] border border-[#263033]">
            <img className="w-5 h-5" src="/cancel.svg" alt="close" />
        </button>

        <div className="flex items-center ml-6 mt-12">
            <Counter />
        </div>

    </div>
}