import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  ListItem,
  Text,
  VStack,
  Image,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Dispatch, ReactNode, SetStateAction } from "react";
import { Selections } from "./selectionForm";
import styles from "./SelectedMenu.module.css";

interface Recipe {
  name: string;
  effort: string;
  cost: string;
  veggie: boolean;
  ingredients: string[];
  image: string;
}

const SelectionText = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <Text>
    <Text as="span" fontWeight="bold">
      {label}
    </Text>{" "}
    {children}
  </Text>
);

interface SelectedMenuProps {
  recipe: Recipe;
  setSelectedRecipe: Dispatch<SetStateAction<Recipe | null>>;
  selectedFilter: Selections;
  handleFormSubmit: (selections: Selections) => void;
}

function SelectedMenu({
  recipe,
  setSelectedRecipe,
  selectedFilter,
  handleFormSubmit,
}: SelectedMenuProps) {
  const boxClassName = useBreakpointValue({
    base: styles["reserve-card-mobile"],
    md: styles["reserve-card"],
  });

  return (
    <Container centerContent p={8}>
      <Box
        p={4}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        bg="white"
        padding={8}
        className={boxClassName}
      >
        <VStack spacing={6} align="stretch">
          <Heading textAlign="center">ESSEN FÜR HEUTE</Heading>
          <Heading
            size="lg"
            textAlign="center"
            className={styles["meal-title"]}
          >
            {recipe.name}
          </Heading>
          <Flex flexDirection={{ base: "column", md: "row" }} gap={8}>
            <Box width="250px" height="250px">
              <Image
                src={recipe.image}
                alt={recipe.name}
                boxSize="250px"
                objectFit="cover"
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </Box>
            <Box>
              <VStack spacing={4} align="start">
                <SelectionText label="Aufwand:">{recipe.effort}</SelectionText>
                <SelectionText label="Kosten:">{recipe.cost}</SelectionText>
                <SelectionText label="Vegetarisch:">
                  {recipe.veggie ? "Ja" : "Nein"}
                </SelectionText>
              </VStack>
              <Box>
                <Heading size="md" mt={8} mb={2}>
                  Einkaufsliste
                </Heading>
                <UnorderedList spacing={2} className={styles["ingredent-list"]}>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListItem key={index}>{ingredient}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
              <Flex justify="space-between" mt={4} gap={2}>
                <Button
                  onClick={() => setSelectedRecipe(null)}
                  variant="outline"
                >
                  Zurück
                </Button>
                <Button
                  colorScheme="teal"
                  onClick={() => handleFormSubmit(selectedFilter)}
                >
                  Randomize
                </Button>
              </Flex>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
}

export default SelectedMenu;
