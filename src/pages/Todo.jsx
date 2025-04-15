import { useState } from "react";
const Todo = () => {
  const [inputValue, setInputValue] = useState(""); // 儲存輸入框的文字
  const [todoList, setTodoList] = useState([]); // 儲存待辦事項清單

  // 新增待辦事項
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return; // 若是空字串就不處理

    setTodoList((prev) => [...prev, inputValue]); // 加入新待辦事項
    setInputValue(""); // 清空輸入欄
  }

  // 刪除某一項
  function handleDelete(index) {
    setTodoList((prev) => {
      const newList = [...prev];
      newList.splice(index, 1);
      return newList;
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-center items-center mt-10"
      >
        <input
          type="text"
          placeholder="請輸入今日代辦事項"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // 更新輸入框文字
          className="border-2 border-gray-300 rounded-lg p-2 mr-2"
        />
        <button type="submit" className="text-blue-400">
          確認
        </button>
      </form>

      <div className="todo flex flex-col flex-wrap h-100 p-3">
        {todoList.map((item, index) => (
          <div key={index} className="todo-item my-3">
            <span className="my-5 align-baseline justify-baseline w-full">
              {item}
            </span>
            <button
              onClick={() => handleDelete(index)}
              className="text-orange-600 mx-5"
            >
              刪除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
