'use client';

import React, { useEffect, useState } from 'react';
import SideDrawer from './SideDrawer';
import PlaceItemCard from './PlaceItemCard';

const PlaceList = () => {
  const [listData, setListData] = useState<any>([]);

  useEffect(() => {
    const getListData = async () => {
      const res = await fetch('/api/google-place-api?q=Cafe in Melbourne');
      const data = await res.json();
      setListData(data.resp.results);
    };

    getListData();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-[20px] font-bold">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-4">
          {listData.map((item: any, index: number) => (
            <div className="flex" key={index}>
              <PlaceItemCard listData={item} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <SideDrawer />
      </div>
    </div>
  );
};

export default PlaceList;
