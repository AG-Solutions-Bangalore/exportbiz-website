import axiosInstance from "../../../api/axiosInstance";

export interface CreateEnquiryPayload {
  full_name: string;
  mobile_no: string;
  email_id: string;
  lookingfor: string;
  quantity: string;
  lookingUnits: string;
  remarks: string;
}

export interface CreateEnquiryResponse {
  status?: boolean | string | number;
  message: string;
  data?: unknown;
}

export const createEnquiry = async (
  payload: CreateEnquiryPayload
): Promise<CreateEnquiryResponse> => {
  const { data } = await axiosInstance.post<CreateEnquiryResponse>(
    "/createEnquiry",
    payload
  );
  return data;
};
