import {
    Model, 
    AutoIncrement, 
    Column, 
    CreatedAt, 
    PrimaryKey, 
    Table, 
    UpdatedAt
} from 'sequelize-typescript';

@Table({tableName:"Tarefas"})
export class Tarefa extends Model<Tarefa>{
    @PrimaryKey
    @AutoIncrement
    @Column
    declare id: number;

    @Column
    declare title: string;
    
    @Column
    declare description: string;

    @Column
    declare scheduledDate: Date;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}