import { create } from "zustand";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required().min(4),
  price: Yup.number().required().min(1).max(5000),
  imgSrc: Yup.string().url(),
  inStock: Yup.boolean().required(),
});

export const validationSchema1 = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});

export const useIndex = create((set) => ({
  index: -1,
  setIndex: (data) => set(() => ({ index: data })),
}));

export const useProducts = create((set) => ({
  products: JSON.parse(localStorage.getItem("products")) || [
    {
      name: "Iphone 13",
      price: 300,
      inStock: true,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnlbJvqACGPBXr6-yJjzA8LQNeVvrS0_zhbir1COHq7pdQA2vUUDTNQlbu-3OePJ1uQPjaHyu6ludbsmYtx2G0qTRykmZDexdX-XgShNFlS5W6KdC1jouq5qCiAVmyso_HG_m6lJgz&usqp=CAc",
    },
    {
      name: "Iphone 15",
      price: 350,
      inStock: true,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqK1qz_aEkwv42nCG76jZ4ZIFBuEfMMyvQXZIvAwmNg&s=10",
    },
    {
      name: "Iphone 16",
      price: 400,
      inStock: true,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrz4JhjhEej-NLyXvGQwazvJeZzjdsSxGfjbntLN6RQ&s=10",
    },
    {
      name: "Iphone 17",
      price: 500,
      inStock: false,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTp-sFF1vX6fhQ6H3K04mfcrfBKtclXQ8bLfzW2MmBgw&s=10",
    },

    {
      name: "Iphone 18",
      price: 600,
      inStock: false,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWc_H1Ei47jnX50q4dv1juiVJ6rdTJ05tMeIc68yJ4g&s",
    },
  ],
  setProducts: (data) => set(() => ({ products: [...data] })),
}));

export const useCart = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  setCart: (data) => set(() => ({ cart: [...data] })),
}));

export const useLimit = create((set) => ({
  limit: 0,
  setLimit: (data) => set(() => ({ limit: data })),
}));
