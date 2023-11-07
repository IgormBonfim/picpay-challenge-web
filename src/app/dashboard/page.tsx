import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";
import Link from "next/link";
import { FaMoneyCheck } from "react-icons/fa6";

export default function Dashboard() {  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Link href={"/dashboard/new-transaction"}className="flex items-center gap-2 bg-green-600 hover:bg-green-700 rounded px-4 py-2">
          <span className="text-xl">
            <FaMoneyCheck />
          </span>
          New Transaction
        </Link>
      </div>
      <section className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="flex flex-col justify-between bg-green-500 p-4 rounded">
          <div className="flex justify-between">
            <p className="text-gray-200 text-lg font-semibold">Balance</p>
            <div className="text-gray-200 rounded-full">
              <DollarSign/>
            </div>
          </div>
          <div>
            <p className="text-gray-200 text-3xl font-bold">R$ 1000,00</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-gray-200 p-4 rounded">
          <div className="flex items-center justify-between">
            <p className="text-zinc-600 text-lg font-semibold">Entradas</p>
            <div className="text-green-500 rounded-full border border-green-500">
              <ArrowUp/>
            </div>
          </div>
          <div>
            <p className="text-green-500 text-3xl font-bold">R$ 1500,00</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-gray-200 p-4 rounded">
          <div className="flex items-center justify-between">
            <p className="text-zinc-600 text-lg font-semibold">Saídas</p>
            <div className="text-zinc-900 rounded-full border border-zinc-900">
              <ArrowDown/>
            </div>
          </div>
          <div>
            <p className="text-zinc-900 text-3xl font-bold">R$ 500,00</p>
          </div>
        </div>

      </section>
    </div>
  );
}