import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      //중복 확인해서 수량 추가
      addToCart: (product) =>
        set((state) => {
          const existingIndex = state.cartItems.findIndex(
            (item) => item.id === product.id
          );

          if (existingIndex > -1) {
            // 이미 존재할 경우에 해당 상품 +1
            const updatedItems = [...state.cartItems];
            updatedItems[existingIndex] = {
              ...updatedItems[existingIndex],
              quantity: updatedItems[existingIndex].quantity + 1,
            };
            return { cartItems: updatedItems };
          }

          // 신규 상품일 경우에 quantity :1 
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          };
        }),

    
      updateQuantity: (id, delta) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) => {
            if (item.id === id) {
              const newQuantity = item.quantity + delta;
              // 최소 수량은 1개 유지
              return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
          }),
        })),

      // id 기반 삭제로 
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
        clearCart: ()=> set({cartItems:[]}), // 장바구니 전체 비우기
    }),
    { name: 'cart-storage' }
  )
);

export default useCartStore;