import Icon from "../../atoms/Icon";
import { ContentWrapper, Dropdown } from "./styles";

export type DropdownProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  opened?: boolean;
};

const DropdownWrapper: React.FC<DropdownProps> = ({
  children,
  opened,
  ...props
}) => {
  return (
    <Dropdown {...props}>
      <ContentWrapper>{children}</ContentWrapper>
      {opened ? <Icon icon="ChevronUpIcon" /> : <Icon icon="ChevronDownIcon" />}
    </Dropdown>
  );
};

export default DropdownWrapper;
