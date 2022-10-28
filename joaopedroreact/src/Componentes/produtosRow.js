const ProdutoRow = ({produto}) => {
    return (
    <tr>
        <td>{produto.categoria}</td>
        <td>{produto.descricao}</td>
        <td>{produto.preco}</td>
    </tr>
    );
}

export default ProdutoRow;