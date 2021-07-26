import React from "react";
import "./AddIssue.css";


function AddIssue() {


    return (
        <div className="add-issue">
            <form>
                <label>
                    Description
                <input type="text" placeholder="Description of Issue..." />
                </label>

                <label>
                    Assign To
                    <select name="forDev" id="forDev">
                        <option value="Kenny B.">Kenny B.</option>
                        <option value="Tyler B.">Tyler B.</option>
                        <option value="Frank O.">Frank O.</option>
                        <option value="Lonzo B.">Lonzo B.</option>
                        <option value="Isaiah R.">Isaiah R.</option>
                    </select>
                </label>

                <label>
                    Priority
                    <select name="priority" id="priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Extra-High">Extra-High</option>
                    </select>
                </label>
                <button type="submit">Add</button>

            </form>
        </div>
    );
}

export default AddIssue;
