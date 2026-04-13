export const metadatosPagina = {
  titulo: 'UBBike | Propuesta App',
  descripcion:
    'Propuesta app UBBike para digitalizar el control de ingreso y retiro de bicicletas en la Universidad del Bío-Bío.',
};

export const enlacesNavegacion = [
  { href: '#inicio', etiqueta: 'Inicio' },
  { href: '#problema', etiqueta: 'Problema' },
  { href: '#solucion', etiqueta: 'Solución' },
  { href: '#como-funciona', etiqueta: 'Cómo funciona' },
  { href: '#beneficios', etiqueta: 'Beneficios' },
  { href: '#funcionalidades', etiqueta: 'Funcionalidades' },
  { href: '#tecnologia', etiqueta: 'Tecnología' },
  { href: '#diferenciador', etiqueta: 'Diferenciador' },
  { href: '#alcance', etiqueta: 'Alcance inicial' },
  { href: '#resultados', etiqueta: 'Resultados esperados' },
  { href: '#referentes', etiqueta: 'Referentes revisados' },
  { href: '#contacto', etiqueta: 'Contacto' },
];

export const indicadoresPortada = [
  { etiqueta: 'Registro', valor: 'Digital y centralizado' },
  { etiqueta: 'Acceso', valor: 'QR + validación asistida' },
  { etiqueta: 'Roles', valor: 'Usuario, guardia y administración' },
  { etiqueta: 'Implementación', valor: 'Por etapas y con continuidad operativa' },
];

export const sellosPortada = [
  'Registro digital centralizado para ingreso y retiro.',
  'Validación operativa asistida por guardias en terreno.',
  'Trazabilidad por usuario, bicicleta, fecha y turno.',
];

export const pruebaSocial = [
  {
    titulo: 'Contexto real UBB',
    detalle: 'Definido para el flujo actual de bicicleteros y turnos de operación en campus.',
  },
  {
    titulo: 'Implementación viable',
    detalle: 'Primera etapa útil sin depender de hardware especializado nuevo.',
  },
  {
    titulo: 'Valor institucional',
    detalle: 'Mejora control, tiempos de atención y trazabilidad del servicio.',
  },
];

export const problemasActuales = [
  {
    titulo: 'Registro manual en papel',
    detalle:
      'Cada ingreso y retiro se anota manualmente, lo que ralentiza la atención en horarios de alta demanda.',
  },
  {
    titulo: 'Dependencia del guardia de turno',
    detalle:
      'La continuidad del control depende del traspaso de información entre turnos y registros dispersos.',
  },
  {
    titulo: 'Sin trazabilidad centralizada',
    detalle:
      'No existe una consulta rápida del estado del bicicletero ni del historial completo de movimientos.',
  },
  {
    titulo: 'Riesgo de error humano',
    detalle:
      'El proceso manual aumenta omisiones, datos inconsistentes y demoras en verificaciones.',
  },
];

export const solucionTexto = [
  'Se propone la app UBBike para registrar usuarios y bicicletas, generar códigos QR para ingreso y retiro, y mantener validación asistida por guardias.',
  'Cada movimiento queda almacenado digitalmente para consulta operativa y administrativa.',
  'La propuesta conserva el control humano, aprovecha infraestructura actual y permite evolucionar por etapas.',
];

export const continuidadOperativa =
  'Cuando un usuario no puede mostrar QR por batería o conectividad, se contempla respaldo manual por búsqueda asistida para no detener la operación.';

export const pasosFuncionamiento = [
  {
    titulo: 'Registro único del usuario',
    detalle: 'El usuario se registra una sola vez y asocia su bicicleta al sistema.',
  },
  {
    titulo: 'Generación de QR',
    detalle: 'La app emite un código QR para cada operación de ingreso o retiro.',
  },
  {
    titulo: 'Validación por guardia',
    detalle: 'El guardia escanea el QR y verifica la correspondencia usuario-bicicleta.',
  },
  {
    titulo: 'Registro del movimiento',
    detalle:
      'Se registra fecha, hora, usuario, bicicleta, guardia y bicicletero para trazabilidad completa.',
  },
];

export const beneficiosInstitucion = [
  {
    titulo: 'Reduce tiempos de atención',
    detalle: 'Agiliza ingreso y retiro de bicicletas, especialmente en horas de mayor demanda.',
  },
  {
    titulo: 'Disminuye errores de registro',
    detalle: 'Reduce dependencia de papel y mejora consistencia de datos operativos.',
  },
  {
    titulo: 'Aumenta trazabilidad',
    detalle: 'Permite seguimiento por usuario, bicicleta, guardia, fecha y horario.',
  },
  {
    titulo: 'Mejora continuidad operativa',
    detalle: 'Facilita control entre turnos con información digital disponible en un solo punto.',
  },
  {
    titulo: 'Habilita gestión administrativa',
    detalle: 'Entrega base para paneles, incidencias y reportes de uso del servicio.',
  },
  {
    titulo: 'Escala por etapas',
    detalle: 'Parte con alcance inicial útil y evoluciona sin romper la operación diaria.',
  },
];

