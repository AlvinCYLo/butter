import React from 'react';

import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Activity from '../Activity/Activity';

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
background-color: lightgrey;
width: 220px;
display: flex;
flex-direction: column;`;

const Title = styled.h3`
padding: 8px;`;

const List = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? `${colors.B50}` : 'inherit')};
flex-grow: 1;`;

export default class ActivityList extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}>
                        <Title {...provided.dragHandleProps}>
                            {this.props.column.title}
                        </Title>
                        <Droppable droppableId={this.props.column.id} type="task">
                            {(provided, snapshot) => (
                                <List
                                    style={this.props.style}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    {this.props.activities.map((activity, index) => <Activity key={activity.id} activity={activity}
                                        index={index} />)}
                                    {provided.placeholder}
                                </List>
                            )}
                        </Droppable>
                    </Container>
                )}
            </Draggable>
        )
    }
};