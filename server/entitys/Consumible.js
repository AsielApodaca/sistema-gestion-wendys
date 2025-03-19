import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Consumible {
    @PrimaryGeneratedColumn()
    id;

    @Column({ nullable: false })
    nombre;

    @Column()
    descripcion;

    @Column()
    cantidad;

    constructor(id, nombre, descripcion, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
}

export default Consumible;