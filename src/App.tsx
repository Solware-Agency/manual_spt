import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";

/** Hace scroll al inicio cuando cambia la ruta */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import NotFound from "./pages/NotFound";

// Páginas de documentación (docs)
import IntroduccionPage from "./pages/docs/IntroduccionPage";
import ComoInstalarSolhub from "./pages/docs/ComoInstalarSolHub";
import SolHubPage from "./pages/docs/SolHubPage";
import ExperienciaPropietarioPage from "./pages/docs/1-Owner";
import ExperienciaRecepcionistaPage from "./pages/docs/2-Recepcion";
import ExperienciaMedicoResidentePage from "./pages/docs/3-Enfermería";
import ExperienciaMedicoCitotecnologoPage from "./pages/docs/4-Imagenología";
import ExperienciaMedicoPatologoPage from "./pages/docs/5-Call Center";
import ExperienciaMedicoOwnerPage from "./pages/docs/6-Médico Tratante";
import ExperienciaLaboratorioPage from "./pages/docs/7-Laboratorio";
import FinalPage from "./pages/docs/FinalPage";
import RolesPermisosPage from "./pages/docs/RolesPermisosPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="overflow-x-clip w-full min-w-0">
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rutas de documentación */}
          <Route path="/docs" element={<Navigate to="/docs/inicio" replace />} />

          {/* Compat: ruta antigua */}
          <Route path="/docs/introduccion" element={<Navigate to="/docs/inicio" replace />} />

          <Route path="/docs/inicio" element={<IntroduccionPage />} />
          <Route path="/docs/como-instalar-solhub" element={<ComoInstalarSolhub />} />
          <Route path="/docs/solhub" element={<SolHubPage />} />
          <Route path="/docs/1-owner" element={<ExperienciaPropietarioPage />} />
          <Route path="/docs/2-recepcion" element={<ExperienciaRecepcionistaPage />} />
          <Route path="/docs/3-enfermeria" element={<ExperienciaMedicoResidentePage />} />
          <Route path="/docs/4-imagenologia" element={<ExperienciaMedicoCitotecnologoPage />} />
          <Route path="/docs/5-call-center" element={<ExperienciaMedicoPatologoPage />} />
          <Route path="/docs/6-medico-tratante" element={<ExperienciaMedicoOwnerPage />} />
          <Route path="/docs/7-laboratorio" element={<ExperienciaLaboratorioPage />} />
          <Route path="/docs/final" element={<FinalPage />} />

          {/* Secciones auxiliares */}
          <Route path="/docs/roles-permisos" element={<RolesPermisosPage />} />

          {/* Compat: rutas antiguas de experiencia */}
          <Route path="/docs/experiencia-propietario" element={<Navigate to="/docs/1-owner" replace />} />
          <Route path="/docs/experiencia-recepcionista" element={<Navigate to="/docs/2-recepcion" replace />} />
          <Route path="/docs/experiencia-medico-residente" element={<Navigate to="/docs/3-enfermeria" replace />} />
          <Route path="/docs/experiencia-medico-citotecnologo" element={<Navigate to="/docs/4-imagenologia" replace />} />
          <Route path="/docs/experiencia-medico-patologo" element={<Navigate to="/docs/5-call-center" replace />} />
          <Route path="/docs/experiencia-medico-owner" element={<Navigate to="/docs/6-medico-tratante" replace />} />
          <Route path="/docs/laboratorio" element={<Navigate to="/docs/7-laboratorio" replace />} />
          
          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
