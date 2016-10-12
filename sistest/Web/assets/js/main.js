var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var retrospectiveList = require('./views/retrospective-list-view.jsx');
var addRetrospectiveButton = require('./views/add-retrospective-view.jsx');

$(document).ready(function () {
    var retrospectiveLiatElement = React.createElement(retrospectiveList);
    ReactDOM.render(retrospectiveLiatElement, $('#view-1')[0]);

    var addRetrospectiveElement = React.createElement(addRetrospectiveButton);
    ReactDOM.render(addRetrospectiveElement, $('#add-retrospective-button')[0]);
})