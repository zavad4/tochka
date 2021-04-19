import React, { Component } from 'react'
import {storeProducts , detailProduct} from './data';

const ProductContext = React.createContext();
//provider
//consumer 

export default class ProductProvider extends Component {
    state={
        // products : storeProducts,
        products : [],
        detailProduct : detailProduct,
        cart : [],
        modalOpen : false,
        modalProduct : detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    };


    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });

        this.setState(()=>{
            return {products: tempProducts}
        });
        return this.state.products;
    }

    componentDidMount(){
        this.setProducts();
        //this.setDetailProduct();
    }
    
    getItem = (id) =>  {
        const product = this.state.products.find(item => item.id === id );
        return product;
    };

    handelDetail = (id)=> {
        //console.log('hello from detail');
        const product = this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        });
    };

    addToCart = (id)=>{
        // console.log(`add to cart id : ${id}`);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.state.cart.push(product);
        this.setState(
            ()=>{
            return{
                products : tempProducts, 
                //cart : [product],
                }
            },
            ()=>{
                this.addTotal();
            }
        );
        return this.state.cart;
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return{
                modalProduct : product,
                modalOpen : true
            };
        });
        return this.state.modalOpen;
    };

    closeModal = () => {
        this.setState(()=> {
            return{modalOpen:false};
        })
        return this.state.modalOpen;
    }

    increment = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id );
        if (selectedProduct) {
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count += 1;
            product.total = product.count * product.price;

            this.setState(()=>{
                return{
                    cart : [...tempCart]
                }
            },
            ()=>{
                this.addTotal();
            })
            return product.count;
        }
        return false;
    };

    decrement = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id );
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        
        if(product.count < 1){
            this.removeItem(id);
            return false;
        }
        else{
            product.total = product.count * product.price;
            this.setState(()=>{
                return{
                    cart : [...tempCart]
                }
            },
            ()=>{
                this.addTotal();
            })
        }
        return product.count;
    };

    removeItem = (id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        
        const removedProduct = tempProducts[index];
        if(removedProduct) {
            removedProduct.inCart = false;
            removedProduct.count = 0;
            removedProduct.total = 0;

            this.setState(()=>{
                return {
                    cart : [...tempCart],
                    products : [...tempProducts]
                }
            },()=>{
                this.addTotal();
            })
            return removedProduct.total;
        }
        return this.state.products;
    }
    clearCart = ()=>{
        // eslint-disable-next-line
        this.state.cart = [];
        return this.state.cart;
    };

    addTotal = ()=>{
        let subTotal = 0;
        this.state.cart.map(item=>(subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {
                cartSubTotal : subTotal,
                cartTax : tax,
                cartTotal : total
            };
        });
        return total;
    };

    render() {
        return (
            <ProductContext.Provider value= {{...this.state,
            handelDetail:this.handelDetail,
            addToCart :this.addToCart,
            openModal: this.openModal,
            closeModal : this.closeModal,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
