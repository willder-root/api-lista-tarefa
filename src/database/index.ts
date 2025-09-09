import { Sequelize, type ModelCtor } from 'sequelize-typescript';
import { Tarefa } from '../models/tarefa.model.js';
import dbConfig from "../config/database.js";

const instanceDatabase = new Sequelize(dbConfig);

const models: ModelCtor[] = [
    Tarefa
]

instanceDatabase.addModels(models)

export default instanceDatabase;