
export default function () {
    let queryInicial = "{estadosCiviles{id descripcion}";
    if (this.idPaciente) {
        queryInicial += `pacientes(id: ${this.idPaciente}){nombre apellidoPaterno
            apellidoMaterno fechaNacimiento telefono estadoCivil{id} colonia {id} calle 
            numeroCalle referencias }}`;
    } else {
        queryInicial += "}";
    }
    this.cargandoDatos = true;
    this.cargandoEstadosCiviles = true;
    this.$servue
        .graph(queryInicial)
        .then(res => {
            const data = res.data;
            this.estadosCiviles = data.estadosCiviles;
            this.cargandoEstadosCiviles = false;

            if (this.idPaciente) {
                const pacienteData = data.pacientes[0];
                if (!pacienteData) {
                    this.$store.commit("mostrarMensaje", {
                        type: "warning",
                        mensaje: "El paciente seleccionado no esta dado de alta"
                    });
                } else {
                    this.generales.nombre = pacienteData.nombre;
                    this.generales.apellidoPaterno = pacienteData.apellidoPaterno;
                    this.generales.apellidoMaterno = pacienteData.apellidoMaterno;
                    this.generales.fechaNacimiento = pacienteData.fechaNacimiento;
                    this.generales.telefono = pacienteData.telefono;
                    this.generales.idEstadoCivil = pacienteData.estadoCivil.id;
                    this.idColoniaSeleccionada = pacienteData.colonia.id;
                    this.generales.calle = pacienteData.calle;
                    this.generales.numeroCalle = pacienteData.numeroCalle;
                    this.generales.referencias = pacienteData.referencias;
                }
            }

            this.cargandoDatos = false;
        })
        .catch(() => {
            this.errorDeServidor = true;
        });
};
