import { ReactNode } from "react";

export enum Side {
    'RIGHT' = 0,
    'LEFT' = 1,
    'NONE' = 2
}

export interface ISlides{
    color?: string | "#fff",
    title: string,
    descripction: string,
    picture: string
}
export interface SliderProps{
    children: ReactNode,
    index: number,
    setIndex: (value: number) => void,
    prev: ReactNode,
    next: ReactNode
}
export interface SlideProps{
    slide: ISlides
}
export interface WaveProps{
    side: Side,
    children: ReactNode
}
export interface LiquidSwipeProps{
    slides: ISlides[]
}