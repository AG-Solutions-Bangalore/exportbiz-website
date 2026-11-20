import { useState, useCallback } from "react";
import { createEnquiry } from "../api/enquiryApi";
import type { CreateEnquiryPayload, CreateEnquiryResponse } from "../api/enquiryApi";

export interface UseCreateEnquiryReturn {
  submit: (payload: CreateEnquiryPayload) => Promise<CreateEnquiryResponse | null>;
  loading: boolean;
  error: string | null;
  data: CreateEnquiryResponse | null;
  reset: () => void;
}

export const useCreateEnquiry = (): UseCreateEnquiryReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CreateEnquiryResponse | null>(null);

  const submit = useCallback(
    async (payload: CreateEnquiryPayload): Promise<CreateEnquiryResponse | null> => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await createEnquiry(payload);
        setData(response);
        return response;
      } catch (err: unknown) {
        const message =
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.";
        setError(message);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return { submit, loading, error, data, reset };
};
