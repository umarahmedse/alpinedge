import { Link } from "react-router-dom";

const StatsDisclaimer = () => {
  return (
    <div className="bg-bgPrimary 800px:p-4 p-2" id='section3'>
      <p className="text-[8px] 800px:text-[16px] text-center">
        <strong>Disclaimer:</strong> Please note that all trading accounts are
        demo accounts with <strong>ficticious funds</strong> and{" "}
        <strong>simulated order execution</strong>. For more information, visit
        our <Link to={"/"}>FAQ</Link> page.{" "}
        <strong className="text-primary">Okay, I understand.</strong>
      </p>
    </div>
  );
};

export default StatsDisclaimer;
