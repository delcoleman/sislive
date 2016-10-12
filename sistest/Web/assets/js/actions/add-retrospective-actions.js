var dispatcher = require('../flux-dispatcher');
var constants = require('../constants/add-retrospective-constants');

var api = require('../api/retrospective-api');

var actionTypes = constants.ActionTypes;

function dispatchAction(actionType, data) {
    dispatcher.dispatch({
        actionType: actionType,
        data: data
    });
}

module.exports = {  
    addRetrospective: function() {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_START_ADD);
    },

    cancelAddRetrospective: function() {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_CANCEL_ADD);
    },

    saveRetrospective: function(retrospective) {
        
    },

    updateName: function(value) {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_UPDATE_NAME, value);
    },

    updateDay: function(value) {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_UPDATE_DAY, value);
    },

    updateMonth: function(value) {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_UPDATE_MONTH, value);
    },

    updateYear: function(value) {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_UPDATE_YEAR, value);
    },

    updateSummary: function(value) {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_UPDATE_SUMMARY, value);
    },

    addParticipant: function(value) {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_ADD_PARTICIPANT, value);
    },

    removeParticipant: function(value) {
        dispatchAction(actionTypes.ADD_RETROSPECTIVE_REMOVE_PARTICIPANT, value);
    }
}