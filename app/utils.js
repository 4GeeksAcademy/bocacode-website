import { sendGTMEvent } from '@next/third-parties/google'

export const tagManager = (eventName, payload = {}) => {
  if (typeof dataLayer != "undefined") {
    sendGTMEvent({ event: eventName, ...payload });
    console.log("Event successfully triggered: " + eventName);
  } else
    console.log("TagManager:dataLayer not found to trigger event " + eventName);
}