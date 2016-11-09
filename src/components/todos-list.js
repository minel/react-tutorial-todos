import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
    }
    render() {
        return (
            <table>
                <TodosListHeader />
                <tbody>
                    {console.log(this.renderItems())}
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}