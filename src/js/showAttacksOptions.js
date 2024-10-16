export default function showAttacksOptions(character) {
  const { special } = character;
  return special.map((attack) => { 
    const { id, name, description = 'Описание недоступно', icon } = attack;
    return {id, name, description, icon};
  });
}
