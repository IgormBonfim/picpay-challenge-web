export default function TransactionLoading() {

  return (
    <>
        <div className="bg-white grid grid-cols-1 lg:grid-cols-8 gap-4 px-4 py-6 text-zinc-900 rounded">
            <div className="lg:flex items-center lg:col-span-2">
              <span className="lg:hidden font-bold">Name: </span>
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-6 bg-gray-300 rounded-full w-64"></div>
              </div>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Type: </span>
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-6 bg-gray-300 rounded-full w-28"></div>
              </div>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Status: </span>
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-6 bg-gray-300 rounded-full w-36"></div>
              </div>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Amount: </span>
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-6 bg-gray-300 rounded-full w-28"></div>
              </div>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Payment method: </span>
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-6 bg-gray-300 rounded-full w-32"></div>
              </div>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Date: </span>
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-6 bg-gray-300 rounded-full w-32"></div>
              </div>
            </div>
            <div>
              <button className="w-full bg-green-600 hover:bg-green-700 rounded px-4 py-2 text-white font-semibold">Details</button>
            </div>
        </div>
    </>
  );
}