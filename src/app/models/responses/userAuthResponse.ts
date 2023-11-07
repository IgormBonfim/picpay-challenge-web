import { UserResponse } from "@/app/models/responses/userResponse";

export interface UserAuthResponse {
    token: string;
    user: UserResponse;
}