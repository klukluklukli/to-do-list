function Nota(titulo, descripcion, importante, terminada) {
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.importante = importante;
  this.terminada = terminada;
  this.default = true;

  this.tarea = function() {
    console.log('La tarea se llama ' + this.titulo);
  };
}

var button = document.getElementById('button');

button.addEventListener('click', function() {
  var tituloValue = document.getElementById('titulo').value;
  var descripcionValue = document.getElementById('descripcion').value;
  var terminadaValue = document.getElementById('terminada').checked;
  var importanteValue = document.getElementById('form').importante.value;

  console.log(tituloValue, descripcionValue, terminadaValue, importanteValue);

  var n = new Nota(tituloValue, descripcionValue, terminadaValue, importanteValue);
  console.log(n);
  n.tarea();

});
