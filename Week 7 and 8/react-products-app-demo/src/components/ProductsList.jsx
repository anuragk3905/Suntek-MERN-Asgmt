import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useForm } from "react-hook-form";


function ProductsList() {

  let [products,setProducts] = useState([])
  let [searchedProducts,setSearchProducts] = useState([])
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate()

  //navigate to product component
  const gotoProduct = (productObj)=>{
    // navigation logic
    // while navigating, transfer product obj too 
    navigate('/product', {state : {product : productObj}})
  }

  const submitForm = (obj)=>{
    const searchText = obj.search.toLowerCase().trim()

    if(searchText === ""){
      setSearchProducts(products)
      return
    }

    let newProducts = products.filter(prod=>prod.category.toLowerCase() === searchText)
    setSearchProducts(newProducts)
  }

  useEffect(()=>{
    setLoading(true)
    async function getProducts(){
      try{
        let res = await fetch("https://fakestoreapi.com/products")
        if(res.status===200){
          // extract json data
          let productsData = await res.json()
          // update atate
          setProducts(productsData)
          setSearchProducts(productsData)
        }else{
          throw new Error("Failed to fetch")
        }
      }catch(err) {
        setError(err)
      }finally {
        setLoading(false)
      }
    }
    getProducts()
  },[])

  if(loading===true){
    return <p className="text-center text-2xl text-blue-300">Loading...</p>
  }
  if(error!=null){
    return <p className="text-center text-2xl text-red-500">{error.message}</p>
  }

  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(submitForm)}>
          <input {...register("search")} className="m-3 p-2 rounded-2xl border" type="text" placeholder="Search by category"/>
          <button type="submit" className="rounded-2xl border p-2 bg-blue-800 text-white">Search</button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center ">
      {
      searchedProducts.length === 0 ? (
        <p className="col-span-full text-2xl text-red-500">
          Category Not Found
        </p>) 
      : searchedProducts.map(productObj=><div onClick={()=>gotoProduct(productObj)} key={productObj.id} className="shadow p-10 rounded-2xl cursor-pointer">
          <img src={productObj.image} alt="" className="h-44 object-contain block mx-auto mb-10" />
          <p>{productObj.title}</p>
        </div>)
      }
      </div>
    </div>
  )
}

export default ProductsList