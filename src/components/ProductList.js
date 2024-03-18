import React, { Component, useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const PRODUCT =  [
    {
        id: 1,
        name: "Green Tshirt",
        image: "https://media.istockphoto.com/id/1135510086/photo/green-blank-t-shirt-front-and-back.jpg?s=1024x1024&w=is&k=20&c=J1PunYvjihhkOaLcIuQGM4aGwV4IgIkQyeU-EUVITec=",
        description: "This is available for sale",
        price: "$2"
    },
    {
        id: 2,
        name: "Blue Tshirt",
        image: "https://media.istockphoto.com/id/471951938/photo/blue-t-shirt-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=zEvqspgIKPR6a00AKVwvPbfzqepLVWH9YmnzhVuykPs=",
        description: "This is available for sale",
        price: "$2.5"
    },
    {
        id: 3,
        name: "Yellow Tshirt",
        image: "https://media.istockphoto.com/id/831591150/photo/yellow-t-shirts-front-and-back-used-as-design-template.jpg?s=612x612&w=is&k=20&c=zTiBmz5-fcXA70va2maa2ZFVSvM0TBpdD7jpYENNszw=",
        description: "This is available for sale",
        price: "$3"
    },
    {
        id: 4,
        name: "White Tshirt",
        image: "https://media.istockphoto.com/id/1151955708/photo/mens-white-blank-t-shirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=is&k=20&c=vGhEQwrTbL6RJP3mVFhMzmr6cuxU1XexGZeVpgjpef0=",
        description: "This is available for sale",
        price: "$1.5"
    },
    {
        id: 5,
        name: "Red Tshirt",
        image: "https://media.istockphoto.com/id/685779142/photo/red-tshirt-clothes.jpg?s=612x612&w=is&k=20&c=iheiA5c3aM2fd09rA6z16Ww75hW4hV4RACvdI4S7BMw=",
        description: "This is available for sale",
        price: "$4"
    }
]

function ProductList({searchTerm}) {
  
    const [updatedProduct, setUpdatedProduct] = useState(PRODUCT)
    const [products, setProducts] = useState(PRODUCT)

    useEffect(()=> {
        const filteredProducts = PRODUCT.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        setProducts(filteredProducts)
    },[searchTerm])

    const onPurchase = (item)=> {
        const filteredItems = products.filter((product)=> {
           return product.id !== item.id
        })
        setProducts(filteredItems)
        alert(`${item.name} has been purchased`)
    }
    
    return (
      <div className="container main-content">
        {
          products.map(product => {
            return <ProductRow onPurchase={onPurchase} item={product} key={product.id} image={product.image} name={product.name} description={product.description} price={product.price} />
          })
        }
      </div>
    );
}

export default ProductList;