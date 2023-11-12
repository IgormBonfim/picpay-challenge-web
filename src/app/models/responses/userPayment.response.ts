import { EnumValue } from "@/app/models/enumValue";
import { WalletResponse } from "@/app/models/responses/wallet.response";

export interface UserPaymentResponse {
    fullName: string;
    documentNumber: string;
    email: string;
    userType: EnumValue;
    wallet: WalletResponse;
}