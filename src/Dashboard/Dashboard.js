import React, { Component } from "react";
import Sticky from "wil-react-sticky";
import PersonalInfo from "./PersonalInfo";
import LatestNews from "./LatestNews";
import NewsFeed from "./NewsFeed";
import Returns from "./Returns";
import Sponsored from "./Sponsored";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container" id="containerSelectorFocus">
          <div className="row">
            <div className="col-sm-3">
              <Sticky
                containerSelectorFocus="#containerSelectorFocus"
                offsetTop={20}
                stickyEnableRange={[768, Infinity]}
              >
                <div className="box ">
                  <PersonalInfo />
                  <LatestNews />
                </div>
              </Sticky>
            </div>
            <div className="col-sm-6">
              <div className="box">
                <NewsFeed />
              </div>
            </div>

            <div className="col-sm-3">
              <Sticky
                containerSelectorFocus="#containerSelectorFocus"
                offsetTop={20}
                stickyEnableRange={[768, Infinity]}
              >
                <div className="box">
                  <Returns />
                  <Sponsored />
                </div>
              </Sticky>
            </div>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          style={{ marginTop: 100 }}
        />
      </div>
    );
  }
}
