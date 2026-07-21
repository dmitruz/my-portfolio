import websiteBloker from "../../images/website-bloker.png";
import fakeNews from "../../images/fake-news.png";
import ageCalculator from "../../images/age-calculator.png";




export const mlProjects = [
    {
        title: "Website blocker",
        description: "The magic of this project lies on modifying the host file within your computer that manages how you access the web.The script is writing using Python",
        image: websiteBloker,
        code: "https://github.com/dmitruz/ML_python_projects/tree/main/website_blocker",
    },
    {
        title: "The Fake News & Misinformation Detector",
        description: "a complete end-to-end Natural Language Processing (NLP) project that classifies news headlines and articles as REAL or FAKE. It combines TF-IDF feature extraction with a Logistic Regression classifier, achieving perfect accuracy on the cleaned dataset.",
        image: fakeNews,
        code: "https://github.com/dmitruz/ML_python_projects/tree/main/fake_news_detector",
    },
    {
        title: "Age Calculator",
        description: "This is a simple program for age calculation. It calculate your age from your Birth Day till now in days and in years.",
        image: ageCalculator,
        code: "https://github.com/dmitruz/ML_python_projects/tree/main/age_calculator",
    }
];
