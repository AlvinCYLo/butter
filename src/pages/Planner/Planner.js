import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import initialData from '../../data/initialData';
import List from '../../components/List/List';

const Container = styled.div`
display: flex;
`;

class Schedule extends React.Component {

    state = initialData;

    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (type === 'component') {
            const newLayout = Array.from(this.state.layout);
            newLayout.splice(source.index, 1);
            newLayout.splice(destination.index, 0, draggableId);

            const newState = {
                ...this.state,
                layout: newLayout,
            };
            this.setState(newState);
            return;
        }

        const start = this.state.components[source.droppableId];
        const finish = this.state.components[destination.droppableId];

        if (start === finish) {
            const newActivityIds = Array.from(start.activityIds);
            newActivityIds.splice(source.index, 1);
            newActivityIds.splice(destination.index, 0, draggableId);

            const newComponent = {
                ...start,
                activityIds: newActivityIds,
            };

            const newState = {
                ...this.state,
                components: {
                    ...this.state.components,
                    [newComponent.id]: newComponent,
                }
            };

            this.setState(newState);
            return;
        }

        const startActivityIds = Array.from(start.activityIds);

        startActivityIds.splice(source.index, 1);

        const newStart = {
            ...start,
            activityIds: startActivityIds,
        };

        const finishActivityIds = Array.from(finish.activityIds);

        finishActivityIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            activityIds: finishActivityIds,
        };

        const newState = {
            ...this.state,
            components: {
                ...this.state.components,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        };
        this.setState(newState);
        return;
    };


    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="components" direction="horizontal" type="component">
                    {(provided) => (
                        <Container
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {this.state.layout.map((columnId, index) => {
                                const column = this.state.components[columnId];
                                const activities = column.activityIds.map(activityId => this.state.availableActivities[activityId]);
                                return <List key={column.id} column={column} activities={activities} index={index} />;
                            })}
                            {provided.placeholder}
                        </Container>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Schedule;