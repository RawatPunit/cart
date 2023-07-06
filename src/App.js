import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

class App extends React.Component {
  constructor(){
    super(); //this will call the const of the parent class which is (reactcomponent) othewise error
    this.state= {
        products:[          //instead of just only phone or watch this will be an array of all prdts.
            {
                price : 99,
                title : 'Watch',
                qty : 10,
                img: 'https://staticimg.titan.co.in/Titan/Catalog/1805QM04_1.jpg?impolicy=pqmed&imwidth=640',
                id: 1
            },
            {
                price : 9999,
                title : 'Phone',
                qty : 1,
                img: 'https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg',
                id :2
            },
            {
                price : 50000,
                title : 'Laptop',
                qty : 1,
                img: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3535-amd/media-gallery/black/notebook-inspiron-15-3535-nt-plastic-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=642&qlt=100,1&resMode=sharp2&size=642,402&chrss=full',
                id : 3
            }
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
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0){
        return;
    }

    products[index].qty -=1;

    this.setState({
        products: products
    })
} 
handleDeleteProduct = (id) =>{
    const { products } = this.state;
    const items = products.filter((item)=> item.id !==id); //{will return an array and this will contains prdts whose id is not equal to id that has been passed}

    this.setState({
        products : items
    })
}

getCartCount= () =>{
    const {products}  = this.state;

    let count= 0;
    products.forEach((product)=>{
        count += product.qty;
    })
    return count;
}

getCartTotal = () =>{
    const {products}  = this.state;

    let cartTotal = 0;

    products.map((product)=>{
        cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
}

render(){
    const {products}  = this.state;
    return (
      <div className="App"> 
        <Navbar count={this.getCartCount()}/>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDelete = {this.handleDeleteProduct}
        />
        <div style={{padding:10,fontsize: 20}}> TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }  
}

export default App;
