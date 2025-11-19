// Datos base extraídos/resumidos del documento
const data = {
  actores: {
    title: "Actores del negocio",
    description:
      "Roles principales que intervienen en la gestión del restaurante, desde la cocina hasta las finanzas.",
    meta: [
      "Gerente, responsable financiero y jefe de cocina",
      "Camareros, cocineros, clientes y proveedores"
    ],
    hint:
      "Puedes usar esta estructura para mapear estos actores a usuarios y roles de tu sistema (perfiles, permisos, etc.).",
    items: [
      {
        nombre: "Gerente",
        tipo: "Gestión",
        descripcion:
          "Garantiza el correcto funcionamiento del establecimiento, supervisando productividad, calidad, servicio al cliente y rentabilidad.",
        tags: ["Toma de decisiones", "Control global"]
      },
      {
        nombre: "Responsable financiero",
        tipo: "Finanzas",
        descripcion:
          "Administra el capital financiero, gestiona nóminas, controla el flujo de caja y elabora reportes periódicos.",
        tags: ["Presupuesto", "Control de caja"]
      },
      {
        nombre: "Jefe de cocina",
        tipo: "Producción",
        descripcion:
          "Coordina a los cocineros, diseña platos para la carta y asegura que las recetas se cumplan con calidad y en tiempo.",
        tags: ["Recetas", "Calidad de platos"]
      },
      {
        nombre: "Cocinero",
        tipo: "Producción",
        descripcion:
          "Prepara los platos que los clientes piden siguiendo las recetas y bajo la dirección del jefe de cocina.",
        tags: ["Preparación", "Estándares de receta"]
      },
      {
        nombre: "Responsable de compras",
        tipo: "Inventario",
        descripcion:
          "Controla el inventario y realiza las compras de insumos, utensilios y materiales necesarios para la operación.",
        tags: ["Abastecimiento", "Stock"]
      },
      {
        nombre: "Camarero",
        tipo: "Servicio",
        descripcion:
          "Trata directamente con los clientes, toma los pedidos, actúa como mediador con cocina y gestiona la cuenta.",
        tags: ["Atención al cliente", "Pedidos"]
      },
      {
        nombre: "Clientes",
        tipo: "Fuente de ingreso",
        descripcion:
          "Solicitan platos, consumen el servicio y realizan el pago, siendo la principal fuente de ingresos del negocio.",
        tags: ["Demanda", "Satisfacción"]
      },
      {
        nombre: "Proveedores",
        tipo: "Abastecimiento",
        descripcion:
          "Suministran la materia prima e insumos; se seleccionan según calidad, precio y tiempos de entrega.",
        tags: ["Calidad insumos", "Cumplimiento"]
      }
    ]
  },

  casos: {
    title: "Casos de uso del negocio",
    description:
      "Procesos clave que estructuran cómo funciona el restaurante a nivel operativo.",
    meta: [
      "Gestión de pedido, inventario y recetas",
      "Producción, finanzas y pagos"
    ],
    hint:
      "Esta vista puede servir de base para definir pantallas, endpoints y flujos en tu sistema.",
    items: [
      {
        nombre: "CU1 – Gestión de pedido",
        prioridad: "Alta",
        actores: "Camarero, Cliente",
        proposito: "Permitir a los clientes solicitar un pedido.",
        descripcion:
          "El camarero muestra la carta, el cliente selecciona platos, el pedido se registra y se envía a cocina, con manejo de faltantes y peticiones especiales.",
        tags: ["Carta digital", "Control de stock", "Notificaciones a meseros"]
      },
      {
        nombre: "CU2 – Gestión de inventario",
        prioridad: "Alta",
        actores: "Responsable de compras, Gerente",
        proposito:
          "Supervisar, registrar y controlar la disponibilidad de insumos necesarios para la operación.",
        descripcion:
          "Se revisa el inventario, se detectan faltantes o mermas, se toman decisiones de abastecimiento y se actualizan existencias después de producción o recepción.",
        tags: ["Alertas de stock", "Histórico de movimientos"]
      },
      {
        nombre: "CU3 – Gestión de recetas y menú",
        prioridad: "Alta",
        actores: "Gerente, Jefe de cocina",
        proposito: "Definir los platos de la carta y sus recetas formales.",
        descripcion:
          "Se define el enfoque del restaurante, se analizan platos y demanda, se calculan costos y se documentan recetas con ingredientes y cantidades.",
        tags: ["Costeo de platos", "Base de recetas"]
      },
      {
        nombre: "CU4 – Gestión de producción",
        prioridad: "Alta",
        actores: "Cocinero, Jefe de cocina",
        proposito:
          "Preparar el platillo solicitado por el cliente con calidad y en el menor tiempo posible.",
        descripcion:
          "El jefe de cocina recibe el pedido, descompone en subrecetas, asigna tareas a cocineros y valida la preparación antes de entregar al camarero.",
        tags: ["Monitoreo en cocina", "Control de tiempos"]
      },
      {
        nombre: "CU5 – Gestión de finanzas",
        prioridad: "Alta",
        actores: "Responsable financiero, Gerente",
        proposito:
          "Controlar y optimizar los recursos financieros del negocio.",
        descripcion:
          "Se elaboran presupuestos mensuales, se registran ingresos y egresos y se generan reportes para la toma de decisiones.",
        tags: ["Reportes automáticos", "Análisis de rentabilidad"]
      },
      {
        nombre: "CU6 – Proceso de pago",
        prioridad: "Alta",
        actores: "Camarero, Cliente",
        proposito: "Gestionar el pago de lo consumido.",
        descripcion:
          "El cliente solicita la cuenta, el camarero la presenta, se recibe el dinero y se registra el pago para control de ingresos.",
        tags: ["Facturación", "Conciliación de caja"]
      },
      {
        nombre: "CU7 – Realizar pedido a proveedor",
        prioridad: "Media",
        actores: "Responsable de compras, Proveedor",
        proposito:
          "Solicitar los insumos necesarios y actualizar el inventario al recibirlos.",
        descripcion:
          "Se identifican necesidades de abastecimiento, se eligen proveedores, se formaliza el pedido y se registran entregas, devoluciones o incidencias.",
        tags: ["Pedidos automáticos", "Catálogo de proveedores"]
      }
    ]
  },

  reglas: {
    title: "Reglas del negocio",
    description:
      "Políticas, controles y lineamientos que aseguran consistencia operativa y financiera.",
    meta: [
      "Control de existencias, recetas y producción",
      "Pagos, finanzas y servicio al cliente"
    ],
    hint:
      "Estas reglas son candidatas directas a validaciones de negocio, políticas de acceso y automatismos en tu sistema.",
    items: [
      {
        codigo: "RN1",
        nombre: "Control de existencias antes de aceptar pedidos",
        tipo: "Operativa",
        implicacion:
          "Antes de confirmar un pedido se verifica la disponibilidad de ingredientes; no se ofrecen platos sin insumos.",
        tags: ["Validación de stock", "Bloqueo de pedido"]
      },
      {
        codigo: "RN2",
        nombre: "Actualización inmediata del inventario",
        tipo: "Operativa",
        implicacion:
          "Todo consumo o recepción de insumos debe registrarse en el momento para mantener existencias actualizadas.",
        tags: ["Sincronización", "Trazabilidad"]
      },
      {
        codigo: "RN3",
        nombre: "Definición formal de recetas",
        tipo: "Política",
        implicacion:
          "Las recetas deben documentarse con ingredientes, cantidades, tiempos y costos y ser aprobadas antes de ofrecerse.",
        tags: ["Estandarización", "Aprobación"]
      },
      {
        codigo: "RN4",
        nombre: "Cumplimiento estricto de las recetas",
        tipo: "Control",
        implicacion:
          "Los cocineros siguen las recetas aprobadas para garantizar calidad y control de costos.",
        tags: ["Calidad", "Costos"]
      },
      {
        codigo: "RN5",
        nombre: "Validación de calidad y tiempos de entrega",
        tipo: "Control",
        implicacion:
          "El jefe de cocina revisa cada plato en presentación, sabor, temperatura y tiempo de entrega.",
        tags: ["Calidad de servicio", "Supervisión"]
      },
      {
        codigo: "RN10",
        nombre: "Registro y control financiero",
        tipo: "Financiera",
        implicacion:
          "Todo movimiento financiero se registra y se generan reportes mensuales para el gerente.",
        tags: ["Registros", "Reportes"]
      },
      {
        codigo: "RN11",
        nombre: "Políticas de pago y facturación",
        tipo: "Financiera",
        implicacion:
          "Los pagos se registran al momento y se respaldan con comprobantes; el dinero se entrega al cierre al responsable financiero.",
        tags: ["Facturación", "Caja"]
      },
      {
        codigo: "RN15",
        nombre: "Estándares de servicio al cliente",
        tipo: "Servicio",
        implicacion:
          "El personal debe ofrecer atención amable, eficiente y registrar y atender quejas en un plazo máximo definido.",
        tags: ["Satisfacción", "Soporte"]
      }
    ]
  }
};

