'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

const defaultSession = {
  course_type: "Part-Time",
  email: null,
  utm: {
    gclid: undefined,
    utm_campaign: undefined,
    utm_source: undefined,
    utm_medium: undefined,
    utm_content: undefined,
    utm_plan: undefined,
    utm_placement: undefined,
    utm_term: undefined,
    referral_code: undefined,
  },
};

const SessionContest = createContext(defaultSession);

export const SessionWrapper = ({ children }) => {
  const [session, setSession] = useState(defaultSession);
  const searchParams = useSearchParams();

  useEffect(() => {
    const storedSession = JSON.parse(localStorage.getItem('session'));

    const utmKeys = Object.keys(defaultSession.utm);
    const utmValues = {};
    
    for (const key of utmKeys) {
      const param = searchParams.get(key);
      if (param) utmValues[key] = param;
    }

    setSession((prevSession) => {
      const newSession = {
        ...prevSession,
        ...storedSession,
        utm: {
          ...prevSession?.utm,
          ...storedSession?.utm,
          ...utmValues,
        },
      };

      localStorage.setItem('session', JSON.stringify(newSession));
      return newSession
    });
  
  }, [searchParams]);

  return (
    <SessionContest.Provider value={{
      session,
      setSession: (payload) => {
        setSession(payload);
        localStorage.setItem('session', JSON.stringify(payload));
      },
    }}>
      {children}
    </SessionContest.Provider>
  );
}

export const useSession = () => {
  return useContext(SessionContest)
}