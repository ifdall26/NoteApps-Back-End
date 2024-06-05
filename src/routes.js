/* eslint-disable no-unused-vars */
const { addNoteHandler, getAllNotesHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'], // Allow all origins
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
    options: {
      cors: {
        origin: ['*'], // Allow all origins
      },
    },
  },
];

module.exports = routes;
