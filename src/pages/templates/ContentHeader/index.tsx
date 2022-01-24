import { Header } from "./styles";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

const HeaderWrapper: React.FC<HeaderProps> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default HeaderWrapper;
