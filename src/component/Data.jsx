import React, { createContext, useEffect, useState } from 'react';

// Create a Context object
export const SitesContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const SitesProvider = props => {
  const [sites, setSites] = useState([]);

  const fetchData_1 = async () => {
    let url = "https://api.thingspeak.com/channels/2290546/feeds.json?api_key=NZ87SPM1OMTGCQUV&results=1";
    let response = await fetch(url);
    let data = await response.json();

    setSites([
      { siteName: "A1", status: data.feeds[0].field1 },
      { siteName: "A2", status: data.feeds[0].field2 },
      { siteName: "A3", status: data.feeds[0].field3 },
      { siteName: "A4", status: "2" }, 
    ]);
  };
  useEffect(() => {
    fetchData_1();
    setInterval(fetchData_1, 15000);
  }, []);

  return (
    <SitesContext.Provider value={sites}>
      {props.children}
    </SitesContext.Provider>
  );
};
