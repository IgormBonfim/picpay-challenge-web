import { Pagination } from "@/app/models/responses/pagination";
import { TransactionResponse } from "@/app/models/responses/transactionResponse";
import { AxiosInstance } from "axios";

const baseUrl = "http://localhost:5041/api/transactions"

export async function getTransactions(client: AxiosInstance): Promise<Pagination<TransactionResponse>> {
    const response = await client.get(baseUrl);
    return response.data;
}