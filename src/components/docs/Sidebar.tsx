import { Link, useLocation } from "react-router-dom";
import IconoSeccion from "./IconoSeccion";
import { cn } from "@/lib/utils";

interface SeccionManual {
  id: string;
  titulo: string;
  ruta: string;
  descripcion: string;
  posicion: number;
  esExterno?: boolean;
}

// Estructura de navegación del manual
export const seccionesManual: SeccionManual[] = [
  {
    id: "landing",
    titulo: "Inicio",
    ruta: "/",
    descripcion: "Página principal",
    posicion: 0,
  },
  {
    id: "inicio",
    titulo: "Introducción",
    ruta: "/docs/inicio",
    descripcion: "Introducción y visión general",
    posicion: 1,
  },
  {
    id: "como-instalar-solhub",
    titulo: "Como instalar SolHub",
    ruta: "/docs/como-instalar-solhub",
    descripcion: "Requisitos y pasos de instalación",
    posicion: 2,
  },
  {
    id: "solhub",
    titulo: "SolHub",
    ruta: "/docs/solhub",
    descripcion: "Visión general del sistema",
    posicion: 3,
  },
  {
    id: "roles-permisos",
    titulo: "Roles y Permisos del Sistema",
    ruta: "/docs/roles-permisos",
    descripcion: "Matriz de permisos y descripción de roles",
    posicion: 4,
  },
  {
    id: "exp-propietario",
    titulo: "Owner",
    ruta: "/docs/1-owner",
    descripcion: "Acceso total y administración",
    posicion: 5,
  },
  {
    id: "exp-recepcionista",
    titulo: "Recepción",
    ruta: "/docs/2-recepcion",
    descripcion: "Registro y gestión de pacientes",
    posicion: 6,
  },
  {
    id: "exp-medico-residente",
    titulo: "Enfermería",
    ruta: "/docs/3-enfermeria",
    descripcion: "Triaje y seguimiento operativo",
    posicion: 7,
  },
  {
    id: "exp-medico-citotecnologo",
    titulo: "Imagenología",
    ruta: "/docs/4-imagenologia",
    descripcion: "Gestión de estudios y URL (Drive)",
    posicion: 8,
  },
  {
    id: "exp-medico-patologo",
    titulo: "Call Center",
    ruta: "/docs/5-call-center",
    descripcion: "Comunicación y envío de informes",
    posicion: 9,
  },
  {
    id: "exp-medico-owner",
    titulo: "Médico Tratante",
    ruta: "/docs/6-medico-tratante",
    descripcion: "Generación/edición de informes",
    posicion: 10,
  },
  {
    id: "exp-laboratorio",
    titulo: "Laboratorio",
    ruta: "/docs/7-laboratorio",
    descripcion: "Generación/edición de informes",
    posicion: 11,
  },
  {
    id: "final",
    titulo: "Final",
    ruta: "/docs/final",
    descripcion: "Cierre y recursos",
    posicion: 12,
  },
];

interface SidebarProps {
  abierto: boolean;
  onCerrar: () => void;
  /** En false (landing), el sidebar no se muestra en desktop hasta salir de la landing */
  mostrarEnDesktop?: boolean;
}

const Sidebar = ({ abierto, onCerrar, mostrarEnDesktop = true }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay para móvil */}
      {abierto && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onCerrar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 border-r bg-sidebar transition-transform duration-300",
          mostrarEnDesktop ? "lg:translate-x-0" : "lg:-translate-x-full",
          abierto ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="h-full overflow-y-auto scrollbar-thin p-4">
          <div className="mb-4">
            <h2 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contenido
            </h2>
          </div>

          <ul className="space-y-1">
            {seccionesManual.map((seccion) => {
              const activo = !seccion.esExterno && location.pathname === seccion.ruta;
              const esExterno = seccion.esExterno || false;
              const esLanding = seccion.ruta === "/";

              const contenido = (
                <>
                  <IconoSeccion seccion={seccion.id} tamaño="sm" />
                  <div className="flex-1 min-w-0">
                    <span className="block truncate text-sm">
                      {seccion.titulo}
                    </span>
                    {activo && (
                      <span className="block truncate text-xs text-muted-foreground mt-0.5">
                        {seccion.descripcion}
                      </span>
                    )}
                  </div>
                  {!esLanding && (
                    <span className="text-xs text-muted-foreground">
                      {seccion.posicion}
                    </span>
                  )}
                </>
              );
              
              return (
                <li key={seccion.id}>
                  {esExterno ? (
                    <a
                      href={seccion.ruta}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onCerrar}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
                        "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      {contenido}
                    </a>
                  ) : (
                    <Link
                      to={seccion.ruta}
                      onClick={onCerrar}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
                        activo
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      {contenido}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
