import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export const TestApexCharts = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };
    
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to run effect only once after initial render

  return (
    <div>
      <div id="chart"></div>
    </div>
  );
};

export default TestApexCharts;
