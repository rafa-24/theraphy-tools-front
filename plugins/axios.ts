import axios from "axios";

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
  });

  // Interceptores (opcional)
  /*
  axiosInstance.interceptors.request.use((config) => {
    // Agregar headers como token de autenticación
    const token = useCookie('auth_token')?.value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  */

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Manejar errores
      console.error(error.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: axiosInstance,
    },
  };

});