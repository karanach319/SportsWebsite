import {React} from 'react'
import './ProductList.css'

const productData_1 = [
    { name: 'Product 1', description: 'This is product 1', rating: 4.5 },
    { name: 'Product 2', description: 'This is product 2', rating: 4.0 },
    { name: 'Product 3', description: 'This is product 3', rating: 5.0 }
]

const productData_2 = [
    { name: 'Product 1', description: 'This is product 1', rating: 4.5 },
    { name: 'Product 2', description: 'This is product 2', rating: 4.0 },
    { name: 'Product 3', description: 'This is product 3', rating: 5.0 },
    { name: 'Product 4', description: 'This is product 4', rating: 3.0 },
    { name: 'Product 5', description: 'This is product 5', rating: 1.0 },
    { name: 'Product 6', description: 'This is product 6', rating: 2.5 }
]

function ProductCard({name, description, rating}){
    return (
        <div className='product-card'> 
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{rating}/5</p>
        </div>
    );
};

function ProductList(){
    return (
        <div className='product-list'>
            {productData_1.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    rating={product.rating}
                />
            ))
            }
        </div>
    );
};



export default ProductList;