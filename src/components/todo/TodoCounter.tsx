function TodoCounter({
  total,
  completed,
}: {
  total: number;
  completed: number;
}) {
  return (
    <h2>
      Has completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };