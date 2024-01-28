import MainComponent from "./components/MaiComponent/MainComponent";
import BottomWave from "./images/BottomWave";

import Logo from "./images/Logo";
import TopWave from "./images/TopWave";

function App() {
  const allData = {
    headerFontFamily: "'Roboto', sans-serif",
    fontFamily: "'Montserrat', sans-serif",
    primaryColor: "#394867",
    secondaryColor: "#00dfa2",
    background: "#F1F6F9",
    heading: "Thynk <i>Unlimited</i>",
    logo: (props) => (
      <Logo {...props} topColor="#394867" bottomColor="#00dfa2" />
    ),
    contact: "@reallygreatsite",
    link: "www.reallygreatsite.com",

    topWave: <TopWave color="#00dfa2" />,
    bottomWave: <BottomWave color="#00dfa2" />,

    initialPage: {
      title: "Ways To Gain <br/> Customers Trust",
      tagline: "And Why It's Important",
    },
    secondPage: {
      title: "Why is<br/> Customer Trus <br/> important?",

      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    data: [
      {
        title: "Show Your <br/> Company Values",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },

      {
        title: "Make a <br/> Great Product",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Create Strongs<br/> Relationships <br/> With Customer",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        list: [
          "Lorem Ipsum is simply dummy ",
          "Lorem Ipsum is simply dummy ",
          "Lorem Ipsum is simply dummy ",
          "Lorem Ipsum is simply dummy ",
          "Lorem Ipsum is simply dummy ",
        ],
      },
      {
        title: "Help Customers <br/> Sove Problem",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title:
          "Showcase Positive <br/> Customers Review <br/> and Testimonials",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  };
  return (
    <div
      style={{
        "--primaryColor": allData.primaryColor,
        "--secondaryColor": allData.secondaryColor,
        "--headerFontFamily": allData.headerFontFamily,
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent allData={allData} />
    </div>
  );
}

export default App;
