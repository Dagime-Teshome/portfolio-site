import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../services/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Socials = () => {
  return (
    <div
      className=" gap-3 mt-10 text-gray-400 flex flex-row xl:flex xl:flex-col xl:justify-evenly xl:items-center 
    xl:fixed xl:bg-black xl:outline-2 xl:top-1/4 xl:left-0 xl:rounded-r-3xl xl:h-[340px] xl:w-[55px] xl:text-slate-50 "
    >
      {socials.map((social, i) => {
        return (
          <TooltipProvider key={i}>
            <Tooltip>
              <TooltipTrigger>
                <a key={i} href={social.url}>
                  <FontAwesomeIcon
                    className="transition duration-700 ease-in-out
              hover:-translate-y-1 hover:scale-110
              "
                    icon={social.icon}
                    size="2x"
                  ></FontAwesomeIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default Socials;
