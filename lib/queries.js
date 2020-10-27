import groq from "groq";

export const getEvents = groq`*[_type == "events"] | order(name){
  'name': name,
  'ctaLocation': ctaLocation,
  'ctaText': ctaText,
  'date': date
}`;

export const getHomepage = groq`*[_type == 'homePage']{
  'title': title,
  'ctaLocation': ctaLocation,
  'ctaText': ctaText,
}`;