export const BUSINESS = {
  name: "Visoso Plumbing",
  altName: "Visoso Plomería Económica",
  legalType: "Residential Plumbing Connection Service",
  phoneDisplay: "(714) 750-8607",
  phoneHref: "tel:+17148807278",
  email: "service@visosoplomeriaeconomica.com",
  street: "2322 W Greenacre Ave Apt 2",
  city: "Anaheim",
  state: "CA",
  zip: "92801",
  country: "US",
  lat: 33.8447,
  lng: -117.9611,
  hours: "Open 24 Hours — 7 Days a Week",
  languages: ["English", "Spanish"],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425168.08625601436!2d-118.11073822900887!3d33.64094655343955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd292db591b5c5%3A0x95d2ed2d7f51ee6c!2sVisoso%20Plumbing!5e0!3m2!1sen!2sin!4v1785751938356!5m2!1sen!2sin",
} as const;

export const fullAddress = `${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.zip}`;
