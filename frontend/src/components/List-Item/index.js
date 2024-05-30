import React from "react"

export default class ListItem extends React.Component {
    render () {
        const data = this.props["data"]
        if (!data) return (<></>)

        return (
            <li>
                <div>{data["url"] || ""}</div>
                <div>{data["key"] || ""}</div>
                <div>
                    <button name="edit">Editar</button>
                    <button name="delete">Excluir</button>
                </div>
            </li>
        )
    }
}