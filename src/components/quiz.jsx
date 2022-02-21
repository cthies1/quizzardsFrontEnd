import ProfilePhoto from "../images/logo.png";

import BackgroundImage from "../images/logo.png";
import FirstResultImage from "../images/logo.png";
import SecondResultImage from "../images/logo.png";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
function Quiz() {
  return (
    <BuzzFeedQuiz
      title={"Your title goes here."}
      description={"Your description goes here."} //byline={true}
      bylineAuthor={"Your name"}
      bylineAvatarImageSrc={ProfilePhoto}
      autoScroll={true}
      onRestart={() => alert("This alert was triggered by the onRestart prop!")}
      onResult={() => alert("The onResult prop triggered this alert!")}
      facebookShareButton={true}
      facebookShareLink={"www.yourlink.com"}
      twitterShareButton={true}
      twitterShareLink={"www.yourlink.com"}
      copyShareButton={true}
      copyShareLink={"This text was copied using the copyShareLink prop."}
      questions={[
        {
          question: "Here's a default question",
          answers: [
            {
              answer: "Answer one",
              resultID: 0,
            },
            {
              answer: "Answer two",
              resultID: 1,
            },
            {
              answer: "Answer three",
              resultID: 2,
            },
          ],
        },
        {
          question: "Let's add some background and font colors",
          backgroundColor: "rgb(211, 211, 211)",
          fontColor: "#000",
          answers: [
            {
              answer: "First answer",
              backgroundColor: "red",
              fontColor: "rgb(215, 215, 215)",
              resultID: 0,
            },
            {
              answer: "Second answer",
              backgroundColor: "orange",
              fontColor: "green",
              resultID: 1,
            },
            {
              answer: "Third answer",
              backgroundColor: "yellow",
              fontColor: "#000",
              resultID: 2,
            },
          ],
        },
        {
          question: "Here is some overlapping image text",
          questionRelativeToImage: "overlap",
          imageAttribution: "Question image attribution text goes here",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImage,
          answers: [
            {
              answer: "This answer has a background photo",
              resultID: 0,
              backgroundImageSrc: BackgroundImage,
              imageAttribution: "Answer photo attribution text goes here",
            },
            {
              answer: "Not this one, though",
              resultID: 1,
              backgroundColor: "rgb(238,243,247)",
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Not this one, either",
              resultID: 2,
              backgroundColor: "rgb(238,243,247)",
              fontColor: "rgb(53,51,48)",
            },
          ],
        },
        {
          question: "Here is some adjacent image text",
          questionRelativeToImage: "adjacent",
          answerArrangement: "row",
          backgroundImageSrc: BackgroundImage,
          answers: [
            {
              answer: "Answer one",
              resultID: 0,
            },
            {
              answer: "Answer two",
              resultID: 1,
            },
            {
              answer: "Answer three",
              resultID: 2,
            },
          ],
        },
        {
          question: "Answers can also trigger a callback function",
          answers: [
            {
              answer: "This one does not trigger a function",
              resultID: 0,
            },
            {
              answer: "Click for answer function",
              onAnswerSelection: () =>
                alert("This alert is caused by an answer selection!"),
              resultID: 1,
            },
          ],
        },
      ]}
      results={[
        {
          title: "Your first result title goes here",
          description: "Your first result description goes here",
          resultImageSrc: FirstResultImage,
          imageAttribution: "Your photo attribution text goes here",
          resultID: 0,
        },
        {
          title: "Your second result title goes here",
          description: "Your second result description goes here",
          resultImageSrc: SecondResultImage,
          resultID: 1,
        },
        {
          title: "Your third result title goes here",
          description: "Result images and attributions are optional!",
          resultID: 2,
        },
      ]}
    />
  );
}
export default Quiz;
