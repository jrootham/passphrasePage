/** @jsx React.DOM */

/**
 * Created by jrootham on 03/07/14.
 */

PassphrasePage.Dice = {}

PassphrasePage.Dice.Spots = 6
PassphrasePage.Dice.Dice = 6
PassphrasePage.Dice.Rolls = 6

var Documentation = React.createClass({
    render : function() {
        return (
            <div> Documentation </div>
        )
    }
})

var Die = React.createClass({
    render: function() {
        return (
            <button>{this.props.n}</button>
        )
    }
})

var DiceRolls = React.createClass({
    render : function() {
        var spots = []
        for (var i = 1 ; i <= PassphrasePage.Dice.Spots ; i++) {
            spots.push(i)
        }

        return (
            <div>
            {spots.map(function(n){return(<Die n={n} />)})}
            </div>
        )
    }
})

var Results = React.createClass({
    render : function() {
        var rolls = []
        for (var i = 1 ; i <= PassphrasePage.Dice.Rolls ; i++) {
            rolls.push(i)
        }

        var dice = []
        for (var i = 1 ; i <= PassphrasePage.Dice.Dice ; i++) {
            dice.push(i)
        }

        return (
            <table></table>
        )
    }
})

var Action = React.createClass({
    render : function() {
        return (
            <div> Action </div>
        )
    }
})

var Dice = React.createClass({
    render: function() {
        return (
            <div> <Documentation /> <DiceRolls /> <Results /> <Action /> </div>
        )
    }
})

React.renderComponent(
    <Dice />,
    document.getElementById('dicediv')
);