export const rutaConBase = (ruta: string) => `${import.meta.env.BASE_URL}${ruta.replace(/^\/+/, '')}`;
