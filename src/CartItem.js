import React from "react";

class CartItem extends React.Component{
    constructor(){
        super(); //this will call the const of the parent class which is (reactcomponent) othewise error
        this.state= {
            price : 999,
            title : 'Phone',
            qty : 1,
            img: ''
        }
        //this.increseQuamtity = this.increaseQuantity.bind(this)
    }
    increaseQuantity=()=>{
        // this.state.qty +=1;
        console.log("this",this.state);
        //setState form 1
        // this.setState({
        //     qty : this.state.qty + 1
        // })

        // setState form 2 --------- if prev satte is req. use this
        this.setState((prevState)=>{
            return{
                qty : prevState.qty + 1
            }
        });
    }
    decreaseQuantity=()=>{
        const{qty} =this.state;
        if(qty==0){
            return;
        }
        // setState form 2 --------- if prev satte is req. use this
        this.setState((prevState)=>{
            return{
                qty : prevState.qty - 1
            }
        });
    }
    render(){
        const { price,title,qty } = this.state;  // this will call from the const state-->thus can write dierctlty
        // title insted of this.state.title ;  sabko ek hi mei bula diya
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize : 25 }} >{title}</div>
                    <div style={ { color : '#777'  }} >{price}</div>
                    <div style={ { color : '#777'  }} >{qty}</div>
                    <div className="cart-items-actions">
                        {/*Button */}
                        <img 
                            alt="increase"
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/3914/3914337.png" 
                            onClick={this.increaseQuantity}
                         />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/10469/10469730.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/3917/3917439.png"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

//cant use direct css hence used in the form of objects
const style ={
    image : {
        height : 110,
        width : 110,
        borderRadius : 4
    }
}

export default CartItem   