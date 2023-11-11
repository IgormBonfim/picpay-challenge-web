import { TransactionResponse } from "@/app/models/responses/transactionResponse";

type TransactionProps = {
    transaction: TransactionResponse
}

export default function Transaction({ transaction }: TransactionProps) {

  return (
    <>
        <div className="flex flex-wrap bg-green-600 px-4 py-6 text-gray-200 rounded">
            <span className="w-[60%]">{ transaction?.reciever?.fullName }</span>
            <span className="w-[10%]">{ transaction.reciever.userType.description }</span>
            <span className="w-[10%]">{ formatCurrency(transaction.amount) }</span>
            <span className="w-[10%]">{ transaction.payment.paymentMethod.description }</span>
            <span className="w-[10%] text-center">{ new Date(transaction.transactionDate).toLocaleDateString('pt-BR') }</span>
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