import CartList from "@/components/CartList"
import Search from "@/components/Search"


const Main = () =>{
    
    return (
    <main className="flex  flex-col items-center justify-between mt-3 ">
        <Search/>
        <CartList/>
    </main>
    )
}

export default Main