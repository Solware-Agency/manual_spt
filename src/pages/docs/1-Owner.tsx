import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "permisos", titulo: "Permisos (según matriz)", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
  { id: "modulos", titulo: "Módulos", nivel: 2 },
  { id: "inicio", titulo: "Inicio", nivel: 3 },
  { id: "formulario", titulo: "Formulario", nivel: 3 },
  { id: "casos", titulo: "Casos", nivel: 3 },
  { id: "pacientes", titulo: "Pacientes", nivel: 3 },
  { id: "estadisticas", titulo: "Estadísticas", nivel: 3 },
  { id: "historial-medico", titulo: "Historial médico", nivel: 3 },
  { id: "historial", titulo: "Historial", nivel: 3 },
  { id: "usuarios", titulo: "Usuarios", nivel: 3 },
  { id: "ajustes", titulo: "Ajustes", nivel: 3 },
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

      <h2 id="formulario">Formulario</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Desde el panel principal, selecciona{" "}
          <strong>“Formulario”</strong> en el menú lateral.
          <img 
         src="/imagenes/2-PRO-FORMULARIO/1.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </p>

        <p>
          <strong>Objetivo:</strong> Registrar nuevos pacientes, asociarles un servicio médico y
          gestionar los pagos correspondientes.
          <img 
         src="/imagenes/2-PRO-FORMULARIO/2.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </p>

        <div>
          <p className="font-medium">Funciones principales</p>
          <ul className="list-disc pl-6 space-y-1">
              <strong>Registrar datos del paciente</strong>: nombre, apellido, cédula, teléfono,
              edad, correo electrónico y fecha de registro.
              <img 
         src="/imagenes/2-PRO-FORMULARIO/4.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
              <img 
         src="/imagenes/2-PRO-FORMULARIO/5.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
           O puedes utilizar la barra de busqueda para buscar el paciente por nombre, apellido, cédula o teléfono.
           <img 
         src="/imagenes/2-PRO-FORMULARIO/2.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
          <img 
         src="/imagenes/2-PRO-FORMULARIO/3.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
            <li>
              <strong>Seleccionar el servicio</strong> (biopsia, citología, inmunohistoquímica,
              entre otros) y completar la información asociada: clínica de procedencia, médico
              tratante, tipo y cantidad de muestras, y relación del caso.
              <img 
         src="/imagenes/2-PRO-FORMULARIO/10.png"  
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Pasos para usar este módulo</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Selecciona el módulo <strong>“Formulario”</strong>.</li>
            <img
                    src="/imagenes/2-PRO-FORMULARIO/1.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
            <li>Completa los datos personales del paciente.</li>
            <img
                    src="/imagenes/2-PRO-FORMULARIO/6.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
            <li>Selecciona el servicio y completa la información asociada.</li>
            <img
                    src="/imagenes/2-PRO-FORMULARIO/11.5.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
            <li>
              Agrega comentarios adicionales (opcional) y selecciona <strong>“Enviar”</strong> para
              registrar el caso médico.
              <img
                    src="/imagenes/2-PRO-FORMULARIO/11.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
            </li>
            <li>
              Si te arrepientes de registrar el caso, selecciona <strong>“Limpiar”</strong> para
              borrar las casillas rellenadas.
              <img
                    src="/imagenes/2-PRO-FORMULARIO/12.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
            </li>
          </ol>
          <p className="text-sm text-muted-foreground mt-3">
            <strong>Nota:</strong> No puedes añadir más de 4 métodos de pago.
          </p>
        </div>
      </div>

      <h2 id="casos">Casos</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Selecciona <strong>“Casos”</strong> en el menú
          lateral.
        </p>
        <img
                  src="/imagenes/2-PRO-CASOS/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        <p>
          <strong>Objetivo:</strong> Consultar y gestionar los casos del laboratorio (completados o
          pendientes).
        </p>
        <div>
          <p className="font-medium">Funciones</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Listado de casos</strong> con información clave:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Código y estado del caso (completo / incompleto).</li>
                <li>Fecha de registro.</li>
                <li>Nombre y cédula del paciente.</li>
                <li>Sede del laboratorio.</li>
                <li>Tipo de estudio.</li>
                <li>Médico tratante.</li>
              </ul>
            </li>
            <li>
              <strong>Acciones</strong> disponibles desde el botón <strong>“Acciones”</strong> (según
              el estado del caso):
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Ver</strong>: abre el detalle del caso (médico,y adicional).</li>
                <img
                  src="/imagenes/2-PRO-CASOS/3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                  <strong>Editar</strong>: permite modificar campos del caso (datos, comentarios) y,
                  si aplica, adjuntar PDF o imagen. Al finalizar: <strong>Guardar cambios</strong> o{" "}
                  <strong>Cancelar</strong>.
                </li>
                <li><strong>Historial</strong>: muestra cambios realizados (puedes “Ocultar”).</li>
                <li><strong>Correo</strong>: envía el informe/comunicación por email.</li>
                <li><strong>Llamar</strong>: realiza una llamada al paciente (icono de llamada).</li>
                <li><strong>WhatsApp</strong>: envía un mensaje por WhatsApp.</li>
                <li><strong>Eliminar</strong>: elimina el caso (si aplica).</li>
                <li>
                  <strong>Generar</strong>: inicia el flujo para generar/descargar el reporte del caso.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Pasos para usar el módulo</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Selecciona el módulo <strong>“Casos”</strong>.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Revisa la lista de casos.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Usa el botón <strong>“Acciones”</strong> del caso para ejecutar la opción requerida.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Selecciona el caso que deseas ver para ver el detalle e historial del caso médico.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Selecciona el siguiente botón para editar el caso médico.
            </li>
                <img
                  src="/imagenes/2-PRO-CASOS/4.6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
              Selecciona el siguiente botón para editar el caso médico.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/4.0.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Selecciona el siguiente botón para ver el historial de cambios del caso médico.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/4.8.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
              Selecciona el siguiente botón para editar el caso médico.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/4.8.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
                 Selecciona el siguiente botón para enviar un correo al paciente.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/4.10.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/4.11.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                 Selecciona el siguiente botón llamar al paciente.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/4.12.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                 Selecciona el siguiente botón para enviar un mensaje por WhatsApp.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/4.13.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ol>
        </div>

        <div>
          <p className="font-medium">Flujo “Generar” (reporte del caso)</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Selecciona <strong>“Generar”</strong> en el caso.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Selecciona <strong>“Rellenar los datos”</strong>.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/5.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Solicita acceso al documento (Lector / Comentarista / Editor). Por defecto, usa{" "}
              <strong>Lector</strong> y luego <strong>“Solicitar acceso”</strong>.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/5.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Espera el correo de confirmación cuando la solicitud sea aceptada.</li>
            <li>Selecciona <strong>“Marcar como completado”</strong> para continuar.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/5.3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Selecciona <strong>“Descargar PDF”</strong> para visualizar el reporte.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/5.7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/5.3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Tambien puedes enviar el reporte por correo al paciente.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/5.5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/5.6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ol>
          <p className="text-sm text-muted-foreground mt-3">
            El PDF puede incluir un código QR para validar la autenticidad del documento.
          </p>
          <img
                  src="/imagenes/2-PRO-CASOS/5.9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        </div>

        <li>Selecciona <strong>“Historia”</strong> en el caso.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Completa los campos para realizar la historia clinica</li>
            <img
                  src="/imagenes/2-PRO-CASOS/6.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-CASOS/6.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Si tienes una historia clinica previa, selecciona el siguiente botón para editarla.</li>
            <img
                  src="/imagenes/2-PRO-CASOS/6.3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />

        <div>
          <p className="font-medium">Filtros de búsqueda</p>
          <img
                  src="/imagenes/2-PRO-CASOS/7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Casos pendientes</strong>: muestra casos incompletos.</li>
            <li><strong>PDF pendientes</strong>: muestra casos sin archivo PDF.</li>
            <li>
              <strong>Tipo de examen</strong>: biopsia, citología, inmunohistoquímica, etc.
            </li>
            <li>
              <strong>Estatus de documento</strong>: faltante, pendiente, aprobado.
            </li>
            <li>
              <strong>Filtros</strong> (panel): fecha de registro, filtrar por
              médicos y por PDF disponibles.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/7.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              <strong>Aplicar filtros</strong> para ejecutar y <strong>Limpiar filtros</strong> para
              resetear.
            </li>
            <img
                  src="/imagenes/2-PRO-CASOS/7.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/7.4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/7.3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/7.5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Ademas, puedes exportar los casos filtrados</li>
            <img
                  src="/imagenes/2-PRO-CASOS/8.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ul>
          <p className="text-sm text-muted-foreground mt-3">
            También puedes usar la barra de búsqueda para encontrar casos por nombre, cédula, sede, etc.
            <img
                  src="/imagenes/2-PRO-CASOS/9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-CASOS/10.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </p>
        </div>
      </div>

      <h2 id="pacientes">Pacientes</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Selecciona <strong>“Pacientes”</strong> en el
          menú lateral.
        </p>
        <img
                  src="/imagenes/2-PRO-PACIENTES/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />

        <p>
          <strong>Objetivo:</strong> Acceder a la información y gestión de los pacientes registrados.
        </p>
        <img
                  src="/imagenes/2-PRO-PACIENTES/2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        <div>
          <p className="font-medium">Funciones principales</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Listar pacientes</strong> con nombre, cédula, edad, teléfono, email y última
              visita.
            </li>
            <img
                  src="/imagenes/2-PRO-PACIENTES/3.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              <strong>Buscar pacientes</strong> por nombre, cédula, teléfono o correo electrónico.
            </li>
            <img
                  src="/imagenes/2-PRO-PACIENTES/3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ul>
        </div>

        <div>
          <p className="font-medium">Pasos para utilizar este módulo</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Ingresa al módulo <strong>“Pacientes”</strong>.</li>
            <img
                  src="/imagenes/2-PRO-PACIENTES/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Revisa la lista general.</li>
            <li>
              Usa la barra de búsqueda para localizar un paciente específico (nombre, cédula, sede,
              etc.).
            </li>
            <img
                  src="/imagenes/2-PRO-PACIENTES/3.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Selecciona el paciente/caso que quieras revisar para ver el detalle e historial del caso
              médico.
            </li>
            <img
                  src="/imagenes/2-PRO-PACIENTES/4.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-PACIENTES/4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Desde el detalle, puedes <strong>descargar el PDF</strong> y/o <strong>enviar correos</strong>{" "}
              al paciente (según permisos).
            </li>
            <img
                  src="/imagenes/2-PRO-PACIENTES/5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ol>
        </div>
      </div>

      <h2 id="estadisticas">Estadísticas</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Selecciona <strong>“Análisis”</strong> y luego{" "}
          <strong>“Estadísticas”</strong>.
        </p>
        <img
                  src="/imagenes/2-PRO-ESTADISTICAS/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        <p>
          <strong>Vista general:</strong> Panel con métricas y gráficas interactivas para analizar el
          rendimiento del laboratorio.
        </p>
        <img
                  src="/imagenes/2-PRO-ESTADISTICAS/2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        <div>
          <p className="font-medium">Funciones principales</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Métricas clave</strong>:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Ingresos este mes</strong>: monto acumulado y variación porcentual respecto
                  al mes anterior.
                </li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/3.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/3.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                  <strong>Pacientes nuevos</strong>: cantidad registrada en el mes y total acumulado.
                </li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/4.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/4.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                  <strong>Casos pagados</strong>: número total y variación porcentual.
                </li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/5.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                  <strong>Casos incompletos</strong>: número total y monto pendiente de cobro.
                </li>
                  <img
                    src="/imagenes/2-PRO-ESTADISTICAS/6.png"
                    className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/6.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </ul>
            </li>
            <li>
              <strong>Gráficas interactivas</strong>:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Distribución de ingresos por sede.</li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/7.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/7.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Tendencia de ingresos.</li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/8.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/8.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/8.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Tipos de exámenes más solicitados.</li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/9.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Distribución por Moneda.</li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/10.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/10.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/10.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Casos por cobrar.</li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/11.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/11.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Ingreso por médico tratante.</li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/12.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/12.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Ingreso por procedencia.</li>
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/13.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/13.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Pasos para utilizar la sección</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>
              Selecciona <strong>“Análisis”</strong> y luego <strong>“Estadísticas”</strong>.
            </li>
            <img
                  src="/imagenes/2-PRO-ESTADISTICAS/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Revisa los módulos principales.</li>
            <li>
              Haz clic en un módulo para ver el detalle:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/14.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-ESTADISTICAS/15.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <h2 id="historial-medico">Historial médico</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Selecciona <strong>“Historial médico”</strong>{" "}
          en el menú lateral.
        </p>
        <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        <p>
          <strong>Objetivo:</strong> Acceder a la información y gestión del historial médico de los
          pacientes.
        </p>
        <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        <div>
          <p className="font-medium">Funciones principales</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Total de historiales clínicos</strong> (contador/resumen).</li>
      
            <li><strong>Frecuencia cardíaca</strong>.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/3.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/3.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li><strong>Frecuencia respiratoria</strong>.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/4.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/4.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li><strong>Saturación de oxígeno</strong>.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/5.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/5.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li><strong>Temperatura</strong>.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/6.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/6.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li><strong>Índice de masa corporal (IMC)</strong>.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/7.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/7.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li><strong>Presión arterial</strong>.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/8.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/8.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/8.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li><strong>Glicemia</strong>.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/9.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/9.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li><strong>Hábitos psicobiológicos</strong>.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/10.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              <img
                    src="/imagenes/2-PRO-HISTORIAL-MEDICO/10.1.png"
                    className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
                   <img
                    src="/imagenes/2-PRO-HISTORIAL-MEDICO/10.2.png"
                    className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
                   <img
                    src="/imagenes/2-PRO-HISTORIAL-MEDICO/10.3.png"
                    className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
          </ul>
        </div>

        <div>
          <p className="font-medium">Búsqueda</p>
          <p className="text-sm text-muted-foreground">
            Utiliza el <strong>filtro de búsqueda</strong> para encontrar rápidamente un historial o
            paciente específico.
          </p>
          <img
                  src="/imagenes/2-PRO-HISTORIAL-MEDICO/11.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                 <img
                    src="/imagenes/2-PRO-HISTORIAL-MEDICO/12.png"
                    className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
        </div>
      </div>

      <h2 id="historial">Historial</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Selecciona <strong>“Análisis”</strong> y luego{" "}
          <strong>“Historial”</strong>.
          <img
                  src="/imagenes/2-PRO-HISTORIAL/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        </p>

        <p>
          <strong>Función principal:</strong> Encontrar todos los cambios registrados en el sistema
          mediante la barra de búsqueda o usando filtros.
        </p>
        <img
                  src="/imagenes/2-PRO-HISTORIAL/2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />

        <div>
          <p className="font-medium">Pasos para utilizar esta sección</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>
              Selecciona <strong>“Análisis”</strong> y luego <strong>“Historial”</strong>.
            </li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li></li>
            <li>Utiliza la barra de búsqueda para localizar un cambio específico.</li>
            <img
                  src="/imagenes/2-PRO-HISTORIAL/3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-HISTORIAL/4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-HISTORIAL/5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Aplica filtros para refinar resultados:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Fecha</strong>.</li>
                <img
                  src="/imagenes/2-PRO-HISTORIAL/7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                  <strong>Tipo de acción</strong>: ediciones, eliminaciones, creaciones.
                </li>
                <img
                  src="/imagenes/2-PRO-HISTORIAL/6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <h2 id="usuarios">Usuarios</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Desde el panel principal, selecciona{" "}
          <strong>“Usuarios”</strong> en el menú lateral.
        </p>
        <img
                  src="/imagenes/2-PRO-USUARIOS/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        <p>
          <strong>Objetivo:</strong> Gestionar los usuarios registrados en la aplicación y definir sus
          roles.
        </p>
        <img
                  src="/imagenes/2-PRO-USUARIOS/2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        <div>
          <p className="font-medium">Funciones principales</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Buscar/consultar usuarios</strong> por nombre, apellido, correo, sede o rol.
            </li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              <strong>Filtrar por estado</strong>: aprobado o pendiente de aprobación.
            </li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              <strong>Filtrar por sede</strong>.
            </li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              <strong>Aprobar o rechazar</strong> registros.
            </li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              <strong>Cambiar rol</strong> (por ejemplo: Propietario/Owner, Recepción, Administrador,
              etc.).
            </li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              <strong>Asignar sede</strong> a un usuario.
            </li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/8.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ul>
        </div>

        <div>
          <p className="font-medium">Pasos para usar este módulo</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Haz clic en <strong>“Usuarios”</strong>.</li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Busca al usuario con la barra de búsqueda o aplica filtros.</li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Desde el menú de acciones del usuario, gestiona su estado (aprobar/rechazar), cambia su
              rol y/o actualiza su sede.
            </li>
            <img
                  src="/imagenes/2-PRO-USUARIOS/10.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-USUARIOS/11.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-USUARIOS/12.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-USUARIOS/13.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ol>
        </div>
      </div>

      <h2 id="ajustes">Ajustes</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Desde el panel principal, selecciona{" "}
          <strong>“Ajustes”</strong> en el menú lateral.
          <img
                  src="/imagenes/2-PRO-AJUSTES/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        </p>

        <p>
          <strong>Objetivo:</strong> Personalizar la configuración de la cuenta y parámetros de
          seguridad.
          <img
                  src="/imagenes/2-PRO-AJUSTES/2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
        </p>

        <div>
          <p className="font-medium">Funciones principales</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Ver información del perfil</strong> (nombre y correo).
            </li>
            <img
                  src="/imagenes/2-PRO-AJUSTES/3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />  
            <li>
              <strong>Cambiar contraseña</strong>.
              <img
                  src="/imagenes/2-PRO-AJUSTES/4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            </li>
            <li>
              <strong>Configurar tiempo de inactividad</strong> para cierre automático.
              <img
                  src="/imagenes/2-PRO-AJUSTES/5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            </li>
            <li>
              <strong>Cambiar modo de pantalla</strong> (claro/oscuro).
              <p className="text-sm text-muted-foreground mt-2">
                Para activar el modo oscuro, ve a la barra del módulo y selecciona <strong>“Oscuro”</strong>.
                <img
                  src="/imagenes/2-PRO-AJUSTES/6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-AJUSTES/7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-AJUSTES/8.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />  
                <img
                  src="/imagenes/2-PRO-AJUSTES/9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />  
              </p>
            </li>
            <li>
              <strong>Consultar recomendaciones de seguridad</strong>.
              <img
                  src="/imagenes/2-PRO-Ajustes/9.1.png"
                  alt="Inicio — número de casos registrados (captura 2)"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Pasos para utilizar este módulo</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Haz clic en <strong>“Ajustes”</strong>.</li>
            <img
                  src="/imagenes/2-PRO-AJUSTES/1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Selecciona la opción que deseas modificar (perfil o contraseña).</li>
            <img
                  src="/imagenes/2-PRO-AJUSTES/10.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />  
            <li>Si aplica, ajusta el tiempo de inactividad.</li>
            <img
                  src="/imagenes/2-PRO-AJUSTES/11.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />  
            <li>Opcional: cambia el modo de pantalla (claro/oscuro).</li>
            <img
                  src="/imagenes/2-PRO-AJUSTES/12.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />  
            <li>Guarda los cambios realizados.</li>
            <img
                  src="/imagenes/2-PRO-AJUSTES/13.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />  
          </ol>
        </div>
      </div>
    </DocLayout>
  );
};

export default ExperienciaPropietarioPage;
