import Link from "next/link"
import "./article.css"
interface Content {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  fields: Record<string, unknown>
  isHosted: boolean
  pillarId: string
  pillarName: string
}

const Article = ({content}:{content:Content}) => {
  return (
    <>
    <Link className="top-2 left-2 fixed" href="/">Назад</Link>
    <main className="min-w-full min-h-screen flex justify-center items-center my-3">
      <div className="p-5 bg-slate-700 mx-5 w-full h-auto md:w-2/3">
        <h1 className="text-center break-words text-lg mb-4">
          {content?.webTitle}
        </h1>
        <div className="flex justify-between mb-4">
          <time>{new Date(content?.webPublicationDate).toDateString()}</time>
          <Link className="text-yellow-600" href={content.webUrl}>read on Guardian</Link>
        </div>
        <img className="float-left mr-3 w-3/5 mb-3 max-[440px]:w-full" src={content?.fields?.thumbnail as string} />
        <div className="article" dangerouslySetInnerHTML={{__html:content?.fields?.body as string}}>
        </div>
      </div>
    </main>
    </>
  )
}

export default Article
