"use client";
import Transaction from "@/app/dashboard/components/transaction";
import { Pagination } from "@/app/models/responses/pagination";
import { TransactionResponse } from "@/app/models/responses/transactionResponse";
import { api } from "@/app/services/api";
import { getTransactions } from "@/app/services/transactionsService";
import { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState<Pagination<TransactionResponse> | null>(null);
  
  useEffect(() => {
    listTransactions().then((transactions) => setTransactions(transactions));
  }, []);
  
  return (
    <section className="flex flex-col gap-4">
    <div className="flex p-4">
      <span className="w-[60%]">Name</span>
      <span className="w-[10%]">Type</span>
      <span className="w-[10%]">Amount</span>
      <span className="w-[10%]">Payment Method</span>
      <span className="w-[10%] text-center">Date</span>
    </div>
    {(transactions?.records.map((transaction, index) => <div key={index}> <Transaction transaction={transaction}/> </div> ))}

  </section>
  );
}

async function listTransactions(): Promise<Pagination<TransactionResponse>> {
  let data = await getTransactions(api)
  return data;
}