export const funcionalidadesClave = [
  'Registro de usuarios y bicicletas',
  'Generación y renovación de QR',
  'Validación asistida por guardia',
  'Control de ingreso y retiro',
  'Historial de movimientos',
  'Respaldo manual operativo',
  'Panel de administración',
  'Reportes de demanda',
  'Gestión de incidencias',
  'Trazabilidad integral',
];

export const tecnologiaUsada = [
  {
    nombre: 'Flutter',
    logo: 'logos/flutter.svg',
    descripcion:
      'Framework principal para construir una app móvil multiplataforma, manteniendo una experiencia coherente en Android y iOS.',
  },
  {
    nombre: 'Dart',
    logo: 'logos/dart.svg',
    descripcion:
      'Lenguaje utilizado para la lógica de negocio y la interfaz, facilitando evolución por etapas de la propuesta.',
  },
];

export const enfoqueTecnologico =
  'La tecnología seleccionada permite construir una aplicación clara para usuario, guardia y administración, con base sólida para escalar funciones de control y reportes.';

export const rolesProducto = [
  {
    rol: 'Usuario',
    objetivo: 'Operar ingreso y retiro de forma rápida, clara y segura.',
    foco: 'Registro, bicicletas asociadas y QR operativo.',
    utilidad:
      'Permite acceso rápido al servicio sin repetir datos en cada ingreso o retiro de bicicleta.',
    accionesClave: [
      'Consultar estado del bicicletero antes de llegar.',
      'Presentar QR vigente para ingreso o retiro en pocos segundos.',
      'Revisar último movimiento validado desde la app.',
    ],
    imagenesClave: [
      {
        ruta: 'imagenes/mockups/mockup_usuario_inicio.png',
        descripcion: 'Vista inicial del usuario con estado del bicicletero y accesos principales.',
      },
      {
        ruta: 'imagenes/mockups/mockup_usuario_qr.png',
        descripcion: 'Código QR listo para validar ingreso o retiro de forma rápida.',
      },
    ],
  },
  {
    rol: 'Guardia',
    objetivo: 'Validar operaciones en terreno con control asistido.',
    foco: 'Escaneo QR, verificación y registro de incidencia.',
    utilidad:
      'Facilita validación operativa en terreno y reduce errores de registro en horarios de alta demanda.',
    accionesClave: [
      'Escanear QR y confirmar identidad usuario-bicicleta.',
      'Registrar ingreso o retiro con confirmación inmediata.',
      'Reportar incidencias para trazabilidad operativa.',
    ],
    imagenesClave: [
      {
        ruta: 'imagenes/mockups/mockup_guardia_escaner.png',
        descripcion: 'Pantalla de escaneo para lectura de QR en acceso.',
      },
      {
        ruta: 'imagenes/mockups/mockup_guardia_validacion.png',
        descripcion: 'Confirmación de ingreso o retiro con datos del usuario y bicicleta.',
      },
    ],
  },
  {
    rol: 'Administración',
    objetivo: 'Monitorear operación y apoyar decisiones con datos.',
    foco: 'Panel operativo, historial y reportes de servicio.',
    utilidad:
      'Entrega visibilidad diaria del servicio para planificar mejoras y tomar decisiones con respaldo.',
    accionesClave: [
      'Supervisar demanda, ocupación e incidencias por turno.',
      'Consultar historial filtrable de movimientos registrados.',
      'Analizar reportes para ajustar la operación del bicicletero.',
    ],
    imagenesClave: [
      {
        ruta: 'imagenes/mockups/mockup_admin_dashboard.png',
        descripcion: 'Panel operativo con indicadores de demanda y ocupación.',
      },
      {
        ruta: 'imagenes/mockups/mockup_admin_movimientos.png',
        descripcion: 'Historial filtrable para seguimiento de operaciones por turno.',
      },
    ],
  },
];

export const diferenciadorPropuesta =
  'UBBike no requiere infraestructura inteligente dedicada para iniciar. Se adapta al flujo real de la UBB, reutiliza los bicicleteros actuales y mantiene la validación del guardia como parte del control operativo. Esto permite una implementación realista y sostenible para la institución.';

export const alcanceInicial = [
  'Registro de usuarios.',
  'Registro de bicicletas.',
  'Generación y uso de QR para ingreso y retiro.',
  'Validación asistida de operaciones.',
  'Control básico del estado del bicicletero.',
];

export const siguientesEtapas = [
  'Historial avanzado por actor.',
  'Incidencias y seguimiento operativo.',
  'Reportes administrativos periódicos.',
  'Indicadores de demanda por horario.',
  'Trazabilidad ampliada para gestión institucional.',
];

