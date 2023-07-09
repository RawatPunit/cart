import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class App extends React.Component {
  constructor(){
    super(); //this will call the const of the parent class which is (reactcomponent) othewise error
    this.state= {
        products:[],          //instead of just only phone or watch this will be an array of all prdts.
        loading : true
    }
    this.db = firebase.firestore();
    //this.increseQuamtity = this.increaseQuantity.bind(this)
}

    // componentDidMount(){
    //     // firebase
    //     //     .firestore()
    //     //     .collection('products')
    //     //     .get()
    //     //     .then((snapshot)=>{
    //     //         console.log(snapshot)

    //     //         snapshot.docs.map((doc)=>{
    //     //             console.log(doc.data())
    //     //         });

    //     //         const products = snapshot.docs.map((doc)=>{
    //     //             const data = doc.data();
    //     //             data['id'] = doc.id;
    //     //             return data;
    //     //         })

    //     //         this.setState({
    //     //             products,
    //     //             loading: false
    //     //         })
    //     //     })
    //     }
        componentDidMount(){
            this.db
            .collection('products')
            .orderBy("price", "desc")
            .onSnapshot(snapshot=>{    
                        const products = snapshot.docs.map(doc=> {
                        const data = doc.data();
                        data["id"] = doc.id;
                        return data;
                    })
                        this.setState({
                            products: products,
                            loading: false
                        })
                    })
        }
        


handleIncreaseQuantity = (product) => {
    console.log('Heyy Pls Inc the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty +=1;

    // this.setState({
    //     products: products
    // })
    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({ qty: products[index].qty + 1 })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch(error => {
        console.log(error);
      });
}
handleDecreaseQuantity = (product) => {
    console.log('Heyy Pls Inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
        return;
      }
      // products[index].qty -= 1;
  
      // this.setState({
      //   products
      // });
      const docRef = this.db.collection("products").doc(products[index].id);
  
      docRef
        .update({ qty: products[index].qty - 1 })
        .then(() => {
          console.log("Document updated sucessfully");
        })
        .catch(error => {
          console.log(error);
        });
} 



handleDeleteProduct = (id) =>{
    const { products } = this.state;

    const docRef = this.db.collection("products").doc(id);

    docRef
      .delete()
      .then(() => {
        console.log("Deleted sucessfully");
      })
      .catch(err => {
        console.log(err);
      });

    // const items = products.filter(product => product.id !== id);

    // this.setState({
    //   products: items
    // });
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
        if(product.qty>0){
        cartTotal = cartTotal + product.qty * product.price;
        }
        return '';
    })

    return cartTotal;
}

addProduct =()=>{
    this.db
    .collection('products')
    .add({
        img : " ",
        price : 100,
        title : "washing Machine",
        qty :1
    })
    .then(docRef => {       //docRef will create a document of the above details of product and add it tothe pdtd cllection
        docRef.get().then(snapshot => {
          console.log("Product has been added", snapshot.data());
        });
      }) 


    .catch((error)=> {
        console.log('Error', error);
    })
}


render(){
    const {products,loading}  = this.state;
    return (
      <div className="App"> 
        <Navbar count={this.getCartCount()}/>
        {/* <button onClick={this.addProduct} style={{padding:20,fontsize:20}}>Add a Product</button> */}
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDelete = {this.handleDeleteProduct}
        />
        {loading && <h1> loading Products...</h1>}
        <div style={{padding:10,fontsize: 20}}> 
            TOTAL:{this.getCartTotal()}
        </div>
      </div>
    );
  }  
}

export default App;
