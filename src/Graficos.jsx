import React from 'react';
import { VictoryPie, VictoryLabel, VictoryChart, VictoryHistogram, VictoryAxis, VictoryPortal } from 'victory';

function Graficos() { //Datos placeholder, cambiar a discreción
  const pieChartData = [
    { x: 'A', y: 40 },
    { x: 'B', y: 20 },
    { x: 'C', y: 30 },
    { x: 'D', y: 10 },
  ];

  const histogramData = [
    { x: 0, y: 25 },
    { x: 1, y: 20 },
    { x: 2, y: 15 },
    { x: 3, y: 10 },
    { x: 4, y: 5 },
    { x: 4, y: 15 },
    { x: 4, y: 10 },
    { x: 4, y: 5 },
    { x: 4, y: 2 },
    { x: 5, y: 10 },
    { x: 5, y: 5 },
    { x: 5, y: 2 },
    { x: 6, y: 8 },
    { x: 6, y: 3 },
    { x: 6, y: 1 },
  ];

  return (
    <div className="graficos-container">
      <div className="chart-container">
        <VictoryChart height={300} width={400}>
          <VictoryPie
            data={pieChartData}
            colorScale={['#FF6347', '#FFA500', '#FFD700', '#ADFF2F']}
            labelComponent={
              <VictoryLabel
                renderInPortal
                style={{ fontSize: 12, fill: '#FFFFFF' }}
                dy={-8}
              />
            }
            labels={({ datum }) => `${datum.y}%`}
            labelRadius={({ innerRadius }) => innerRadius + 20}
            innerRadius={50}
          />
        </VictoryChart>
      </div>
      <div className="chart-container">
        <VictoryChart height={300} width={400}>
          <VictoryHistogram
            data={histogramData}
            binSpacing={2}
            style={{
              data: { fill: '#FF6347' },
            }}
            x="x"
            y="y"
            labels={({ datum }) => datum.y}
            labelComponent={
              <VictoryPortal>
                <VictoryLabel
                  style={{ fill: '#FFFFFF', fontSize: 10 }}
                  dy={-10}
                />
              </VictoryPortal>
            }
          />
          <VictoryAxis
            label="hour"
            style={{
              axisLabel: { padding: 30 },
            }}
          />
          <VictoryAxis
            dependentAxis
            label="Cans"
            style={{
              axisLabel: { padding: 40 },
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default Graficos;