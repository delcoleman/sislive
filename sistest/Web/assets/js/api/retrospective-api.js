var $ = require('jquery');

function ajaxCall(verb, url, options, requestData) {
    return $.ajax({
        url: url,
        dataType: 'json',
        type: verb,
        data: requestData,
        success: function (data, status, xhr) {
            if ($.isFunction(options.successCallback)) {
                options.successCallback(data, status, xhr);
            }
        },
        error: function (xhr, status, err) {
            if ($.isFunction(options.errorCallback)) {
                options.errorCallback(status, err, xhr);
            }
        }
    });
   
}

function ajaxGet(url, options) {
    return ajaxCall('GET', url, options);
}

function ajaxPut(url, data, options) {
    return ajaxCall('PUT', url, options, data);
}

function ajaxPost(url, data, options) {
    return ajaxCall('POST', url, options, data);
}

module.exports = {
    getAllRetrospectives: function(options) {
        ajaxGet('/api/retrospective', {
            successCallback: function (data) {
                options.successCallback(data);
            },
            errorCallback: options.errorCallback
        });
    },
    getRetrospectivesByDate: function(day, month, year, options) {
        ajaxGet('/api/retrospective/date/' + day + '-' + month + '-' + year, {
            successCallback: function (data) {
                options.successCallback(data);
            },
            errorCallback: options.errorCallback
        });
    },
    addRetrospective: function(retrospective, options) {
        ajaxPost('/api/retrospective', retrospective, options);
    }
}