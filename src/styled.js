import styled from 'styled-components'

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
`
export const Header = styled.header`
  height: 75vh;
  background-color: antiquewhite;
`

export const DivIcon = styled.div`
  position: relative;
  top: 5rem;
  @media (max-width: 812px) {
    top: 6rem;
  }
`

export const Alink = styled.a`
  color: inherit;
`
///////////////////////////////////////nav start
export const Nav = styled.nav`
  width: 100%:
  height: 0px;
  color: white;
  background-color: black;
  font-family: Lobster;
`

export const A = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 10px 20px;
  position: relative;
  top: 35px;
  :hover {
    color: red;
  }
`
export const Flextext = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Name = styled.div`
  color: red;
  font-size: 25px;
  text-decoration: none;
  padding: 25px;
  @media (max-width: 812px) {
    font-size: 20px;
  }
`
///////////////////////////////////////nav end

//////////////////////////////////////header title
export const H1 = styled.h1`
  color: white;
  position: relative;
  top: 30%;
  font-size: 62.4px;
  font-family: Courier New;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  text-align: center;
  @media (max-width: 812px) {
    font-size: 31.4px;
    right: 225px;
    top: 80px;
    width: 40rem;
  }
`
export const Fortitle = styled.div`
  width: 50vw;
  height: 40vh;
  margin: 0 auto;
  text-align: center;
`

export const P = styled.p`
  position: relative;
  top: 100px;
  font-size: 18px;
  font-weight: bold;
  font-family: Helvetica;
  @media (max-width: 812px) {
   font-size: 15px;
   top: 100px;
   font-weight: 30px;
   right: 90px;
   width: 23rem;
  }
`
///////////////////////////////////////header end

///////////////////////////////////////icons start

export const Section = styled.section`
  width: 100vw;
  height: 35vh;
  text-align: center;
  @media (max-width: 812px) {
    height: 55vh;
  }
`

export const Image = styled.img`
  height: 96px;
  width: 96px;
  position: relative;
  top: 42px;
  @media (max-width: 812px) {
    top: 22px;
    height: 76px;
    width: 76px;
  }
`

///////////////////////////////////////icons end

export const Hr = styled.hr`
  width: 80vw;
`

///////////////////////////////////////Project1 start

export const Projects = styled.div`
  text-align: center;
  height: 80vh;
  scroll-behavior: smooth;
`
//////////////////////////////////////Project1 end

//////////////////////////////////////one start
export const One = styled.div`
  width: 1180px;
  height: 350px;
  background-color: rgb(234,60,83);
  margin: 0 auto;
`

export const Laptop = styled.img`
  height: 300px;
  width: 600.2px;
  position: relative;
  right: 10rem;
  top: 1rem;
  @media (max-width: 812px) {
    height: 300px;
    width: 480.2px;
    position: relative;
    right: 15rem;
    top: 1rem;
  }
`
export const Pipboy = styled.img`
  height: 240px;
  width: 400px;
  position: relative; 
  right: 41.5rem;
  bottom: 1.5rem;
  @media (max-width: 812px) {
    height: 240px;
    width: 320px;
    position: relative; 
    right: 40rem;
    bottom: 1.5rem;
  }
`

export const DivOne = styled.div`
  margin: 0;
  width: 50%;
  position: relative;
  left: 29rem;
  bottom: 17rem;
  @media (max-width: 812px) {
    
  }
`

export const Media = styled.div`
  @media (max-width: 812px) {
    position: relative;
    right: 35.5rem;
    top: 6rem;
  }
`

export const Btn1 = styled.button`
  background-color: white;
  color: black;
  border: 2px solid black;
  height: 30px;
  width: 93px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  margin-top: 6rem;
  margin-right: 9rem;
&:hover {
  background-color: black;
  color: white;
}
&:focus {
  outline: none;
}
font-size: 20px;
`

export const Btn2 = styled.button`
background-color: white;
  color: black;
  border: 2px solid black;
  height: 30px;
  width: 93px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;


&:hover {
  background-color: black;
  color: white;
}
&:focus {
  outline: none;
}
font-size: 20px;
`
//////////////////////////////////////one end

/////////////////////////////////////last start

export const Last = styled.div`
width: 1180px;
height: 350px;
background-color: rgb(234,60,83);
margin: 0 auto 2rem auto;
`

////////////////////////////////////last end

///////////////////////////////////footer start

export const Footer = styled.div`
  width: 100vw;
  height: 15vh;
  position: relative;
  top: 140rem;
  text-align:center;
`

export const Head = styled.h3`
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  margin-bottom: 50px;
  font: 300 60px 'Oswald', sans-serif;
  letter-spacing: 6px;
  color: #fff;
  margin-bottom: 25px;
  color: black;

`

export const Wrapped = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
  max-width: 800px;
`

export const ContactList = styled.ul`
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
  display: flex;
  justify-content: space-around;
`

export const ListItems = styled.li`
  line-height: 4;
  color: #aaa;
  text-align: center;
  font-size: 21px;
`

///////////////////////////////////footer end