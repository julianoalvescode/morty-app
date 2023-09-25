export type Character = {
  id: number; // The id of the character.
  name: string; // The name of the character.
  status?: "Alive" | "Dead" | "unknown"; // The status of the character ('Alive', 'Dead' or 'unknown').
  species: string; // The species of the character.
  type: string; // The type or subspecies of the character.
  gender: "Female" | "Male" | "Genderless" | "unknown"; // The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
  origin: {
    name: string; // The name of the origin location.
    url: string; // Link to the origin location of the character.
  };
  location: {
    name: string; // The name of the location.
    url: string; // Link to the location of the character.
  };
  image: string; // Link to the image of the character.
  episode: string[]; // List of episodes in which this character appeared.
  url: string; // Link to the character's own URL endpoint.
  created: string; // Time at which the character was created in the database.
};
