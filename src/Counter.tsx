import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(1);

    return <div className="flex items-center gap-2">
        <button onClick={() => setCount(Math.max(1, count - 1))}
            className="w-10 h-10 rounded-xl bg-red-600 text-white text-2xl flex items-center justify-center"
        > -
        </button>

        <div className="w-22 h-10 rounded-xl bg-[#222627] border border-[#393D3E] flex items-center justify-center">
            <p className="text-2xl text-white">{count}</p>
        </div>

        <button onClick={() => setCount(count + 1)}
            className="w-10 h-10 rounded-xl bg-[#82CC27] text-white text-2xl flex items-center justify-center"
        > +
        </button>
    </div>

}