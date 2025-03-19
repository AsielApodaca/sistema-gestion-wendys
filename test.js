import ConsumibleService from "./services/ConsumibleService.js";

const service = new ConsumibleService();

service.agregarConsumible("Servilletas", "Paquete Grande de Servilletas", 50);
service.agregarConsumible("Platos", "Paquete de Platos", 50);
service.agregarConsumible("Vasos", "Paquete de Vasos", 50);
service.agregarConsumible("Cono de nieve", "Cono de nieve para vender", 30);

// Obtener todos los consumibles
console.log("ESTOS SON TODOS LOS CONSUMIBLES DEL SISTEMA: ");
console.log(service.obtenerConsumibles());

// Obtener un consumible por Id
console.log("ESTE ES EL CONSUMIBLE OBTENIDO: ");
console.log(service.obtenerConsumiblePorId(2));

// Actualizar un consumible
console.log("CONSUMIBLE ACTUALIZADO: ");
console.log(service.actualizarConsumible(2, "Platos", "Paquete de Platos", 60));

// Eliminar un consumible
console.log("CONSUMIBLE ELIMINADO: ");
console.log(service.eliminarConsumible(3));

console.log("ESTOS SON TODOS LOS CONSUMIBLES DEL SISTEMA: ");   
console.log(service.obtenerConsumibles());