import { useState } from "react";
import { Container, VStack, Text, Select, Button, Box, Image, Heading } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";

const Index = () => {
  const [light, setLight] = useState("");
  const [care, setCare] = useState("");
  const [plant, setPlant] = useState(null);

  const findPlant = () => {
    // Simple logic to determine a plant based on light and care preferences
    if (light === "low" && care === "low") {
      setPlant({
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmFrZSUyMHBsYW50fGVufDB8fHx8MTcxNzY5MjkyNnww&ixlib=rb-4.0.3&q=80&w=1080",
        description: "A hardy plant that thrives in low light and requires minimal care.",
      });
    } else if (light === "medium" && care === "medium") {
      setPlant({
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGlkZXIlMjBwbGFudHxlbnwwfHx8fDE3MTc2OTI5MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
        description: "A versatile plant that does well in medium light and requires moderate care.",
      });
    } else if (light === "high" && care === "high") {
      setPlant({
        name: "Fiddle Leaf Fig",
        image: "https://images.unsplash.com/photo-1616220797246-f01f49dd805d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWRkbGUlMjBsZWFmJTIwZmlnfGVufDB8fHx8MTcxNzY5MjkyN3ww&ixlib=rb-4.0.3&q=80&w=1080",
        description: "A beautiful plant that needs bright light and regular care.",
      });
    } else {
      setPlant(null);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl" mb={6}>
          Find Your Perfect Houseplant
        </Heading>
        <Box width="100%">
          <Text mb={2}>Select your light preference:</Text>
          <Select placeholder="Select light" value={light} onChange={(e) => setLight(e.target.value)}>
            <option value="low">Low Light</option>
            <option value="medium">Medium Light</option>
            <option value="high">High Light</option>
          </Select>
        </Box>
        <Box width="100%">
          <Text mb={2}>Select your care preference:</Text>
          <Select placeholder="Select care" value={care} onChange={(e) => setCare(e.target.value)}>
            <option value="low">Low Care</option>
            <option value="medium">Medium Care</option>
            <option value="high">High Care</option>
          </Select>
        </Box>
        <Button leftIcon={<FaLeaf />} colorScheme="green" onClick={findPlant}>
          Find Plant
        </Button>
        {plant && (
          <Box textAlign="center" mt={6}>
            <Heading as="h2" size="lg" mb={4}>
              {plant.name}
            </Heading>
            <Image src={plant.image} alt={plant.name} boxSize="200px" mb={4} />
            <Text>{plant.description}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
