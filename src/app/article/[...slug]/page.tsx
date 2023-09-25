import Article from "@/route/Article"
import axios from "axios"

interface PageProps{
    params:{
        slug:string[]
    }
    searchParams:any
}

const getArticle = async (id:string)=>{
    try{

        const res = await axios.get(`https://content.guardianapis.com/${id}`,{params:{"api-key":process.env.NEXT_PUBLIC_API_KEY,"show-fields":"body,thumbnail"}})
        return res.data
    }
    catch(e){
        throw new Error("Ошибка при получении данных")
    }
}


const Page = async (props:PageProps) =>{
    const article = await getArticle(props.params.slug.join("/"))
    return <Article content={article.response.content}/>
   
    
}

export default Page