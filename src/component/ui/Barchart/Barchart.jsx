import Chart from 'react-apexcharts';

const Barchart = () => {


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
            data: [80, 75, 94, 73, 0]
          }
        ]}
        options={{
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: ['Bahasa Melayu','English','Sejarah','Pendidikan Islam','Matematik' ]
          },
          title: {
            text: 'Average Marks Per Subject',
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
