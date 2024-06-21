import Chart from 'react-apexcharts';

const Barchart = ({averageScore}) => {


  return (
    <div className=' md:w-3/5 '>
      <Chart
        type="bar"
        width="100%"
        // width={window.innerWidth<640? "340":"700"}
        height="auto"
        series={[
          {
            name: "test data",
            data: averageScore
          }
        ]}
        options={{
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: ['Bahasa Melayu','English','Sejarah','Pendidikan Islam','Pendidikan Moral','Matematik' ]
          },
          title: {
            text: 'Average Score Per Subject (%)',
            align: 'center', // You can align it 'left', 'center', or 'right'
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
