import { useEffect, useState } from "react"
import { Config } from '../config'
import Chart from "../components/Chart"
import { Paper } from "@mui/material"

export default function PageChart() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:${Config["PORT"]}/apis.json`)
            .then(res => res.json())
            .then(res => setData(res["apis"] || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <Paper sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: 5}} elevation={2}>
            <Chart data={data} />
        </Paper>
    )
}