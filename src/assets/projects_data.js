import project1_img from "../assets/project_1.svg";
import project2_img from "../assets/project_2.svg";
import project3_img from "../assets/project_3.svg";
import project4_img from "../assets/project_4.svg";

const Projects_Data = [
  {
    no: 1,
    name: "AI Fashion App",
    date: "June 2025",
    img: project1_img,
    description:
      "I created this personal project to experiment with SwiftUI, since I use Mac products daily but had never worked with the framework before.\n\n This macOS SwiftUI app integrates OpenAI’s GPT-4 API to deliver personalized fashion recommendations through a custom chat interface. I designed it with a secure MVVM architecture and Apple Keychain for API handling.",
    link: "https://github.com/anelatrakic/FashionAIApp",
  },
  {
    no: 2,
    name: "Buffer Overflows",
    date: "April 2024",
    img: project3_img,
    description:
      "CMSC414 (Computer and Network Security) put me in the mindset of the hacker: the idea was that by knowing how attacks are performed, you can better understand how to write secure code and prevent these attacks.\n\nIn this project, I wrote and executed custom buffer overflow and format string exploits in C, developing shellcode to bypass ASLR (address space layout randomization) and other stack protections to launch privilege escalation attacks within a controlled Linux environment.",
  },
  {
    no: 3,
    name: "Depth and Contact Prediction",
    date: "December 2023",
    img: project2_img,
    description:
      "CMSC426 (Computer Vision) was my first deep dive into machine learning, where I learned core ML concepts through a series of team projects that pushed me to collaborate effectively and build solutions in Python.\n\n This project involved training convolutional neural networks (CNNs) in PyTorch to predict 3D depth maps and binary contact masks from tactile sensor images. Custom data loaders, designed loss functions (BCE + MSE), and evaluated performance with RMSE (root mean square error) and threshold accuracy were critical in delivering accurate predictions from tactile sensor data.",
  },
  {
    no: 4,
    name: "Android Organization App",
    date: "December 2023",
    img: project4_img,
    description:
      "CMSC436 (Programming Handheld Systems) taught me the fundamentals of mobile development on the Android Platform, learning core concepts like activity lifecycles, XML layouts, and event handling.\n\nIn this project, I developed a Kotlin-based To-Do List application with calendar integration. The app allowed users to add, edit, and delete tasks tied to specific dates, store them persistently with SharedPreferences and Gson serialization, and view their schedule through both daily and weekly task lists. To make it more realistic, Google AdMob interstitial ads were also integrated.",
  },
];

export default Projects_Data;
