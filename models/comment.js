// Definicion del modelo de commet con validacion

module.exports = function(sequelize, DataTypes){
	return sequelize.define(
	'Comment',
	{ texto : {
			type: DataTypes.STRING, validate: { notEmpty:{msg: "--> falta comentario"}}
		}
	}
);
}
