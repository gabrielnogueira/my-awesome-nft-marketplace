import { Button } from "./styles";
import Skeleton from './skeleton';
import { LoadingProps, withLoadingContext } from "../../../providers/loading";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & LoadingProps & {
  active?: boolean;
};

const ButtonWrapper: React.FC<ButtonProps> = ({isLoading, ...props}) => {
  if(isLoading){
    return <Skeleton />
  }
  return <Button {...props} />
}

export default withLoadingContext(ButtonWrapper);
