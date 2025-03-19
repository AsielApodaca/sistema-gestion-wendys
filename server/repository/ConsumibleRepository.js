import Consumible from "../entitys/Consumible.js";

// Acceso a datos del consumible
class ConsumibleRepository {
    constructor(){
        this.consumibles = []; // Almacenamiento en memoria
        this.nextId = 1; // Simular Id incrementales
    }

    // Metodo para crear Consumible
    agregarConsumible(nombre, descripcion, cantidad){
        const nuevoConsumible = new Consumible(this.nextId++, nombre, descripcion, cantidad);
        this.consumibles.push(nuevoConsumible);
        return nuevoConsumible;
    }

    // Metodo para obtener todos los Consumibles
    obtenerConsumibles(){
        return this.consumibles;
    }

    // Metodo para obtener un Consumible por Id
    obtenerConsumiblePorId(id){
        return this.consumibles.find(c => c.id === id) || null;
    }

    // Metodo para actualizar un Consumible
    actualizarConsumible(id, nombre, descripcion, cantidad){
        const consumible = this.obtenerConsumiblePorId(id);
        if(!consumible){
            throw new Error("Consumible no encontrado");
        }
        consumible.nombre = nombre;
        consumible.descripcion = descripcion;
        consumible.cantidad = cantidad;
        return consumible;
    }

    // Metodo para eliminar un Consumible
    eliminarConsumible(id){
        const index = this.consumibles.findIndex(c => c.id === id);
        if (index === -1) {
            throw new Error("Consumible no encontrado");
        }
        this.consumibles.splice(index, 1);
    }

}

export default ConsumibleRepository;