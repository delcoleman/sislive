var Store = require('../stores/retrospective-list-store');
var Actions = require('../actions/retrospective-list-actions');

var React = require('React');

function renderFeedbackItem(feedbackItem)
{
    return  <div className="retrospective-list__retrospective__feedbackItem">
                <div>Item : {feedbackItem.body}</div>
                <div>Raised By: {feedbackItem.raisedBy}</div>
                <div>Type: {feedbackItem.feedbackType}</div>
            </div>
}

function renderRetrospective(retrospective)
{
    var feedbackItems = retrospective.feedbackItems.map(function(item){
        return renderFeedbackItem(item);
    });

    return  <div className="retrospective-list__retrospective">
                <div className="retrospective-list__retrospective__name">{retrospective.name}</div>
                <div className="retrospective-list__retrospective__date">{retrospective.date}</div>
                <div className="retrospective-list__retrospective__summary">
                    {retrospective.summary}
                </div>
                <div>
                    <h3>Feedback items</h3>
                    {feedbackItems}
                    <button>Add feedback item</button>
                </div>
            </div>
}

module.exports = React.createClass({

    getInitialState: function()
    {
        return Store.getState();
    },

    onStoreChange: function() {
        this.setState(Store.getState());
    },

    componentWillMount: function() {
        Store.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener();
    },

    render: function ()
    {
        var retroList = this.state.retrospectives.map(function (retro) {
            return renderRetrospective(retro);
        });

        return <div>
            { this.renderDatePicker() }
            Hello
            { retroList }
            </div>
    },

    renderDatePicker: function()
    {
        return  <div>
                    Show
                    <input type="radio" name="rdoDate" value="all" checked={!this.state.displayByDate} onClick={this.chooseAllRetrospectives} />All
                    <input type="radio" name="rdoDate" value="byDate" checked={this.state.displayByDate} onClick={this.chooseRetrospectivesByDate} />By Date
                    <br/>
                    <select disabled={!this.state.displayByDate} onChange={this.setRetrospectiveDay} value={this.state.searchDay}>
                        <option value="">day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <select disabled={!this.state.displayByDate} onChange={this.setRetrospectiveMonth} value={this.state.searchMonth}>
                        <option value="">month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="12">December</option>
                    </select>
                    <select disabled={!this.state.displayByDate} onChange={this.setRetrospectiveYear} value={this.state.searchYear}>
                        <option value="">year</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                    </select>
                </div>
    },


    chooseAllRetrospectives: function()
    {
        Actions.selectAllRetrospectives();
    },

    chooseRetrospectivesByDate: function()
    {
        Actions.selectRetrospectivesByDate(this.state.searchDay, this.state.searchMonth, this.state.searchYear);
    },

    setRetrospectiveDay: function(event)
    {
        var day = event.target.value;
        Actions.setRetrospectiveSearchDate(day, this.state.searchMonth, this.state.searchYear);
    },

    setRetrospectiveMonth: function(event)
    {
        var month = event.target.value;
        Actions.setRetrospectiveSearchDate(this.state.searchDay, month, this.state.searchYear);
    },

    setRetrospectiveYear: function(event)
    {
        var year = event.target.value;
        Actions.setRetrospectiveSearchDate(this.state.searchDay, this.state.searchMonth, year);
    }
});