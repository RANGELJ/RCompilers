
export default {
    guardarDatos () {
        const validacion = this.validarDatos();
        if (validacion !== true) {
            this.$store.commit("mostrarMensaje", {
                type: "warning",
                mensaje: validacion
            });
            return;
        }
        /**
         * Valida los datos para ver si es un update
         */
        let typeMutation = "addPaciente";
        let idField = "";
        let fieldEstadoCivil = "estadoCivil";
        let mensajeSatisfactorio = "Paciente dado de alta";
        if (this.idPaciente) {
            typeMutation = "editPaciente";
            idField = "id: " + this.idPaciente;
            fieldEstadoCivil = "idEstadoCivil";
            mensajeSatisfactorio = "Paciente actualizado";
        }

        this.guardandoDatos = true;
        this.$servue
            .graph(`mutation {
                ${typeMutation} (
                    ${idField}
                    nombre: "${this.generales.nombre}"
                    apellidoPaterno: "${this.generales.apellidoPaterno}"
                    apellidoMaterno: "${this.generales.apellidoMaterno}"
                    fechaNacimiento: "${this.generales.fechaNacimiento}"
                    telefono: "${this.generales.telefono}"
                    ${fieldEstadoCivil}: ${this.generales.idEstadoCivil}
                    sexo: "${this.generales.sexo}"
                    idColonia: ${this.idColoniaSeleccionada}
                    calle: "${this.generales.calle}"
                    numeroCalle: "${this.generales.numeroCalle}"
                    referencias: "${this.generales.referencias}"
                ) {
                    id
                }
            }`)
            .then((res) => {
                if (res.errors) {
                    this.$store.commit("mostrarMensaje", {
                        type: "warning",
                        mensaje: "Informacion con formato incorrecto o incompleta"
                    });
                } else {
                    this.$store.commit("mostrarMensaje", {
                        type: "info",
                        mensaje: mensajeSatisfactorio
                    });
                    this.$router.push("/historial_clinico");
                }
                this.guardandoDatos = false;
            })
            .catch(() => {
                this.$store.commit("mostrarMensaje", {
                    type: "error",
                    mensaje: "Error al intentar guardar la informacion"
                });
                this.guardandoDatos = false;
            });
    },
    /**
     * Permite validar los datos del edifor
     */
    validarDatos () {
        const nombreRegex = /^[A-Z][a-zA-Z\s^\n]{1,45}$/;
        const fechaRegex = /^[1-2][0-9]{3}-[0-1][0-9]-[0-4][0-9]$/;
        const telefonoRegex = /^[0-9]{10}$/;
        const calleRegex = /^[a-zA-Z0-9][a-zA-Z0-9\s]{4,29}$/;
        const numeroCalleRegex = /^[a-zA-Z0-9]{1,10}$/;
        const referenciasRegex = /^[a-zA-Z0-9\s]{0,45}$/;

        const generales = this.generales;
        if (!generales.nombre) {
            return "Debes indicar el nombre del paciente";
        }
        if (!nombreRegex.test(generales.nombre)) {
            return "El nombre no tiene el formato correcto";
        }
        if (!nombreRegex.test(generales.apellidoPaterno)) {
            return "El apellido paterno no tiene el formato correcto";
        }
        if (!nombreRegex.test(generales.apellidoMaterno)) {
            return "El apellido materno no tiene el formato correcto";
        }
        if (generales.sexo !== "M" && generales.sexo !== "F") {
            return "El sexo puede ser femenino o masculino";
        }
        if (!fechaRegex.test(generales.fechaNacimiento)) {
            return "La fecha de nacimiento no tiene el formato correcto";
        }
        if (!telefonoRegex.test(generales.telefono)) {
            return "El telefono tiene el formato incorrecto";
        }
        if (!generales.idEstadoCivil) {
            return "Debes indicar el estado civil";
        }
        if (!this.idColoniaSeleccionada) {
            return "Debes seleccionar la colonia donde vive el paciente";
        }
        if (!calleRegex.test(generales.calle)) {
            return "Formato de calle no valido";
        }
        if (!numeroCalleRegex.test(generales.numeroCalle)) {
            return "Formato de calle no valido";
        }
        if (!referenciasRegex.test(generales.referencias)) {
            return "Formato de referencias incorrecto";
        }
        return true;
    }
};
