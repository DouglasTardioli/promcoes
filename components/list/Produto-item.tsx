import Produto from "@/model/Produto";


interface ProdutoItemProps {
  produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props
  
  return (
    <div>
      <a  href={props.produto.link} target="blank" className={`
      flex p-4 flex-col items-center justify-center gap-2 w-56 h-80 bg-white rounded-md border-2 border-zinc-400
    `}>
  

    
     <div className="flex-1 flex items-center justify-center">
     <img className="max-w-[150px] max-h-[150px]" src={produto.Imagem} alt="imagem do produto" />
     </div>
   
      <div className="flex flex-col">
          <div className="text-sm font-semibold my-2">{produto.nome}</div>
          <div className="border border-zinc-500 w-full my-2"></div>
          <div className="text-xl text-green-600 font-black mb-2">R$ {produto.preco}</div>
    
      </div>
    </a>  
    </div>
  )
}