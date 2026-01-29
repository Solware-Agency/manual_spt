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
  { id: "historial", titulo: "Historial", nivel: 3 },
  { id: "ajustes", titulo: "Ajustes", nivel: 3 },
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

      <h2 id="modulos">Módulos</h2>
      <p>Los módulos de este usuario son:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Inicio</strong></li>
        <li><strong>Formulario</strong></li>
        <li><strong>Casos</strong></li>
        <li><strong>Pacientes</strong></li>
        <li><strong>Historial</strong></li>
        <li><strong>Ajustes</strong></li>
      </ul>

      <h2 id="inicio">Inicio</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Desde el panel principal, selecciona{" "}
          <strong>“Inicio”</strong> en el menú lateral.
          <img
                    src="/imagenes/3-RECEP-INICIO/1.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
          <img
                    src="/imagenes/3-RECEP-INICIO/2.png"
                    alt="Inicio — acceso a otros módulos"
                    className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
                  />
        </p>
      </div>

      <h2 id="formulario">Formulario</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Desde el panel principal, selecciona{" "}
          <strong>“Formulario”</strong> en el menú lateral.
          <img 
         src="/imagenes/3-RECEP-INICIO/3.png"  
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
                  <strong>Editar</strong>: permite modificar campos del caso (datos, comentarios)
                </li>
                <li><strong>Historial</strong>: muestra cambios realizados (puedes “Ocultar”).</li>
                <li><strong>Correo</strong>: envía el informe/comunicación por email.</li>
                <li><strong>Llamar</strong>: realiza una llamada al paciente (icono de llamada).</li>
                <li><strong>WhatsApp</strong>: envía un mensaje por WhatsApp.</li>
                <li><strong>Eliminar</strong>: elimina el caso (si aplica).</li>
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
                  src="/imagenes/2-RECEP-CASOS/4.7.png"
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
                  src="/imagenes/3-RECEP-INICIO/5.png"
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

      <h2 id="historial">Historial</h2>
      <div className="space-y-5">
        <p>
          <strong>Ubicación en la interfaz:</strong> Selecciona <strong>“Análisis”</strong> y luego{" "}
          <strong>“Historial”</strong>.
          <img
                  src="/imagenes/3-RECEP-INICIO/6.png"
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

export default ExperienciaRecepcionistaPage;
