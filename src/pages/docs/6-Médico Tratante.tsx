import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "permisos", titulo: "Permisos (según matriz)", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
  { id: "modulos", titulo: "Módulos", nivel: 2 },
  { id: "inicio", titulo: "Inicio", nivel: 3 },
  { id: "casos", titulo: "Casos", nivel: 3 },
  { id: "pacientes", titulo: "Pacientes", nivel: 3 },
  { id: "ajustes", titulo: "Ajustes", nivel: 3 },
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


      <h2 id="inicio">Inicio</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Desde el panel principal, selecciona{" "}
          <strong>“Inicio”</strong> en el menú lateral.
          <img
                    src="/imagenes/4-ENF-INICIO/1.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
          <img
                    src="/imagenes/4-ENF-INICIO/4.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
        </p>
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
                  src="/imagenes/5-MDT-CASOS/4.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/5-MDT-CASOS/4.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/5-MDT-CASOS/4.3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
              Selecciona el siguiente botón para editar el caso médico.
            </li>
                <img
                  src="/imagenes/5-MDT-CASOS/4.8.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/5-MDT-CASOS/4.4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/5-MDT-CASOS/4.5.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/5-MDT-CASOS/4.6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
              Selecciona el siguiente botón para ver el historial de cambios del caso médico.
            </li>
            <img
                  src="/imagenes/5-MDT-CASOS/4.9.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/5-MDT-CASOS/4.7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>
                 Selecciona el siguiente botón para enviar un correo al paciente.
            </li>
            <img
                  src="/imagenes/5-MDT-CASOS/4.10.png"
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
                  src="/imagenes/5-MDT-CASOS/4.11.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                 Selecciona el siguiente botón exportar el caso.
            </li>
            <img
                  src="/imagenes/5-MDT-CASOS/4.12.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>
                 Selecciona el siguiente botón para enviar un mensaje por WhatsApp.
            </li>
            <img
                  src="/imagenes/5-MDT-CASOS/4.13.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ol>
        </div>

        <div>
          <p className="font-medium">Flujo “Generar” (reporte del caso)</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Selecciona <strong>“Generar”</strong> en el caso.</li>
            <img
                  src="/imagenes/5-MDT-CASOS/5.1.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Selecciona <strong>“Rellenar los datos”</strong>.</li>
            <img
                  src="/imagenes/5-MDT-CASOS/5.2.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <li>Selecciona <strong>“Revisar Documento”</strong> para detallar la información del reporte.</li>
            <img
                  src="/imagenes/5-MDT-CASOS/5.3.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Selecciona <strong>“Descargar PDF”</strong> para visualizar el reporte.</li>
            <img
                  src="/imagenes/5-MDT-CASOS/5.4.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
            <li>Tambien puedes enviar el reporte por correo al paciente.</li>
            <img
                  src="/imagenes/5-MDT-CASOS/5.5.png"
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
                <img
                  src="/imagenes/2-PRO-PACIENTES/6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-PACIENTES/7.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
          </ol>
        </div>
      </div>


      <h2 id="pacientes">Pacientes</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Selecciona <strong>“Pacientes”</strong> en el
          menú lateral.
        </p>
        <img
                  src="/imagenes/4-ENF-INICIO/3.png"
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
                <img
                  src="/imagenes/2-PRO-PACIENTES/6.png"
                  className="rounded-lg border shadow-md max-w-full h-auto mx-auto"
                />
                <img
                  src="/imagenes/2-PRO-PACIENTES/7.png"
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

export default ExperienciaMedicoOwnerPage;
