import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Activity from '../Activity/Activity';
import {
    Container,
    Title,
    TaskList,
} from './styles';

export default class List extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.component.id} index={this.props.index}>
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}>
                        <Title {...provided.dragHandleProps}>
                            {this.props.component.title}
                        </Title>
                        <Droppable droppableId={this.props.component.id} type="activity">
                            {(provided, snapshot) => (
                                <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    {this.props.activities.map((activity, index) => <Activity key={activity.id} activity={activity}
                                        index={index} />)}
                                    {provided.placeholder}
                                </TaskList>
                            )}
                        </Droppable>
                    </Container>
                )}
            </Draggable>
        )
    }
};