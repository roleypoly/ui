import * as React from 'react'
import { atomStories } from '../atoms.story'
import { palette } from './colors'
import styled from 'styled-components'
import chroma from 'chroma-js'

type RatioList = {
  color1: string[]
  color2: string[]
  ratio: string
}

const story = atomStories('Colors', module)

const Swatch = styled.div`
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  width: 250px;
  height: 100px;
  margin: 10px;
  display: inline-block;
`

const SwatchColor = styled.div`
  height: 72px;
`

const Label = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 6px;
  p {
    margin: 0;
  }
`

story.add('Colors', () => {
  return (
    <div>
      {Object.entries(palette).map(([name, color], i) => (
        <Swatch key={i}>
          <SwatchColor style={{ backgroundColor: color }} />
          <Label>
            <p>{name}</p>
            <p>
              <code>var(--{name})</code>
            </p>
          </Label>
        </Swatch>
      ))}
    </div>
  )
})

const ContrastTable = styled.table`
  td,
  th {
    padding: 3px 5px;
  }
`

story.add('Contrast Ratios', () => {
  const allRatios = Object.entries(palette)
    .filter(([name]) => !name.startsWith('discord'))
    .reduce(
      (acc, [name, color]) => {
        return [
          ...acc,
          ...Object.entries(palette)
            .filter(([name]) => !name.startsWith('discord'))
            .map(([matchName, matchColor]) => ({
              color1: [name, color],
              color2: [matchName, matchColor],
              ratio: chroma.contrast(color, matchColor).toFixed(2),
            })),
        ]
      },
      [] as RatioList[]
    )
    .filter(({ ratio }) => +ratio !== 1)
    .sort((a, b) => {
      if (+a.ratio > +b.ratio) {
        return -1
      }
      return 1
    })
    .filter((_, i) => i % 2 === 0)

  return (
    <ContrastTable>
      <thead>
        <tr>
          <th colSpan={2}>Swatch</th>
          <th>Ratio</th>
          <th>Color 1</th>
          <th>Color 2</th>
        </tr>
      </thead>
      <tbody>
        {allRatios.map((ratio, i) => (
          <tr key={i}>
            <td style={{ backgroundColor: ratio.color1[1] }}>&nbsp;</td>
            <td style={{ backgroundColor: ratio.color2[1] }}>&nbsp;</td>
            <td style={+ratio.ratio >= 4.5 ? { color: 'green', fontWeight: 'bold' } : {}}>
              {ratio.ratio}
            </td>
            <td>{ratio.color1[0]}</td>
            <td>{ratio.color2[0]}</td>
          </tr>
        ))}
      </tbody>
    </ContrastTable>
  )
})
