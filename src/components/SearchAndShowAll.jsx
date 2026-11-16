import { useEffect, useRef, useState } from "react";
import { useCopyProducts, useProducts, useRandomUUID } from "../store"

export default function SearchAndShowAll() {

    const { products, setProducts } = useProducts()
    const { copyProducts, setCopyProducts } = useCopyProducts()
    let searchInput = useRef();
    const [list, setList] = useState(products)
    const { randomUUID } = useRandomUUID()

    const ShowAll = () => {
        setProducts(copyProducts)
        searchInput.current.value = ""
    }

    useEffect(() => {
        setList(copyProducts)
    }, [products])

    useEffect(() => {
        setProducts(copyProducts)
        sessionStorage.setItem("randomUUID", JSON.stringify(randomUUID))
    }, [])

    const SearchList = () => {
        setList(products.filter((el) => {
            return el.name.toLowerCase().replace(/\s/g, "").includes(
                searchInput.current.value.toLowerCase().replace(/\s/g, "")
            );
        }))
    }

    const SearchOutput = () => {
        let result = products.filter((el) => {
            return el.name.toLowerCase().replace(/\s/g, "").includes(
                searchInput.current.value.toLowerCase().replace(/\s/g, "")
            );
        });
        setProducts(result)
    }

    return (
        <div className="flex items-center justify-between gap-5 mx-auto">
            <button className="btn btn-circle m-3 p-6 bg-black text-white"
                onClick={ShowAll}>Show All</button>
            <div>
                <input type="text" className="input rounded-2xl w-45 mr-1 border-gray-500"
                    placeholder="Enter Phone Name"
                    ref={searchInput}
                    list="search-list" />
                <datalist id="search-list"
                    onClick={SearchList}>
                    {
                        list.map((el, index) => {
                            return (
                                <option key={index} value={el.name}></option>
                            )
                        })
                    }
                </datalist>
                <button className="btn btn-info"
                    onClick={SearchOutput}>Search</button>
            </div>
        </div>
    )
}
