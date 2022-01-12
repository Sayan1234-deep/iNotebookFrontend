import AddNotes from "../components/AddNotes";
import ShowNotes from "../components/ShowNotes";

const HomePage = ({ showAlert }) => {
  return (
    <>
      <AddNotes showAlert={showAlert} />
      <ShowNotes />
    </>
  );
};

export default HomePage;
