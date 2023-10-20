import { Image as IImage } from "sanity"
export interface IProduct {
    title: string;
    price: number;
    image:IImage;
    category:{
      name:string
    }
  }