import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({page, pageData}) => {

  const [data, setData] = useState([])

  console.log(pageData)

  useEffect(() => {

    const loadData = new Promise((resolve, reject)=>{
      //simular la carga de datos desde un archivo json
      import("../db/db.json")
      .then((json) =>resolve(json))
      .catch((error)=>reject(error))
    })

    loadData
    .then((result)=>{
      setData(result.default);
    })
    .catch((error)=>{
      console.error("Error cargando el json", error);
    })
  
  }, [page])


  return (

    
  
    
    <ItemDetail data={data} pageData={pageData} />
    
  )
}

export default ItemDetailContainer