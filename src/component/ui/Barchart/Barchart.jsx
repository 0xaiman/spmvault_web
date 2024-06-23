import Chart from 'react-apexcharts';

const Barchart = ({averageScore,arraySubject}) => {


  return (
    <div className=' md:w-3/5 '>
      <Chart
        type="bar"
        width="100%"
        // width={window.innerWidth<640? "340":"700"}
        height="auto"
        series={[
          {
            name: "Your average score",
            data: averageScore
          }
        ]}
        options={{
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: arraySubject
          },
          title: {
            text: 'Average Score Per Subject (%)',
            align: 'center', 
            style: {
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#263238'
            }
        }
        }}
      />
    </div>
  );
}

export default Barchart;
