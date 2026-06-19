/*
  ARCHIVO PRINCIPAL DE LÓGICA
  ----------------------------
  Acá no hace falta que toques nada (salvo que quieras
  cambiar el centro del mapa). Esto lee los datos de
  "datos.js" y construye el mapa + la lista de tarjetas.
*/

// ===== 1. CREAR EL MAPA =====
// Coordenadas del centro de San Carlos de Bolívar (ajustado al centro real
// de la zona donde están los locales cargados)
const mapa = L.map('mapa').setView([-36.2314, -61.1158], 15);

// Las "tiles" son las imágenes que forman el mapa visualmente
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);


// ===== 2. FUNCIÓN AUXILIAR: convierte "HH:MM" a minutos totales =====
// Permite horarios con minutos: "8:00" → 480, "20:30" → 1230
// Para cierres pasada medianoche, se usa "25:00", "25:30", etc.
function horaAMinutos(horaTexto) {
  const partes = horaTexto.split(":");
  const horas = parseInt(partes[0], 10);
  const minutos = partes[1] ? parseInt(partes[1], 10) : 0;
  return horas * 60 + minutos;
}


// ===== 3. FUNCIÓN PARA SABER SI UN LOCAL ESTÁ ABIERTO =====
function estaAbierto(local) {
  const ahora = new Date();
  const diaSemana = ahora.getDay(); // 0 = domingo, 1 = lunes, ... 6 = sábado
  const minutosActuales = ahora.getHours() * 60 + ahora.getMinutes();

  const nombresDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  const nombreDiaHoy = nombresDias[diaSemana];
  const horarioHoy = local.horarios[nombreDiaHoy];

  if (!horarioHoy || horarioHoy.cerrado) {
    return false;
  }

  const apertura = horaAMinutos(horarioHoy.apertura);
  const cierre   = horaAMinutos(horarioHoy.cierre);
  const dentroDelPrimerRango = minutosActuales >= apertura && minutosActuales < cierre;

  let dentroDelSegundoRango = false;
  if (horarioHoy.apertura2 !== undefined) {
    const apertura2 = horaAMinutos(horarioHoy.apertura2);
    const cierre2   = horaAMinutos(horarioHoy.cierre2);
    dentroDelSegundoRango = minutosActuales >= apertura2 && minutosActuales < cierre2;
  }

  return dentroDelPrimerRango || dentroDelSegundoRango;
}


// ===== 4. FUNCIÓN PARA DAR FORMATO AL HORARIO DE HOY (texto legible) =====
function textoHorarioHoy(local) {
  const ahora = new Date();
  const diaSemana = ahora.getDay();
  const nombresDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  const horarioHoy = local.horarios[nombresDias[diaSemana]];

  if (!horarioHoy || horarioHoy.cerrado) {
    return "Hoy no abre";
  }

  // Normaliza la hora para mostrarla (si es "25:30" muestra "1:30")
  function normalizarHora(horaTexto) {
    const partes = horaTexto.split(":");
    let horas = parseInt(partes[0], 10) % 24;
    const minutos = partes[1] ? partes[1] : "00";
    return `${horas}:${minutos}`;
  }

  let texto = `Hoy: ${normalizarHora(horarioHoy.apertura)} a ${normalizarHora(horarioHoy.cierre)}`;

  if (horarioHoy.apertura2 !== undefined) {
    texto += ` y ${normalizarHora(horarioHoy.apertura2)} a ${normalizarHora(horarioHoy.cierre2)}`;
  }

  return texto;
}


// ===== 5. DIBUJAR LOS MARCADORES EN EL MAPA =====
const marcadores = {};

function crearMarcadores() {
  locales.forEach((local) => {
    const abierto = estaAbierto(local);

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


// ===== 6. CREAR LAS TARJETAS DE LA LISTA =====
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


// ===== 7. FILTROS =====
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


// ===== 8. INICIAR TODO =====
crearMarcadores();
mostrarTodasLasTarjetas();

setInterval(() => {
  crearMarcadores();
  mostrarTodasLasTarjetas();
  aplicarFiltros();
}, 60000);