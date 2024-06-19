// import React, { Component } from 'react';
// import Chart from 'react-apexcharts';

// class BinaryChart extends Component {
//   constructor(props) {
//     super(props);

//     const currentYear = new Date().getFullYear();
//     const numberOfWeeks = this.getISOWeeks(currentYear);

//     // Generate x-axis categories dynamically
//     const xAxisCategories = Array.from({ length: numberOfWeeks }, (_, i) => `W${i + 1}`);

//     // Sample attendance data for each day of the week
//     const attendanceData = [
//       {date:"2024-01-01", attempt: 1},
//       {date:"2024-01-02", attempt: 5},
//       {date:"2024-01-03", attempt: 2},
//       {date:"2024-01-04", attempt: 2},
//       {date:"2024-01-05", attempt: 9},
//       {date:"2024-01-07", attempt: 1},
//       {date:"2024-01-08", attempt: 7},
//       {date:"2024-01-09", attempt: 12},
//       {date:"2024-01-10", attempt: 8}
//     ];

//     function getWeekNumber(date) {
//       const d = new Date(date);
//       d.setHours(0, 0, 0, 0);
//       d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
//       const week1 = new Date(d.getFullYear(), 0, 4);
//       return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
//     }

//     const newAttendanceData = attendanceData.map(item => ({
//       ...item,
//       week: getWeekNumber(item.date)
//     }));

//     this.state = {
//       options: {
//         chart: {
//           height: 350,
//           type: 'heatmap',
//         },
//         dataLabels: {
//           enabled: false
//         },
//         colors: ["#03a264"],
//         xaxis: {
//           // type: 'category',
//           categories: xAxisCategories
//         },
//         title: {
//           text: 'Binary Attendance Chart (Red: Not Logged In, Green: Logged In)'
//         },
//       },
//       series: newAttendanceData.map(item => ({ name: item.week, data: item.attempt }))
//     };
//   }

//   // Function to calculate the number of ISO weeks in a year
//   getISOWeeks(year) {
//     const startDate = new Date(year, 0, 1);
//     const endDate = new Date(year, 11, 31);
//     const daysDifference = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
//     const numberOfWeeks = Math.ceil((daysDifference + startDate.getDay() + 1) / 7);
//     return numberOfWeeks;
//   }

//   render() {
//     return (
//       <div>
//         <div id="chart" className='md:w-3/4 mx-auto'>
//           <Chart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
//         </div>
//         <div id="html-dist"></div>
//       </div>
//     );
//   }
// }

// export default BinaryChart;
