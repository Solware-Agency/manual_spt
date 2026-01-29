import { 
  BookOpen, 
  ShoppingCart, 
  Package, 
  Boxes, 
  ClipboardList, 
  Users, 
  Settings, 
  Shield, 
  BarChart3, 
  HelpCircle,
  Home,
  Stethoscope,
  LucideIcon
} from "lucide-react";

// Mapeo de iconos por sección
const iconosPorSeccion: Record<string, LucideIcon> = {
  // Nueva estructura SolHub
  landing: Home,
  inicio: BookOpen,
  "como-instalar-solhub": BookOpen,
  solhub: Stethoscope,
  "exp-propietario": Users,
  "exp-recepcionista": Users,
  "exp-medico-residente": ClipboardList,
  "exp-medico-citotecnologo": ClipboardList,
  "exp-medico-patologo": ClipboardList,
  "exp-medico-owner": Shield,
  "exp-laboratorio": Shield,
  final: HelpCircle,
  "roles-permisos": Shield,

  // Legado (por compatibilidad)
  introduccion: BookOpen,
  ventas: ShoppingCart,
  productos: Package,
  inventario: Boxes,
  pedidos: ClipboardList,
  clientes: Users,
  configuracion: Settings,
  seguridad: Shield,
  reportes: BarChart3,
  soporte: HelpCircle,
  definicion: Home,
};

// Colores de fondo para cada sección
const coloresPorSeccion: Record<string, string> = {
  // Nueva estructura SolHub
  landing: "bg-primary/10 text-primary",
  inicio: "bg-primary/10 text-primary",
  "como-instalar-solhub": "bg-cyan-500/10 text-cyan-500",
  solhub: "bg-teal-500/10 text-teal-500",
  "exp-propietario": "bg-accent/10 text-accent",
  "exp-recepcionista": "bg-pink-500/10 text-pink-500",
  "exp-medico-residente": "bg-blue-500/10 text-blue-500",
  "exp-medico-citotecnologo": "bg-purple-500/10 text-purple-500",
  "exp-medico-patologo": "bg-orange-500/10 text-orange-500",
  "exp-medico-owner": "bg-red-500/10 text-red-500",
  "exp-laboratorio": "bg-red-500/10 text-red-500",
  final: "bg-amber-500/10 text-amber-500",
  "roles-permisos": "bg-red-500/10 text-red-500",

  // Legado (por compatibilidad)
  introduccion: "bg-primary/10 text-primary",
  ventas: "bg-accent/10 text-accent",
  productos: "bg-orange-500/10 text-orange-500",
  inventario: "bg-purple-500/10 text-purple-500",
  pedidos: "bg-blue-500/10 text-blue-500",
  clientes: "bg-pink-500/10 text-pink-500",
  configuracion: "bg-slate-500/10 text-slate-500",
  seguridad: "bg-red-500/10 text-red-500",
  reportes: "bg-emerald-500/10 text-emerald-500",
  soporte: "bg-amber-500/10 text-amber-500",
  definicion: "bg-cyan-500/10 text-cyan-500",
};

interface IconoSeccionProps {
  seccion: string;
  tamaño?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Componente para mostrar iconos de cada sección de documentación
 * @param seccion - Identificador de la sección
 * @param tamaño - Tamaño del icono (sm, md, lg)
 */
const IconoSeccion = ({ seccion, tamaño = "md", className = "" }: IconoSeccionProps) => {
  const Icono = iconosPorSeccion[seccion] || BookOpen;
  const colores = coloresPorSeccion[seccion] || "bg-primary/10 text-primary";
  
  const tamaños = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const tamañosIcono = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return (
    <div 
      className={`${colores} ${tamaños[tamaño]} rounded-xl inline-flex items-center justify-center ${className}`}
    >
      <Icono size={tamañosIcono[tamaño]} strokeWidth={2} />
    </div>
  );
};

export default IconoSeccion;
