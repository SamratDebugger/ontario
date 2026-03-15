import { FaBitcoin, FaFire, FaRobot, FaRocket } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdBusinessCenter } from "react-icons/md";
import { RiPlug2Fill } from "react-icons/ri";
import { SiGooglegemini } from "react-icons/si";

export default function Features() {
  const custombdg =
    "text-xs  badge badge-soft rounded-full px-4 py-4 badge-sm ";
  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-between px-5 max-w-4xl mx-auto  ">
        <div className={` badge-primary ${custombdg} `}>
          <SiGooglegemini />
          AI
        </div>

        <div className={` badge-secondary ${custombdg} `}>
          <MdBusinessCenter />
          BUSINESS
        </div>
        <div className={` badge-accent ${custombdg} `}>
          <FaBitcoin />
          CRYPTO
        </div>
        <div className={` badge-info ${custombdg} `}>
          <FaRobot />
          DIGITAL
        </div>
        <div className={` badge-success ${custombdg} `}>
          <GrAnnounce />
          NEWS
        </div>
        <div className={` badge-warning ${custombdg} `}>
          <FaRocket />
          STARTUPS
        </div>
        <div className={` badge-error ${custombdg} `}>
          <RiPlug2Fill />
          TECHNOLOGY
        </div>
        <div className={` badge-primary ${custombdg} `}>
          <FaFire />
          TRENDS
        </div>
      </div>
    </div>
  );
}
