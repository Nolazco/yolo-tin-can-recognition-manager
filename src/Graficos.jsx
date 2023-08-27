import React from 'react';
import { VictoryTheme, VictoryPie, VictoryLabel, VictoryBar, VictoryChart, VictoryAxis, VictoryLegend } from 'victory';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import './App.css'; // Import the CSS file

function Graficos() {
  const [buenasData, setBuenasData] = useState([]);
  const [malasData, setMalasData] = useState([]);
  const [ultimoPromedioBuenas, setUltimoPromedioBuenas] = useState(0);
  const [ultimoPromedioMalas, setUltimoPromedioMalas] = useState(0);

  useEffect(() => {
    const database = firebase.database();

    const buenasRef = database.ref('buenas');
    buenasRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const buenasArray = Object.values(data);
        setBuenasData(buenasArray);
        const ultimoPromedio = buenasArray[buenasArray.length - 1].promedio;
        setUltimoPromedioBuenas(ultimoPromedio);
      }
    });

    const malasRef = database.ref('malas');
    malasRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const malasArray = Object.values(data);
        setMalasData(malasArray);
        const ultimoPromedio = malasArray[malasArray.length - 1].promedio;
        setUltimoPromedioMalas(ultimoPromedio);
      }
    });
  }, []);

  const ultimasBuenas = buenasData.slice(Math.max(buenasData.length - 5, 0));
  const ultimasMalas = malasData.slice(Math.max(malasData.length - 5, 0));

  const theme = {
    colors: {
      grey: 'gray',
      cloud: '#C5C6D0',
    },
  };

  return (
    <div className="graficos-container">
      <div className="chart-container">
        <div className="chart-text chart-text-highlight">Ultimo periodo detectado - Piechart</div>
        <VictoryChart height={300} width={400}>
          <VictoryPie
            data={[
              { x: 'Buenas', y: ultimoPromedioBuenas },
              { x: 'Malas', y: ultimoPromedioMalas },
            ]}
            colorScale={['blue', 'red']}
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
        <div className="chart-text chart-text-highlight">Ultimos cinco periodos - Histograma</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <VictoryChart theme={VictoryTheme.material} height={300} width={400} style={{ backgroundColor: 'white', parent: { backgroundColor: 'white' } }}>
            <VictoryAxis
              style={{
                axisLabel: { fill: 'black' },
                tickLabels: { fill: 'black' },
              }}
              dependentAxis
              domain={[0, 100]}
              tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            />
            <VictoryAxis
              style={{
                axis: { stroke: 'black' },
                ticks: { stroke: 'gray' },
                tickLabels: { fill: 'white' },
                axisLabel: { fill: 'gray' },
                grid: {
                  stroke: ({ tick }) => tick % 2 === 0 ? theme.colors.grey : theme.colors.cloud,
                  strokeDasharray: 5,
                  transform: 'translateX(2.5%) scale(0.95,1) ',
                },
              }}
            />
            <VictoryBar
              data={ultimasBuenas.map((item, index) => ({
                x: index,
                y: item.promedio,
              }))}
              style={{ data: { fill: 'blue' } }}
              barWidth={15}
            />
            <VictoryBar
              data={ultimasMalas.map((item, index) => ({
                x: index + 0.3,
                y: item.promedio,
              }))}
              style={{ data: { fill: 'red' } }}
              barWidth={15}
            />
            <VictoryLegend
              x={120}
              y={266}
              orientation="horizontal"
              gutter={20}
              style={{ border: { stroke: 'black' } }}
              data={[
                { name: 'Malas', symbol: { fill: 'red', type: 'star' } },
                { name: 'Buenas', symbol: { fill: 'blue', type: 'star' } }
              ]}
            />
            <VictoryAxis
              dependentAxis
              label="Promedio"
              style={{
                axis: { stroke: theme.colors.grey },
                ticks: { stroke: theme.colors.grey },
                axisLabel: { padding: 30 },
              }}
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}

export default Graficos;