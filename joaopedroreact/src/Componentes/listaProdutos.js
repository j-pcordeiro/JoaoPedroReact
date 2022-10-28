const produtos = [
    {
        id: 1,
        categoria: "Salgados",
        descricao: "Ovo colorido",
        preco: "R$ 2,50"
    },
    {
        id: 2,
        categoria: "Salgados",
        descricao: "Pastel de vento",
        preco: "R$ 1,05"
    },
    {
        id: 3,
        categoria: "Doces",
        descricao: "Açúcar colorido enrolado",
        preco: "R$ 1,50"
    },
    {
        id: 4,
        categoria: "Doces",
        descricao: "Bala de groselha",
        preco: "R$ 0,50"
    }
]

const ListaProdutos = () => {
return ( 
         <> 
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Produtos do Manoel
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                  {produtos.map ((p) => (
                    <tr key={p.id}>
                        <td>{p.categoria}</td>
                        <td>{p.descricao}</td>
                        <td>{p.preco}</td>
                    </tr>
                  )

                  )}
                </tbody>
            </table>
        </>
    ); 
};

export default ListaProdutos;