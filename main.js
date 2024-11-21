const integrantes = [
  { nombre: "Victor", edad: 24 },
  { nombre: "Jesica", edad: 24 },
  { nombre: "Ricardo", edad: 23 },
];
console.table(gente);
integrantes.forEach((integrante, index) => {
  console.groupCollapsed(`${integrante.nombre}`);
  console.log(integrante.edad);
  console.log("Equipo Rocket");
  console.groupEnd(`${integrante.nombre}`);
});
