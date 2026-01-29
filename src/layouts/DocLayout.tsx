import { useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/docs/Header";
import Sidebar from "@/components/docs/Sidebar";
import Footer from "@/components/docs/Footer";
import Breadcrumbs from "@/components/docs/Breadcrumbs";
import TablaContenido from "@/components/docs/TablaContenido";
import NavegacionDoc from "@/components/docs/NavegacionDoc";
import IconoSeccion from "@/components/docs/IconoSeccion";
import { seccionesManual } from "@/components/docs/Sidebar";
interface SeccionToc {
  id: string;
  titulo: string;
  nivel: number;
}

interface DocLayoutProps {
  children: ReactNode;
  titulo: string;
  descripcion?: string;
  seccionId: string;
  secciones?: SeccionToc[];
}

/**
 * Layout principal para páginas de documentación
 */
const DocLayout = ({
  children,
  titulo,
  descripcion,
  seccionId,
  secciones = [],
}: DocLayoutProps) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  // Obtener información de la sección actual
  const seccionActual = seccionesManual.find((s) => s.id === seccionId);
  const totalSecciones = seccionesManual.filter((s) => !s.esExterno).length;

  // Construir breadcrumbs
  const breadcrumbItems = [
    { etiqueta: "Documentación", ruta: "/docs/inicio" },
    { etiqueta: titulo },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip w-full min-w-0 max-w-full">
      <Header
        onMenuClick={() => setMenuAbierto(!menuAbierto)}
        menuAbierto={menuAbierto}
      />

      <div className="flex-1 flex min-w-0">
        <Sidebar abierto={menuAbierto} onCerrar={() => setMenuAbierto(false)} />

        {/* Contenido principal */}
        <main className="flex-1 min-w-0 lg:pl-72 overflow-x-clip">
          <div className="container max-w-6xl py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8 w-full max-w-full overflow-x-clip">
            <div className="flex flex-col gap-6 xl:flex-row xl:gap-12">
              {/* Área de contenido */}
              <article className="flex-1 min-w-0 animate-fade-in">
                <Breadcrumbs items={breadcrumbItems} />

                {/* Encabezado de la página */}
                <header className="mb-6 sm:mb-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 mb-4">
                    <IconoSeccion seccion={seccionId} tamaño="lg" />
                    <div className="min-w-0">
                      {seccionActual && (
                        <span className="text-sm text-primary font-medium">
                          Sección {seccionActual.posicion} de {totalSecciones}
                        </span>
                      )}
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                        {titulo}
                      </h1>
                    </div>
                  </div>
                  {descripcion && (
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      {descripcion}
                    </p>
                  )}
                </header>

                {/* Contenido del documento */}
                <div className="doc-content">{children}</div>

                {/* Navegación anterior/siguiente */}
                <NavegacionDoc rutaActual={location.pathname} />
              </article>

              {/* Tabla de contenido */}
              <TablaContenido secciones={secciones} />
            </div>
          </div>

          <Footer />
        </main>
      </div>

    </div>
  );
};

export default DocLayout;
