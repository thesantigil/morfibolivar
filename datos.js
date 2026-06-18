/*
  ARCHIVO DE DATOS
  -----------------
  Acá cargás cada local gastronómico.
  Para agregar uno nuevo, copiá un bloque { ... } entero,
  pegalo antes del corchete final "]" y modificá los datos.

  IMPORTANTE sobre los horarios:
  - Se escriben en formato 24 horas (ej: 8 de la mañana = 8, 8 de la noche = 20)
  - Si el local cierra después de medianoche (ej: cierra 2 de la madrugada),
    se escribe como 26 (24 + 2), así el programa entiende que es "al día siguiente".
  - Si el local está CERRADO ese día, se pone: { cerrado: true }
*/

const locales = [
  {
    nombre: "Don Emilio",
    categoria: "parrilla",
    direccion: "Av Brown y Rivas",
    telefono: "2314-426283",
    lat: -36.2280156249528,
    lng: -61.11319735971254,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 12, cierre: 15 },
      miercoles: { apertura: 12, cierre: 15 },
      jueves:    { apertura: 12, cierre: 15 },
      viernes:   { apertura: 12, cierre: 16, apertura2: 20, cierre2: 24 },
      sabado:    { apertura: 12, cierre: 16, apertura2: 20, cierre2: 25 },
      domingo:   { apertura: 12, cierre: 16 }
    }
  },
    {
    nombre: "La Cabaña",
    categoria: "parrilla",
    direccion: "RN 226",
    telefono: "2314-502629",
    lat: -36.23366428892308,
    lng: -61.14072948682466,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 12, cierre: 15 },
      miercoles: { apertura: 12, cierre: 15 },
      jueves:    { apertura: 12, cierre: 15 },
      viernes:   { apertura: 12, cierre: 16, apertura2: 20, cierre2: 24 },
      sabado:    { apertura: 12, cierre: 16, apertura2: 20, cierre2: 25 },
      domingo:   { apertura: 12, cierre: 16 }
    }
  },
  {
    nombre: "La tablita",
    categoria: "parrilla",
    direccion: "RN 226",
    telefono: "2314-",
    lat: -36.24489797811856,
    lng: -61.11059982199166,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 12, cierre: 15 },
      miercoles: { apertura: 12, cierre: 15 },
      jueves:    { apertura: 12, cierre: 15 },
      viernes:   { apertura: 12, cierre: 16, apertura2: 20, cierre2: 24 },
      sabado:    { apertura: 12, cierre: 16, apertura2: 20, cierre2: 25 },
      domingo:   { apertura: 12, cierre: 16 }
    }
  },
  {
    nombre: "Parrilla Ruta 65",
    categoria: "Av Brown 120",
    telefono: "2314-424747",
    lat: -36.22856439041418,
    lng: -61.112973590121975,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 12, cierre: 15 },
      miercoles: { apertura: 12, cierre: 15 },
      jueves:    { apertura: 12, cierre: 15 },
      viernes:   { apertura: 12, cierre: 16, apertura2: 20, cierre2: 24 },
      sabado:    { apertura: 12, cierre: 16, apertura2: 20, cierre2: 25 },
      domingo:   { apertura: 12, cierre: 16 }
    }
  },
  {
    nombre: "Pizza Roots",
    categoria: "pizzeria",
    direccion: "Belgrano 220",
    telefono: "2314-628680",
    lat: -36.228364861725744,
    lng: -61.11092627971464,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 20, cierre: 24 },
      miercoles: { apertura: 20, cierre: 24 },
      jueves:    { apertura: 20, cierre: 24 },
      viernes:   { apertura: 20, cierre: 25 },
      sabado:    { apertura: 20, cierre: 25 },
      domingo:   { apertura: 20, cierre: 24 }
    }
  },
  {
    nombre: "La Vizcaina",
    categoria: "pizzeria",
    direccion: "Belgrano 220",
    telefono: "2314-627744",
    lat: -36.22823199078752,
    lng: -61.11229613752853,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 20, cierre: 24 },
      miercoles: { apertura: 20, cierre: 24 },
      jueves:    { apertura: 20, cierre: 24 },
      viernes:   { apertura: 20, cierre: 25 },
      sabado:    { apertura: 20, cierre: 25 },
      domingo:   { apertura: 20, cierre: 24 }
    }
  },
    {
    nombre: "Don Tata",
    categoria: "pizzeria",
    direccion: "Av San Martin 1455",
    telefono: "2314-439751",
    lat: -36.22473296539379,
    lng: -61.120595825629344,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 20, cierre: 24 },
      miercoles: { apertura: 20, cierre: 24 },
      jueves:    { apertura: 20, cierre: 24 },
      viernes:   { apertura: 20, cierre: 25 },
      sabado:    { apertura: 20, cierre: 25 },
      domingo:   { apertura: 20, cierre: 24 }
    }
  },
      {
    nombre: "La familia",
    categoria: "pizzeria",
    direccion: "Av Fabres Garcia 496",
    telefono: "2314-426167",
    lat: -36.238466470229795,
    lng: -61.11887577544843,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 20, cierre: 24 },
      miercoles: { apertura: 20, cierre: 24 },
      jueves:    { apertura: 20, cierre: 24 },
      viernes:   { apertura: 20, cierre: 25 },
      sabado:    { apertura: 20, cierre: 25 },
      domingo:   { apertura: 20, cierre: 24 }
    }
  },
  {
    nombre: "Las Malvinas",
    categoria: "pizzeria",
    direccion: "Av Gral Paz 254",
    telefono: "2314-425171",
    lat: -36.23261661983944,
    lng: -61.11568783008354,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 20, cierre: 24 },
      miercoles: { apertura: 20, cierre: 24 },
      jueves:    { apertura: 20, cierre: 24 },
      viernes:   { apertura: 20, cierre: 25 },
      sabado:    { apertura: 20, cierre: 25 },
      domingo:   { apertura: 20, cierre: 24 }
    }
  },
    {
    nombre: "Los Girasoles",
    categoria: "pizzeria",
    direccion: "Av Lavalle 399",
    telefono: "2314-551119",
    lat: -36.232426541119494,
    lng: -61.117356420104855,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: 20, cierre: 24 },
      miercoles: { apertura: 20, cierre: 24 },
      jueves:    { apertura: 20, cierre: 24 },
      viernes:   { apertura: 20, cierre: 25 },
      sabado:    { apertura: 20, cierre: 25 },
      domingo:   { apertura: 20, cierre: 24 }
    }
  },
  {
    nombre: "Café Miró",
    categoria: "cafe",
    direccion: "Av. Belgrano 100",
    telefono: "--",
    lat: -36.23100409122974,
    lng: -61.11286120498524, 
    horarios: {
      lunes:     { apertura: 8, cierre: 20 },
      martes:    { apertura: 8, cierre: 20 },
      miercoles: { apertura: 8, cierre: 20 },
      jueves:    { apertura: 8, cierre: 20 },
      viernes:   { apertura: 8, cierre: 21 },
      sabado:    { apertura: 9, cierre: 21 },
      domingo:   { apertura: 9, cierre: 13 }
    }
  },

  {
    nombre: "Heladería Sei tu",
    categoria: "heladeria",
    direccion: "Av. Venezuela 32",
    telefono: "2314-440747",
    lat: -36.22878879165026,
    lng: -61.11440411694179,
    horarios: {
      lunes:     { apertura: 15, cierre: 23 },
      martes:    { apertura: 15, cierre: 23 },
      miercoles: { apertura: 15, cierre: 23 },
      jueves:    { apertura: 15, cierre: 23 },
      viernes:   { apertura: 15, cierre: 24 },
      sabado:    { apertura: 15, cierre: 24 },
      domingo:   { apertura: 15, cierre: 23 }
    }
  },

  {
    nombre: "Belice",
    categoria: "heladeria",
    direccion: "Av. San Martin 447",
    telefono: "2314-421000",
    lat: -36.22878879165026,
    lng: -61.11440411694179,
    horarios: {
      lunes:     { apertura: 15, cierre: 23 },
      martes:    { apertura: 15, cierre: 23 },
      miercoles: { apertura: 15, cierre: 23 },
      jueves:    { apertura: 15, cierre: 23 },
      viernes:   { apertura: 15, cierre: 24 },
      sabado:    { apertura: 15, cierre: 24 },
      domingo:   { apertura: 15, cierre: 23 }
    }
  },
  {
    nombre: "Heladería OASIS",
    categoria: "heladeria",
    direccion: "Av. San Martín 234",
    telefono: "2314-578510",
    lat: -36.234040977084106,
    lng: -61.109186494646465,
    horarios: {
      lunes:     { apertura: 15, cierre: 23 },
      martes:    { apertura: 15, cierre: 23 },
      miercoles: { apertura: 15, cierre: 23 },
      jueves:    { apertura: 15, cierre: 23 },
      viernes:   { apertura: 15, cierre: 24 },
      sabado:    { apertura: 15, cierre: 24 },
      domingo:   { apertura: 15, cierre: 23 }
    }
  },
  {
    nombre: "Grido",
    categoria: "heladeria",
    direccion: "Av. Brown 225",
    telefono: "2314-578510",
    lat: -36.22799815269258,
    lng: -61.11221305046923,
    horarios: {
      lunes:     { apertura: 15, cierre: 23 },
      martes:    { apertura: 15, cierre: 23 },
      miercoles: { apertura: 15, cierre: 23 },
      jueves:    { apertura: 15, cierre: 23 },
      viernes:   { apertura: 15, cierre: 24 },
      sabado:    { apertura: 15, cierre: 24 },
      domingo:   { apertura: 15, cierre: 23 }
    }
  },
];
