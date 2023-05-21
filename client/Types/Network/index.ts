export type ServerResponseType<T> = {
  isError: boolean;
  isSuccess: boolean;
  error?: {
    message: string;
  };
  data?: T;
};
