'use strict';
const { models } = require('../../sequelize');

async function getAll(req, res) {
	const facilities = await models.facility.findAll();
	res.status(200).json(facilities);
};

module.exports = {
	getAll,
};