import Chart from 'react-apexcharts';

const Donutchart = ({numberAttempt,arraySubject}) => {


  return (
    <div className=' md:w-2/5  my-auto '>
      <Chart
        type="pie"
        width="100%"
        height="auto"
        // series= {[44, 55, 13, 43, 22,22]}
        series= {numberAttempt}
        options={{
            legend:{position:'bottom'},
         
          labels:arraySubject,
          title: {
            text: 'Number of Attempts Per Subject', 
            align:'center'
        },
        
          dataLabels: {
            style: {
              fontSize: '20px'
            }
          }
        }}
      />
    </div>
  );
}

export default Donutchart;
