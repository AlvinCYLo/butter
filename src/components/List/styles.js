import styled from 'styled-components';
import { colors } from '@atlaskit/theme';

export const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
background-color: white;
width: 300px;
display: flex;
flex-direction: column;`;

export const Title = styled.h3`
padding: 8px;`;

export const TaskList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? colors.B50 : 'inherit')};
flex-grow: 1;`;