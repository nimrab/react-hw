import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import css from "../h6/main.module.css";
import {requestsAPI} from "./RequestsAPI";


export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<any>(null)

    const sendRequest = () => {

        requestsAPI.auth_test(checked)
            .then(res => {
                console.log(res.data.errorText)
                setResponse(res.data.errorText)
            })
            .catch (error =>  {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
                setResponse(error.response.data.errorText)
        })

    }

    return (
        <div>
            <br/>
            <div><SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            />
                <SuperButton onClick={sendRequest} className={css.btns}>Send request</SuperButton>

            </div>

            {response && <div>{response}</div>}

        </div>
    )
}