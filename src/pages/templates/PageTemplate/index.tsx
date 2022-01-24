import {PageTemplate, Content} from './styles';

export type PageTemplateProps = React.HTMLAttributes<HTMLDivElement>

const PageTemplateWrapper: React.FC<PageTemplateProps> = ({children}) => {
  return (
    <PageTemplate>
      <Content>
          {children}
      </Content>
    </PageTemplate>
  );
};

export default PageTemplateWrapper;
