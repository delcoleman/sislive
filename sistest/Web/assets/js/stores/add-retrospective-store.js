var Events = require('events');
var assign = require('object-assign');
var eventEmitter = Events.EventEmitter;

var dispatcher = require('../flux-dispatcher');
var constants = require('../constants/add-retrospective-constants');
var actionTypes = constants.ActionTypes;

var storeData = {
    adding: false,
    valid: false,
    name: null,
    summary: null,
    participants: [
        {
            name: 'dave',
            selected: false
        },
        {
            name: 'steve',
            selected: false
        },
        {
            name: 'fred',
            selected: false
        },
        {
            name: 'george',
            selected: false
        }
    ],
    day: null,
    month: null,
    year: null
}

function isValid() {
    return storeData.name && storeData.summary && storeData.day && storeData.month && storeData.year;
}

function selectParticipant(name, selected) {
    for (var i = 0; i < storeData.participants.length; i++) {
        if (storeData.participants[i].name === name) {
            storeData.participants[i].selected = selected;
        }
    }
}

var store = assign({}, eventEmitter.prototype, {
    getState: function () {
        return storeData;
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },
    emitChange: function () {
        this.emit('change');
    },
    dispatcherIndex: dispatcher.register(function (payload) {
        var processed = false;
        var actionType = payload.actionType;
        var data = payload.data;

        switch (actionType) {
            case actionTypes.ADD_RETROSPECTIVE_START_ADD:
                processed = true;
                storeData.adding = true;
                break;
            case actionTypes.ADD_RETROSPECTIVE_CANCEL_ADD:
                processed = true;
                storeData.adding = false;
                break;
            case actionTypes.ADD_RETROSPECTIVE_UPDATE_NAME:
                processed = true;
                storeData.name = data;
                storeData.valid = isValid();
                break;
            case actionTypes.ADD_RETROSPECTIVE_UPDATE_DAY:
                processed = true;
                storeData.day = data;
                storeData.valid = isValid();
                break;
            case actionTypes.ADD_RETROSPECTIVE_UPDATE_MONTH:
                processed = true;
                storeData.month = data;
                storeData.valid = isValid();
                break;
            case actionTypes.ADD_RETROSPECTIVE_UPDATE_YEAR:
                processed = true;
                storeData.year = data;
                storeData.valid = isValid();
                break;
            case actionTypes.ADD_RETROSPECTIVE_UPDATE_SUMMARY:
                processed = true;
                storeData.summary = data;
                storeData.valid = isValid();
                break;
            case actionTypes.ADD_RETROSPECTIVE_ADD_PARTICIPANT:
                processed = true;
                selectParticipant(data, true);
                break;
            case actionTypes.ADD_RETROSPECTIVE_REMOVE_PARTICIPANT:
                processed = true;
                selectParticipant(data, false);
                break;
        }

        if (processed) {
            store.emitChange();
        }
    })
});

module.exports = store;