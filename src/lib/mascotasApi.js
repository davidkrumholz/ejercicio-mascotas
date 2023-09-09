const BASE_URL = "https://ejercicio-mascotas-equipo1-default-rtdb.firebaseio.com/mascotas";

export default {
    getAllMascotas: async () => {
        const response = await fetch(`${BASE_URL}/.json`);
        const data = response.json()
        return data;
    }
}
