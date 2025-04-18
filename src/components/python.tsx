import React from 'react';

export const PythonSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
  <svg
    width="83.371017" height="101.00108"
    viewBox="0 0 120 120"
    
    {...props}
  >
    <defs>
      {/* Stops for radial gradient */}
      <linearGradient id="linearGradient2795">
        <stop offset="0" stopColor="#b8b8b8" stopOpacity="0.49803922" />
        <stop offset="1" stopColor="#7f7f7f" stopOpacity="0" />
      </linearGradient>
      {/* Yellow gradient for upper part */}
      <linearGradient id="linearGradient4671">
        <stop offset="0" stopColor="#ffd43b" stopOpacity="1" />
        <stop offset="1" stopColor="#ffe873" stopOpacity="1" />
      </linearGradient>
      {/* Blue gradient for lower part */}
      <linearGradient id="linearGradient4689">
        <stop offset="0" stopColor="#5a9fd4" stopOpacity="1" />
        <stop offset="1" stopColor="#306998" stopOpacity="1" />
      </linearGradient>
      {/* Transformed yellow gradient */}
      <linearGradient
        id="linearGradient1475"
        xlinkHref="#linearGradient4671"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.562541,0,0,0.567972,-14.99112,-11.702371)"
        x1="150.96111"
        y1="192.35176"
        x2="112.03144"
        y2="137.27299"
      />
      {/* Transformed blue gradient */}
      <linearGradient
        id="linearGradient1478"
        xlinkHref="#linearGradient4689"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.562541,0,0,0.567972,-14.99112,-11.702371)"
        x1="26.648937"
        y1="20.603781"
        x2="135.66525"
        y2="114.39767"
      />
      {/* Shadow ellipse gradient */}
      <radialGradient
        id="radialGradient1480"
        xlinkHref="#linearGradient2795"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1.7490565e-8,-0.23994696,1.054668,3.7915457e-7,-83.7008,142.46201)"
      />
    </defs>
    {/* Upper Python shape */}
    <path
      fill="url(#linearGradient1478)"
      fillOpacity={1}
      d="M54.918785,0 C50.335132,0.0222173 45.957846,0.413137 42.106285,1.0946693 30.760069,3.0991731 28.700036,7.2947714 28.700035,15.032169 v10.21875 h26.8125 v3.40625 h-26.8125 -10.0625 c-7.792459,0 -14.615759,4.683717 -16.75,13.59375 -2.46182,10.212966 -2.571015,16.586023 0,27.25 1.905928,7.937852 6.457543,13.593748 14.249999,13.59375 h9.21875 v-12.25 c0,-8.849902 7.657144,-16.656248 16.75,-16.65625 h26.78125 c7.454951,0 13.406253,-6.138164 13.40625,-13.625 v-25.53125 c0,-7.266339 -6.12998,-12.724777 -13.40625,-13.9375 C64.281548,0.327944 59.502438,-0.020379 54.918785,0 Z m-14.5,8.21875 c2.769547,0 5.03125,2.298646 5.03125,5.125 -2e-6,2.816336 -2.261703,5.09375 -5.03125,5.09375 -2.779476,0 -5.03125,-2.277415 -5.03125,-5.09375 0,-2.826353 2.251774,-5.125 5.03125,-5.125 Z"
    />
    {/* Lower Python shape */}
    <path
      fill="url(#linearGradient1475)"
      fillOpacity={1}
      d="M85.637535,28.657169 v11.90625 c0,9.230755 -7.825895,17 -16.75,17 h-26.78125 c-7.335833,0 -13.406249,6.278483 -13.40625,13.625 v25.531247 c0,7.266344 6.318588,11.540324 13.40625,13.625004 8.487331,2.49561 16.626237,2.94663 26.78125,0 6.750155,-1.95439 13.406253,-5.88761 13.40625,-13.625004 V86.500919 h-26.78125 v-3.40625 h26.78125 13.406254 c7.792461,0 10.696251,-5.435408 13.406241,-13.59375 2.79933,-8.398886 2.68022,-16.475776 0,-27.25 -1.92578,-7.757441 -5.60387,-13.59375 -13.406241,-13.59375 Z m-15.0625,64.65625 c2.779478,0 5.03125,2.277417 5.03125,5.093747 -2e-6,2.826354 -2.251775,5.125004 -5.03125,5.125004 -2.76955,0 -5.03125,-2.29865 -5.03125,-5.125004 0,-2.81633 2.261697,-5.093747 5.03125,-5.093747 Z"
    />
    {/* Shadow ellipse */}
    <ellipse
      opacity={0.44382}
      fill="url(#radialGradient1480)"
      fillOpacity={1}
      fillRule="nonzero"
      stroke="none"
      strokeWidth={15.4174}
      strokeMiterlimit={4}
      strokeDasharray="none"
      strokeOpacity={1}
      cx={55.816761}
      cy={127.70079}
      rx={35.930977}
      ry={6.9673119}
    />
  </svg>);
}
