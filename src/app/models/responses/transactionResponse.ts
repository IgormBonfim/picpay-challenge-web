import { PaymentDataResponse } from "@/app/models/responses/paymentDataResponse";
import { UserTransactionResponse } from "@/app/models/responses/userTransactionResponse";

export interface TransactionResponse {
    id: number;
    sender: UserTransactionResponse;
    reciever: UserTransactionResponse;
    amount: number;
    payment: PaymentDataResponse;
    transactionDate: Date;
}