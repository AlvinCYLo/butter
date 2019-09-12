import React from 'react';

import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Activity from '../Activity/Activity';

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
background-color: white;
width: 300px;
display: flex;
flex-direction: column;`;

const Title = styled.h3`
padding: 8px;`;

const TaskList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'inherit')};
flex-grow: 1;`;

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