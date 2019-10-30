import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDrumstickBite,
  faGamepad,
  faRoute,
  faMapMarkedAlt,
  faGifts,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons'

export const Icon = (activityType) => {
    switch (activityType) {
      case "Attraction":
        return (
          <FontAwesomeIcon icon={faGamepad} />
        )
      case "Food":
        return (
          <FontAwesomeIcon icon={faDrumstickBite} />
        )
      case "Outdoor":
        return (
          <FontAwesomeIcon icon={faRoute} />
        )
      case "Shopping":
        return (
          <FontAwesomeIcon icon={faGifts} />
        )
      case "Park":
        return (
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        )
      default: 
        return (
            <FontAwesomeIcon icon={faQuestion} />
        )
    }
  };

  