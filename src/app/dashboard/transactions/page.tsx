"use client";
import ButtonNewTransaction from "@/app/dashboard/components/buttonNewTransaction";
import Transaction from "@/app/dashboard/components/transaction";
import TransactionLoading from "@/app/dashboard/components/transactionLoading";
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
      <div className="flex justify-start">
        <ButtonNewTransaction/>
      </div>
      <div className="p-4 hidden lg:grid grid-cols-1 lg:grid-cols-8 gap-4">
        <span className="lg:col-span-2">Name</span>
        <span className="text-center">Type</span>
        <span className="text-center">Status</span>
        <span className="text-center">Amount</span>
        <span className="text-center">Payment Method</span>
        <span className="text-center">Date</span>
        <span className="text-center">Actions</span>
      </div>
      {transactions ? 
        (transactions?.records.map((transaction, index) => <div key={index}> <Transaction transaction={transaction}/> </div> )) 
        : (
          <>
            <TransactionLoading/>
            <TransactionLoading/>
            <TransactionLoading/>
            <TransactionLoading/>
            <TransactionLoading/>
            <TransactionLoading/>
          </>
        ) }

    </section>
  );
}

async function listTransactions(): Promise<Pagination<TransactionResponse>> {
  let data = await getTransactions(api)
  return data;
}