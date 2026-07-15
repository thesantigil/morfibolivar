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
    direccion: "Av Brown e Ignacio Rivas",
    telefono: "2314-426283",
    lat: -36.2280156249528,
    lng: -61.11319735971254,
    horarios: {
      lunes:     { apertura: "11:00", cierre: "24:00" },
      martes:    { apertura: "11:00", cierre: "24:00" },
      miercoles: { cerrado: true },
      jueves:    { apertura: "11:00", cierre: "24:00" },
      viernes:   { apertura: "11:00", cierre: "16:00", apertura2: "20:00", cierre2: "24:00" },
      sabado:    { apertura: "11:00", cierre: "16:00", apertura2: "20:00", cierre2: "24:00" },
      domingo:   { apertura: "11:00", cierre: "16:00" }
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
      martes:    { apertura: "12:00", cierre: "15:00" },
      miercoles: { apertura: "12:00", cierre: "15:00" },
      jueves:    { apertura: "12:00", cierre: "15:00" },
      viernes:   { apertura: "12:00", cierre: "16:00", apertura2: "20:00", cierre2: "23:00" },
      sabado:    { apertura: "12:00", cierre: "16:00", apertura2: "20:00", cierre2: "23:00" },
      domingo:   { apertura: "12:00", cierre: "16:00" }
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
      lunes:     { apertura: "10:00", cierre: "15:00" },
      martes:    { apertura: "10:00", cierre: "15:00" },
      miercoles: { apertura: "10:00", cierre: "15:00" },
      jueves:    { apertura: "10:00", cierre: "15:00" },
      viernes:   { apertura: "10:00", cierre: "15:00" },
      sabado:    { apertura: "10:00", cierre: "15:00" },
      domingo:   { apertura: "10:00", cierre: "15:00" }
    }
  },

  {
    nombre: "Ruta 65",
    categoria: "parrilla",
    direccion: "Av Brown 120",
    telefono: "2314-424747",
    lat: -36.22856439041418,
    lng: -61.112973590121975,
    horarios: {
      lunes:     { apertura: "08:00", cierre: "12:00" },
      martes:    { apertura: "11:00", cierre: "15:00", apertura2: "20:00", cierre2: "24:00" },
      miercoles: { apertura: "11:00", cierre: "15:00", apertura2: "20:00", cierre2: "24:00" },
      jueves:    { apertura: "11:00", cierre: "15:00", apertura2: "20:00", cierre2: "24:00" },
      viernes:   { apertura: "11:00", cierre: "15:00", apertura2: "20:00", cierre2: "24:00" },
      sabado:    { apertura: "11:00", cierre: "15:00", apertura2: "20:00", cierre2: "24:00" },
      domingo:   { apertura: "11:00", cierre: "15:00", apertura2: "20:00", cierre2: "24:00" }
    }
  },

    {
    nombre: "A tu gusto",
    categoria: "rotiseria",
    direccion: "Olavarria 77",
    telefono: "2314-618950",
    lat: -36.229458537238806,
    lng: -61.1166778903967,
    horarios: {
      lunes:     { apertura: "12:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:59" },
      martes:    { apertura: "12:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:59" },
      miercoles: { apertura: "12:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:59" },
      jueves:    { apertura: "20:00",  cierre: "23:59" },
      viernes:   { apertura: "12:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:59" },
      sabado:    { apertura: "12:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:59" },
      domingo:   { apertura: "12:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:59" }
    }
  },

  {
    nombre: "Pizza Roots",
    categoria: "rotiseria",
    direccion: "Belgrano y Sarmiento",
    telefono: "2314-628680",
    lat: -36.228364861725744,
    lng: -61.11092627971464,
    horarios: {
      lunes:     { apertura: "20:00", cierre: "24:00" },
      martes:    { apertura: "20:00", cierre: "24:00" },
      miercoles: { apertura: "20:00", cierre: "24:00" },
      jueves:    { apertura: "20:00", cierre: "24:00" },
      viernes:   { apertura: "20:00", cierre: "24:00" },
      sabado:    { apertura: "20:00", cierre: "24:00" },
      domingo:   { apertura: "20:00", cierre: "24:00" }
    }
  },

  {
    nombre: "Don Tata",
    categoria: "rotiseria",
    direccion: "Av San Martin 1455",
    telefono: "2314-439751",
    lat: -36.22473296539379,
    lng: -61.120595825629344,
    horarios: {
      lunes:     { apertura: "11:00", cierre: "14:00", apertura2: "19:00", cierre2: "24:00"},
      martes:    { cerrado: true },
      miercoles: { apertura: "11:00", cierre: "14:00", apertura2: "19:00", cierre2: "24:00" },
      jueves:    { apertura: "11:00", cierre: "14:00", apertura2: "19:00", cierre2: "24:00" },
      viernes:   { apertura: "11:00", cierre: "14:00", apertura2: "19:00", cierre2: "24:00" },
      sabado:    { apertura: "11:00", cierre: "14:00", apertura2: "19:00", cierre2: "24:00" },
      domingo:   { apertura: "19:00", cierre: "24:00" }
    }
  },

      {
    nombre: "La familia",
    categoria: "rotiseria",
    direccion: "Av Fabres Garcia 496",
    telefono: "2314-426167",
    lat: -36.238466470229795,
    lng: -61.11887577544843,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { cerrado: true },
      miercoles: { apertura: "20:00", cierre: "24:00" },
      jueves:    { apertura: "20:00", cierre: "24:00" },
      viernes:   { apertura: "20:00", cierre: "24:00" },
      sabado:    { apertura: "20:00", cierre: "24:00" },
      domingo:   { apertura: "20:00", cierre: "24:00" }
    }
  },

  {
    nombre: "Las Malvinas",
    categoria: "rotiseria",
    direccion: "Av Gral Paz 254",
    telefono: "2314-425171",
    lat: -36.23261661983944,
    lng: -61.11568783008354,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { cerrado: true },
      miercoles: { apertura: "9:30",  cierre: "13:30", apertura2: "18:00",  cierre2: "21:00" },
      jueves:    { apertura: "9:30",  cierre: "13:30", apertura2: "18:00",  cierre2: "21:00" },
      viernes:   { apertura: "9:30",  cierre: "13:30", apertura2: "18:00",  cierre2: "21:00" },
      sabado:    { apertura: "9:30",  cierre: "13:30", apertura2: "18:00",  cierre2: "21:00" },
      domingo:   {apertura: "9:30",  cierre: "14:30" }
    }
  },

  {
    nombre: "Quimey",
    categoria: "rotiseria",
    direccion: "Boer 41",
    telefono: "2314-500787",
    lat: -36.22684946748923,
    lng: -61.112399590396784,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: "20:00",  cierre: "23:30" },
      miercoles: { apertura: "20:00",  cierre: "23:30" },
      jueves:    { apertura: "20:00",  cierre: "23:30" },
      viernes:   { apertura: "20:00",  cierre: "23:30" },
      sabado:    { apertura: "20:00",  cierre: "23:30" },
      domingo:   { apertura: "20:00",  cierre: "23:30" }
    }
  },

    {
    nombre: "Maria Elena",
    categoria: "rotiseria",
    direccion: "Ignacio Rivas 480",
    telefono: "2314-403235",
    lat: -36.22463659210907,
    lng: -61.11755907505492,
    horarios: {
      lunes:     { apertura: "11:00",  cierre: "14:00" },
      martes:    { apertura: "11:00",  cierre: "14:00", apertura2: "19:30",  cierre2: "23:15" },
      miercoles: { apertura: "11:00",  cierre: "14:00", apertura2: "19:30",  cierre2: "23:15" },
      jueves:    { apertura: "11:00",  cierre: "14:00", apertura2: "19:30",  cierre2: "23:15" },
      viernes:   { apertura: "11:00",  cierre: "14:00", apertura2: "19:30",  cierre2: "23:15" },
      sabado:    { apertura: "11:00",  cierre: "14:00", apertura2: "19:30",  cierre2: "23:15" },
      domingo:   { apertura: "20:00",  cierre: "23:30" }
    }
  },

    {
    nombre: "Rotiseria Sil",
    categoria: "rotiseria",
    direccion: "Almafuerte 138",
    telefono: "2314-576537",
    lat: -36.224124508696754,
    lng: -61.110797502127234,
    horarios: {
      lunes:     { apertura: "19:30", cierre: "23:30" },
      martes:    { apertura: "19:30", cierre: "23:30" },
      miercoles: { apertura: "19:30", cierre: "23:30" },
      jueves:    { apertura: "19:30", cierre: "23:30" },
      viernes:   { apertura: "19:30", cierre: "23:30" },
      sabado:    { apertura: "19:30", cierre: "23:30" },
      domingo:   { apertura: "19:30", cierre: "23:30" }
    }
  },

    {
    nombre: "Los Girasoles",
    categoria: "rotiseria",
    direccion: "Av Lavalle 399",
    telefono: "2314-551119",
    lat: -36.232426541119494,
    lng: -61.117356420104855,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: "08:00", cierre: "24:00" },
      miercoles: { apertura: "08:00", cierre: "24:00" },
      jueves:    { apertura: "08:00", cierre: "24:00" },
      viernes:   { apertura: "08:00", cierre: "24:00" },
      sabado:    { apertura: "08:00", cierre: "24:00" },
      domingo:   { apertura: "08:00", cierre: "24:00" }
    }
  },

      {
    nombre: "Tentaciones",
    categoria: "rotiseria",
    direccion: "San Martin 144",
    telefono: "2314-497315",
    lat: -36.23463097087255,
    lng: -61.00879847320558,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { apertura: "10:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:50" },
      miercoles: { apertura: "10:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:50" },
      jueves:    { apertura: "10:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:50" },
      viernes:   { apertura: "10:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:50" },
      sabado:    { apertura: "10:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:50" },
      domingo:   { apertura: "10:00",  cierre: "14:00", apertura2: "20:00",  cierre2: "23:50" }
    }
  },

  {
    nombre: "Café Miró",
    categoria: "cafe",
    direccion: "Av. San Martin 660",
    telefono: "--",
    lat: -36.23100409122974,
    lng: -61.11286120498524, 
    horarios: {
      lunes:     { apertura: "08:00", cierre: "20:00" },
      martes:    { apertura: "08:00", cierre: "20:00" },
      miercoles: { apertura: "08:00", cierre: "20:00" },
      jueves:    { apertura: "08:00", cierre: "20:00" },
      viernes:   { apertura: "08:00", cierre: "20:00" },
      sabado:    { apertura: "08:00", cierre: "20:00" },
      domingo:   { apertura: "08:00", cierre: "20:00" }
    }
  },

    {
    nombre: "Petra, pasteleria & café",
    categoria: "cafe",
    direccion: "Rondeau y Mitre",
    telefono: "--",
    lat: -36.233803175421954,
    lng: -61.111953924565874,
    horarios: {
      lunes:     { cerrado: true },
      martes:    { cerrado: true },
      miercoles: { cerrado: true },
      jueves:    { apertura: "09:00",  cierre: "13:00", apertura2: "16:00",  cierre2: "19:30" },
      viernes:   { apertura: "09:00",  cierre: "13:00", apertura2: "16:00",  cierre2: "19:30" },
      sabado:    { apertura: "09:00",  cierre: "13:00", apertura2: "16:00",  cierre2: "19:30" },
      domingo:   { apertura: "09:00",  cierre: "13:00", apertura2: "16:00",  cierre2: "19:30" }
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
      lunes:     { apertura: "15:00", cierre: "24:30" },
      martes:    { apertura: "15:00", cierre: "24:30" },
      miercoles: { apertura: "15:00", cierre: "24:30" },
      jueves:    { apertura: "15:00", cierre: "24:30" },
      viernes:   { apertura: "15:00", cierre: "24:30" },
      sabado:    { apertura: "15:00", cierre: "24:30" },
      domingo:   { apertura: "15:00", cierre: "24:30" }
    }
  },

  {
    nombre: "Oasis",
    categoria: "heladeria",
    direccion: "Av. San Martín 234",
    telefono: "2314-578510",
    lat: -36.234040977084106,
    lng: -61.109186494646465,
    horarios: {
      lunes:     { apertura: "12:00", cierre: "24:00" },
      martes:    { apertura: "12:00", cierre: "24:00" },
      miercoles: { cerrado: true },
      jueves:    { apertura: "12:00", cierre: "24:00" },
      viernes:   { apertura: "12:00", cierre: "24:00" },
      sabado:    { apertura: "12:00", cierre: "24:00" },
      domingo:   { apertura: "12:00", cierre: "24:00" }
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
      lunes:     { apertura: "12:00", cierre: "24:00" },
      martes:    { apertura: "12:00", cierre: "24:00" },
      miercoles: { apertura: "12:00", cierre: "24:00" },
      jueves:    { apertura: "12:00", cierre: "24:00" },
      viernes:   { apertura: "12:00", cierre: "24:00" },
      sabado:    { apertura: "12:00", cierre: "24:00" },
      domingo:   { apertura: "12:00", cierre: "24:00" }
    }
  },
];
