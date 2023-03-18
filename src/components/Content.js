import React from "react";

function Content() {
    return (
        <div className="content">
            <textarea className="textArea" name="" id="textArea" cols="80" rows="20"
                placeholder="Enter your note here..."></textarea>

            <div className="toolbar">
                <div className="custom-radios">
                    <div>
                        <input type="radio" id="color-1" name="color" value="color-1" checked/>
                        <label for="color-1">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                    alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-2" name="color" value="color-2"/>
                        <label for="color-2">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                    alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-3" name="color" value="color-3"/>
                        <label for="color-3">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                    alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-4" name="color" value="color-4"/>
                        <label for="color-4">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                    alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                </div>
                <button>Save</button>
            </div>
        </div>
    );
}

export default Content;