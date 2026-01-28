import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "permisos", titulo: "Permisos (según matriz)", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaMedicoCitotecnologoPage = () => {
  return (
    <DocLayout
      titulo="Imagenología"
      descripcion="Adjuntar o reemplazar la URL (Drive) del estudio en el caso."
      seccionId="exp-medico-citotecnologo"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Establecer el flujo del rol <strong>Imagenología</strong> para gestionar el acceso al
        estudio del paciente mediante la URL (Drive) dentro de SolHub.
      </p>

      <h2 id="permisos">Permisos (según matriz)</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Puede</strong>: ver casos/pacientes, adjuntar URL (Drive), enviar informes,
          exportar data y ver historial.
        </li>
        <li>
          <strong>No puede</strong>: editar datos del paciente, registrar pacientes, triaje,
          generar/editar informe.
        </li>
      </ul>

      <h2 id="flujo">Flujo general</h2>
      <ol className="list-decimal pl-6 space-y-1">
        <li>Ingresar al listado de casos y seleccionar el caso correspondiente.</li>
        <li>Verificar si el caso ya cuenta con URL (Drive) asociada al estudio.</li>
        <li>Adjuntar o reemplazar la URL (Drive) del estudio según corresponda.</li>
        <li>Confirmar que la URL sea accesible y esté asociada al caso correcto.</li>
        <li>Exportar data si se requiere para control/seguimiento.</li>
      </ol>
    </DocLayout>
  );
};

export default ExperienciaMedicoCitotecnologoPage;
