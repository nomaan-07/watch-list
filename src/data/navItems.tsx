import {
  CheckCircleIcon,
  CogIcon,
  EyeIcon,
  HomeIcon,
  PlayPauseIcon,
} from "@heroicons/react/16/solid";

const iconStyles = "size-6";

export const items = [
  {
    name: "home",
    icon: <HomeIcon className={iconStyles} />,
    path: "/home",
  },
  {
    name: "watching",
    icon: <EyeIcon className={iconStyles} />,
    path: "/watching",
  },
  {
    name: "continued",
    icon: <PlayPauseIcon className={iconStyles} />,
    path: "/continued",
  },
  {
    name: "finished",
    icon: <CheckCircleIcon className={iconStyles} />,
    path: "/finished",
  },
  {
    name: "account",
    icon: <CogIcon className={iconStyles} />,
    path: "/account",
  },
] as const;
