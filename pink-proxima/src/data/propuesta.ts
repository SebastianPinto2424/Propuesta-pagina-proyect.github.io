export const metadatosPagina = {
  titulo: 'UBBike | Propuesta App',
  descripcion:
    'Propuesta app UBBike para digitalizar el control de ingreso y retiro de bicicletas en la Universidad del Bio-Bio.',
};

export const enlacesNavegacion = [
  { href: '#inicio', etiqueta: 'Inicio' },
  { href: '#problema', etiqueta: 'Problema' },
  { href: '#solucion', etiqueta: 'Solucion' },
  { href: '#como-funciona', etiqueta: 'Como funciona' },
  { href: '#beneficios', etiqueta: 'Beneficios' },
  { href: '#funcionalidades', etiqueta: 'Funcionalidades' },
  { href: '#tecnologia', etiqueta: 'Tecnologia' },
  { href: '#diferenciador', etiqueta: 'Diferenciador' },
  { href: '#alcance', etiqueta: 'Alcance inicial' },
  { href: '#resultados', etiqueta: 'Resultados esperados' },
  { href: '#referentes', etiqueta: 'Referentes revisados' },
  { href: '#contacto', etiqueta: 'Contacto' },
];

export const indicadoresPortada = [
  { etiqueta: 'Registro', valor: 'Digital y centralizado' },
  { etiqueta: 'Acceso', valor: 'QR + validacion asistida' },
  { etiqueta: 'Roles', valor: 'Usuario, guardia y administracion' },
  { etiqueta: 'Implementacion', valor: 'Por etapas y con continuidad operativa' },
];

export const sellosPortada = [
  'Registro digital centralizado para ingreso y retiro.',
  'Validacion operativa asistida por guardias en terreno.',
  'Trazabilidad por usuario, bicicleta, fecha y turno.',
];

export const pruebaSocial = [
  {
    titulo: 'Contexto real UBB',
    detalle: 'Definido para el flujo actual de bicicleteros y turnos de operacion en campus.',
  },
  {
    titulo: 'Implementacion viable',
    detalle: 'Primera etapa util sin depender de hardware especializado nuevo.',
  },
  {
    titulo: 'Valor institucional',
    detalle: 'Mejora control, tiempos de atencion y trazabilidad del servicio.',
  },
];

export const problemasActuales = [
  {
    titulo: 'Registro manual en papel',
    detalle:
      'Cada ingreso y retiro se anota manualmente, lo que ralentiza la atencion en horarios de alta demanda.',
  },
  {
    titulo: 'Dependencia del guardia de turno',
    detalle:
      'La continuidad del control depende del traspaso de informacion entre turnos y registros dispersos.',
  },
  {
    titulo: 'Sin trazabilidad centralizada',
    detalle:
      'No existe una consulta rapida del estado del bicicletero ni del historial completo de movimientos.',
  },
  {
    titulo: 'Riesgo de error humano',
    detalle:
      'El proceso manual aumenta omisiones, datos inconsistentes y demoras en verificaciones.',
  },
];

export const solucionTexto = [
  'UBBike propone una app movil para registrar usuarios y bicicletas, generar codigos QR para ingreso y retiro, y mantener validacion asistida por guardias.',
  'Cada movimiento queda almacenado digitalmente para consulta operativa y administrativa.',
  'La propuesta conserva el control humano, aprovecha infraestructura actual y permite evolucionar por etapas.',
];

export const continuidadOperativa =
  'Cuando un usuario no puede mostrar QR por bateria o conectividad, se contempla respaldo manual por busqueda asistida para no detener la operacion.';

export const pasosFuncionamiento = [
  {
    titulo: 'Registro unico del usuario',
    detalle: 'El usuario se registra una sola vez y asocia su bicicleta al sistema.',
  },
  {
    titulo: 'Generacion de QR',
    detalle: 'La app emite un codigo QR para cada operacion de ingreso o retiro.',
  },
  {
    titulo: 'Validacion por guardia',
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
    titulo: 'Reduce tiempos de atencion',
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
    detalle: 'Facilita control entre turnos con informacion digital disponible en un solo punto.',
  },
  {
    titulo: 'Habilita gestion administrativa',
    detalle: 'Entrega base para paneles, incidencias y reportes de uso del servicio.',
  },
  {
    titulo: 'Escala por etapas',
    detalle: 'Parte con alcance inicial util y evoluciona sin romper la operacion diaria.',
  },
];

