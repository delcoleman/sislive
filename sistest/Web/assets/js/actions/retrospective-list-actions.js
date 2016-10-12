var dispatcher = require('../flux-dispatcher');
var constants = require('../constants/retrospective-list-constants');

var api = require('../api/retrospective-api');

var actionTypes = constants.ActionTypes;

function dispatchAction(actionType, data) {
    dispatcher.dispatch({
        actionType: actionType,
        data: data
    });
}

function dateValid(day, month, year) {
    return day && month && year;
}

module.exports = {
    selectRetrospectivesByDate: function (day, month, year) {
        if (dateValid(day, month, year)) {
            dispatchAction(actionTypes.RETROSPECTIVE_LIST_POPULATE_BY_DATE_START);

            api.getRetrospectivesByDate(day, month, year,
            {
                successCallback: function(data) {
                    dispatchAction(actionTypes.RETROSPECTIVE_LIST_POPULATE_BY_DATE_SUCCESS, data);
                },
                errorCallback: function() {
                    dispatchAction(actionTypes.RETROSPECTIVE_LIST_POPULATE_BY_DATE_ERROR);
                }
            });
        } else {
            dispatchAction(actionTypes.RETROSPECTIVE_LIST_SELECT_BY_DATE);
        }
    },

    selectAllRetrospectives: function() {
        dispatchAction(actionTypes.RETROSPECTIVE_LIST_POPULATE_START);

        api.getAllRetrospectives(
        {
            successCallback: function (data) {
                dispatchAction(actionTypes.RETROSPECTIVE_LIST_POPULATE_SUCCESS, data);
            },
            errorCallback: function () {
                dispatchAction(actionTypes.RETROSPECTIVE_LIST_POPULATE_ERROR);
            }
        });
    },

    setRetrospectiveSearchDate: function(day, month, year) {
        if (dateValid(day, month, year)) {
            dispatchAction(actionTypes.RETROSPECTIVE_LIST_DATE_CHANGE_START);

            api.getRetrospectivesByDate(day, month, year,
                {
                    successCallback: function(data) {
                        dispatchAction(actionTypes.RETROSPECTIVE_LIST_DATE_CHANGE_SUCCESS,
                        {
                            retrospectives: data,
                            day: day,
                            month: month,
                            year: year
                        });
                    },
                    errorCallback: function() {
                        dispatchAction(actionTypes.RETROSPECTIVE_LIST_DATE_CHANGE_ERROR);
                    }
                });
        } else {
            dispatchAction(actionTypes.RETROSPECTIVE_LIST_SET_SEARCH_DATE, {
                day: day,
                month: month,
                year: year
            });
        }
    }
}