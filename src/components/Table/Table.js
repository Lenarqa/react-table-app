import React from 'react';
import styled from 'styled-components';
import Row from './Row';

const StyledTable = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-bottom: none;
`;

const Table = (props) => {
    return (
        <StyledTable>
            <Row name="ФИО" organization="Организация" eMail="E-Mail" isHeader={true}/>
            <Row name="ФИО" organization="Организация" eMail="E-Mail" />
        </StyledTable>
    );
};

export default Table;