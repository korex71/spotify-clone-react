import { Container } from "./styles";

interface SearchSongItemProps {
  title: string;
}

function SearchSongItem({ title }: SearchSongItemProps) {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
}

export default SearchSongItem;
