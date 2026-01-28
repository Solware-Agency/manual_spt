import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "permisos", titulo: "Permisos (según matriz)", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaMedicoResidentePage = () => {
  return (
    <DocLayout
      titulo="Enfermería"
      descripcion="Triaje clínico-operativo y seguimiento del caso."
      seccionId="exp-medico-residente"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Documentar el flujo del rol <strong>Enfermería</strong> para ejecutar el triaje y
        apoyar el seguimiento operativo del paciente/caso dentro de SolHub.
      </p>

      <h2 id="permisos">Permisos (según matriz)</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Puede</strong>: ver casos/pacientes, realizar triaje, enviar informes, exportar
          data y ver historial.
        </li>
        <li>
          <strong>No puede</strong>: editar datos del paciente, registrar pacientes,
          generar/editar informe, adjuntar URL (Drive).
        </li>
      </ul>

      <h2 id="flujo">Flujo general</h2>
      <ol className="list-decimal pl-6 space-y-1">
        <li>Acceder a la lista de casos y ubicar al paciente.</li>
        <li>Revisar información disponible del caso e historial.</li>
        <li>Realizar el triaje según los criterios del servicio.</li>
        <li>Monitorear el avance del caso (estado/etapas) y registrar observaciones operativas.</li>
        <li>Cuando aplique, apoyar el envío de informes ya generados.</li>
      </ol>
    </DocLayout>
  );
};

export default ExperienciaMedicoResidentePage;
