import { UserAuthResponse } from "@/app/models/responses/userAuthResponse";
import { UserResponse } from "@/app/models/responses/userResponse";
import { api } from "@/app/services/api";

type SignInRequestData = {
  email: string;
  password: string;
};

const baseUrl = "http://localhost:5081/api/users/";

export async function signInRequest(
  data: SignInRequestData
): Promise<UserAuthResponse> {
  const response = await api.post(`${baseUrl}auth`, data);

  return response.data as UserAuthResponse;
}

export async function getUser(): Promise<UserResponse> {
  const response = await api.get(baseUrl);

  return response.data;
}
