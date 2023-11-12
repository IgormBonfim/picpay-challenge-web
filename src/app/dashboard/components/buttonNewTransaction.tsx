import Link from "next/link";
import { FaMoneyCheck } from "react-icons/fa6";

export default function ButtonNewTransaction() {

  return (
    <>
        <Link href={"/dashboard/new-transaction"}className="flex items-center gap-2 bg-green-600 hover:bg-green-700 w-full md:w-auto rounded px-4 py-2">
            <span className="text-xl">
                <FaMoneyCheck />
            </span>
            New Transaction
        </Link>
    </>
  );
}
