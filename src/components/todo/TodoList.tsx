function TodoList({ children }: { children: any }) {
  console.log(children)
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
}

export { TodoList };
