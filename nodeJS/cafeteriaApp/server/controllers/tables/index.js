const newTable = require('./newTable');
const newTableRequest = require('./newTableRequest');
const newPayRequest = require('./newPayRequest');
const newAttendRequest = require('./newAttendRequest');
const endRequest = require('./endRequest');
const endPay = require('./endPay');
const deleteTable = require('./deleteTable');

module.exports = {
    newTable,
    deleteTable,
    newTableRequest,
    newPayRequest,
    newAttendRequest,
    endRequest,
    endPay,
};
