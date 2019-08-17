import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
border: 1px solid lightgrey;
border-radiu: 2px;
padding: 8px;
margin-bottom: 8px;
background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

display: flex;`;

const Handle = styled.div`
width: 20px;
height: 20px;
background-color: orange;
border-radius: 4px;
margin-right: 8px;`;

export default class Task extends React.Component {

    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided, snapshot) => (
                <Container
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                isDragging={snapshot.isDragging}
                >
                    <Handle />
                    {this.props.task.content}
                </Container>
            )}
            </Draggable>
        );
    }
}