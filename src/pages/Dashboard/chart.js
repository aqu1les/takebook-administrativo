import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, VerticalGridLines, XAxis, YAxis, HorizontalGridLines } from 'react-vis';

class Chart extends Component {
    render() {
        const data = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 }
        ];
        return (
            <XYPlot height={100} width={320} onClick={() => { }} id="chart" styles="touch-action: none;">
                <LineSeries data={data} color="red" />
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
            </XYPlot>
        );
    }
}

export default Chart;