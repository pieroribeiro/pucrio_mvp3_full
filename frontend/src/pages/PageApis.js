import { useEffect, useState } from "react"
import DataTable from "../components/DataTable"
import { Config } from '../config'
import { Paper } from "@mui/material"

export default function PageApis() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:${Config["PORT"]}/apis.json`)
            .then(res => res.json())
            .then(res => setData(res["apis"] || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <Paper sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: 5}} elevation={2}>
            <DataTable data={data} onedit={() => {console.log("edit")}} ondelete={() => {console.log("delete")}} />
        </Paper>
    )
}