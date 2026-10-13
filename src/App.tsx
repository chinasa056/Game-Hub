import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="tomato">
        <NavBar/>
        </GridItem>

        <GridItem
          area="aside"
          bg="cyan"
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>

        <GridItem area="main" bg="red">
          Main
        </GridItem>
      </Grid>

      <Button colorPalette="blue" variant="solid" color="black">
        Solid
      </Button>
    </>
  );
}

export default App;
