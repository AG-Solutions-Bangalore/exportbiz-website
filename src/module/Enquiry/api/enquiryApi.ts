import axiosInstance from "../../../api/axiosInstance";

export interface CreateEnquiryPayload {
  full_name: string;
  mobile_no: string;
  email_id: string;
  lookingfor?: string;
  quantity?: string;
  lookingUnits?: string;
  remarks?: string;
}

export interface CreateEnquiryResponse {
  status?: boolean | string | number;
  message: string;
  data?: unknown;
}

export const createEnquiry = async (
  payload: CreateEnquiryPayload
): Promise<CreateEnquiryResponse> => {
  // Pass non-empty string defaults if server requires standard keys
  const requestBody = {
    full_name: payload.full_name,
    mobile_no: payload.mobile_no,
    email_id: payload.email_id,
    lookingfor: payload.lookingfor || "Export Documentation Software",
    quantity: payload.quantity || "1",
    lookingUnits: payload.lookingUnits || "NOS",
    remarks: payload.remarks || "",
  };

  const { data } = await axiosInstance.post<CreateEnquiryResponse>(
    "/createEnquiry",
    requestBody
  );
  return data;
};