export const preguntasComunes = [
  {
    pregunta: '¿Se reemplaza el rol del guardia?',
    respuesta:
      'No. UBBike mantiene validación asistida por guardia y la fortalece con registro digital y mejor visibilidad operativa.',
  },
  {
    pregunta: '¿Se necesita equipamiento especial para comenzar?',
    respuesta:
      'No para la etapa inicial. Se aprovecha la infraestructura actual y dispositivos móviles de operación.',
  },
  {
    pregunta: '¿Qué valor entrega en el corto plazo?',
    respuesta:
      'Menor tiempo de atención, menos errores manuales y trazabilidad centralizada desde la primera etapa.',
  },
];

export const referentesResumen = [
  {
    nombre: 'UdeCMovil (Universidad de Concepción)',
    revision:
      'Sistema institucional con enrolamiento y QR temporal para acceso a bicicleteros cerrados.',
    costoUsuario: 'Sin costo para la comunidad interna de la universidad.',
    valoracion: 'App Store: 2.3 de 5, con 85 calificaciones.',
    diferencia:
      'UBBike se enfoca específicamente en control de ingreso/retiro, validación por guardia e incidencias.',
  },
  {
    nombre: 'UH Go + Bikeep (University of Houston)',
    revision:
      'App institucional conectada a racks inteligentes Bikeep con bloqueo y desbloqueo digital.',
    costoUsuario: 'Uso y registro de bicicleta informados como gratuitos para la comunidad U. Houston.',
    valoracion: 'App Store: 4.3 de 5, con 146 valoraciones.',
    diferencia:
      'UBBike reutiliza infraestructura UBB y no depende de instalar racks inteligentes para operar.',
  },
  {
    nombre: 'UC Davis Bicycle Program (University of California Davis)',
    revision:
      'Programa universitario de almacenamiento en bike locker y bike cage, con enfoque de arriendo.',
    costoUsuario:
      'Tarifas publicadas: depósito US$50, locker US$12/mes, bike cage US$10/mes, verano US$36.',
    valoracion: 'No se reporta una app equivalente con calificación pública comparable.',
    diferencia:
      'UBBike prioriza control institucional con QR y trazabilidad, sin enfoque principal de cobro por estacionamiento.',
  },
  {
    nombre: 'Bikeep plataforma comercial',
    revision:
      'Plataforma comercial con infraestructura inteligente y modelos de cobro configurables por operador.',
    costoUsuario: 'Tarifas finales variables según operador; no existe tarifa pública universal.',
    valoracion: 'App Store: 3.8 de 5, con 17 valoraciones.',
    diferencia:
      'UBBike apunta a una solución institucional ajustada al flujo real UBB, con control operativo asistido.',
  },
];

export const conclusionReferentes =
  'Con base en la revisión realizada, la propuesta actual de UBBike es la alternativa más viable para la UBB, porque se adapta al contexto operativo real del campus, mantiene el control asistido por guardias y reutiliza la infraestructura existente.';

export const viabilidadResumen = [
  {
    titulo: 'Reducción de tiempos de atención',
    detalle: 'Se espera agilizar el ingreso y retiro de bicicletas, especialmente en horas punta.',
  },
  {
    titulo: 'Disminución de errores de registro',
    detalle: 'Se espera mejorar la consistencia de datos al reemplazar el registro manual en papel.',
  },
  {
    titulo: 'Mayor trazabilidad operativa',
    detalle: 'Se espera contar con seguimiento por usuario, bicicleta, guardia, fecha y horario.',
  },
  {
    titulo: 'Mejor control y continuidad del servicio',
    detalle: 'Se espera facilitar la gestión entre turnos y la toma de decisiones con información centralizada.',
  },
];

export const impactoEsperado = [
  {
    metrica: 'Rapidez operativa',
    detalle: 'Disminución de tiempos de atención en ingreso y retiro.',
  },
  {
    metrica: 'Menor error humano',
    detalle: 'Datos más consistentes al reducir registros manuales.',
  },
  {
    metrica: 'Mayor trazabilidad',
    detalle: 'Seguimiento de cada movimiento por actor y horario.',
  },
  {
    metrica: 'Mejor continuidad del servicio',
    detalle: 'Información centralizada para cambios de turno y gestión diaria.',
  },
];

export const contactoPropuesta = {
  correo: 'sebastian.pinto2301@alumnos.ubiobio.cl',
  github: 'https://github.com/SebastianPinto2424',
};

export const mockupsPropuesta = {
  portada: 'imagenes/mockups/mockup_usuario_qr.png',
  solucion: ['imagenes/mockups/mockup_usuario_inicio.png', 'imagenes/mockups/mockup_guardia_escaner.png'],
  flujo: [
    'imagenes/mockups/mockup_usuario_qr.png',
    'imagenes/mockups/mockup_guardia_escaner.png',
    'imagenes/mockups/mockup_guardia_validacion.png',
  ],
  beneficios: 'imagenes/mockups/mockup_admin_dashboard.png',
  resultados: 'imagenes/mockups/mockup_admin_reportes.png',
};