export const funcionalidadesClave = [
  'Registro de usuarios y bicicletas',
  'Generacion y renovacion de QR',
  'Validacion asistida por guardia',
  'Control de ingreso y retiro',
  'Historial de movimientos',
  'Respaldo manual operativo',
  'Panel de administracion',
  'Reportes de demanda',
  'Gestion de incidencias',
  'Trazabilidad integral',
];

export const tecnologiaUsada = [
  {
    nombre: 'Flutter',
    logo: 'logos/flutter.svg',
    descripcion:
      'Framework principal para construir una app movil multiplataforma, manteniendo una experiencia coherente en Android y iOS.',
  },
  {
    nombre: 'Dart',
    logo: 'logos/dart.svg',
    descripcion:
      'Lenguaje utilizado para la logica de negocio y la interfaz, facilitando evolucion por etapas de la propuesta.',
  },
];

export const enfoqueTecnologico =
  'La tecnologia seleccionada permite construir una aplicacion clara para usuario, guardia y administracion, con base solida para escalar funciones de control y reportes.';

export const rolesProducto = [
  {
    rol: 'Usuario',
    objetivo: 'Operar ingreso y retiro de forma rapida, clara y segura.',
    foco: 'Registro, bicicletas asociadas y QR operativo.',
    utilidad:
      'Permite acceso rapido al servicio sin repetir datos en cada ingreso o retiro de bicicleta.',
    accionesClave: [
      'Consultar estado del bicicletero antes de llegar.',
      'Presentar QR vigente para ingreso o retiro en pocos segundos.',
      'Revisar ultimo movimiento validado desde la app.',
    ],
    imagenesClave: [
      {
        ruta: 'imagenes/mockups/mockup_usuario_inicio.png',
        descripcion: 'Vista inicial del usuario con estado del bicicletero y accesos principales.',
      },
      {
        ruta: 'imagenes/mockups/mockup_usuario_qr.png',
        descripcion: 'Codigo QR listo para validar ingreso o retiro de forma rapida.',
      },
    ],
  },
  {
    rol: 'Guardia',
    objetivo: 'Validar operaciones en terreno con control asistido.',
    foco: 'Escaneo QR, verificacion y registro de incidencia.',
    utilidad:
      'Facilita validacion operativa en terreno y reduce errores de registro en horarios de alta demanda.',
    accionesClave: [
      'Escanear QR y confirmar identidad usuario-bicicleta.',
      'Registrar ingreso o retiro con confirmacion inmediata.',
      'Reportar incidencias para trazabilidad operativa.',
    ],
    imagenesClave: [
      {
        ruta: 'imagenes/mockups/mockup_guardia_escaner.png',
        descripcion: 'Pantalla de escaneo para lectura de QR en acceso.',
      },
      {
        ruta: 'imagenes/mockups/mockup_guardia_validacion.png',
        descripcion: 'Confirmacion de ingreso o retiro con datos del usuario y bicicleta.',
      },
    ],
  },
  {
    rol: 'Administracion',
    objetivo: 'Monitorear operacion y apoyar decisiones con datos.',
    foco: 'Panel operativo, historial y reportes de servicio.',
    utilidad:
      'Entrega visibilidad diaria del servicio para planificar mejoras y tomar decisiones con respaldo.',
    accionesClave: [
      'Supervisar demanda, ocupacion e incidencias por turno.',
      'Consultar historial filtrable de movimientos registrados.',
      'Analizar reportes para ajustar la operacion del bicicletero.',
    ],
    imagenesClave: [
      {
        ruta: 'imagenes/mockups/mockup_admin_dashboard.png',
        descripcion: 'Panel operativo con indicadores de demanda y ocupacion.',
      },
      {
        ruta: 'imagenes/mockups/mockup_admin_movimientos.png',
        descripcion: 'Historial filtrable para seguimiento de operaciones por turno.',
      },
    ],
  },
];

