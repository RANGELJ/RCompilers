
export default function () {
    return {

        idPaciente: this.$route.params.id,
        cargandoDatos: false,

        errorDeServidor: false,

        generales: {
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            fechaNacimiento: "",
            idEstadoCivil: "",
            sexo: "M",
            calle: "",
            numeroCalle: "",
            referencias: "",
            telefono: ""
        },

        estadosCiviles: [],
        cargandoEstadosCiviles: false,
        idColoniaSeleccionada: null,

        guardandoDatos: false,

        rules: {
            calle: [
                (value) => {
                    if (/^[a-zA-Z0-9][a-zA-Z0-9\s]{4,29}$/.test(value) || value === "") {
                        return true;
                    }
                    return "Formato de calle invalido";
                }
            ],
            numeroCalle: [
                (value) => {
                    if (/^[a-zA-Z0-9]{1,10}$/.test(value) || value === "") {
                        return true;
                    }
                    return "Formato de numero de calle invalido";
                }
            ],
            referencias: [
                (value) => {
                    if (/^[a-zA-Z0-9\s]{0,45}$/.test(value) || value === "") {
                        return true;
                    }
                    return "Formato de referencias invalido";
                }
            ]
        }
    };
};
