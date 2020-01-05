import React from 'react';
import pipboy from './pipboy.PNG'
import connect from './connect4.PNG'
import tom from './tom.PNG'
import real from './realestate.PNG'
import review from './gamereview.png'
import clothing from './clothing.PNG'
import github from './githubfinder.PNG'
import adopt from './adopt1.PNG'
import { Header, Nav, Page, A, Name, Flextext, H1, innerText, Fortitle, P, Section, Image, Projects, Hr, One, Laptop, Pipboy, DivOne, Last, Btn1, Btn2, DivIcon, Alink, Footer, Head, Wrapped, ContactList, ListItems, Media } from './styled.js';

function App() {
  return (
    <Page>
      <Header>
        <Nav>
          <Flextext>
            <Name>Hassen S. Hassen</Name>
            <innerText>
              <A href="#projects">PORTFOLIO</A>
              <A href="#contact">CONTACT</A>
            </innerText>
          </Flextext>
        </Nav>
        <Fortitle>
          <H1>(Software Developer)</H1>
          <DivIcon>
            <Alink href="https://www.linkedin.com/in/hassenhassen/" target="_blank"><i class="fab fa-linkedin" style={{ "font-size": "3rem", "marginRight": "2rem" }}></i></Alink>
            <Alink href="https://github.com/HassenH1" target="_blank"><i class="fab fa-github" style={{ "font-size": "3rem" }}></i></Alink>
          </DivIcon>
          <P>Hi, my Name is Hassen S. Hassen and I am a software Engineer with a background in customer service. my background in customer service allows me to communicate effectively with both clients and on a team. As a creative problem solver with a passion for learning and continually seek better ways to provide clients with innovative solutions.</P>
        </Fortitle>
      </Header>
      <Section>
        <h2>Skills</h2>
        <Image src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" />
        <Image src="http://www.myiconfinder.com/uploads/iconsets/256-256-a25e146a3379d2f49b1247981f1120e2-css3.png" />
        <Image src="https://www.sportsengineers.com/wp-content/uploads/2015/05/js-logo-badge-512.png" />
        <Image src="https://images.tutorialedge.net/images/node.png" />
        <Image src="https://cdn.spec-india.com/wp-content/uploads/2017/03/Express-JS.png" />
        <Image src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
        <Image src="https://miro.medium.com/max/500/1*55mb4NrRqKfI71p8WfYiTw.jpeg" />
        <Image src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" />
        <Image src="https://i.pinimg.com/originals/84/b1/06/84b1065e798f61aa80b8670a4b6fbb4d.png" />
        <Image src="http://pngimg.com/uploads/linux/linux_PNG1.png" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png" />
        <Image src="https://www.probytes.net/wp-content/uploads/2018/10/flask-logo-png-transparent.png" />
        <Image src="https://www.getpostman.com/img/v2/logo-glyph.png" />
        <Image src="https://vitworks.com/wp-content/uploads/2017/02/consuming-restful-api.png" />
        <Image src="http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png" />
        <Image src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" />
      </Section>
      <Projects>
        <Hr />
        <h1 id="projects">Projects</h1>
        <One>
          <div>
            <Laptop src="https://rize.digital/wp-content/uploads/2017/09/macbook-white-screen.png" />
            <Pipboy src={clothing} />
          </div>
          <DivOne>
            <Media>
              <h3>E-Commerce Clothing Store</h3>
              <p>Created with MERN stack with Firebase Authentication and Storage</p>
              <p>Deployed on Heroku</p>
              <Btn1>Coming</Btn1>
              <Btn2><a href="https://github.com/HassenH1/capstone" target="_blank">Github</a></Btn2>
            </Media>
          </DivOne>
        </One>
        <br />
        <br />
        <br />
        <Hr />
        <br />
        <br />
        <br />
        <One>
          <div>
            <Laptop src="https://rize.digital/wp-content/uploads/2017/09/macbook-white-screen.png" />
            <Pipboy src={review} />
          </div>
          <DivOne>
            <Media>
              <h3>Legendary Game Reviews</h3>
              <p>Group project created with React | React-Router | Styled-Components | React-Spinner | RAWG API | Font-Awesome for Front-end | Python | Flask | Peewee | SQLite3/PostgreSQL for Back-end</p>
              <p>Deployed on Heroku</p>
              <Btn1><a href="https://legendary-game-reviews.herokuapp.com/" target="_blank">Link</a></Btn1>
              <Btn2><a href="https://github.com/moonjason/legendary-game-reviews-react" target="_blank">Github</a></Btn2>
            </Media>
          </DivOne>
        </One>
        <br />
        <br />
        <br />
        <Hr />
        <br />
        <br />
        <br />
        <One>
          <div>
            <Laptop src="https://rize.digital/wp-content/uploads/2017/09/macbook-white-screen.png" />
            <Pipboy src={adopt} />
          </div>
          <DivOne>
            <Media>
              <h3>Pick Me!</h3>
              <p>Created with Reactjs | React Hooks | PetFinder API</p>
              <Btn1><a href="" target="_blank">Link</a></Btn1>
              <Btn2><a href="https://github.com/HassenH1/Adopt-Me" target="_blank">Github</a></Btn2>
            </Media>
          </DivOne>
        </One>
        <br />
        <br />
        <br />
        <Hr />
        <br />
        <br />
        <br />
        <One>
          <div>
            <Laptop src="https://rize.digital/wp-content/uploads/2017/09/macbook-white-screen.png" />
            <Pipboy src={tom} />
          </div>
          <DivOne>
            <Media>
              <h3>Tamagotchi</h3>
              <p>Created with HTML | CSS | JavaScript</p>
              <Btn1><a href="https://hassenh1.github.io/Tomagotchi/" target="_blank">Link</a></Btn1>
              <Btn2><a href="https://github.com/HassenH1/Tomagotchi" target="_blank">Github</a></Btn2>
            </Media>
          </DivOne>
        </One>
        <br />
        <br />
        <br />
        <Hr />
        <br />
        <br />
        <br />
        <One>
          <div>
            <Laptop src="https://rize.digital/wp-content/uploads/2017/09/macbook-white-screen.png" />
            <Pipboy src={github} />
          </div>
          <DivOne>
            <Media>
              <h3>Github Profile Finder</h3>
              <p>Created with Reactjs | React Hooks | Github API</p>
              <Btn1><a href="https://github.com/HassenH1" target="_blank">Link</a></Btn1>
              <Btn2><a href="https://github.com/HassenH1/TheGithubMiniProject" target="_blank">Github</a></Btn2>
            </Media>
          </DivOne>
        </One>
        <br />
        <br />
        <br />
        <Hr />
        <br />
        <br />
        <br />
        <One>
          <div>
            <Laptop src="https://rize.digital/wp-content/uploads/2017/09/macbook-white-screen.png" />
            <Pipboy src={real} />
          </div>
          <DivOne>
            <Media>
              <h3>Real Estate</h3>
              <p>Created with JavaScript | Express | Node | MongoDB | CSS | Embedded JavaScript (EJS) | HTML | CSS library called Skeleton</p>
              <p>Deployed on Heroku</p>
              <Btn1><a href="https://obscure-stream-37275.herokuapp.com/" target="_blank">Link</a></Btn1>
              <Btn2><a href="https://github.com/HassenH1/real-estate" target="_blank">Github</a></Btn2>
            </Media>
          </DivOne>
        </One>
        <br />
        <br />
        <br />
        <Hr />
        <br />
        <br />
        <br />
        <One>
          <div>
            <Laptop src="https://rize.digital/wp-content/uploads/2017/09/macbook-white-screen.png" />
            <Pipboy src={connect} />
          </div>
          <DivOne>
            <Media>
              <h3>Connect 4</h3>
              <p>Created with HTML | CSS | JavaScript</p>
              <Btn1><a href="https://hassenh1.github.io/Legendary-4/" target="_blank">Link</a></Btn1>
              <Btn2><a href="https://github.com/HassenH1/Legendary-4" target="_blank">Github</a></Btn2>
            </Media>
          </DivOne>
        </One>
        <br />
        <br />
        <br />
        <Hr />
        <br />
        <br />
        <br />
        <Last>
          <div>
            <Laptop src="https://rize.digital/wp-content/uploads/2017/09/macbook-white-screen.png" />
            <Pipboy src={pipboy} />
          </div>
          <DivOne>
            <Media>
              <h3>Pipboy from Fallout</h3>
              <p>Created with Bootstrap | JQuery</p>
              <Btn1><a href="https://hassenh1.github.io/Pipboy-UI-from-Fallout-Bootstrap-/" target="_blank">Link</a></Btn1>
              <Btn2><a href="https://github.com/HassenH1/Pipboy-UI-from-Fallout-Bootstrap-" target="_blank">Github</a></Btn2>
            </Media>
          </DivOne>
        </Last>
      </Projects>
      <Footer>
        <div id="contact"></div>
        <h2>Contact</h2>
        <Hr />
        <Wrapped>
          <ContactList>
            <ListItems><i class="fas fa-mobile-alt"></i> (323)445-4642</ListItems>
            <ListItems><i class="far fa-envelope"></i> hasansaid51@gmail.com</ListItems>
          </ContactList>
        </Wrapped>
      </Footer>
    </Page>
  );
}
export default App;