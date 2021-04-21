import React from 'react'
import styled from 'styled-components'

const AdditionalProductResources = (props) => {
  const resources = props.resources || []

  const Wrapper = styled.section`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 70%;
    border: 1px black solid;
    padding-bottom: 20px;
    background-color: white;
  `

  // const BigTextContent = styled.div`font-size: 0.85em;font-weight: normal;`
  const Table = styled.table`
    width:100%;
    border-collapse: collapse;
  `

  const TableRow = styled.tr``
  const TableBody = styled.tbody``
  const TableData = styled.td`padding-top: 10px;`
  const TableColumnHead = styled.th`
    text-align: left;
    font-size: 1.5em;
    border-bottom: 1px black solid;
  `

  const rows = resources.map((r, i) => {
    return (
      <TableRow key={i+1}>
        <TableData>{r.material}</TableData>
        <TableData>{r.resource}</TableData>
        <TableData>{r.other}</TableData>
      </TableRow>
    )
  })

  return (
    <Wrapper>
      <Table>
        <TableBody>
          <TableRow key={0}>
            <TableColumnHead>Information</TableColumnHead>
            <TableColumnHead>Resources</TableColumnHead>
            <TableColumnHead>Other</TableColumnHead>
          </TableRow>
          {rows}
        </TableBody>
      </Table>
    </Wrapper>
  )
}

export default AdditionalProductResources
