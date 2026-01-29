// Header del Manual SolHub — Solware
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 lg:px-6 gap-4">
        {/* Izquierda: menú + Inicio */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Botón menú móvil */}
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-muted lg:hidden"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Inicio */}
          <Link to="/" className="group flex items-center transition-colors">
            <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-green-400">
              Inicio
            </span>
          </Link>
        </div>

        {/* Centro: links (scroll horizontal en pantallas pequeñas) */}
        <nav className="flex-1 min-w-0 overflow-x-auto whitespace-nowrap touch-pan-x">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://www.solhub.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors"
            >
              SolHub
            </a>

            <Link
              to="/docs/introduccion"
              className="flex items-center text-xs sm:text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors"
            >
              Manual
            </Link>

            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28TbL6x8Jj7yLpzgpH2OQ1MV5t5zdvwYRbjCTVKTjj-pNNzSSZ3mGSpguP7Sv4AksuyRdav2bJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors"
            >
              Agenda tu Cita
            </a>

            <a
              href="https://preview.solhub.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors"
            >
              Ver Demostración
            </a>

            {/* Solware (en móvil va en la fila de links para no perderse) */}
            <a
              href="https://www.solware.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:hidden font-medium text-muted-foreground hover:text-green-400 transition-colors"
            >
              Solware
            </a>
          </div>
        </nav>

        {/* Derecha: acciones */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="https://www.solware.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center text-xs sm:text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors"
          >
            Solware
          </a>

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
            Soporte
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
