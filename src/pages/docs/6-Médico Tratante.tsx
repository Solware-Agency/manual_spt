import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "permisos", titulo: "Permisos (según matriz)", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaMedicoOwnerPage = () => {
  return (
    <DocLayout
      titulo="Médico Tratante"
      descripcion="Generación/edición de informes y envío al paciente."
      seccionId="exp-medico-owner"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Definir el flujo del rol <strong>Médico Tratante</strong> para elaborar el contenido clínico
        del caso mediante la generación/edición de informes y su posterior envío.
      </p>

      <h2 id="permisos">Permisos (según matriz)</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Puede</strong>: ver casos/pacientes, generar/editar informe, enviar informes,
          exportar data y ver historial.
        </li>
        <li>
          <strong>No puede</strong>: editar datos del paciente, registrar pacientes, triaje,
          adjuntar URL (Drive).
        </li>
      </ul>

      <h2 id="flujo">Flujo general</h2>
      <ol className="list-decimal pl-6 space-y-1">
        <li>Ingresar a casos/pacientes y seleccionar el caso a trabajar.</li>
        <li>Revisar antecedentes e historial del caso.</li>
        <li>Generar o editar el informe clínico según el protocolo.</li>
        <li>Validar la información y dejar el informe listo para envío.</li>
        <li>Enviar el informe al paciente (o coordinar el envío según la operación).</li>
      </ol>
    </DocLayout>
  );
};

export default ExperienciaMedicoOwnerPage;
