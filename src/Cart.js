import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super(); //this will call the const of the parent class which is (reactcomponent) othewise error
        this.state= {
            products:[          //instead of just only phone or watch this will be an array of all prdts.
                {
                    price : 99,
                    title : 'Watch',
                    qty : 10,
                    img: '',
                    id: 1
                },
                {
                    price : 9999,
                    title : 'Phone',
                    qty : 1,
                    img: '',
                    id :2
                },
                {
                    price : 50000,
                    title : 'Laptop',
                    qty : 1,
                    img: '',
                    id : 3
                },

            ]
        }
        //this.increseQuamtity = this.increaseQuantity.bind(this)
    }
    handleIncreaseQuantity = (product) => {
        console.log('Heyy Pls Inc the qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;

        this.setState({
            products: products
        })
    }
    handleDecreaseQuantity = (product) => {
        console.log('Heyy Pls Inc the qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if(product[index].qty===0){
            return;
        }

        products[index].qty -=1;

        this.setState({
            products: products
        })
    } 
    handleDeleteProduct = (id) =>{
        const {product} = this.state;
        const items = product.filter((item)=> item.id !==id); //{will return an array and this will contains prdts whose id is not equal to id that has been passed}

        this.setState({
            products : items
        })
    }
    render(){
        const{products} = this.state
        return(
            <div className="cart">
   
               { products.map ((product) => {
                    return( 
                        <CartItem
                          product = {product} 
                          key={product.id}
                          onIncreaseQuantity = {this.handleIncreaseQuantity}
                          onDecreaseQuantity = {this.handleDecreaseQuantity}
                          onDelete = {this.handleDeleteProduct}
                        />
                    )
               })}
            </div>
        );
    }

}
export default Cart;   