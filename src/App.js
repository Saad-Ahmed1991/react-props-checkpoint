import "./App.css";
import Profile from "./profile/Profile";
import "semantic-ui-css/semantic.min.css";
import profile_pic from "./profile/profile_pic.jpg";

function App() {
  return (
    <div className="App">
      <Profile
        fullName="Ahmed Saad"
        bio="31 years old job seeker"
        profession="Fullstack web developper"
        handleName={(x) => {
          alert(x);
        }}
      >
        {profile_pic}
      </Profile>
    </div>
  );
}

export default App;
