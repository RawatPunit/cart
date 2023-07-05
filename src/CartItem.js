import React from "react";
import Cart from "./Cart";

class CartItem extends React.Component{
    
    // // ----------------below state has been moved to Cart.js-------------
    // // constructor(){
    // //     super(); //this will call the const of the parent class which is (reactcomponent) othewise error
    // //     this.state= {
    // //         price : 999,
    // //         title : 'Phone',
    // //         qty : 1,
    // //         img: ''
    // //     }
    // //     //this.increseQuamtity = this.increaseQuantity.bind(this)
    // // }
    // // -------------------------------------------------
    // increaseQuantity=()=>{
    //     // this.state.qty +=1;
    //     console.log("this",this.state);
    //     //setState form 1
    //     // this.setState({
    //     //     qty : this.state.qty + 1
    //     // })

    //     // setState form 2 --------- if prev satte is req. use this
    //     this.setState((prevState)=>{
    //         return{
    //             qty : prevState.qty + 1
    //         }
    //     });
    // }
    // decreaseQuantity=()=>{
    //     const{qty} =this.state;
    //     if(qty==0){
    //         return;
    //     }
    //     // setState form 2 --------- if prev satte is req. use this
    //     this.setState((prevState)=>{
    //         return{
    //             qty : prevState.qty - 1
    //         }
    //     });
    // }
    
    render(){
        console.log('this.props',this.props);
        const { price,title,qty } = this.props.product;  // this will call from the const state-->thus can write dierctlty
        // title insted of this.state.title ;  sabko ek hi mei bula diya
        const {product, onIncreaseQuantity, onDecreaseQuantity,onDelete } = this.props;
        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize : 25 }} >{title}</div>
                    <div style={ { color : '#777'  }} >Rs. {price}</div>
                    <div style={ { color : '#777'  }} >Qty: {qty}</div>
                    <div className="cart-items-actions">
                        {/*Button */}
                        <img 
                            alt="increase"
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/3914/3914337.png" 
                            // onClick={this.increaseQuantity}
                            onClick={() => this.props.onIncreaseQuantity(product)}
                         />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/10469/10469730.png"
                            // onClick={this.decreaseQuantity}
                            onClick={() => onDecreaseQuantity(product)}
                            
                        />
                        <img 
                            alt="delete" 
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/3917/3917439.png"
                            onClick={() => onDelete(product.id)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

//cant use direct css hence used in the form of objects
const styles ={
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem   