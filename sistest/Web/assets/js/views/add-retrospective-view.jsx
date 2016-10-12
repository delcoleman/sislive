var React = require('React');

var Store = require('../stores/add-retrospective-store');
var Actions = require('../actions/add-retrospective-actions');

module.exports = React.createClass({

    getInitialState: function () {
        return Store.getState();
    },

    onStoreChange: function () {
        this.setState(Store.getState());
    },

    componentWillMount: function () {
        Store.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function () {
        Store.removeChangeListener();
    },

    render: function()
    {
        var retrospectiveForm;

        if (this.state.adding)
        {
            var participants = this.state.participants.map(function (participant) {
                return  <div>
                            <input type="checkbox" checked={participant.selected} onChange={this.updateParticipant} value={participant.name} />{participant.name}
                        </div>
            }.bind(this));

            retrospectiveForm = <div>
                                    <label>Name</label><input type="text" value={this.state.name} onChange={this.nameChange}/>
                                    <br />
                                    <label>Date</label>
                                    <select value={this.state.day} onChange={this.dayChange}>
                                        <option value="">day</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>                                      
                                    </select>
                                    <select value={this.state.month} onChange={this.monthChange}>
                                        <option value="">month</option>
                                        <option value="1">January</option>
                                    </select>
                                    <select value={this.state.year} onChange={this.yearChange}>
                                        <option value="">year</option>
                                        <option value="2000">2000</option>
                                    </select>
                                    <br />
                                    <label>Summary</label>
                                    <textarea onChange={this.summaryChange} value={this.state.summary}>
                                        {this.state.summary}
                                    </textarea>                                    
                                    <br />
                                    <label>Participants</label>
                                    {participants}
                                    <br />
                                    <button onClick={this.cancelAdding}>Cancel</button>
                                    <br />
                                    <button onClick={this.saveRetrospective} disabled={!this.state.valid}>Save</button>
                                </div>
        }

        return  <div>
                    <button onClick={this.addRetrospective} disabled={this.state.adding}>Add retrospective</button>
                    {retrospectiveForm}
                </div>
    },

    addRetrospective: function()
    {
        Actions.addRetrospective();
    },

    cancelAdding: function()
    {
        Actions.cancelAddRetrospective();
    },

    saveRetrospective: function()
    {
        var retrospective = {
            name: this.state.name,
            summary: this.state.summary,
            day: this.state.day,
            month: this.state.month,
            year: this.state.year,
            participants: []
        };

        for (var i = 0; i < this.state.participanta.length; i++)
        {
            if (this.state.participanta[i].selected) {
                retrospective.participants.push(this.state.participants[i].name);
            }
        }

        Actions.saveRetrospective(retrospective);
    },

    nameChange: function(event)
    {
        var name = event.target.value;
        Actions.updateName(name);
    },

    dayChange: function(event){
        var day = event.target.value;
        Actions.updateDay(day);
    },

    monthChange: function(event) {
        var month = event.target.value;
        Actions.updateMonth(month);
    },

    yearChange: function(event) {
        var year = event.target.value;
        Actions.updateYear(year);
    },

    updateParticipant: function (event) {
        var participantName = event.target.value;

        if (event.target.checked) {
            Actions.addParticipant(participantName);
        }
        else {
            Actions.removeParticipant(participantName);
        }
    },

    summaryChange: function(event)
    {
        var summary = event.target.value;
        Actions.updateSummary(summary);
    }
});