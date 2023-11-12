import { TransactionResponse } from "@/app/models/responses/transactionResponse";

type TransactionProps = {
    transaction: TransactionResponse
}

export default function Transaction({ transaction }: TransactionProps) {

  return (
    <>
        {/* <div className="flex flex-wrap bg-green-600 px-4 py-6 text-gray-200 rounded">
            <span className="w-[60%]">{ transaction?.reciever?.fullName }</span>
            <span className="w-[10%]">{ transaction.reciever.userType.description }</span>
            <span className="w-[10%]">{ formatCurrency(transaction.amount) }</span>
            <span className="w-[10%]">{ transaction.payment.paymentMethod.description }</span>
            <span className="w-[10%] text-center">{ new Date(transaction.transactionDate).toLocaleDateString('pt-BR') }</span>
        </div> */}
        <div className="bg-white hover:bg-zinc-100 grid grid-cols-1 lg:grid-cols-8 gap-4 px-4 py-6 text-zinc-900 rounded">
            <div className="lg:flex items-center lg:col-span-2">
              <span className="lg:hidden font-bold">Name: </span>
              <span >{ transaction?.reciever?.fullName }</span>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Type: </span>
              <span className="">{ transaction.reciever.userType.description }</span>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Status: </span>
              <span className="bg-orange-100 px-4 py-2 rounded">Waiting payment</span>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Amount: </span>
              <span className="">{ formatCurrency(transaction.amount) }</span>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Payment method: </span>
              <span className="">{ transaction.payment.paymentMethod.description }</span>
            </div>
            <div className="lg:flex items-center justify-center">
              <span className="lg:hidden font-bold">Date: </span>
              <span>{ new Date(transaction.transactionDate).toLocaleDateString('pt-BR') }</span>
            </div>
            <div>
              <button className="w-full bg-green-600 hover:bg-green-700 rounded px-4 py-2 text-white font-semibold">Details</button>
            </div>
        </div>
    </>
  );
}

function formatCurrency(value): string {
  let formated = "";

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  formated = formatter.format(value);

  return formated;
}