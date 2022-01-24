import * as OutlineIcons from "@heroicons/react/outline";
import * as SolidIcons from "@heroicons/react/solid";

export interface IconProps {
  icon: string;
  outline?: boolean;
  styles?: string;
}

const Icon = (props: IconProps) => {
  const Icons = props.outline ? OutlineIcons : SolidIcons;

  const HeroIcon = Icons[props.icon];

  return <HeroIcon className={`h-5 w-5`} />;
};

export default Icon;
