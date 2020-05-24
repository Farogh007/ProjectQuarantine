// @material-ui/icons
import PeopleIcon from "@material-ui/icons/People";
import DevicesIcon from "@material-ui/icons/Devices";
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";
import SettingsIcon from "@material-ui/icons/Settings";
import AssessmentIcon from "@material-ui/icons/Assessment";
import RouterIcon from "@material-ui/icons/Router";
// core components/views for Admin layout

import MyThings from "../src/views/MyThings/MyThings";
import Monitor from "../src/views/Monitor/Monitor";
import Control from "../src/views/Control/Control";
import Analytics from "../src/views/Analytics/Analytics";
import User from "../src/views/User/User";
import Settings from "../src/views/Settings/Settings";

const categories = [
  {
    name: "MyThings",
    icon: RouterIcon,
    path: "/mythings",
    component: MyThings,
    layout: "/mythings",
  },
  {
    name: "Monitor",
    icon: DevicesIcon,
    path: "/monitor",
    component: Monitor,
    layout: "/monitor",
  },
  {
    name: "Control",
    icon: SettingsRemoteIcon,
    path: "/control",
    component: Control,
    layout: "/control",
  },
  {
    name: "Analytics",
    icon: AssessmentIcon,
    path: "/analytics",
    component: Analytics,
    layout: "/analytics",
  },
  {
    name: "User",
    icon: PeopleIcon,
    path: "/user",
    component: User,
    layout: "/user",
  },
  {
    name: "settings",
    icon: SettingsIcon,
    path: "/settings",
    component: Settings,
    layout: "/seettings",
  },
];

export default categories;
