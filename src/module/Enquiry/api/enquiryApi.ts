import axiosInstance from "../../../api/axiosInstance";

export interface CreateEnquiryPayload {
  mobile_no: string;
  full_name?: string;
  email_id?: string;
  lookingfor?: string;
  quantity?: string;
  lookingUnits?: string;
  remarks?: string;
}

export interface CreateEnquiryResponse {
  code?: string | number;
  status?: boolean | string | number;
  message?: string;
  data?: unknown;
}

export const createEnquiry = async (
  payload: CreateEnquiryPayload
): Promise<CreateEnquiryResponse> => {
  // Only send fields that are explicitly provided with non-empty values
  const requestBody: Record<string, string> = {
    mobile_no: payload.mobile_no.trim(),
  };

  if (payload.full_name?.trim()) {
    requestBody.full_name = payload.full_name.trim();
  }
  if (payload.email_id?.trim()) {
    requestBody.email_id = payload.email_id.trim();
  }
  if (payload.remarks?.trim()) {
    requestBody.remarks = payload.remarks.trim();
  }
  if (payload.lookingfor?.trim()) {
    requestBody.lookingfor = payload.lookingfor.trim();
  }
  if (payload.quantity?.trim()) {
    requestBody.quantity = payload.quantity.trim();
  }
  if (payload.lookingUnits?.trim()) {
    requestBody.lookingUnits = payload.lookingUnits.trim();
  }

  const { data } = await axiosInstance.post<CreateEnquiryResponse>(
    "/createEnquiry",
    requestBody
  );
  return data;
};