const sectionTitleEl = document.getElementById("sectionTitle");
const sectionDescEl = document.getElementById("sectionDescription");
const sectionMetaEl = document.getElementById("sectionMeta");
const sectionContentEl = document.getElementById("sectionContent");
const sectionHintEl = document.getElementById("sectionHint");
const navButtons = document.querySelectorAll(".nav button");

function renderActores() {
  const { title, description, meta, hint, items } = data.actores;
  sectionTitleEl.textContent = title;
  sectionDescEl.textContent = description;
  sectionHintEl.textContent = hint;

  sectionMetaEl.innerHTML = "";
  meta.forEach((m) => {
    const pill = document.createElement("div");
    pill.className = "meta-pill";
    pill.innerHTML = `<span class="dot"></span>${m}`;
    sectionMetaEl.appendChild(pill);
  });

  sectionContentEl.innerHTML = "";
  items.forEach((actor) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">${actor.nombre}</h3>
        <span class="card-badge">${actor.tipo}</span>
      </div>
      <p class="card-body">${actor.descripcion}</p>
      <div class="card-tags">
        ${actor.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}
      </div>
    `;
    sectionContentEl.appendChild(card);
  });
}

function renderCasos() {
  const { title, description, meta, hint, items } = data.casos;
  sectionTitleEl.textContent = title;
  sectionDescEl.textContent = description;
  sectionHintEl.textContent = hint;

  sectionMetaEl.innerHTML = "";
  meta.forEach((m) => {
    const pill = document.createElement("div");
    pill.className = "meta-pill";
    pill.innerHTML = `<span class="dot"></span>${m}`;
    sectionMetaEl.appendChild(pill);
  });

  sectionContentEl.innerHTML = "";
  items.forEach((cu) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">${cu.nombre}</h3>
        <span class="card-badge">Prioridad ${cu.prioridad}</span>
      </div>
      <p class="card-body">
        <span class="hl">Actores:</span> ${cu.actores}<br/>
        <span class="hl">Propósito:</span> ${cu.proposito}<br/>
        ${cu.descripcion}
      </p>
      <div class="card-tags">
        ${cu.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}
      </div>
    `;
    sectionContentEl.appendChild(card);
  });
}

function renderReglas() {
  const { title, description, meta, hint, items } = data.reglas;
  sectionTitleEl.textContent = title;
  sectionDescEl.textContent = description;
  sectionHintEl.textContent = hint;

  sectionMetaEl.innerHTML = "";
  meta.forEach((m) => {
    const pill = document.createElement("div");
    pill.className = "meta-pill";
    pill.innerHTML = `<span class="dot"></span>${m}`;
    sectionMetaEl.appendChild(pill);
  });

  sectionContentEl.innerHTML = "";
  items.forEach((rn) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">${rn.codigo} · ${rn.nombre}</h3>
        <span class="card-badge">${rn.tipo}</span>
      </div>
      <p class="card-body">
        <span class="hl">Implicación:</span> ${rn.implicacion}
      </p>
      <div class="card-tags">
        ${rn.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}
      </div>
    `;
    sectionContentEl.appendChild(card);
  });
}

function setActive(view) {
  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });

  if (view === "actores") renderActores();
  if (view === "casos") renderCasos();
  if (view === "reglas") renderReglas();
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActive(btn.dataset.view);
  });
});

// Render inicial
renderActores();
