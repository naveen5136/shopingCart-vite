import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({})

export function useShoppingCartContext (){
    return useContext(ShoppingCartContext)
}
type ShopChild = {
    children : ReactNode
}
type CartItem = {
    id: number
    quantity: number
  }
export function ShoppingCartProvider({children}:ShopChild){
const [cardItems, setCardItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )
const [isOpen,setIsOpen] = useState(false)

const openCart = ()=> setIsOpen(true)
const closeCart = ()=> setIsOpen(false)

const cartQuantity = cardItems.reduce((quantity,item)=> item.quantity + quantity,0)

function getItem(id:number){
     return cardItems.find(item=> item.id === id)?.quantity || 0
}

function incrementItem(id: number) {
    setCardItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decrementItem(id: number) {
    setCardItems(currItems => {
      if (currItems.find(item => item.id === id).quantity == 1) {
        return currItems.filter(item=>item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItem(id){
    setCardItems(cardItems=> cardItems.filter(item=> item.id !== id))
  }

return (
    <ShoppingCartContext.Provider value={{getItem, incrementItem, decrementItem, removeItem, cartQuantity, openCart, closeCart, cardItems}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
)
}