//import base
import { useState } from "react";

//import customize component
import Menu from "../../components/Menu";

function Navigation() {
  //declare state
  const [selectedKey, setSelectedKey] = useState(null);

  //declare handlers
  const handleClick = (key) => {
    setSelectedKey(key);
  };

  //declare the config data
  const items = [
    {
      key: "home",
      title: "Home",
      link: "#home",
    },
    {
      key: "signup",
      title: "Sign-up",
      link: "#signup",
    },
    {
      key: "login",
      title: "Login",
      link: "#login",
    },
  ];

  return (
    <div className="ml-10">
      <Menu
        items={items}
        theme={"light"}
        mode={"inline"}
        selectedKey={selectedKey}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Navigation;
