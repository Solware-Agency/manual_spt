import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SolwareLogo from "@/components/docs/SolwareLogo";
import IconoSeccion from "@/components/docs/IconoSeccion";
import { seccionesManual } from "@/components/docs/Sidebar";
import Footer from "@/components/docs/Footer";
import Header from "@/components/docs/Header";
import Sidebar from "@/components/docs/Sidebar";

const Index = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip w-full min-w-0 max-w-full">
      <Header onMenuClick={() => setMenuAbierto(!menuAbierto)} menuAbierto={menuAbierto} />

      <div className="flex-1 flex min-w-0">
        <Sidebar abierto={menuAbierto} onCerrar={() => setMenuAbierto(false)} mostrarEnDesktop={false} />

        <div className="flex-1 min-w-0">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 w-full max-w-full">
        <div className="container py-16 lg:py-24 w-full max-w-full">
          <div className="max-w-3xl mx-auto text-center">
            <SolwareLogo className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 sm:mb-10">
              Manual{" "}
              <span className="text-gradient">SolHub</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tu guía completa para una gestión sin límites
            </p>
            <Link
              to="/docs/inicio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Comenzar a leer
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        
        {/* Decoración (clipped para no generar scroll horizontal) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </header>

      {/* Secciones */}
      <main className="flex-1 py-16 lg:py-24 w-full min-w-0 overflow-x-clip">
        <div className="container w-full max-w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Contenido del Manual
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {seccionesManual.map((seccion) => {
              const className =
                "group p-6 rounded-2xl border bg-card hover:border-primary hover:shadow-lg transition-all duration-300";

              const esInicio = seccion.ruta === "/";
              const contenido = (
                <div className="flex items-start gap-4">
                  <IconoSeccion seccion={seccion.id} tamaño="md" />
                  <div className="flex-1">
                    {!esInicio && (
                      <span className="text-xs text-muted-foreground">
                        Sección {seccion.posicion}
                      </span>
                    )}
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {seccion.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {seccion.descripcion}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors mt-1"
                  />
                </div>
              );

              return seccion.esExterno ? (
                <a
                  key={seccion.id}
                  href={seccion.ruta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {contenido}
                </a>
              ) : (
                <Link key={seccion.id} to={seccion.ruta} className={className}>
                  {contenido}
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