export const diferenciadorPropuesta =
  'UBBike no requiere infraestructura inteligente dedicada para iniciar. Se adapta al flujo real de la UBB, reutiliza los bicicleteros actuales y mantiene la validacion del guardia como parte del control operativo. Esto permite una implementacion realista y sostenible para la institucion.';

export const alcanceInicial = [
  'Registro de usuarios.',
  'Registro de bicicletas.',
  'Generacion y uso de QR para ingreso y retiro.',
  'Validacion asistida de operaciones.',
  'Control basico del estado del bicicletero.',
];

export const siguientesEtapas = [
  'Historial avanzado por actor.',
  'Incidencias y seguimiento operativo.',
  'Reportes administrativos periodicos.',
  'Indicadores de demanda por horario.',
  'Trazabilidad ampliada para gestion institucional.',
];

export const preguntasComunes = [
  {
    pregunta: 'Se reemplaza el rol del guardia?',
    respuesta:
      'No. UBBike mantiene validacion asistida por guardia y la fortalece con registro digital y mejor visibilidad operativa.',
  },
  {
    pregunta: 'Se necesita equipamiento especial para comenzar?',
    respuesta:
      'No para la etapa inicial. Se aprovecha la infraestructura actual y dispositivos moviles de operacion.',
  },
  {
    pregunta: 'Que valor entrega en el corto plazo?',
    respuesta:
      'Menor tiempo de atencion, menos errores manuales y trazabilidad centralizada desde la primera etapa.',
  },
];

export const referentesResumen = [
  {
    nombre: 'UdeCMovil (Universidad de Concepcion)',
    revision:
      'Sistema institucional con enrolamiento y QR temporal para acceso a bicicleteros cerrados.',
    costoUsuario: 'Sin costo para la comunidad interna de la universidad.',
    valoracion: 'App Store: 2.3 de 5, con 85 calificaciones.',
    diferencia:
      'UBBike se enfoca especificamente en control de ingreso/retiro, validacion por guardia e incidencias.',
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
      'Tarifas publicadas: deposito US$50, locker US$12/mes, bike cage US$10/mes, verano US$36.',
    valoracion: 'No se reporta una app equivalente con calificacion publica comparable.',
    diferencia:
      'UBBike prioriza control institucional con QR y trazabilidad, sin enfoque principal de cobro por estacionamiento.',
  },
  {
    nombre: 'Bikeep plataforma comercial',
    revision:
      'Plataforma comercial con infraestructura inteligente y modelos de cobro configurables por operador.',
    costoUsuario: 'Tarifas finales variables segun operador; no existe tarifa publica universal.',
    valoracion: 'App Store: 3.8 de 5, con 17 valoraciones.',
    diferencia:
      'UBBike apunta a una solucion institucional ajustada al flujo real UBB, con control operativo asistido.',
  },
];

export const conclusionReferentes =
  'Con base en la revision realizada, la propuesta actual de UBBike es la alternativa mas viable para la UBB, porque se adapta al contexto operativo real del campus, mantiene el control asistido por guardias y reutiliza la infraestructura existente.';

export const viabilidadResumen = [
  {
    titulo: 'Problema real y visible',
    detalle: 'El proceso actual en papel genera demoras, errores y baja trazabilidad.',
  },
  {
    titulo: 'Encaje con la operacion UBB',
    detalle: 'La solucion considera turnos, validacion en terreno y continuidad del servicio.',
  },
  {
    titulo: 'Implementacion por etapas',
    detalle: 'Permite partir con alcance inicial y ampliar funcionalidades de gestion progresivamente.',
  },
  {
    titulo: 'Sustento para decisiones',
    detalle: 'Entrega informacion util para control, reportes y mejora continua del servicio.',
  },
];

export const impactoEsperado = [
  {
    metrica: 'Rapidez operativa',
    detalle: 'Disminucion de tiempos de atencion en ingreso y retiro.',
  },
  {
    metrica: 'Menor error humano',
    detalle: 'Datos mas consistentes al reducir registros manuales.',
  },
  {
    metrica: 'Mayor trazabilidad',
    detalle: 'Seguimiento de cada movimiento por actor y horario.',
  },
  {
    metrica: 'Mejor continuidad del servicio',
    detalle: 'Informacion centralizada para cambios de turno y gestion diaria.',
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
