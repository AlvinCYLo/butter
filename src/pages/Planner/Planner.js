import React from 'react';
import '@atlaskit/css-reset';
import styled from '@emotion/styled';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from '../../data/initialData';
import ActivityList from '../../components/ActivityList/ActivityList';

const Container = styled.div`
display: flex;
`;

class Planner extends React.Component {

    state = initialData;

    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = Array.from(this.state.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = {
                ...this.state,
                columnOrder: newColumnOrder,
            };
            this.setState(newState);
            return;
        }

        const start = this.state.Planner[source.droppableId];
        const finish = this.state.Planner[destination.droppableId];

        if (start === finish) {
            const newActivityIds = Array.from(start.activityIds);
            newActivityIds.splice(source.index, 1);
            newActivityIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                activityIds: newActivityIds,
            };

            const newState = {
                ...this.state,
                Planner: {
                    ...this.state.Planner,
                    [newColumn.id]: newColumn,
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
            Planner: {
                ...this.state.Planner,
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
                <Droppable droppableId="all-columns" direction="horizontal" type="column">
                    {(provided) => (
                        <Container
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {this.state.columnOrder.map((columnId, index) => {
                                const column = this.state.Planner[columnId];
                                const activities = column.activityIds.map(activitiesId => this.state.availableActivities[activitiesId]);
                                return <ActivityList
                                    style={this.props.style}
                                    key={column.id}
                                    column={column}
                                    activities={activities}
                                    index={index} />;
                            })}
                            {provided.placeholder}
                        </Container>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Planner;