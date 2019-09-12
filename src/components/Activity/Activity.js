import React from 'react';
import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';
import { colors } from '@atlaskit/theme';

import {grid, borderRadius} from "../../constants";

const Container = styled.a`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${props => getBorderColor(props.isDragging, props.colors)};
  background-color: ${props =>
    getBackgroundColor(props.isDragging, props.isGroupedOver, props.colors)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N70}` : 'none'};
  padding: ${grid}px;
  min-height: 40px;
  margin-bottom: ${grid}px;
  user-select: none;

  color: ${colors.N900};

  &:hover,
  &:active {
    color: ${colors.N900};
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.colors.hard};
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`;

const BlockQuote = styled.div`
  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`;

const Footer = styled.div`
  display: flex;
  margin-top: ${grid}px;
  align-items: center;
`;

const Author = styled.small`
  flex-grow: 0;
  margin: 0;
  background-color: ${props => props.color.soft};
  border-radius: ${borderRadius}px;
  font-weight: normal;
  padding: ${grid / 2}px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${grid}px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Content = styled.div`
  flex-grow: 1;

  flex-basis: 100%;

  display: flex;
  flex-direction: column;
`;

const getBackgroundColor = (isDragging, isGroupedOver, typeColor) => {
    if (isDragging) {
        return typeColor.soft;
    }

    if (isGroupedOver) {
        return colors.N30;
    }

    return colors.N0;
};

const getBorderColor = (isDragging, typeColor) =>
    isDragging ? typeColor.hard : 'transparent';

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
                        <Avatar src={this.props.activity.image}/>
                        <Content>
                            <BlockQuote>
                                {this.props.activity.name}
                            </BlockQuote>
                            <Footer>
                                <Author color={this.props.activity.typeColor}>
                                    {this.props.activity.type}
                                </Author>
                            </Footer>
                        </Content>
                    </Container>
                )}
            </Draggable>
        );
    }
}