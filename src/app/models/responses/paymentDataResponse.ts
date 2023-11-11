import { EnumValue } from "@/app/models/enumValue";
import { BoletoPaymentResponse } from "@/app/models/responses/boletoPaymentResponse";
import { CardPaymentResponse } from "@/app/models/responses/cardPaymentResponse";
import { PixPaymentResponse } from "@/app/models/responses/pixPaymentResponse";

export interface PaymentDataResponse {
    id: number;
    paymentMethod: EnumValue;
    cardPayment?: CardPaymentResponse;
    pixPayment?: PixPaymentResponse;
    boletoPayment?: BoletoPaymentResponse;
}