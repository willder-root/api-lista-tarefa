import { DataTypes, QueryInterface } from 'sequelize';

export const up = (queryInterface:QueryInterface): any => {
        return queryInterface.createTable("Tasks",{
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey:true,
                allowNull: false
            },
            title:{
                type: DataTypes.STRING,
                allowNull: false
            },
            description:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            scheduledDate:{
                type: DataTypes.DATE,
                allowNull: false,
            },
            createdAt:{
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt:{
                type: DataTypes.DATE,
                allowNull: false,
            }
        });
};


export const down = (queryInterface: QueryInterface): any =>{
        return queryInterface.dropTable("Tasks")
}
