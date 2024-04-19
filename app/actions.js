import { sendGTMEvent } from '@next/third-parties/google';

export const tagManager = (eventName, payload = {}) => {
  if (typeof dataLayer != 'undefined') {
    sendGTMEvent({ event: eventName, ...payload });
    console.log('Event successfully triggered: ' + eventName);
  } else
    console.log('TagManager:dataLayer not found to trigger event ' + eventName);
};

/**
 *
 * @param {Information to send to the backend} formData
 * @param {Any tag from active campaign} tags
 * @param {hard, soft, newsletter, etc} automations
 * @param {session information object} session
 */
export const save_form = async (
  formData = null,
  tags = [],
  automations = [],
  session = null,
) => {
  if (!Array.isArray(tags)) throw Error('Tags must be an array');
  if (typeof session !== 'object') throw Error('Missing session');
  if (typeof formData !== 'object') throw Error('Missing formData');

  const getReferralKey = () => {
    // at_gd is for the adtraction referral program
    let alias = ['referral_code', 'ref', 'referral_key', 'at_gd'];
    let referral = null;
    for (let i = 0; i < alias.length; i++) {
      referral =
        formData[alias[i]] || session.utm ? session.utm[alias[i]] : null;
      if (typeof referral == 'string' && referral.length > 0) return referral;
    }
    return undefined;
  };

  const resp = await fetch(`${process.env.BREATHECODE_HOST}/v1/marketing/lead`, {
    headers: new Headers({ 'content-type': 'application/json' }),
    method: 'POST',
    body: JSON.stringify({
      ...formData,
      ...session.utm,
      tags: tags.join(','),
      automations: automations.join(','),
      utm_language: formData.utm_language || session.language,
      language: formData.utm_language || session.language,
      latitude: session.latitude,
      longitude: session.longitude,
      referral_key: getReferralKey(),
      location: session.location,
      utm_url: formData.utm_url || window.location.href,
    }),
  });
  if (resp.status >= 200 && resp.status < 400) {
    return await resp.json();
  } else {
    const error = await resp.json();
    if (typeof error.detail === 'string') throw Error(error.detail);
    if (typeof error.details === 'string') throw Error(error.details);
    for (let key in error) {
      throw Error(`${error[key][0]} ${key}`);
    }
  }
};

export const apply = async (data, session) => {
  console.log('Apply action called with session: ', session);

  let body = {};

  Object.keys(data).forEach((key) => {
    if (typeof data[key] === 'object') body[key] = data[key].value;
    else body[key] = data[key];
  });

  const tag = body.tag || 'website-lead';
  const automation = body.automation || 'strong';

  if (session || session.utm) {
    const _data = await save_form(
      body,
      [tag.value || tag],
      [automation.value || automation],
      session,
    );

    // save conversion info to GTM
    tagManager('student_application', {
      email: _data.email,
      formentry_id: _data.id,
      attribution_id: _data.attribution_id?.toString(),
      referral_key: _data.referral_key,
    });

    // referral program integration
    if (
      _data &&
      typeof _data.referral_key == 'string' &&
      _data.referral_key.length > 0
    ) {
      // save conversion info to First Promoter API
      if (window && window.fpr) {
        console.log('Triggered referral program action');
        window.fpr('referral', { email: _data.email });
      } else
        console.error(
          'Global object for firstpromoter API not found (referral program)'
        );
    }
    return _data;
  }
  return true;
};
