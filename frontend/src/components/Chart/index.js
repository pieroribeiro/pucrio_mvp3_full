import React from "react";
import { LineChart } from '@mui/x-charts';

export default class Chart extends React.Component {
    render () {
        const data = this.props["data"]

        if (!data) return (<></>)

        return (
            <LineChart 
                xAxis={[
                    {
                        data: [1, 2, 3, 5, 8, 10]
                    }
                ]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={500}
                height={300} />
        )
    }
}
