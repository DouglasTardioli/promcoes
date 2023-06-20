import { Header } from "@/components/header/header";
import ListaProdutos from "@/components/list/list";
import Produtos from "@/data/produtos";


export default function Home() {
  return (
    <div>
    <Header />
    <ListaProdutos produtos={Produtos} />
   </div>
  )
}
