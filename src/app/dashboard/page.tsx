import ButtonNewTransaction from "@/app/dashboard/components/buttonNewTransaction";
import { CashFlowRequest } from "@/app/models/requests/cashFlow.request";
import { CashFlowResponse } from "@/app/models/responses/cashFlowResponse";
import { UserPaymentResponse } from "@/app/models/responses/userPayment.response";
import { apiServer } from "@/app/services/apiServer";
import { getCashFlows } from "@/app/services/cashFlowsService";
import { getPaymentUser } from "@/app/services/userService";
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";
import moment from 'moment';

export default async function Dashboard() {

  let hoje = moment().format();

  let cashFlowRequest: CashFlowRequest = new CashFlowRequest({
    startDate: new Date(moment().add({months: -1}).format()),
    endDate: new Date(hoje)
  });

  let cashFlow: CashFlowResponse = await getCashFlows(apiServer, cashFlowRequest);
  let user: UserPaymentResponse = await getPaymentUser(apiServer);  
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start">
        <ButtonNewTransaction/>
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
            <p className="text-gray-200 text-3xl font-bold">{formatCurrency(user.wallet.balance)}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-gray-200 p-4 rounded">
          <div className="flex items-center justify-between">
            <p className="text-zinc-600 text-lg font-semibold">Income</p>
            <div className="text-green-500 rounded-full border border-green-500">
              <ArrowUp/>
            </div>
          </div>
          <div>
            <p className="text-green-500 text-3xl font-bold">{formatCurrency(cashFlow.income)}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-gray-200 p-4 rounded">
          <div className="flex items-center justify-between">
            <p className="text-zinc-600 text-lg font-semibold">Expense</p>
            <div className="text-zinc-900 rounded-full border border-zinc-900">
              <ArrowDown/>
            </div>
          </div>
          <div>
            <p className="text-zinc-900 text-3xl font-bold">{formatCurrency(cashFlow.expense)}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function formatCurrency(value): string {
  let formated = "";

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
  });

  formated = formatter.format(value);

  return formated;
}