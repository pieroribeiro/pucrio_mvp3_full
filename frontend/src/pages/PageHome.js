import { useEffect, useState } from "react"
import LastNews from '../components/Last-News';

export default function PageHome() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch(`/news.json`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error))
    }, [])

  return (
    <>
      <section>
      </section>

      <section style={{maxWidth: 1280, margin: "0 auto"}}>
        <LastNews data={data} />
      </section>
    </>
  )
}