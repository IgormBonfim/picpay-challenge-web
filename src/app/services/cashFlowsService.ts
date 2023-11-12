import { CashFlowResponse } from "@/app/models/responses/cashFlowResponse";
import { AxiosInstance } from "axios";
import { CashFlowRequest } from "@/app/models/requests/cashFlow.request";

const baseUrl = "http://localhost:5041/api/cash-flows"

export async function getCashFlows(client: AxiosInstance, request: CashFlowRequest): Promise<CashFlowResponse> {
    const response = await client.get(baseUrl, { params: request });
    return response.data;
}