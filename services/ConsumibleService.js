import ConsumibleRepository from "../server/repository/ConsumibleRepository.js";

// Clase de negocio para el Consumible
class ConsumibleService{
    constructor(){
        this.repository = new ConsumibleRepository();
    }

    // Metodo para crear Consumible
    agregarConsumible(nombre, descripcion, cantidad){
        if(!nombre || nombre.trim() === ""){
            throw new Error("El nombre es requerido");
        }
        return this.repository.agregarConsumible(nombre, descripcion, cantidad);
    }

    // Metodo para obtener todos los Consumibles
    obtenerConsumibles(){
        return this.repository.obtenerConsumibles();
    }

    // Metodo para obtener un Consumible por Id
    obtenerConsumiblePorId(id){
        return this.repository.obtenerConsumiblePorId(id);
    }

    // Metodo para actualizar un Consumible
    actualizarConsumible(id, nombre, descripcion, cantidad){
        return this.repository.actualizarConsumible(id, nombre, descripcion, cantidad);
    }

    // Metodo para eliminar un Consumible
    eliminarConsumible(id){
        return this.repository.eliminarConsumible(id);
    }

}

export default ConsumibleService;