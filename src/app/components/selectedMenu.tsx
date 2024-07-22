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
} from "@chakra-ui/react";

import { Dispatch, ReactNode, SetStateAction } from "react";

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
  onRandomize: () => void;
}

function SelectedMenu({
  recipe,
  setSelectedRecipe,
  onRandomize,
}: SelectedMenuProps) {
  return (
    <Container maxW="container.md" centerContent p={8}>
      <Box
        p={4}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        bg="white"
        padding={8}
      >
        <VStack spacing={6} align="stretch">
          <Heading textAlign="center">ESSEN FÜR HEUTE</Heading>
          <Heading size="lg" textAlign="center">
            {recipe.name}
          </Heading>
          <Image
            src={recipe.image}
            alt={recipe.name}
            boxSize="300px"
            objectFit="cover"
            m="0 auto"
          />
          <VStack spacing={4} align="start">
            <SelectionText label="Aufwand:">{recipe.effort}</SelectionText>
            <SelectionText label="Kosten:">{recipe.cost}</SelectionText>
            <SelectionText label="Vegetarisch:">
              {recipe.veggie ? "Ja" : "Nein"}
            </SelectionText>
          </VStack>
          <Box>
            <Heading size="md" mb={2}>
              Einkaufsliste
            </Heading>
            <UnorderedList spacing={2}>
              <Flex gap={8} flexDirection={{ base: "column", md: "row" }}>
                {recipe.ingredients.map((ingredient, index) => (
                  <ListItem key={index}>{ingredient}</ListItem>
                ))}
              </Flex>
            </UnorderedList>
          </Box>
          <Flex justify="space-between" mt={4}>
            <Button onClick={() => setSelectedRecipe(null)} variant="outline">
              Zurück
            </Button>
            <Button colorScheme="teal" onClick={onRandomize}>
              Randomize
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
}

export default SelectedMenu;
