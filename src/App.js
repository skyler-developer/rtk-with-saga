import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/reducer/counterSlice";
import { changeName } from "./store/reducer/userSlice";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.user);
    console.log("count", count);
    console.log("user", user);

    return (
        <div className="App">
            <div>count:{count}</div>
            <button
                onClick={() => {
                    dispatch(increment());
                }}>
                +
            </button>
            <button
                onClick={() => {
                    dispatch(decrement());
                }}>
                -
            </button>
            <button
                onClick={() => {
                    dispatch(incrementByAmount(10));
                }}>
                amont
            </button>
            <div>user:{user.name}</div>
            <button
                onClick={() => {
                    dispatch(changeName("testName"));
                }}>
                修改名称
            </button>
        </div>
    );
}

export default App;
