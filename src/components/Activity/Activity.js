import React from 'react';

import { Draggable } from 'react-beautiful-dnd';
import { Icon } from './ActivityFunctions';
import { 
  Container,
  BlockQuote,
  Footer,
  Type,
  IconContainer,
  Content,
  Address
} from './styles';

export default class Activity extends React.Component {

  render() {
    return (
      <Draggable draggableId={this.props.activity.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            href={this.props.activity.url}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            colors={this.props.activity.typeColor}
          >
            <IconContainer>
              {Icon(this.props.activity.type)}
            </IconContainer>
            <Content>
              <BlockQuote>
                {this.props.activity.name}
              </BlockQuote>
              <Footer>
                <Type color={this.props.activity.typeColor}>
                  {this.props.activity.type}
                </Type>
                <Address>{this.props.activity.address}</Address>
              </Footer>
            </Content>
          </Container>
        )}
      </Draggable>
    );
  }
}