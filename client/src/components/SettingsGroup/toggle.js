import React from "react";

const Toggle = (props) => (

    <>
        <div>
            {props.name}
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary">No
                    <input type="radio" name="options" id="NoSMS" autocomplete="off"></input>
                </label>
                <label class="btn btn-secondary">Yes
                    <input type="radio" name="options" id="YesSMS" autocomplete="off"></input>
                </label>

            </div>

        </div>
    </>



)






export default Toggle;