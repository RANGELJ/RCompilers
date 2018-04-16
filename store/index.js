export const state = () => ({
    mostrandoMensaje: false,
    mensajeGlobal: "",
    tipoMensaje: "info"
});

export const mutations = {
    mostrarMensaje (state, {type, mensaje}) {
        state.mostrandoMensaje = false;
        state.mensajeGlobal = mensaje;
        state.tipoMensaje = type || "info";
        state.mostrandoMensaje = true;
    },
    ocultarMensaje (state) {
        state.mostrandoMensaje = false;
    }
};
