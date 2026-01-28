import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "permisos", titulo: "Permisos (según matriz)", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
  { id: "modulos", titulo: "Módulos", nivel: 2 },
  { id: "inicio", titulo: "Inicio", nivel: 3 },
];

const ExperienciaPropietarioPage = () => {
  return (
    <DocLayout
      titulo="Owner"
      descripcion="Acceso total a todas las acciones del sistema."
      seccionId="exp-propietario"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Establecer las capacidades del rol <strong>Owner</strong> como administrador con acceso
        total a SolHub, incluyendo supervisión, operación y control.
      </p>

      <h2 id="permisos">Permisos (según matriz)</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Puede</strong>: ver casos/pacientes, editar datos del paciente, registrar
          pacientes, triaje, generar/editar informe, enviar informes, adjuntar URL (Drive),
          exportar data y ver historial.
        </li>
      </ul>

      <h2 id="flujo">Flujo general</h2>
      <ol className="list-decimal pl-6 space-y-1">
        <li>Acceder a casos/pacientes y monitorear operación general.</li>
        <li>Crear/editar pacientes y corregir datos cuando sea necesario.</li>
        <li>Apoyar triaje y reasignaciones operativas si aplica.</li>
        <li>Supervisar y, si corresponde, crear/editar informes y aprobar su envío.</li>
        <li>Adjuntar URL (Drive) de estudios cuando sea requerido.</li>
        <li>Exportar data para análisis/indicadores y revisar historial.</li>
      </ol>

      <h2 id="modulos">Módulos</h2>
      <p>Los módulos de este usuario son:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Inicio</strong></li>
        <li><strong>Formulario</strong></li>
        <li><strong>Casos</strong></li>
        <li><strong>Pacientes</strong></li>
        <li><strong>Estadísticas</strong></li>
        <li><strong>Historia Clínica</strong></li>
        <li><strong>Historial</strong></li>
        <li><strong>Usuarios</strong></li>
        <li><strong>Ajustes</strong></li>
      </ul>

      <h2 id="inicio">Inicio</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Desde el panel principal, selecciona{" "}
          <strong>“Inicio”</strong> en el menú lateral. 
          <img 
         src="/imagenes/2-PRO-INICIO/1.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </p>

        <p>
          <strong>Objetivo:</strong> Proporcionar al usuario Owner una vista general del rendimiento
          del laboratorio en tiempo real, incluyendo métricas financieras, casos registrados y el
          estado del sistema.
          <img 
         src="/imagenes/2-PRO-INICIO/2.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </p>

        <div>
          <p className="font-medium">Funciones y elementos principales</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Sección de bienvenida.
              <div className="mt-4 space-y-4">
                <img
                  src="/imagenes/2-PRO-INICIO/3.png"
                  alt="Inicio — sección de bienvenida (captura 1)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/3.1.png"
                  alt="Inicio — sección de bienvenida (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/3.2.png"
                  alt="Inicio — sección de bienvenida (captura 3)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </div>
            </li>
            <li>
              <strong>Ingresos del mes</strong>: monto acumulado del mes actual.
              <div className="mt-4 space-y-4">
                <img
                  src="/imagenes/2-PRO-INICIO/4.png"
                  alt="Inicio — ingresos del mes (captura 1)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/4.1.png"
                  alt="Inicio — ingresos del mes (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/4.2.png"
                  alt="Inicio — ingresos del mes (captura 3)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </div>
            </li>
            <li>
              <strong>Número de casos registrados</strong>: total de casos en el sistema. Al abrir el
              detalle, se muestra un resumen de casos, distribución por tipo de examen y listado de
              médicos tratantes.
              <div className="mt-4 space-y-4">
                <img
                  src="/imagenes/2-PRO-INICIO/5.png"
                  alt="Inicio — número de casos registrados (captura 1)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/5.1.png"
                  alt="Inicio — número de casos registrados (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/5.2.png"
                  alt="Inicio — número de casos registrados (captura 3)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </div>
            </li>
            <li>
              <strong>Gráfico de ganancias</strong>: ganancias del mes actual con desglose por sede.
              <div className="mt-4 space-y-4">
                <img
                  src="/imagenes/2-PRO-INICIO/6.png"
                  alt="Inicio — gráfico de ganancias (captura 1)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/6.1.png"
                  alt="Inicio — gráfico de ganancias (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </div>
            </li>
            <li>
              <strong>Tendencia de ventas</strong>: comportamiento mensual de las ventas a lo largo
              del año (incluye detalle por sede).
              <div className="mt-4 space-y-4">
                <img
                  src="/imagenes/2-PRO-INICIO/7.png"
                  alt="Inicio — tendencia de ventas (captura 1)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/7.1.png"
                  alt="Inicio — tendencia de ventas (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </div>
            </li>
            <li>
              <strong>Médicos tratantes</strong>: listado de médicos con mayor volumen de casos.
              <div className="mt-4 space-y-4">
                <img
                  src="/imagenes/2-PRO-INICIO/8.png"
                  alt="Inicio — médicos tratantes (captura 1)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/8.1.png"
                  alt="Inicio — médicos tratantes (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </div>
            </li>
            <li>
              <strong>Estudios más frecuentes</strong>: tipos de estudios con mayor número de casos
              (ej. biopsia, citología, etc.).
              <div className="mt-4 space-y-4">
                <img
                  src="/imagenes/2-PRO-INICIO/9.png"
                  alt="Inicio — estudios más frecuentes (captura 1)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/9.1.png"
                  alt="Inicio — estudios más frecuentes (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/9.2.png"
                  alt="Inicio — estudios más frecuentes (captura 3)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/9.3.png"
                  alt="Inicio — estudios más frecuentes (captura 4)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </div>
            </li>
            <li>
              <strong>Estado del sistema</strong>: casos incompletos, pagos pendientes y porcentaje
              de progreso.
              <div className="mt-4 space-y-4">
                <img
                  src="/imagenes/2-PRO-INICIO/10.png"
                  alt="Inicio — estado del sistema (captura 1)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-INICIO/10.1.png"
                  alt="Inicio — estado del sistema (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </div>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Pasos para navegar por el módulo</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>
              Haz clic en el módulo <strong>“Inicio”</strong>.
              <img
                src="/imagenes/2-PRO-INICIO/1.png"
                alt="Inicio — acceso desde menú lateral"
                className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
              />
            </li>
            <li>
              Revisa los indicadores principales (ingresos, casos, tendencias y distribución por
              sede).
              <img
                src="/imagenes/2-PRO-INICIO/11.png"
                alt="Inicio — indicadores principales"
                className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
              />
            </li>
            <li>
              Si necesitas más detalle:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Selecciona los demás módulos para ver la información correspondiente.
                  <img
                    src="/imagenes/2-PRO-INICIO/12.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

    </DocLayout>
  );
};

export default ExperienciaPropietarioPage;
