function App() {
  return (
    <div className="App">
      <AppNavBar />
      <AppMain>
        <H1>Hello World!</H1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet eaque id minus eius voluptate quas nihil. Totam culpa deserunt numquam neque quasi, quibusdam sunt architecto accusamus repellendus iure quaerat. Expedita!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet eaque id minus eius voluptate quas nihil. Totam culpa deserunt numquam neque quasi, quibusdam sunt architecto accusamus repellendus iure quaerat. Expedita!
        </p>
      </AppMain>
      <AppFooter />
    </div>
  );
}

export default App;

function AppNavBar() {
  return (
    <div className="bg-indigo-900 text-white mb-4">
      <Container>
        <div className="flex flex-row justify-between">
          <div>
            <a href="/">Home</a>
          </div>
          <HStack>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
          </HStack>
        </div>
      </Container>
    </div>
  );
}

function AppMain(props) {
  return (
    <Container>
      <VStack>{props.children}</VStack>
    </Container>
  );
}

function AppFooter(props) {
  return (
    <div className="border-t-2 border-dotted py-4 mt-16 text-gray-400 hover:text-gray-800">
      <Container>
        Footer
      </Container>
    </div>
  );
}

function H1(props) {
  return (
    <h1 className="text-5xl">{props.children}</h1>
  );
}

function VStack(props) {
  return <div class="flex flex-col gap-4">{props.children}</div>
}

function HStack(props) {
  return <div class="flex flex-row gap-4">{props.children}</div>
}

function Container(props) {
  return <div className="container mx-auto px-4">{props.children}</div>;
}
