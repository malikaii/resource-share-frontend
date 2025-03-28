import React, { useState } from "react";
import { useAuth } from "../Components/Auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../Styles/Button.style";
import "./Profile.css";
import { useOktaAuth } from "@okta/okta-react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
function Profile() {
  // const auth = useAuth();
  // const navigate = useNavigate();
  // function handleLogout() {
  //   auth.logout();
  //   navigate("/");
  // }

  const { oktaAuth, authState } = useOktaAuth();

  const [showAcctSettings, setShowAcctSettings ] = useState(true);

  console.log(showAcctSettings);

  return (
    <div className="profile-container">
      <div className="left">
        <div class="header">
          <img className="profile-img"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg"
            alt=""
          />
          <h5>Tim Cook</h5>
          <p>CEO of Apple</p>
        </div>
        <div>
          <p>Number of posts</p>
          <p>Date signed up</p>
        </div>
      </div>
      <div className="right">
        <Tabs>
          <TabList>
            <Tab>Account Settings</Tab>
            <Tab>User Data</Tab>
          </TabList>
          <TabPanel>
            <div className="profile-form">
              <div className="left-form">
                <div>
                  <label for="fname">First Name</label>
                  <input readOnly defaultValue={"Tim"} type="text" />
                </div>
                <div>
                  <label for="phone">Phone Number</label>
                  <input readOnly defaultValue={"337"} type="text" />
                </div>
                <div>
                  <label for="city">City</label>
                  <input readOnly defaultValue={"Cupertino"} type="text" />
                </div>
              </div>
              <div className="right-form">
                <div>
                  <label for="lname">Last Name</label>
                  <input readOnly defaultValue={"Cook"} type="text" />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input readOnly defaultValue={"tCook@ios.com"} type="text" />
                </div>
                <div>
                  <label for="country">Country</label>
                  <select name="country" id="country">
                    <option value="US">United States</option>
                    <option value="EU">Europe</option>
                    <option value="IV">Ivory Coast</option>
                  </select>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
