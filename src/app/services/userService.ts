import { UserPaymentResponse } from "@/app/models/responses/userPayment.response";
import { AxiosInstance } from "axios";

const baseUrl = "http://localhost:5041/api/users"

export async function getPaymentUser(client: AxiosInstance): Promise<UserPaymentResponse> {
const response = await client.get(`${baseUrl}/wallet`);
    return response.data;
}