import Header from "./Header";
import RepeatText from "./RepeatText";
import List from "./List";
import Counter from "./Counter";

const App = () => {
	return (
		<>
			<p>liten-kod-kata-react</p>
			<Header headerText="Steg 4 klart!" />
			<RepeatText count={7} text="En liten båt blir ofta våt om magen" />
			<List animalArray={["ko", "häst", "hund", "giraff"]} />
			<Counter />
		</>
	);
};

export default App;
