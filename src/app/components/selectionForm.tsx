import React, { Dispatch, FormEvent, SetStateAction } from "react";
import {
  Button,
  FormControl,
  HStack,
  Heading,
  VStack,
  FormLabel,
  Container,
  Box,
} from "@chakra-ui/react";

interface FormProps {
  handleFormSubmit: (selections: Selections) => void;
  selectedFilter: Selections;
  setSelectedFilter: Dispatch<SetStateAction<Selections>>;
}

export interface Selections {
  effort: string;
  cost: string;
  veggie: string;
}

function SelectionForm({
  handleFormSubmit,
  selectedFilter,
  setSelectedFilter,
}: FormProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleFormSubmit(selectedFilter);
  };

  return (
    <Container maxW="container.md" centerContent p={8}>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <Heading textAlign="center">WAS KOCHEN WIR HEUTE?</Heading>
            <FormControl>
              <FormLabel>Aufwand</FormLabel>
              <HStack spacing={4} justify="center">
                <Button
                  variant={
                    selectedFilter.effort === "any" ? "solid" : "outline"
                  }
                  colorScheme={
                    selectedFilter.effort === "any" ? "teal" : "gray"
                  }
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, effort: "any" })
                  }
                >
                  Egal
                </Button>
                <Button
                  variant={
                    selectedFilter.effort === "low" ? "solid" : "outline"
                  }
                  colorScheme={
                    selectedFilter.effort === "low" ? "teal" : "gray"
                  }
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, effort: "low" })
                  }
                >
                  Gering
                </Button>
                <Button
                  variant={
                    selectedFilter.effort === "high" ? "solid" : "outline"
                  }
                  colorScheme={
                    selectedFilter.effort === "high" ? "teal" : "gray"
                  }
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, effort: "high" })
                  }
                >
                  Hoch
                </Button>
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Preis</FormLabel>
              <HStack spacing={4} justify="center">
                <Button
                  variant={selectedFilter.cost === "any" ? "solid" : "outline"}
                  colorScheme={selectedFilter.cost === "any" ? "teal" : "gray"}
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, cost: "any" })
                  }
                >
                  Egal
                </Button>
                <Button
                  variant={selectedFilter.cost === "low" ? "solid" : "outline"}
                  colorScheme={selectedFilter.cost === "low" ? "teal" : "gray"}
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, cost: "low" })
                  }
                >
                  Gering
                </Button>
                <Button
                  variant={selectedFilter.cost === "high" ? "solid" : "outline"}
                  colorScheme={selectedFilter.cost === "high" ? "teal" : "gray"}
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, cost: "high" })
                  }
                >
                  Hoch
                </Button>
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Vegetarisch</FormLabel>
              <HStack spacing={4} justify="center">
                <Button
                  variant={
                    selectedFilter.veggie === "any" ? "solid" : "outline"
                  }
                  colorScheme={
                    selectedFilter.veggie === "any" ? "teal" : "gray"
                  }
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, veggie: "any" })
                  }
                >
                  Egal
                </Button>
                <Button
                  variant={
                    selectedFilter.veggie === "yes" ? "solid" : "outline"
                  }
                  colorScheme={
                    selectedFilter.veggie === "yes" ? "teal" : "gray"
                  }
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, veggie: "yes" })
                  }
                >
                  Ja
                </Button>
                <Button
                  variant={selectedFilter.veggie === "no" ? "solid" : "outline"}
                  colorScheme={selectedFilter.veggie === "no" ? "teal" : "gray"}
                  onClick={() =>
                    setSelectedFilter({ ...selectedFilter, veggie: "no" })
                  }
                >
                  Nein
                </Button>
              </HStack>
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Weiter
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
}

export default SelectionForm;
