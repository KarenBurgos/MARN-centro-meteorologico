import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from 'dayjs';
import filterDataByYear from "../../../services/filterDataByYear";

function HeatMapByYear({ data }) {
  const [filteredData, setFilteredData] = useState([]);
    
  useEffect(() => {
    // Filtrar y calcular datos para el heatmap
    const heatmapData = filterDataByYear(data, 'ts');
    setFilteredData(heatmapData);
  }, [data]);

  const years = Array.from(new Set(data.map(item => dayjs(item.fecha).year())));
  const months = Array.from({ length: 12 }, (_, i) => dayjs().month(i).format('MMMM'));

  const chartData = {
    series: filteredData,
    options: {
      chart: {
        height: 350,
        type: 'heatmap',
        background: '#303845'
      },
      plotOptions: {
        heatmap: {
            
          colorScale: {
            ranges: [
                {
                  from: 0,
                  to: 0,
                  color: '#FFFFFF',
                  name: "Sin datos",
                },
                {
                  from: 1,
                  to: 17.9,
                  color: '#C7F464',
                  name: "0 - 17.9 °c",
                },
                {
                  from: 18,
                  to: 29.9,
                  color: '#81D4FA',
                  name: '18 - 29.9 °c',
                },
                {
                  from: 30,
                  to: 45,
                  color: '#FD6A6A',
                  name: '30 - 45 °c',
                },
              ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Heatmap de Temperatura por Año',
        align: 'left',
      },
      xaxis: {
        categories: months,
        title: {
          text: 'Mes',
        },
      },
      yaxis: {
        categories: years.map(year => year.toString()),
        title: {
          text: 'Año',
        },
      },
      theme: {
        mode: 'dark',
      }
    },
  };

  return (
    <div>
      <div className="line-chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="heatmap"
          height={350}
        />
      </div>
    </div>
  );
}

export default HeatMapByYear;
