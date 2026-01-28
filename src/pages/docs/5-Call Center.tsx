import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "permisos", titulo: "Permisos (según matriz)", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaMedicoPatologoPage = () => {
  return (
    <DocLayout
      titulo="Call Center"
      descripcion="Seguimiento, comunicación y envío de informes al paciente."
      seccionId="exp-medico-patologo"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Documentar el flujo del rol <strong>Call Center</strong> para dar seguimiento a casos y
        realizar el envío de informes, sustituyendo procesos externos (por ejemplo, hojas de cálculo).
      </p>

      <h2 id="permisos">Permisos (según matriz)</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Puede</strong>: ver casos/pacientes, enviar informes, exportar data y ver historial.
        </li>
        <li>
          <strong>No puede</strong>: editar datos del paciente, registrar pacientes, triaje,
          generar/editar informe, adjuntar URL (Drive).
        </li>
      </ul>

      <h2 id="flujo">Flujo general</h2>
      <ol className="list-decimal pl-6 space-y-1">
        <li>Acceder al listado de casos y filtrar por estado/pendientes.</li>
        <li>Verificar datos del paciente/caso y revisar historial.</li>
        <li>Confirmar que el informe esté disponible para envío.</li>
        <li>Enviar el informe al paciente por el canal definido por la operación.</li>
        <li>Registrar seguimiento operativo (si aplica) y exportar data para control.</li>
      </ol>
    </DocLayout>
  );
};

export default ExperienciaMedicoPatologoPage;
