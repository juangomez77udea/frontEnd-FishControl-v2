import axios from 'axios';

const API_URL = "http://localhost:8080/api"; // Corregido

export const login = async (username, password) => {
  try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      return response.data;

  } catch (error) {
      console.error("Error en login:", error.response ? error.response.data : error.message);
      return null;
  }
};


// Configurar axios con la baseURL correcta
export const api = axios.create({
    baseURL: API_URL, // Ahora está bien sin /login
    headers: {
        'Content-Type': 'application/json',
    }
});

// Interceptor para agregar token en cada petición
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
