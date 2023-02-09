import styled from 'styled-components'


export const HeroWrapper = styled.div`
    background-image: url("https://res.cloudinary.com/hasterisk/image/upload/v1653865185/hero_bg5_hufbex.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 50vh;
    position: relative;

    ::before{
        content:"";
        position: absolute;
        left:0;
        right: 60%;
        top: 0;
        bottom: 0;
        background: linear-gradient(to right,# ,transparent);
    }
    
    @media screen and (min-width:768px){
        background-image: url("https://res.cloudinary.com/hasterisk/image/upload/v1653865378/hero_bg_mpxcnc.webp");
        min-height: 80vh;
    }
`

export const HeroContent = styled.div`
    max-width: var(--medium-tab);
    color: white;
    padding-inline:1rem;
    position: absolute;
    top:25%;
    width: 100%;

    @media screen and (min-width:768px){
        padding-inline-start: 10rem;
        top:40%;
        
    }

    @media screen and (min-width:1400px){
        padding-inline-start: 15rem;
    }
`

export const ContentWrapper = styled.div`
    max-width: 50ch;
    
`

export const HeroHeader = styled.h1`
    text-transform: capitalize;
    font-size: 2em;
    line-height: 1.2;
`

export const HeaderSub = styled.p`
    font-size: 1.3rem;
    margin-block: 2rem;
`