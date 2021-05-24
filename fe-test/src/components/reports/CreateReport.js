import Button from "../../components/button/Button";
import axios from "axios";
import { useState } from "react";

const CreateReport = () => {
    axios.defaults.baseURL = "http://localhost:5000";
    const [data, setData] = useState([]);
    const [date, setDate] = useState([]);

    const addItemBtnHandler = (e) => {
        axios.get(`/report?date=${date}`).then((res) => {
            setData(res.data);
        });
        e.preventDefault();
    };

    return (
        <div>
            <Button text={"List"} onclick={addItemBtnHandler} />
            {data.map((e) => {
                return (
                    <li key={e._id}>
                        {e?.name} {e?.price} {e?.count}{" "}
                    </li>
                );
            })}
        </div>
    );
};

export default CreateReport;

