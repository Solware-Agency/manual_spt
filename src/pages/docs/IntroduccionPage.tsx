import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "solhub", titulo: "SolHub", nivel: 2 },
];

const IntroduccionPage = () => {
  return (
    <DocLayout
      titulo="Introducción"
      descripcion="Bienvenida al manual de operaciones para ver el funcionamiento de Solhub."
      seccionId="inicio"
      secciones={secciones}
    >
      <h2 id="solhub">Solhub</h2>
      <p>
      En el sector de la salud, la gestión eficiente de los laboratorios patológicos es un pilar fundamental para garantizar diagnósticos 
      confiables y una atención al paciente de alta calidad. Sin embargo, los procesos manuales y la fragmentación de datos a menudo resultan 
      en errores, retrasos y una sobrecarga de trabajo para el personal
      </p>
      
      <p>
      Para abordar estos desafíos, presentamos Solhub, una solución integral y robusta, diseñada para transformar la administración de laboratorios patológicos y clínicas en general. Solhub es un ecosistema digital que facilita la gestión administrativa de cualquier centro clínico, eliminando la fragmentación administrativa al centralizar la gestión de pacientes, la agenda de citas, el flujo de trabajo del laboratorio, y la generación de reportes automáticos en un solo lugar.
      </p>

      <p>
      Nuestro ecosistema, esta digitalizado y optimizado en cada etapa del flujo de trabajo, desde el registro de pacientes hasta el análisis de la rentabilidad del laboratorio. Al centralizar toda la información en un entorno seguro, no solo mejoramos la eficiencia operativa y reducimos los costos, sino que también garantizamos una mayor precisión en los datos. Además, esta automatización se encarga de las tareas repetitivas que agobian al personal en el día a día, como la conversión de divisas (dólares a bolívares y viceversa), permitiendo un aumento significativo en la productividad del laboratorio clínico.
      </p>
    </DocLayout>
  );
};

export default IntroduccionPage;
