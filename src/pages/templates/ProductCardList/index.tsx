import Card from "../../../components/organisms/ProductCard";
import { CardRow, ReachedEnd } from "./styles";
import Skeleton, { CardRowSkeleton } from "./skeleton";
import {
  LoadingProps,
  withLoadingContext,
  LoadingContext,
} from "../../../providers/loading";
import { List, InfiniteLoader, WindowScroller } from "react-virtualized";
import { useSelectedItem } from "../../../providers/item";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> &
  LoadingProps & {
    items?: any[];
    loadMore?: () => void;
    hasMore?: boolean;
    initialFetch?: boolean;
  };

const ProductCardList: React.FC<HeaderProps> = ({
  items,
  loadMore,
  hasMore,
  isLoading,
  initialFetch = false,
}) => {
  if (isLoading) {
    return <Skeleton />;
  }

  const itemsPerRow = 4;
  const loadedRowsCount = Math.ceil(items.length / itemsPerRow);
  const rowCount = loadedRowsCount + (hasMore ? 3 : 0);

  const { setSelectedItem } = useSelectedItem();
  
  const isRowLoaded = ({ index }) => index < loadedRowsCount;

  const loadMoreRows = async ({ startIndex, stopIndex }) => {
    if (
      (initialFetch || loadedRowsCount > 0) &&
      rowCount === loadedRowsCount + (stopIndex - startIndex + 1)
    ) {
      loadMore();
      return;
    }
  };

  const onClickCard = (index) => {
    setSelectedItem(items[index]);
  };

  const rowRenderer = ({ index, isScrolling, isVisible, key, style }) => {
    let loadingRow = index >= loadedRowsCount;

    if (loadingRow) {
      return (
        <div
          key={`${key}-${index}-row`}
          style={style}
          className={isVisible ? "isVisible" : ""}
        >
          <LoadingContext.Provider value={{ isLoading: loadingRow }}>
            <CardRowSkeleton index={index} />
          </LoadingContext.Provider>
        </div>
      );
    }

    const content = [];

    for (let i = 0; i < 4; i++) {
      const itemIndex = index * 4 + i;
      if (itemIndex < items.length) {
        content.push(
          <Card
            key={`${itemIndex}-${key}-${index}-${i}`}
            item={items[itemIndex]}
            onClick={() => onClickCard(itemIndex)}
          />
        );
      }
    }

    return (
      <CardRow
        key={`${key}-${index}-row`}
        style={style}
        className={isVisible ? "isVisible" : ""}
      >
        {content}
      </CardRow>
    );
  };

  return (
    <>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={rowCount}
        threshold={1}
      >
        {({ onRowsRendered, registerChild }) => (
          <WindowScroller>
            {({ height, width, isScrolling, onChildScroll, scrollTop }) => {
              return (
                <List
                  ref={registerChild}
                  width={width}
                  height={height}
                  autoHeight
                  autoWidth
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  scrollTop={scrollTop}
                  onRowsRendered={onRowsRendered}
                  rowCount={rowCount}
                  rowHeight={398}
                  rowRenderer={rowRenderer}
                />
              );
            }}
          </WindowScroller>
        )}
      </InfiniteLoader>
      {!hasMore && items.length > 0 && <ReachedEnd />}
    </>
  );
};

export default withLoadingContext(ProductCardList);
