
import ProdutoItem from "./Produto-item";
import Produto from "@/model/Produto";

interface ListaProdutoProps {
  produtos: Produto[];
}

export default function ListaProdutos(props: ListaProdutoProps) {
  

  return (
    <div className="flex px-20 py-6 flex-wrap gap-4 items-center  justify-center">
      {props.produtos.map((produto) => {
        return <ProdutoItem key={produto.id} produto={produto} />;
      })}
    </div>
  );
}
