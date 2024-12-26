import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Courses from "./components/Courses";
import Signup from "./components/partials/Signup";
import { Toaster } from "react-hot-toast";
import Login from "./components/partials/Login";
import { useAuthContext } from "./context/AuthContext";

function App() {
  // Function to detect the device type
  function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for Android devices
    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // Check for iOS devices (iPhone, iPad, iPod)
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return "iOS";
    }

    // Check for Windows Phone devices
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    // If no mobile device is detected, assume desktop
    return "Desktop";
  }

  // Get the detected device type
  const deviceType = detectDevice();

  // Display the result in the console and on the webpage
  console.log("User is visiting from:", deviceType);
  const { theme, user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div
      className={`overflow-y-auto no-scrollbar w-full min-h-screen ${
        theme ? "  bg-[#FAF0E6] text-[#021526] " : "bg-[#021526] text-[#FAF0E6]"
      } overflow-hidden`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={user ? <Courses /> : <Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
