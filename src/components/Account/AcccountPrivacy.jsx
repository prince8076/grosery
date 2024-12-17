import { RiDeleteBin6Line } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const AcccountPrivacy = () => {
  return (
    <div className="w-full">
    <div className="flex flex-col gap-4 px-8 rounded m-5 ">
      <h1 className="text-[23px] font-[600]">Account privacy and policy</h1>
      <p className="text-[14px] font-[400]" style={{lineHeight:'25px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo
        elit, pulvinar in commodo in, condimentum ac mi. Proin consequat felis
        nunc, eu sodales nibh sodales ac. Maecenas tristique suscipit tempus.
        Morbi rhoncus accumsan nunc ac tincidunt. Nunc imperdiet malesuada urna
        sed tempus. Ut augue magna, gravida in elementum eu, sollicitudin quis
        mauris. Nam euismod semper massa, sit amet convallis ex ornare vitae.
        Maecenas ac tortor nec nibh venenatis finibus. Vivamus ac sodales augue,
        eget venenatis sem.Praesent leo enim, tristique vitae urna vel, interdum
        finibus dolor.
      </p>
      <NavLink to={"/account/privacy/delete-account"} className="flex items-center justify-between rounded-lg border p-2">
        <div className="flex items-center gap-2 px-4">
          <RiDeleteBin6Line className="text-delete-bg w-[32px] h-[32px]"/>
          <div>
            <span className="block font-[500] text-[14px]">Request for account deletion</span>
            <span className="font-[400] text-[13px]">Request to close your account</span>
          </div>
        </div>
        <FaChevronRight className="text-[#000] w-[20px] h-[20px] mr-2"/>
      </NavLink> 
    </div>
    </div>
  );
};

export default AcccountPrivacy;
