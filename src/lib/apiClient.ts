export class ApiError extends Error {
  constructor(
    public message: string,
    public status?: number,
  ) {
    super(message);
    this.status = status;
  }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorMessage = `API Error: ${response.status} ${response.statusText}`;
    throw new ApiError(errorMessage, response.status);
  }

  try {
    return await response.json();
  } catch {
    throw new ApiError('Invalid response format', response.status);
  }
};

const makeApiCall = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    return await handleResponse<T>(response);
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export const postApi = async <T>(
  endpoint: string,
  data: unknown,
): Promise<T> => {
  return makeApiCall<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getApi = async <T>(endpoint: string): Promise<T> => {
  return makeApiCall<T>(endpoint, {
    method: 'GET',
  });
};

export const putApi = async <T>(
  endpoint: string,
  data: unknown,
): Promise<T> => {
  return makeApiCall<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const deleteApi = async <T>(endpoint: string): Promise<T> => {
  return makeApiCall<T>(endpoint, {
    method: 'DELETE',
  });
};
