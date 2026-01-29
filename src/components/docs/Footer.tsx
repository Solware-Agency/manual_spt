// Footer Solware — bloque único centrado con enlaces de comunidad
// Estilo idéntico al manual SolHub pero con branding Solware
import { Linkedin, Instagram, Phone, Mail } from "lucide-react";

// URL de WhatsApp con contexto completo
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=%2B584129974533&context=AfdQaFIYoG4xbnNYuYYWrBJ0fQypn2iVMR2TX9Or4nqNa3ruF5Q85KRETWpTmF3QAYqbtNZmAY65Altq-5_0o2QfkKgGH9vmz5uWssRPqLSXTUm2tKeSuNjg6kNH_fHKCtVJI6QZTeKJFV5al0dvklKp3Q&source=FB_Page&app=facebook&entry_point=page_cta";

const Footer = () => {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="footer-solware py-12 w-full max-w-full overflow-x-clip">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        {/* Bloque único centrado */}
        <div className="text-center">
          {/* Título de la sección */}
          <h3 className="footer__title text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            Forma parte de nuestra comunidad
          </h3>
          
          {/* Enlaces de contacto y redes */}
          <div className="flex flex-col items-center gap-6 mb-8">
            {/* Íconos en una sola línea */}
            <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-5 w-full">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/agencia-solware/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link inline-flex items-center gap-2 hover:underline whitespace-nowrap"
                aria-label="LinkedIn de Solware"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/solware_/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link inline-flex items-center gap-2 hover:underline whitespace-nowrap"
                aria-label="Instagram de Solware"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </a>
              
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link inline-flex items-center gap-2 hover:underline whitespace-nowrap"
                aria-label="WhatsApp de Solware"
              >
                <svg 
                  className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              
              {/* Teléfono */}
              <a
                href="tel:+584129974533"
                className="footer-social-link inline-flex items-center gap-2 hover:underline whitespace-nowrap"
                aria-label="Llamar a Solware"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </a>

              {/* Email */}
              <a
                href="mailto:ventas@solware.agency"
                className="footer-social-link inline-flex items-center gap-2 hover:underline whitespace-nowrap"
                aria-label="Correo de ventas Solware"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="footer__copyright text-sm">
            © {añoActual}{" "}
            <a
              href="https://www.solware.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              Solware
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
