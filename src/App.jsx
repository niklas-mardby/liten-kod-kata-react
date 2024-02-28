import Header from "./Header";
import RepeatText from "./RepeatText";

const App = () => {
	return (
		<>
			<p>liten-kod-kata-react</p>
			<Header headerText="Steg 4 klart!" />
			<RepeatText count={7} text="En liten båt blir ofta våt om magen" />
		</>
	);
};

export default App;
