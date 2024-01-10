import {useMediaQuery} from "react-responsive";
import GlobalStyle from "../styles/global.css.js"
import drapeau from "../assets/images/drapeau.jpg";
import useCardScroll from "../hooks/useCardScroll.jsx";
import { Container, LeftCol, RightCol } from "../styles/app.css.js";

function App() {
  const [cards, descriptionText, photoIndex] = useCardScroll();
  const bgImage = cards[photoIndex - 1].props.children.props.$photo;
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)', });

  return (
    <>
      <GlobalStyle $photo={isPortrait ? bgImage : drapeau} $isPortrait={isPortrait} />
      <Container>
          <LeftCol>
              { cards }
          </LeftCol>
          <RightCol key={Math.random()}>
              { descriptionText }
          </RightCol>
      </Container>
    </>
  )
}

export default App
