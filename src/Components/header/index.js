export default function Header(props) {
  return (
    <header data-testid='todo-header'>
      <h1 data-testid='todo-h1'>Todo List: {props.incomplete} items pending</h1>
    </header>
  );
}
