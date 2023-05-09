import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import BookListPage from "./pages/BookListPage";
import BookPage from "./pages/BookPage";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useEffect } from "react";

const App = () => {
  let bookMap = {};
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {

      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
        console.log("Result:", result);
        if (
          result.toLowerCase().includes("home") &&
          (result.toLowerCase().includes("go") ||
            result.toLowerCase().includes("to"))
        ) {
          window.location.href = "/";
        } else if (
          result.toLowerCase().includes("books") &&
          (result.toLowerCase().includes("go") ||
            result.toLowerCase().includes("to"))
        ) {
          window.location.href = "/books";
        } else if (
          bookMap.hasOwnProperty(result.toLowerCase().replace(".", ""))
        ) {
          window.location.href =
            "/books/" + bookMap[result.toLowerCase().replace(".", "")] + "/";
        } else{
          //console.log("the lord of the rings - the two towers".includes(result.replace('.', '').toLowerCase()))
          Object.keys(bookMap).forEach((x) => {
            x.includes(result.replace('.', '').toLowerCase())?
            window.location.href =
            "/books/" + bookMap[x] + "/":
            console.log("Wrong message")
          })
        }
      };

      recognition.onerror = function (event) {
        console.error("Recognition error:", event.error);
      };

      recognition.onstart = function() {
        getBooks();
      };

      document.addEventListener("keydown", (event) => {
        if (event.ctrlKey) {
          recognition.start();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.shiftKey) {
          recognition.stop();
        }
      });
    } else {
      console.log("Speech not supported.");
    }
  });

  let getBooks = async () => {
    fetch("/api/books/")
      .then((response) => {
        response.json().then((res) => {
          res.forEach((book, index) => {
            bookMap[book.title.toLowerCase()] = book.id;
          });
          console.log("bookMap:", bookMap);
        });
      });
  };
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books">
          <Route index element={<BookListPage />} />
          <Route path=":id" element={<BookPage />} />
        </Route>

        <Route path="/settings" element={<ThemeSwitcher />} />
      </Routes>
    </div>
  );
};

export default App;
