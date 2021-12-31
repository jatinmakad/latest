import React from 'react';

function form() {
    return (
        <div>
            
        </div>
    )
}

export default form
import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("sports");
  const [level, setLevel] = useState("1");
  const [data, setData] = useState("");
  const [random, setRandom] = useState("");
  const [post, setPost] = useState([]);
  const [postOptins, setPostOption] = useState("");
  const [postId, setPostId] = useState();
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .get("https://61cd513e7067f600179c5a0d.mockapi.io/api/int/questions", {
        params: {
          number_of_questions: number,
          category: category,
          difficulty: level,
        },
      })
      .then((res) => setData(res.data.questions));
    setNumber("");
  };
  const getRandomNumber = () => {
    const getNumber = Math.floor(Math.random() * data.length);
    let unique = data.filter((e) => e.id == getNumber);
    setRandom(unique);
  };
  const postQuestionData = () => {
    const title = random.length
      ? random.map((s) => {
          return s.title;
        })
      : "";
    post.push({
      question_id: title[0],
      options: postOptins,
    });
    console.log(post, "+++++++============");
    setPostOption("");
    setPostId("");
  };
  return (
    <div>
      <form>
        <input
          type="number"
          name="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="sports">Sports</option>
          <option value="history">History</option>
          <option value="programming">Programming</option>
        </select>
        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="1">Easy</option>
          <option value="2">Mid</option>
          <option value="3">High</option>
        </select>
        <button type="button" onClick={submit}>
          Submit
        </button>
      </form>
      <div>
        {/* {
        !data.length && !random.length ?  <div>
            <h2 key={data[0]?.title}>{data[0]?.title}</h2>
            <select onChange={(e) => setPostOption(e.target.value)}>
              {data[0]?.options?.map((e) => {
                return (
                  <option value={e.id} key={e.value}>
                    {e.value}
                  </option>
                );
              })}
            </select>
          </div>  : ""
        } */}

        {random.length
          ? random.map((_data) => {
              return (
                <div>
                  <h2 key={_data.title}>{_data.title}</h2>
                  <select onChange={(e) => setPostOption(e.target.value)}>
                    {_data.options.map((e) => {
                      return (
                        <option value={e.id} key={e.value}>
                          {e.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            })
          : ""}
        {data.length ? (
          <button
            onClick={() => {
              getRandomNumber();
              postQuestionData();
            }}
          >
            Next Question
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
