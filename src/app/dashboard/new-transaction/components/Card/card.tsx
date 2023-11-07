export default function Card() {
    return (
        <div>
            <div className="flex flex-col gap-2 w-full max-w-full">
                <label htmlFor="card">Card Number</label>
                <input type="text" className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-full">
                <label htmlFor="card">Holder Name</label>
                <input type="text" className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="flex gap-2 w-full max-w-full">
                <div className="flex flex-col gap-2">
                    <label htmlFor="card">Expiration Date</label>
                    <input type="text" className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="card">CVV</label>
                    <input type="text" className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"/>
                </div>
            </div>
        </div>
    );
  }