import Card from "@/app/dashboard/new-transaction/components/Card/card";

export default function NewTransaction() {  
  return (
    <div className="flex h-full items-center justify-center ">
        <div className="">
            <div className="border-b-2 border-zinc-900 p-2">
                <h1 className="text-2xl text-center font-bold">Payment</h1>
            </div>
            <div className="space-y-6 mt-4 w-[500px]">
                <div className="flex flex-col ">
                    <label htmlFor="payment-method">Pay With:</label>
                    <div className="flex gap-2 ">
                        <div>
                            <input type="radio" value="Credit" name="payment-method" /> Credit Card
                        </div>
                        <div>
                            <input type="radio" value="Debit" name="payment-method" /> Debit Card
                        </div>
                        <div>
                            <input type="radio" value="Boleto" name="payment-method" /> Boleto
                        </div>
                        <div>
                            <input type="radio" value="Pix" name="payment-method" /> Pix
                        </div>
                    </div>
                </div>
                <Card/>
                <button className="w-full transition inline-flex items-center justify-center space-x-1.5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Pagar
                </button>
            </div>
        </div>
    </div>
  );
}