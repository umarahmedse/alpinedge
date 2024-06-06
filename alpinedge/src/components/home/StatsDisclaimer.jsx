import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StatsDisclaimer = () => {
  const [disclaimer, setDisclaimer] = useState(false);
  const handleDisclaimer = () => {
    // hide the disclaimer if click on okay and saved in local storage
    localStorage.setItem("disclaimer", "true");

    document.getElementById("section3").style.display = "none";
    setDisclaimer(true);
  };
  useEffect(() => {
    if (localStorage.getItem("disclaimer") === "true") {
      setDisclaimer(true);
    } else {
      setDisclaimer(false);
    }
  }, [disclaimer]);


  return (
    <>
      {disclaimer ? (
        ""
      ) : (
        <div
          className="800px:p-4 px-2 py-10 800px:py-10 "
          id="section3"
        >
          <p className="text-[20px] 800px:text-[22px] text-center ">
            <strong>Disclaimer:</strong> Please note that all trading accounts
            are demo accounts with <strong>ficticious funds</strong> and{" "}
            <strong>simulated order execution</strong>. For more information,
            visit our <Link to={"/"}>FAQ</Link> page.{" "}
            <Link onClick={handleDisclaimer}>
              {" "}
              <strong className="text-primary hover:text-blue-800">
                Okay, I understand.
              </strong>
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default StatsDisclaimer;
