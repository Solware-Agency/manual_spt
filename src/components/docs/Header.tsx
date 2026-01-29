// Header del Manual SolHub — Solware
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import SolwareLogo from "@/components/docs/SolwareLogo";

interface HeaderProps {
  onMenuClick: () => void;
  menuAbierto: boolean;
}

const Header = ({ onMenuClick, menuAbierto }: HeaderProps) => {
  const [temaOscuro, setTemaOscuro] = useState(false);

  useEffect(() => {
    // Verificar preferencia guardada o del sistema
    const temaGuardado = localStorage.getItem("tema");
    const prefiereTemaOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (temaGuardado === "dark" || (!temaGuardado && prefiereTemaOscuro)) {
      setTemaOscuro(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const alternarTema = () => {
    const nuevoTema = !temaOscuro;
    setTemaOscuro(nuevoTema);
    
    if (nuevoTema) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-full min-w-0 overflow-x-clip border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6 gap-4 min-w-0">
        {/* Izquierda: botón menú móvil + logo */}
        <div className="relative z-[60] flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-muted lg:hidden touch-manipulation"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a
            href="https://www.solware.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            aria-label="Solware"
          >
            <SolwareLogo className="h-14 sm:h-16 w-auto" />
          </a>
        </div>

        {/* Derecha: acciones */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 ml-auto">
          <button
            onClick={alternarTema}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={temaOscuro ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {temaOscuro ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="https://api.whatsapp.com/send?phone=%2B584129974533&context=AfdQaFIYoG4xbnNYuYYWrBJ0fQypn2iVMR2TX9Or4nqNa3ruF5Q85KRETWpTmF3QAYqbtNZmAY65Altq-5_0o2QfkKgGH9vmz5uWssRPqLSXTUm2tKeSuNjg6kNH_fHKCtVJI6QZTeKJFV5al0dvklKp3Q&source=FB_Page&app=facebook&entry_point=page_cta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
