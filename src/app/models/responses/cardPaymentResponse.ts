import { EnumValue } from "@/app/models/enumValue";

export interface CardPaymentResponse {
    id: number;
    chargeId: string;
    cardPaymentMethod: EnumValue;
    amount: number;
    installments: number;
}