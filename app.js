/*
  ARCHIVO PRINCIPAL DE LÓGICA
  ----------------------------
  Acá no hace falta que toques nada (salvo que quieras
  cambiar el centro del mapa). Esto lee los datos de
  "datos.js" y construye el mapa + la lista de tarjetas.
*/

// ===== 1. CREAR EL MAPA =====
// Coordenadas aproximadas del centro de San Carlos de Bolívar
const mapa = L.map('mapa').setView([-36.1538, -61.1156], 14);

// Las "tiles" son las imágenes que forman el mapa visualmente
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);


// ===== 2. FUNCIÓN PARA SABER SI UN LOCAL ESTÁ ABIERTO =====
function estaAbierto(local) {
  const ahora = new Date();
  const diaSemana = ahora.getDay(); // 0 = domingo, 1 = lunes, ... 6 = sábado
  const horaActual = ahora.getHours() + (ahora.getMinutes() / 60);

  // Traducimos el número de día al nombre que usamos en datos.js
  const nombresDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  const nombreDiaHoy = nombresDias[diaSemana];

  const horarioHoy = local.horarios[nombreDiaHoy];

  // Si no hay horario cargado para hoy, o dice "cerrado", el local está cerrado
  if (!horarioHoy || horarioHoy.cerrado) {
    return false;
  }

  // Comparamos el primer rango (mañana/tarde)
  const dentroDelPrimerRango =
    horaActual >= horarioHoy.apertura && horaActual < horarioHoy.cierre;

  // Si hay un segundo rango (por ejemplo, vuelve a abrir a la noche), lo revisamos también
  let dentroDelSegundoRango = false;
  if (horarioHoy.apertura2 !== undefined) {
    dentroDelSegundoRango =
      horaActual >= horarioHoy.apertura2 && horaActual < horarioHoy.cierre2;
  }

  return dentroDelPrimerRango || dentroDelSegundoRango;
}


// ===== 3. FUNCIÓN PARA DAR FORMATO AL HORARIO DE HOY (texto legible) =====
function textoHorarioHoy(local) {
  const ahora = new Date();
  const diaSemana = ahora.getDay();
  const nombresDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  const horarioHoy = local.horarios[nombresDias[diaSemana]];

  if (!horarioHoy || horarioHoy.cerrado) {
    return "Hoy no abre";
  }

  function formatoHora(h) {
    const horaNormalizada = h % 24;
    return horaNormalizada + ":00";
  }

  let texto = `Hoy: ${formatoHora(horarioHoy.apertura)} a ${formatoHora(horarioHoy.cierre)}`;

  if (horarioHoy.apertura2 !== undefined) {
    texto += ` y ${formatoHora(horarioHoy.apertura2)} a ${formatoHora(horarioHoy.cierre2)}`;
  }

  return texto;
}


// ===== 4. DIBUJAR LOS MARCADORES EN EL MAPA =====
// Guardamos los marcadores en un objeto para poder encontrarlos después
const marcadores = {};

function crearMarcadores() {
  locales.forEach((local) => {
    const abierto = estaAbierto(local);

    // Ícono de color según esté abierto o cerrado
    const colorIcono = abierto ? 'green' : 'red';

    const icono = L.icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${colorIcono}.png`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34]
    });

    const marcador = L.marker([local.lat, local.lng], { icon: icono }).addTo(mapa);

    marcador.bindPopup(`
      <strong>${local.nombre}</strong><br>
      ${local.direccion}<br>
      <span style="color:${abierto ? 'green' : 'red'}; font-weight:bold;">
        ${abierto ? 'Abierto' : 'Cerrado'}
      </span>
    `);

    marcadores[local.nombre] = marcador;
  });
}


// ===== 5. CREAR LAS TARJETAS DE LA LISTA =====
function crearTarjeta(local) {
  const abierto = estaAbierto(local);

  const tarjeta = document.createElement('div');
  tarjeta.className = `tarjeta-local ${abierto ? 'abierto' : 'cerrado'}`;
  tarjeta.dataset.categoria = local.categoria;
  tarjeta.dataset.nombre = local.nombre.toLowerCase();
  tarjeta.dataset.abierto = abierto;

  tarjeta.innerHTML = `
    <h3>${local.nombre}</h3>
    <p>📍 ${local.direccion}</p>
    <p>📞 ${local.telefono}</p>
    <p>${textoHorarioHoy(local)}</p>
    <span class="estado ${abierto ? 'abierto' : 'cerrado'}">
      ${abierto ? 'ABIERTO' : 'CERRADO'}
    </span>
  `;

  // Si tocás la tarjeta, el mapa se centra en ese local y abre su popup
  tarjeta.addEventListener('click', () => {
    mapa.setView([local.lat, local.lng], 16);
    marcadores[local.nombre].openPopup();
  });

  return tarjeta;
}

function mostrarTodasLasTarjetas() {
  const contenedorLista = document.getElementById('lista-locales');
  contenedorLista.innerHTML = '';

  locales.forEach((local) => {
    const tarjeta = crearTarjeta(local);
    contenedorLista.appendChild(tarjeta);
  });
}


// ===== 6. FILTROS (buscador, categoría, solo abiertos) =====
function aplicarFiltros() {
  const textoBuscado = document.getElementById('buscador').value.toLowerCase();
  const categoriaElegida = document.getElementById('filtro-categoria').value;
  const soloAbiertos = document.getElementById('filtro-abiertos').checked;

  const todasLasTarjetas = document.querySelectorAll('.tarjeta-local');

  todasLasTarjetas.forEach((tarjeta) => {
    const coincideNombre = tarjeta.dataset.nombre.includes(textoBuscado);
    const coincideCategoria = categoriaElegida === 'todas' || tarjeta.dataset.categoria === categoriaElegida;
    const coincideAbierto = !soloAbiertos || tarjeta.dataset.abierto === 'true';

    if (coincideNombre && coincideCategoria && coincideAbierto) {
      tarjeta.style.display = 'block';
    } else {
      tarjeta.style.display = 'none';
    }
  });
}

document.getElementById('buscador').addEventListener('input', aplicarFiltros);
document.getElementById('filtro-categoria').addEventListener('change', aplicarFiltros);
document.getElementById('filtro-abiertos').addEventListener('change', aplicarFiltros);


// ===== 7. INICIAR TODO =====
crearMarcadores();
mostrarTodasLasTarjetas();

// Actualizamos el estado abierto/cerrado cada minuto, por si el usuario
// deja la página abierta y cambia el horario (ej: el local cierra mientras mira la página)
setInterval(() => {
  crearMarcadores();
  mostrarTodasLasTarjetas();
  aplicarFiltros();
}, 60000);
