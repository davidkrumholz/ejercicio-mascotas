const BASE_URL_MASCOTAS = "https://ejercicio-mascotas-equipo1-default-rtdb.firebaseio.com/mascotas";
const BASE_URL_USUARIOS = "https://ejercicio-mascotas-equipo1-default-rtdb.firebaseio.com/usuarios";
export default {
    getAllMascotas: async () => {
        const response = await fetch(`${BASE_URL_MASCOTAS}/.json`);
        const data = response.json()
        return data;
    },
    createMascota: async (mascotaObject) => {
        const response = await fetch(`${BASE_URL_MASCOTAS}/.json`, {
            method: "POST",
            body: JSON.stringify(mascotaObject)
        });
        const data = response.json();
        return data;
    },
    getMascotaById: async (mascotaId) => {
        const response = await fetch(`${BASE_URL_MASCOTAS}/${mascotaId}/.json`);
        const data = response.json();
        return data;
    },
    updateMascotaById: async (mascotaObject, mascotaId) => {
        const response = await fetch(`${BASE_URL_MASCOTAS}/${mascotaId}/.json`, {
            method: "PATCH",
            body: JSON.stringify(mascotaObject)
        });
        const data = response.json();
        return data;
    },
    getAllMascotasAsignToUser: async (userId) => {
        const response = await fetch(`https://ejercicio-mascotas-equipo1-default-rtdb.firebaseio.com/usuarios/usuario1/mascotas/.json`);
        const data = response.json();
        return data;
    },
    addMascotaToUser: async (userId, MascotaObjectId) => {
        const response = await fetch(`${BASE_URL_USUARIOS}/${userId}/mascotas/.json`, {
            method: "PUT",
            body: JSON.stringify(MascotaObjectId)
        })
    }
}
