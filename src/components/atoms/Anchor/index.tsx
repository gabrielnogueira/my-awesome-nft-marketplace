import { Anchor } from "./styles";

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

const AnchorWrapper: React.FC<AnchorProps> = (props) => <Anchor {...props} />;

export default AnchorWrapper;
