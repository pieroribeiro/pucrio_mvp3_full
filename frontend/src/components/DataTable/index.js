import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';

export default class DataTable extends React.Component {
    render () {
        const data = this.props["data"]
        const onEdit = this.props["onedit"]
        const onDelete = this.props["ondelete"]

        if (!data) return (<></>)

        return (
            <TableContainer component={ Paper } sx={{ maxWidth: 750, width: 1 }} elevation={3}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>URL</TableCell>
                        <TableCell>KEY</TableCell>
                        <TableCell>AÇÕES</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.url}</TableCell>
                            <TableCell>{row.key}</TableCell>
                            <TableCell>
                                <Button onClick={() => onEdit(row.id)}>Editar</Button>
                                <Button onClick={() => onDelete(row.id)}>Excluir</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
