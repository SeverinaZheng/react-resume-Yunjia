import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';
import {NewspaperIcon} from '@heroicons/react/24/outline';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl flex font-bold">{title}
          {item.paperUrl && <a href={item.paperUrl} target="_blank" rel="noopener noreferrer" title="Download Paper">
              <NewspaperIcon className="w-4 h-4 relative top-[8px]"/> </a>} 
        </h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          {item.authors && <span className="flex-1 text-sm italic sm:flex-none">{item.authors}</span>}
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
