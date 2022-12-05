import BarChart from 'react-native-chart-kit/dist/BarChart';

export default class XBarChart extends Component {
    chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [ { data: [20, 45, 28, 80, 99, 43] } ]
    };

    render() {
        return (
            <BarChart
                // style={graphStyle}
                data={this.data}
                width={350}
                height={220}
                yAxisLabel="$"
                chartConfig={this.chartConfig}
                verticalLabelRotation={30}
            />
        );
    }
}
