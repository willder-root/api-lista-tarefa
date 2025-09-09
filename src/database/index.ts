import { Sequelize, type ModelCtor } from 'sequelize-typescript';
import { Task } from '../models/task.model.js';
import dbConfig from "../config/database.js";

const instanceDatabase = new Sequelize(dbConfig);

const models: ModelCtor[] = [
    Task
]

instanceDatabase.addModels(models)

export default instanceDatabase;