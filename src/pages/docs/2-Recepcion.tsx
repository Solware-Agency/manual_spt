import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "permisos", titulo: "Permisos (según matriz)", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaRecepcionistaPage = () => {
  return (
    <DocLayout
      titulo="Recepción"
      descripcion="Registro, edición y gestión administrativa de pacientes."
      seccionId="exp-recepcionista"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Definir el flujo operativo del rol <strong>Recepción</strong> dentro de SolHub para
        registrar pacientes, mantener sus datos actualizados y dar seguimiento administrativo a
        los casos.
      </p>

      <h2 id="permisos">Permisos (según matriz)</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Puede</strong>: ver casos/pacientes, editar datos del paciente, registrar
          pacientes, enviar informes, exportar data y ver historial.
        </li>
        <li>
          <strong>No puede</strong>: triaje, generar/editar informe, adjuntar URL (Drive).
        </li>
      </ul>

      <h2 id="flujo">Flujo general</h2>
      <ol className="list-decimal pl-6 space-y-1">
        <li>Buscar paciente existente o registrar un paciente nuevo.</li>
        <li>Editar/actualizar datos del paciente (cuando aplique).</li>
        <li>Ubicar el caso del paciente y revisar estado e historial.</li>
        <li>Cuando el informe esté disponible, enviar informes al paciente.</li>
        <li>Exportar data requerida para reportes/seguimiento.</li>
      </ol>
    </DocLayout>
  );
};

export default ExperienciaRecepcionistaPage;
