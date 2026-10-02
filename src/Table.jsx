const Table = ({data}) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Название</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map((item) => {
                    return (
                        <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.price}
                            </td>
                        </tr>
                    )
                })

            }
            </tbody>
        </table>
    )
}

export default Table;