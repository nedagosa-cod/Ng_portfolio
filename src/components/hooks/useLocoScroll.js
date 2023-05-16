import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss'
import { useEffect } from "react";

export default function useLocoScroll(){
    useEffect(()=>{

        const scrollEl = document.querySelector('#main-container')

        const LocoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal',
        })
    },[]);
}