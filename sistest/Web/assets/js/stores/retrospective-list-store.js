var Events = require('events');
var assign = require('object-assign');
var eventEmitter = Events.EventEmitter;

var dispatcher = require('../flux-dispatcher');
var constants = require('../constants/retrospective-list-constants');
var actionTypes = constants.ActionTypes;

var storeData = {

    diplayByDate: false,
    
    searchDay: null,
    searchMonth: null,
    searchYear: null,

    retrospectives: [
        {
            name: 'my first retro',
            summary: 'retro',
            date: '1st september 2016',
            participants: ['fred', 'harry', 'jane'],
            feedbackItems: [
                {
                    raisedBy: 'harry',
                    body: 'I love retros',
                    feedbackType: 'positive'
                },
                {
                    raisedBy: 'harry',
                    body: 'I love retros',
                    feedbackType: 'positive'
                }
            ]
        },
        {
            name: 'my first retro',
            summary: 'retro',
            date: '1st september 2016',
            participants: ['fred', 'harry', 'jane'],
            feedbackItems: [
                {
                    raisedBy: 'harry',
                    body: 'I love retros',
                    feedbackType: 'positive'
                },
                {
                    raisedBy: 'harry',
                    body: 'I love retros',
                    feedbackType: 'positive'
                }
            ]
        }
    ]
}

var store = assign({}, eventEmitter.prototype, {
    getState: function () {
        return storeData;
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    emitChange: function() {
        this.emit('change');
    },
    dispatcherIndex: dispatcher.register(function (payload) {
        var processed = false;
        var actionType = payload.actionType;
        var data = payload.data;

        switch(actionType) {
            case actionTypes.RETROSPECTIVE_LIST_SELECT_BY_DATE:
                processed = true;
                storeData.displayByDate = true;
                break;

            case actionTypes.RETROSPECTIVE_LIST_SELECT_ALL:
                processed = true;
                storeData.displayByDate = false;
                break;

            case actionTypes.RETROSPECTIVE_LIST_POPULATE_START:
                break;

            case actionTypes.RETROSPECTIVE_LIST_POPULATE_SUCCESS:
                processed = true;
                storeData.displayByDate = false;
                storeData.retrospectives = data;
                break;

            case actionTypes.RETROSPECTIVE_LIST_POPULATE_BY_DATE_START:
                break;

            case actionTypes.RETROSPECTIVE_LIST_POPULATE_BY_DATE_SUCCESS:
                processed = true;
                storeData.displayByDate = true;
                storeData.retrospectives = data;
                break;

            case actionTypes.RETROSPECTIVE_LIST_POPULATE_ERROR:
                break;

            case actionTypes.RETROSPECTIVE_LIST_SET_SEARCH_DATE:
                processed = true;
                storeData.searchDay = data.day;
                storeData.searchMonth = data.month;
                storeData.searchYear = data.year;
                break;

            case actionTypes.RETROSPECTIVE_LIST_DATE_CHANGE_START:
                break;

            case actionTypes.RETROSPECTIVE_LIST_DATE_CHANGE_SUCCESS:
                processed = true;
                storeData.searchDay = data.day;
                storeData.searchMonth = data.month;
                storeData.searchYear = data.year;
                storeData.retrospectives = data.retrospectives;
                break;
        }
        
        if (processed) {
            store.emitChange();
        }
    })
});

module.exports = store;