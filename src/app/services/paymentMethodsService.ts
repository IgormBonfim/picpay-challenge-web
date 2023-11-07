import { AxiosInstance } from "axios";

const baseUrl = "http://localhost:5041/api/payment-methods"

export async function getPaymentMethods(client: AxiosInstance): Promise<any> {
    return client.get(baseUrl);
}