Vue.component('window-scene', {
    props: ['title'],
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1366 768" class="svg-container">
    <defs>
    <svg:style>
      .cls-1, .cls-124 {
        fill: none;
      }

      .cls-2 {
        fill: #32282f;
      }

      .cls-3 {
        fill: #2d252b;
      }

      .cls-4 {
        fill: #121011;
      }

      .cls-5 {
        fill: #433640;
      }

      .cls-6 {
        fill: url(#radial-gradient);
      }

      .cls-7 {
        fill: #b61828;
      }

      .cls-8 {
        fill: #ffeecb;
      }

      .cls-9 {
        fill: #fdbe70;
      }

      .cls-10 {
        fill: #7d232e;
      }

      .cls-11 {
        fill: gray;
      }

      .cls-12 {
        clip-path: url(#clip-path);
      }

      .cls-13, .cls-14, .cls-18, .cls-24 {
        isolation: isolate;
      }

      .cls-14 {
        font-size: 25.81px;
        font-family: Nunito-ExtraBold, Nunito;
        font-weight: 800;
      }

      .cls-14, .cls-24 {
        fill: #ae1f22;
      }

      .cls-15 {
        letter-spacing: -0.02em;
      }

      .cls-16 {
        letter-spacing: -0.09em;
      }

      .cls-17 {
        letter-spacing: 0em;
      }

      .cls-18, .cls-24 {
        font-size: 13.42px;
        font-family: NunitoSans-Bold, Nunito Sans;
        font-weight: 700;
      }

      .cls-18 {
        fill: #01797b;
      }

      .cls-19 {
        letter-spacing: -0.01em;
      }

      .cls-20 {
        letter-spacing: -0.01em;
      }

      .cls-21 {
        letter-spacing: -0.07em;
      }

      .cls-22 {
        letter-spacing: -0.04em;
      }

      .cls-23 {
        letter-spacing: -0.06em;
      }

      .cls-25 {
        letter-spacing: 0em;
      }

      .cls-26 {
        letter-spacing: -0.09em;
      }

      .cls-27 {
        letter-spacing: 0em;
      }

      .cls-28 {
        letter-spacing: -0.01em;
      }

      .cls-29 {
        letter-spacing: -0.01em;
      }

      .cls-30 {
        letter-spacing: -0.08em;
      }

      .cls-31 {
        letter-spacing: -0.07em;
      }

      .cls-32 {
        letter-spacing: 0.01em;
      }

      .cls-33 {
        letter-spacing: -0.02em;
      }

      .cls-34 {
        letter-spacing: 0.04em;
      }

      .cls-35 {
        fill: #b5e0ee;
      }

      .cls-36 {
        fill: #dff2fb;
      }

      .cls-37 {
        fill: #c6e8f0;
      }

      .cls-38 {
        fill: #dbf0f5;
      }

      .cls-39 {
        fill: #c8e9f3;
      }

      .cls-40 {
        fill: #e8f6fa;
      }

      .cls-41 {
        fill: #2ab7ba;
      }

      .cls-42 {
        fill: #8fd4e9;
      }

      .cls-43 {
        fill: #e6f5f7;
      }

      .cls-44 {
        fill: #a1daeb;
      }

      .cls-45 {
        fill: #256fb6;
      }

      .cls-46 {
        fill: #ee4f55;
      }

      .cls-47 {
        fill: #d7effc;
      }

      .cls-48 {
        fill: #fbac5c;
      }

      .cls-49 {
        fill: #ef5824;
      }

      .cls-50 {
        fill: #fcbd7a;
      }

      .cls-51 {
        fill: #0094d8;
      }

      .cls-52 {
        fill: #3583b0;
      }

      .cls-53 {
        fill: url(#radial-gradient-2);
      }

      .cls-54 {
        fill: url(#radial-gradient-3);
      }

      .cls-55 {
        fill: url(#radial-gradient-4);
      }

      .cls-56 {
        fill: url(#radial-gradient-5);
      }

      .cls-57 {
        fill: url(#radial-gradient-6);
      }

      .cls-58 {
        fill: url(#radial-gradient-7);
      }

      .cls-59 {
        fill: #edaea7;
      }

      .cls-60 {
        fill: #b62924;
      }

      .cls-61 {
        fill: #f1a298;
      }

      .cls-62 {
        fill: #005d5f;
      }

      .cls-63 {
        fill: #007f82;
      }

      .cls-64 {
        fill: #134079;
      }

      .cls-65 {
        fill: #715c53;
      }

      .cls-66 {
        fill: #6e655b;
      }

      .cls-67 {
        fill: #d1c3c1;
      }

      .cls-68 {
        fill: #f2edeb;
      }

      .cls-69 {
        fill: #a49e9f;
      }

      .cls-70 {
        fill: #b6b1b1;
      }

      .cls-71 {
        fill: #e8e1dc;
      }

      .cls-72 {
        fill: #463b3c;
      }

      .cls-73 {
        fill: #857e7e;
      }

      .cls-74 {
        fill: #feeff0;
      }

      .cls-75 {
        fill: #f7a498;
      }

      .cls-76 {
        fill: #f0624e;
      }

      .cls-77 {
        fill: #00559f;
      }

      .cls-78 {
        fill: #cbdbeb;
      }

      .cls-79 {
        fill: #009690;
      }

      .cls-80 {
        fill: #008f92;
      }

      .cls-81 {
        fill: #ed4044;
      }

      .cls-82 {
        fill: #2e76b3;
      }

      .cls-83 {
        fill: #7f322e;
      }

      .cls-84 {
        fill: #fcd6d7;
      }

      .cls-85 {
        fill: #84161b;
      }

      .cls-86 {
        fill: #004471;
      }

      .cls-87 {
        fill: #285f80;
      }

      .cls-88 {
        fill: #61c4ce;
      }

      .cls-89 {
        fill: #008183;
      }

      .cls-90 {
        fill: #eac6b7;
      }

      .cls-91 {
        fill: #dcab92;
      }

      .cls-123, .cls-161, .cls-92 {
        fill: #826669;
      }

      .cls-124, .cls-161, .cls-92 {
        stroke: #5f4a4c;
      }

      .cls-113, .cls-124, .cls-161, .cls-92, .cls-98 {
        stroke-miterlimit: 10;
      }

      .cls-92 {
        stroke-opacity: 0.3;
      }

      .cls-124, .cls-161, .cls-92, .cls-98 {
        stroke-width: 0.25px;
      }

      .cls-93 {
        fill: #175875;
      }

      .cls-94 {
        fill: #3f8ab4;
      }

      .cls-95 {
        fill: #f58f7f;
      }

      .cls-96 {
        fill: #8f211e;
      }

      .cls-97 {
        fill: #ed423f;
      }

      .cls-98 {
        fill: #e2f3f7;
        stroke: #c6c6d1;
        stroke-opacity: 0.9;
      }

      .cls-99 {
        fill: #00888b;
      }

      .cls-100 {
        fill: #00b2b9;
      }

      .cls-101 {
        fill: #ef5956;
      }

      .cls-102 {
        fill: #ed454d;
      }

      .cls-103 {
        fill: #f0616b;
      }

      .cls-104 {
        fill: #75ccea;
      }

      .cls-105 {
        fill: #d82e32;
      }

      .cls-106 {
        fill: #005587;
      }

      .cls-107 {
        fill: #f9b2a0;
      }

      .cls-108 {
        fill: #f8b5b7;
      }

      .cls-109 {
        fill: #104055;
      }

      .cls-110 {
        fill: #023754;
      }

      .cls-111 {
        fill: #003848;
      }

      .cls-112 {
        fill: #005d61;
      }

      .cls-113, .cls-156 {
        fill: #fff;
      }

      .cls-113 {
        stroke: #00799b;
        stroke-opacity: 0.15;
      }

      .cls-114 {
        fill: #f9aa88;
      }

      .cls-115 {
        fill: #2893ae;
      }

      .cls-116 {
        fill: #043956;
      }

      .cls-117 {
        fill: #f0635f;
      }

      .cls-118 {
        fill: #f79f89;
      }

      .cls-119 {
        fill: #3299c7;
      }

      .cls-120 {
        fill: #f26d2a;
      }

      .cls-121 {
        fill: #f58a68;
      }

      .cls-122 {
        fill: #f59082;
      }

      .cls-124 {
        opacity: 0.35;
      }

      .cls-125 {
        fill: #f89c5c;
      }

      .cls-126 {
        fill: #005e60;
      }

      .cls-127 {
        fill: #f27574;
      }

      .cls-128 {
        opacity: 0.28;
      }

      .cls-129 {
        fill: #977179;
      }

      .cls-130 {
        fill: #0a3452;
      }

      .cls-131 {
        fill: #f7a196;
      }

      .cls-132 {
        fill: #c4786d;
        opacity: 0.5;
      }

      .cls-133 {
        fill: #003d5d;
      }

      .cls-134 {
        fill: #eb9d82;
      }

      .cls-135 {
        fill: #152331;
      }

      .cls-136 {
        fill: #1d3144;
      }

      .cls-137 {
        fill: #335176;
      }

      .cls-138 {
        fill: #007b83;
      }

      .cls-139 {
        fill: #ecb9a2;
      }

      .cls-140 {
        fill: #ee4b55;
      }

      .cls-141 {
        fill: #2751a0;
      }

      .cls-142 {
        fill: #45291f;
      }

      .cls-143 {
        fill: #ac7248;
      }

      .cls-144 {
        fill: #dea58d;
      }

      .cls-145 {
        fill: #24222c;
      }

      .cls-146 {
        fill: #233c56;
      }

      .cls-147 {
        fill: #f5862e;
      }

      .cls-148 {
        fill: #eeb0a7;
      }

      .cls-149 {
        fill: #f89a4a;
      }

      .cls-150 {
        fill: #07acb1;
      }

      .cls-151 {
        fill: #e7b38d;
      }

      .cls-152 {
        fill: #00b1b0;
      }

      .cls-153 {
        fill: #f9bb91;
      }

      .cls-154 {
        fill: #9b6e5e;
      }

      .cls-155 {
        fill: #4f2d3c;
      }

      .cls-157 {
        fill: #271b12;
      }

      .cls-158 {
        fill: #2f71b7;
      }

      .cls-159 {
        fill: #da2d31;
      }

      .cls-160 {
        fill: #feddba;
      }

      .cls-162 {
        fill: #afccdf;
      }

      .cls-163 {
        fill: #007b8b;
      }

      .cls-164 {
        fill: #201d1d;
        opacity: 0.8;
      }

      .cls-165 {
        fill: #efeff0;
      }

      .cls-166 {
        fill: #cbccce;
      }

      .cls-167 {
        fill: #e3e4e5;
      }

      .cls-168 {
        fill: #a41921;
      }
    </svg:style>
      <radialGradient id="radial-gradient" cx="1019.91" cy="583.77" r="107.31" gradientTransform="translate(0 -195.66) scale(1 1.26)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ffeecb"/>
        <stop offset="0.84" stop-color="#ffeecb" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="rgrad" cx="50%" cy="50%" r="75%" >
<stop offset="0%" style="stop-color:rgb(153,218,255);stop-opacity:0" />
<stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
</radialGradient>
      <clipPath id="clip-path">
        <rect class="cls-1" x="400.27" y="187.46" width="561.31" height="393.08"/>
      </clipPath>
      <radialGradient id="radial-gradient-2" cx="726.57" cy="423.83" r="22.1" gradientTransform="translate(0 -42.37)" xlink:href="#radial-gradient"/>
      <radialGradient id="radial-gradient-3" cx="664.18" cy="517.76" r="22.1" gradientTransform="translate(0 -42.37)" xlink:href="#radial-gradient"/>
      <radialGradient id="radial-gradient-4" cx="645.82" cy="434.47" r="22.1" gradientTransform="translate(0 -42.37)" xlink:href="#radial-gradient"/>
      <radialGradient id="radial-gradient-5" cx="674.56" cy="439.81" r="22.1" gradientTransform="translate(0 -42.37)" xlink:href="#radial-gradient"/>
      <radialGradient id="radial-gradient-6" cx="609.88" cy="489.11" r="22.1" gradientTransform="translate(0 -42.37)" xlink:href="#radial-gradient"/>
      <radialGradient id="radial-gradient-7" cx="738.73" cy="509.62" r="22.1" gradientTransform="translate(0 -42.37)" xlink:href="#radial-gradient"/>
    </defs>
    <title>winter-scene-1</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="scene-01">
        <slot></slot>
        
      </g>
    </g>
  </svg>
  `
})

Vue.component('winter-scene', {
    props: ['title'],
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1366 768">
  <defs>
    <svg:style>
      .cls-1 {
        fill: #b5e0ee;
      }

      .cls-2 {
        fill: #dff2fb;
      }

      .cls-3 {
        fill: #c6e8f0;
      }

      .cls-4 {
        fill: #dbf0f5;
      }

      .cls-5 {
        fill: #c8e9f3;
      }

      .cls-6 {
        fill: #e8f6fa;
      }

      .cls-7 {
        fill: #2ab7ba;
      }

      .cls-8 {
        fill: #8fd4e9;
      }

      .cls-9 {
        fill: #e6f5f7;
      }

      .cls-10 {
        fill: #a1daeb;
      }

      .cls-11 {
        fill: #256fb6;
      }

      .cls-12 {
        fill: #ee4f55;
      }

      .cls-13 {
        fill: #d7effc;
      }

      .cls-14 {
        fill: #fbac5c;
      }

      .cls-15 {
        fill: #ef5824;
      }

      .cls-16 {
        fill: #fcbd7a;
      }

      .cls-17 {
        fill: #0094d8;
      }

      .cls-18 {
        fill: #3583b0;
      }

      .cls-19 {
        fill: url(#radial-gradient);
      }

      .cls-20 {
        fill: url(#radial-gradient-2);
      }

      .cls-21 {
        fill: url(#radial-gradient-3);
      }

      .cls-22 {
        fill: url(#radial-gradient-4);
      }

      .cls-23 {
        fill: url(#radial-gradient-5);
      }

      .cls-24 {
        fill: url(#radial-gradient-6);
      }

      .cls-25 {
        fill: #edaea7;
      }

      .cls-26 {
        fill: #b62924;
      }

      .cls-27 {
        fill: #f1a298;
      }

      .cls-28 {
        fill: #005d5f;
      }

      .cls-29 {
        fill: #007f82;
      }

      .cls-30 {
        fill: #134079;
      }

      .cls-31 {
        fill: #715c53;
      }

      .cls-32 {
        fill: #6e655b;
      }

      .cls-33 {
        fill: #d1c3c1;
      }

      .cls-34 {
        fill: #f2edeb;
      }

      .cls-35 {
        fill: #a49e9f;
      }

      .cls-36 {
        fill: #b6b1b1;
      }

      .cls-37 {
        fill: #e8e1dc;
      }

      .cls-38 {
        fill: #463b3c;
      }

      .cls-39 {
        fill: #857e7e;
      }

      .cls-40 {
        fill: #feeff0;
      }

      .cls-41 {
        fill: #f7a498;
      }

      .cls-42 {
        fill: #f0624e;
      }

      .cls-43 {
        fill: #00559f;
      }

      .cls-44 {
        fill: #cbdbeb;
      }

      .cls-45 {
        fill: #009690;
      }

      .cls-46 {
        fill: #008f92;
      }

      .cls-47 {
        fill: #ed4044;
      }

      .cls-48 {
        fill: #2e76b3;
      }

      .cls-49 {
        fill: #7f322e;
      }

      .cls-50 {
        fill: #fcd6d7;
      }

      .cls-51 {
        fill: #84161b;
      }

      .cls-52 {
        fill: #004471;
      }

      .cls-53 {
        fill: #285f80;
      }

      .cls-54 {
        fill: #61c4ce;
      }

      .cls-55 {
        fill: #008183;
      }

      .cls-56 {
        fill: #eac6b7;
      }

      .cls-57 {
        fill: #dcab92;
      }

      .cls-127, .cls-58, .cls-89 {
        fill: #826669;
      }

      .cls-127, .cls-58, .cls-90 {
        stroke: #5f4a4c;
      }

      .cls-127, .cls-58, .cls-64, .cls-79, .cls-90 {
        stroke-miterlimit: 10;
      }

      .cls-58 {
        stroke-opacity: 0.3;
      }

      .cls-127, .cls-58, .cls-64, .cls-90 {
        stroke-width: 0.25px;
      }

      .cls-59 {
        fill: #175875;
      }

      .cls-60 {
        fill: #3f8ab4;
      }

      .cls-61 {
        fill: #f58f7f;
      }

      .cls-62 {
        fill: #8f211e;
      }

      .cls-63 {
        fill: #ed423f;
      }

      .cls-64 {
        fill: #e2f3f7;
        stroke: #c6c6d1;
        stroke-opacity: 0.9;
      }

      .cls-65 {
        fill: #00888b;
      }

      .cls-66 {
        fill: #00b2b9;
      }

      .cls-67 {
        fill: #ef5956;
      }

      .cls-68 {
        fill: #ed454d;
      }

      .cls-69 {
        fill: #f0616b;
      }

      .cls-70 {
        fill: #75ccea;
      }

      .cls-71 {
        fill: #d82e32;
      }

      .cls-72 {
        fill: #005587;
      }

      .cls-73 {
        fill: #f9b2a0;
      }

      .cls-74 {
        fill: #f8b5b7;
      }

      .cls-75 {
        fill: #104055;
      }

      .cls-76 {
        fill: #023754;
      }

      .cls-77 {
        fill: #003848;
      }

      .cls-78 {
        fill: #005d61;
      }

      .cls-122, .cls-79 {
        fill: #fff;
      }

      .cls-79 {
        stroke: #00799b;
        stroke-opacity: 0.15;
      }

      .cls-80 {
        fill: #f9aa88;
      }

      .cls-81 {
        fill: #2893ae;
      }

      .cls-82 {
        fill: #043956;
      }

      .cls-83 {
        fill: #f0635f;
      }

      .cls-84 {
        fill: #f79f89;
      }

      .cls-85 {
        fill: #3299c7;
      }

      .cls-86 {
        fill: #f26d2a;
      }

      .cls-87 {
        fill: #f58a68;
      }

      .cls-88 {
        fill: #f59082;
      }

      .cls-90 {
        fill: none;
        opacity: 0.35;
      }

      .cls-91 {
        fill: #f89c5c;
      }

      .cls-92 {
        fill: #005e60;
      }

      .cls-93 {
        fill: #f27574;
      }

      .cls-94 {
        opacity: 0.28;
      }

      .cls-95 {
        fill: #977179;
      }

      .cls-96 {
        fill: #0a3452;
      }

      .cls-97 {
        fill: #f7a196;
      }

      .cls-98 {
        fill: #c4786d;
        opacity: 0.5;
      }

      .cls-99 {
        fill: #003d5d;
      }

      .cls-100 {
        fill: #eb9d82;
      }

      .cls-101 {
        fill: #152331;
      }

      .cls-102 {
        fill: #1d3144;
      }

      .cls-103 {
        fill: #335176;
      }

      .cls-104 {
        fill: #007b83;
      }

      .cls-105 {
        fill: #ecb9a2;
      }

      .cls-106 {
        fill: #ee4b55;
      }

      .cls-107 {
        fill: #2751a0;
      }

      .cls-108 {
        fill: #45291f;
      }

      .cls-109 {
        fill: #ac7248;
      }

      .cls-110 {
        fill: #dea58d;
      }

      .cls-111 {
        fill: #24222c;
      }

      .cls-112 {
        fill: #233c56;
      }

      .cls-113 {
        fill: #f5862e;
      }

      .cls-114 {
        fill: #eeb0a7;
      }

      .cls-115 {
        fill: #f89a4a;
      }

      .cls-116 {
        fill: #07acb1;
      }

      .cls-117 {
        fill: #e7b38d;
      }

      .cls-118 {
        fill: #00b1b0;
      }

      .cls-119 {
        fill: #f9bb91;
      }

      .cls-120 {
        fill: #9b6e5e;
      }

      .cls-121 {
        fill: #4f2d3c;
      }

      .cls-123 {
        fill: #271b12;
      }

      .cls-124 {
        fill: #2f71b7;
      }

      .cls-125 {
        fill: #da2d31;
      }

      .cls-126 {
        fill: #feddba;
      }

      .cls-128 {
        fill: #afccdf;
      }

      .cls-129 {
        fill: #007b8b;
      }

      .cls-130 {
        isolation: isolate;
      }

      .cls-131 {
        fill: #01797b;
      }

      .cls-132 {
        fill: #354e8d;
      }

      .cls-133 {
        fill: #3c90ce;
      }

      .cls-134 {
        fill: #d84133;
      }

      .cls-135 {
        fill: #0d6baa;
      }

      .cls-136 {
        fill: #4f5465;
      }

      .cls-137 {
        fill: #ae1f22;
      }

      .cls-138 {
        fill: #15203d;
      }

      .cls-139 {
        fill: #26a0db;
      }
    </svg:style>
    <radialGradient id="radial-gradient" cx="766.84" cy="421.79" r="42.81" gradientTransform="translate(0 -42.37)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffeecb"/>
      <stop offset="0.84" stop-color="#ffeecb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="radial-gradient-2" cx="645.99" cy="603.73" r="42.81" xlink:href="#radial-gradient"/>
    <radialGradient id="radial-gradient-3" cx="610.44" cy="442.39" r="42.81" xlink:href="#radial-gradient"/>
    <radialGradient id="radial-gradient-4" cx="666.11" cy="452.75" r="42.81" xlink:href="#radial-gradient"/>
    <radialGradient id="radial-gradient-5" cx="540.84" cy="548.23" r="42.81" xlink:href="#radial-gradient"/>
    <radialGradient id="radial-gradient-6" cx="790.39" cy="587.95" r="42.81" xlink:href="#radial-gradient"/>
  </defs>
  <title>winter-scene-2</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="scene-02">
     <slot></slot>
    </g>
  </g>
</svg>
    `
})

Vue.component('button-open-window', {
    template: `
    <g id="push-window-bubble">
        <path id="Path_639" data-name="Path 639" class="cls-168" d="M781,314.44H580.73a6.66,6.66,0,0,0-6.66,6.66h0v28a6.67,6.67,0,0,0,6.66,6.67h91.5l8.64,8.64,8.64-8.64H781a6.67,6.67,0,0,0,6.66-6.67h0v-28a6.66,6.66,0,0,0-6.66-6.66Z"/>
        <g id="Click_to_open_the_window_" data-name="Click to open the window " class="cls-13">
          <g class="cls-13">
          </g>
        </g>
    </g>
    `
})

Vue.component('window-close', {
    template: `
    <g id="window-close">
        <g id="window-right">
        <rect class="cls-164" x="422.7" y="207.11" width="235.65" height="354.81"/>
        <path class="cls-165" d="M680.27,187.46h-280V580.54H680.42V187.46Zm-28.74,247H544.27v-101H651.53Zm-222.36-101h105.1v101H429.17Zm222.36-10H544.27v-107H651.53Zm-117.26-107v107H429.17v-107Zm-105.1,229h105.1v106H429.17Zm115.1,106v-106H651.53v106Z"/>
        <g id="Group_12" data-name="Group 12">
            <ellipse id="Ellipse_1" data-name="Ellipse 1" class="cls-166" cx="666.27" cy="385.96" rx="9" ry="8.5"/>
            <circle id="Ellipse_2" data-name="Ellipse 2" class="cls-167" cx="666.27" cy="382.46" r="9"/>
        </g>
        </g>
        <g id="window-left">
        <rect class="cls-164" x="703.67" y="207.11" width="235.65" height="354.81"/>
        <path class="cls-165" d="M681.42,187.46V580.54H961.58V187.46H681.42Zm28.9,146H817.58v101H710.32Zm222.36,101H827.58v-101h105.1Zm-222.36-218H817.58v107H710.32Zm222.36,0v107H827.58v-107Zm0,335H827.58v-106h105.1Zm-222.36,0v-106H817.58v106Z"/>
        <g id="Group_12-2" data-name="Group 12">
            <ellipse id="Ellipse_1-2" data-name="Ellipse 1" class="cls-166" cx="695.58" cy="385.96" rx="9" ry="8.5"/>
            <circle id="Ellipse_2-2" data-name="Ellipse 2" class="cls-167" cx="695.58" cy="382.46" r="9"/>
        </g>
        </g>
    </g>
    `
})

Vue.component('window-open-1', {
    template: `
    <g id="window-open-1">
      <g id="window-right-2" data-name="window-right">
          <polygon class="cls-164" points="637.98 543.65 420.93 560.33 421.08 208.69 639.73 225.3 637.98 543.65"/>
          <path class="cls-165" d="M660.17,209.39l-259.9-21.93V580.54l257.94-21.91v-.07l2.1-349.15Zm-27.86,220-99.06,2.14.28-95.2,99.26,2.16ZM427,334l97.27,2.13L524,431.78,427,433.88Zm205.83-4.51-99.28-2.59.29-100.86,99.5,7.16ZM524.58,225.41,524.3,326.7,427,324.16l.06-105.77ZM427,444.75l97-2.56-.27,100.34-96.83,7Zm106,97.11.29-99.92,99-2.62-.5,95.4Z"/>
          <g id="Group_12-3" data-name="Group 12">
          <path id="Ellipse_1-3" data-name="Ellipse 1" class="cls-166" d="M646.21,378.17c4.59,0,8.3,3.41,8.28,7.59s-3.77,7.59-8.37,7.61-8.3-3.38-8.27-7.6S641.61,378.16,646.21,378.17Z"/>
          <path id="Ellipse_2-3" data-name="Ellipse 2" class="cls-167" d="M646.23,374.59a8.15,8.15,0,0,1,8.27,8.06,8.26,8.26,0,0,1-8.36,8,8.13,8.13,0,0,1-8.28-8.06A8.22,8.22,0,0,1,646.23,374.59Z"/>
          </g>
      </g>
      <g id="window-right-3" data-name="window-right">
          <polygon class="cls-164" points="723.87 543.65 940.92 560.33 940.76 208.69 722.12 225.3 723.87 543.65"/>
          <path class="cls-165" d="M701.54,209.41l2.1,349.15v.07l257.94,21.91V187.46l-259.9,21.93Zm27.52,129.12,99.26-2.16.27,95.2-99.05-2.14Zm205.83,95.35-97.06-2.1-.26-95.61L934.84,334ZM728.5,233.24l99.5-7.16.29,100.86L729,329.53Zm206.27-14.85.06,105.77-97.28,2.54-.28-101.29ZM935,549.53l-96.83-7-.27-100.34,97,2.56ZM730.1,534.72l-.51-95.4,99,2.62.3,99.92Z"/>
          <g id="Group_12-4" data-name="Group 12">
          <path id="Ellipse_1-4" data-name="Ellipse 1" class="cls-166" d="M715.64,378.17c-4.6,0-8.3,3.41-8.28,7.59s3.77,7.59,8.37,7.61S724,390,724,385.77,720.23,378.16,715.64,378.17Z"/>
          <path id="Ellipse_2-4" data-name="Ellipse 2" class="cls-167" d="M715.62,374.59a8.17,8.17,0,0,0-8.28,8.06,8.28,8.28,0,0,0,8.37,8,8.12,8.12,0,0,0,8.27-8.06A8.21,8.21,0,0,0,715.62,374.59Z"/>
          </g>
      </g>
    </g>
    `
})

Vue.component('window-open-2', {
    template: `
    <g id="window-open-2">
      <g id="window-right-4" data-name="window-right">
          <polygon class="cls-164" points="612.37 545.37 418.71 560.48 418.67 209.39 611.95 233.4 612.37 545.37"/>
          <path class="cls-165" d="M629.9,218.56l-229.63-31.1V580.54l230.26-20.41v-.07L630,218.58ZM606.62,433.33l-88.09.48-.07-94.19,88,4.58ZM424,334.7l86.27,4.49.06,94.67-86.32.47Zm182.5.68-88-5.09-.07-99.79,88,10.46ZM510.18,229.52l.07,100.3-86.26-5,0-105.55ZM424,445.18l86.33-1,.06,99.35L424,549.75Zm94.61,97.75-.07-98.86,88.09-1,.12,93.53Z"/>
          <g id="Group_12-5" data-name="Group 12">
          <path id="Ellipse_1-5" data-name="Ellipse 1" class="cls-166" d="M618.65,383.36a7.65,7.65,0,0,1,7.4,7.6,7.23,7.23,0,0,1-7.38,7.28,7.6,7.6,0,0,1-7.39-7.61A7.17,7.17,0,0,1,618.65,383.36Z"/>
          <path id="Ellipse_2-5" data-name="Ellipse 2" class="cls-167" d="M618.65,379.85a7.92,7.92,0,0,1,7.4,8.06,7.44,7.44,0,0,1-7.38,7.7,7.85,7.85,0,0,1-7.4-8.05C611.27,383.18,614.57,379.73,618.65,379.85Z"/>
          </g>
      </g>
      <g id="window-right-5" data-name="window-right">
          <polygon class="cls-164" points="752.02 545.37 945.69 560.48 945.73 209.39 752.44 233.4 752.02 545.37"/>
          <path class="cls-165" d="M734.37,218.58l-.51,341.48v.07l230.26,20.41V187.46l-229.63,31.1ZM757.9,344.2l88-4.58-.07,94.19-88.08-.48Zm182.49,90.13-86.31-.47.06-94.67,86.27-4.49ZM758,241l88-10.46-.07,99.79-88,5.09Zm182.39-21.68V324.83l-86.26,5,.06-100.3Zm0,330.47L854,543.52l.06-99.35,86.32,1ZM757.64,536.57l.13-93.53,88.09,1-.07,98.86Z"/>
          <g id="Group_12-6" data-name="Group 12">
          <path id="Ellipse_1-6" data-name="Ellipse 1" class="cls-166" d="M745.74,383.36a7.66,7.66,0,0,0-7.4,7.6,7.24,7.24,0,0,0,7.38,7.28,7.6,7.6,0,0,0,7.4-7.61A7.18,7.18,0,0,0,745.74,383.36Z"/>
          <path id="Ellipse_2-6" data-name="Ellipse 2" class="cls-167" d="M745.75,379.85a7.91,7.91,0,0,0-7.4,8.06,7.43,7.43,0,0,0,7.37,7.7,7.84,7.84,0,0,0,7.4-8.05A7.38,7.38,0,0,0,745.75,379.85Z"/>
          </g>
      </g>
    </g>
    `
})

Vue.component('window-open-3', {
    template: `
    <g id="window-open-3">
      <g id="window-right-6" data-name="window-right">
          <polygon class="cls-164" points="550.79 545.37 413.35 560.48 413.33 209.39 550.49 233.4 550.79 545.37"/>
          <path class="cls-165" d="M563.23,218.56l-163-31.1V580.54l163.41-20.41v-.07l-.36-341.48ZM546.71,433.33l-62.51.48-.05-94.19,62.47,4.58ZM417.1,334.7l61.22,4.49.05,94.67-61.26.47Zm129.52.68-62.48-5.09-.05-99.79L546.53,241ZM478.27,229.52l.05,100.3-61.22-5V219.28ZM417.11,445.18l61.26-1,.05,99.35-61.3,6.23Zm67.14,97.75-.05-98.86,62.52-1,.08,93.53Z"/>
          <g id="Group_12-7" data-name="Group 12">
          <path id="Ellipse_1-7" data-name="Ellipse 1" class="cls-166" d="M555.25,383.36c2.9.11,5.25,3.51,5.25,7.6s-2.34,7.35-5.24,7.28-5.24-3.48-5.25-7.61S552.35,383.25,555.25,383.36Z"/>
          <path id="Ellipse_2-7" data-name="Ellipse 2" class="cls-167" d="M555.25,379.85c2.89.12,5.24,3.73,5.25,8.06s-2.34,7.78-5.24,7.7-5.25-3.68-5.25-8.05S552.35,379.73,555.25,379.85Z"/>
          </g>
      </g>
      <g id="window-right-7" data-name="window-right">
          <polygon class="cls-164" points="811.06 545.37 948.49 560.48 948.52 209.39 811.35 233.4 811.06 545.37"/>
          <path class="cls-165" d="M798.52,218.58l-.35,341.48v.07l163.41,20.41V187.46l-163,31.1Zm16.7,125.62,62.48-4.58-.05,94.19-62.51-.48Zm129.52,90.13-61.26-.47,0-94.67,61.23-4.49ZM815.32,241l62.43-10.46,0,99.79-62.47,5.09Zm129.44-21.68V324.83l-61.22,5,0-100.3Zm0,330.47-61.3-6.23.05-99.35,61.26,1ZM815,536.57l.09-93.53,62.52,1,0,98.86Z"/>
          <g id="Group_12-8" data-name="Group 12">
          <path id="Ellipse_1-8" data-name="Ellipse 1" class="cls-166" d="M806.6,383.36c-2.9.11-5.25,3.51-5.25,7.6s2.34,7.35,5.23,7.28,5.25-3.48,5.25-7.61S809.49,383.25,806.6,383.36Z"/>
          <path id="Ellipse_2-8" data-name="Ellipse 2" class="cls-167" d="M806.6,379.85c-2.89.12-5.25,3.73-5.25,8.06s2.34,7.78,5.24,7.7,5.24-3.68,5.25-8.05S809.5,379.73,806.6,379.85Z"/>
          </g>
      </g>
    </g>
    `
})

Vue.component('window-open-4', {
    template: `
    <g id="window-open-4">
      <g id="window-right-8" data-name="window-right">
          <polygon class="cls-164" points="516.77 545.37 410.4 560.48 410.38 209.39 516.54 233.4 516.77 545.37"/>
          <path class="cls-165" d="M526.4,218.56l-126.13-31.1V580.54l126.48-20.41v-.07l-.28-341.48ZM513.61,433.33l-48.38.48,0-94.19,48.36,4.58ZM413.3,334.7l47.38,4.49,0,94.67-47.41.47Zm100.24.68-48.35-5.09,0-99.79L513.47,241Zm-52.9-105.86,0,100.3-47.38-5V219.28ZM413.31,445.18l47.41-1,0,99.35-47.45,6.23Zm52,97.75,0-98.86,48.39-1,.06,93.53Z"/>
          <g id="Group_12-9" data-name="Group 12">
          <path id="Ellipse_1-9" data-name="Ellipse 1" class="cls-166" d="M520.22,383.36c2.24.11,4.06,3.51,4.07,7.6s-1.81,7.35-4.06,7.28-4.06-3.48-4.06-7.61S518,383.25,520.22,383.36Z"/>
          <path id="Ellipse_2-9" data-name="Ellipse 2" class="cls-167" d="M520.22,379.85c2.24.12,4.06,3.73,4.06,8.06s-1.81,7.78-4,7.7-4.06-3.68-4.06-8.05S518,379.73,520.22,379.85Z"/>
          </g>
      </g>
      <g id="window-right-9" data-name="window-right">
          <polygon class="cls-164" points="845.08 545.37 951.45 560.48 951.47 209.39 845.31 233.4 845.08 545.37"/>
          <path class="cls-165" d="M835.38,218.58l-.28,341.48v.07l126.48,20.41V187.46l-126.13,31.1ZM848.3,344.2l48.36-4.58,0,94.19-48.38-.48Zm100.24,90.13-47.41-.47,0-94.67,47.39-4.49ZM848.37,241,896.7,230.5l0,99.79-48.35,5.09Zm100.19-21.68V324.83l-47.38,5,0-100.3Zm0,330.47-47.44-6.23,0-99.35,47.41,1ZM848.16,536.57l.07-93.53,48.39,1,0,98.86Z"/>
          <g id="Group_12-10" data-name="Group 12">
          <path id="Ellipse_1-10" data-name="Ellipse 1" class="cls-166" d="M841.63,383.36c-2.25.11-4.07,3.51-4.07,7.6s1.81,7.35,4.05,7.28,4.07-3.48,4.07-7.61S843.87,383.25,841.63,383.36Z"/>
          <path id="Ellipse_2-10" data-name="Ellipse 2" class="cls-167" d="M841.63,379.85c-2.24.12-4.06,3.73-4.07,8.06s1.81,7.78,4.06,7.7,4.06-3.68,4.06-8.05S843.87,379.73,841.63,379.85Z"/>
          </g>
      </g>
    </g>
    `
})

Vue.component('window-open-5', {
    template: `
    <g id="window-open-5">
      <g id="window-right-10" data-name="window-right">
          <polygon class="cls-164" points="487.58 545.37 407.86 560.48 407.84 209.39 487.4 233.4 487.58 545.37"/>
          <path class="cls-165" d="M494.79,218.56l-94.52-31.1V580.54l94.78-20.41v-.07l-.21-341.48Zm-9.58,214.77-36.26.48,0-94.19,36.24,4.58ZM410,334.7l35.51,4.49,0,94.67-35.53.47Zm75.12.68-36.23-5.09,0-99.79L485.1,241ZM445.51,229.52l0,100.3-35.51-5V219.28ZM410,445.18l35.53-1,0,99.35-35.55,6.23ZM449,542.93l0-98.86,36.26-1,.05,93.53Z"/>
          <g id="Group_12-11" data-name="Group 12">
          <path id="Ellipse_1-11" data-name="Ellipse 1" class="cls-166" d="M490.16,383.36c1.68.11,3,3.51,3,7.6s-1.36,7.35-3,7.28-3-3.48-3.05-7.61S488.48,383.25,490.16,383.36Z"/>
          <path id="Ellipse_2-11" data-name="Ellipse 2" class="cls-167" d="M490.16,379.85c1.68.12,3,3.73,3,8.06s-1.36,7.78-3,7.7-3.05-3.68-3.05-8.05S488.48,379.73,490.16,379.85Z"/>
          </g>
      </g>
      <g id="window-right-11" data-name="window-right">
          <polygon class="cls-164" points="874.27 545.37 953.99 560.48 954 209.39 874.45 233.4 874.27 545.37"/>
          <path class="cls-165" d="M867,218.58l-.2,341.48v.07l94.78,20.41V187.46l-94.52,31.1Zm9.69,125.62,36.24-4.58,0,94.19-36.26-.48Zm75.12,90.13-35.53-.47,0-94.67,35.51-4.49ZM876.74,241,913,230.5l0,99.79-36.24,5.09Zm75.08-21.68V324.83l-35.51,5,0-100.3Zm0,330.47-35.55-6.23,0-99.35,35.53,1Zm-75.21-13.18,0-93.53,36.26,1,0,98.86Z"/>
          <g id="Group_12-12" data-name="Group 12">
          <path id="Ellipse_1-12" data-name="Ellipse 1" class="cls-166" d="M871.69,383.36c-1.68.11-3.05,3.51-3.05,7.6s1.36,7.35,3,7.28,3-3.48,3-7.61S873.37,383.25,871.69,383.36Z"/>
          <path id="Ellipse_2-12" data-name="Ellipse 2" class="cls-167" d="M871.69,379.85c-1.68.12-3.05,3.73-3.05,8.06s1.36,7.78,3,7.7,3-3.68,3-8.05S873.37,379.73,871.69,379.85Z"/>
          </g>
      </g>
    </g>
    `
})

Vue.component('background-1', {
    template: `
    <g id="bg-wallpaper">
        <rect id="Rectangle_1" data-name="Rectangle 1" class="cls-2" width="1366" height="768"/>
        <g>
        <rect id="Rectangle_1-2" data-name="Rectangle 1" class="cls-3" width="78.33" height="768"/>
        <rect id="Rectangle_1-3" data-name="Rectangle 1" class="cls-3" x="107.31" width="78.33" height="768"/>
        <rect id="Rectangle_1-4" data-name="Rectangle 1" class="cls-3" x="214.61" width="78.33" height="768"/>
        <rect id="Rectangle_1-5" data-name="Rectangle 1" class="cls-3" x="321.92" width="78.33" height="768"/>
        <rect id="Rectangle_1-6" data-name="Rectangle 1" class="cls-3" x="429.22" width="78.33" height="768"/>
        <rect id="Rectangle_1-7" data-name="Rectangle 1" class="cls-3" x="536.53" width="78.33" height="768"/>
        <rect id="Rectangle_1-8" data-name="Rectangle 1" class="cls-3" x="643.83" width="78.33" height="768"/>
        <rect id="Rectangle_1-9" data-name="Rectangle 1" class="cls-3" x="751.14" width="78.33" height="768"/>
        <rect id="Rectangle_1-10" data-name="Rectangle 1" class="cls-3" x="858.44" width="78.33" height="768"/>
        <rect id="Rectangle_1-11" data-name="Rectangle 1" class="cls-3" x="965.75" width="78.33" height="768"/>
        <rect id="Rectangle_1-12" data-name="Rectangle 1" class="cls-3" x="1073.06" width="78.33" height="768"/>
        <rect id="Rectangle_1-13" data-name="Rectangle 1" class="cls-3" x="1180.36" width="78.33" height="768"/>
        <rect id="Rectangle_1-14" data-name="Rectangle 1" class="cls-3" x="1287.67" width="78.33" height="768"/>
        </g>
        <rect class="cls-3" x="382.61" y="173.8" width="588.64" height="413.4"/>
        <g id="shelf">
        <rect id="shelf-2" data-name="shelf" class="cls-4" x="255.21" y="607.87" width="863.58" height="32.33"/>
        <rect class="cls-4" x="372.94" y="640.2" width="24.91" height="36.09"/>
        <rect class="cls-4" x="965.75" y="640.2" width="24.91" height="36.09"/>
        </g>
        <path id="window-frame" class="cls-5" d="M988.91,160.13h-616V607.87h616Zm-27.33,27.33V580.54H400.27V187.46Z"/>
        <g id="lamp" class="animated heartbeat 4s">
        <ellipse class="cls-6" cx="1019.91" cy="540.83" rx="107.31" ry="135.38"/>
        <g>
            <path class="cls-7" d="M1045.91,496.59c-.94-4.55-1.92-9.25-1.92-13.49,0-11.38-1.92-19.67-5.89-25.34-4.24-6.07-10.66-9-19.65-9s-15.41,2.95-19.65,9c-4,5.67-5.89,14-5.89,25.34,0,4.24-1,8.94-1.92,13.49-1.7,8.18-3.45,16.65,0,23.59l.21.43h4.42v-1.54h-3.46c-2.94-6.4-1.28-14.41.33-22.17,1-4.62,2-9.41,2-13.8,0-22.39,7.63-32.82,24-32.82s24,10.43,24,32.82c0,4.39,1,9.18,2,13.8,1.61,7.76,3.27,15.77.32,22.17h-3.45v1.54h4.41l.22-.43C1049.37,513.24,1047.61,504.77,1045.91,496.59Z"/>
            <path class="cls-8" d="M1004.46,537c-4.66,6.33-6.3,15.37-6.3,23,0,7.3,2.71,11.83,7,14.44h26.62c4.28-2.61,7-7.14,7-14.44,0-7.67-1.65-16.71-6.3-23Z"/>
            <path class="cls-9" d="M1021.66,566.28c0,4.25-1.44,4.79-3.21,4.79s-3.2-.54-3.2-4.79,3.2-13.51,3.2-13.51S1021.66,562,1021.66,566.28Z"/>
            <rect class="cls-10" x="995.19" y="590.74" width="46.53" height="12.2"/>
            <path class="cls-7" d="M1043.17,602.94H993.73a1.45,1.45,0,0,0-1.45,1.45v3.48h52.35v-3.48A1.46,1.46,0,0,0,1043.17,602.94Z"/>
            <rect class="cls-10" x="1003.91" y="526.8" width="29.08" height="3.42"/>
            <polygon class="cls-7" points="1014.09 501.15 1022.82 501.15 1035.9 504.06 1001 504.06 1014.09 501.15"/>
            <path class="cls-10" d="M1029.36,503.73h-21.81v8h21.81Zm-5.82,6.45h-10.18a2.18,2.18,0,0,1,0-4.36h10.18a2.18,2.18,0,1,1,0,4.36Z"/>
            <path class="cls-7" d="M1023.14,501.66h-9.37l-.14-.28c-.92-1.84-.92-4.27-.92-6.23,0-3.58,2.31-6,5.74-6s5.74,2.41,5.74,6c0,2,0,4.39-.91,6.22Zm-8.72-1h8.07a14.79,14.79,0,0,0,.68-5.48c0-3-1.85-5-4.72-5s-4.71,1.95-4.71,5A14.79,14.79,0,0,0,1014.42,500.63Z"/>
            <path class="cls-7" d="M1035,540.83h-1a46,46,0,0,1-10.5,21.43,39.6,39.6,0,0,1-5,4.7,40.21,40.21,0,0,1-5-4.7A46,46,0,0,1,1003,540.83h-1a45.65,45.65,0,0,0,15.74,26.75,39.53,39.53,0,0,1-14.78,6.92,5.62,5.62,0,0,0,2.34.45,40.52,40.52,0,0,0,13.24-6.73A40.57,40.57,0,0,0,1031.7,575a5.62,5.62,0,0,0,2.34-.45,39.57,39.57,0,0,1-14.79-6.92A45.6,45.6,0,0,0,1035,540.83Z"/>
            <polygon class="cls-7" points="1035.37 530.23 1001.54 530.23 996.23 540.83 1040.67 540.83 1035.37 530.23"/>
            <rect class="cls-11" x="1017" y="570.87" width="2.91" height="3.59"/>
            <polygon class="cls-10" points="1002.46 574.46 1009.73 577.37 1009.73 582.61 1027.18 582.61 1027.18 577.37 1034.45 574.46 1002.46 574.46"/>
            <path class="cls-7" d="M1052,576.24l-3.38-50.76a11.79,11.79,0,0,0-11.6-10.84h-5.45v-2.95h-26.17v2.95h-5.46a11.81,11.81,0,0,0-11.6,10.85l-3.38,50.75a11.31,11.31,0,0,0,10.08,12l3.6.63-3.42,1.92h17.52a5.85,5.85,0,0,0,11.49,0h17.52l-3.43-1.92,3.61-.63A11.3,11.3,0,0,0,1052,576.24Zm-10.92,4.3-13.38,2.34-.49-.27h-17.45l-.49.27-13-2.3-.34,0a3.62,3.62,0,0,1-3.24-3.79L996,526a4,4,0,0,1,3.92-3.66h5.46v1.56h-1.46l-2.91,2.9h34.9l-2.91-2.9h-1.45v-1.56H1037a4,4,0,0,1,3.93,3.66l3.38,50.76A3.62,3.62,0,0,1,1041.05,580.54Z"/>
            <path class="cls-10" d="M1018.45,585.3a4.32,4.32,0,1,0,4.32,4.31A4.32,4.32,0,0,0,1018.45,585.3Z"/>
        </g>
        </g>
        <g id="outside">
        <g class="cls-12">
            <g>
            <g id="HOLIDAY_CHEERS_" data-name="HOLIDAY CHEERS " class="cls-13">
                <text class="cls-14" transform="translate(432.61 442.33)">HOLI<tspan class="cls-15" x="62.39" y="0">D</tspan><tspan class="cls-16" x="81.57" y="0">A</tspan><tspan x="98.76" y="0">Y CHEE</tspan><tspan class="cls-17" x="190.4" y="0">R</tspan><tspan x="208.37" y="0">S!</tspan></text>
            </g>
            <g id="This_season_is_warm_and_full_of_joy." data-name="This season is warm and full of joy." class="cls-13">
                <text class="cls-18" transform="translate(412.87 412.38)">THIS S<tspan class="cls-19" x="43.05" y="0">E</tspan><tspan class="cls-20" x="50.79" y="0">A</tspan><tspan x="60.65" y="0">SON IS </tspan><tspan class="cls-21" x="109.3" y="0">W</tspan><tspan x="123.31" y="0">ARM AND FULL OF J</tspan><tspan class="cls-22" x="253.74" y="0">O</tspan><tspan class="cls-23" x="263.63" y="0">Y</tspan><tspan x="271.12" y="0">.</tspan></text>
            </g>
            <g id="From_all_of_us_here_at_company_short_" data-name="From all of us here at company short " class="cls-13">
                <text class="cls-24" transform="translate(398.37 464.01)">F<tspan class="cls-25" x="7.6" y="0">R</tspan><tspan x="16.86" y="0">OM ALL OF US HERE </tspan><tspan class="cls-26" x="153.53" y="0">A</tspan><tspan class="cls-27" x="162.33" y="0">T </tspan><tspan class="cls-28" x="174.19" y="0">[</tspan><tspan class="cls-29" x="178.81" y="0">C</tspan><tspan x="187.74" y="0">OM</tspan><tspan class="cls-30" x="209.48" y="0">P</tspan><tspan x="217.33" y="0">AN</tspan><tspan class="cls-31" x="237.32" y="0">Y</tspan><tspan class="cls-32" x="244.81" y="0">_</tspan><tspan x="251.66" y="0">SHO</tspan><tspan class="cls-33" x="280.96" y="0">R</tspan><tspan class="cls-34" x="290.02" y="0">T</tspan><tspan x="298.75" y="0">]</tspan></text>
            </g>
            <g id="background">
                <rect class="cls-35" x="330.66" y="185.57" width="705.24" height="396.51"/>
                <path class="cls-36" d="M1035.9,350.94V582.08H330.66V366.61c18.24-2.44,36.56,5,54.8,7.79,7.46,1.14,14.91,1.52,22.34.13,15.72-2.95,29.44-13.53,45.33-15.14,25.46-2.56,48.16,18.3,73.74,18.68,22.88.35,43.18-15.7,66-17.53,32.26-2.59,60.75,23.34,93.09,24.59,35.17,1.37,67.72-26.66,102.45-20.94,15.73,2.6,29.89,12,45.77,13.47,31.87,2.95,59.54-26.31,91.52-25.3,23.72.75,45.89,18.23,69.18,13.65,13.94-2.74,25.64-13.12,39.73-14.93C1035,351,1035.47,351,1035.9,350.94Z"/>
                <path class="cls-37" d="M1035.9,455.17V582.08H485.51c-11.75-13.93-12.27-33.68,9.81-39.92,12-3.41,25.9-1.35,38.23-2.77,19.36-2.24,37.8-8.61,56-15.41,36.68-13.67,73.37-27.8,107.3-47.34.59-.33,1.16-.67,1.74-1,15-8.72,29.47-18.36,45.26-25.51,16.17-7.31,33.41-11.91,50.75-15.66,27.18-5.88,55-9.81,82.75-8.89,22.16.72,44.09,4.51,65.92,8.29,31.26,5.39,62.65,10.82,92.57,21.27Z"/>
                <path class="cls-38" d="M953.27,582.08H330.66V429.36c104.21,6.23,243.75,19.22,367.89,46.27C805.9,499,901.74,532.93,953.27,582.08Z"/>
                <path class="cls-39" d="M540.87,366.54a49,49,0,0,0-7-3.69,34.19,34.19,0,0,0,4.84-2.17,1.16,1.16,0,0,0,.11-2c-1.26-.84-3.17-2.15-5.38-3.73l-2.07-1.5a27.94,27.94,0,0,0,5.31-5.49,1.41,1.41,0,0,0,.21-.45,1.24,1.24,0,0,0-1.25-1.54c-2.26.11-5.78-.39-9.94-3.21a27.27,27.27,0,0,1-3.28-2.61l-.32-.3a11.34,11.34,0,0,0,1.67-.09c2.75-.32,8.19-1.69,10.8-7.39a1.23,1.23,0,0,0-.86-1.72,38.69,38.69,0,0,1-13-5.75q-.66-.43-1.35-.93l0,0c-1.27-.9-2.58-2-3.9-3.11,0-.25,0-.49,0-.74a13.12,13.12,0,0,0,15.69-.77.68.68,0,0,0-.16-1.15,26,26,0,0,1-6.7-4.14c-.57-.48-1.13-1-1.67-1.52.3-.23.6-.48.91-.74a.53.53,0,0,0-.09-.85c-1-.55-2.85-1.69-4.71-3-.49-.69-1-1.39-1.42-2.12s-.77-1.35-1.14-2c2,.13,5-.43,7.5-4.15.26-.39-9.2-5.5-17.07-12.07a12.61,12.61,0,0,0,4.17-2.8.84.84,0,0,0-.16-1.33,45.76,45.76,0,0,1-20.05-28.12s-3.66-12.31-7.48,2c0,0-10,21.33-21.25,27.2a.84.84,0,0,0-.17,1.39,10.91,10.91,0,0,0,5,2.35,39.82,39.82,0,0,1-5.46,5.77c-2.44,2.05-5.11,3.52-7.68,3.38a.52.52,0,0,0-.48.77,9,9,0,0,0,7.94,5.19s-6.19,7.74-12.42,7.36a.53.53,0,0,0-.44.87,16.81,16.81,0,0,0,1.53,1.54l-.62.29a26.88,26.88,0,0,1-6.51,1.94.68.68,0,0,0-.51.93c2.28,5.09,8.81,6.47,13.43,6.31-3.35,4.33-10.66,5.35-15.71,6.39a.68.68,0,0,0-.37,1.11,19.53,19.53,0,0,0,13.59,6.47c-1.07,1-2.22,1.95-3.45,2.92a37.5,37.5,0,0,1-10.71,6.23c-.65.22-1.3.4-1.94.55a1.22,1.22,0,0,0-.74,1.9,27.58,27.58,0,0,0,4.75,5.22l.78.49c.17.11.34.2.51.3l.43.24c.26.14.53.27.8.4l.56.25c.47.2.94.38,1.43.54.22.08.44.14.66.21l.6.16.25.05.41.1.39.07.6.09a3.55,3.55,0,0,0,.47.06c-1.18.59-2.42,1.16-3.75,1.68a45.67,45.67,0,0,1-6.16,2c-.63.07-1,.07-1,.07l.12.14a49,49,0,0,1-5.2.89,17.07,17.07,0,0,0,6.9,5.83,1.23,1.23,0,0,0,.49,1.49c.45.3,1,.62,1.55,1a32.6,32.6,0,0,0,6.4,2.83c-2.71,2.91-6.69,6.83-10.35,9-.85.51-.68,1.49.16,2.06,5.1,3.47,24.22,10.22,37.16-3.72.54-.35,1.09-.71,1.63-1.11,1,2.2,5.83,10.85,21.53,13.86a1.24,1.24,0,0,0,1.54-1.37,28.8,28.8,0,0,1-.5-3.58c.73.13,1.45.26,2.24.35a1.19,1.19,0,0,0,1.3-1.48,29.63,29.63,0,0,1-1-8c3.5,2,14.67,7.28,27.82,3.6a1.15,1.15,0,0,0-.07-2.27,28.33,28.33,0,0,1-7.26-2.9,30.27,30.27,0,0,0,7.31-1.87,1.18,1.18,0,0,0-.24-2.26,27.21,27.21,0,0,1-4.15-1.11,37,37,0,0,0,15.41-2.79A1.12,1.12,0,0,0,540.87,366.54Z"/>
                <path class="cls-39" d="M399.49,370.91a38.18,38.18,0,0,1-15.93,2.89c.64.23,1.28.43,1.9.6.84.22,1.65.4,2.39.55a1.21,1.21,0,0,1,.25,2.33,30.48,30.48,0,0,1-7.56,1.93,29.19,29.19,0,0,0,7.51,3,1.2,1.2,0,0,1,.07,2.35c-13.59,3.8-25.14-1.69-28.75-3.72a30.24,30.24,0,0,0,1.05,8.25,1.22,1.22,0,0,1-1.35,1.52c-.81-.09-1.56-.22-2.32-.36a30.61,30.61,0,0,0,.52,3.71,1.28,1.28,0,0,1-1.58,1.41c-16.23-3.11-21.23-12.05-22.26-14.33-.56.42-1.12.8-1.69,1.15-.36.38-.71.75-1.08,1.1v-104a127.4,127.4,0,0,0,10.39-17.64c4.49-16.84,8.82-2.33,8.82-2.33a53.93,53.93,0,0,0,23.64,33.16,1,1,0,0,1,.19,1.58l0,0c4.76,3.19,8.45,5.32,8.29,5.57-2.56,3.84-5.69,4.42-7.75,4.28.38.73.76,1.44,1.18,2.12s1,1.48,1.46,2.19c1.92,1.38,3.88,2.55,4.87,3.13a.54.54,0,0,1,.09.87c-.31.28-.63.53-.94.77.57.55,1.14,1.07,1.73,1.57a27.08,27.08,0,0,0,6.93,4.28.7.7,0,0,1,.16,1.19,13.56,13.56,0,0,1-16.21.8c0,.26,0,.52,0,.79,1.36,1.19,2.72,2.25,4,3.19l0,0c.47.34.93.65,1.39,1a40.18,40.18,0,0,0,13.44,5.94,1.29,1.29,0,0,1,.89,1.78c-2.71,5.89-8.33,7.3-11.17,7.63a12.47,12.47,0,0,1-1.72.11l.33.3a30,30,0,0,0,3.39,2.7c4.3,2.91,7.93,3.43,10.27,3.32a1.28,1.28,0,0,1,1.3,1.59,1.25,1.25,0,0,1-.23.46,29,29,0,0,1-5.48,5.68l2.14,1.55c2.28,1.63,4.26,3,5.56,3.85a1.2,1.2,0,0,1-.12,2.07,34.71,34.71,0,0,1-5,2.24,52.19,52.19,0,0,1,7.23,3.81A1.16,1.16,0,0,1,399.49,370.91Z"/>
                <path class="cls-39" d="M838,369.25a36.14,36.14,0,0,0-5-2.62,24.67,24.67,0,0,0,3.43-1.53.82.82,0,0,0,.08-1.42c-.89-.6-2.25-1.53-3.81-2.64L831.23,360a19.38,19.38,0,0,0,3.78-3.87.74.74,0,0,0,.15-.31.88.88,0,0,0-.88-1.1,11.53,11.53,0,0,1-7-2.27,20.82,20.82,0,0,1-2.32-1.85l-.23-.21a7.8,7.8,0,0,0,1.18-.07,9.35,9.35,0,0,0,7.66-5.24.84.84,0,0,0,.08-.31.88.88,0,0,0-.69-.9,27.58,27.58,0,0,1-9.21-4.08c-.31-.21-.64-.42-1-.66l0,0c-.89-.63-1.81-1.38-2.74-2.19,0-.18,0-.35,0-.54a9.29,9.29,0,0,0,11.12-.54A.49.49,0,0,0,831,335,18.82,18.82,0,0,1,826.2,332c-.4-.35-.8-.71-1.19-1.09.22-.17.43-.32.66-.52a.37.37,0,0,0-.07-.6c-.67-.39-2-1.2-3.34-2.14-.34-.49-.69-1-1-1.5s-.55-1-.81-1.45a5.78,5.78,0,0,0,5.32-2.94c.18-.28-6.52-3.9-12.1-8.56a9,9,0,0,0,3-2,.6.6,0,0,0-.12-.94,32.48,32.48,0,0,1-14.21-19.93s-2.59-8.72-5.29,1.4c0,0-7.07,15.11-15.07,19.27a.6.6,0,0,0-.12,1,7.77,7.77,0,0,0,3.54,1.66,27.85,27.85,0,0,1-3.86,4.09c-1.73,1.45-3.63,2.5-5.45,2.4a.37.37,0,0,0-.34.54,6.35,6.35,0,0,0,5.63,3.68s-4.39,5.49-8.8,5.22a.37.37,0,0,0-.31.61,12.07,12.07,0,0,0,1.08,1.09l-.44.21a19,19,0,0,1-4.61,1.37.48.48,0,0,0-.36.67c1.61,3.6,6.24,4.58,9.52,4.46-2.38,3.08-7.56,3.8-11.14,4.54a.47.47,0,0,0-.26.78,13.89,13.89,0,0,0,9.62,4.59c-.75.68-1.56,1.38-2.44,2.06a26.66,26.66,0,0,1-7.59,4.42c-.46.15-.91.28-1.37.39a.87.87,0,0,0-.53,1.35,19.91,19.91,0,0,0,3.37,3.69l.56.35.35.21.31.17.57.29.4.18c.33.14.66.27,1,.38l.46.14c.14.05.29.08.43.12l.18,0c.1,0,.19.05.29.06l.27.05.43.07.32,0-.2.12c-.77.37-1.59.74-2.44,1.07a34.17,34.17,0,0,1-4.38,1.39,6.55,6.55,0,0,1-.68.05l.08.09a31.77,31.77,0,0,1-3.68.64,12.08,12.08,0,0,0,4.92,4.15.84.84,0,0,0,.31,1c.32.21.69.44,1.1.68a23.26,23.26,0,0,0,4.54,2,37.55,37.55,0,0,1-7.33,6.37c-.61.36-.49,1.05.11,1.46,3.61,2.46,17.16,7.24,26.33-2.64.38-.24.77-.5,1.15-.78.71,1.56,4.14,7.68,15.26,9.82a.88.88,0,0,0,1.09-1,22,22,0,0,1-.35-2.54c.51.09,1,.18,1.58.25a.85.85,0,0,0,.93-1.05,20.84,20.84,0,0,1-.72-5.65c2.48,1.39,10.39,5.15,19.71,2.55a.83.83,0,0,0,0-1.62,20,20,0,0,1-5.13-2A20.79,20.79,0,0,0,830,375a.83.83,0,0,0-.16-1.59,20.65,20.65,0,0,1-2.91-.79,26.17,26.17,0,0,0,10.89-2A.8.8,0,0,0,838,369.25Z"/>
                <g>
                <path class="cls-40" d="M933.44,361.81a59.8,59.8,0,0,0-8.29-4.37,40.47,40.47,0,0,0,5.73-2.57,1.38,1.38,0,0,0,.13-2.37c-1.49-1-3.76-2.55-6.37-4.41l-2.45-1.78a32.89,32.89,0,0,0,6.28-6.5,1.35,1.35,0,0,0,.25-.53,1.46,1.46,0,0,0-1.47-1.82c-2.69.12-6.85-.47-11.78-3.81a32.91,32.91,0,0,1-3.88-3.09l-.38-.35a14.25,14.25,0,0,0,2-.11c3.25-.38,9.69-2,12.79-8.75a1.47,1.47,0,0,0-1-2,45.66,45.66,0,0,1-15.39-6.81c-.53-.35-1.06-.71-1.6-1.1l-.05,0c-1.5-1.07-3-2.29-4.62-3.66,0-.3,0-.6,0-.91a15.52,15.52,0,0,0,18.58-.91.8.8,0,0,0-.19-1.36,31.07,31.07,0,0,1-7.94-4.9c-.67-.57-1.33-1.17-2-1.8.36-.27.71-.56,1.07-.88a.63.63,0,0,0-.1-1c-1.13-.65-3.38-2-5.58-3.57-.58-.82-1.15-1.64-1.68-2.51s-.92-1.6-1.35-2.43c2.37.15,6-.51,8.88-4.91.19-.29-4-2.72-9.49-6.37l0,0a1.16,1.16,0,0,0-.22-1.81,61.78,61.78,0,0,1-27.09-38s-4.94-16.64-10.1,2.66a143.32,143.32,0,0,1-13.72,22.69A37,37,0,0,1,847.8,266a67.91,67.91,0,0,1-4.54,5.74,31.27,31.27,0,0,1-5.83,4.05,1.11,1.11,0,0,0-.4,1.63,11.8,11.8,0,0,1-7.08,2.48.61.61,0,0,0-.57.9c1,2,3.82,6.15,9.41,6.15,0,0-7.33,9.17-14.71,8.72a.62.62,0,0,0-.52,1,20.33,20.33,0,0,0,1.81,1.83l-.73.34a31.68,31.68,0,0,1-7.71,2.3.8.8,0,0,0-.6,1.11c2.69,6,10.43,7.65,15.9,7.46-4,5.14-12.63,6.34-18.61,7.57a.8.8,0,0,0-.43,1.32,23.19,23.19,0,0,0,16.09,7.66c-1.26,1.14-2.63,2.31-4.09,3.46a44.66,44.66,0,0,1-12.69,7.37,21.83,21.83,0,0,1-2.29.65,1.46,1.46,0,0,0-.88,2.26,33.1,33.1,0,0,0,5.63,6.17c.31.2.61.4.93.59l.59.35.52.28c.31.17.62.32,1,.48l.66.3c.55.23,1.11.45,1.7.64.25.09.51.16.77.24l.72.19.29.07.49.11.45.08.71.11.58.07,0,0c-1.39.69-2.86,1.36-4.41,2a55.85,55.85,0,0,1-7.3,2.32,8.93,8.93,0,0,1-1.16.08l.14.17a59.92,59.92,0,0,1-6.15,1.06,20.17,20.17,0,0,0,8.17,6.9,1.44,1.44,0,0,0,.57,1.76c.54.36,1.15.74,1.84,1.14a38.61,38.61,0,0,0,7.58,3.35c-3.21,3.45-7.93,8.09-12.25,10.63-1,.6-.81,1.76.18,2.44,6,4.1,28.59,12.07,43.91-4.31.68-.43,1.36-.89,2-1.39,1.2,2.64,6.94,12.84,25.49,16.39a1.46,1.46,0,0,0,1.82-1.61,35.12,35.12,0,0,1-.59-4.25c.86.16,1.72.31,2.65.42a1.42,1.42,0,0,0,1.55-1.75,34.69,34.69,0,0,1-1.21-9.45c4.17,2.34,17.39,8.61,32.94,4.26a1.37,1.37,0,0,0-.08-2.69,33.56,33.56,0,0,1-8.6-3.44,34.75,34.75,0,0,0,8.65-2.21,1.39,1.39,0,0,0-.27-2.67,33.25,33.25,0,0,1-4.92-1.31,43.72,43.72,0,0,0,18.25-3.31A1.33,1.33,0,0,0,933.44,361.81Z"/>
                <path class="cls-40" d="M628.36,252.84a6.19,6.19,0,0,0-2.17.39,10,10,0,0,0-9-5.35,10.5,10.5,0,0,0-5.67,1.64,9.92,9.92,0,0,0-9.36-6.08,10.32,10.32,0,0,0-6.8,2.49,17.22,17.22,0,0,0-20.69-.67c-1.68-2.91-5.75-5-10.5-5-6.26,0-11.34,3.57-11.34,8v.12A10.58,10.58,0,0,0,550,248c-5.2,0-9.47,3.69-9.88,8.39a6.21,6.21,0,0,0-3.3-.94,5.37,5.37,0,1,0,0,10.71,6.13,6.13,0,0,0,3-.77c.23,4.21,4,7.56,8.63,7.56a9.15,9.15,0,0,0,5.08-1.51A12.56,12.56,0,0,0,564,276.88a13.23,13.23,0,0,0,5.72-1.29,9,9,0,0,0,15.52-.58,8.85,8.85,0,0,0,7.11,3.44,8.72,8.72,0,0,0,7.84-4.6,9.21,9.21,0,0,0,3.5.68c4.78,0,8.65-3.57,8.65-8a7.89,7.89,0,0,0-.16-1.54l.13,0a10.56,10.56,0,0,0,4.85,1.17,10.19,10.19,0,0,0,7.87-3.58,6.14,6.14,0,0,0,3.33,1,5.38,5.38,0,1,0,0-10.72Z"/>
                <path class="cls-40" d="M435.39,220.68a3.71,3.71,0,0,0-1.3.24,6,6,0,0,0-5.42-3.22,6.31,6.31,0,0,0-3.41,1,5.94,5.94,0,0,0-5.61-3.65,6.24,6.24,0,0,0-4.08,1.49,10.34,10.34,0,0,0-12.41-.39c-1-1.75-3.45-3-6.3-3-3.76,0-6.81,2.14-6.81,4.78V218a6.34,6.34,0,0,0-1.7-.23,5.78,5.78,0,0,0-5.93,5,3.67,3.67,0,0,0-2-.57,3.23,3.23,0,1,0,0,6.43,3.66,3.66,0,0,0,1.79-.46,5,5,0,0,0,5.18,4.54,5.51,5.51,0,0,0,3-.91,7.56,7.56,0,0,0,6.31,3.26,7.79,7.79,0,0,0,3.43-.78,5.28,5.28,0,0,0,4.57,2.5,5.2,5.2,0,0,0,4.74-2.85,5.32,5.32,0,0,0,4.27,2.07,5.24,5.24,0,0,0,4.71-2.76,5.57,5.57,0,0,0,2.1.41,5,5,0,0,0,5.19-4.79,4.71,4.71,0,0,0-.1-.92h.08a6.38,6.38,0,0,0,2.91.7,6.12,6.12,0,0,0,4.72-2.15,3.66,3.66,0,0,0,2,.58,3.23,3.23,0,1,0,0-6.43Z"/>
                <path class="cls-40" d="M803.75,225.45a3.75,3.75,0,0,0-1.3.24,6,6,0,0,0-5.42-3.22,6.3,6.3,0,0,0-3.4,1,5.94,5.94,0,0,0-5.61-3.65,6.22,6.22,0,0,0-4.08,1.49,10.36,10.36,0,0,0-12.42-.39c-1-1.75-3.45-3-6.3-3-3.76,0-6.8,2.14-6.8,4.78v.07a6.34,6.34,0,0,0-1.7-.23,5.79,5.79,0,0,0-5.94,5,3.64,3.64,0,0,0-2-.57,3.23,3.23,0,1,0,0,6.43,3.72,3.72,0,0,0,1.79-.46,5,5,0,0,0,5.18,4.54,5.45,5.45,0,0,0,3-.91,7.57,7.57,0,0,0,6.32,3.26,8,8,0,0,0,3.43-.78,5.4,5.4,0,0,0,9.31-.35,5.32,5.32,0,0,0,4.27,2.07,5.22,5.22,0,0,0,4.7-2.76,5.61,5.61,0,0,0,2.1.41,5,5,0,0,0,5.19-4.79,4.7,4.7,0,0,0-.09-.92h.07a6.41,6.41,0,0,0,2.91.7,6.13,6.13,0,0,0,4.73-2.15,3.61,3.61,0,0,0,2,.58,3.23,3.23,0,1,0,0-6.43Z"/>
                <path class="cls-40" d="M1026.62,236.56a6.66,6.66,0,0,0-2.3.41,10.62,10.62,0,0,0-9.59-5.68,11.07,11.07,0,0,0-6,1.75,10.52,10.52,0,0,0-9.93-6.47,11,11,0,0,0-7.22,2.65,18.29,18.29,0,0,0-22-.71c-1.8-3.09-6.11-5.26-11.15-5.26-6.65,0-12,3.78-12,8.46v.12a11.45,11.45,0,0,0-3-.4c-5.53,0-10.06,3.92-10.5,8.91a6.52,6.52,0,0,0-3.5-1,5.71,5.71,0,1,0,0,11.38,6.44,6.44,0,0,0,3.17-.82c.25,4.47,4.26,8,9.17,8a9.72,9.72,0,0,0,5.39-1.61,13.35,13.35,0,0,0,11.17,5.77,13.91,13.91,0,0,0,6.07-1.38,9.54,9.54,0,0,0,16.47-.61,9.4,9.4,0,0,0,7.55,3.65,9.25,9.25,0,0,0,8.32-4.88,9.94,9.94,0,0,0,3.72.72c5.07,0,9.18-3.78,9.18-8.46a8,8,0,0,0-.17-1.63l.13,0a11.24,11.24,0,0,0,5.16,1.25,10.87,10.87,0,0,0,8.36-3.8,6.52,6.52,0,0,0,3.53,1,5.7,5.7,0,1,0,0-11.37Z"/>
                </g>
                <g id="christmas-tree">
                <g>
                    <path class="cls-41" d="M780,492.93c-23.87,9.7-42.21,2.44-42.8,2.21,2.68,10.34,14.88,15.17,23,17.27a2.06,2.06,0,0,1,.13,4.05c-28.42,7.93-51.7-7.64-51.7-7.64-3.87,8.84-2.57,18.93-1.55,23.84a2.21,2.21,0,0,1-2.74,2.43c-32.21-6.16-38.81-25.62-38.81-25.62-23,28.67-59.38,15.95-68.82,9.53-1.5-1-1.8-2.77-.28-3.67,10.75-6.33,23.17-21.25,24.21-22.5-19.32,1.85-28.55-6.78-33.12-13.29a86.48,86.48,0,0,0,42.36-17,96.57,96.57,0,0,1,31.39-16.07c26.2-7.58,42.48-3.58,53.89.84a83.58,83.58,0,0,1,31,21.2c10.08,10.86,27.47,15.86,34.3,20.89A2,2,0,0,1,780,492.93Z"/>
                    <path class="cls-42" d="M776.59,478.94c-21.23,11.55-38.63,5.8-39.19,5.62,3.23,10.07,14.8,13.89,22.46,15.33a2.08,2.08,0,0,1,.42,4c-16.8,6.68-32.3,3.08-40.95-.17a48.38,48.38,0,0,1-7.16-3.3,31.76,31.76,0,0,0-1.31,6.5,50,50,0,0,0,1.65,17.33,2.14,2.14,0,0,1-2.34,2.64c-30.07-3.55-37.57-22.38-37.57-22.38C653,525,629.77,519.18,620.92,515.86a2.08,2.08,0,0,1-.53-3.63,61.47,61.47,0,0,0,8.43-8.14,151.31,151.31,0,0,0,12.23-16.25c-12.89,6.23-23.15,5-30.75,1.3a39,39,0,0,1-13.72-11.45s6.88.14,17-5.21a74.54,74.54,0,0,0,17.61-13.32l12.05-14.81C661.51,420,691.86,423.79,713,430.61a75.83,75.83,0,0,1,30.06,18.61c6.68,6.62,16.37,14,24.09,19.51,3.94,2.81,7.35,5.14,9.6,6.64A2.07,2.07,0,0,1,776.59,478.94Z"/>
                    <g>
                    <path class="cls-43" d="M620.92,515.86a2.07,2.07,0,0,1-.53-3.62c9.84-7.48,20.67-24.41,20.67-24.41a44.86,44.86,0,0,1-11,3.73c-.87,1.33-11.19,17.16-20.61,24.31a2.08,2.08,0,0,0,.53,3.63c6.81,2.55,22.18,6.56,37.83-1.08A51.16,51.16,0,0,1,620.92,515.86Z"/>
                    <path class="cls-43" d="M629.84,491.6c-17.49,3.23-28.61-7.83-33.26-13.91,0,0,15.73.32,34.59-18.54l12.06-14.8a45.3,45.3,0,0,1,16.93-14A45.39,45.39,0,0,0,632.32,448l-12.05,14.81s-15.12,15.4-32.83,15.18a2.09,2.09,0,0,0-1.77,3.35C591.23,488.59,606,503,629.84,491.6Z"/>
                    <path class="cls-43" d="M737.39,484.55a17,17,0,0,0,2.76,5.2,56.05,56.05,0,0,0,21-4.93C747.2,488,737.39,484.55,737.39,484.55Z"/>
                    <path class="cls-43" d="M712.18,500.43a32.48,32.48,0,0,0-1.42,7.75c9,3,23.24,5.47,38.62-.64a2.25,2.25,0,0,0,1-.78C729.17,510.69,712.18,500.43,712.18,500.43Z"/>
                    <path class="cls-43" d="M701,525.18c-22.41-5.8-28.35-20.66-28.35-20.66a50.92,50.92,0,0,1-8.77,7.37c3.9,5.68,13.85,16.09,35.44,18.64a2.13,2.13,0,0,0,2.34-2.63C701.4,527.12,701.17,526.2,701,525.18Z"/>
                    </g>
                    <path class="cls-41" d="M767.19,468.73c-22,16.93-44.65-2.4-45.63-3.25l0,0c-3.75,9.63-2.76,30.22-2.19,38.28,0,.39.06.75.08,1.08a2.22,2.22,0,0,1-2.14,2.37,44.58,44.58,0,0,1-6.41-.25,37.62,37.62,0,0,1-20.43-8.78c-12.16-10.25-15.87-25.56-15.87-25.56-.56,1-1.11,2-1.67,3-13.93,24.08-30.38,29.58-44.07,28.5-10.72-.82-19.75-5.68-24.5-8.78a2.32,2.32,0,0,1-.86-1,2.21,2.21,0,0,1,1.3-2.9c2-.7,3.81-1.45,5.54-2.25,14.89-6.85,21.28-16.42,21.28-16.42a33.18,33.18,0,0,1-7,1.22,29.19,29.19,0,0,1-11.05-1.46,74.54,74.54,0,0,0,17.61-13.32l12.05-14.81C661.51,420,691.86,423.79,713,430.61a75.83,75.83,0,0,1,30.06,18.61C749.78,455.84,759.47,463.22,767.19,468.73Z"/>
                    <path class="cls-42" d="M773.35,455.48a2.37,2.37,0,0,1-.39.8c-19.68,26.26-42.63,15.06-51.4,9.2l0,0a35.88,35.88,0,0,1-3.63-2.72c-3.94,10.09-2.66,32.24-2.11,39.36a2.22,2.22,0,0,1-2.14,2.37,38.9,38.9,0,0,1-23.21-6.31c-9.72-6.44-15-16.34-17.54-22.56a43.42,43.42,0,0,1-2-5.72c-23.19,43.27-54.23,32-67.46,24.42-1-.61-2-1.18-2.78-1.71a2.19,2.19,0,0,1,.45-3.91,61.25,61.25,0,0,0,23.48-14.73c.79-.83,1.44-1.56,1.94-2.15.94-1.12,1.39-1.79,1.39-1.79a31.89,31.89,0,0,1-8.77,1.27c-.47,0-.93,0-1.4,0h-.1c-.39,0-.78,0-1.17-.08l-.4-.05c-.32,0-.63-.06-.94-.1s-.72-.11-1.07-.18-.47-.08-.69-.12-.49-.1-.73-.17l-.45-.1c-.36-.09-.72-.18-1.08-.29s-.78-.23-1.16-.36c-.88-.28-1.73-.61-2.55-1l-1-.45c-.49-.24-1-.47-1.43-.72l-.78-.42-.9-.53c-.47-.29-.94-.58-1.39-.88a49.28,49.28,0,0,1-8.49-9.3,2.19,2.19,0,0,1,1.33-3.4,30.31,30.31,0,0,0,3.45-1c6.66-2.24,13.32-6.52,19.12-11.09a137.68,137.68,0,0,0,18.06-17.28c9.29-14.83,18.33-25.07,26.81-32,16.71-13.65,37.43-13.87,54.34-2.27a59.7,59.7,0,0,1,7.71,7.57A98.5,98.5,0,0,0,742,413.47l.07.06c.81.58,1.62,1.13,2.41,1.65,10.34,6.84,19,9.37,23.19,10.25a2.2,2.2,0,0,1,1.73,2.27,2,2,0,0,1-.19.79c-4.67,10.16-14.37,12.6-19.28,13.17a20.12,20.12,0,0,1-3,.17l.57.53a50.07,50.07,0,0,0,5.85,4.65c7.43,5,13.7,5.91,17.74,5.72A2.22,2.22,0,0,1,773.35,455.48Z"/>
                    <g>
                    <path class="cls-43" d="M637.22,415.58a152.82,152.82,0,0,1,17.28-23c-7.28,6.73-14.91,15.95-22.73,28.42,0,0-1.38,1.64-3.76,4.15A131,131,0,0,0,637.22,415.58Z"/>
                    <path class="cls-43" d="M767.3,431.86a26.72,26.72,0,0,1-11.92,4.35,22,22,0,0,1-3,.17l.57.53c1.26,1.15,2.5,2.18,3.71,3.11A22.18,22.18,0,0,0,767.3,431.86Z"/>
                    <path class="cls-43" d="M633.39,464.54a40.41,40.41,0,0,1-6.84,7.25c.94-1.12,1.39-1.79,1.39-1.79a31.89,31.89,0,0,1-8.77,1.27c-.47,0-.93,0-1.4,0h-.1c-.39,0-.78,0-1.17-.08l-.4-.05c-.32,0-.63-.06-.94-.1s-.72-.11-1.07-.18-.47-.08-.69-.12-.49-.1-.73-.17l-.45-.1c-.36-.09-.72-.18-1.08-.29s-.78-.23-1.16-.36c-.88-.28-1.73-.61-2.55-1l-1-.45c-.49-.24-1-.47-1.43-.72l-.78-.42-.9-.53c-.47-.29-.94-.58-1.39-.88a49.28,49.28,0,0,1-8.49-9.3,2.19,2.19,0,0,1,1.33-3.4,30.31,30.31,0,0,0,3.45-1C604.44,459.39,616.51,469.37,633.39,464.54Z"/>
                    <path class="cls-43" d="M723.34,457.28a36.15,36.15,0,0,0-1.9,8.11c8.33,5.61,29.87,16.34,49.06-6C747.54,478.78,723.34,457.28,723.34,457.28Z"/>
                    <path class="cls-43" d="M606.14,487.13a1.94,1.94,0,0,1-.37-.32c-1.47.65-3,1.27-4.64,1.86a2.19,2.19,0,0,0-.45,3.91c9.56,6.22,36.28,19.54,59.5-6.88C638.37,504.65,615,492.86,606.14,487.13Z"/>
                    <path class="cls-43" d="M676.38,464.42q-2.31,4.31-4.72,7.9c2.69,8,13.37,33,42,32.14a2.22,2.22,0,0,0,2.14-2.37c-.06-.84-.14-1.9-.21-3.12C684.41,497.54,676.38,464.42,676.38,464.42Z"/>
                    </g>
                    <path class="cls-41" d="M749.93,441.66a1.36,1.36,0,0,1-.3.13q-1.05.31-2.1.57A45.89,45.89,0,0,1,710,435.87c-3,10.54-5.6,21.46-3.57,33.6a1.21,1.21,0,0,1-1.41,1.36c-23.4-3.86-29.86-21.2-32.51-30.82-8.87,17.66-28.22,23.45-44.58,20.53a1.22,1.22,0,0,1-.67-2,95.1,95.1,0,0,0,15.27-21.22c-8.26,5.22-19.33,5.23-28.78,1A136.65,136.65,0,0,0,631.77,421c9.29-14.82,18.33-25.06,26.81-32,20.69-16.9,47.54-13.21,65.68,8a97.15,97.15,0,0,0,20.22,18.11,23.61,23.61,0,0,1-6.71-3.12c-.45,11.07,6.05,20.19,12.46,27.81A1.19,1.19,0,0,1,749.93,441.66Z"/>
                    <path class="cls-42" d="M735,406.61c-.44,11.07,6.05,20.18,12.47,27.81a1.2,1.2,0,0,1-.6,1.92,46.13,46.13,0,0,1-39.69-5.92c-3,10.54-5.6,21.46-3.57,33.6a1.2,1.2,0,0,1-1.41,1.36c-23.39-3.86-29.85-21.2-32.51-30.82-8.86,17.66-28.22,23.45-44.58,20.53a1.22,1.22,0,0,1-.66-2,95.39,95.39,0,0,0,15.26-21.22c-12.11,7.66-30.26,4.09-40.5-7.53a1.21,1.21,0,0,1,.65-2c9-1.85,22.05-3.67,28-11.39-8.24.28-19.9-2.18-24-11.24a1.21,1.21,0,0,1,.91-1.67,46.78,46.78,0,0,0,11.61-3.45q1.26-.56,2.52-1.17a70,70,0,0,0,18.45-13.27,64.12,64.12,0,0,0,9.09-11.32c39.58-63.48,87.34,3.6,87.34,3.6a69.36,69.36,0,0,0,4.44,8.68,62.2,62.2,0,0,0,6.59,9,55.33,55.33,0,0,0,5.86,5.72,46.49,46.49,0,0,0,12,7.39,1.19,1.19,0,0,1,.28,2A23.42,23.42,0,0,1,735,406.61Z"/>
                    <g>
                    <path class="cls-43" d="M703.11,459.58c-21.88-4.45-28.07-21.11-30.65-30.47-8.87,17.65-28.22,23.45-44.58,20.52a1,1,0,0,1-.26-.08q-1.53,1.79-3.13,3.51a1.22,1.22,0,0,0,.66,2c16.36,2.92,35.72-2.87,44.58-20.53,2.66,9.62,9.12,27,32.51,30.82a1.2,1.2,0,0,0,1.41-1.36Q703.28,461.77,703.11,459.58Z"/>
                    <path class="cls-43" d="M627.94,410.94a13.73,13.73,0,0,0,5.45-4.54c-7.23.24-19.8-2.53-24.86-9.1-1.22.3-2.44.55-3.64.73a1.21,1.21,0,0,0-.91,1.67C607.42,407.37,617,411.85,627.94,410.94Z"/>
                    <path class="cls-43" d="M639.17,432.18c1.16-1.86,2.26-3.78,3.31-5.79-11.17,7.07-27.48,4.57-38-5l-4.6.91a1.21,1.21,0,0,0-.65,2C609.33,435.75,627.07,439.38,639.17,432.18Z"/>
                    <path class="cls-43" d="M745.46,431.93A45.78,45.78,0,0,1,710,425c-.57,2-1.13,4.08-1.65,6.15a46.21,46.21,0,0,0,38.61,5.22,1.2,1.2,0,0,0,.6-1.92C746.82,433.61,746.14,432.77,745.46,431.93Z"/>
                    <path class="cls-43" d="M762.75,403.19c-.46-.19-.92-.4-1.38-.61a23.15,23.15,0,0,1-23.6-1.43,27.18,27.18,0,0,0,.73,7.38,23.48,23.48,0,0,0,24.53-3.3A1.19,1.19,0,0,0,762.75,403.19Z"/>
                    </g>
                    <path class="cls-41" d="M725.16,397.31c1.88,6.85,7.47,11.71,8.63,17.57.13.68-1.06,1.47-1.75,1.58-18.34,3.17-31.42-12.79-31.42-12.79.6,11.06,4.68,18.58,6.36,22.72a1.83,1.83,0,0,1-2.14,2.42c-24.1-3.37-29.65-22.41-29.65-22.41-11.5,21.38-30.74,18.52-37.34,17.51a.94.94,0,0,1-.46-1.64c7.76-6.92,12.78-20.9,12.93-21.33-18,9.05-29.69-1.46-33.63-6a.87.87,0,0,1-.19-.37q1.26-.56,2.52-1.17c10.57-.57,20.62-13.12,20.62-13.12a16.8,16.8,0,0,1-2.17-.15,64.12,64.12,0,0,0,9.09-11.32c39.58-63.48,90.13,9.55,91.78,12.28a12.92,12.92,0,0,1-4.05-.81c1.41,3.1,14.45,13.79,16.5,15.51C736.06,407.31,725.16,397.31,725.16,397.31Z"/>
                    <path class="cls-42" d="M749.43,391.78c-18.15,15.73-29.93-.87-29.93-.87,1.88,6.85,8.89,17,11.35,20.44a1,1,0,0,1-.62,1.48c-18.35,3.16-32.1-14.56-32.1-14.56.59,11.06,4.39,21.53,6.07,25.66a1,1,0,0,1-1.18,1.25c-23.09-7.67-27.79-23.95-27.79-23.95-11.49,21.38-32.6,20.06-39.19,19a.94.94,0,0,1-.47-1.64c7.76-6.93,12.79-20.9,12.93-21.34-18,9.05-29.69-1.45-33.62-6a.94.94,0,0,1,.78-1.55c11.12.68,22.17-13.12,22.17-13.12-8.42,0-12.64-6.25-14.18-9.25a.93.93,0,0,1,.86-1.36c4.58.24,9.35-2.38,13.72-6a82.18,82.18,0,0,0,13.17-14.9,59.89,59.89,0,0,0,15.44-18.07A30.61,30.61,0,0,1,681,321.6a30.18,30.18,0,0,1,20.83,5.76c7,20,48.62,41.63,47.91,42.7-7.27,10.9-17.22,6.59-17.22,6.59,2.23,4.92,13.22,11.55,16.81,13.61A1,1,0,0,1,749.43,391.78Z"/>
                    <g>
                    <path class="cls-43" d="M648.15,398.12a76.36,76.36,0,0,0,3.08-7.18c-17.84,8.19-27.51,3.3-33.24-1.24a12.94,12.94,0,0,1-2.33.07.94.94,0,0,0-.78,1.55C618.51,395.5,627.94,407.31,648.15,398.12Z"/>
                    <path class="cls-43" d="M702.63,419.75a.93.93,0,0,1-.52,0c-23.09-7.67-27.79-24-27.79-24-9.85,18.31-26.74,20-35.53,19.43a29.3,29.3,0,0,1-3.22,3.43.94.94,0,0,0,.47,1.64c6.59,1,27.7,2.33,39.19-19,0,0,4.7,16.28,27.79,23.95a1,1,0,0,0,1.18-1.25C703.79,422.9,703.23,421.48,702.63,419.75Z"/>
                    <path class="cls-43" d="M749.28,390.26c-.79-.45-1.94-1.13-3.26-1.95-16.72,12.2-27.43-2.85-27.43-2.85a41.78,41.78,0,0,0,3.66,8.36c4.48,3.92,14.2,9.2,27.18-2A1,1,0,0,0,749.28,390.26Z"/>
                    <path class="cls-43" d="M728.21,407.53c-17.78,2.29-31-14.71-31-14.71a67.46,67.46,0,0,0,1.33,10c-.19-1.5-.34-3-.42-4.57,0,0,13.75,17.72,32.1,14.56a1,1,0,0,0,.62-1.48C730.22,410.47,729.28,409.13,728.21,407.53Z"/>
                    </g>
                    <path class="cls-41" d="M735.3,360.36c-10.75,9.7-23.77,5.15-23.77,5.15,0,8,2.72,10.9,1.93,20.34-.11,1.35-.18,2.66-1.52,2.85C692.22,391.41,684.53,373,684.53,373c-9.87,14.9-29.33,12.54-38.53,9.39-1.53-.53-1.76-2.2-.73-3.45a98,98,0,0,0,10.84-16.11c-14,2.22-16.72-1.74-17.88-2.77a82.18,82.18,0,0,0,13.17-14.9,59.89,59.89,0,0,0,15.44-18.07A30.61,30.61,0,0,1,681,321.6a30.18,30.18,0,0,1,20.83,5.76c4.32,8.06,11.07,14.79,17.52,19.92,1,.76,1.92,1.5,2.87,2.19C726.6,353.79,735.36,360.33,735.3,360.36Z"/>
                    <path class="cls-42" d="M733,356.16c-12.56,9.55-27.41,3.9-27.41,3.9,0,8,4,17.05,6,21.24a2,2,0,0,1-1.53,2.86c-19.72,2.7-27.4-15.74-27.4-15.74-9.88,14.9-25,13.14-32.17,11.2a2,2,0,0,1-.74-3.45c7.36-5.95,10.84-17.93,10.84-17.93-15.25,5.94-24.6-2.25-27.88-6.56a2,2,0,0,1,1.08-3.1,46.44,46.44,0,0,0,13.57-6.43,59.51,59.51,0,0,0,19.27-22.88c.25-.55.51-1.07.77-1.58a51.29,51.29,0,0,1,6.17-9.93c13.61-16.41,23.21,7.57,23.21,7.57,3.43,11.43,12.29,20.76,20.65,27.4a105.51,105.51,0,0,0,15.28,10.09A2,2,0,0,1,733,356.16Z"/>
                    <g>
                    <path class="cls-43" d="M660.65,358.24c2.72-2.72,2.72-4.54,2.72-4.54-14.4,5.61-26.36-.5-30-4.92a2,2,0,0,0-.6,2.9C636,355.88,645.2,364.6,660.65,358.24Z"/>
                    <path class="cls-43" d="M711.07,380.11a2,2,0,0,1-1,.41c-19.72,2.71-27.4-15.73-27.4-15.73-9.88,14.9-25,13.13-32.17,11.2a2.83,2.83,0,0,1-.35-.15l-.39.33a2,2,0,0,0,.74,3.45c7.19,1.94,22.29,3.7,32.17-11.2,0,0,7.68,18.44,27.4,15.74a2,2,0,0,0,1.53-2.86C711.47,380.94,711.27,380.54,711.07,380.11Z"/>
                    <path class="cls-43" d="M732.77,352.82l-.09-.05c-12.49,9.2-27.07,3.66-27.07,3.66a28,28,0,0,0,.27,3.73c2,.68,15.55,4.82,27.14-4A2,2,0,0,0,732.77,352.82Z"/>
                    </g>
                    <path class="cls-41" d="M717.49,342.73a15.14,15.14,0,0,1-16.1-.29c-2.06,12-8.34,18.32-11.39,20.72a1.29,1.29,0,0,1-2.09-.79,88.06,88.06,0,0,0-1.82-8.67,51.07,51.07,0,0,0-2.29-6.5C674.74,359.12,666.15,360.32,662,360a1.3,1.3,0,0,1-.87-2.18c5.39-5.93,6.7-15.18,6.7-15.18-10.15,4.59-16.95,1.84-20.36-.53a59.51,59.51,0,0,0,19.27-22.88c.25-.55.51-1.07.77-1.58,2.36-3.49,4.45-6.92,6.17-9.93,13.61-16.41,23.21,7.57,23.21,7.57C700.27,326.76,709.13,336.09,717.49,342.73Z"/>
                    <path class="cls-44" d="M678.21,292.87s-15.3,32.7-32.63,41.7a1.29,1.29,0,0,0-.26,2.13c2.84,2.4,10,6.64,21.55,1.44,0,0-1.31,9.25-6.71,15.18a1.3,1.3,0,0,0,.88,2.18c4.2.29,12.8-.92,21.85-12.84,1.14,2.65.94,4.91,1.38,6.5a87.46,87.46,0,0,1,1.82,8.67,1.3,1.3,0,0,0,2.1.79,32.86,32.86,0,0,0,12.29-20.72s9.88,7.2,20.23-2.9a1.31,1.31,0,0,0-.25-2.05,70.1,70.1,0,0,1-30.78-43.1S684.06,271,678.21,292.87Z"/>
                    <g>
                    <path class="cls-43" d="M666.87,333.6c-9.42,4.25-15.94,2.19-19.56,0-.58.36-1.15.69-1.73,1a1.29,1.29,0,0,0-.26,2.13c2.74,2.31,9.88,7,20.78,1.56A13,13,0,0,0,666.87,333.6Z"/>
                    <path class="cls-43" d="M720.46,333c-.42-.25-.93-.57-1.5-.95-9.68,7.76-18.48,1.35-18.48,1.35a32.92,32.92,0,0,1-12.29,20.73,1.3,1.3,0,0,1-2.1-.79,87.46,87.46,0,0,0-1.82-8.67c-.44-1.6-.24-3.85-1.38-6.51C674.47,349.2,666.44,351,662,351a20,20,0,0,1-1.82,2.33,1.3,1.3,0,0,0,.88,2.18c4.2.29,12.8-.92,21.85-12.84,1.14,2.65.94,4.91,1.38,6.5a87.46,87.46,0,0,1,1.82,8.67,1.3,1.3,0,0,0,2.1.79,32.86,32.86,0,0,0,12.29-20.72s9.88,7.2,20.23-2.9A1.31,1.31,0,0,0,720.46,333Z"/>
                    </g>
                </g>
                <g>
                    <circle class="cls-45" cx="708.67" cy="474.38" r="4.84" transform="translate(-121.92 667.72) rotate(-46.9)"/>
                    <circle class="cls-46" cx="628.01" cy="460.88" r="4.84" transform="translate(-145.95 372.55) rotate(-29.76)"/>
                    <circle class="cls-46" cx="690.27" cy="475.47" r="4.84" transform="translate(-119.44 692.08) rotate(-49.54)"/>
                    <circle class="cls-47" cx="645.72" cy="470.42" r="4.84" transform="translate(-113.84 718.06) rotate(-54.13)"/>
                    <circle class="cls-47" cx="746.04" cy="461.44" r="4.84" transform="translate(-51.5 826.71) rotate(-56.34)"/>
                    <circle class="cls-47" cx="699.23" cy="475.39" r="3.27" transform="translate(-17.42 924.09) rotate(-66.26)"/>
                    <circle class="cls-48" cx="664.36" cy="473.9" r="4.84"/>
                    <circle class="cls-47" cx="619.48" cy="455.75" r="3.39" transform="translate(-140.69 339.09) rotate(-27.62)"/>
                    <path class="cls-47" d="M727.82,471.87a3.39,3.39,0,1,1-2.42-4.14A3.39,3.39,0,0,1,727.82,471.87Z"/>
                    <path class="cls-45" d="M676.93,475.75a3.39,3.39,0,1,1-2.42-4.14A3.39,3.39,0,0,1,676.93,475.75Z"/>
                    <path class="cls-46" d="M759.89,451.67a3.39,3.39,0,1,1-2.42-4.14A3.39,3.39,0,0,1,759.89,451.67Z"/>
                    <path class="cls-46" d="M734.85,469.48a3.39,3.39,0,1,1-2.42-4.14A3.38,3.38,0,0,1,734.85,469.48Z"/>
                    <circle class="cls-48" cx="636.26" cy="466.56" r="3.39"/>
                    <circle class="cls-48" cx="609.47" cy="445.85" r="3.39" transform="translate(-120.52 252.59) rotate(-21.36)"/>
                    <circle class="cls-48" cx="738.73" cy="466.55" r="3.39" transform="translate(107.58 1070.73) rotate(-76.02)"/>
                    <circle class="cls-48" cx="717.14" cy="472.75" r="3.39"/>
                    <path class="cls-45" d="M658.44,473a3.39,3.39,0,1,1-2.42-4.14A3.39,3.39,0,0,1,658.44,473Z"/>
                    <path class="cls-45" d="M617.11,452.24a3.39,3.39,0,1,1-2.42-4.14A3.39,3.39,0,0,1,617.11,452.24Z"/>
                    <circle class="cls-45" cx="751.88" cy="455.65" r="3.39" transform="translate(-34.61 62.76) rotate(-4.67)"/>
                    <path class="cls-48" d="M684.34,476.29a3.39,3.39,0,1,1-2.42-4.14A3.39,3.39,0,0,1,684.34,476.29Z"/>
                </g>
                <g>
                    <circle class="cls-45" cx="640.66" cy="389.13" r="4.54"/>
                    <circle class="cls-47" cx="633.85" cy="384.14" r="3.18" transform="translate(117.57 915.91) rotate(-77.06)"/>
                    <circle class="cls-48" cx="648.38" cy="393.22" r="3.18"/>
                    <circle class="cls-46" cx="657.01" cy="394.59" r="4.54" transform="translate(-97.58 260.61) rotate(-20.92)"/>
                    <circle class="cls-47" cx="665.65" cy="395.95" r="3.18" transform="translate(128.01 953.45) rotate(-76.78)"/>
                    <circle class="cls-48" cx="674.28" cy="396.4" r="4.54"/>
                    <circle class="cls-45" cx="682.91" cy="396.86" r="3.18" transform="translate(173.57 1000.54) rotate(-80.01)"/>
                    <circle class="cls-47" cx="691.54" cy="395.49" r="4.54"/>
                    <circle class="cls-48" cx="699.26" cy="394.13" r="3.18" transform="translate(165.17 993.35) rotate(-77.7)"/>
                    <circle class="cls-45" cx="706.98" cy="391.86" r="4.54" transform="translate(162.16 988.98) rotate(-76.62)"/>
                    <circle class="cls-47" cx="713.8" cy="388.68" r="3.18" transform="translate(172.23 994.72) rotate(-76.78)"/>
                    <circle class="cls-46" cx="719.25" cy="385.05" r="3.18"/>
                    <circle class="cls-48" cx="726.06" cy="380.96" r="4.54"/>
                    <circle class="cls-47" cx="731.97" cy="375.96" r="3.18" transform="translate(198.63 1002.6) rotate(-76.78)"/>
                    <circle class="cls-45" cx="736.51" cy="370.51" r="3.18"/>
                    <circle class="cls-46" cx="740.15" cy="365.06" r="3.18"/>
                </g>
                </g>
                <g id="gift-box">
                <g>
                    <g>
                    <rect class="cls-48" x="567.76" y="503.11" width="20.3" height="5.01"/>
                    <rect class="cls-49" x="567.72" y="508.11" width="20.3" height="14.74"/>
                    </g>
                    <rect class="cls-50" x="571.01" y="503.01" width="2.87" height="19.84"/>
                    <rect class="cls-50" x="581.85" y="503.11" width="2.87" height="19.84"/>
                    <g>
                    <path class="cls-48" d="M570.88,497.13v6l6.29.06a7.74,7.74,0,0,0-6.3-6Z"/>
                    <path class="cls-48" d="M585.21,497.13l.14,6-6.44,0a7.74,7.74,0,0,1,6.3-6Z"/>
                    <path class="cls-50" d="M579.25,503.14a1.17,1.17,0,0,0,.08-.37,1.3,1.3,0,0,0-2.6,0,1.17,1.17,0,0,0,.08.37Z"/>
                    </g>
                </g>
                <g>
                    <g>
                    <rect class="cls-48" x="768.33" y="508.98" width="20.3" height="5.01"/>
                    <rect class="cls-49" x="768.29" y="513.99" width="20.3" height="14.74"/>
                    </g>
                    <rect class="cls-50" x="771.58" y="508.89" width="2.87" height="19.84"/>
                    <rect class="cls-50" x="782.42" y="508.98" width="2.87" height="19.84"/>
                    <g>
                    <path class="cls-48" d="M771.45,503v6l6.29.06a7.78,7.78,0,0,0-2-3.8A7.89,7.89,0,0,0,771.45,503Z"/>
                    <path class="cls-48" d="M785.79,503l.13,6-6.44,0a7.78,7.78,0,0,1,2-3.8A7.9,7.9,0,0,1,785.79,503Z"/>
                    <path class="cls-50" d="M779.82,509a1.17,1.17,0,0,0,.08-.37,1.3,1.3,0,0,0-2.6,0,1.17,1.17,0,0,0,.08.37Z"/>
                    </g>
                </g>
                <g>
                    <g>
                    <rect class="cls-51" x="779.61" y="467.42" width="23.18" height="4.14"/>
                    <rect class="cls-52" x="779.56" y="471.56" width="23.18" height="12.19"/>
                    </g>
                    <rect class="cls-44" x="783.31" y="467.73" width="3.28" height="16"/>
                    <rect class="cls-44" x="795.69" y="467.81" width="3.28" height="16"/>
                    <g>
                    <path class="cls-44" d="M782.69,461.18l0,6.82,7.18.06a8.85,8.85,0,0,0-7.2-6.88Z"/>
                    <path class="cls-44" d="M799.06,461.18l.16,6.85-7.36,0a8.85,8.85,0,0,1,7.2-6.88Z"/>
                    <path class="cls-44" d="M792.25,468.05a1.57,1.57,0,0,0,.09-.43,1.49,1.49,0,0,0-3,0,1.57,1.57,0,0,0,.09.43Z"/>
                    </g>
                </g>
                </g>
            </g>
            <g id="light-1">
                <circle id="light" class="cls-53" cx="726.57" cy="381.46" r="22.1"/>
                <circle id="light-2" data-name="light" class="cls-54" cx="664.18" cy="475.39" r="22.1"/>
                <circle id="light-3" data-name="light" class="cls-55" cx="645.82" cy="392.1" r="22.1"/>
            </g>
            <g id="light-2-2" data-name="light-2">
                <circle id="light-4" data-name="light" class="cls-56" cx="674.56" cy="397.45" r="22.1"/>
                <circle id="light-5" data-name="light" class="cls-57" cx="609.88" cy="446.74" r="22.1"/>
                <circle id="light-6" data-name="light" class="cls-58" cx="738.73" cy="467.25" r="22.1"/>
            </g>
            <g id="snow-01">
                <path class="cls-40" d="M396.34,256.69c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M409.84,276.54c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M413.81,252.72c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M478.11,236.84c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M558.29,297.18c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M588.46,348c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M568.61,362.28c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M571.79,321.79c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M735.33,312.26c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M731.36,271.78c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M752.8,332.91c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M514.63,259.87c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M455.09,210.65c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M521.77,217c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M562.26,215.41c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M655.94,205.09c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M665.47,244.78c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M683.73,290.83c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M702.78,217c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M355.06,211.44c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M378.08,267c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M410.63,316.23c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M406.66,332.11c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M351.09,345.61c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M349.5,308.3c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M484.46,365.46c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M470.17,335.29c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M499.55,310.68c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M513,363.07c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M708.34,328.94c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M804.4,367.84c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M794.87,333.7c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M846.48,308.3c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M875.06,294.8c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M877.44,342.43c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M944.92,295.59c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M898.87,247.17c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M876.64,213c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M832.19,219.38c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M821.07,251.13c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M799.64,282.89c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M975.88,315.44c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M982.23,278.13c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M1006.05,286.86c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M980.64,346.4c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M941,204.3c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M1014.78,208.26c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
            </g>
            <g id="snow-02">
                <path class="cls-40" d="M398.72,267c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M401.9,286.86c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M444,293.21c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M561.47,319.41c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M595.61,306.71c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M713.1,295.59c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M768.68,279.71c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M517,233.67c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M614.66,223.35c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M709.13,250.34c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M336,338.46c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M424.13,352c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M455.09,350.37c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M489.23,294c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M495.58,338.46c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M722.63,348c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M804.4,344c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M788.52,363.07c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M952.86,330.52c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M928.25,274.16c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M848.06,232.88c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M967.94,283.68c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M997.32,310.68c3.06,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M914,209.85c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M982.23,208.26c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M1030.66,203.5c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M751.21,251.13c3.06,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M343.94,236.05c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
                <path class="cls-40" d="M476.52,310.68c3.07,0,3.07-4.77,0-4.77s-3.07,4.77,0,4.77Z"/>
                <path class="cls-40" d="M813.13,221.76c3.07,0,3.07-4.76,0-4.76s-3.07,4.76,0,4.76Z"/>
            </g>
            <g id="pet-right">
                <path class="cls-59" d="M997.42,360c0,2.5-1.54,4.53-3.45,4.53s-3.45-2-3.45-4.53,1.55-4.54,3.45-4.54S997.42,357.47,997.42,360Z"/>
                <path class="cls-60" d="M989.82,354.13s.13,5.05,5.36,3.52c0,0,.91.73.2,3.23,0,0,1.51-1.43,1.87.84,0,0,4.41-5.15-.5-7.08a7.31,7.31,0,0,0-3.34-.44C992.06,354.32,990,354.45,989.82,354.13Z"/>
                <path class="cls-61" d="M992.76,364a3.71,3.71,0,0,1-.45,2.3,2.84,2.84,0,0,0,4-.26,6.14,6.14,0,0,1-.38-2.55,2.53,2.53,0,0,1-1.22.77A2.6,2.6,0,0,1,992.76,364Z"/>
                <path class="cls-62" d="M989.46,382.77,987.66,394a4.11,4.11,0,0,0,.89,3L999,409.84s2.21.25,2.55-1.53l-6.84-12.49a2.48,2.48,0,0,1-.22-1.85l3.14-10.27A7.67,7.67,0,0,0,989.46,382.77Z"/>
                <path class="cls-63" d="M993.55,382.17,986,396s-1,.94-.6,5.2l1.37,12s1.44,1.19,2.55.26l1.11-15.33s8.68-9.54,9-12.17a7,7,0,0,0-5.87-3.75Z"/>
                <path class="cls-64" d="M996.19,366c.34-.4,3.19.15,4.42-.84a11,11,0,0,0,2.75-3.78,6.23,6.23,0,0,0,.8-2.37,5.73,5.73,0,0,0-.3-1.93,22.73,22.73,0,0,0-2.21-5.14,2.72,2.72,0,0,1,2.53-.94,18.4,18.4,0,0,1,4.18,8.52,5.81,5.81,0,0,1,0,2.78,7.09,7.09,0,0,1-1.51,2.37l-5.44,6.44a5.56,5.56,0,0,0-1,1.56c-.61,1.7.59,3.49.71,5.29a28.12,28.12,0,0,1-.45,3.63c-.06.73,0,1.46,0,2.19a7,7,0,0,1-1.06,3.22,2.17,2.17,0,0,1-1.28,1.08,2.77,2.77,0,0,1-1.46-.26,18.59,18.59,0,0,0-7-1.08,7.49,7.49,0,0,1-2.55-.12,2,2,0,0,1-1.54-1.83,3.19,3.19,0,0,1,.45-1.25,30.92,30.92,0,0,0,3.44-11.25l-5.54,5a4.52,4.52,0,0,1-1.21.77l-7.19,3.1s-1.53-.32-1.66-2.56c0-.26,5.12-3,7.09-4.06a6.29,6.29,0,0,0,1.42-1,44.72,44.72,0,0,0,4.33-4.74,6.56,6.56,0,0,1,5.55-2.49S994.86,367.61,996.19,366Z"/>
                <path class="cls-59" d="M1004.19,350.92a18,18,0,0,0-1.7-5.6,3.05,3.05,0,0,0-.77-1,1.67,1.67,0,0,0-2,.05,1.77,1.77,0,0,0-.6,1.87c.27.91,1.2,1.52,1.38,2.45a2.22,2.22,0,0,0-.7-.82c-.27-.19-.68-.3-.88-.05s0,.6.12.86a30.89,30.89,0,0,0,2.53,3.48A2.78,2.78,0,0,1,1004.19,350.92Z"/>
                <path class="cls-65" d="M985.37,404.65s3.41-.77,5.11.08l-.33,13.06a.39.39,0,0,1-.32.37,2.87,2.87,0,0,1-1.65-.06l-.08-.6h0a4.09,4.09,0,0,1-2.3.81l-3.46.11a1,1,0,0,1-1.07-.91c0-.41.2-.85,1.12-1.11,0,0,3.15-.94,3.66-2Z"/>
                <path class="cls-65" d="M994.4,405.24s2.13-2.38,4.25-2.72l5.88,9.62a2.08,2.08,0,0,1-1.45,1l-.42-.6-.57,1.42a1,1,0,0,1-.37.47l-3.21,2.42a.48.48,0,0,1-.62,0c-.34-.34-.71-1,.26-2.17a5.72,5.72,0,0,0,.37-.49l1.33-2Z"/>
                <path class="cls-66" d="M935,404.68c2-4.35,6.9-4.44,11-5a22.83,22.83,0,0,0,8.76-3.24c6.38-3.92,12-9.26,17.83-14,.2-.16-.08-.43-.27-.27l-10.22,8.28c-3.07,2.48-6.15,5.09-9.72,6.84-3.87,1.89-7.89,1.72-11.94,2.79a8.26,8.26,0,0,0-5.76,4.41c-.1.22.23.42.33.19Z"/>
                <g>
                <path class="cls-67" d="M924.87,413.22a6.76,6.76,0,0,0-1,.7,2.56,2.56,0,0,0-.85,2.33A2.15,2.15,0,0,0,924.7,418a1.85,1.85,0,0,0,2-1.26c.11-.39.07-.8.16-1.2a1.88,1.88,0,0,1,.9-1.23,6.33,6.33,0,0,1,1.85-.5,1.78,1.78,0,0,0,1.43-1.14,1.52,1.52,0,0,0-.23-1.07c-.47-.8-1.95-1.66-2.88-1.14-.5.28-.91,1.05-1.33,1.45A11.26,11.26,0,0,1,924.87,413.22Z"/>
                <path class="cls-46" d="M927.83,409.65a6.33,6.33,0,0,0,1.77,3.65,5.87,5.87,0,0,0,3.68,1.7,10.73,10.73,0,0,0,1.5,0c2.16-.12,4.32-.25,6.47-.45a6.49,6.49,0,0,0,1.32-.21,6.89,6.89,0,0,0,1.71-.87,9.58,9.58,0,0,0,3.35-3,7.63,7.63,0,0,0,.86-3,1.78,1.78,0,0,0-.18-1.25,1.87,1.87,0,0,0-.8-.54,31.61,31.61,0,0,0-3.14-1.11,12.76,12.76,0,0,0-1.82-.46,14.71,14.71,0,0,0-2.1-.13,18,18,0,0,0-3.89.22c-.54.11-1.06.27-1.6.36s-.92.1-1.37.16a11.69,11.69,0,0,0-4.3,1.78c-.42.26-1.18.57-1.42,1A4.14,4.14,0,0,0,927.83,409.65Z"/>
                <path class="cls-68" d="M935,415.61a1,1,0,0,1-.06.55,1.29,1.29,0,0,1-.42.45,3.43,3.43,0,0,0-1.66,2.52,1.73,1.73,0,0,0,1.12,1.61,1.36,1.36,0,0,0,1.68-.84c.09-.32,0-.65.13-1a2.85,2.85,0,0,1,1-1.25,3.78,3.78,0,0,0,1.28-1.81,3.44,3.44,0,0,0-.88-2.87,2.87,2.87,0,0,0-1.21-1,1.21,1.21,0,0,0-1.69,1.23C934.27,414.08,934.86,414.77,935,415.61Z"/>
                <path class="cls-67" d="M943.31,413.28a7.48,7.48,0,0,0,5.23,2.55c.22,0,.48,0,.61.22s0,.48-.09.7a3.62,3.62,0,0,1-1.91,2.07,4.64,4.64,0,0,0-.64.17,1,1,0,0,0-.4,1.45,1.51,1.51,0,0,0,1.45.49c.53-.07,1-.3,1.55-.4a1.34,1.34,0,0,0,.39-.11,1.1,1.1,0,0,0,.39-.46l1.31-2.27a4.58,4.58,0,0,0,.74-1.92c.1-1.55-1.33-2.78-1.62-4.3-.17-.86,0-1.74-.05-2.6a3.89,3.89,0,0,0-2.5-3.2,3.75,3.75,0,0,0-2.62,0,5,5,0,0,0-2.92,3.47A5,5,0,0,0,943.31,413.28Z"/>
                <path class="cls-69" d="M949.36,405.66a5.26,5.26,0,0,0,1-1,1.62,1.62,0,0,1,.56-.45,1.84,1.84,0,0,1,1.09,0,1.29,1.29,0,0,1,.82.43.91.91,0,0,1-.16,1,3.84,3.84,0,0,1-.89.65,5.48,5.48,0,0,0-1.69,1.7A11.51,11.51,0,0,0,948.2,406,3.56,3.56,0,0,0,949.36,405.66Z"/>
                <path class="cls-70" d="M926.19,402.67a6.27,6.27,0,0,1,1.23-3,4.25,4.25,0,0,1,2.76-1.63,5.19,5.19,0,0,1,2.6.44,5.82,5.82,0,0,1,2.53,1.89,3.54,3.54,0,0,1,.59,3c-.09.3-.24.59-.34.89a21.18,21.18,0,0,0-.45,2.1,2.48,2.48,0,0,1-1.2,1.71,2.2,2.2,0,0,1-1.32.09,3.19,3.19,0,0,1-1.3-.62,2.66,2.66,0,0,0-.66-.45,2.62,2.62,0,0,0-1.37.16C926.56,407.83,925.88,404.69,926.19,402.67Z"/>
                <path class="cls-71" d="M928.54,407.34a2.86,2.86,0,0,0,3.93.58l-1.71-1.65Z"/>
                <path class="cls-46" d="M927.8,398.93s6.32-.35,7.94,2.56c0,0,1.11-3.76-1.88-5.47C933.86,396,930.62,394.32,927.8,398.93Z"/>
                <path class="cls-71" d="M935.25,401.31c-.15-.35-.44-.69-.36-1.07a.92.92,0,0,1,.68-.61,3.14,3.14,0,0,1,2.6.88,3.62,3.62,0,0,1,.89.9,2.56,2.56,0,0,1,.27,1.72,7.34,7.34,0,0,1-.55,1.7,3.78,3.78,0,0,1-.69,1.22,1.9,1.9,0,0,1-3.12-.77C934.67,404,935.83,402.65,935.25,401.31Z"/>
                <g>
                    <path class="cls-72" d="M929.51,402.63a.74.74,0,0,1-.75.72.73.73,0,0,1-.74-.72.74.74,0,0,1,.74-.73A.74.74,0,0,1,929.51,402.63Z"/>
                    <ellipse class="cls-72" cx="933.31" cy="403.27" rx="0.74" ry="0.72"/>
                </g>
                <g>
                    <path class="cls-67" d="M928.28,404.88a1.62,1.62,0,0,0-.51.53,1.9,1.9,0,0,0-.15.42l-.22.72a.88.88,0,0,0,0,.76.59.59,0,0,0,.48.25,1.71,1.71,0,0,0,.55-.09l1.52-.4a1.18,1.18,0,0,0,.45-.18,1.28,1.28,0,0,0,.39-.83l.21-1a.36.36,0,0,0,0-.29,3.29,3.29,0,0,0-1.15-.3A2.37,2.37,0,0,0,928.28,404.88Z"/>
                    <path class="cls-67" d="M933.5,405.68a1.58,1.58,0,0,1,.33.66,2.12,2.12,0,0,1,0,.44v.75a.94.94,0,0,1-.22.74.59.59,0,0,1-.53.09,1.59,1.59,0,0,1-.51-.24l-1.34-.82a1.23,1.23,0,0,1-.38-.3,1.32,1.32,0,0,1-.14-.9l.09-1a.39.39,0,0,1,.1-.28,3.72,3.72,0,0,1,1.19,0A2.42,2.42,0,0,1,933.5,405.68Z"/>
                    <path class="cls-73" d="M930,402.54a.16.16,0,0,1-.15-.16,1.09,1.09,0,0,0-.56-.87,2,2,0,0,0-1.11-.23.16.16,0,0,1-.15-.15.14.14,0,0,1,.14-.16,2.31,2.31,0,0,1,1.28.28,1.35,1.35,0,0,1,.7,1.13.16.16,0,0,1-.15.16Z"/>
                    <path class="cls-73" d="M930.85,402.06a.15.15,0,0,1-.15-.12,2,2,0,0,0-.74-1.14,2,2,0,0,0-1.3-.4.15.15,0,1,1,0-.3,2.31,2.31,0,0,1,2.36,1.78.16.16,0,0,1-.12.18Z"/>
                    <path class="cls-73" d="M932,401.76a.12.12,0,0,1-.09,0,.15.15,0,0,1,0-.21,2.07,2.07,0,0,1,1.94-.77,3.8,3.8,0,0,1,.83.25.16.16,0,0,1,.09.2.16.16,0,0,1-.2.09,3.71,3.71,0,0,0-.76-.24,1.79,1.79,0,0,0-1.66.66A.14.14,0,0,1,932,401.76Z"/>
                    <path class="cls-73" d="M932.07,402.48a.16.16,0,0,1-.13-.06.16.16,0,0,1,0-.22,4.11,4.11,0,0,1,1.32-.67,1.49,1.49,0,0,1,1.47.41.16.16,0,0,1,0,.22.16.16,0,0,1-.21,0,1.17,1.17,0,0,0-1.16-.31,3.63,3.63,0,0,0-1.22.63Z"/>
                    <path class="cls-72" d="M931.75,404.64c0,.27-.41.44-.83.38s-.72-.33-.68-.6.41-.44.83-.38l.12,0a.85.85,0,0,1,.48.28A.39.39,0,0,1,931.75,404.64Z"/>
                </g>
                <path class="cls-71" d="M928.41,399.28a1.75,1.75,0,0,1-.56,1.33,7.42,7.42,0,0,0-1,1.12,4.61,4.61,0,0,0-.32,2.56.78.78,0,0,1,0,.37.69.69,0,0,1-.22.23,1.63,1.63,0,0,1-1.38.15,3.24,3.24,0,0,1-1.19-.78,2.91,2.91,0,0,1-.9-1.42,3.33,3.33,0,0,1,.46-2.18c.45-.91,1.32-2.62,2.46-2.79C926.65,397.73,928.27,398.23,928.41,399.28Z"/>
                <path class="cls-74" d="M932,396.05a.5.5,0,0,1,0-.71c.06-.06.15-.1.2-.17s0-.46-.25-.53a1.38,1.38,0,0,0-.67,0,.73.73,0,0,1-.63-.18c-.24-.31.06-.75.4-.93s.85-.34.87-.74a2.69,2.69,0,0,1,0-.4c0-.3.43-.43.72-.33a2.53,2.53,0,0,1,.73.53.84.84,0,0,0,.38.21c.51.1.94-.58,1.46-.48s.56.64.52,1.07a1.89,1.89,0,0,0,.07,1.27c.08.13.2.27.14.41s-.34.12-.49.22-.11.54-.25.8-.49.26-.78.21a1.15,1.15,0,0,0-.84,0,.86.86,0,0,1-.22.15A6.9,6.9,0,0,0,932,396.05Z"/>
                </g>
                <path class="cls-59" d="M973.92,378.57s-5.43,1.92-4.34,4.92a2.61,2.61,0,0,0,1.83.86,1.47,1.47,0,0,0,1.23-.86,10.5,10.5,0,0,1,.58-1.09l1.15-1.21-.65,1.7a.17.17,0,0,0,.13.22c.32,0,1-.13,1.73-2C975.58,381.13,973.92,380,973.92,378.57Z"/>
            </g>
            <g id="sweetheart-right">
                <path class="cls-47" d="M976.61,514.91a12.35,12.35,0,0,1,.75,3.44,1.12,1.12,0,0,1-1,1.11l-5,.52a1.63,1.63,0,0,1-.66-.06c-.63-.21-1.69-.75.16-1.7l1.91-.91a3.33,3.33,0,0,0,1.6-1.88l.1-.25S976.21,515.72,976.61,514.91Z"/>
                <path class="cls-65" d="M961.32,514.61a13.35,13.35,0,0,1,.8,3.69,1.2,1.2,0,0,1-1.09,1.19l-5.38.56a1.71,1.71,0,0,1-.71-.07c-.67-.22-1.82-.8.17-1.82l2-1a3.55,3.55,0,0,0,1.72-2l.1-.27S960.88,515.47,961.32,514.61Z"/>
                <path class="cls-65" d="M977.67,513.4a13.35,13.35,0,0,1,.8,3.69,1.2,1.2,0,0,1-1.08,1.19l-5.39.56a1.86,1.86,0,0,1-.7-.07c-.68-.22-1.82-.8.17-1.82l2-1a3.6,3.6,0,0,0,1.71-2l.1-.27S977.23,514.26,977.67,513.4Z"/>
                <path class="cls-75" d="M965.24,450.21a23.38,23.38,0,0,0,.36,3.54s-.58,2.61-4.52,1.58l.06-3.45S964.14,451.78,965.24,450.21Z"/>
                <path class="cls-75" d="M959,449.25a3,3,0,0,0,0,1.74,2.36,2.36,0,0,0,2.13,1.18,6.57,6.57,0,0,0,4.57-1.94,5.55,5.55,0,0,0,1.86-2.93,3.76,3.76,0,0,0-2.18-4C961.22,441.55,959.63,446.37,959,449.25Z"/>
                <path class="cls-76" d="M959.48,442.83a4.91,4.91,0,0,0,3.25,3.17,3.27,3.27,0,0,1-.71,3.18,3.31,3.31,0,0,1-3.15.92,5.64,5.64,0,0,1-.81,2c-.42.84-.66,1.92.27,2.56a2,2,0,0,0,.62.27,3.72,3.72,0,0,0,4.37-3.53,5.06,5.06,0,0,1,0-1.82,1.09,1.09,0,0,1,.41-.58,1,1,0,0,1,1.46.57,3.1,3.1,0,0,1,.11,1.32s5.32-2.73,1-7.44a3.27,3.27,0,0,0-1.71-1,7,7,0,0,0-3.62,0,5.57,5.57,0,0,1-1.45.34Z"/>
                <path class="cls-77" d="M962.46,442.07s-.23,3.69,3,8.8c0,0,4.61-1.36,4.76-3.84C970.2,447,971.8,441.19,962.46,442.07Z"/>
                <path class="cls-78" d="M969.75,447.92c.2.29-.21.74,0,1a.67.67,0,0,0,.31.2l1.44.54c-.13-.18.06-.45.28-.51a1.55,1.55,0,0,1,.67.08.68.68,0,0,0,.65-.12c.19-.2.11-.54.23-.79s.55-.48.49-.8c0-.13-.13-.24-.15-.37s.14-.37.23-.55a1.08,1.08,0,0,0,0-.88,3.11,3.11,0,0,0-.53-.72,2.52,2.52,0,0,0-.77-.65.85.85,0,0,0-.94.14,1.3,1.3,0,0,1-.15.18c-.39.27-.69-.42-1.06-.38s-.72.69-.89,1c-.46.92.32,1.62-.18,2.49A1.85,1.85,0,0,0,969.75,447.92Z"/>
                <path class="cls-64" d="M964.31,482s1.55,23.52,9.36,32.74a10.26,10.26,0,0,0,4.38-.16,1.37,1.37,0,0,0,.93-1.71c-1.58-5.05-7.44-25.18-6.3-33A18.23,18.23,0,0,1,964.31,482Z"/>
                <path class="cls-77" d="M958.18,481.7l-3,12.23a13.53,13.53,0,0,0-.28,5.07l1.93,15.41A1.92,1.92,0,0,0,958,516a6.64,6.64,0,0,0,4.19,0,1.23,1.23,0,0,0,.88-1.26c-.17-2.76-.67-11.94-.67-11.94l0-.66a25.85,25.85,0,0,1,3.62-14l4-6.86-11.49.22Z"/>
                <path class="cls-75" d="M950.86,480.48s-1.75,4.62-1.15,4.75c0,0,.67-.4,1.07-2.07a10.71,10.71,0,0,0-.5,3.38.23.23,0,0,0,.41.08,5.57,5.57,0,0,0,.76-2.46s-.53,3.41-.07,3.48c0,0,.74.67,1.14-3.55a10,10,0,0,0,.07,2.41s1.07,1.61,1-3.88c0,0,.81,1.94,1.27,1.47,0,0,.94.34-.67-2.67C954.19,481.42,953.33,478.21,950.86,480.48Z"/>
                <path class="cls-75" d="M977.52,479.31s1.75,4.61,1.14,4.74c0,0-.66-.4-1.07-2.07a10.47,10.47,0,0,1,.5,3.38.22.22,0,0,1-.41.08,5.52,5.52,0,0,1-.76-2.46s.54,3.42.07,3.48c0,0-.73.67-1.14-3.54a9.94,9.94,0,0,1-.06,2.41s-1.07,1.6-1-3.89c0,0-.8,1.95-1.27,1.48,0,0-.93.33.67-2.68C974.18,480.24,975,477,977.52,479.31Z"/>
                <path class="cls-79" d="M961.18,455c-3.07,0-5.06,3.52-6.63,6.16a42.9,42.9,0,0,0-3.56,8.47,40.85,40.85,0,0,0-1.64,8.42,3.28,3.28,0,0,0,.36,2c.63,1,2,1.13,3.13,1.2.89.05,1.95,0,2.44-.72a2.56,2.56,0,0,0,.32-1.28,58.09,58.09,0,0,1,1.09-10,21.3,21.3,0,0,1,1.91-5.4q-.58,7.26-1.18,14.52c-.09,1.18-.12,2.55.76,3.35a4,4,0,0,0,3.08.57l3-.27a45.83,45.83,0,0,0,5.83-.77c1.08-.23,2.29-.68,2.68-1.72s-2.37-19.24-.5-8.32c.29,1.71.94,4.64,1.23,6.35a3.65,3.65,0,0,0,1,2.3,2.14,2.14,0,0,0,2.23.22A3.44,3.44,0,0,0,978.5,477a21.08,21.08,0,0,0-.77-5.3l-3.12-8.93a17.88,17.88,0,0,0-2.7-5.57,10.63,10.63,0,0,0-6.47-3.58S966.18,454.93,961.18,455Z"/>
                <path class="cls-75" d="M985.17,457.34a8,8,0,0,1-.31,1.94s3,1.84,4.09-.1l-.62-4.5A6.42,6.42,0,0,1,985.17,457.34Z"/>
                <path class="cls-75" d="M982.85,449.68c-.24,1.58-.9,2.6-.85,4.19a4.35,4.35,0,0,0,1,2.65,2.44,2.44,0,0,0,1.36.89A2.3,2.3,0,0,0,986,457a7,7,0,0,0,1.24-1.13s5.78-3.84.54-7.85c0,0-3.33-2.72-4.69.82Z"/>
                <path class="cls-64" d="M983.54,514.6l-1.23,3.07s-6.33,1.42-4.39,2.55l7.7-.18a1.06,1.06,0,0,0,1-1.2l-.47-4S984.45,515.52,983.54,514.6Z"/>
                <path class="cls-64" d="M994.13,514.54,993,517.66s-6.26,1.7-4.27,2.74l7.68-.52a1.07,1.07,0,0,0,1-1.24l-.65-4S995.09,515.42,994.13,514.54Z"/>
                <path class="cls-80" d="M983.28,488.62s-.77,10.27.56,12.48c0,0-3.78,12.84-1.12,14a4.17,4.17,0,0,0,4.46.21,2.33,2.33,0,0,0,1.27-1.72,72.09,72.09,0,0,0,.5-12.06,54.58,54.58,0,0,0,1.38-11.74S985.22,489.88,983.28,488.62Z"/>
                <path class="cls-80" d="M990.63,488.83s-.77,11.21,1.58,13c0,0-2.55,12.95,2,13.79,0,0,4.37.93,4.82-2.83a3.54,3.54,0,0,0,0-1.17l-1.63-9.89s.05-10-.87-13C996.55,488.73,992.47,490.09,990.63,488.83Z"/>
                <path class="cls-81" d="M1000.22,480.36s1.48,6.89-1,7.4c0,0-2,.2-1.94-4.29,0,0-2.4,5.3-.56-2.45C996.76,481,999.09,481.74,1000.22,480.36Z"/>
                <path class="cls-81" d="M975.64,484.57A2,2,0,0,0,975,486a1.24,1.24,0,0,0,1.35,1,2.65,2.65,0,0,0,1.55-.87,7.38,7.38,0,0,0,1.7-2.52c.34.25.37.75.52,1.15s.64.76.93.46a.78.78,0,0,0,.13-.62,4.67,4.67,0,0,0-.71-2.29C978.64,479.63,976.84,483.13,975.64,484.57Z"/>
                <path class="cls-82" d="M984.86,459.28s-4.39,1.84-5,5.1c0,0-.2,14.39-2.25,16.74a3.13,3.13,0,0,0,4.19.82,48.55,48.55,0,0,0,2.14-15s.21,10.31-1.83,15.32c0,0-1.13,8.26,3.57,8.47l9.08.16a2.33,2.33,0,0,0,2.37-2.43c-.19-4.46,1.25-14.69-2.77-22.64,0,0,2.46,8.9,1.69,14.21a1.55,1.55,0,0,0,.47,1.3c.64.63,1.86,1.23,3.75-.24a.77.77,0,0,0,.28-.66c-.18-2.27-1.28-13.67-5.58-18.59a7,7,0,0,0-6-2.66h0S987.82,461.32,984.86,459.28Z"/>
                <path class="cls-83" d="M983.13,449.35a6.7,6.7,0,0,0,1.45,1.41c.51.44.46,1.56.39,2.23.47-.33.83-.6,1.18-.38.52.33.63,1.25.68,1.67a3.36,3.36,0,0,1-.42,2.74c-.28.31-.68.51-.94.84a3,3,0,0,0-.21,2.49,2,2,0,0,0,.68,1.33c.36.23.91.25,1.06.65.23.57-.64,1-.72,1.62a1.09,1.09,0,0,0,.56,1,5.07,5.07,0,0,1,.95.7c.69.8.23,2.06.56,3.06a2,2,0,0,0,2.28,1.31c.73-.16,1.37-.73,2.12-.66,1,.1,1.6,1.21,2.66.88a1.64,1.64,0,0,0,1.06-1.14,4.69,4.69,0,0,0-.37-2.8,4.17,4.17,0,0,1-.26-2.43c.31-1.09,1.44-1.9,1.43-3,0-1.73-2.58-2.54-2.69-4.27a5.1,5.1,0,0,1,.24-1.43,1.62,1.62,0,0,0-.23-1.38c-.46-.51-1.27-.38-2-.29s-1.57,0-1.75-.69c-.14-.48.21-1,.38-1.43a2.87,2.87,0,0,0-1.06-3,7.34,7.34,0,0,0-3.15-1.27,8.08,8.08,0,0,0-2.54-.26,3.85,3.85,0,0,0-1.25.33,1.18,1.18,0,0,0-.49,1.65Z"/>
                <path class="cls-81" d="M983.93,446.82c1.52.26,4.19,1.4,5.59,6,0,0,1.5,1.57,1.91-.88,0,0,1-4.29.14-6.19,0,0-5.05-1.37-7.8.2A.48.48,0,0,0,983.93,446.82Z"/>
                <path class="cls-84" d="M991.07,445.59a.26.26,0,0,1-.35-.06.77.77,0,0,1-.12-.37l-.06-.43a2.56,2.56,0,0,1,0-1.26.89.89,0,0,1,1-.63c.45.11.73.69,1.2.66.22,0,.43-.17.65-.15s.43.26.55.49a2,2,0,0,1,0,2,2.59,2.59,0,0,1-1.39.77c-.57.17-.43-.18-.78-.35S990.79,446.24,991.07,445.59Z"/>
            </g>
            <g id="mom-right">
                <g>
                <g>
                    <path class="cls-85" d="M826.1,405.92c-.26,1.23-1.21,2.34-1,3.58.08.64.46,1.21.6,1.84a2.66,2.66,0,0,1-.28,1.91c-.32.55-.82,1-1.11,1.55-.56,1.09-.2,2.38-.32,3.58a1.8,1.8,0,0,1-.26.82,3.65,3.65,0,0,1-.65.59,3.21,3.21,0,0,0-1.14,2.42c0,1,.45,1.93.14,2.84a9.67,9.67,0,0,1-1.28,1.82,6.2,6.2,0,0,1-.57.87,2.23,2.23,0,0,1-1.63.62,6.37,6.37,0,0,1-1.77-.34c-1.49-.45-3-1-4.41-1.54a3.47,3.47,0,0,1-1.5-1,5.61,5.61,0,0,1-.64-1.73c-.23-.65-.64-1.23-.9-1.88a4.42,4.42,0,0,1,.51-4.23,3.7,3.7,0,0,1,.94-.91c.53-.32,1.16-.45,1.7-.75A2.83,2.83,0,0,0,814,413.8,8.58,8.58,0,0,1,814,412c.28-1,1.33-1.53,2.29-2s2-1,2.32-1.94a9.19,9.19,0,0,1,.27-1.18,4.66,4.66,0,0,1,1-1.15,8.12,8.12,0,0,0,1.08-1.79,4,4,0,0,1,1.31-1.61C824.62,400.84,826.5,404.07,826.1,405.92Z"/>
                    <g>
                    <path class="cls-59" d="M838.77,416.74l6.58-1.23,3.29-1.63s3.29.05,3.55.58c0,0,.82,1-3.18,1.05l-3.5,1.23-6.07,2.52A3.15,3.15,0,0,1,838.77,416.74Z"/>
                    <path class="cls-63" d="M822.2,413.45s4.06,4.55,8.9,4.67l9.13-1.81s1.83,1.3,1.46,3L832,421.34s-1.11.57-4.7-.54l-2.39-.64a5.21,5.21,0,0,0-2.08-4.46S822.25,413.78,822.2,413.45Z"/>
                    </g>
                    <path class="cls-61" d="M820.07,410.13s-1,2.59-2.42,3.16c0,0,6.43,4.07,5.88,2.29,0,0-1.6-2.51-.93-4.89A2.87,2.87,0,0,1,820.07,410.13Z"/>
                    <path class="cls-59" d="M821.64,411.09c1.06,0,1.59-.94,1.94-1.61a6.43,6.43,0,0,0,.56-2.19c.06-.43.12-.86.17-1.28a3.72,3.72,0,0,0-.52-2.65A3.11,3.11,0,0,0,821.6,402a4,4,0,0,0-2.3.43,3.76,3.76,0,0,0-1.29,1.34c-.5,1-.92,3.1-.37,4.14S820.11,411.09,821.64,411.09Z"/>
                    <path class="cls-60" d="M822.2,403.3a4.12,4.12,0,0,0-.37,1.74,2.59,2.59,0,0,1-.61,1.66c-.6.58-1.66.64-2.13,1.32s-.12,1.74-.71,2.35-2,.39-2.53,1.16.14,1.52,0,2.29a2.25,2.25,0,0,1-1,1.41,22.83,22.83,0,0,1-3.14,1.74,5.28,5.28,0,0,0-2.52,2.39c-.52,1.25.37,2.61.91,3.84a28.23,28.23,0,0,0,.91,2.78c-1-.64-.49-1.25-.89-1.81a19.21,19.21,0,0,1-2.75-5.39,2.61,2.61,0,0,1,.16-2.55,4,4,0,0,1,1.76-.86c.63-.21,1.29-.61,1.38-1.23a2.46,2.46,0,0,0-.43-1.36,3.21,3.21,0,0,1,.81-4.1c.66-.41,1.48-.52,2.15-.91a2.62,2.62,0,0,0,1.27-1.77,10.53,10.53,0,0,1,.19-1.7,3.3,3.3,0,0,1,.85-1.2,9.36,9.36,0,0,1,4.07-2.84c1.64-.46,3.7.05,4.42,1.52.32.63,0,.74-.54.81A1.56,1.56,0,0,0,822.2,403.3Z"/>
                    <path class="cls-86" d="M825.45,433.62l2.93,14.82a5.39,5.39,0,0,1,.09,1.13L828,464.3h-2.57s-2.55-8.18-2.12-14.74l-4.41-15.31Z"/>
                    <path class="cls-86" d="M815.72,432.24c1.33,11.93.44,14,.73,15,0,0-2.11,11.53-1.3,17.67l3.16,0s1.86-13.46,3.06-16.86a10.91,10.91,0,0,0,.41-1.59l3-13.87S819.33,434.35,815.72,432.24Z"/>
                    <path class="cls-52" d="M819.06,459.73l-.25,5.54,4.46,2.48s1.35.69.79,1.32a1.09,1.09,0,0,1-.78.32c-1.14,0-4.62.07-6.52-.7a3.49,3.49,0,0,1-.64,0,.94.94,0,0,1-1-.79l-.21-8.29A5.4,5.4,0,0,0,819.06,459.73Z"/>
                    <path class="cls-87" d="M828.19,458.49l-.25,5.54,4.47,2.48s1.35.69.78,1.32a1.06,1.06,0,0,1-.77.31c-1.15,0-4.62.08-6.52-.69a5.3,5.3,0,0,1-.65,0,.94.94,0,0,1-1-.79l-.2-8.3A5.36,5.36,0,0,0,828.19,458.49Z"/>
                    <path class="cls-88" d="M823.09,415.53a2.75,2.75,0,0,1,1,.84c.77,1,2.19,3.26,1.63,5.29a9.64,9.64,0,0,0-.38,2.82c.11,3.12.44,9.36,1.57,12.9a20,20,0,0,1-12.64-.14,59.66,59.66,0,0,1,3.3-11s1-4.06.24-6.54c0,0-1.33-5.78.81-7.12A18.35,18.35,0,0,0,823.09,415.53Z"/>
                    <path class="cls-88" d="M821.31,413.55a5.32,5.32,0,0,1-2-1.65.63.63,0,0,0-1,0,1.25,1.25,0,0,0-.26.61c-.18,1.19,1.11,2.74,2.88,3.47s3.34.36,3.52-.83a1.63,1.63,0,0,0,0-.58,1,1,0,0,0-1.13-.77A3.5,3.5,0,0,1,821.31,413.55Z"/>
                    <path class="cls-63" d="M824.09,455.31c-.05.46-.12.89-.2,1.28,0,0-11.29,4.07-13.7-1.17,0,0,.47-12.34,4.18-21.07,0,0,2.28-5.23,1.37-9.28,0,0-1.49-9.58,1.38-11.72a2.33,2.33,0,0,1,3.11.42c1.08,1.86,4,5.92,3.08,14.22,0,0-.15,6.22.11,8.83C823.64,439,824.77,449.55,824.09,455.31Z"/>
                    <path class="cls-59" d="M812.8,429.6a5.28,5.28,0,0,1,1.67,2.33.93.93,0,0,0,.63.57l1.81-.23a2.3,2.3,0,0,1,1.26.45,1.81,1.81,0,0,0,.46.32,1.3,1.3,0,0,0,1.2,0,.28.28,0,0,0,.07-.39,5,5,0,0,0-4.26-2.22l-1-1.69A4.11,4.11,0,0,1,812.8,429.6Z"/>
                    <path class="cls-89" d="M813.62,417.09c.53-.53,2.51-2.69,3-3.12a2.45,2.45,0,0,1,2-.46,1.44,1.44,0,0,1,1,1.48,3.87,3.87,0,0,1-.71,1.81,13,13,0,0,1-1.76,2.35c-.49.48-1,.9-1.57,1.34a32.75,32.75,0,0,0-3.18,2.81,1.33,1.33,0,0,0-.46.76,1.28,1.28,0,0,0,.21.65c.38.69,2.18,3.16,2.61,3.82a.42.42,0,0,1,.11.33.37.37,0,0,1-.16.19,4.31,4.31,0,0,1-1.87.91.73.73,0,0,1-.36,0,.77.77,0,0,1-.31-.22c-1.14-1.16-5.36-5.3-3.68-7,.85-.88,1.76-1.8,2.55-2.76A38.18,38.18,0,0,1,813.62,417.09Z"/>
                </g>
                <g>
                    <g>
                    <path class="cls-90" d="M850.92,413.91a2.51,2.51,0,0,0-.75-.53,1.82,1.82,0,0,0-1.89.14,2.37,2.37,0,0,0-.75,2,7.75,7.75,0,0,0,.91,3.53l.47-.25a7.21,7.21,0,0,1-.85-3.28,1.92,1.92,0,0,1,.54-1.62,1.34,1.34,0,0,1,1.35-.08,1.9,1.9,0,0,1,.51.36A.63.63,0,0,1,850.92,413.91Z"/>
                    <path class="cls-90" d="M851.65,415a.63.63,0,0,1-.43.34,4.73,4.73,0,0,1,.12,3.81l.49.21A5.35,5.35,0,0,0,851.65,415Z"/>
                    </g>
                    <polygon class="cls-91" points="843.83 419.1 856.93 418.61 858.02 438.12 844.38 438.58 843.83 419.1"/>
                    <polygon class="cls-90" points="843.83 419.1 842.39 438.1 844.38 438.58 843.83 419.1"/>
                </g>
                </g>
                <path class="cls-79" d="M814.36,406.45c-.47,1.4,1.14-1.49,3.76-2.29.38-.12,1.93-.47,2.32-.54,1.58-.29,2.49-.17,3.86-.83a.3.3,0,0,0,.15-.37c-.43-1.13-2.69-5.73-11.13-5.17,0,0-5.76.71-1.15,3.71a.1.1,0,0,1,.05,0C812.49,401.24,815.24,403.79,814.36,406.45Z"/>
            </g>
            <g id="girl-left">
                <g>
                <path class="cls-92" d="M472.81,522.56l-1.42,1.51a1,1,0,0,0-.26.75,10.15,10.15,0,0,0,1,3.89,2,2,0,0,1,.26,1.14c-.07.77-.45,1.69-2.09.3a3.4,3.4,0,0,1-1-1.54c-.29-.87-2.35-4.1-2-5.35a1.88,1.88,0,0,1,1.23-1.24,8,8,0,0,0,2.78-1.18A2,2,0,0,0,472.81,522.56Z"/>
                <path class="cls-93" d="M481.41,497.38a56.48,56.48,0,0,1,7.86,11s2.18,5-2.95,7.28l-13.42,7s-2-.1-1.74-1.79c0,0,7.63-8.33,12.33-9.6l-10.83-11.61S480.43,498.22,481.41,497.38Z"/>
                <path class="cls-94" d="M478.47,503.28l2.72,15.93a5.37,5.37,0,0,1-1.74,5.9l-8,9.92a2.59,2.59,0,0,1-2.95-1.16l6.87-13.4-4.36-11.7s-3.17-6.54-1.2-11.29c0,0,3.74,3,11.33.07Z"/>
                <path class="cls-92" d="M471.3,534.61l-1,2a10.71,10.71,0,0,0,2.45,3.9,1.91,1.91,0,0,1,.62,1c.16.76,0,1.75-2.14.85a3.8,3.8,0,0,1-1.56-1.21c-.57-.76-1.53-1.69-3.09-3.34a1.88,1.88,0,0,1-.66-1.29,1.8,1.8,0,0,1,.93-1.52,6.87,6.87,0,0,0,2.14-1.79A2.58,2.58,0,0,0,471.3,534.61Z"/>
                </g>
                <path class="cls-48" d="M472.66,478.59l-2.19,1.17a6.45,6.45,0,0,0-2.92,2.92l-3.81,6.89,5-.86,1.43-2.35s-1,15.62-1.59,19c0,0,11.1,4.69,16.89-3.28,0,0-10.32-16.57.41-20.63a30.21,30.21,0,0,0,5.34-3.38c.69-.62,1.42-1-.22-3.71l-5-7.31a1.66,1.66,0,0,0-2.4.54s4.8,7.53,2.61,9.06c0,0-5.21,3-8.59,2.29A4.08,4.08,0,0,1,472.66,478.59Z"/>
                <path class="cls-95" d="M476.39,475.45s-.4,2.62,1.35,3.49a3.52,3.52,0,0,1-5.4.16s1.53-1.8.89-3.65A2.81,2.81,0,0,0,476.39,475.45Z"/>
                <ellipse class="cls-75" cx="474.7" cy="471.6" rx="3.66" ry="4.77"/>
                <path class="cls-96" d="M466.29,485l1.26-2.29a6.45,6.45,0,0,1,2.92-2.92l2.1-1.12a10.8,10.8,0,0,1,.76-.89,4.34,4.34,0,0,0,.17-1.35,9,9,0,0,0-1.51-2.63c-.7-.85-.8-2.59.22-3,3.93-1.64,2.49-3.93,2.49-3.93-.54-1-2.22-.83-3.19-.16s-1.71,1.69-2.81,2.11a18.31,18.31,0,0,1-3.16.37c-1.05.19-2.16,1.1-1.88,2.12.06.21.17.4.22.61a1.7,1.7,0,0,1-.87,1.63,13,13,0,0,0-1.64,1,1.36,1.36,0,0,0-.32,1.75c.46.56,1.58.66,1.52,1.37a1.06,1.06,0,0,1-.42.66l-1.23,1.18a1.41,1.41,0,0,0-.57.91c0,.75,1,1,1.74,1s1.74.19,1.78.93a1.33,1.33,0,0,1-.36.83,6.57,6.57,0,0,0-1,1.46,1.36,1.36,0,0,0,.34,1.61c.6.41,1.41,0,2-.43A3.66,3.66,0,0,1,466.29,485Z"/>
                <path class="cls-96" d="M477.46,465.52c1.24.56,2,2,3.33,2.3.52.12,1.07.1,1.58.23,2,.52,2.36,3,2.64,3.36.7.93,1.52.81,1.95,2.76.07.3.63.53.63,1.64a2.57,2.57,0,0,1-1.33,2.31c-1.14,1-2.15-.12-2.74.31a3.92,3.92,0,0,1-1.87,1.33c-.24.05-4.15,1.06-5.14-2.34-.26-.88,1.15-2.66,1.34-4s.37-2.74,0-3.4a4.73,4.73,0,0,0-2.13-1.57C472.88,467.3,474.36,464.11,477.46,465.52Z"/>
                <path class="cls-97" d="M478.47,465.19a13.09,13.09,0,0,0-6.33-3.49,2,2,0,0,0-2.51.55s-1.42,4.66-.93,6.53C468.7,468.78,470.94,463.45,478.47,465.19Z"/>
                <path class="cls-98" d="M474.71,467.25a3,3,0,0,0-.94.08,2.29,2.29,0,0,0-.64.33c-.63.41-1.21.9-1.88,1.25a3.06,3.06,0,0,1-2.2.37c-1.31-.71-.59-1.61-.18-2.35a4,4,0,0,1,2-1.59,14,14,0,0,1,5-.8c1.05,0,3.85.22,3.34,1.91C478.8,467.81,475.77,467.26,474.71,467.25Z"/>
                <path class="cls-98" d="M469.88,462a1.76,1.76,0,0,0,1.36.46c.49-.1.86-.71.58-1.12a1.54,1.54,0,0,0,.75-.29.55.55,0,0,0,.12-.72c-.07-.09-.17-.14-.23-.23-.28-.4.46-.81.5-1.3s-.6-.7-1.08-.67a2.58,2.58,0,0,1-1-.05.31.31,0,0,0-.39.22c-.1.34-.3.64-.63.63s-.38-.14-.59-.18a.78.78,0,0,0-.85.49,1,1,0,0,0,.17,1,2.32,2.32,0,0,1,.41.59,2.49,2.49,0,0,1,0,.72c0,.24.15.53.39.5Z"/>
                <path class="cls-95" d="M485.71,467l.12-4.94a1.67,1.67,0,0,0-.36-1.23l-1.57-1.91s-1.29-.47,0,2.2a1.75,1.75,0,0,1,.08,1.4l-.44,1.13-.93-1.56-.37-.39a.24.24,0,0,0-.43.1c-.12.36,0,.32.4,2.18a36.73,36.73,0,0,0,1.63,3.38S485.09,466.47,485.71,467Z"/>
                <path class="cls-99" d="M475.68,490.81c1,3.54,1.9,8.92,1.63,9a47,47,0,0,1-12.91,2.5,1.07,1.07,0,0,1-1.1-.83l-1.77-7.68Z"/>
                <path class="cls-100" d="M460.94,491.26a1.11,1.11,0,0,1,.9-1.34l5.8-1,3.49-.59c.69-.11,2.65-.81,3.27-.54.37.15.83,1.38,1.28,3l-14.15,3C461.33,492.94,461.14,492.1,460.94,491.26Z"/>
                <polygon class="cls-101" points="472.25 488.1 474.98 500.65 473.34 501.09 470.5 488.43 472.25 488.1"/>
                <path class="cls-101" d="M464.07,489.3l2.4,12.66s-1.53.54-2,.33l-2.18-12.44Z"/>
                <g>
                <path class="cls-102" d="M471.66,485a.57.57,0,0,0,.07-.22c0-.27-.26-.47-.52-.51s-.53,0-.8,0a1.83,1.83,0,0,1-1.2-.75c-.3-.38-.52-.82-.84-1.18a1.2,1.2,0,0,0-.8-.49,1.08,1.08,0,0,0-.88.48,3.59,3.59,0,0,0-.43,2.55c.12,1.31-.09,4.67,2,4.12C469.74,488.64,471.05,486.34,471.66,485Z"/>
                <path class="cls-101" d="M467.26,486.8a43.17,43.17,0,0,0-3.07-3.28,3.3,3.3,0,0,0-1.25-.86,1.24,1.24,0,0,0-1.38.39c-.33.56.11,1.32-.25,1.86-.24.34-.73.46-1,.8a1,1,0,0,0,.13,1.14,3.47,3.47,0,0,0,1,.74,9.92,9.92,0,0,0,4.9,1.6A1.4,1.4,0,0,0,467.26,486.8Z"/>
                <path class="cls-103" d="M466.47,488.21a1,1,0,1,0,1-1A1,1,0,0,0,466.47,488.21Z"/>
                </g>
                <path class="cls-75" d="M462.75,496.07a.38.38,0,0,1,.43.07c.15.17,0,.43-.09.62s-.28.4-.22.61,1.37.34,1.63.47a1.79,1.79,0,0,1,.68,1.5,3.39,3.39,0,0,1,.05,1.1c-.16.94-1.67,1.44-2.1,1.51a.76.76,0,0,1-.63-.09,3.43,3.43,0,0,1-1.26-2.59C461.19,498.18,461.63,496.55,462.75,496.07Z"/>
            </g>
            <g id="boy-left">
                <path class="cls-99" d="M529,500.75c4.67,2.13,7,7.64,11.45,10.15-2.11,1.34-4.41,2.53-7.15,1.89a1.78,1.78,0,0,1-.65-.16,1.35,1.35,0,0,1-.44-.8,27,27,0,0,0-6.39-11.35c-.25-.26,1.23-.37,1.28-.37A6.76,6.76,0,0,1,529,500.75Z"/>
                <path class="cls-100" d="M530.32,499.13c.73.49,1.31,1.17,2,1.68a10.23,10.23,0,0,0,3.44,1.38c2.11.55,4.56.95,6.31-.35.79,2.89.79,4.44,0,6.28a10,10,0,0,1-7.73-1.6c-2.65-1.87-4.5-4.61-7.17-6.48C527.72,498.47,528.9,498.17,530.32,499.13Z"/>
                <path class="cls-104" d="M521.14,499.36s-2.72,2.84-12.07-2.22a.9.9,0,0,0-.7-.08,1.63,1.63,0,0,0-1.18,2.18s5.59,4.3,9,4.6a5.08,5.08,0,0,1,4.52,5.08s-.06,4.52-.13,6.08a.87.87,0,0,0,.48.81,9.51,9.51,0,0,0,9-.1,1,1,0,0,0,.48-.88c0-1.81-.28-7.34-.92-8.69,0,0,2.26,4,2.09,12.41,0,0,2.81.26,3.33-.81a77.21,77.21,0,0,0-1.35-10.22,14.4,14.4,0,0,1-.32-1.48A11.83,11.83,0,0,0,529,499S526.51,503.29,521.14,499.36Z"/>
                <path class="cls-75" d="M529.05,494.59c.08,1.69-1.25,3.13-2.68,4a3.86,3.86,0,0,1-2.52.79,3,3,0,0,1-2.26-2,8,8,0,0,1-.36-3.12v-.54a.86.86,0,0,0,0-.16,2.23,2.23,0,0,1,.77-2.14c.82-.56,1.86-1.39,2.91-1.31a3.28,3.28,0,0,1,1.67.79C527.79,491.86,529,493.07,529.05,494.59Z"/>
                <path class="cls-96" d="M521.9,492.25c.94.4,2.08.11,3,.58a2,2,0,0,1,1,1.65c0,.29,0,.67.32.72a.82.82,0,0,0,.39-.11,1,1,0,0,1,1.15.61,3,3,0,0,1,.18,1.39c.12.13.32,0,.41-.18a5.45,5.45,0,0,0,.86-3.44,4.52,4.52,0,0,0-1.66-3.09c-1.51-1.16-3.55-1.12-5.35-1-.81.05-1.65-.08-1.64.92A2.23,2.23,0,0,0,521.9,492.25Z"/>
                <path class="cls-100" d="M521.25,497.65a1,1,0,0,0-.67.59,1.48,1.48,0,0,0-.05.86,1.73,1.73,0,0,0,.37.8,3.18,3.18,0,0,0,1.1.72c.24.11.48.23.73.32a8,8,0,0,0,1.37.33c.26.05.52.1.78.13a4.34,4.34,0,0,0,2.85-.79,4.61,4.61,0,0,0,1.7-2.26,1,1,0,0,0,.06-.71,1,1,0,0,0-.64-.53.93.93,0,0,0-.57,0,1.07,1.07,0,0,0-.32.2l-.84.71a3.94,3.94,0,0,1-.77.57,3.71,3.71,0,0,1-.87.29,5.88,5.88,0,0,1-.93.18,3,3,0,0,1-1.49-.26,2.92,2.92,0,0,1-.64-.38,1.54,1.54,0,0,1-.39-.5A.77.77,0,0,0,521.25,497.65Z"/>
                <path class="cls-102" d="M524.47,486.23a8.08,8.08,0,0,1,6.28-1.18,4.73,4.73,0,0,1,2.57,1.39c.36.43.5,1.19-.06,1.41a2,2,0,0,1-.55.07,2.48,2.48,0,0,0-2,2.3,8.8,8.8,0,0,1-.52,3.07,6.72,6.72,0,0,0-2.61-3.63,5.19,5.19,0,0,0-1.61-.81,8.27,8.27,0,0,0-1.79-.22c-.64,0-2.4.94-2.56,0,0-.06.72-.54,1.61-1.41A9.28,9.28,0,0,1,524.47,486.23Z"/>
                <path class="cls-105" d="M521.76,488.85a.91.91,0,0,1-.12-.26s.07-.12.07-.12a10.82,10.82,0,0,0,1.63-1.32l.14-.15a3.71,3.71,0,0,1,.4-.39,2.72,2.72,0,0,1,1.92-.58,3.92,3.92,0,0,1,1.93.5c.27.15-.05.29-.11.26a4.82,4.82,0,0,0-1.83-.48,2.44,2.44,0,0,0-1.74.51,4.31,4.31,0,0,0-.37.37l-.14.15A12.7,12.7,0,0,1,521.76,488.85Z"/>
                <path class="cls-98" d="M523.23,490.7c.61.25,1.3.26,1.91.49,1.56.57,2.35,2.31,3.71,3.27a1.34,1.34,0,0,0,.6.26,1.13,1.13,0,0,0,1.09-.77,2.47,2.47,0,0,0-.2-2.05,7.33,7.33,0,0,0-1.35-1.64,6,6,0,0,0-2.29-1.32,24.8,24.8,0,0,0-4-1.28,1.37,1.37,0,0,0-1.56,1.56c0,.23.77.29,1,.45C522.58,490,522.68,490.47,523.23,490.7Z"/>
                <path class="cls-98" d="M533.26,487.08a.51.51,0,0,1,.59-.21c.15.08.22.27.37.35s.6-.17.9-.3a.85.85,0,0,1,1.15.63,3.35,3.35,0,0,1,0,.63.62.62,0,0,0,.25.55c.07,0,.16,0,.23.09a.41.41,0,0,1,.09.63c-.07.06-.16.1-.22.16a.71.71,0,0,0-.11.68,1.55,1.55,0,0,1,.1.7c-.67.56-1.21-.13-1.61.28-.13.14-.24.33-.43.37s-.42-.15-.54-.34-.22-.41-.43-.5-.74.15-1.08,0a.47.47,0,0,1-.18-.7,1.37,1.37,0,0,0,.16-.18c.11-.23-.18-.44-.41-.53s-.38-.22-.29-.38a.26.26,0,0,1,.13-.1.85.85,0,0,1,.7,0c.18-.4-.35-.78-.39-1.21a.27.27,0,0,1,0-.15c.13-.28.36.05.51,0S533.06,487.31,533.26,487.08Z"/>
                <path class="cls-106" d="M524.24,516.68a5.23,5.23,0,0,1,.19-2.42c.08-.34.16-.68.21-1a12.15,12.15,0,0,0,.11-1.49,15.44,15.44,0,0,0-.41-4.72l-.06-.21a4.1,4.1,0,0,1-.18-.71,5,5,0,0,1,0-1.44,6.71,6.71,0,0,0,.09-1.1c0-.22,0-.45-.07-.67a3.21,3.21,0,0,1,0-1.38l.08,0a3.14,3.14,0,0,0,0,1.33c0,.23.06.46.07.69a8.17,8.17,0,0,1-.08,1.11,4.84,4.84,0,0,0-.06,1.42,5.53,5.53,0,0,0,.18.7l.06.21a15.6,15.6,0,0,1,.41,4.74,12.32,12.32,0,0,1-.1,1.5c-.06.34-.14.68-.22,1a5.35,5.35,0,0,0-.19,2.38Z"/>
                <path class="cls-75" d="M508.26,497.2c.26-.74-.4-1.28-.64-1.72-.43-.78-.76-1.22-1.19-2,0-.07-.08-.14-.14-.16s-.23.06-.28.17c-.32.62.54,1.4.42,2.08-.28.14-1.15-.92-1.7-.77a.54.54,0,0,0-.25.15,2.67,2.67,0,0,0-.65,1.3,1.8,1.8,0,0,0-.1,1,1.36,1.36,0,0,0,.3.52,4.72,4.72,0,0,0,3,1.16C507.42,498.77,508.18,497.42,508.26,497.2Z"/>
                <path class="cls-96" d="M505.54,508.38a2.39,2.39,0,0,1-.24-1.93,4.94,4.94,0,0,0,.09-.92,5.14,5.14,0,0,0-.69-2,3.74,3.74,0,0,1-.6-2.69,3.86,3.86,0,0,1,.56-1,5.09,5.09,0,0,0,.42-.71,5.19,5.19,0,0,0,.35-1.68,3.94,3.94,0,0,1,.63-2.18,4,4,0,0,1,.46-.46,2.27,2.27,0,0,0,.59-.7c.33-.71-.15-1.52-.58-2.24l-.12-.2a2.68,2.68,0,0,1-.36-2,1.1,1.1,0,0,1,.58-.7l.12.25a.8.8,0,0,0-.43.53,2.45,2.45,0,0,0,.33,1.74l.12.19c.46.78,1,1.67.59,2.5a2.38,2.38,0,0,1-.65.79,3.49,3.49,0,0,0-.43.43,3.72,3.72,0,0,0-.58,2,5.32,5.32,0,0,1-.36,1.77,6.07,6.07,0,0,1-.45.74,2.61,2.61,0,0,0,.06,3.46,5.37,5.37,0,0,1,.72,2.16,6.36,6.36,0,0,1-.09,1,2.1,2.1,0,0,0,.18,1.71Z"/>
                <path class="cls-107" d="M503.89,497.5a1.94,1.94,0,0,0,1.77.54,1.86,1.86,0,0,0,1.06-1.47.89.89,0,0,0-.41-1l-1-.65a.78.78,0,0,0-1,.17,3,3,0,0,0-.66,1.58A.93.93,0,0,0,503.89,497.5Z"/>
                <path class="cls-101" d="M505.74,488.43a1.11,1.11,0,0,0-.44.61s0,0,0,0a.05.05,0,0,0,0,0c.2,0,.33-.3.54-.26a.28.28,0,0,1,.17.29c0,.14,0,.31.09.39a.21.21,0,0,0,.25,0c.15-.09.2-.25.32-.37s.24-.15.34-.07.08.26.16.37a.32.32,0,0,0,.12.11.31.31,0,0,0,.41-.31,1.31,1.31,0,0,0-.05-.39c0-.13-.09-.26-.13-.39-.1-.33-.11-1.12-.63-1S506.05,488.17,505.74,488.43Z"/>
                <ellipse class="cls-101" cx="510.43" cy="478.13" rx="10.11" ry="9.42" transform="translate(-55.46 889.13) rotate(-79.12)"/>
                <path class="cls-108" d="M503.56,475a2.06,2.06,0,0,0-.52,1.19.38.38,0,0,0,0,.21.29.29,0,0,0,.12.07l1.27.36a.65.65,0,0,0,.53,0,1.26,1.26,0,0,0,.38-.52,8.45,8.45,0,0,0,1.17-4.53c-.12-1.15-.88.39-1.1.69C504.83,473.36,504.19,474.19,503.56,475Z"/>
                <path class="cls-108" d="M506.81,474.61l-1.24,2.55s-.22.94.89,0a5.34,5.34,0,0,1,.56-.41c.43-.29,1.14-.83.92-1.26C507.94,475.49,507.38,474.08,506.81,474.61Z"/>
                <path class="cls-93" d="M520.59,514.51l-2.27,11.59s-.42,1.79.85,4.94l2.9,10.58a2.18,2.18,0,0,0,2.39-.17l-1.62-13.65,2.39-6.73,1.19,9.46,2.22,11.86a1.67,1.67,0,0,0,2.3.08l-.34-27.29A12.94,12.94,0,0,1,520.59,514.51Z"/>
                <path class="cls-109" d="M522.07,541.62l-1.28,1.79s-5.41.32-4.75,2a.21.21,0,0,0,.21.14h6.68s2.13.26,1.62-1.87l-.09-2.22S523.1,542.39,522.07,541.62Z"/>
                <path class="cls-109" d="M528.64,542.39l-.6,2.47-2.73,3.07a1,1,0,0,0,.37,1.56,1.92,1.92,0,0,0,2-.43l2.72-2.61a2.42,2.42,0,0,0,.73-2l-.22-2S530.43,543.32,528.64,542.39Z"/>
                <path class="cls-75" d="M532,518.43l-.63,1.85a.75.75,0,0,0,.23.69l1.16,1.08a1.47,1.47,0,0,0,.75.34l1.45-.09c.39,0,.4-.25.39-.39s-.26-.81-1.2-1.87a1.81,1.81,0,0,0,.61-2S532.88,518.73,532,518.43Z"/>
            </g>
            <g id="man-left">
                <g>
                <path class="cls-110" d="M385.89,445.23s-5.93,4.16-5.73,6c0,0,.88,2.31,3.6,0a13.1,13.1,0,0,0,2.51-2.48l1.74-2.88A4.57,4.57,0,0,1,385.89,445.23Z"/>
                <path class="cls-110" d="M407,447.45v2.8a.87.87,0,0,0,.56.81l2.17.84a2.61,2.61,0,0,0,.61.16l4.87.58s1.38.09,1.86-.66a.68.68,0,0,0-.37-1l-4.31-1.61L410,447.33S409.3,448,407,447.45Z"/>
                <path class="cls-111" d="M393.43,407.77,403,429.21s.87,12.78,4,18.37a5.22,5.22,0,0,0,1.7.36,5.42,5.42,0,0,0,1.84-.62c-.46-2.67-.86-5.91-1.27-8.77a99.18,99.18,0,0,1-1.19-11.23s-1.85-17.49-4.46-21.09C403.61,406.23,402.39,407.72,393.43,407.77Z"/>
                <path class="cls-112" d="M391.35,407.47s-3.44,18.83-2.52,21.55l-3.28,16a3.1,3.1,0,0,0,3.16.66L402,407S399.81,407.82,391.35,407.47Z"/>
                <path class="cls-113" d="M381.24,382.9a.41.41,0,0,0-.35.26,1.94,1.94,0,0,1-.17.42.86.86,0,0,1-.91.23,2.54,2.54,0,0,0-1-.12c-.32.07-.6.46-.41.73s.44.22.55.43-.09.49-.26.68-.36.47-.21.68.72,0,1.05.16.26,1,.7,1.23,1.06-.69,1.57-.43c.12.06.2.17.33.22.28.09.53-.24.52-.53a3.6,3.6,0,0,0-.25-.83.31.31,0,0,1,0-.21c.09-.17.36-.05.54-.11C383.61,385.51,381.81,383,381.24,382.9Z"/>
                <path class="cls-114" d="M374.36,382.89v0l-1.08-.82a8.83,8.83,0,0,1-1.58-2.16l-.29-1.71a.42.42,0,0,0-.74,0l0,1.23h0l0,.63c-.16-.09-2.09-1.26-2.91-1.82a1.56,1.56,0,0,0-1.73,0l-.33.2a.78.78,0,0,0-.17,1.19l1.77,1.57a4.62,4.62,0,0,0,1.27.78l1.9.75,1.85,1.53,4.13,4a5.21,5.21,0,0,0,1.39-2.82Z"/>
                <path class="cls-115" d="M390.53,389.92a56.4,56.4,0,0,1-12.84-4.74,5.42,5.42,0,0,1-1.52,2.94s7.36,5.54,11,8.6a5.69,5.69,0,0,1,2.06,4.26l.41,15.91s12.13,2,16.32-2.7c0,0-.8-11.36-2.5-18.25-.61-2.44,5.61-6.82,6.79-10.21l1.35-4.77-3-1.29L406.17,384l-6.87,3.29Z"/>
                <path class="cls-114" d="M408.73,379.79l3.34-6v-2a3.84,3.84,0,0,1,.47-1.84,5.76,5.76,0,0,1,.76-1.15.47.47,0,0,1,.67,0l-.67,2.15,1.38-2a1.69,1.69,0,0,1,1.91-.64l.45.16a.48.48,0,0,1,.27.71l-3.44,5.77L411.75,381A8.47,8.47,0,0,1,408.73,379.79Z"/>
                <g>
                    <path class="cls-114" d="M391.5,385.45l.64,4.08,4,1.76,1.52-3.17-.72-3.93A6.31,6.31,0,0,1,391.5,385.45Z"/>
                    <path class="cls-114" d="M397.08,382c-.49-1.07-1-2.11-1.58-3.14-.35-.63-.78-1.31-1.48-1.46a2.61,2.61,0,0,0-2,.71l-1.86,1.33c-1.17.84-.76,1.26-.16,2.22.13.2.24.42.35.63-1.09,2.59,1.28,3.21,1.28,3.21a8.54,8.54,0,0,0,1.1,1.42c.78.58,1.88.15,2.74-.3a3.88,3.88,0,0,0,2.07-1.82A3.75,3.75,0,0,0,397.08,382Z"/>
                    <path class="cls-116" d="M393.3,385.36c.24,0,.55-.08.62-.32.51-1.9,3.16-3.05,4.23-1.07.22.41.35.86.61,1.25a2,2,0,0,1,.42.84,1.16,1.16,0,0,1-.24.75,4.81,4.81,0,0,1-2,1.4,6.14,6.14,0,0,1-2.22.71,1.88,1.88,0,0,1-1.27-.33,2.81,2.81,0,0,1-.72-.94l-.59-1.06a4.14,4.14,0,0,1-.55-1c-.08-.41.3-.31.54-.26A3.77,3.77,0,0,0,393.3,385.36Z"/>
                    <path class="cls-116" d="M391.2,385.08s-1.56-2.73-.18-2.45a.15.15,0,0,0,.17-.19,1.26,1.26,0,0,1,0-.79,2.38,2.38,0,0,1,1.56-1.56c1.06-.35,3.33-1.57,2.09-4.79a11.41,11.41,0,0,1-3.72,1.17,3.71,3.71,0,0,0-2.14,1.11,3.85,3.85,0,0,0-.68,3.82,1,1,0,0,0,.09.22,7.18,7.18,0,0,0,.73,1.67,6.5,6.5,0,0,0,1,1.29c0,.08.61.59.92.51Z"/>
                </g>
                <g>
                    <path class="cls-117" d="M392.71,374.5s-10.2-4.35-10.79,10a16.32,16.32,0,0,0,6.22-2.94C390.74,379.49,392.93,375.89,392.71,374.5Z"/>
                    <path class="cls-113" d="M387.31,382.36a2.3,2.3,0,0,1,.55-1.81l.12-.14c.39-.45.87-.83,1.3-1.24a12,12,0,0,0,2.3-3.06,4.6,4.6,0,0,1,1.13-1.61,1.46,1.46,0,0,1,1.86,0,1.24,1.24,0,0,1,.15,1.31,4.09,4.09,0,0,1-.81,1.14,42.33,42.33,0,0,0-3.45,4.36C389.92,382.06,387.87,385.1,387.31,382.36Z"/>
                </g>
                </g>
            </g>
            <g id="dad-son-right">
                <path class="cls-92" d="M874,461.26l-1.88,1.43-3.32,1.17s-1.43,1.17,2.41,1.3l6.27-.85a.8.8,0,0,0,.67-1l-.51-2.07S875,462.11,874,461.26Z"/>
                <path class="cls-92" d="M880.64,462.77l-1.58,1.76-3,1.78s-1.18,1.42,2.61.82l6-2a.79.79,0,0,0,.46-1.08l-.89-1.94S881.7,463.43,880.64,462.77Z"/>
                <path class="cls-92" d="M862.89,410.76a2.15,2.15,0,0,0-.79-.35.69.69,0,0,0-.73.34c-.13.31.12.64.35.89a16.25,16.25,0,0,0,1.4,1.35c.74.62,1,1.45,2.34,1.88a.89.89,0,0,0,1-.44,1.47,1.47,0,0,0,.09-.69s-.87-.52-1-.6a11.93,11.93,0,0,1-1-1.44C864.31,411.28,863.6,411.21,862.89,410.76Z"/>
                <path class="cls-118" d="M888.47,379.7c-.05,0,.06-.7-.1-1s-.4-.57-.57-.88a3.55,3.55,0,0,1-.31-.9,7.14,7.14,0,0,1-.12-2.35c0-.19.08-.6.27-.62.49.1.26.77.32,1.07s.23.59.49.43a.6.6,0,0,0,.19-.47c0-.42,0-.83,0-1.25a1.59,1.59,0,0,1,.49-1.12,1.79,1.79,0,0,1,1.33,0,1.26,1.26,0,0,1,.83,1.09c0,.92,0,1.52,0,2.45a4.48,4.48,0,0,1-.39,1.68,6.14,6.14,0,0,0-.53,1.67A3.7,3.7,0,0,0,888.47,379.7Z"/>
                <path class="cls-109" d="M870,428l3.71,33.33a4,4,0,0,0,4.29,0l2.17-32.58S873.22,430.57,870,428Z"/>
                <path class="cls-93" d="M876.4,429.77,880,462.54a4.31,4.31,0,0,0,4.49-.13c.24-.16.91-35.81.91-35.81S883.94,429.51,876.4,429.77Z"/>
                <path class="cls-107" d="M859.91,395.52l-1.57-4.16a1.94,1.94,0,0,1-.09-.76l.22-2.65a1.37,1.37,0,0,1,1.39-1.29H860a.94.94,0,0,1,.79,1.06l-.34,2.69.72,1.23.65-2.53s.78-.33.45,1.23l-.19,2.93.25,1.84S860.37,395,859.91,395.52Z"/>
                <path class="cls-100" d="M859.45,395.74a2.87,2.87,0,0,1,3.51-.39s0,11.56,12,9h5.07s11.5,1.56,12.86-10.59a3.13,3.13,0,0,1,3.25.58s.91,12.54-10.07,16.12c0,0-4.07,1.25-.34,14.58a1.81,1.81,0,0,1-.28,1.53c-1.32,1.8-5.49,5-14.71,2.54-1-.27-1.37-1.64-1.3-2.66.25-3.84.58-13.14-1.82-16.06A19.43,19.43,0,0,1,859.45,395.74Z"/>
                <path class="cls-92" d="M878.85,420.77a2.31,2.31,0,0,0-.79.45.78.78,0,0,0-.24.81c.14.28.54.27.88.23a16.24,16.24,0,0,0,1.92-.37c1-.26,1.71,0,3-.86.13-.09.36-.89-.39-1.8-.27-.34-.78.78-2.35.33A12.26,12.26,0,0,1,878.85,420.77Z"/>
                <path class="cls-93" d="M880.44,404.31c-.62-.06-1,2.12-1.74,3.59a6.31,6.31,0,0,0-.83,2.53,4.4,4.4,0,0,0,.22,1.43q.95,3.51,2.09,7a1.52,1.52,0,0,0,.46.77,1.5,1.5,0,0,0,.62.19,2.17,2.17,0,0,0,1.76-.25c.64-.56.41-1.58.21-2.41a24.91,24.91,0,0,1-.48-6.28,3.74,3.74,0,0,1,.16-1.34,4.51,4.51,0,0,1,1.29-1.57,8.77,8.77,0,0,0,2.76-4.37S881.43,404.4,880.44,404.31Z"/>
                <path class="cls-93" d="M870.29,403.58c-2.06,2.25-3.75,5-5.67,7.34a.84.84,0,0,0-.26.51.88.88,0,0,0,.12.41A3.62,3.62,0,0,0,866.6,414a.43.43,0,0,0,.38-.05.75.75,0,0,0,.29-.24c4.47-6.28,7.36-8.65,6.44-8-.55.42.09-3.52-.73-3.87S870.78,403,870.29,403.58Z"/>
                <path class="cls-119" d="M880.83,389.63s7.67-1.17,7.47-10.07c0,0,1.63-1,2.34.19a11.55,11.55,0,0,1-3.82,12.42,3.17,3.17,0,0,0-1.16,2.4,19.21,19.21,0,0,0,1.22,7.5c.23.54.45,1.79-.62,2.11-3.23,1-10.42.69-13.1-1.88,0,0,2.79-3.71,2.79-6.57,0,0-4.86,5.33-12.8-1.55,0,0,.2-2.41,1.43-2,0,0,3.58,4.42,9.69,0,0,0,2.33-1.43,3.57-1.43A2.52,2.52,0,0,0,880.83,389.63Z"/>
                <g>
                <path class="cls-95" d="M877.49,389.43a3.14,3.14,0,0,1,.28,1.48.37.37,0,0,0,.29.44,2.47,2.47,0,0,0,2.7-.66.72.72,0,0,0,0-.91,6.15,6.15,0,0,1-1.08-1.91A3,3,0,0,1,877.49,389.43Z"/>
                <path class="cls-118" d="M880.16,384.89a3.85,3.85,0,0,1-1.79,5.14c-1.87.8-3.9-.31-4.77-2.35s-.27-4.22,1.6-5A3.84,3.84,0,0,1,880.16,384.89Z"/>
                <path class="cls-120" d="M874.42,386a4.44,4.44,0,0,0,1.5-1.11,1.94,1.94,0,0,1,1.65-.66c.52.13,1,1,1.38,1.59,0,.06.12,0,.14,0a.47.47,0,0,1,.54-.36.85.85,0,0,1,.73.81c.06.36-.06.88.12,1.19a4.08,4.08,0,0,0,.33-3.71,3.78,3.78,0,0,0-4-1.78,5.61,5.61,0,0,0-1.35.23,6.86,6.86,0,0,0-.93.4,9.64,9.64,0,0,0-2.06,1c-.52.44-1.49.06-1.07.6C872.13,385.13,873.1,386.38,874.42,386Z"/>
                <path class="cls-98" d="M872.56,384.07a4.83,4.83,0,0,0,1.88-.58,6.33,6.33,0,0,1,5.87.64,2.46,2.46,0,0,0,.8.42.64.64,0,0,0,.75-.37.93.93,0,0,0-.14-.72,5.85,5.85,0,0,0-5.33-2.62c-1.31,0-4.78,1-5,2.12C871.22,383.57,872.07,384.05,872.56,384.07Z"/>
                <path class="cls-97" d="M872.49,382.45c1-1.3,3.19-4,5.73-4.51a2.9,2.9,0,0,1,1.32.4,22.74,22.74,0,0,1,1.7,4,.46.46,0,0,1-.67.55c-1.25-.75-3.8-1.63-7.81,0A.24.24,0,0,1,872.49,382.45Z"/>
                <path class="cls-98" d="M879.06,378.73c-.13,0-.24-.08-.36-.11a1.12,1.12,0,0,0-.55.16c-.18.07-.44.06-.51-.12s.05-.29,0-.43a.33.33,0,0,0-.33-.23,1.52,1.52,0,0,0-.42.06c-.15,0-.37,0-.36-.17a.36.36,0,0,1,0-.09c.16-.22.53-.21.67-.44a1,1,0,0,0,0-.52c0-.18.07-.4.25-.41s.27.17.43.21c.34.1.62-.47,1-.37s.31.56.6.65.55-.07.63.14a.43.43,0,0,1,0,.27,2.24,2.24,0,0,0-.12.76C879.29,377.88,879.53,378.69,879.06,378.73Z"/>
                </g>
                <path class="cls-121" d="M880.5,400.82a10,10,0,0,0-.32,2.87,1.75,1.75,0,0,1-1.4,1.81,6,6,0,0,1-4.61-.73,3.5,3.5,0,0,0,.24-1.85s3.91,2.85,5.8-3Z"/>
                <path class="cls-118" d="M880.6,399.93c-.15.92.13,2-1.17,2.42-1,.34-2,1.64-3.18,1.53-1.94-.18-3.06-2.59-2.82-5.14s1.75-4.29,3.69-4.11S881,397.4,880.6,399.93Z"/>
                <path class="cls-96" d="M881.37,397.54c-.11-.19-.25-.36-.34-.55a.65.65,0,0,1,0-.62c.05-.08.13-.15.19-.23a.77.77,0,0,0-.15-1,3.2,3.2,0,0,0-1-.6,2,2,0,0,1-.86-.69,3.76,3.76,0,0,1-.24-.74.82.82,0,0,0-.48-.59c-.6-.21-1.24.56-1.83.31a2.68,2.68,0,0,0-.34-.16c-.4-.09-.64.45-1,.54a1.59,1.59,0,0,1-.64-.1,1.59,1.59,0,0,0-1.32.31,1.07,1.07,0,0,0,0,1.68.14.14,0,0,0,0,.07c0,.26.15.59.12.9s-.13.63-.19.94a3.83,3.83,0,0,0,.14,1.87,12,12,0,0,1,.5-1.85,4.39,4.39,0,0,1,.8-1.35l0,0c.33,0,.64-.29,1-.31.56,0,.52,1.07,2.83.59.53-.11.55.91.7,1.41a1.64,1.64,0,0,1-.15,1.69c-.11.12-.26.21-.36.34a.94.94,0,0,0-.15.57v0a.84.84,0,0,1-.23.66.4.4,0,0,0-.12.15c-.74,1.63-2.06.56-2.23.53s-.51-.18-.78-.07c-1.79.72-1.6-1.2-1.76-1.07-.61.52-.63,2.14-.7,2.27s-.46.44-.59.72c-.28.58.31,1.32,0,1.89-.1.18-.29.32-.33.53a.63.63,0,0,0,.39.62c.24.12.5.16.73.29a5.57,5.57,0,0,1,.76.62,3.84,3.84,0,0,0,2,.58,1.84,1.84,0,0,0,1.31-.21c.19-.15.33-.38.56-.46s.51,0,.75,0a1,1,0,0,0,.69-1,11.09,11.09,0,0,1,0-1.29,10.37,10.37,0,0,1,.42-1.18,1,1,0,0,0-.23-1.15c-.09-.08-.21-.13-.27-.23a.56.56,0,0,1,0-.36l.11-.94c0-.15,0-.48,0-.53a1.23,1.23,0,0,1,.37-.45c.35-.25.78-.19.91.19s.08.81.33.85a16,16,0,0,1,.88-1.94A1.9,1.9,0,0,0,881.37,397.54Z"/>
                <path class="cls-118" d="M895.81,394.11l1.37-4.11a1.8,1.8,0,0,0,.1-.76l-.22-2.65a1.41,1.41,0,0,0-1.4-1.3h-.11a.93.93,0,0,0-.79,1.05l.34,2.69-.29.58a.25.25,0,0,1-.46,0l-.58-1.72a.21.21,0,0,0-.22-.15c-.2,0-.49.2-.27,1.26l.19,2.92-.13,1.63S895.36,393.59,895.81,394.11Z"/>
                <path class="cls-122" d="M864.28,392.5c.17-.16-.11-1.19-.29-1.77a1.88,1.88,0,0,0-1.12-1.36,2.51,2.51,0,0,0-2.12.62,3.27,3.27,0,0,0-.85.85,1.17,1.17,0,0,0-.11,1.1,2.07,2.07,0,0,0,.55.6,14,14,0,0,0,2.81,1.51A5.52,5.52,0,0,1,864.28,392.5Z"/>
                <g>
                <path class="cls-92" d="M864.49,401.1a5.77,5.77,0,0,0-1.34-3.88l-.32-.36a5.81,5.81,0,0,1-.6-.73,1.38,1.38,0,0,1-.19-1.23,2.18,2.18,0,0,1,.32-.47,1.85,1.85,0,0,0,.42-.72,1.9,1.9,0,0,0-.22-1.11l-.06-.16c-.08-.21-.25-.71,0-1l-.24-.24a1.23,1.23,0,0,0-.09,1.33l.07.17a1.55,1.55,0,0,1,.2.9,1.57,1.57,0,0,1-.35.59,2.31,2.31,0,0,0-.37.55,1.69,1.69,0,0,0,.22,1.54,5.37,5.37,0,0,0,.63.78l.31.35a5.43,5.43,0,0,1,1.27,3.64Z"/>
                <path class="cls-118" d="M859.84,391.64a5.93,5.93,0,0,0,2.48.5,8.33,8.33,0,0,0,1.69-1.88.47.47,0,0,0,0-.52c-.21-.31-.81-.65-2.49-.24C861.53,389.5,859.06,390.73,859.84,391.64Z"/>
                <g>
                    <path class="cls-123" d="M861.91,389.51l.16-.3a.73.73,0,0,1-.2-.85,2.93,2.93,0,0,1,.31-.61c.08-.13.16-.27.23-.41a3.54,3.54,0,0,0,.21-2.2,9.58,9.58,0,0,0-.72-2.05l-.31.13a9.53,9.53,0,0,1,.7,2,3.2,3.2,0,0,1-.18,2c-.07.14-.14.26-.22.39a3.09,3.09,0,0,0-.34.68A1,1,0,0,0,861.91,389.51Z"/>
                    <path class="cls-124" d="M861.91,389.51l.16-.3a.73.73,0,0,1-.2-.85,2.93,2.93,0,0,1,.31-.61c.08-.13.16-.27.23-.41a3.54,3.54,0,0,0,.21-2.2,9.58,9.58,0,0,0-.72-2.05l-.31.13a9.53,9.53,0,0,1,.7,2,3.2,3.2,0,0,1-.18,2c-.07.14-.14.26-.22.39a3.09,3.09,0,0,0-.34.68A1,1,0,0,0,861.91,389.51Z"/>
                </g>
                <path class="cls-125" d="M861.07,381.35a3.58,3.58,0,0,0-1,1.37.2.2,0,0,0,.23.27,1.61,1.61,0,0,1,.44-.06,1.18,1.18,0,0,0,.17.53.4.4,0,0,0,.5.14c.18-.11.3-.43.49-.35s.14.18.23.25.48-.24.77-.26a.49.49,0,0,0,0-.51,8.46,8.46,0,0,0-1.07-1.26Z"/>
                <ellipse class="cls-48" cx="863.45" cy="371.16" rx="10.49" ry="8.33" transform="translate(411.26 1195.07) rotate(-84.5)"/>
                </g>
            </g>
            <g id="sweetheart-left">
                <g>
                <path class="cls-126" d="M533.7,425.85s.35,3.88,7.69,2.89l10.56-.18s1.69-1.6.92-2.81c0,0-9-2.13-14-1.53a10.53,10.53,0,0,1-1.42-5s-.13-5.9-1.77-8.84c0,0-3.21,1.84-8.19.08-.31-.11-1.72,3.86-2,4.56-.3.89-2.72,8.48-2.71,11.5a13.48,13.48,0,0,0,1,4.4,95.89,95.89,0,0,0,4.53,11.4c.22.51,2.73,0,2.76-.3.14-1.75-.06-8.68-1.25-11.66-.51-1.3-1.41-2.47-1.55-3.86-.24-2.26,1-4.29,1.88-6.4.6-1.47,1.62-2.18,1.3-3.74a40.44,40.44,0,0,0,1,5.71A38.84,38.84,0,0,0,533.7,425.85Z"/>
                <g>
                    <path class="cls-59" d="M525,394l-4.18-3.67-4.12-7.12-.36-3-.59-2.29s-.59.18-.46,1.23l.13.64-1.25-3.26s-.47-.42-.46.31c0,0-.66-.91-.76,0l.05.41s-.46-.47-.68-.34c0,0-.26,0,.23,1.06l.68,2-1.12-1.38s-.59-.23,0,.83l2.38,4.16,4,8.1,4.17,4.22S523,394.83,525,394Z"/>
                    <path class="cls-127" d="M539.42,393.63h0a2.81,2.81,0,0,1,2-.56,2.58,2.58,0,0,1,1.46,1.61.55.55,0,0,1,.07.41.51.51,0,0,1-.2.21c-.69.53-1.39,1.05-2.09,1.57a15.73,15.73,0,0,0-2.53,2.22,8,8,0,0,0-2.11,5c0,.94.1,6.81,0,6.89a8.76,8.76,0,0,1-4.27.65,11.37,11.37,0,0,1-3.67-.82.77.77,0,0,1-.35-.2.73.73,0,0,1-.15-.41c-.3-1.81.4-3.84-.55-5.4-.21-.34-.48-.64-.65-1a4.66,4.66,0,0,1,0-2.74,1.63,1.63,0,0,0-.48-1.7,22.79,22.79,0,0,0-3.26-3.18c-.15-.13-.33-.32-.25-.5a.49.49,0,0,1,.15-.17l2-1.65a.68.68,0,0,1,.22-.12.57.57,0,0,1,.37.12A15.48,15.48,0,0,0,531,396a9.39,9.39,0,0,0,5-.79A24,24,0,0,0,539.42,393.63Z"/>
                    <path class="cls-60" d="M528.2,390c-.25-.55-1.13-.82-1-1.41.08-.4.59-.56.78-.92.33-.6-.35-1.32-.21-2s.9-.89,1.37-1.34.79-1.49,1.55-1.66c.27-.06.56,0,.83-.07.8-.23,1-1.55,1.85-1.53.28,0,.53.19.81.21.78,0,1.11-1.09,1.86-1.32s1.65.76,2.54.67c.66-.06,1.14-.71,1.79-.78.91-.09,1.64,1,2.55.89a6.07,6.07,0,0,0,1-.31,1.86,1.86,0,0,1,1.73.41c.4.37.65.92,1.16,1.12a2.87,2.87,0,0,0,1.5-.1,1.85,1.85,0,0,1,2.16,1.09,4.69,4.69,0,0,0,.12.75c.16.47.66.72,1,1s.73.87.44,1.27c-.16.23-.49.34-.58.6a.61.61,0,0,0,0,.44,5.51,5.51,0,0,0,.62.84.83.83,0,0,1,.06,1c-.31.35-.89.13-1.29-.12-.27.06-.18.47,0,.72.28.47.5,1.17.06,1.51a1.06,1.06,0,0,1-1,.06c-.78-.25-1.45-.75-2.21-1.05a2.09,2.09,0,0,0-2.28.3c-.14.15-.25.34-.4.49a1.76,1.76,0,0,1-1.62.33c-.56-.13-1.1-.38-1.67-.46a.75.75,0,0,0-.51.08,1.22,1.22,0,0,0-.31.53,1.22,1.22,0,0,1-1.53.56c-.19-.08-.39-.23-.6-.18s-.33.29-.48.46a1.93,1.93,0,0,1-.86.45c-.52.17-1,.34-1.58.46a9.07,9.07,0,0,1-3.2.13c-.28,0-.56-.08-.84-.13h0a8.69,8.69,0,0,1-2.56-.7c-.4-.22-.84-.4-1-.86S528.44,390.4,528.2,390Z"/>
                    <path class="cls-59" d="M540.74,393.12l3.4-2.33,4.73-6.74.61-2.94.79-2.24s.57.24.35,1.27l-.18.62,1.52-3.13s.5-.38.43.34c0,0,.74-.85.77,0l-.09.42s.5-.43.71-.28c0,0,.26,0-.32,1l-.85,1.93,1.23-1.27s.61-.18-.07.82L551,384.59l-4.74,7.71-3.57,3A2.3,2.3,0,0,0,540.74,393.12Z"/>
                    <path class="cls-59" d="M553,426.26l2.38.53s.68,1.51-.22,2.26l-3.2-.49S553.25,427.48,553,426.26Z"/>
                    <path class="cls-120" d="M541.79,397c.66.26,1.3.58,2,.84a11.78,11.78,0,0,0,6.22.62,8.56,8.56,0,0,1-.46,4.59c-2.83.37-5.92.67-8.34-.85-1.45-.92-2.49-2.42-4-3.22s-3.36-.92-4.38-2.22c.3.38,3.16-.71,3.78-.72A13.37,13.37,0,0,1,541.79,397Z"/>
                    <path class="cls-120" d="M537.45,400a15,15,0,0,0,3,2.81A10,10,0,0,0,547.3,405c-.4,1.25-.79,2.51-1.19,3.77a1,1,0,0,1-.32.54.92.92,0,0,1-.57.11,10.77,10.77,0,0,1-6.23-2.67,28.36,28.36,0,0,1-4.52-5.19,51.8,51.8,0,0,1-3.44-5.06C533.39,395.34,536.11,398.2,537.45,400Z"/>
                    <path class="cls-48" d="M515.32,385.2a1.92,1.92,0,0,1,1.87-1.2s3.59,7.72,10.78,11.05l7.85.13,7.19-4.12s2.93-5.63,5.86-7a3.71,3.71,0,0,1,2.17.54l-4.17,9.26-9.72,8.52a37.39,37.39,0,0,1,.3,16.88s-7.62,2.43-13.47-.64c0,0,3.06-13.44.79-16.5A29,29,0,0,1,515.32,385.2Z"/>
                    <g>
                    <path class="cls-59" d="M529.16,390.72h0a6.61,6.61,0,0,0,.53,2.25,2.9,2.9,0,0,0,1.57,1.55,2.62,2.62,0,0,0,2.2-.35,6.71,6.71,0,0,0,1.66-1.66,8.43,8.43,0,0,0,1.42-2.64,4.22,4.22,0,0,0-.15-3,5.8,5.8,0,0,0-1.33-1.66,2.26,2.26,0,0,0-.9-.65,1.8,1.8,0,0,0-.8,0,5.43,5.43,0,0,0-3.33,2A5.8,5.8,0,0,0,529.16,390.72Z"/>
                    <path class="cls-60" d="M530.62,386.06a1.52,1.52,0,0,0,.84,1.19,3.89,3.89,0,0,0,1,.24,1.91,1.91,0,0,1,1.66,1.08c.18.64-.25,1.35,0,2s.75.71,1.23.92,1,.53,1.08,1.05a4.67,4.67,0,0,1-.08.83,1.35,1.35,0,0,0,1.61,1.31,1.51,1.51,0,0,1-.61-2.23,1.43,1.43,0,0,0,.34-.51c.07-.27-.1-.55-.13-.83-.05-.65.62-1.09,1-1.62a2.5,2.5,0,0,0,.14-2.32,6.66,6.66,0,0,0-1.36-2,4.76,4.76,0,0,0-2.78-1.86h0C533.24,383.15,530.45,384.43,530.62,386.06Z"/>
                    <path class="cls-59" d="M529,396.59a3.23,3.23,0,0,0,1.25-2,2.79,2.79,0,0,0,0-.74v0a2.83,2.83,0,0,0,2.94.36s-.11.31-.12.33,0,.31,0,.46a4.55,4.55,0,0,0,.32,2.4C533.6,397.79,528.68,396.83,529,396.59Z"/>
                    <g class="cls-128">
                        <path class="cls-129" d="M533.12,394.46c0,.16,0,.31,0,.46A3.07,3.07,0,0,1,531,395a3.14,3.14,0,0,1-.75-.44.59.59,0,1,1,1-.1A2.9,2.9,0,0,0,533.12,394.46Z"/>
                    </g>
                    <path class="cls-60" d="M530.7,387.33a2.13,2.13,0,0,0-1,.47c-.33.41-.16,1.05-.43,1.5s-.85.59-1,1.05c-.1.3,0,.64-.08.95a3,3,0,0,1-.36.59,1.43,1.43,0,0,0-.16,1.19,1.2,1.2,0,0,1-.62-1.38,3.62,3.62,0,0,1,.38-.58,1.4,1.4,0,0,0,.1-1.29,3,3,0,0,1-.3-.69,1.14,1.14,0,0,1,.49-1,7.27,7.27,0,0,0,.92-.74c.55-.62.56-1.6,1.15-2.18a1.48,1.48,0,0,1,1.56-.32h0C533,385.53,531.85,387,530.7,387.33Z"/>
                    </g>
                    <path class="cls-52" d="M550,428.63l4.86.44,1.64,4.18s.44,1.26,1.06.84a.94.94,0,0,0,.36-.64,17,17,0,0,0,.16-5.77,3.23,3.23,0,0,0,.12-.56.83.83,0,0,0-.58-1l-7.2-1.16A4.77,4.77,0,0,1,550,428.63Z"/>
                    <path class="cls-52" d="M527.49,440.44l1.89,5-3.32,3.6s-1,1-.32,1.44a1,1,0,0,0,.8.05c1.05-.31,4.23-1.31,5.73-2.59a3.42,3.42,0,0,0,.6-.16.9.9,0,0,0,.69-1l-2.31-7.62A5.19,5.19,0,0,1,527.49,440.44Z"/>
                    <path class="cls-120" d="M527.17,396.65a1.63,1.63,0,0,1-.38-1.07,1.8,1.8,0,0,1,2.54-1.61,6.32,6.32,0,0,0,4.71.36,1.12,1.12,0,0,1,1.18.22,2.29,2.29,0,0,1,.61,2,.18.18,0,0,1,0,.1C535.41,397.12,532.05,400.66,527.17,396.65Z"/>
                </g>
                </g>
                <g>
                <path class="cls-130" d="M487.3,409.36a109,109,0,0,1,.72,11.12,1.27,1.27,0,0,1-.13.64.85.85,0,0,1-.4.35c-4.12,1.26-7.54,3.17-12.91,4.86-.27.09-.59.1-.76.33a1,1,0,0,0-.16.56,5.59,5.59,0,0,0,.78,3.22c5.17-1,10.38-2,15.26-4a8.67,8.67,0,0,0,3.92-2.62,5.28,5.28,0,0,0,1.2-3.27,18.06,18.06,0,0,0,0-3.12,38.77,38.77,0,0,0,3.51,7.14s-4.3,10.35-4,13.41c0,0,2.51,1.45,4.3-.16l4.64-13.09a8.83,8.83,0,0,0-1.06-6.63l-3.15-9.26S487.24,408.65,487.3,409.36Z"/>
                <g>
                    <path class="cls-131" d="M495.69,393.62a3.93,3.93,0,0,1-.34,1.43c-.67.56-2.32,1.8-3.57-1.25l.24-2c0-.14,0-.26.05-.35s0-.19,0-.19a4.4,4.4,0,0,0,2.47.76h0a2,2,0,0,0,.87-.28s0,.1,0,.26a5,5,0,0,0,0,.72,2.17,2.17,0,0,0,0,.25A2.7,2.7,0,0,0,495.69,393.62Z"/>
                    <path class="cls-132" d="M495.49,393a2.42,2.42,0,0,1-1.54.23,3,3,0,0,1-1.93-1.11h0a2.19,2.19,0,0,0,0-.36h0a2.35,2.35,0,0,0,1.87,1.16,2.24,2.24,0,0,0,.9,0,4.53,4.53,0,0,0,.61-.16A2.17,2.17,0,0,0,495.49,393Z"/>
                    <path class="cls-131" d="M491.26,387.79s-1.24-.13-.65,1.44l.81.95a3.13,3.13,0,0,0,3,2.62s2.85.69,4.1-3.87c0,0,.79-4.8-3.29-5.18A3.6,3.6,0,0,0,491.26,387.79Z"/>
                    <path class="cls-133" d="M492.35,388.46c1.2-2.63,2.61-1.64,4.4-2a3.63,3.63,0,0,0,2.87-2c.75-1.69-.84-1.09-1.94-1.25-2.15-.31-3.19-1.36-5.71-.65s-3.61,4.16-2.18,6.24a10.86,10.86,0,0,0,1.06,1.75c.51.52,1.15,1.63,1.11.4,0-.91-1-1.25-1.2-2C490.55,388,491.8,387.75,492.35,388.46Z"/>
                </g>
                <path class="cls-131" d="M480.88,383l-3.17-5a.42.42,0,0,0,0-.11l0-1.31-.26-1.82a.08.08,0,0,0-.08-.07c-.18,0-.64.15-.46,1.56,0,0,0,.08,0,.21l-.07,0-1.32-1.06a4,4,0,0,1-.68-1.17c-.45-1.24,0-2.51-.42-2.53-.22,0-.28.35-.28.58l-.15,2.05s-1.17-2.21-1.53-2.07c-.52.05,1.2,2.92,1.2,2.92-1.18-1.49-1.8-1.44-1.8-1.44-.55.15,1.57,2.56,1.57,2.56-2.66-1.54-1.33-.2-1.33-.2l2,1.71h0l1.95,1.49,3.27,6.64,4.49,6.44,2.49-1.48Z"/>
                <path class="cls-115" d="M491.87,385.84a9.55,9.55,0,0,1,3.21-1.42,2.85,2.85,0,0,0,1.1-.47,1,1,0,0,0,.34-1.07,1.27,1.27,0,0,0-.57-.53,7.77,7.77,0,0,0-9.35,1.5,2.68,2.68,0,0,0-.76,2.85,2.71,2.71,0,0,0,1.69,1.24c1.75.51,2.31,1.45,2.52,1.08S490.92,386.55,491.87,385.84Z"/>
                <path class="cls-131" d="M501.66,391.48l6-4.65a3.92,3.92,0,0,0,.6-.55l4.51-5,1-1.55s2.28-2.84,1.73,1.23l-.51,1.37L510,388.84a3,3,0,0,1-.43.44l-6,5Z"/>
                <path class="cls-115" d="M476.63,382.27s.35-3,3.19-2.66c0,0,6.52,12.94,12,14.19a2.33,2.33,0,0,0,2.91,1.58,2,2,0,0,0,1-1.76,31.48,31.48,0,0,0,15.73-11.35s1.06-.35,1.95,2.31c0,0-2.84,8.16-13.13,13.84a50.28,50.28,0,0,0,.17,13.14s-3.16,5.22-12.63,1.32a2.29,2.29,0,0,1-1.37-2.56c.64-3.2,1.8-9.86.87-12.25C487.28,398.07,482.84,395.94,476.63,382.27Z"/>
                <path class="cls-65" d="M494.16,437.12s2.93,1.33,4.92.26l-1.86,6.13a15.45,15.45,0,0,1,4.19,2.08.86.86,0,0,1-.35,1.5c-1.06.25-3.18.28-7.36-.65a2.1,2.1,0,0,1-1.56-2.66Z"/>
                <path class="cls-65" d="M475.15,426s.56,3.17,2.57,4.21l-6.1,1.94a15.52,15.52,0,0,1,.66,4.63.86.86,0,0,1-1.44.57c-.81-.74-2-2.47-3.63-6.44a2.11,2.11,0,0,1,1.31-2.8Z"/>
                </g>
            </g>
            <g id="dad-son-left">
                <g>
                <path class="cls-134" d="M393.7,474.51l-1.8-4.35a2.28,2.28,0,0,0-1-1.08l-3.27-1.78a1.46,1.46,0,0,0-1.19-.12c-.36.13-.65.42-.36,1.06l2.62,2.24.84,1.66-2.24-2s-.58,0-.2.7a14.82,14.82,0,0,0,3,3.27l1.35,1.4A5,5,0,0,1,393.7,474.51Z"/>
                <path class="cls-134" d="M434.4,465.48l-.48-2.8a1.09,1.09,0,0,1,.18-.84l1.7-2.34a.13.13,0,0,1,.19,0c.23.2.59.84-.76,2.48h0a2.57,2.57,0,0,1,2.41,3l-.1.56A11.39,11.39,0,0,0,434.4,465.48Z"/>
                <path class="cls-134" d="M438.24,461.84c.08-.3.57-1.54.64-1.73.49-1.41,0-2.63-1,.38.22-.77.78-2.31.45-2.88,0,0-.58-.28-1.22,2.69a9.45,9.45,0,0,0,.27-2.93.2.2,0,0,0-.38,0c-.13.42-.4,1.3-.85,2.93l-2,5.18h.24l3.41.31.51-2.24c2.05-4.22,1-3.36,1-3.36A8.89,8.89,0,0,0,438.24,461.84Z"/>
                <path class="cls-135" d="M413.28,538.38l-1.92,2s-5.06.71-4,2a38.22,38.22,0,0,0,8.47-.09,1.05,1.05,0,0,0,.84-1.14l-.29-2.81Z"/>
                <path class="cls-136" d="M421.86,538.26l-1.92,2s-5.06.71-4,2a38.22,38.22,0,0,0,8.47-.09,1,1,0,0,0,.85-1.14l-.29-2.8Z"/>
                <path class="cls-137" d="M410.22,500l-.94,20.79a2.88,2.88,0,0,0,0,.59l2.85,17.46s2.73,1.54,4.78.17l-.51-19.12.78-11.4.58,12.26,2.73,17.92s3.31,1.36,5.12,0l-1-19.29.51-19.8S417.05,501.83,410.22,500Z"/>
                <path class="cls-138" d="M419.17,478.86l4.42,1.6s6.33-1.79,9.4-5l1.22-9.93s2.37-.7,3.65.32l-1,12.29a3.56,3.56,0,0,1-1.53,2.31l-10.88,7.74,1.79,15.49s1.54,5.44-.7,5.31c0,0-10.55-.8-11.91-.51a19.86,19.86,0,0,0-4.1.58c-1,.43-1.1-1.26-.49-3.82a33,33,0,0,0,.77-5c.26-3.54.55-9.07,0-11.57,0,0-.64-1-6.08-.83l-4.9-.09a3.37,3.37,0,0,1-2.92-1.83l-5-9.79a4.54,4.54,0,0,1,3.84-1.6l4,6.7a2.2,2.2,0,0,0,2.35,1l8.76-1.79,4.29-1.22S417.25,480.46,419.17,478.86Z"/>
                <path class="cls-134" d="M405.11,460l.13-1.1a1.88,1.88,0,0,0,0-.58l-.31-1.75s-.77-.55-.46,1.45c-.37-.87-1-2.07-1.95-2a1,1,0,0,0-.9.69c-.28.73-.14,1.5,1.49,4.33l1.09,1.77A4.66,4.66,0,0,1,406,462l-.67-1.14A1.39,1.39,0,0,1,405.11,460Z"/>
                <path class="cls-139" d="M432.57,466.17l1.53-1.79s.52-2.91,1.5-3.38c0,0,.59,0-.52,1.92,0,0,2-2.73,2.82-2.21,0,0,1.41,1.57-2.35,4.22l-1.79,2.56S433.34,466.42,432.57,466.17Z"/>
                <path class="cls-140" d="M420.41,467.62a12.45,12.45,0,0,0,12.2-1.94s1.33.75,1.54,1.78c0,0-4.36,5.53-11.23,5.58l-2,6.06s-6.66.89-9.56-1.16c0,0,1.73-4.19,1.14-7.19l-3.66-.52a1.46,1.46,0,0,1-1-.68l-4-6.45s1.23-1.46,2.47-1.37l2.87,4.13a1.76,1.76,0,0,0,1.39.77l3.4.12a4.61,4.61,0,0,1,1,.13l2.63.65A3.38,3.38,0,0,0,420.41,467.62Z"/>
                <path class="cls-140" d="M424.86,470.47a17.24,17.24,0,0,0,2.05,3.69,11.53,11.53,0,0,0,3.57,2.45,15.66,15.66,0,0,0-5.08,1.93,10.83,10.83,0,0,1-1-2.44,7.74,7.74,0,0,0-1.44-2.38c-.67-.75-1.48-1.37-2.12-2.14a3.48,3.48,0,0,1-.95-2.75C420.57,465,424.15,469.05,424.86,470.47Z"/>
                <path class="cls-94" d="M407.13,462.2a9.52,9.52,0,0,0-3.3,2.25l2.38,3.83A4.86,4.86,0,0,0,408,470l3.14,1.77-1.45,7.94a15.41,15.41,0,0,0,13.76,1.19l-.4-7s5.43,1.06,11.12-5.95l-2.91-2.38s-3.44,4.23-10.72,2h-3.31S410.58,466.43,407.13,462.2Z"/>
                <path class="cls-134" d="M412.46,470.75c-.45,2.21-1,6.57,1.52,7.47a3.18,3.18,0,0,0,2.69-.51l-1,2.1s2.45.14,3.47-.95l.58-3.26s4.6-6.6-2.82-7.94a2.31,2.31,0,0,0-.43-.05A3.9,3.9,0,0,0,412.46,470.75Z"/>
                <path class="cls-141" d="M410.8,487.05c-.68-.15-1-4.11-1.41-6.2a5.25,5.25,0,0,1,0-2.94,1.9,1.9,0,0,1,.93-1,1.6,1.6,0,0,1,2.13.95,6.47,6.47,0,0,1,.47,1.75c.41,2.21,1.21,4.39,1.11,6.64a.33.33,0,0,1-.24.3A8.34,8.34,0,0,1,410.8,487.05Z"/>
                <g>
                    <path class="cls-134" d="M415.51,459.44c-.65,1.89-1.35,5.62,2,7,0,0,4.51,1.39,5.61-5A4.23,4.23,0,0,0,422,457.6c-1-.91-2.53-1.46-4.84-.11A3.67,3.67,0,0,0,415.51,459.44Z"/>
                    <path class="cls-142" d="M414.28,457c-.62-.27-.18,1.4.34,1.84a4.26,4.26,0,0,0,1.08.56,4.55,4.55,0,0,1,2.56,3.46,2.11,2.11,0,0,1,1.06-.63,1,1,0,0,1,1.05.51,3.1,3.1,0,0,1,.09.61,4.45,4.45,0,0,0,.92,2,5,5,0,0,0,2.14-5.75C421.3,453.79,416.4,457.87,414.28,457Z"/>
                    <path class="cls-142" d="M422.77,457.13a3.85,3.85,0,0,1,3.06,1.66,5.92,5.92,0,0,1,.64,1.4,3.3,3.3,0,0,1,.22,1.15c0,1-.87,1.78-.95,2.76a1.84,1.84,0,0,0,2.51,1.88,4.42,4.42,0,0,1-2.89,2.54,6,6,0,0,1-3.9-.31,1.83,1.83,0,0,1-.66-.39,2,2,0,0,1-.33-1.86c.23-1,.71-1.9,1-2.85a4.07,4.07,0,0,0,.07-3c-.28-.62-1.72-1.28-1.65-1.91C420,457.34,422.11,457.1,422.77,457.13Z"/>
                    <path class="cls-134" d="M417.55,466.25l-.09,1.41s2.12.7,3,0V466A3.65,3.65,0,0,1,417.55,466.25Z"/>
                </g>
                <path class="cls-94" d="M416.07,457.17s4.56,3.77,5.55,7.15a8.46,8.46,0,0,0,4.37-1,8.19,8.19,0,0,0,1.69-1.2,3.46,3.46,0,0,0-.58-5.5C424.87,455.23,421.23,454.32,416.07,457.17Z"/>
                <path class="cls-140" d="M416.42,466.19a4.4,4.4,0,0,1,1.91,0,2.88,2.88,0,0,0,1.88-.17c.58-.34,1.06-1.09,1.72-.94s.76.81.79,1.38a2,2,0,0,1-.07.8c-.31.82-1.38,1-2.25,1l-3.82,0C415.08,468.32,415.11,466.59,416.42,466.19Z"/>
                <path class="cls-143" d="M412.25,476.48a2.83,2.83,0,0,0,2.33-.21,2.73,2.73,0,0,0,1.33-1.88,4.45,4.45,0,0,0-.05-1.5,3.17,3.17,0,0,0-.4-1.24c-.58-.88-1.92-.93-2.67-1.68a3.44,3.44,0,0,1-.6-2.52,19.14,19.14,0,0,0,3.87.17,6.59,6.59,0,0,1,3.71.9,6.71,6.71,0,0,1,1.06,1,5,5,0,0,1,1,2.81,6.07,6.07,0,0,1-2.22,4.22c.1-.56-.39-1.8-1-1.9-.82-.14-1.52.65-1.69,1.45a19.83,19.83,0,0,0-.07,2.44,4.33,4.33,0,0,1-3.53,3.77,2.18,2.18,0,0,1-1.24-.09,1.09,1.09,0,0,1-.7-.94,2.15,2.15,0,0,1,.31-.9A5.4,5.4,0,0,0,412.25,476.48Z"/>
                <path class="cls-141" d="M416.74,486.09l1.45-5.67s.54-2.51,2.05-3.17a1,1,0,0,1,1.28.42c.41.68.76,2-.22,4.46l-1.58,4.73S417.33,487,416.74,486.09Z"/>
                <path class="cls-136" d="M415.15,490c.54,1.69.13,3.34-.91,3.67s-2.33-.77-2.87-2.46-.14-3.34.91-3.68S414.61,488.25,415.15,490Z"/>
                <ellipse class="cls-136" cx="417.44" cy="490.21" rx="3.22" ry="1.98" transform="matrix(0.36, -0.93, 0.93, 0.36, -189.39, 705.44)"/>
                <path class="cls-144" d="M417.12,486.52l-.3,1.92a1.8,1.8,0,0,1,1.71.34l.68-1.83S417.38,486.86,417.12,486.52Z"/>
                <path class="cls-144" d="M411.28,487.07l.85,2.31s.85-.9,1.66-.64l-.21-2.13Z"/>
                </g>
            </g>
            <g id="pet-left">
                <g>
                <path class="cls-145" d="M359.4,538.78l-.78,2.86a.87.87,0,0,0,.56,1l6.46,2.15s1.74-1.2-2.62-2.56l-1.41-2.8Z"/>
                <path class="cls-145" d="M364.87,541.63l.12,3a.86.86,0,0,0,.84.83l6.8.13s1.31-1.67-3.26-1.67l-2.18-2.25Z"/>
                <path class="cls-146" d="M372.85,507.4l.73,12.38a7.69,7.69,0,0,1-.73,3.78,13.16,13.16,0,0,1-2.9,3.85s-6.82,9.13-7.83,12c0,0-1.23,1.09-3.05-.29,0,0,3.19-12,8.78-15.88l-3.63-16A7.42,7.42,0,0,0,372.85,507.4Z"/>
                <path class="cls-147" d="M366.28,480.27a3.58,3.58,0,0,0-2.38,2,9.47,9.47,0,0,0-1.1,4.83,11.33,11.33,0,0,1-.08,3.5c-.29.9-1,1.44-1.62,1.24a3,3,0,0,0,.42,2,1,1,0,0,0,1.34.41,1.83,1.83,0,0,0,.42,1.82,1.23,1.23,0,0,0,.61.2l1.08.14a3,3,0,0,0,.95,0c1.13-.17,2.12-1.61,2.31-3.34a16.11,16.11,0,0,0-.28-3.91,7.17,7.17,0,0,1,.31-3.8c.2-.41.47-.72.65-1.14A2.79,2.79,0,0,0,366.28,480.27Z"/>
                <path class="cls-148" d="M364.14,487.3s3.34,7.25,6.89,3.55c0,0,5.58-7.59-.87-10.36a3.26,3.26,0,0,0-1.77-.23C366.63,480.52,363.16,481.72,364.14,487.3Z"/>
                <path class="cls-149" d="M365,489.14c.32.52-.56-1.18-.29-1.74a.91.91,0,0,1,1.47-.27,4.39,4.39,0,0,0,.32.51.81.81,0,0,0,.58.2,2.13,2.13,0,0,0,1.77-1.21,5.28,5.28,0,0,0,.5-2.24c1,1.13,2.2,2.34,3.68,2.46,0,0,1.8-5.79-4.12-6.64a3.14,3.14,0,0,0-1.81.27C365.27,481.34,361.73,483.81,365,489.14Z"/>
                <path class="cls-150" d="M371.4,494s7.39,1.59,9.5.94l5.65-8.7s1.38,0,1.67.73l-4.06,9.24a3.41,3.41,0,0,1-2.22,1.92l-8.87,1.74S373.14,496.25,371.4,494Z"/>
                <path class="cls-151" d="M366.54,490.08s.29,2.32-.58,3.34c0,0,1.78,2.91,4,.22a6.23,6.23,0,0,1-.51-2.11S368.06,492,366.54,490.08Z"/>
                <path class="cls-137" d="M369.44,515.24l3.64-3.47v-2.38c-2.69,2-5.22.4-6.85-.27-.66-.37-1.35-.79-2.08-1.27h0s-5.15,5.58-.8,11.23l2,7.76s-2.83,8.56-.51,14.79h2.32l2-12a15.06,15.06,0,0,0,.94-7Z"/>
                <path class="cls-152" d="M372.72,502.42s2.66-2.8-1.32-8.42l-1.6-.65a2.15,2.15,0,0,1-1.94,1.2,2.18,2.18,0,0,1-1.9-1.13c-.51.22-.94.38-1.22.5l-2.21.9a2.75,2.75,0,0,0-1.54,1.51c-.82,2-2.47,6.21-2.7,9.09a3.59,3.59,0,0,0,.8,2.56l5.86,7.41a2.41,2.41,0,0,0,2.1-1.09l-4.23-7.17a2.39,2.39,0,0,1-.19-2l.94-2.66h0a15.55,15.55,0,0,1,.09,3.62c-3,4.27-5.93,18.71-6.57,19.95.89.53,12.31,5.76,18.06.6C375.16,526.64,372.67,504.75,372.72,502.42Z"/>
                <g>
                    <path class="cls-144" d="M391.61,539.32s-7.66-1.28-13.9.4c0,0-2.65.74-2,7a.79.79,0,0,0,.77.74h0a.93.93,0,0,0,.87-.66c.37-1.15,1.16-3.38,1.83-3.5a8.27,8.27,0,0,0,.71,3.6,1,1,0,0,0,1,.57l.4,0a1.12,1.12,0,0,0,1-1.09,1.87,1.87,0,0,1,.25-1s6.16,1.6,8.72.16a5.46,5.46,0,0,0-.13,1.76.57.57,0,0,0,.36.42c.57.19,1.95.44,1.65-1.86,0,0,.75,1.68,2.18,1.68,0,0,1.3-.17.17-2.14a18,18,0,0,0-1.83-3.06Z"/>
                    <path class="cls-140" d="M394,547a3.4,3.4,0,0,1,1.65-1.26c-.06-.12-.1-.23-.17-.36a18,18,0,0,0-1.83-3.06l-2-2.95s-7.66-1.28-13.9.4c0,0-2.15.62-2.07,5.35.13,0,.25,0,.38,0a4,4,0,0,1,1.84.43c.39-1,.9-2.07,1.35-2.15a8.58,8.58,0,0,0,.38,2.71,4.77,4.77,0,0,1,.67-.06,3.8,3.8,0,0,1,2,.52.79.79,0,0,0,0-.13,1.87,1.87,0,0,1,.25-1s6.16,1.6,8.72.16a8.36,8.36,0,0,0-.15.91,2.66,2.66,0,0,1,.28,0,3.93,3.93,0,0,1,1.75.39,3.32,3.32,0,0,0,0-1A3.56,3.56,0,0,0,394,547Z"/>
                    <path class="cls-143" d="M389.41,541a9,9,0,0,1-6.37-2.66,18.12,18.12,0,0,1-1.38-1.66,7.13,7.13,0,0,0-4.66-3.43c-.4-.13-.82-.26-1.22-.41a4.15,4.15,0,0,1-2.7-2.58,4.84,4.84,0,0,1,.28-2.52c.1-.35.2-.71.27-1.07a6.27,6.27,0,0,0-2-5.5,10.62,10.62,0,0,0-5.53-2.58l.08-.44a11.11,11.11,0,0,1,5.76,2.7,6.7,6.7,0,0,1,2.12,5.91,11.27,11.27,0,0,1-.28,1.11,4.49,4.49,0,0,0-.27,2.29,3.73,3.73,0,0,0,2.43,2.27c.39.15.8.27,1.19.4a9.63,9.63,0,0,1,2.27.91,9.9,9.9,0,0,1,2.61,2.67,19.13,19.13,0,0,0,1.35,1.63,8.49,8.49,0,0,0,7.87,2.31l.1.43A8.32,8.32,0,0,1,389.41,541Z"/>
                    <path class="cls-153" d="M384.64,535.9c0,.29.21.53.47.66a2.23,2.23,0,0,1,.75.43.23.23,0,0,1,.07.17c0,.15-.18.21-.32.25a2.38,2.38,0,0,0-1,.56.72.72,0,0,0-.21.31c-.06.26.17.51.41.62a6.59,6.59,0,0,0,1.84.23.39.39,0,0,1,.23.09.15.15,0,0,1,.05.06c.26.7-.81.66-.82,1.27a.49.49,0,0,0,.26.42,1.08,1.08,0,0,0,1,0,1.6,1.6,0,0,1,.57-.15.48.48,0,0,1,.48.29c.05.21-.08.41-.09.62,0,.4.5.64.89.55a3,3,0,0,0,1-.61,1.24,1.24,0,0,1,1.12-.27,2.63,2.63,0,0,1,.49.33,1.36,1.36,0,0,0,1.79-.35,1.9,1.9,0,0,1,.34-.45c.41-.31,1,.06,1.5-.13l0-.64a1.73,1.73,0,0,0,1.24-.43.65.65,0,0,0,.19-.54c0-.42-.42-.54-.72-.74s-.43-.48-.26-.71.69-.24.67-.54a.37.37,0,0,0-.09-.2,2.38,2.38,0,0,0-1.16-.49.38.38,0,0,1-.23-.13.34.34,0,0,1,.13-.48,1,1,0,0,1,.54-.11.56.56,0,0,0-.34-.56,1.44,1.44,0,0,0-.5-.1c-.07,0,0-.12-.07-.13a25.57,25.57,0,0,1,.37-3.07.55.55,0,0,0-.17-.23.61.61,0,0,0-.37-.1,1.54,1.54,0,0,0-1,.84,17.22,17.22,0,0,0-1.46,3l-2.43.1a25.86,25.86,0,0,0-2.89-4.75,8.67,8.67,0,0,0-.3,3.73c.05.55.34,1.08-.17,1.27S385.21,535.7,384.64,535.9Z"/>
                    <path class="cls-154" d="M391.66,540.54a.21.21,0,0,1-.18-.09.22.22,0,0,1,.06-.31,2,2,0,0,1,1.1-.25h.11a13.62,13.62,0,0,0,2.69-.45c.25-.06.31-.13.32-.17a.17.17,0,0,0-.12-.16,1,1,0,0,0-.38-.07,14.37,14.37,0,0,1-3-.61,1.89,1.89,0,0,1-.69-.29.21.21,0,0,1,0-.31.22.22,0,0,1,.31-.05,1.48,1.48,0,0,0,.53.22,14.28,14.28,0,0,0,2.89.6,1.43,1.43,0,0,1,.58.11.6.6,0,0,1,.35.66c-.08.36-.49.46-.65.5a14.16,14.16,0,0,1-2.78.46h-.11a1.51,1.51,0,0,0-.87.17A.24.24,0,0,1,391.66,540.54Z"/>
                    <path class="cls-154" d="M391.83,540.38s1.14,1.63,1.52-.16A2.3,2.3,0,0,0,391.83,540.38Z"/>
                    <path class="cls-155" d="M390.63,537.72a.6.6,0,1,1-1.2,0v0a.61.61,0,0,1,.58-.57h0A.6.6,0,0,1,390.63,537.72Z"/>
                    <path class="cls-156" d="M390.14,537.42a.41.41,0,0,1-.41.41.39.39,0,0,1-.3-.14.61.61,0,0,1,.58-.57A.4.4,0,0,1,390.14,537.42Z"/>
                    <path class="cls-155" d="M393.89,537.42a.6.6,0,1,1-1.19,0v0a.59.59,0,0,1,.57-.57h0A.6.6,0,0,1,393.89,537.42Z"/>
                    <path class="cls-156" d="M393.4,537.12a.41.41,0,0,1-.41.41.37.37,0,0,1-.29-.14.59.59,0,0,1,.57-.57A.4.4,0,0,1,393.4,537.12Z"/>
                    <path class="cls-157" d="M396.48,538.66a.43.43,0,0,1-.43.43.44.44,0,0,1-.44-.43.44.44,0,0,1,.44-.44A.44.44,0,0,1,396.48,538.66Z"/>
                    <path class="cls-153" d="M375.16,536.9a2.63,2.63,0,0,0-1.91.32,8,8,0,0,0-1.55,1.23l-.89.84c-.25.25-.51.68-.24.9s.48,0,.66-.12.32-.39.54-.48.57,0,.53.29a.51.51,0,0,1-.16.25l-.59.58a1.33,1.33,0,0,0-.4.6.44.44,0,0,0,.3.56.64.64,0,0,0,.52-.24l1-.88a.51.51,0,0,1,.24-.15c.2,0,.34.19.4.38a2.12,2.12,0,0,1,.07.66.71.71,0,0,0,.07.5.43.43,0,0,0,.57,0,2.69,2.69,0,0,0,.56-.79c.18-.27.5-.52.81-.4a.42.42,0,0,1,.16.11c.18.19.17.49.33.7.82,1,2.06-1.36,1.79-2.14A5.5,5.5,0,0,0,375.16,536.9Z"/>
                </g>
                <path class="cls-148" d="M366.76,514.16a10.57,10.57,0,0,1,2,3.86c.2.91-.38,2.37-1.56.74a7.92,7.92,0,0,1-.71-1.12,5.6,5.6,0,0,0-1.38-2.47S366.83,514.88,366.76,514.16Z"/>
                <path class="cls-148" d="M386.55,486.31l.67-3.05a2.22,2.22,0,0,1,.59-1.11l1.93-2s1.09-.65-.87,1.74c0,0,1.38-2.17,1.89-2,0,0,.5.07-1.24,2.18,0,0,1.67-2.47,2-2,0,0,.44.43-2,3.11l-.22,1.31a8.06,8.06,0,0,1,1.89-1.52s.36.21-2.25,3.19l-.72.65Z"/>
                </g>
                <path class="cls-94" d="M373,484.16s-7.14-2-10.32,2.78c0,0,0-1.16-2-1.5a2.25,2.25,0,0,1-1.61-3.21c.67-1.27,2.54-2.75,7-4.05C368.53,477.44,374,479.2,373,484.16Z"/>
            </g>
            <g id="boy-right">
                <path class="cls-95" d="M827.91,508.83s0,1.74-.78,2.21c0,0,1,2.66,3,2.1a1,1,0,0,0,.65-.61,1.24,1.24,0,0,0-.12-1,1.88,1.88,0,0,1,.24-1.11A10.68,10.68,0,0,1,827.91,508.83Z"/>
                <path class="cls-118" d="M832.32,503.5a2.68,2.68,0,0,1,.91.69,4.69,4.69,0,0,1,.56,3.53c-.15.69-1.52,2.83-2.94,2.72a6.69,6.69,0,0,1-3.7-2.1,3.62,3.62,0,0,1-.78-2.35,3,3,0,0,1,.22-.92C827.56,502.61,830.23,502.44,832.32,503.5Z"/>
                <path class="cls-83" d="M829,504.85a1.78,1.78,0,0,1,1-1c.46-.14,1.4.43,1.88.47a2.91,2.91,0,0,0,1.69-.32,1.83,1.83,0,0,0,.95-1.37c-1.31-.29-3.35-1.41-4.68-1.61a4.72,4.72,0,0,0-4.81,3.38,3.11,3.11,0,0,0,.11,1.32,8.22,8.22,0,0,0,1.61,3.17c.11.13.25.28.42.26a.39.39,0,0,0,.3-.4,1.43,1.43,0,0,0-.16-.52,1.76,1.76,0,0,1-.16-1.64c.51-.78.64,0,1.11,0C829.11,506.63,828.86,505.14,829,504.85Z"/>
                <path class="cls-80" d="M823.42,524.24a35.51,35.51,0,0,0-1.08,9.71,3.29,3.29,0,0,1-.7,2.11,53.48,53.48,0,0,0-6.35,10.39,2.09,2.09,0,0,0,2.18,1.37l7.18-8.48a10.77,10.77,0,0,0,2.2-4.29l.7-3.33,3.63,17a1.85,1.85,0,0,0,2.83.3l-1.74-24.24S827.63,527.58,823.42,524.24Z"/>
                <path class="cls-107" d="M819.2,528.05c-.64.49.13,1.24.53,1.63.21.21.47.36.67.58a.87.87,0,0,1,.27.8,1.48,1.48,0,0,1-.54.66.81.81,0,0,0-.34.74.62.62,0,0,0,.78.33,1.67,1.67,0,0,0,.72-.6,2.8,2.8,0,0,0,.8-1.65c0-1-1.05-1.84-1.24-2.83A2.44,2.44,0,0,0,819.2,528.05Z"/>
                <path class="cls-158" d="M827.13,511l-3.71,1.09a10,10,0,0,0-4.07,5l-.79,1.91a6.41,6.41,0,0,0-.44,3.27l.73,5.71a2.09,2.09,0,0,0,2.17-.44v-5a5.37,5.37,0,0,1,1-3.12l1.83-2.59s-1.05,5.39-1.85,8.68a1.53,1.53,0,0,0,.94,1.79c2.06.76,6.24,2,9.65.59a1.77,1.77,0,0,0,1.11-1.78l-.78-9.35,3.83,1.57A7.78,7.78,0,0,0,840,519l5.15-.44s1-1.88.44-2.9c0,0-6.89.22-10.59-2.47,0,0-3.36-2.17-4.72-2.09-.34,0-.69,0-1,0Z"/>
                <path class="cls-77" d="M814.57,547.1a8,8,0,0,0-1,1.31.84.84,0,0,0,0,.83,1.65,1.65,0,0,0,1,.47c1.29.37,2.15,1.56,3.31,2.24a2.26,2.26,0,0,0,.43.17c1.55.57,1-.86,1-.91a8.31,8.31,0,0,1-2.17-3.14.53.53,0,0,0-.13-.26.51.51,0,0,0-.29-.1C815.31,547.47,815.81,545.84,814.57,547.1Z"/>
                <path class="cls-77" d="M831.53,550a8.49,8.49,0,0,0,0,1.67.89.89,0,0,0,.53.64,1.73,1.73,0,0,0,1.07-.22c1.25-.46,2.65,0,4-.17a3.45,3.45,0,0,0,.46-.12c1.58-.47.3-1.3.24-1.32a8.33,8.33,0,0,1-3.62-1.22.55.55,0,0,0-.26-.14.53.53,0,0,0-.29.1C832.35,549.84,831.78,548.23,831.53,550Z"/>
                <path class="cls-46" d="M825.59,511.18a1.86,1.86,0,0,1-.08-1.51.85.85,0,0,1,1.3-.34,5.32,5.32,0,0,0,5.5,1.16.8.8,0,0,1,.8.13c.54.45.3,1.46-.31,2.2a1.43,1.43,0,0,1-.67.44C831,513.59,827.41,514.32,825.59,511.18Z"/>
                <path class="cls-159" d="M825.35,510.65a3.51,3.51,0,0,0-2.58-.5c-.88.12-1.74.42-2.62.57a16.58,16.58,0,0,1-3.66,0c-1.52-.1-3.23-.28-4.2-1.46a13.18,13.18,0,0,0,0,4.81c1.24-.79,2.84-.38,4.28-.08,2.13.44,4.49.54,6.32-.62.52-.33,1-.76,1.52-1.06a2.09,2.09,0,0,1,1.78-.23Z"/>
                <path class="cls-46" d="M825.72,509.25c-2.74.05-6.26,3.87-8.35,6.86-1,1.52-1.94,3.22-3.43,4.31a.72.72,0,0,0-.33.38c0,.23.15.42.34.57a11.94,11.94,0,0,0,3.51,1.9,29.83,29.83,0,0,0,2.82-4.76,14.73,14.73,0,0,1,.89-1.47c1.41-2,3.67-3.44,4.35-5.78C825.52,511.26,826,509.24,825.72,509.25Z"/>
                <path class="cls-159" d="M809.73,509.84a4.43,4.43,0,0,0,1.74.06c.09,0,.21,0,.2-.14a.17.17,0,0,0-.11-.11l-.84-.42c-.34-.17-1.5-.81-1.86-.41S809.36,509.73,809.73,509.84Z"/>
                <path class="cls-159" d="M809.79,513a4.72,4.72,0,0,0,1.67-.49c.09,0,.19-.11.15-.2s-.09-.06-.14-.07l-.92-.14c-.39,0-1.68-.3-1.9.19S809.4,513,809.79,513Z"/>
                <path class="cls-159" d="M809.85,511.49a4.58,4.58,0,0,0,1.69-.46c.08,0,.19-.11.15-.19a.2.2,0,0,0-.15-.08l-.91-.15c-.39-.07-1.67-.34-1.91.15S809.47,511.49,809.85,511.49Z"/>
                <path class="cls-159" d="M810.15,514.45a4.41,4.41,0,0,0,1.51-.87c.08-.05.16-.15.1-.22a.16.16,0,0,0-.16,0l-.92.08c-.39,0-1.71.1-1.81.64S809.78,514.55,810.15,514.45Z"/>
                <path class="cls-101" d="M813.07,523.5a4.49,4.49,0,0,0,1-1.44c0-.08.07-.21,0-.25a.2.2,0,0,0-.16,0l-.79.48c-.34.2-1.49.83-1.35,1.36S812.78,523.75,813.07,523.5Z"/>
                <path class="cls-101" d="M815.78,525.14a4.55,4.55,0,0,0,.49-1.67c0-.09,0-.22-.09-.23s-.1,0-.14.08l-.6.71c-.26.29-1.16,1.25-.86,1.7S815.59,525.47,815.78,525.14Z"/>
                <path class="cls-101" d="M814.52,524.27a4.54,4.54,0,0,0,.52-1.66c0-.09,0-.22-.08-.24a.2.2,0,0,0-.14.08l-.62.7c-.26.29-1.18,1.23-.89,1.69S814.32,524.6,814.52,524.27Z"/>
                <path class="cls-101" d="M817.19,525.61a4.88,4.88,0,0,0,.08-1.75c0-.09,0-.21-.15-.2a.17.17,0,0,0-.11.11l-.42.83c-.18.35-.83,1.49-.44,1.86S817.07,526,817.19,525.61Z"/>
                <ellipse class="cls-48" cx="846.21" cy="499.56" rx="8.59" ry="9.08" transform="translate(-81.02 174.18) rotate(-11.22)"/>
                <path class="cls-160" d="M848.67,493.08l-1.92,2.83a.22.22,0,0,0,.29.32c1-.67,2.66-1.79,3.6-2.57a.23.23,0,0,0-.1-.4l-1.66-.27A.2.2,0,0,0,848.67,493.08Z"/>
                <path class="cls-160" d="M850.8,495l-2.15,1c-.15.07-.14.31,0,.31a25.7,25.7,0,0,0,2.91-.2.17.17,0,0,0,.11-.27L851,495A.12.12,0,0,0,850.8,495Z"/>
                <path class="cls-48" d="M847.4,508.54a3.83,3.83,0,0,0-1.06,2.42c.41-.11.62-.72,1-.64a1,1,0,0,1,.39.22.37.37,0,0,0,.41,0c.11-.08.11-.23.17-.35.17-.34.66-.28,1-.18.11-.2-.08-.42-.27-.56a7.24,7.24,0,0,0-1.46-.83Z"/>
                <path class="cls-122" d="M845.6,516l1.91-.79.79-.2a1.37,1.37,0,0,1,.75,0l.79.25a.4.4,0,0,1-.31.5,1.77,1.77,0,0,1-.78,0l-1.44.21,2.3.07a.44.44,0,0,1,.43.4,5.76,5.76,0,0,1-.16,1.8.46.46,0,0,1-.42.36l-1.27.36a2.66,2.66,0,0,1-1.48,0l-1.53-.49A5.05,5.05,0,0,0,845.6,516Z"/>
                <path class="cls-161" d="M850.66,527.74c-1-1.26-1.89-2.62-1.52-4a3.73,3.73,0,0,1,.2-.56,2.34,2.34,0,0,0,.24-.95,2.43,2.43,0,0,0-.52-1.22,2.62,2.62,0,0,1-.58-2c0-.2,0-.41,0-.61a5.5,5.5,0,0,0-.27-1.17,2.89,2.89,0,0,1-.11-2.12,3,3,0,0,1,.33-.51,2.19,2.19,0,0,0,.35-.58,1.88,1.88,0,0,0-.52-1.7l-.15-.2a3.1,3.1,0,0,1-.79-1.56l.22,0a2.86,2.86,0,0,0,.75,1.45l.15.19a2.06,2.06,0,0,1,.55,1.91,2.25,2.25,0,0,1-.39.65,3.29,3.29,0,0,0-.3.46,2.72,2.72,0,0,0,.12,2,5.06,5.06,0,0,1,.28,1.21,4.56,4.56,0,0,1,0,.64,2.48,2.48,0,0,0,.55,1.88,2.65,2.65,0,0,1,.55,1.34,2.5,2.5,0,0,1-.26,1,4.76,4.76,0,0,0-.19.53c-.34,1.3.51,2.6,1.48,3.81Z"/>
                <path class="cls-107" d="M849.69,516.11l-1.51.39a.67.67,0,0,0-.46.67v1.17a.63.63,0,0,0,.75.68l1.3-.36S850.9,516.75,849.69,516.11Z"/>
                <path class="cls-87" d="M825.81,507.56a7.45,7.45,0,0,1,7.34-5.16s-2.77-5-7.54-2.78C825.61,499.62,820.85,503,825.81,507.56Z"/>
            </g>
            <g id="girl-right">
                <g>
                <path class="cls-95" d="M875,533.67l-1,6.73a4.52,4.52,0,0,0,.1,1.72l2.67,8s1.13,1.13,1.7-.57c0-.18-.5-4.74-.89-7a7.61,7.61,0,0,1,.11-3l1.34-5.56S877.86,531.29,875,533.67Z"/>
                <path class="cls-95" d="M880.18,534l.55,6.13a2.34,2.34,0,0,0,.74,1.52l6.18,5.85a1.19,1.19,0,0,0,1.45-1.32c0-.31-4.75-5.38-5-6.15s.82-6.47.82-6.47S881.75,530.6,880.18,534Z"/>
                <path class="cls-52" d="M876.79,550c-.76,1.05-2.12,1-3,1.77a.53.53,0,0,0-.23.39c0,.24.23.36.42.41a3.86,3.86,0,0,0,1.82,0c.2,0,.39-.1.59-.15l2.08-.62a.39.39,0,0,0,.31-.32,2.38,2.38,0,0,0-.17-1.87,1.29,1.29,0,0,1-.76.63A1.11,1.11,0,0,1,876.79,550Z"/>
                <path class="cls-52" d="M887.74,547.46c-.07,1.29-1.25,1.95-1.6,3.13a.55.55,0,0,0,0,.45.49.49,0,0,0,.58.12,4.05,4.05,0,0,0,1.54-1c.15-.15.28-.3.41-.45l1.41-1.66a.37.37,0,0,0,.1-.16.42.42,0,0,0,0-.27,2.36,2.36,0,0,0-1.15-1.48,1.4,1.4,0,0,1-.3,1A1.13,1.13,0,0,1,887.74,547.46Z"/>
                <path class="cls-100" d="M874.77,527.69s-3.81,15.83,2,22.35c0,0,.57.68,2-.38,0,0-1.93-8.48.74-16.56,0,0-1.32,10.68,7.89,14.44a2,2,0,0,0,1.53-1.49c.15-.51-4.79-6.51-4.79-6.51l1.1-7s.47-4.55-1.33-6.12A12,12,0,0,1,874.77,527.69Z"/>
                <path class="cls-46" d="M879.62,514.21s5.65-.63,7.84-10.24a1.75,1.75,0,0,1,2.64.38s-2.45,9.8-6.56,13.49a1.94,1.94,0,0,0-.63,1.2c-.17,1.39.6,4.61,2,9.11,0,0-2.2,6-10.73,2.13a81.67,81.67,0,0,1-.08-9.75c0-.39-.45-.65-.84-.73l-5.53-1.18a3.74,3.74,0,0,1-2.07-1.38l-3.29-4.41a2.2,2.2,0,0,1,1.44-1.51l3.66,3.55a2.65,2.65,0,0,0,1.92.75l4.72-.16,2.67-.44S878,516.09,879.62,514.21Z"/>
                <path class="cls-95" d="M876.52,514a2,2,0,0,1,.18,1.09,2.62,2.62,0,0,1-.33.86,2.92,2.92,0,0,0,2.29.42,2.73,2.73,0,0,0,1.56-1.16,2.17,2.17,0,0,1-1.12-1.83A4.39,4.39,0,0,1,876.52,514Z"/>
                <path class="cls-107" d="M875.86,514.09a2.41,2.41,0,0,0,1.44.49,2.35,2.35,0,0,0,1.33-.48,6.13,6.13,0,0,0,2.58-3.23,3.67,3.67,0,0,0-1.19-4,5.22,5.22,0,0,0-2-.64,3.81,3.81,0,0,0-1.5-.07,3.37,3.37,0,0,0-1,.47,3.52,3.52,0,0,0-1.9,3.65A5,5,0,0,0,875.86,514.09Z"/>
                <path class="cls-51" d="M878.58,516.81l2.72,16.5c.14.82.87,1.22,1.68,1.42,1.59.41,2.77,0,4.42-1.47l-4-14.36s6.2-6.28,6.35-13.5a2.32,2.32,0,0,0-.86-1.41,2.36,2.36,0,0,0-1.33-.47,24.37,24.37,0,0,1-1.39,3.75,14.21,14.21,0,0,1-4.26,5.74S882.55,515.2,878.58,516.81Z"/>
                <path class="cls-51" d="M877.2,517.25c-.14.27-.8,13.65-1,17.17a1.38,1.38,0,0,1-1,1.25c-1.19.4-3.27.72-4.51-1.16-.2-.31,1.66-9,2.41-12.68a1.7,1.7,0,0,0-1.34-2l-3.83-.77a4.82,4.82,0,0,1-3.06-2l-2.81-4.09a2.05,2.05,0,0,1,1.72-1.62l2.56,2.48A4.37,4.37,0,0,0,869,515l4.16.42Z"/>
                <path class="cls-162" d="M872.57,514.9s.13,4.08,3.58,3.12a1.59,1.59,0,0,0,1.16-1.27c.14-1-.23-2.44-3.17-3.42A1.71,1.71,0,0,0,872.57,514.9Z"/>
                <path class="cls-162" d="M878.58,516.81a3,3,0,0,1,.23-2.27,2.91,2.91,0,0,1,1-1.32,3.65,3.65,0,0,1,2.1-.33,1,1,0,0,1,.61.16c.3.24.22.72.11,1.09-.32,1.1-.7,2.65-1.63,3.4A1.61,1.61,0,0,1,878.58,516.81Z"/>
                <path class="cls-83" d="M882.06,512.06a3.43,3.43,0,0,0,.23-.89c.2-1.88.1-7.46-6-6.46,0,0-5.19,1.07-2.94,7.15,0,0,1.83,3.31-1.54,2.72,0,0,2.3,3.18,4.62,1.43a2.72,2.72,0,0,0,.32-.9,1.19,1.19,0,0,0,0-.6,5,5,0,0,1-1.51-.94c-.85-.81-1.12-1.74-1.44-3.42a.36.36,0,0,1,.43-.43,12.34,12.34,0,0,0,5.22-.4,3.79,3.79,0,0,1,.63,2.25,5.18,5.18,0,0,1-.87,2.16,2.21,2.21,0,0,0,1.05,1.49,2.4,2.4,0,0,0,3.26-1.59S881.41,513.63,882.06,512.06Z"/>
                <path class="cls-95" d="M863.85,511.32l-1-1.82-.59-2.47A.14.14,0,0,0,862,507c-.21.16-.47.59-.13,1.73l-.85-1a1.23,1.23,0,0,0-1.37-.17,1.6,1.6,0,0,0-1,1.72s.25,1.57,2.7,3l1,.63A2.08,2.08,0,0,1,863.85,511.32Z"/>
                <path class="cls-163" d="M862.36,514.81l-.56-.09c.14-.9.27-1.82.37-2.73a6.76,6.76,0,0,0,0-1.61,2.18,2.18,0,0,0-.61-1.33,1.57,1.57,0,0,0-1.2-.4,1.6,1.6,0,0,0-1.13.56,3.05,3.05,0,0,0-.49,1.09,8.4,8.4,0,0,0-.35,3.62l-.56.08a9.12,9.12,0,0,1,.36-3.85,3.69,3.69,0,0,1,.59-1.29,2.23,2.23,0,0,1,3.16-.22,2.71,2.71,0,0,1,.79,1.66,6.94,6.94,0,0,1,0,1.76C862.63,513,862.5,513.9,862.36,514.81Z"/>
                <path class="cls-118" d="M861.06,507.64l.29,1a1.09,1.09,0,0,1-.3,1.1l-.8.78a.6.6,0,0,1-1-.17l-.41-.87a1.34,1.34,0,0,1,.28-1.54C859.66,507.5,860.37,507.09,861.06,507.64Z"/>
                <g>
                    <path class="cls-99" d="M857,513.94l-3.38,10.43a1,1,0,0,0,.71,1.33l7.59,1.53a1,1,0,0,0,1.1-.92l.77-11.13a1,1,0,0,0-.79-1.08l-5-.82A.91.91,0,0,0,857,513.94Z"/>
                    <path class="cls-100" d="M856.44,514.44l-3.66,10.43a1,1,0,0,0,.77,1.33l8.23,1.53a1,1,0,0,0,1.19-.92l.84-11.13a1,1,0,0,0-.85-1.08l-5.41-.82A1,1,0,0,0,856.44,514.44Z"/>
                    <path class="cls-99" d="M863.79,515.46l1,10.49s.44,2.45-2.52,1.76Z"/>
                </g>
                <g>
                    <path class="cls-163" d="M891.07,511l-.55-.08c.14-.91.27-1.83.37-2.73a6.83,6.83,0,0,0,0-1.62,2.21,2.21,0,0,0-.61-1.33,1.68,1.68,0,0,0-2.34.17,3,3,0,0,0-.48,1.09,8.34,8.34,0,0,0-.35,3.61l-.56.08a9.13,9.13,0,0,1,.36-3.85,3.69,3.69,0,0,1,.59-1.29,2.21,2.21,0,0,1,1.54-.77,2.16,2.16,0,0,1,1.62.55,2.71,2.71,0,0,1,.79,1.67,6.86,6.86,0,0,1,0,1.75C891.35,509.2,891.22,510.13,891.07,511Z"/>
                    <g>
                    <path class="cls-99" d="M885.68,510.65l-3.37,10.42a1,1,0,0,0,.71,1.33l7.59,1.53a.94.94,0,0,0,1.1-.91l.77-11.13a1,1,0,0,0-.79-1.08l-5-.83A.94.94,0,0,0,885.68,510.65Z"/>
                    <path class="cls-100" d="M885.16,511.15l-3.66,10.42a1,1,0,0,0,.77,1.33l8.23,1.53a1,1,0,0,0,1.19-.92l.84-11.13a1,1,0,0,0-.85-1.07l-5.41-.83A1,1,0,0,0,885.16,511.15Z"/>
                    <path class="cls-99" d="M892.51,512.17l1,10.48s.44,2.45-2.52,1.76Z"/>
                    </g>
                </g>
                <path class="cls-95" d="M887.53,504.08s.5,2.37,3.13,1.21c0,0,1.25-.8-.51-1.43C890.15,503.86,887.64,502.79,887.53,504.08Z"/>
                </g>
                <path class="cls-51" d="M882.07,509.12a10.1,10.1,0,0,0,.79-2.76,3.39,3.39,0,0,0-.8-2.68,5,5,0,0,0-2.91-1.16,6.84,6.84,0,0,0-4.48.35,7.27,7.27,0,0,0-1.66,1.47c-1.67,1.84-2.27,4.23,1,4C877,508.16,879.3,506.76,882.07,509.12Z"/>
                <path class="cls-156" d="M881.49,502.05a1.9,1.9,0,0,0-.68-.64c.08-.5.86-.94.51-1.3-.17-.17-.45-.09-.7-.07a1.21,1.21,0,0,1-1.24-1.17.94.94,0,0,0-1,1c-.42.06-.78-.27-1.18-.39s-1,.3-.71.62c.49,0,.37.8,0,1.13s-.86.76-.62,1.18,1.18,0,1.79.16c.42.13.62.6.89,1s.87.59,1.12.22l.1-.42L881,503a1,1,0,0,0,.34-.12A.66.66,0,0,0,881.49,502.05Z"/>
            </g>
            </g>
        </g>
        </g>
    </g>
    `
})

Vue.component('background-2', {
    template: `
    <g id="background">
        <rect class="cls-1" width="1366" height="768"/>
        <path class="cls-2" d="M1366,320.3V768H0V350.66c35.33-4.73,70.81,9.65,106.15,15.08,14.45,2.22,28.88,2.94,43.27.25,30.45-5.7,57-26.21,87.8-29.31,49.3-5,93.28,35.43,142.82,36.18,44.32.68,83.63-30.42,127.82-34,62.49-5,117.66,45.21,180.31,47.64,68.12,2.65,131.17-51.64,198.43-40.56,30.47,5,57.91,23.25,88.66,26.08,61.72,5.73,115.33-51,177.27-49,45.94,1.45,88.88,35.3,134,26.43,27-5.3,49.67-25.41,77-28.92C1364.31,320.46,1365.16,320.37,1366,320.3Z"/>
        <path class="cls-3" d="M1366,522.19V768H299.93c-22.76-27-23.77-65.22,19-77.32,23.28-6.6,50.16-2.62,74.05-5.37,37.49-4.33,73.2-16.68,108.38-29.83,71-26.49,142.12-53.86,207.84-91.7l3.37-2c29-16.89,57.07-35.57,87.66-49.41,31.31-14.16,64.71-23.07,98.29-30.32,52.65-11.4,106.44-19,160.29-17.23,42.93,1.39,85.4,8.72,127.69,16.05,60.53,10.44,121.33,21,179.3,41.21Z"/>
        <path class="cls-4" d="M1206,768H0V472.19c201.84,12.08,472.12,37.23,712.58,89.63C920.51,607.12,1106.14,672.8,1206,768Z"/>
        <path class="cls-5" d="M407.16,350.51c-3-2.24-8-4.48-13.55-7.14a68,68,0,0,0,9.36-4.2,2.25,2.25,0,0,0,.22-3.88c-2.44-1.63-6.15-4.17-10.42-7.22-1.29-.92-2.64-1.9-4-2.91A54.27,54.27,0,0,0,399,314.53a2.41,2.41,0,0,0-2-3.85c-4.39.21-11.19-.76-19.26-6.22a54.11,54.11,0,0,1-6.34-5.06c-.21-.17-.41-.37-.62-.57a22.15,22.15,0,0,0,3.22-.19c5.33-.62,15.86-3.26,20.93-14.3a2.31,2.31,0,0,0,.21-.86,2.39,2.39,0,0,0-1.88-2.47c-4.49-1-14-3.71-25.17-11.14-.86-.57-1.74-1.17-2.62-1.8l-.08-.06c-2.45-1.75-5-3.8-7.55-6,0-.48,0-1,0-1.43,9.41,6.33,21.37,5.66,30.39-1.49a1.31,1.31,0,0,0-.31-2.23,50.56,50.56,0,0,1-13-8q-1.65-1.4-3.22-2.94c.58-.45,1.16-.93,1.75-1.44a1,1,0,0,0-.17-1.65c-1.85-1.07-5.53-3.26-9.13-5.85-.94-1.33-1.88-2.68-2.74-4.1s-1.5-2.62-2.21-4c3.87.25,9.73-.83,14.53-8,.49-.74-17.82-10.65-33.07-23.38a24.38,24.38,0,0,0,8.09-5.41,1.66,1.66,0,0,0-.31-2.59A88.52,88.52,0,0,1,309.64,135s-7.09-23.84-14.48,3.82c0,0-19.31,41.32-41.18,52.69a1.63,1.63,0,0,0-.32,2.69,21.14,21.14,0,0,0,9.68,4.54,77.8,77.8,0,0,1-10.56,11.19c-4.74,4-9.91,6.81-14.9,6.55a1,1,0,0,0-.92,1.48c1.66,3.26,6.25,10.05,15.38,10.05,0,0-12,15-24.06,14.26a1,1,0,0,0-.85,1.68,34.26,34.26,0,0,0,3,3c-.4.18-.8.38-1.2.55a50.82,50.82,0,0,1-12.61,3.75,1.31,1.31,0,0,0-1,1.82c4.4,9.85,17.06,12.52,26,12.22-6.5,8.39-20.65,10.37-30.43,12.38a1.31,1.31,0,0,0-.71,2.15,37.89,37.89,0,0,0,26.32,12.53c-2.07,1.86-4.3,3.78-6.69,5.65-6.29,5-13.52,9.62-20.75,12.06a35.68,35.68,0,0,1-3.74,1.07,2.38,2.38,0,0,0-1.44,3.69,53.32,53.32,0,0,0,9.21,10.1c.49.33,1,.64,1.51,1,.32.2.65.38,1,.57l.85.47,1.55.78,1.08.48c.9.39,1.82.74,2.77,1.05.42.15.84.27,1.27.39s.78.22,1.17.32l.48.11c.27.07.54.13.8.17l.74.14,1.17.19c.3.05.61.08.92.11-2.3,1.14-4.7,2.24-7.27,3.26a92.7,92.7,0,0,1-11.92,3.79,16.57,16.57,0,0,1-1.9.13l.22.27a96,96,0,0,1-10.06,1.73,33,33,0,0,0,13.36,11.3A2.38,2.38,0,0,0,212,354c.87.58,1.88,1.2,3,1.86a63.05,63.05,0,0,0,12.4,5.48c-5.25,5.64-13,13.22-20.05,17.39-1.64,1-1.32,2.88.31,4,9.88,6.72,46.9,19.8,72-7.21,1.06-.66,2.11-1.37,3.16-2.14,1.93,4.26,11.3,21,41.72,26.84a2.39,2.39,0,0,0,3-2.65,59.06,59.06,0,0,1-1-6.94c1.41.25,2.82.5,4.34.68a2.31,2.31,0,0,0,2.53-2.86,57.31,57.31,0,0,1-2-15.45c6.78,3.8,28.41,14.08,53.88,7a2.24,2.24,0,0,0-.14-4.4,54.58,54.58,0,0,1-14.05-5.62,57.6,57.6,0,0,0,14.15-3.62,2.27,2.27,0,0,0-.46-4.37,52.82,52.82,0,0,1-8.05-2.15,71.42,71.42,0,0,0,29.86-5.41A2.17,2.17,0,0,0,407.16,350.51Z"/>
        <path class="cls-5" d="M133.32,359a74.16,74.16,0,0,1-30.86,5.6c1.24.44,2.48.82,3.69,1.15,1.62.44,3.19.79,4.63,1.07a2.34,2.34,0,0,1,.47,4.5,58.41,58.41,0,0,1-14.63,3.75,56.77,56.77,0,0,0,14.53,5.81,2.32,2.32,0,0,1,.15,4.55c-26.33,7.36-48.69-3.26-55.7-7.2a58.53,58.53,0,0,0,2,16,2.39,2.39,0,0,1-2.62,3c-1.57-.18-3-.44-4.49-.7a60.58,60.58,0,0,0,1,7.18,2.47,2.47,0,0,1-3.06,2.73C17,400.33,7.35,383,5.36,378.61c-1.08.8-2.17,1.54-3.27,2.23C1.4,381.58.71,382.29,0,383V181.52a246.36,246.36,0,0,0,20.12-34.16c8.71-32.62,17.08-4.51,17.08-4.51C46.69,182.63,75,202.24,83,207.07a2,2,0,0,1,.37,3.06l-.06.05c9.22,6.18,16.37,10.29,16,10.77-5,7.44-11,8.56-15,8.3.73,1.4,1.48,2.79,2.28,4.11s1.86,2.86,2.83,4.24c3.73,2.67,7.53,4.94,9.44,6.05a1.05,1.05,0,0,1,.18,1.7c-.61.53-1.22,1-1.82,1.5q1.63,1.59,3.34,3a52.23,52.23,0,0,0,13.42,8.3,1.35,1.35,0,0,1,.32,2.3c-9.32,7.4-21.69,8.08-31.41,1.54,0,.51,0,1,0,1.54,2.65,2.3,5.27,4.36,7.81,6.17l.08.06c.91.67,1.81,1.28,2.7,1.87,11.6,7.68,21.38,10.52,26,11.51a2.46,2.46,0,0,1,1.94,2.55,2.41,2.41,0,0,1-.21.89C116,298,105.14,300.74,99.64,301.38a23.1,23.1,0,0,1-3.34.2c.22.21.43.41.65.6a56.55,56.55,0,0,0,6.55,5.22c8.34,5.64,15.37,6.64,19.91,6.43a2.48,2.48,0,0,1,2.07,4,56.24,56.24,0,0,1-10.62,11c1.42,1,2.81,2.05,4.15,3,4.41,3.16,8.24,5.78,10.76,7.46a2.33,2.33,0,0,1-.22,4,68.92,68.92,0,0,1-9.68,4.33c5.73,2.76,10.87,5.08,14,7.39A2.25,2.25,0,0,1,133.32,359Z"/>
        <path class="cls-5" d="M982.65,355.76c-2.15-1.58-5.67-3.17-9.61-5.06a47.45,47.45,0,0,0,6.64-3,1.6,1.6,0,0,0,.15-2.75c-1.72-1.16-4.35-3-7.38-5.12-.93-.66-1.9-1.37-2.88-2.1a37.89,37.89,0,0,0,7.32-7.49,1.66,1.66,0,0,0,.29-.62,1.69,1.69,0,0,0-1.71-2.11c-3.11.14-7.93-.54-13.65-4.41a38.15,38.15,0,0,1-4.49-3.58l-.44-.41a17.11,17.11,0,0,0,2.28-.13c3.78-.44,11.24-2.32,14.83-10.14a1.76,1.76,0,0,0,.15-.61,1.7,1.7,0,0,0-1.33-1.75,53.28,53.28,0,0,1-17.84-7.9c-.61-.4-1.23-.82-1.85-1.27l-.06,0c-1.73-1.23-3.51-2.68-5.32-4.24,0-.35,0-.69,0-1.05A18,18,0,0,0,969.25,291a.92.92,0,0,0-.22-1.57,36,36,0,0,1-9.2-5.69c-.79-.67-1.56-1.37-2.32-2.11.43-.33.84-.62,1.28-1a.72.72,0,0,0-.12-1.17c-1.32-.76-3.92-2.32-6.48-4.16-.67-.94-1.33-1.89-1.94-2.9s-1.06-1.85-1.56-2.81c2.74.18,6.89-.59,10.29-5.69.35-.53-12.62-7.55-23.43-16.57a17.58,17.58,0,0,0,5.73-3.84,1.16,1.16,0,0,0-.22-1.83A62.76,62.76,0,0,1,913.54,203s-5-16.9-10.27,2.7c0,0-13.68,29.28-29.18,37.34a1.16,1.16,0,0,0-.22,1.91,15,15,0,0,0,6.84,3.21,54.8,54.8,0,0,1-7.47,7.93c-3.35,2.81-7,4.83-10.55,4.64a.72.72,0,0,0-.66,1.05c1.18,2.31,4.43,7.13,10.9,7.13,0,0-8.49,10.63-17,10.1a.72.72,0,0,0-.6,1.19,24.14,24.14,0,0,0,2.1,2.12l-.85.39a35.94,35.94,0,0,1-8.93,2.66.93.93,0,0,0-.7,1.29c3.12,7,12.09,8.87,18.43,8.66-4.61,5.94-14.64,7.34-21.57,8.77a.93.93,0,0,0-.5,1.53,26.84,26.84,0,0,0,18.64,8.87c-1.47,1.32-3,2.68-4.73,4-4.46,3.52-9.58,6.82-14.7,8.55a27.24,27.24,0,0,1-2.66.75,1.69,1.69,0,0,0-1,2.62,38.43,38.43,0,0,0,6.53,7.16l1.07.68.69.4.6.33,1.1.55.77.35c.63.27,1.28.52,2,.74l.9.28.83.22.34.08.57.12.52.1.83.14.62.07-.39.22c-1.5.74-3.07,1.44-4.73,2.09a65.62,65.62,0,0,1-8.48,2.69c-.82.09-1.32.09-1.32.09l.16.19a70.5,70.5,0,0,1-7.13,1.23,23.33,23.33,0,0,0,9.53,8,1.64,1.64,0,0,0,.6,2c.62.41,1.34.85,2.14,1.32a44.66,44.66,0,0,0,8.79,3.88c-3.73,4-9.2,9.37-14.21,12.32-1.17.7-.94,2,.21,2.83,7,4.76,33.25,14,51-5.11.74-.47,1.49-1,2.24-1.52,1.36,3,8,14.9,29.56,19a1.69,1.69,0,0,0,2.1-1.87,41.52,41.52,0,0,1-.69-4.92c1,.18,2,.35,3.08.48a1.63,1.63,0,0,0,1.79-2,40.57,40.57,0,0,1-1.4-10.95c4.81,2.7,20.13,10,38.19,4.94a1.59,1.59,0,0,0-.1-3.12,38.34,38.34,0,0,1-9.94-4,40.25,40.25,0,0,0,10-2.56,1.61,1.61,0,0,0-.32-3.09,38.21,38.21,0,0,1-5.63-1.52,50.72,50.72,0,0,0,21.08-3.84A1.54,1.54,0,0,0,982.65,355.76Z"/>
        <g>
          <path class="cls-6" d="M1167.54,341.35c-3.6-2.65-9.48-5.3-16.06-8.46a78.57,78.57,0,0,0,11.09-5,2.66,2.66,0,0,0,.26-4.59c-2.88-1.93-7.28-4.94-12.33-8.55-1.53-1.09-3.13-2.26-4.75-3.45a64,64,0,0,0,12.16-12.58,2.7,2.7,0,0,0,.49-1,2.82,2.82,0,0,0-2.86-3.53c-5.19.24-13.25-.91-22.81-7.37a66.09,66.09,0,0,1-7.5-6c-.25-.21-.5-.44-.74-.68a26.54,26.54,0,0,0,3.82-.22c6.3-.74,18.78-3.87,24.78-16.94a2.93,2.93,0,0,0,.25-1,2.84,2.84,0,0,0-2.23-2.92c-5.32-1.14-16.52-4.39-29.81-13.19-1-.68-2-1.38-3.09-2.13l-.1-.07c-2.91-2.08-5.91-4.44-8.95-7.09,0-.58,0-1.16,0-1.75,11.14,7.49,25.3,6.71,36-1.77a1.55,1.55,0,0,0-.36-2.63,60,60,0,0,1-15.38-9.51c-1.3-1.1-2.58-2.26-3.82-3.47.68-.53,1.38-1.1,2.08-1.71a1.21,1.21,0,0,0-.2-1.95c-2.2-1.26-6.55-3.87-10.82-6.93-1.12-1.58-2.22-3.17-3.24-4.86-.92-1.52-1.78-3.1-2.62-4.7,4.58.3,11.52-1,17.2-9.52.37-.54-7.82-5.26-18.39-12.34l.07-.05a2.23,2.23,0,0,0-.42-3.5c-9.18-5.55-41.61-28-52.48-73.57,0,0-9.58-32.22-19.56,5.15,0,0-10.9,23.31-26.59,44a70.1,70.1,0,0,1-9,8.27,126.15,126.15,0,0,1-8.79,11.13,60.07,60.07,0,0,1-11.29,7.83,2.16,2.16,0,0,0-.76,3.17c-4.49,3.07-9.18,5-13.73,4.79a1.2,1.2,0,0,0-1.1,1.76c2,3.86,7.41,11.9,18.22,11.9,0,0-14.2,17.76-28.49,16.89a1.21,1.21,0,0,0-1,2,39.84,39.84,0,0,0,3.52,3.54c-.48.21-1,.45-1.43.65a60.34,60.34,0,0,1-14.92,4.45,1.55,1.55,0,0,0-1.17,2.15c5.22,11.66,20.2,14.83,30.8,14.46-7.7,9.94-24.46,12.28-36,14.67a1.56,1.56,0,0,0-.85,2.55,44.88,44.88,0,0,0,31.18,14.83c-2.45,2.21-5.1,4.48-7.92,6.7-7.45,5.88-16,11.39-24.57,14.27a40.15,40.15,0,0,1-4.44,1.27,2.82,2.82,0,0,0-1.71,4.37,63.93,63.93,0,0,0,10.91,12c.58.39,1.18.76,1.79,1.14l1.15.68,1,.54c.59.32,1.2.62,1.83.93.42.2.85.38,1.29.57a33.66,33.66,0,0,0,3.28,1.24c.49.18,1,.33,1.49.47s.93.26,1.39.37l.57.13.95.21.88.17,1.37.22,1.12.13-.07,0c-2.7,1.34-5.54,2.63-8.55,3.82a112.24,112.24,0,0,1-14.13,4.49,20.54,20.54,0,0,1-2.25.15l.26.32a110.17,110.17,0,0,1-11.91,2.05,39.17,39.17,0,0,0,15.83,13.38,2.8,2.8,0,0,0,1.1,3.41c1,.68,2.23,1.42,3.57,2.2a74.77,74.77,0,0,0,14.68,6.49c-6.22,6.68-15.36,15.66-23.74,20.6-1.94,1.16-1.57,3.41.36,4.72,11.68,7.94,55.38,23.38,85-8.35q2-1.25,3.93-2.7c2.32,5.11,13.45,24.88,49.38,31.76a2.84,2.84,0,0,0,3.52-3.13,67.11,67.11,0,0,1-1.15-8.22c1.68.29,3.35.59,5.14.8a2.74,2.74,0,0,0,3-3.39,67.36,67.36,0,0,1-2.34-18.29c8.07,4.52,33.68,16.66,63.81,8.24a2.65,2.65,0,0,0-.17-5.21,64.17,64.17,0,0,1-16.64-6.66,67.65,67.65,0,0,0,16.75-4.29,2.68,2.68,0,0,0-.54-5.16,64.33,64.33,0,0,1-9.53-2.55,84.58,84.58,0,0,0,35.35-6.41A2.58,2.58,0,0,0,1167.54,341.35Z"/>
          <path class="cls-6" d="M576.62,130.3a12.13,12.13,0,0,0-4.2.75,19.38,19.38,0,0,0-17.49-10.37,20.24,20.24,0,0,0-11,3.19c-2.65-6.87-9.76-11.79-18.12-11.79a20,20,0,0,0-13.17,4.82,33.35,33.35,0,0,0-40.07-1.28C469.31,110,461.43,106,452.23,106c-12.13,0-22,6.92-22,15.44v.23a21,21,0,0,0-5.5-.74c-10.08,0-18.34,7.16-19.15,16.26a11.89,11.89,0,0,0-6.38-1.83C393,135.36,388,140,388,145.73s5,10.38,11.26,10.38a11.92,11.92,0,0,0,5.79-1.49c.44,8.16,7.76,14.65,16.72,14.65a17.61,17.61,0,0,0,9.83-2.94A24.35,24.35,0,0,0,452,176.86,25.43,25.43,0,0,0,463,174.35a17.41,17.41,0,0,0,30-1.12,17.18,17.18,0,0,0,13.79,6.67A16.89,16.89,0,0,0,522.06,171a17.85,17.85,0,0,0,6.78,1.33c9.26,0,16.75-6.92,16.75-15.44a14.62,14.62,0,0,0-.31-3l.25,0a20.39,20.39,0,0,0,9.4,2.27,19.78,19.78,0,0,0,15.25-6.94,11.84,11.84,0,0,0,6.44,1.88c6.22,0,11.26-4.65,11.26-10.38S582.84,130.3,576.62,130.3Z"/>
          <path class="cls-6" d="M202.85,68a7.22,7.22,0,0,0-2.52.45,11.62,11.62,0,0,0-10.5-6.22,12.18,12.18,0,0,0-6.59,1.91,11.51,11.51,0,0,0-10.87-7.07A12.07,12.07,0,0,0,164.46,60a20,20,0,0,0-24-.77c-2-3.38-6.68-5.77-12.2-5.77-7.28,0-13.18,4.15-13.18,9.26v.14a12.7,12.7,0,0,0-3.3-.44c-6,0-11,4.29-11.49,9.75A7.15,7.15,0,0,0,96.42,71a6.25,6.25,0,1,0,0,12.45,7.16,7.16,0,0,0,3.47-.89c.27,4.9,4.66,8.79,10,8.79a10.54,10.54,0,0,0,5.89-1.76A14.63,14.63,0,0,0,128.05,96a15.28,15.28,0,0,0,6.65-1.51,10.44,10.44,0,0,0,18-.67,10.33,10.33,0,0,0,8.27,4,10.13,10.13,0,0,0,9.11-5.35,10.73,10.73,0,0,0,4.07.79c5.55,0,10-4.14,10-9.26a8.18,8.18,0,0,0-.19-1.79l.15,0a12.17,12.17,0,0,0,5.64,1.36A11.86,11.86,0,0,0,199,79.33a7.12,7.12,0,0,0,3.87,1.13,6.25,6.25,0,1,0,0-12.45Z"/>
          <path class="cls-6" d="M916.35,77.25a7.22,7.22,0,0,0-2.52.45,11.63,11.63,0,0,0-10.5-6.22,12.1,12.1,0,0,0-6.59,1.91,11.53,11.53,0,0,0-10.87-7.08,12,12,0,0,0-7.91,2.9,20,20,0,0,0-24-.77c-2-3.39-6.69-5.77-12.21-5.77-7.28,0-13.18,4.15-13.18,9.26,0,0,0,.09,0,.14a12.34,12.34,0,0,0-3.3-.44c-6,0-11,4.29-11.49,9.75a7.15,7.15,0,0,0-3.83-1.1,6.25,6.25,0,1,0,0,12.45,7.19,7.19,0,0,0,3.47-.89c.27,4.89,4.66,8.79,10,8.79a10.64,10.64,0,0,0,5.89-1.76,14.63,14.63,0,0,0,12.23,6.31,15.27,15.27,0,0,0,6.65-1.5,10.45,10.45,0,0,0,18-.68,10.29,10.29,0,0,0,8.27,4,10.16,10.16,0,0,0,9.11-5.35,10.89,10.89,0,0,0,4.07.79c5.55,0,10.05-4.15,10.05-9.26a8.84,8.84,0,0,0-.19-1.79l.15,0a12.17,12.17,0,0,0,5.64,1.36,11.87,11.87,0,0,0,9.15-4.16,7.12,7.12,0,0,0,3.87,1.13,6.25,6.25,0,1,0,0-12.45Z"/>
          <path class="cls-6" d="M1348,98.76a12.83,12.83,0,0,0-4.46.8,20.57,20.57,0,0,0-18.57-11,21.52,21.52,0,0,0-11.67,3.38c-2.81-7.29-10.35-12.51-19.23-12.51a21.33,21.33,0,0,0-14,5.12,35.37,35.37,0,0,0-42.53-1.36c-3.47-6-11.83-10.21-21.6-10.21-12.88,0-23.32,7.34-23.32,16.39,0,.08,0,.16,0,.25a22,22,0,0,0-5.84-.79c-10.7,0-19.47,7.6-20.33,17.26a12.54,12.54,0,0,0-6.77-2c-6.6,0-12,4.93-12,11s5.36,11,12,11a12.6,12.6,0,0,0,6.14-1.58c.47,8.66,8.24,15.55,17.76,15.55a18.74,18.74,0,0,0,10.43-3.12,25.86,25.86,0,0,0,21.63,11.18,27,27,0,0,0,11.77-2.67,18.48,18.48,0,0,0,31.9-1.19,18.2,18.2,0,0,0,14.63,7.08A18,18,0,0,0,1290.1,142a19,19,0,0,0,7.2,1.4c9.82,0,17.78-7.33,17.78-16.38a15.09,15.09,0,0,0-.34-3.17l.27,0a21.63,21.63,0,0,0,10,2.41,21,21,0,0,0,16.19-7.36,12.59,12.59,0,0,0,6.84,2c6.6,0,12-4.93,12-11S1354.62,98.76,1348,98.76Z"/>
        </g>
        <g id="christmas-tree">
          <g>
            <path class="cls-7" d="M870.24,595.33c-46.24,18.78-81.76,4.73-82.89,4.28,5.18,20,28.82,29.38,44.62,33.45,4.39,1.13,4.56,6.65.25,7.84-55.05,15.37-100.15-14.8-100.15-14.8-7.48,17.13-5,36.66-3,46.18.58,2.85-2.17,5.3-5.3,4.71-62.39-11.93-75.17-49.63-75.17-49.63-44.63,55.53-115,30.89-133.31,18.47-2.91-2-3.47-5.36-.54-7.11,20.83-12.26,44.89-41.16,46.91-43.58-37.44,3.58-55.32-13.13-64.16-25.76a167.42,167.42,0,0,0,82.06-33c18.3-13.86,38.73-24.74,60.79-31.12,50.74-14.68,82.28-6.93,104.38,1.62a161.87,161.87,0,0,1,60,41.07c19.54,21,53.22,30.72,66.45,40.46A3.88,3.88,0,0,1,870.24,595.33Z"/>
            <path class="cls-8" d="M863.73,568.24c-41.13,22.37-74.83,11.23-75.9,10.87,6.25,19.5,28.67,26.91,43.5,29.69a4,4,0,0,1,.81,7.78c-32.54,12.94-62.56,6-79.31-.33A92.7,92.7,0,0,1,739,609.86a61.87,61.87,0,0,0-2.55,12.58c-1.36,13.57,1.28,26.47,3.2,33.58a4.12,4.12,0,0,1-4.52,5.1c-58.25-6.88-72.79-43.34-72.79-43.34-37.9,39.61-82.95,28.38-100.09,22a4,4,0,0,1-1-7A120.53,120.53,0,0,0,577.52,617a294.55,294.55,0,0,0,23.68-31.48c-25,12.07-44.84,9.59-59.57,2.51-12.7-6.1-21.57-15.62-26.57-22.17,0,0,13.32.26,32.89-10.1,10-5.32,21.72-13.41,34.11-25.8l23.35-28.68c35.42-47.15,94.2-39.83,135.22-26.61,22,7.07,41.74,19.67,58.23,36,12.94,12.83,31.71,27.12,46.67,37.8,7.62,5.44,14.24,10,18.59,12.86A4,4,0,0,1,863.73,568.24Z"/>
            <g>
              <path class="cls-9" d="M562.21,639.75a4,4,0,0,1-1-7c19.06-14.47,40-47.28,40-47.28A85.39,85.39,0,0,1,580,592.67c-1.66,2.59-21.66,33.23-39.91,47.09a4,4,0,0,0,1,7c13.2,4.93,43,12.71,73.29-2.08C592.08,649,572.3,643.52,562.21,639.75Z"/>
              <path class="cls-9" d="M579.5,592.76c-33.88,6.26-55.42-15.17-64.44-27,0,0,30.47.62,67-35.9l23.36-28.69a87.76,87.76,0,0,1,32.8-27.11c-20.06,4.19-39.05,14.36-53.92,34.15L560.94,537s-29.28,29.84-63.58,29.39a4.07,4.07,0,0,0-3.42,6.51C504.71,586.92,533.32,614.75,579.5,592.76Z"/>
              <path class="cls-9" d="M787.81,579.09a32.73,32.73,0,0,0,5.34,10.08,108.51,108.51,0,0,0,40.65-9.55C806.8,585.7,787.81,579.09,787.81,579.09Z"/>
              <path class="cls-9" d="M739,609.85a62.92,62.92,0,0,0-2.74,15c17.32,5.75,45,10.61,74.79-1.24a4.11,4.11,0,0,0,1.92-1.51C771.89,629.73,739,609.85,739,609.85Z"/>
              <path class="cls-9" d="M717.22,657.79c-43.41-11.24-54.91-40-54.91-40a99.31,99.31,0,0,1-17,14.26c7.56,11,26.84,31.17,68.64,36.1a4.11,4.11,0,0,0,4.53-5.09C718.08,661.56,717.65,659.77,717.22,657.79Z"/>
            </g>
            <path class="cls-7" d="M845.53,548.46c-42.62,32.78-86.49-4.65-88.39-6.3,0,0,0,0-.07,0-7.27,18.65-5.35,58.53-4.24,74.14,0,.75.1,1.46.16,2.09a4.3,4.3,0,0,1-4.16,4.59,88,88,0,0,1-12.42-.49,72.82,72.82,0,0,1-39.56-17c-23.57-19.85-30.75-49.5-30.75-49.5-1.07,2-2.14,3.92-3.23,5.81C635.89,608.38,604,619,577.52,617c-20.77-1.6-38.26-11-47.46-17a4.23,4.23,0,0,1,.86-7.58q5.7-2,10.71-4.37c28.85-13.26,41.22-31.8,41.22-31.8a63,63,0,0,1-13.5,2.36,56.1,56.1,0,0,1-21.4-2.83c10-5.32,21.72-13.41,34.11-25.8l23.35-28.68c35.42-47.15,94.2-39.83,135.22-26.61,22,7.07,41.74,19.67,58.23,36C811.8,523.49,830.57,537.78,845.53,548.46Z"/>
            <path class="cls-8" d="M857.45,522.78a4.25,4.25,0,0,1-.74,1.55c-38.12,50.88-82.57,29.18-99.57,17.83,0,0,0,0-.07,0a71.24,71.24,0,0,1-7-5.28c-7.62,19.55-5.14,62.45-4.08,76.23a4.3,4.3,0,0,1-4.16,4.59c-18.69.57-33.42-4.57-44.94-12.21-18.83-12.48-29.09-31.66-34-43.69a83.09,83.09,0,0,1-3.8-11.09C614.14,634.48,554,612.69,528.4,598c-2-1.18-3.82-2.29-5.38-3.31a4.24,4.24,0,0,1,.86-7.58c23.17-8.31,37.85-20.63,45.47-28.53,1.53-1.6,2.8-3,3.77-4.17,1.81-2.16,2.69-3.46,2.69-3.46a62,62,0,0,1-17,2.46c-.92,0-1.81,0-2.71-.07l-.2,0c-.75,0-1.51-.09-2.27-.16a6.48,6.48,0,0,1-.77-.09q-.93-.07-1.83-.21c-.7-.1-1.39-.21-2.08-.33-.45-.07-.89-.16-1.32-.25s-.95-.19-1.42-.31l-.86-.2c-.71-.17-1.41-.35-2.1-.56s-1.51-.44-2.25-.7c-1.71-.55-3.34-1.18-4.95-1.87-.65-.28-1.3-.56-1.93-.86-.95-.46-1.87-.92-2.76-1.39-.52-.28-1-.55-1.52-.83s-1.16-.67-1.74-1c-.92-.56-1.81-1.13-2.69-1.71a95.52,95.52,0,0,1-16.44-18,4.24,4.24,0,0,1,2.57-6.58,61.14,61.14,0,0,0,6.69-1.9c12.9-4.35,25.8-12.64,37-21.49a266.35,266.35,0,0,0,35-33.47c18-28.72,35.51-48.55,51.93-62,32.36-26.43,72.5-26.86,105.25-4.4a115.73,115.73,0,0,1,14.93,14.66,191.32,191.32,0,0,0,34.36,31.78,1.7,1.7,0,0,1,.14.1c1.57,1.13,3.14,2.19,4.67,3.21,20,13.25,36.9,18.14,44.91,19.85a4.27,4.27,0,0,1,3.36,4.4,4.08,4.08,0,0,1-.37,1.53c-9.05,19.67-27.84,24.39-37.34,25.5a40.2,40.2,0,0,1-5.76.33c.37.35.74.71,1.11,1a97,97,0,0,0,11.32,9c14.39,9.73,26.53,11.46,34.37,11.09A4.27,4.27,0,0,1,857.45,522.78Z"/>
            <g>
              <path class="cls-9" d="M593.78,445.51c11.4-18.2,22.61-32.81,33.47-44.5-14.09,13.05-28.89,30.9-44,55.06,0,0-2.68,3.18-7.28,8A254.81,254.81,0,0,0,593.78,445.51Z"/>
              <path class="cls-9" d="M845.74,477.05a51.79,51.79,0,0,1-23.08,8.41,40.2,40.2,0,0,1-5.76.33c.37.35.74.71,1.11,1,2.44,2.24,4.83,4.24,7.17,6A43,43,0,0,0,845.74,477.05Z"/>
              <path class="cls-9" d="M586.37,540.35s-4.15,6.21-13.25,14c1.81-2.16,2.69-3.46,2.69-3.46a62,62,0,0,1-17,2.46c-.92,0-1.81,0-2.71-.07l-.2,0c-.75,0-1.51-.09-2.27-.16a6.48,6.48,0,0,1-.77-.09q-.93-.07-1.83-.21c-.7-.1-1.39-.21-2.08-.33-.45-.07-.89-.16-1.32-.25s-.95-.19-1.42-.31l-.86-.2c-.71-.17-1.41-.35-2.1-.56s-1.51-.44-2.25-.7c-1.71-.55-3.34-1.18-4.95-1.87-.65-.28-1.3-.56-1.93-.86-.95-.46-1.87-.92-2.76-1.39-.52-.28-1-.55-1.52-.83s-1.16-.67-1.74-1c-.92-.56-1.81-1.13-2.69-1.71a95.52,95.52,0,0,1-16.44-18,4.24,4.24,0,0,1,2.57-6.58,61.14,61.14,0,0,0,6.69-1.9C530.28,530.37,553.67,549.69,586.37,540.35Z"/>
              <path class="cls-9" d="M760.59,526.27A70.84,70.84,0,0,0,756.91,542c16.13,10.85,57.86,31.63,95-11.71C807.47,567.92,760.59,526.27,760.59,526.27Z"/>
              <path class="cls-9" d="M533.57,584.09a4.65,4.65,0,0,1-.71-.61c-2.84,1.25-5.83,2.46-9,3.59a4.24,4.24,0,0,0-.86,7.58c18.5,12,70.25,37.84,115.23-13.33C596,618,550.65,595.2,533.57,584.09Z"/>
              <path class="cls-9" d="M669.62,540.1c-3,5.56-6,10.65-9.12,15.32,5.2,15.56,25.88,63.89,81.29,62.23a4.3,4.3,0,0,0,4.16-4.59c-.13-1.63-.27-3.67-.42-6C685.19,604.26,669.62,540.1,669.62,540.1Z"/>
            </g>
            <path class="cls-7" d="M812.1,496a3.4,3.4,0,0,1-.58.26c-1.36.41-2.71.78-4.07,1.09-24.48,6.2-50.89,2.54-72.8-12.56-5.72,20.41-10.84,41.56-6.92,65.07a2.34,2.34,0,0,1-2.73,2.64c-45.31-7.47-57.82-41-63-59.69-17.18,34.19-54.66,45.42-86.35,39.76a2.36,2.36,0,0,1-1.29-3.93c11.3-12.14,21.33-25.25,29.57-41.11-16,10.12-37.43,10.14-55.74,2a266.35,266.35,0,0,0,35-33.47c18-28.72,35.51-48.55,51.93-62,40.09-32.73,92.09-25.59,127.22,15.54a188.55,188.55,0,0,0,39.17,35.09,45.86,45.86,0,0,1-13-6.06c-.86,21.46,11.72,39.11,24.15,53.87A2.31,2.31,0,0,1,812.1,496Z"/>
            <path class="cls-8" d="M783.25,428.12C782.39,449.58,795,467.23,807.4,482a2.33,2.33,0,0,1-1.16,3.73c-25.61,7.66-53.75,4.47-76.87-11.47-5.72,20.41-10.84,41.57-6.92,65.08a2.34,2.34,0,0,1-2.72,2.64c-45.32-7.48-57.83-41.06-63-59.7-17.18,34.2-54.66,45.42-86.35,39.76a2.36,2.36,0,0,1-1.29-3.93c11.3-12.14,21.33-25.25,29.57-41.11-23.46,14.86-58.62,7.94-78.45-14.57a2.33,2.33,0,0,1,1.26-3.83c17.46-3.59,42.71-7.11,54.31-22.07-16,.54-38.54-4.22-46.41-21.77a2.34,2.34,0,0,1,1.76-3.24,91.08,91.08,0,0,0,22.49-6.68c1.62-.71,3.26-1.47,4.88-2.26a135.72,135.72,0,0,0,35.74-25.71,123.9,123.9,0,0,0,17.6-21.92c76.67-123,169.17,7,169.17,7a133,133,0,0,0,8.6,16.83,119.48,119.48,0,0,0,12.78,17.38,107.53,107.53,0,0,0,11.33,11.09,90.46,90.46,0,0,0,23.18,14.31,2.32,2.32,0,0,1,.54,4C821.39,438.23,800,439.4,783.25,428.12Z"/>
            <g>
              <path class="cls-9" d="M721.4,530.73C679,522.11,667,489.85,662,471.71c-17.18,34.2-54.66,45.42-86.35,39.76a2.11,2.11,0,0,1-.5-.17c-2,2.3-4,4.58-6.07,6.8a2.36,2.36,0,0,0,1.29,3.93c31.69,5.66,69.17-5.56,86.35-39.76,5.14,18.64,17.65,52.22,63,59.7a2.34,2.34,0,0,0,2.72-2.64C722,536.43,721.63,533.56,721.4,530.73Z"/>
              <path class="cls-9" d="M575.81,436.52a26.76,26.76,0,0,0,10.56-8.8c-14,.48-38.36-4.9-48.15-17.63-2.38.59-4.73,1.07-7.06,1.42a2.34,2.34,0,0,0-1.76,3.24C536.06,429.6,554.69,438.28,575.81,436.52Z"/>
              <path class="cls-9" d="M597.57,477.66c2.23-3.59,4.37-7.32,6.4-11.22-21.64,13.69-53.22,8.86-73.56-9.63-3.1.62-6.11,1.2-8.91,1.78a2.33,2.33,0,0,0-1.26,3.83C539.76,484.58,574.12,491.61,597.57,477.66Z"/>
              <path class="cls-9" d="M803.44,477.17c-23.34,4.82-48.07.8-68.79-13.48-1.11,3.94-2.18,7.91-3.18,11.92,22.71,14.73,49.93,17.54,74.77,10.11A2.33,2.33,0,0,0,807.4,482C806.08,480.42,804.75,478.81,803.44,477.17Z"/>
              <path class="cls-9" d="M836.93,421.51c-.9-.38-1.8-.78-2.69-1.19a44.87,44.87,0,0,1-45.71-2.75A53,53,0,0,0,790,431.86c15.51,7,33.51,4.72,47.52-6.39A2.32,2.32,0,0,0,836.93,421.51Z"/>
            </g>
            <path class="cls-7" d="M764.11,410.12c3.64,13.27,14.48,22.67,16.72,34,.26,1.33-2.05,2.85-3.38,3.08-35.53,6.12-60.86-24.78-60.86-24.78,1.15,21.42,9.07,36,12.32,44a3.55,3.55,0,0,1-4.15,4.69c-46.68-6.52-57.44-43.41-57.44-43.41-22.26,41.41-59.53,35.88-72.31,33.93a1.83,1.83,0,0,1-.9-3.19c15-13.41,24.76-40.47,25-41.32-34.91,17.53-57.51-2.81-65.13-11.59a1.71,1.71,0,0,1-.37-.72c1.62-.71,3.26-1.47,4.88-2.26,20.48-1.11,40-25.43,40-25.43a31.66,31.66,0,0,1-4.21-.28,123.9,123.9,0,0,0,17.6-21.92c76.67-123,174.57,18.49,177.77,23.79a24.68,24.68,0,0,1-7.85-1.59c2.75,6,28,26.72,32,30.06C785.22,429.48,764.11,410.12,764.11,410.12Z"/>
            <path class="cls-8" d="M811.13,399.4c-35.16,30.47-58-1.68-58-1.68,3.65,13.26,17.23,32.94,22,39.59a1.84,1.84,0,0,1-1.21,2.87C738.4,446.3,711.75,412,711.75,412c1.15,21.41,8.52,41.69,11.78,49.69a1.83,1.83,0,0,1-2.29,2.41c-44.73-14.85-53.83-46.38-53.83-46.38-22.26,41.4-63.14,38.85-75.92,36.9a1.83,1.83,0,0,1-.9-3.19c15-13.41,24.76-40.47,25-41.32-34.91,17.53-57.51-2.81-65.13-11.59a1.82,1.82,0,0,1,1.52-3C573.56,396.84,595,370.1,595,370.1c-16.3,0-24.48-12.1-27.46-17.91a1.81,1.81,0,0,1,1.66-2.64c8.88.48,18.12-4.61,26.57-11.67,10.49-8.8,19.75-20.67,25.52-28.84a116.24,116.24,0,0,0,29.9-35,59.19,59.19,0,0,1,27.34-10.56c16.63-1.85,30.4,4.19,40.34,11.16,13.6,38.69,94.17,80.62,92.79,82.69-14.08,21.12-33.35,12.77-33.35,12.77,4.33,9.52,25.61,22.37,32.56,26.37A1.82,1.82,0,0,1,811.13,399.4Z"/>
            <g>
              <path class="cls-9" d="M615,411.68a143.41,143.41,0,0,0,6-13.89c-34.54,15.85-53.28,6.39-64.37-2.4a27.29,27.29,0,0,1-4.52.13,1.82,1.82,0,0,0-1.52,3C557.55,406.62,575.81,429.48,615,411.68Z"/>
              <path class="cls-9" d="M720.48,453.58a1.9,1.9,0,0,1-1,0c-44.73-14.86-53.83-46.39-53.83-46.39-19.08,35.48-51.81,38.68-68.83,37.64a54.82,54.82,0,0,1-6.23,6.63,1.83,1.83,0,0,0,.9,3.19c12.78,1.95,53.66,4.5,75.92-36.9,0,0,9.1,31.53,53.83,46.38a1.83,1.83,0,0,0,2.29-2.41C722.71,459.69,721.65,456.93,720.48,453.58Z"/>
              <path class="cls-9" d="M810.83,396.47c-1.52-.88-3.75-2.19-6.31-3.79-32.39,23.64-53.14-5.52-53.14-5.52a80.81,80.81,0,0,0,7.09,16.2c8.7,7.6,27.52,17.82,52.66-4A1.82,1.82,0,0,0,810.83,396.47Z"/>
              <path class="cls-9" d="M770,429.92c-34.45,4.42-60-28.49-60-28.49a132.3,132.3,0,0,0,2.59,19.4c-.38-2.91-.67-5.86-.83-8.84,0,0,26.65,34.31,62.18,28.19a1.84,1.84,0,0,0,1.21-2.87C773.92,435.6,772.1,433,770,429.92Z"/>
            </g>
            <path class="cls-7" d="M783.76,338.56c-20.83,18.77-46,10-46,10,0,15.49,5.28,21.12,3.75,39.38-.22,2.62-.35,5.16-3,5.53C700.32,398.68,685.43,363,685.43,363c-19.13,28.86-56.83,24.28-74.64,18.18-3-1-3.41-4.25-1.42-6.69,14-17.12,21-31.2,21-31.2-27.08,4.3-32.37-3.37-34.63-5.37,10.49-8.8,19.75-20.67,25.52-28.84a116.24,116.24,0,0,0,29.9-35,59.19,59.19,0,0,1,27.34-10.56c16.63-1.85,30.4,4.19,40.34,11.16,8.37,15.61,21.45,28.65,33.94,38.57,1.87,1.48,3.72,2.9,5.55,4.24C766.91,325.83,783.86,338.49,783.76,338.56Z"/>
            <path class="cls-8" d="M779.35,330.42c-24.34,18.5-53.1,7.55-53.1,7.55,0,15.49,7.68,33,11.69,41.14a3.88,3.88,0,0,1-3,5.53c-38.18,5.24-53.07-30.48-53.07-30.48-19.13,28.86-48.38,25.45-62.32,21.7a3.84,3.84,0,0,1-1.42-6.69c14.25-11.52,21-34.72,21-34.72-29.53,11.49-47.64-4.36-54-12.72a3.84,3.84,0,0,1,2.08-6,90.47,90.47,0,0,0,26.29-12.44c25.08-17.2,36.41-42.42,37.33-44.33.49-1.06,1-2.08,1.49-3.07a99.08,99.08,0,0,1,11.95-19.23c26.36-31.78,44.94,14.68,44.94,14.68,6.66,22.13,23.81,40.21,40,53.07A205.39,205.39,0,0,0,778.85,324,3.85,3.85,0,0,1,779.35,330.42Z"/>
            <g>
              <path class="cls-9" d="M639.16,334.45c5.28-5.28,5.28-8.8,5.28-8.8-27.91,10.86-51.06-1-58.12-9.52a3.83,3.83,0,0,0-1.15,5.6C591.36,329.86,609.25,346.77,639.16,334.45Z"/>
              <path class="cls-9" d="M736.83,376.8a3.83,3.83,0,0,1-1.85.8c-38.18,5.25-53.07-30.48-53.07-30.48-19.13,28.86-48.38,25.45-62.32,21.7a4,4,0,0,1-.67-.29c-.25.22-.5.44-.75.64a3.84,3.84,0,0,0,1.42,6.69c13.94,3.75,43.19,7.16,62.32-21.7,0,0,14.89,35.72,53.07,30.48a3.88,3.88,0,0,0,3-5.53C737.6,378.42,737.22,377.63,736.83,376.8Z"/>
              <path class="cls-9" d="M778.85,324l-.16-.1c-24.2,17.81-52.44,7.08-52.44,7.08a55.4,55.4,0,0,0,.52,7.22c3.91,1.34,30.12,9.34,52.58-7.73A3.85,3.85,0,0,0,778.85,324Z"/>
            </g>
            <path class="cls-7" d="M749.25,304.41a29.34,29.34,0,0,1-31.18-.56c-4,23.32-16.15,35.48-22.05,40.12a2.51,2.51,0,0,1-4.06-1.53,168.64,168.64,0,0,0-3.52-16.79,97.31,97.31,0,0,0-4.44-12.6c-17.54,23.09-34.19,25.43-42.32,24.89a2.52,2.52,0,0,1-1.69-4.23c10.45-11.49,13-29.4,13-29.4-19.66,8.88-32.84,3.55-39.44-1,25.08-17.2,36.41-42.42,37.33-44.33.49-1.06,1-2.08,1.49-3.07,4.56-6.75,8.61-13.39,11.95-19.23,26.36-31.78,44.94,14.68,44.94,14.68C715.91,273.47,733.06,291.55,749.25,304.41Z"/>
            <path class="cls-10" d="M673.17,207.83S643.54,271.17,610,288.6a2.5,2.5,0,0,0-.49,4.13c5.49,4.63,19.43,12.85,41.74,2.78,0,0-2.54,17.91-13,29.4a2.52,2.52,0,0,0,1.7,4.22c8.13.56,24.79-1.78,42.31-24.87,2.22,5.14,1.84,9.51,2.69,12.59,1.73,6.29,2.84,12.82,3.52,16.8a2.52,2.52,0,0,0,4.07,1.53A63.7,63.7,0,0,0,716.32,295s19.14,13.95,39.18-5.61a2.53,2.53,0,0,0-.49-4c-10.41-6.29-47.26-31.77-59.61-83.48C695.4,202,684.51,165.43,673.17,207.83Z"/>
            <g>
              <path class="cls-9" d="M651.22,286.71c-18.25,8.24-30.89,4.24-37.89,0-1.12.68-2.24,1.32-3.36,1.91a2.5,2.5,0,0,0-.49,4.13c5.29,4.47,19.12,13.56,40.24,3A25.48,25.48,0,0,0,651.22,286.71Z"/>
              <path class="cls-9" d="M755,285.46c-.81-.49-1.8-1.11-2.9-1.84-18.76,15-35.79,2.62-35.79,2.62a63.7,63.7,0,0,1-23.81,40.14,2.52,2.52,0,0,1-4.07-1.53c-.68-4-1.79-10.51-3.52-16.8-.85-3.08-.47-7.45-2.69-12.59-16.3,21.48-31.85,25-40.48,24.94a38.9,38.9,0,0,1-3.53,4.51,2.52,2.52,0,0,0,1.7,4.22c8.13.56,24.79-1.78,42.31-24.87,2.22,5.14,1.84,9.51,2.69,12.59,1.73,6.29,2.84,12.82,3.52,16.8a2.52,2.52,0,0,0,4.07,1.53A63.7,63.7,0,0,0,716.32,295s19.14,13.95,39.18-5.61A2.53,2.53,0,0,0,755,285.46Z"/>
            </g>
          </g>
          <g>
            <circle class="cls-11" cx="732.18" cy="559.4" r="9.38" transform="translate(-176.55 711.81) rotate(-46.9)"/>
            <circle class="cls-12" cx="575.95" cy="533.26" r="9.38" transform="translate(-188.74 356.25) rotate(-29.76)"/>
            <circle class="cls-12" cx="696.53" cy="561.51" r="9.38" transform="translate(-182.7 727.05) rotate(-49.54)"/>
            <circle class="cls-13" cx="610.25" cy="551.73" r="9.38" transform="translate(-194.42 722.98) rotate(-54.13)"/>
            <circle class="cls-13" cx="804.57" cy="534.33" r="9.38" transform="translate(-86.09 907.92) rotate(-56.34)"/>
            <circle class="cls-13" cx="713.89" cy="561.36" r="6.33" transform="translate(-87.36 988.87) rotate(-66.26)"/>
            <circle class="cls-14" cx="646.34" cy="558.46" r="9.38" transform="translate(-205.9 500.75) rotate(-36.95)"/>
            <circle class="cls-13" cx="559.42" cy="523.32" r="6.57" transform="translate(-178.85 318.95) rotate(-27.62)"/>
            <path class="cls-13" d="M769.26,554.54a6.56,6.56,0,1,1-4.68-8A6.56,6.56,0,0,1,769.26,554.54Z"/>
            <path class="cls-11" d="M670.7,562.06a6.56,6.56,0,1,1-4.68-8A6.57,6.57,0,0,1,670.7,562.06Z"/>
            <path class="cls-12" d="M831.38,515.41a6.57,6.57,0,1,1-4.69-8A6.57,6.57,0,0,1,831.38,515.41Z"/>
            <path class="cls-12" d="M782.89,549.91a6.56,6.56,0,1,1-4.69-8A6.57,6.57,0,0,1,782.89,549.91Z"/>
            <circle class="cls-14" cx="591.93" cy="544.25" r="6.57" transform="translate(-202.69 421.07) rotate(-33.79)"/>
            <circle class="cls-14" cx="540.04" cy="504.13" r="6.57" transform="translate(-146.52 231.31) rotate(-21.36)"/>
            <circle class="cls-14" cx="790.39" cy="544.23" r="6.57" transform="translate(71.38 1179.78) rotate(-76.02)"/>
            <circle class="cls-14" cx="748.58" cy="556.23" r="6.57" transform="translate(-182.2 614.66) rotate(-40.21)"/>
            <path class="cls-11" d="M634.88,556.76a6.57,6.57,0,1,1-4.69-8A6.57,6.57,0,0,1,634.88,556.76Z"/>
            <path class="cls-11" d="M554.84,516.51a6.57,6.57,0,1,1-4.69-8A6.57,6.57,0,0,1,554.84,516.51Z"/>
            <circle class="cls-11" cx="815.88" cy="523.12" r="6.57" transform="translate(-39.9 68.19) rotate(-4.67)"/>
            <path class="cls-14" d="M685.05,563.09a6.56,6.56,0,1,1-4.68-8A6.56,6.56,0,0,1,685.05,563.09Z"/>
          </g>
          <g>
            <circle class="cls-11" cx="600.45" cy="394.28" r="8.8" transform="translate(-102.93 540.06) rotate(-45)"/>
            <circle class="cls-13" cx="587.25" cy="384.61" r="6.16" transform="translate(80.94 870.85) rotate(-77.06)"/>
            <circle class="cls-14" cx="615.41" cy="402.2" r="6.16"/>
            <circle class="cls-12" cx="632.12" cy="404.84" r="8.8" transform="translate(-102.89 252.4) rotate(-20.92)"/>
            <circle class="cls-13" cx="648.84" cy="407.48" r="6.16" transform="translate(103.82 945.99) rotate(-76.78)"/>
            <circle class="cls-14" cx="665.56" cy="408.36" r="8.8"/>
            <circle class="cls-11" cx="682.28" cy="409.24" r="6.16" transform="translate(160.85 1010.16) rotate(-80.01)"/>
            <circle class="cls-13" cx="699" cy="406.6" r="8.8"/>
            <circle class="cls-14" cx="713.95" cy="403.96" r="6.16" transform="translate(167.13 1015.44) rotate(-77.7)"/>
            <circle class="cls-11" cx="728.91" cy="399.56" r="8.8" transform="translate(171.52 1016.23) rotate(-76.62)"/>
            <circle class="cls-13" cx="742.11" cy="393.4" r="6.16" transform="translate(189.47 1025.93) rotate(-76.78)"/>
            <circle class="cls-12" cx="752.67" cy="386.36" r="6.16"/>
            <circle class="cls-14" cx="765.87" cy="378.45" r="8.8" transform="translate(-43.28 652.39) rotate(-45)"/>
            <circle class="cls-13" cx="777.31" cy="368.77" r="6.16" transform="translate(240.61 1041.19) rotate(-76.78)"/>
            <circle class="cls-11" cx="786.1" cy="358.21" r="6.16"/>
            <circle class="cls-12" cx="793.14" cy="347.65" r="6.16"/>
          </g>
        </g>
        <g id="gift-box">
          <g>
            <g>
              <rect class="cls-14" x="459.25" y="615.04" width="39.33" height="9.7"/>
              <rect class="cls-15" x="459.16" y="624.74" width="39.33" height="28.55"/>
            </g>
            <rect class="cls-16" x="465.53" y="614.86" width="5.57" height="38.43"/>
            <rect class="cls-16" x="486.54" y="615.04" width="5.57" height="38.43"/>
            <g>
              <path class="cls-14" d="M465.29,603.46l0,11.56,12.19.11a15,15,0,0,0-12.21-11.67Z"/>
              <path class="cls-14" d="M493.05,603.46l.27,11.62-12.48,0a15,15,0,0,1,12.21-11.67Z"/>
              <path class="cls-16" d="M481.5,615.11a2.26,2.26,0,0,0,.15-.72,2.52,2.52,0,1,0-5,0,2.57,2.57,0,0,0,.15.72Z"/>
            </g>
          </g>
          <g>
            <g>
              <rect class="cls-14" x="847.74" y="626.42" width="39.33" height="9.7"/>
              <rect class="cls-15" x="847.65" y="636.12" width="39.33" height="28.55"/>
            </g>
            <rect class="cls-16" x="854.02" y="626.24" width="5.57" height="38.43"/>
            <rect class="cls-16" x="875.03" y="626.42" width="5.57" height="38.43"/>
            <g>
              <path class="cls-14" d="M853.78,614.84l0,11.56,12.19.11a15,15,0,0,0-12.21-11.67Z"/>
              <path class="cls-14" d="M881.54,614.84l.27,11.62-12.48,0a15,15,0,0,1,12.21-11.67Z"/>
              <path class="cls-16" d="M870,626.49a2.57,2.57,0,0,0,.15-.72,2.52,2.52,0,1,0-5,0,2.57,2.57,0,0,0,.15.72Z"/>
            </g>
          </g>
          <g>
            <g>
              <rect class="cls-17" x="869.58" y="545.91" width="44.89" height="8.02"/>
              <rect class="cls-18" x="869.48" y="553.93" width="44.89" height="23.61"/>
            </g>
            <rect class="cls-10" x="876.75" y="546.52" width="6.35" height="30.99"/>
            <rect class="cls-10" x="900.74" y="546.67" width="6.35" height="30.99"/>
            <g>
              <path class="cls-10" d="M875.55,533.84l0,13.19,13.91.13a17.11,17.11,0,0,0-13.94-13.32Z"/>
              <path class="cls-10" d="M907.25,533.84l.31,13.27-14.25,0a17.11,17.11,0,0,1,13.94-13.32Z"/>
              <path class="cls-10" d="M894.07,547.13a2.78,2.78,0,0,0,.16-.82,2.87,2.87,0,0,0-5.74,0,2.78,2.78,0,0,0,.17.82Z"/>
            </g>
          </g>
        </g>
      </g>
    `
})

Vue.component('button-play-again', {
  template: `
  <g>
  <rect class="cls-2" x="1201.83" y="710.86" width="132.19" height="28.17" rx="14.09"/>
  <g>
    <g id="Play_Again_" data-name="Play Again " class="cls-130">
      <g class="cls-130">
        <path class="cls-131" d="M1243.67,729.08a1.12,1.12,0,0,1-.29-.8v-7.84a1.06,1.06,0,0,1,.26-.76,1,1,0,0,1,.76-.26h3.51a3.61,3.61,0,0,1,2.51.81,3.3,3.3,0,0,1,0,4.53,3.61,3.61,0,0,1-2.51.82h-2.35v2.7a1.12,1.12,0,0,1-.29.8,1.25,1.25,0,0,1-1.6,0Zm4-5.16c1.1,0,1.64-.47,1.64-1.41s-.54-1.43-1.64-1.43h-2.07v2.84Z"/>
        <path class="cls-131" d="M1252.86,729.12a.92.92,0,0,1-.3-.74v-8a.91.91,0,0,1,.3-.74,1.16,1.16,0,0,1,.77-.26,1.11,1.11,0,0,1,.74.26.91.91,0,0,1,.31.74v8a.93.93,0,0,1-.31.74,1.11,1.11,0,0,1-.74.25A1.15,1.15,0,0,1,1252.86,729.12Z"/>
        <path class="cls-131" d="M1261.63,723a3.06,3.06,0,0,1,.73,2.25v3.16a1,1,0,0,1-.26.72,1.05,1.05,0,0,1-.75.26,1,1,0,0,1-.72-.27,1,1,0,0,1-.27-.71v-.1a1.58,1.58,0,0,1-.7.81,2.17,2.17,0,0,1-1.15.3,2.92,2.92,0,0,1-1.27-.28,2.27,2.27,0,0,1-.89-.79,2,2,0,0,1-.33-1.12,1.72,1.72,0,0,1,.39-1.19,2.23,2.23,0,0,1,1.23-.63,11.07,11.07,0,0,1,2.34-.19h.37V725a1.21,1.21,0,0,0-.26-.86,1.17,1.17,0,0,0-.86-.26,5.44,5.44,0,0,0-1.74.42,1.38,1.38,0,0,1-.55.15.6.6,0,0,1-.49-.22.84.84,0,0,1-.18-.56.77.77,0,0,1,.13-.47,1.14,1.14,0,0,1,.4-.33,4.43,4.43,0,0,1,1.2-.42,6.74,6.74,0,0,1,1.39-.16A3,3,0,0,1,1261.63,723Zm-1.66,4.55a1.54,1.54,0,0,0,.38-1.07v-.24h-.24a4.81,4.81,0,0,0-1.59.18.67.67,0,0,0-.46.66.87.87,0,0,0,.26.64.92.92,0,0,0,.65.24A1.31,1.31,0,0,0,1260,727.53Z"/>
        <path class="cls-131" d="M1269,722.44a1,1,0,0,1,.5-.14,1.07,1.07,0,0,1,.71.26.77.77,0,0,1,.31.62.81.81,0,0,1-.1.39l-3.76,7.73a1,1,0,0,1-.38.44,1,1,0,0,1-.51.15,1,1,0,0,1-.68-.25.79.79,0,0,1-.3-.62,1,1,0,0,1,.1-.42l.93-1.92-2.5-5.11a1,1,0,0,1-.08-.37.81.81,0,0,1,.33-.65,1.14,1.14,0,0,1,.75-.26.91.91,0,0,1,.51.14,1,1,0,0,1,.38.44l1.74,3.78,1.69-3.78A1,1,0,0,1,1269,722.44Z"/>
        <path class="cls-131" d="M1284.8,728.4a.84.84,0,0,1-.31.67,1.08,1.08,0,0,1-.72.27,1,1,0,0,1-.51-.15.84.84,0,0,1-.36-.44l-.74-1.65h-4.75l-.74,1.65a.93.93,0,0,1-.87.59,1.12,1.12,0,0,1-.73-.27.85.85,0,0,1-.32-.67,1.14,1.14,0,0,1,.11-.44l3.78-7.94a1.06,1.06,0,0,1,.47-.51,1.25,1.25,0,0,1,.65-.18,1.33,1.33,0,0,1,.68.18,1.22,1.22,0,0,1,.47.51l3.78,7.94A1,1,0,0,1,1284.8,728.4Zm-3.39-2.95-1.62-3.64-1.64,3.64Z"/>
        <path class="cls-131" d="M1292.57,722.54a1,1,0,0,1,.28.73v5.27a3.2,3.2,0,0,1-1,2.52,4.16,4.16,0,0,1-2.83.86,5.33,5.33,0,0,1-2.58-.56,1.21,1.21,0,0,1-.39-.35.77.77,0,0,1-.14-.45.92.92,0,0,1,.17-.57.53.53,0,0,1,.45-.23,1.34,1.34,0,0,1,.36.06l.44.15c.29.11.57.2.82.27a3.45,3.45,0,0,0,.81.1,1.89,1.89,0,0,0,1.33-.41,1.6,1.6,0,0,0,.44-1.23v-.76a2,2,0,0,1-.88.84,2.79,2.79,0,0,1-1.32.31,3,3,0,0,1-1.59-.42,2.87,2.87,0,0,1-1.08-1.2,4.25,4.25,0,0,1,0-3.6,2.88,2.88,0,0,1,2.67-1.63,2.73,2.73,0,0,1,1.29.3,2.13,2.13,0,0,1,.89.84v-.14a.91.91,0,0,1,.29-.71,1.11,1.11,0,0,1,.76-.26A1.1,1.1,0,0,1,1292.57,722.54Zm-2.23,4.46a2.36,2.36,0,0,0,0-2.66,1.41,1.41,0,0,0-1.15-.49,1.45,1.45,0,0,0-1.17.49,2.32,2.32,0,0,0,0,2.66,1.47,1.47,0,0,0,1.17.48A1.43,1.43,0,0,0,1290.34,727Z"/>
        <path class="cls-131" d="M1299.81,723a3.06,3.06,0,0,1,.73,2.25v3.16a.94.94,0,0,1-.27.72,1,1,0,0,1-.74.26.93.93,0,0,1-1-1v-.1a1.63,1.63,0,0,1-.7.81,2.17,2.17,0,0,1-1.15.3,2.92,2.92,0,0,1-1.27-.28,2.14,2.14,0,0,1-.89-.79,2,2,0,0,1-.33-1.12,1.72,1.72,0,0,1,.38-1.19,2.3,2.3,0,0,1,1.24-.63,11.07,11.07,0,0,1,2.34-.19h.36V725a1.17,1.17,0,0,0-.26-.86,1.15,1.15,0,0,0-.86-.26,5.45,5.45,0,0,0-1.73.42,1.38,1.38,0,0,1-.55.15.6.6,0,0,1-.49-.22,1,1,0,0,1-.06-1,1.18,1.18,0,0,1,.41-.33,4.43,4.43,0,0,1,1.2-.42,6.66,6.66,0,0,1,1.39-.16A3,3,0,0,1,1299.81,723Zm-1.66,4.55a1.53,1.53,0,0,0,.37-1.07v-.24h-.23a4.81,4.81,0,0,0-1.59.18.65.65,0,0,0-.46.66.87.87,0,0,0,.26.64.92.92,0,0,0,.65.24A1.33,1.33,0,0,0,1298.15,727.53Z"/>
        <path class="cls-131" d="M1302.3,720.86a1,1,0,0,1-.32-.77,1,1,0,0,1,.32-.77,1.52,1.52,0,0,1,1.76,0,1,1,0,0,1,.33.77,1,1,0,0,1-.32.77,1.5,1.5,0,0,1-1.77,0Zm.12,8.26a.92.92,0,0,1-.3-.74v-5.11a.91.91,0,0,1,.31-.75,1.19,1.19,0,0,1,.75-.25,1.17,1.17,0,0,1,.75.25.94.94,0,0,1,.31.75v5.11a.93.93,0,0,1-.31.74,1.11,1.11,0,0,1-.75.25A1.14,1.14,0,0,1,1302.42,729.12Z"/>
        <path class="cls-131" d="M1312,723a3.32,3.32,0,0,1,.61,2.18v3.24a.93.93,0,0,1-.29.72,1.25,1.25,0,0,1-1.55,0,1,1,0,0,1-.28-.72v-3.14a1.56,1.56,0,0,0-.26-1,1,1,0,0,0-.8-.32,1.4,1.4,0,0,0-1.06.42,1.56,1.56,0,0,0-.4,1.12v2.94a.93.93,0,0,1-.28.72,1,1,0,0,1-.77.27,1.08,1.08,0,0,1-.77-.27.9.9,0,0,1-.29-.72v-5.14a.89.89,0,0,1,.3-.7,1.12,1.12,0,0,1,.78-.27,1,1,0,0,1,.7.26.85.85,0,0,1,.28.67v.19a2.4,2.4,0,0,1,.94-.85,2.84,2.84,0,0,1,1.31-.3A2.25,2.25,0,0,1,1312,723Z"/>
        <path class="cls-131" d="M1314.77,726.07a.83.83,0,0,1-.22-.49l-.61-4.91a.84.84,0,0,1,0-.19,1,1,0,0,1,.37-.83,1.37,1.37,0,0,1,.91-.31,1.41,1.41,0,0,1,.91.31,1.06,1.06,0,0,1,.36.84,1.09,1.09,0,0,1,0,.2l-.63,4.89a.77.77,0,0,1-.21.49.58.58,0,0,1-.42.16A.6.6,0,0,1,1314.77,726.07Zm-.43,3a1.21,1.21,0,0,1,.86-2.07,1.17,1.17,0,0,1,.85.34,1.27,1.27,0,0,1,0,1.73,1.13,1.13,0,0,1-.85.34A1.15,1.15,0,0,1,1314.34,729Z"/>
      </g>
    </g>
    <g id="Play_Again_2" data-name="Play Again ">
      <g class="cls-130">
        <path class="cls-125" d="M1232.85,717.36v5.48a.33.33,0,0,1-.33.33H1227a.33.33,0,0,1-.33-.33v-1.29a.33.33,0,0,1,.33-.33h0l2.77.13a5.37,5.37,0,0,0-4-2.13,4.82,4.82,0,0,0,0,9.63,5.59,5.59,0,0,0,3.18-1.2.34.34,0,0,1,.21-.08.42.42,0,0,1,.24.09l.93.93a.41.41,0,0,1,.09.23.38.38,0,0,1-.11.25,7.83,7.83,0,0,1-4.53,1.75h0a6.79,6.79,0,0,1,0-13.57h0a7.66,7.66,0,0,1,5.15,2.39l-.11-2.26v0a.32.32,0,0,1,.33-.32h1.3A.32.32,0,0,1,1232.85,717.36Z"/>
      </g>
    </g>
  </g>
</g>
  `
})

Vue.component('couple-1', {
  template: `
  <g>
    <path class="cls-13" d="M1251.16,637.9a24.31,24.31,0,0,1,1.45,6.66,2.18,2.18,0,0,1-2,2.16l-9.73,1a3.16,3.16,0,0,1-1.26-.13c-1.22-.4-3.29-1.45.3-3.28l3.7-1.77a6.48,6.48,0,0,0,3.1-3.64l.18-.49S1250.37,639.46,1251.16,637.9Z"/>
    <path class="cls-31" d="M1221.53,637.32a25.81,25.81,0,0,1,1.55,7.15,2.33,2.33,0,0,1-2.1,2.31l-10.43,1.08a3.3,3.3,0,0,1-1.36-.14c-1.31-.43-3.52-1.55.33-3.52l4-1.9a6.92,6.92,0,0,0,3.33-3.89l.2-.53S1220.68,639,1221.53,637.32Z"/>
    <path class="cls-31" d="M1253.21,635a25.81,25.81,0,0,1,1.55,7.15,2.34,2.34,0,0,1-2.1,2.31l-10.43,1.08a3.14,3.14,0,0,1-1.36-.14c-1.31-.43-3.53-1.54.32-3.51l4-1.9a6.89,6.89,0,0,0,3.32-3.9l.21-.53S1252.36,636.65,1253.21,635Z"/>
    <path class="cls-41" d="M1229.12,512.58a46.33,46.33,0,0,0,.71,6.87s-1.13,5-8.76,3l.13-6.69S1227,515.63,1229.12,512.58Z"/>
    <path class="cls-41" d="M1217,510.73a5.47,5.47,0,0,0,0,3.35c.66,1.52,2.47,2.23,4.14,2.3,3.29.15,6.42-1.55,8.85-3.75a10.73,10.73,0,0,0,3.59-5.69,7.24,7.24,0,0,0-4.22-7.74C1221.34,495.81,1218.26,505.15,1217,510.73Z"/>
    <path class="cls-42" d="M1218,498.29a9.52,9.52,0,0,0,6.28,6.14,6.29,6.29,0,0,1-1.37,6.16,6.43,6.43,0,0,1-6.09,1.79,10.91,10.91,0,0,1-1.58,3.89c-.81,1.61-1.27,3.71.54,5a3.41,3.41,0,0,0,1.19.51c4.17,1,8.49-2.69,8.46-6.83a10.33,10.33,0,0,1,.07-3.51,2.26,2.26,0,0,1,.81-1.13,1.87,1.87,0,0,1,2.82,1.11,5.91,5.91,0,0,1,.22,2.55s10.29-5.28,2-14.42a6.3,6.3,0,0,0-3.31-1.9c-1.88-.42-4.75-.8-7,0a10.92,10.92,0,0,1-2.82.66Z"/>
    <path class="cls-43" d="M1223.75,496.81s-.45,7.16,5.77,17.05c0,0,8.93-2.63,9.22-7.44C1238.74,506.42,1241.85,495.11,1223.75,496.81Z"/>
    <path class="cls-44" d="M1237.86,508.14c.4.57-.4,1.43,0,2a1.14,1.14,0,0,0,.61.39l2.79,1.06c-.25-.36.11-.88.54-1a3.12,3.12,0,0,1,1.31.15,1.3,1.3,0,0,0,1.24-.23c.37-.39.22-1,.46-1.53s1.06-.94.94-1.55c0-.26-.25-.46-.29-.71-.07-.4.27-.73.45-1.08a2,2,0,0,0-.06-1.69,5.89,5.89,0,0,0-1-1.4,4.76,4.76,0,0,0-1.5-1.26,1.58,1.58,0,0,0-1.81.28,2.28,2.28,0,0,1-.29.33c-.75.53-1.34-.81-2-.72s-1.41,1.33-1.73,2c-.89,1.79.63,3.15-.35,4.82A3,3,0,0,0,1237.86,508.14Z"/>
    <path class="cls-30" d="M1227.33,574.16s3,45.55,18.12,63.41a19.93,19.93,0,0,0,8.49-.31,2.61,2.61,0,0,0,1.8-3.3c-3-9.79-14.4-48.78-12.2-63.86C1243.54,570.1,1235.92,574.4,1227.33,574.16Z"/>
    <path class="cls-43" d="M1215.45,573.57l-5.89,23.69a26.25,26.25,0,0,0-.55,9.83l3.74,29.85a3.69,3.69,0,0,0,2.41,3,12.9,12.9,0,0,0,8.12,0,2.42,2.42,0,0,0,1.71-2.44c-.33-5.36-1.3-23.13-1.3-23.13l-.06-1.28a50,50,0,0,1,7-27.17l7.8-13.29-22.26.42Z"/>
    <path class="cls-41" d="M1201.28,571.22s-3.39,8.94-2.23,9.2c0,0,1.3-.78,2.08-4,0,0-1.36,4.56-1,6.55a.45.45,0,0,0,.8.16,10.78,10.78,0,0,0,1.46-4.77s-1,6.61-.13,6.74c0,0,1.43,1.3,2.21-6.87,0,0-.26,4.28.13,4.67,0,0,2.07,3.11,1.94-7.52,0,0,1.56,3.76,2.46,2.85,0,0,1.82.65-1.29-5.18C1207.74,573,1206.07,566.82,1201.28,571.22Z"/>
    <path class="cls-41" d="M1252.91,568.94s3.39,8.94,2.22,9.2c0,0-1.29-.78-2.07-4,0,0,1.36,4.56,1,6.55a.45.45,0,0,1-.8.16,10.78,10.78,0,0,1-1.46-4.77s1,6.61.12,6.74c0,0-1.42,1.3-2.2-6.87,0,0,.26,4.28-.13,4.67,0,0-2.07,3.11-1.94-7.52,0,0-1.56,3.76-2.46,2.85,0,0-1.82.65,1.29-5.18C1246.45,570.75,1248.12,564.54,1252.91,568.94Z"/>
    <path class="cls-45" d="M1221.28,521.85c-6,.07-9.81,6.82-12.86,11.92s-5,10.78-6.89,16.41a79.4,79.4,0,0,0-3.18,16.3,6.44,6.44,0,0,0,.7,3.93c1.22,1.89,3.81,2.2,6.06,2.33,1.72.1,3.77,0,4.74-1.39a4.81,4.81,0,0,0,.6-2.49c.26-5.4.75-14.2,2.12-19.44,1-3.72,1.8-7.11,3.7-10.45L1214,567.08c-.18,2.3-.24,4.94,1.46,6.49,1.55,1.41,3.89,1.3,6,1.12l5.91-.53a90.91,90.91,0,0,0,11.28-1.49c2.11-.46,4.46-1.31,5.21-3.33s-4.59-37.27-1-16.13c.56,3.32,1.82,9,2.38,12.31.27,1.63.62,3.41,1.9,4.46a4.16,4.16,0,0,0,4.31.42c2.17-1,3.32-3.52,3.4-5.91a41.31,41.31,0,0,0-1.51-10.26l-6-17.29c-1.32-3.8-2.69-7.68-5.23-10.8a20.58,20.58,0,0,0-12.54-6.93S1231,521.73,1221.28,521.85Z"/>
    <path class="cls-41" d="M1267.73,526.39a15.92,15.92,0,0,1-.59,3.76s5.73,3.56,7.91-.2l-1.19-8.7A12.54,12.54,0,0,1,1267.73,526.39Z"/>
    <path class="cls-41" d="M1263.25,511.56c-.46,3.06-1.75,5-1.66,8.12a8.37,8.37,0,0,0,2,5.12,4.75,4.75,0,0,0,2.63,1.73,4.42,4.42,0,0,0,3.1-.75,13,13,0,0,0,2.4-2.18s11.21-7.43,1.06-15.2c0,0-6.46-5.27-9.09,1.58Z"/>
    <path class="cls-30" d="M1264.57,637.31l-2.37,5.93s-12.26,2.77-8.51,4.94l14.92-.34a2.08,2.08,0,0,0,2-2.32l-.92-7.82S1266.35,639.09,1264.57,637.31Z"/>
    <path class="cls-30" d="M1285.09,637.19l-2.11,6s-12.13,3.3-8.28,5.31l14.89-1a2.08,2.08,0,0,0,1.91-2.41l-1.26-7.77S1286.94,638.89,1285.09,637.19Z"/>
    <path class="cls-46" d="M1264.08,587s-1.49,19.89,1.08,24.17c0,0-7.31,24.87-2.17,27.11,0,0,3.43,2.9,8.64.39a4.43,4.43,0,0,0,2.46-3.33c.5-3.14,1.23-10.13,1-23.36,0,0,2.87-11.93,2.67-22.74C1277.72,589.22,1267.84,589.42,1264.08,587Z"/>
    <path class="cls-46" d="M1278.31,587.39s-1.48,21.72,3.06,25.18c0,0-4.94,25.08,4,26.71,0,0,8.46,1.79,9.33-5.49a6.86,6.86,0,0,0,0-2.26l-3.16-19.16s.1-19.27-1.68-25.19C1289.78,587.18,1281.87,589.83,1278.31,587.39Z"/>
    <path class="cls-47" d="M1296.88,571s2.88,13.34-1.86,14.33c0,0-4,.39-3.76-8.31,0,0-4.64,10.28-1.08-4.75C1290.18,572.25,1294.69,573.66,1296.88,571Z"/>
    <path class="cls-47" d="M1249.28,579.13A3.93,3.93,0,0,0,1248,582a2.41,2.41,0,0,0,2.62,1.85,5.17,5.17,0,0,0,3-1.68,14.7,14.7,0,0,0,3.29-4.88c.65.49.71,1.44,1,2.22s1.26,1.48,1.82.89a1.54,1.54,0,0,0,.24-1.2,9.22,9.22,0,0,0-1.36-4.44C1255.09,569.57,1251.6,576.34,1249.28,579.13Z"/>
    <path class="cls-48" d="M1267.14,530.15s-8.5,3.56-9.69,9.88c0,0-.39,27.88-4.35,32.43a6.05,6.05,0,0,0,8.11,1.58s4.74-14.43,4.15-29.06c0,0,.4,20-3.56,29.65,0,0-2.17,16,6.92,16.41l17.59.31a4.52,4.52,0,0,0,4.6-4.71c-.37-8.63,2.42-28.44-5.38-43.84,0,0,4.77,17.25,3.29,27.52a3,3,0,0,0,.9,2.52c1.23,1.21,3.6,2.38,7.25-.47a1.45,1.45,0,0,0,.56-1.27c-.35-4.39-2.48-26.48-10.82-36-3-3.43-7.08-5.64-11.61-5.15h0S1272.87,534.1,1267.14,530.15Z"/>
    <path class="cls-49" d="M1263.78,510.92a13,13,0,0,0,2.82,2.72c1,.87.89,3,.75,4.33.91-.64,1.6-1.17,2.28-.73,1,.64,1.22,2.42,1.32,3.22.25,1.83.42,3.93-.81,5.31-.55.61-1.32,1-1.83,1.64-1,1.3-.75,3.18-.4,4.81a3.83,3.83,0,0,0,1.33,2.58c.69.44,1.74.49,2,1.26.44,1.11-1.25,2-1.41,3.13a2.17,2.17,0,0,0,1.08,1.91,9.36,9.36,0,0,1,1.86,1.36c1.33,1.55.43,4,1.07,5.93a3.94,3.94,0,0,0,4.41,2.52c1.42-.3,2.67-1.41,4.11-1.27,1.84.18,3.11,2.35,5.16,1.71a3.22,3.22,0,0,0,2-2.22c.54-1.84-.13-3.67-.71-5.42a8.05,8.05,0,0,1-.52-4.7c.61-2.12,2.8-3.69,2.79-5.88,0-3.36-5-4.92-5.23-8.27a10.58,10.58,0,0,1,.47-2.76,3.07,3.07,0,0,0-.44-2.68c-.89-1-2.46-.74-3.78-.56s-3-.05-3.39-1.33c-.26-.95.41-1.86.74-2.78.74-2.08-.35-4.47-2.06-5.87a14.32,14.32,0,0,0-6.09-2.46,15.83,15.83,0,0,0-4.93-.5,7.31,7.31,0,0,0-2.42.65,2.27,2.27,0,0,0-1,3.18Z"/>
    <path class="cls-47" d="M1265.33,506c3,.51,8.11,2.72,10.84,11.61,0,0,2.9,3,3.69-1.71,0,0,1.84-8.3.26-12,0,0-9.77-2.65-15.09.39A.92.92,0,0,0,1265.33,506Z"/>
    <path class="cls-50" d="M1279.17,503.64a.5.5,0,0,1-.68-.13,1.33,1.33,0,0,1-.23-.71l-.12-.84a5,5,0,0,1,0-2.43,1.74,1.74,0,0,1,1.88-1.22c.87.21,1.42,1.32,2.32,1.28.44,0,.83-.34,1.27-.3s.83.51,1.06,1a3.84,3.84,0,0,1,0,3.94,5,5,0,0,1-2.69,1.49c-1.11.34-.84-.33-1.51-.67S1278.62,504.89,1279.17,503.64Z"/>
  </g>
  `
})

Vue.component('couple-2', {
  template: `
  <g>
    <g>
      <path class="cls-92" d="M393.27,465.39s.67,7.53,14.9,5.61l20.45-.36s3.27-3.1,1.79-5.43c0,0-17.44-4.12-27.13-3a20.46,20.46,0,0,1-2.74-9.63s-.25-11.43-3.43-17.11c0,0-6.21,3.56-15.87.14-.6-.21-3.33,7.49-3.79,8.84-.58,1.73-5.28,16.43-5.26,22.28a26.35,26.35,0,0,0,2,8.52c2.47,7,5.39,15.44,8.78,22.09.43,1,5.29,0,5.34-.6.27-3.39-.12-16.8-2.42-22.58-1-2.51-2.72-4.79-3-7.47-.46-4.39,2-8.32,3.65-12.4,1.16-2.85,3.14-4.23,2.51-7.24a76.43,76.43,0,0,0,2,11.05A75.54,75.54,0,0,0,393.27,465.39Z"/>
      <g>
        <path class="cls-25" d="M376.33,403.64l-8.09-7.12-8-13.79-.68-5.79-1.15-4.44s-1.15.36-.9,2.39l.25,1.23-2.42-6.3s-.9-.81-.87.59c0,0-1.29-1.76-1.49-.08l.1.81s-.89-.91-1.32-.67c0,0-.51,0,.44,2.06l1.32,3.87-2.17-2.67s-1.14-.45,0,1.6l4.6,8.07,7.86,15.68,8.06,8.17S372.63,405.31,376.33,403.64Z"/>
        <path class="cls-93" d="M404.35,403h0c1.19-.67,2.51-1.41,3.84-1.08s2.23,1.8,2.83,3.12a.77.77,0,0,1-.25,1.2l-4,3a29.57,29.57,0,0,0-4.91,4.29c-1.76,2.09-4.16,5.74-4.08,9.62,0,1.82.2,13.19-.08,13.36-2.08,1.27-5.83,1.33-8.27,1.25a22.37,22.37,0,0,1-7.11-1.59,1.65,1.65,0,0,1-.67-.38,1.51,1.51,0,0,1-.3-.8c-.58-3.5.77-7.43-1.07-10.47a19.57,19.57,0,0,1-1.25-1.91c-.76-1.64-.24-3.54.08-5.32a3.85,3.85,0,0,0,.05-1.62,4.33,4.33,0,0,0-1-1.66,43.74,43.74,0,0,0-6.31-6.16c-.31-.25-.65-.61-.5-1a.92.92,0,0,1,.29-.33l4-3.18a.92.92,0,0,1,.43-.24,1.06,1.06,0,0,1,.71.23A30.2,30.2,0,0,0,388,407.56c3.54.58,6.44-.28,9.78-1.52A48.92,48.92,0,0,0,404.35,403Z"/>
        <path class="cls-26" d="M382.62,395.89c-.49-1.07-2.19-1.6-2-2.75.16-.77,1.13-1.08,1.51-1.77.64-1.16-.68-2.56-.41-3.86s1.75-1.71,2.65-2.6c1.08-1,1.54-2.88,3-3.2.53-.12,1.1,0,1.62-.14,1.54-.44,2-3,3.58-3,.54,0,1,.36,1.57.39,1.51.09,2.15-2.1,3.59-2.55,1.66-.53,3.2,1.48,4.93,1.31,1.27-.12,2.2-1.37,3.47-1.51,1.76-.19,3.17,1.85,4.94,1.71a10.4,10.4,0,0,0,1.92-.6,3.64,3.64,0,0,1,3.37.81c.76.71,1.26,1.77,2.23,2.15a5.59,5.59,0,0,0,2.91-.18c1.69-.28,3.78.43,4.18,2.1a14.3,14.3,0,0,0,.23,1.46c.32.91,1.29,1.39,2.05,2s1.41,1.68.85,2.46c-.32.45-.95.65-1.13,1.16a1.2,1.2,0,0,0,.08.85,11.78,11.78,0,0,0,1.2,1.63,1.59,1.59,0,0,1,.12,1.88c-.61.68-1.72.24-2.5-.24-.53.13-.36.92-.08,1.39.54.92,1,2.27.12,2.93a2,2,0,0,1-1.88.12c-1.51-.48-2.81-1.46-4.28-2s-3.36-.6-4.42.57c-.28.3-.48.67-.77,1a3.39,3.39,0,0,1-3.14.62c-1.09-.23-2.12-.72-3.23-.87a1.35,1.35,0,0,0-1,.15c-.33.23-.42.66-.6,1a2.37,2.37,0,0,1-3,1.09c-.38-.16-.76-.44-1.16-.35s-.64.57-.94.89a3.7,3.7,0,0,1-1.66.88c-1,.32-2,.65-3.06.88a18,18,0,0,1-6.2.27c-.54-.08-1.08-.18-1.61-.28h0a16.06,16.06,0,0,1-5-1.35c-.77-.41-1.63-.77-1.94-1.66S383.08,396.73,382.62,395.89Z"/>
        <path class="cls-25" d="M406.91,402l6.59-4.52,9.15-13.05,1.18-5.71,1.53-4.33s1.11.46.69,2.46l-.35,1.21,2.95-6.07s1-.73.82.66c0,0,1.43-1.64,1.49,0l-.17.8s1-.83,1.37-.55c0,0,.5.08-.62,2l-1.65,3.74,2.39-2.48s1.18-.34-.14,1.6l-5.28,7.64-9.18,14.95-6.91,5.81A4.46,4.46,0,0,0,406.91,402Z"/>
        <path class="cls-25" d="M430.65,466.2l4.6,1s1.3,2.93-.43,4.38l-6.2-1S431.13,468.56,430.65,466.2Z"/>
        <path class="cls-86" d="M408.94,409.55c1.28.52,2.52,1.13,3.8,1.63a23,23,0,0,0,12,1.21,16.75,16.75,0,0,1-.88,8.89c-5.49.7-11.48,1.3-16.15-1.65-2.82-1.78-4.83-4.68-7.77-6.25s-6.51-1.77-8.49-4.29c.58.74,6.12-1.38,7.33-1.4A26.56,26.56,0,0,1,408.94,409.55Z"/>
        <path class="cls-86" d="M400.54,415.25a29,29,0,0,0,5.87,5.45,19.42,19.42,0,0,0,13.2,4.23c-.77,2.43-1.53,4.87-2.3,7.3a1.93,1.93,0,0,1-.62,1.06,1.72,1.72,0,0,1-1.1.2,20.76,20.76,0,0,1-12.07-5.17,53.17,53.17,0,0,1-8.75-10.05,96,96,0,0,1-6.66-9.8C392.67,406.31,397.94,411.84,400.54,415.25Z"/>
        <path class="cls-14" d="M357.68,386.66a3.7,3.7,0,0,1,3.61-2.32s7,15,20.88,21.4l15.21.26,13.93-8s5.67-10.9,11.34-13.57c0,0,2.75-.16,4.21,1l-8.07,17.95L400,419.93a72.4,72.4,0,0,1,.58,32.68s-14.76,4.7-26.1-1.23c0,0,5.93-26,1.54-32C376,419.41,361.8,408.58,357.68,386.66Z"/>
        <g>
          <path class="cls-25" d="M384.48,397.35h0a12.76,12.76,0,0,0,1,4.37,5.61,5.61,0,0,0,3,3,5.05,5.05,0,0,0,4.26-.67,12.52,12.52,0,0,0,3.22-3.23,16.42,16.42,0,0,0,2.76-5.11,8.24,8.24,0,0,0-.29-5.83,12.12,12.12,0,0,0-2.57-3.21,4.66,4.66,0,0,0-1.76-1.26,3.53,3.53,0,0,0-1.55,0,10.49,10.49,0,0,0-6.45,3.88C384.4,391.48,384.23,394.49,384.48,397.35Z"/>
          <path class="cls-26" d="M387.31,388.33a2.93,2.93,0,0,0,1.63,2.3,7.27,7.27,0,0,0,2,.47c1.33.21,2.83.8,3.21,2.09s-.48,2.62,0,3.81a4.09,4.09,0,0,0,2.38,1.79c.93.41,2,1,2.09,2a8.79,8.79,0,0,1-.16,1.61,2.62,2.62,0,0,0,3.12,2.54,2.93,2.93,0,0,1-1.18-4.32,3.1,3.1,0,0,0,.67-1c.13-.53-.21-1.07-.26-1.62-.11-1.25,1.2-2.09,1.91-3.12a4.9,4.9,0,0,0,.29-4.49,13.29,13.29,0,0,0-2.64-3.84c-1.48-1.65-3.19-3.36-5.39-3.6h0C392.38,382.7,387,385.17,387.31,388.33Z"/>
          <path class="cls-25" d="M384.17,408.73a6.27,6.27,0,0,0,2.42-4,5.73,5.73,0,0,0,.1-1.44v-.05c3.28,2.16,5.69.7,5.69.7s-.22.59-.22.63c-.05.31-.09.61-.11.9a8.87,8.87,0,0,0,.62,4.64C393.09,411.05,383.55,409.2,384.17,408.73Z"/>
          <g class="cls-94">
            <path class="cls-95" d="M392.16,404.59c-.05.31-.09.61-.11.9a5.86,5.86,0,0,1-4,.11,5.22,5.22,0,0,1-1.46-.85,5.73,5.73,0,0,0,.1-1.44,5.2,5.2,0,0,0,1.89,1.25A5.62,5.62,0,0,0,392.16,404.59Z"/>
          </g>
          <path class="cls-26" d="M387.47,390.79a4,4,0,0,0-2,.91c-.65.79-.31,2-.84,2.91s-1.64,1.13-1.94,2c-.2.59,0,1.25-.14,1.84a5.38,5.38,0,0,1-.72,1.15,2.81,2.81,0,0,0-.29,2.3,2.33,2.33,0,0,1-1.22-2.67,7.55,7.55,0,0,1,.75-1.12,2.73,2.73,0,0,0,.19-2.5,6.28,6.28,0,0,1-.59-1.33,2.27,2.27,0,0,1,1-2,14.57,14.57,0,0,0,1.79-1.43c1.06-1.2,1.08-3.1,2.22-4.23a2.88,2.88,0,0,1,3-.62h0C391.89,387.31,389.68,390.06,387.47,390.79Z"/>
        </g>
        <path class="cls-18" d="M424.85,470.78l9.41.85,3.17,8.11s.85,2.43,2.06,1.62a1.86,1.86,0,0,0,.7-1.24c.33-1.92,1.19-7.78.31-11.17a6.31,6.31,0,0,0,.22-1.08,1.61,1.61,0,0,0-1.11-1.89l-14-2.24S426.88,467.67,424.85,470.78Z"/>
        <path class="cls-18" d="M381.24,493.66l3.66,9.62-6.43,7s-2,2-.62,2.79a2,2,0,0,0,1.56.1c2-.6,8.19-2.55,11.1-5a7.47,7.47,0,0,0,1.16-.3,1.76,1.76,0,0,0,1.32-2l-4.46-14.75S385.26,494.17,381.24,493.66Z"/>
        <path class="cls-86" d="M380.63,408.84a3.1,3.1,0,0,1-.74-2.06,3.48,3.48,0,0,1,4.92-3.12c2.4,1,5.92,2,9.11.69a2.18,2.18,0,0,1,2.3.42,4.46,4.46,0,0,1,1.18,4,.37.37,0,0,1-.09.2C396.58,409.76,390.08,416.6,380.63,408.84Z"/>
      </g>
    </g>
    <g>
    <path class="cls-96" d="M303.4,433.46c.59,7.15,1.53,14.37,1.39,21.54a2.35,2.35,0,0,1-.25,1.23,1.48,1.48,0,0,1-.78.68c-8,2.44-14.6,6.14-25,9.42-.52.16-1.13.2-1.47.64a2,2,0,0,0-.31,1.08,10.8,10.8,0,0,0,1.51,6.23c10-1.94,20.11-3.91,29.57-7.76,2.76-1.13,5.88-2.64,7.59-5.08a10.29,10.29,0,0,0,2.32-6.32,36.07,36.07,0,0,0,0-6.06,74.31,74.31,0,0,0,6.79,13.84s-8.33,20-7.71,26c0,0,4.87,2.8,8.33-.31l9-25.37s1.9-5.76-2.07-12.83l-6.09-17.94S303.29,432.08,303.4,433.46Z"/>
    <g>
      <path class="cls-97" d="M319.65,403a7.81,7.81,0,0,1-.65,2.78c-1.3,1.09-4.51,3.49-6.93-2.42,0,0,.31-2.42.48-3.86,0-.28.07-.51.08-.69l.05-.38a8.43,8.43,0,0,0,4.77,1.48h0a4.11,4.11,0,0,0,1.69-.53,4.11,4.11,0,0,0,0,.49,8.11,8.11,0,0,0,.06,1.41,2.72,2.72,0,0,0,.08.47A4.76,4.76,0,0,0,319.65,403Z"/>
      <path class="cls-98" d="M319.26,401.71a4.73,4.73,0,0,1-3,.45,5.7,5.7,0,0,1-3.73-2.15h0c0-.19.07-.51.06-.7h0a4.53,4.53,0,0,0,3.63,2.25,4.32,4.32,0,0,0,1.75,0,11.23,11.23,0,0,0,1.17-.3A2.72,2.72,0,0,0,319.26,401.71Z"/>
      <path class="cls-97" d="M311.07,391.68s-2.41-.26-1.27,2.78l1.58,1.85c.54,1.55,1,4.48,5.87,5.07,0,0,5.52,1.33,7.94-7.49,0,0,1.53-9.3-6.37-10C318.82,383.86,310.75,383.13,311.07,391.68Z"/>
      <path class="cls-99" d="M313.19,393c2.31-5.08,5-3.18,8.51-3.82a7,7,0,0,0,5.57-3.93c1.45-3.28-1.63-2.12-3.77-2.43-4.16-.6-6.18-2.64-11.06-1.27-4.58,1.3-7,8.06-4.23,12.09.81,1.18,1.09,2.4,2.07,3.4s2.22,3.15,2.15.77c-.06-1.76-2-2.43-2.34-3.92C309.69,392,312.11,391.6,313.19,393Z"/>
    </g>
    <path class="cls-97" d="M291,382.36l-6.14-9.72a.56.56,0,0,0,0-.21l0-2.55-.51-3.52a.14.14,0,0,0-.14-.13c-.35,0-1.25.29-.89,3,0,0,0,.16,0,.4l-.15-.07-2.54-2.06a7.44,7.44,0,0,1-1.32-2.26c-.88-2.41.06-4.87-.82-4.9-.43,0-.53.69-.53,1.12l-.3,4s-2.27-4.29-3-4c-1,.09,2.32,5.65,2.32,5.65-2.29-2.89-3.49-2.8-3.49-2.8-1.06.31,3,5,3,5-5.15-3-2.58-.38-2.58-.38l4,3.31h0l3.79,2.89,6.33,12.86,8.7,12.47,4.82-2.88Z"/>
    <path class="cls-81" d="M312.25,387.89a18.57,18.57,0,0,1,6.22-2.73,5.57,5.57,0,0,0,2.13-.92,1.84,1.84,0,0,0,.66-2.06,2.47,2.47,0,0,0-1.11-1,15,15,0,0,0-18.1,2.9c-1.36,1.51-2.41,3.72-1.47,5.52a5.23,5.23,0,0,0,3.27,2.41c3.38,1,4.47,2.79,4.87,2.07S310.41,389.27,312.25,387.89Z"/>
    <path class="cls-97" d="M331.22,398.82l11.55-9a9.72,9.72,0,0,0,1.15-1.07l8.73-9.69,1.9-3s4.43-5.5,3.36,2.39l-1,2.65-9.6,12.61a5.61,5.61,0,0,1-.83.86l-11.68,9.65Z"/>
    <path class="cls-81" d="M282.73,381s.69-5.84,6.19-5.16c0,0,12.61,25.07,23.15,27.49,1.11,2.8,3.9,3.9,5.64,3.07a4,4,0,0,0,1.94-3.43s17.4-4.44,30.46-22c0,0,2.07-.69,3.79,4.47,0,0-5.51,15.82-25.45,26.82a97.49,97.49,0,0,0,.35,25.44s-6.13,10.12-24.48,2.55a4.41,4.41,0,0,1-2.64-4.95c1.24-6.21,3.48-19.1,1.68-23.73C303.36,411.59,294.76,407.46,282.73,381Z"/>
    <path class="cls-31" d="M316.68,487.22s5.67,2.58,9.54.52l-3.61,11.86s5.32,1.72,8.12,4a1.67,1.67,0,0,1-.67,2.92c-2.07.48-6.16.54-14.26-1.27a4.08,4.08,0,0,1-3-5.16Z"/>
    <path class="cls-31" d="M279.87,465.71s1.09,6.14,5,8.16L273,477.61s1.6,5.36,1.28,9a1.67,1.67,0,0,1-2.79,1.09c-1.56-1.43-3.93-4.77-7-12.46A4.08,4.08,0,0,1,267,469.8Z"/>
  </g>
  </g>
  `
})

Vue.component('family-1', {
  template: `
  <g>
    <path class="cls-58" d="M1052.49,534l-3.65,2.77-6.42,2.26s-2.77,2.27,4.65,2.52l12.16-1.66a1.53,1.53,0,0,0,1.28-1.88l-1-4S1054.25,535.63,1052.49,534Z"/>
    <path class="cls-58" d="M1065.27,536.92l-3.06,3.41-5.87,3.44s-2.29,2.75,5.05,1.59l11.62-3.93a1.54,1.54,0,0,0,.9-2.1l-1.72-3.75S1067.31,538.19,1065.27,536.92Z"/>
    <path class="cls-58" d="M1030.88,436.17a3.93,3.93,0,0,0-1.52-.68,1.33,1.33,0,0,0-1.41.66c-.25.6.22,1.23.67,1.72a29.07,29.07,0,0,0,2.71,2.61c1.43,1.2,2,2.81,4.54,3.65a1.71,1.71,0,0,0,2-.85,3.05,3.05,0,0,0,.18-1.34c0-.07-1.69-1-1.87-1.17a18.76,18.76,0,0,1-1.94-2.79C1033.64,437.19,1032.27,437,1030.88,436.17Z"/>
    <path class="cls-84" d="M1080.44,376c-.1.06.11-1.34-.2-1.93s-.78-1.1-1.1-1.69a6.48,6.48,0,0,1-.6-1.75,14.21,14.21,0,0,1-.25-4.55c0-.38.17-1.17.55-1.21.94.19.5,1.5.61,2.07s.44,1.14.94.83a1.07,1.07,0,0,0,.37-.9c0-.81-.07-1.62,0-2.43a3,3,0,0,1,1-2.16,3.4,3.4,0,0,1,2.57,0,2.45,2.45,0,0,1,1.61,2.1c0,1.79-.06,2.95,0,4.74a8,8,0,0,1-.76,3.26,12,12,0,0,0-1,3.25A7.28,7.28,0,0,0,1080.44,376Z"/>
    <path class="cls-75" d="M1044.6,469.51l7.19,64.56a7.78,7.78,0,0,0,8.31,0l4.19-63.11S1050.89,474.55,1044.6,469.51Z"/>
    <path class="cls-59" d="M1057.05,473l7,63.47a8.3,8.3,0,0,0,8.68-.25c.48-.3,1.76-69.36,1.76-69.36S1071.65,472.48,1057.05,473Z"/>
    <path class="cls-73" d="M1025.12,406.66l-3-8.06a3.48,3.48,0,0,1-.17-1.47l.42-5.14a2.7,2.7,0,0,1,2.71-2.51l.21,0a1.79,1.79,0,0,1,1.52,2l-.65,5.21,1.39,2.39,1.26-4.91s1.51-.63.88,2.39l-.38,5.67.49,3.57S1026,405.65,1025.12,406.66Z"/>
    <path class="cls-66" d="M1024.22,407.07s3.28-3.15,6.8-.76c0,0,0,22.41,23.29,17.5h9.81s22.28,3,24.92-20.52a6.05,6.05,0,0,1,6.3,1.14s1.76,24.29-19.51,31.21c0,0-7.89,2.43-.67,28.24a3.48,3.48,0,0,1-.54,3c-2.55,3.49-10.62,9.69-28.5,4.9-1.91-.51-2.64-3.16-2.51-5.14.48-7.43,1.13-25.46-3.53-31.11A37.69,37.69,0,0,1,1024.22,407.07Z"/>
    <path class="cls-58" d="M1061.79,455.56a4.41,4.41,0,0,0-1.51.87,1.52,1.52,0,0,0-.48,1.56c.28.56,1,.54,1.71.45a32.52,32.52,0,0,0,3.72-.72c1.84-.49,3.31-.06,5.71-1.65.26-.17.7-1.74-.75-3.5-.53-.65-1.52,1.52-4.56.65A23.77,23.77,0,0,1,1061.79,455.56Z"/>
    <path class="cls-59" d="M1064.87,423.68c-1.19-.11-1.86,4.1-3.36,6.95a12,12,0,0,0-1.6,4.9,8.27,8.27,0,0,0,.42,2.78q1.85,6.79,4.05,13.48a2.09,2.09,0,0,0,2.1,1.87c1.17.17,2.5.3,3.4-.48,1.25-1.08.79-3.07.4-4.67a49.06,49.06,0,0,1-.93-12.17,7.27,7.27,0,0,1,.32-2.59,8.55,8.55,0,0,1,2.5-3,17.17,17.17,0,0,0,5.35-8.47S1066.8,423.85,1064.87,423.68Z"/>
    <path class="cls-59" d="M1045.21,422.26c-4,4.36-7.24,9.64-11,14.22a1.32,1.32,0,0,0-.27,1.78,7.09,7.09,0,0,0,4.11,4.09.89.89,0,0,0,.74-.1,1.39,1.39,0,0,0,.56-.46c8.65-12.17,14.27-16.76,12.47-15.4-1.06.81.18-6.83-1.41-7.49S1046.17,421.22,1045.21,422.26Z"/>
    <path class="cls-85" d="M1065.63,395.24s14.85-2.27,14.48-19.51c0,0,3.14-1.89,4.53.38a22.37,22.37,0,0,1-7.41,24.06,6.17,6.17,0,0,0-2.24,4.65c-.07,3.51.22,9.41,2.37,14.51.45,1.06.87,3.48-1.2,4.1-6.25,1.89-20.19,1.33-25.38-3.65,0,0,5.4-7.19,5.4-12.72,0,0-9.41,10.32-24.78-3,0,0,.38-4.66,2.77-3.9,0,0,6.92,8.56,18.75,0,0,0,4.53-2.77,6.92-2.77C1059.84,397.38,1063,398.76,1065.63,395.24Z"/>
    <g>
      <path class="cls-61" d="M1059.16,394.85a6,6,0,0,1,.54,2.86.74.74,0,0,0,.57.87c1.21.26,3.51.81,5.24-1.28a1.41,1.41,0,0,0,0-1.77,11.73,11.73,0,0,1-2.09-3.7A5.73,5.73,0,0,1,1059.16,394.85Z"/>
      <path class="cls-84" d="M1064.35,386.06c1.69,3.94.14,8.4-3.48,9.95s-7.55-.6-9.24-4.54-.52-8.18,3.1-9.74S1062.65,382.11,1064.35,386.06Z"/>
      <path class="cls-86" d="M1053.23,388.15a8.5,8.5,0,0,0,2.89-2.15c.91-.82,2.06-1.55,3.2-1.27s2,1.91,2.67,3.07a.15.15,0,0,0,.27,0,.92.92,0,0,1,1.06-.71,1.64,1.64,0,0,1,1.41,1.57c.11.7-.12,1.7.22,2.3,1.24-1.58,1.74-5.49.65-7.18-2.6-4-5.92-3.58-7.81-3.45a11.05,11.05,0,0,0-2.61.44,13.59,13.59,0,0,0-1.8.78c-1.21.6-3,1.07-4,2s-2.87.13-2.06,1.17C1048.79,386.53,1050.67,389,1053.23,388.15Z"/>
      <path class="cls-64" d="M1049.63,384.47a9.11,9.11,0,0,0,3.62-1.11,12.32,12.32,0,0,1,11.39,1.22,4.46,4.46,0,0,0,1.55.82,1.25,1.25,0,0,0,1.45-.71,1.81,1.81,0,0,0-.29-1.4c-2-3.64-6.34-5.13-10.32-5.07-2.52,0-9.25,1.85-9.76,4.11C1047,383.5,1048.68,384.43,1049.63,384.47Z"/>
      <path class="cls-63" d="M1049.47,381.33c1.86-2.52,6.19-7.69,11.12-8.73a5.64,5.64,0,0,1,2.55.77,43.21,43.21,0,0,1,3.29,7.68.9.9,0,0,1-1.3,1.06c-2.42-1.46-7.36-3.15-15.12,0A.48.48,0,0,1,1049.47,381.33Z"/>
      <path class="cls-64" d="M1062.21,374.14c-.25,0-.46-.17-.71-.21a1.91,1.91,0,0,0-1.06.29c-.35.14-.85.12-1-.23s.09-.56,0-.84a.69.69,0,0,0-.63-.44,3.25,3.25,0,0,0-.82.12c-.29.07-.72,0-.7-.32a.42.42,0,0,1,.08-.18c.3-.43,1-.4,1.29-.85a1.73,1.73,0,0,0,.07-1c0-.35.15-.77.49-.79s.53.33.83.41c.67.2,1.2-.92,1.87-.73s.6,1.08,1.16,1.27,1.06-.15,1.22.26a.8.8,0,0,1-.08.52,4.33,4.33,0,0,0-.23,1.49C1062.65,372.49,1063.13,374.06,1062.21,374.14Z"/>
    </g>
    <path class="cls-87" d="M1065,416.92a19.23,19.23,0,0,0-.62,5.55,3.39,3.39,0,0,1-2.71,3.51c-2.52.48-6.13.62-8.94-1.42a6.81,6.81,0,0,0,.47-3.58s7.58,5.52,11.24-5.85Z"/>
    <path class="cls-84" d="M1065.2,415.2c-.29,1.78.25,3.8-2.28,4.67-1.93.67-3.82,3.19-6.16,3-3.75-.35-5.93-5-5.46-9.95s3.39-8.32,7.15-8S1066,410.3,1065.2,415.2Z"/>
    <path class="cls-62" d="M1066.68,410.57a11.89,11.89,0,0,1-.65-1.08,1.21,1.21,0,0,1,0-1.18,5.19,5.19,0,0,1,.37-.45,1.52,1.52,0,0,0-.3-1.89,6.32,6.32,0,0,0-1.84-1.16,3.85,3.85,0,0,1-1.67-1.34,7,7,0,0,1-.45-1.43,1.67,1.67,0,0,0-.94-1.14c-1.16-.41-2.4,1.08-3.54.61a3.35,3.35,0,0,0-.66-.32c-.78-.17-1.23.88-2,1a2.81,2.81,0,0,1-1.24-.19,3,3,0,0,0-2.55.6,2.08,2.08,0,0,0-.06,3.26.28.28,0,0,0,0,.13c0,.51.29,1.15.23,1.75s-.26,1.21-.36,1.82a7.54,7.54,0,0,0,.26,3.62,24.58,24.58,0,0,1,1-3.58,8.44,8.44,0,0,1,1.56-2.63l0,0c.64,0,1.25-.57,1.89-.61,1.08-.07,1,2.07,5.47,1.15,1-.22,1.07,1.75,1.36,2.72s.55,2.43-.28,3.27a6.46,6.46,0,0,0-.71.67,1.68,1.68,0,0,0-.28,1.09v.08a1.61,1.61,0,0,1-.44,1.29,1,1,0,0,0-.22.28c-1.44,3.17-4,1.1-4.33,1-.57-.12-1-.34-1.51-.13-3.47,1.39-3.09-2.34-3.4-2.08-1.2,1-1.23,4.14-1.36,4.4-.28.53-.89.85-1.15,1.39-.54,1.13.6,2.57,0,3.66-.2.36-.57.63-.65,1a1.2,1.2,0,0,0,.76,1.19c.46.23,1,.32,1.42.56a11.25,11.25,0,0,1,1.47,1.21,7.3,7.3,0,0,0,3.88,1.12,3.61,3.61,0,0,0,2.54-.4c.38-.29.65-.74,1.1-.89s1,0,1.45-.06a2,2,0,0,0,1.33-1.9c.06-.84-.13-1.68,0-2.5a18.85,18.85,0,0,1,.83-2.28,2.08,2.08,0,0,0-.44-2.24,1.83,1.83,0,0,1-.54-.45,1,1,0,0,1-.06-.68c.07-.61.15-1.22.22-1.83,0-.28,0-.92.06-1a2.26,2.26,0,0,1,.72-.88,1.08,1.08,0,0,1,1.76.38c.14.43.15,1.56.63,1.63.18-1.17,1.37-2.62,1.71-3.76A3.62,3.62,0,0,0,1066.68,410.57Z"/>
    <path class="cls-84" d="M1094.66,403.92l2.66-8a3.88,3.88,0,0,0,.17-1.47l-.43-5.14a2.69,2.69,0,0,0-2.7-2.51h-.21a1.82,1.82,0,0,0-1.53,2l.65,5.21-.56,1.12a.49.49,0,0,1-.89-.06l-1.13-3.33a.38.38,0,0,0-.41-.3c-.4,0-1,.4-.53,2.44l.38,5.66-.25,3.15S1093.78,402.92,1094.66,403.92Z"/>
    <path class="cls-88" d="M1033.58,400.81c.34-.32-.21-2.31-.55-3.43a3.7,3.7,0,0,0-2.18-2.64c-1.42-.45-3,.34-4.1,1.2a6.31,6.31,0,0,0-1.65,1.65,2.24,2.24,0,0,0-.22,2.12,3.83,3.83,0,0,0,1.07,1.17,26.79,26.79,0,0,0,5.45,2.92A10.34,10.34,0,0,1,1033.58,400.81Z"/>
    <g>
      <path class="cls-58" d="M1034,417.45a11.25,11.25,0,0,0-2.61-7.51c-.2-.23-.41-.46-.62-.68a10.23,10.23,0,0,1-1.16-1.43,2.66,2.66,0,0,1-.37-2.37,4.26,4.26,0,0,1,.61-.91,3.57,3.57,0,0,0,.82-1.41,3.61,3.61,0,0,0-.41-2.15l-.13-.31c-.16-.39-.47-1.36,0-1.88l-.47-.46a2.34,2.34,0,0,0-.17,2.58l.13.33A3,3,0,0,1,1030,403a3,3,0,0,1-.68,1.14,4.28,4.28,0,0,0-.71,1.06,3.28,3.28,0,0,0,.42,3,10.75,10.75,0,0,0,1.23,1.52c.2.22.41.44.6.66a10.54,10.54,0,0,1,2.45,7.07Z"/>
      <path class="cls-84" d="M1025,399.14a11.56,11.56,0,0,0,4.81,1,16.15,16.15,0,0,0,3.26-3.64.9.9,0,0,0,0-1c-.41-.6-1.56-1.26-4.82-.46C1028.25,395,1023.47,397.38,1025,399.14Z"/>
      <g>
        <path class="cls-89" d="M1029,395l.32-.57a1.4,1.4,0,0,1-.4-1.65,5.64,5.64,0,0,1,.6-1.17c.16-.26.31-.53.45-.8a6.88,6.88,0,0,0,.41-4.27,19.49,19.49,0,0,0-1.4-4l-.59.26a19.24,19.24,0,0,1,1.35,3.84,6.15,6.15,0,0,1-.36,3.85,7.94,7.94,0,0,1-.42.75,6,6,0,0,0-.66,1.31A2,2,0,0,0,1029,395Z"/>
        <path class="cls-90" d="M1029,395l.32-.57a1.4,1.4,0,0,1-.4-1.65,5.64,5.64,0,0,1,.6-1.17c.16-.26.31-.53.45-.8a6.88,6.88,0,0,0,.41-4.27,19.49,19.49,0,0,0-1.4-4l-.59.26a19.24,19.24,0,0,1,1.35,3.84,6.15,6.15,0,0,1-.36,3.85,7.94,7.94,0,0,1-.42.75,6,6,0,0,0-.66,1.31A2,2,0,0,0,1029,395Z"/>
      </g>
    <path class="cls-91" d="M1027.36,379.21a7,7,0,0,0-2,2.65.38.38,0,0,0,.45.52,3.4,3.4,0,0,1,.84-.11,2.29,2.29,0,0,0,.34,1,.78.78,0,0,0,1,.27c.35-.22.56-.83,1-.68.2.08.26.35.44.48.45.32.93-.46,1.48-.51a1,1,0,0,0,0-1,16.3,16.3,0,0,0-2.07-2.44Z"/>
    <ellipse class="cls-14" cx="1031.97" cy="359.47" rx="20.33" ry="16.14" transform="translate(575.27 1352.25) rotate(-84.5)"/>
  </g>
</g>

  `
})

Vue.component('family-2', {
  template: `
  <g>
    <g>
    <path class="cls-100" d="M122.1,559.65l-3.48-8.43a4.45,4.45,0,0,0-1.94-2.08l-6.34-3.46a2.85,2.85,0,0,0-2.3-.23c-.7.25-1.25.81-.7,2l5.09,4.34,1.61,3.22-4.34-3.84s-1.12,0-.37,1.36a28.17,28.17,0,0,0,5.82,6.32l2.61,2.73S120.11,559.77,122.1,559.65Z"/>
    <path class="cls-100" d="M200.94,542.17l-.93-5.44a2,2,0,0,1,.34-1.61l3.3-4.53a.26.26,0,0,1,.37-.05c.44.39,1.14,1.62-1.47,4.81h0a5,5,0,0,1,4.66,5.86l-.2,1.08S202.92,541.67,200.94,542.17Z"/>
    <path class="cls-100" d="M208.38,535.1c.16-.56,1.11-3,1.24-3.35.94-2.72-.08-5.08-1.86.75.41-1.49,1.5-4.48.87-5.58,0,0-1.12-.55-2.36,5.21.27-1.44.86-4.51.52-5.67a.38.38,0,0,0-.73,0c-.26.81-.78,2.51-1.65,5.68l-3.84,10H201l6.59.61,1-4.34c4-8.18,2-6.52,2-6.52A17.53,17.53,0,0,0,208.38,535.1Z"/>
    <path class="cls-101" d="M160,683.37l-3.72,4s-9.79,1.36-7.81,3.84c0,0,10.09,1,16.4-.18a2,2,0,0,0,1.64-2.19l-.56-5.44Z"/>
    <path class="cls-102" d="M176.64,683.12l-3.72,4s-9.79,1.36-7.81,3.84c0,0,10.09,1,16.41-.18a2,2,0,0,0,1.63-2.19l-.56-5.44Z"/>
    <path class="cls-103" d="M154.1,608.93l-1.81,40.26a5.51,5.51,0,0,0,.06,1.15l5.53,33.81s5.29,3,9.26.33l-1-37,1.51-22.09,1.13,23.74,5.29,34.71s6.4,2.65,9.92,0l-2-37.35,1-38.35S167.33,612.57,154.1,608.93Z"/>
    <path class="cls-104" d="M171.43,568.08l8.56,3.1s12.27-3.47,18.22-9.8l2.36-19.21s4.58-1.37,7.06.62l-2,23.8a6.92,6.92,0,0,1-3,4.46l-21.07,15,3.47,30s3,10.54-1.36,10.29c0,0-20.43-1.56-23.06-1,0,0-6,.31-7.93,1.12s-2.14-2.44-1-7.4a61.61,61.61,0,0,0,1.49-9.74c.51-6.86,1.07-17.56.1-22.41,0,0-1.24-1.86-11.78-1.61l-9.49-.18a6.5,6.5,0,0,1-5.67-3.54l-9.64-19s3-3.72,7.44-3.1l7.74,13a4.28,4.28,0,0,0,4.55,2l17-3.48,8.31-2.35S167.72,571.18,171.43,568.08Z"/>
    <path class="cls-100" d="M144.2,531.53l.26-2.14a3.44,3.44,0,0,0,0-1.11l-.6-3.4s-1.5-1.06-.88,2.81c-.72-1.69-1.89-4-3.78-3.93a2,2,0,0,0-1.75,1.34c-.53,1.41-.28,2.9,2.9,8.38l2.1,3.43s2.2-1.5,3.43-1.5l-1.3-2.2A2.68,2.68,0,0,1,144.2,531.53Z"/>
    <path class="cls-105" d="M197.39,543.49l3-3.47s1-5.62,2.89-6.53c0,0,1.16-.08-1,3.72,0,0,3.89-5.29,5.46-4.3,0,0,2.72,3.06-4.55,8.18l-3.47,5S198.87,544,197.39,543.49Z"/>
    <path class="cls-106" d="M173.83,546.3s11.66,5.33,23.65-3.76c0,0,2.56,1.46,3,3.45,0,0-8.44,10.72-21.74,10.81l-4,11.73s-12.89,1.74-18.51-2.23c0,0,3.35-8.12,2.21-13.93l-7.1-1a2.85,2.85,0,0,1-2-1.31l-7.73-12.51s2.4-2.81,4.79-2.64l5.55,8a3.45,3.45,0,0,0,2.7,1.48l6.58.23a9.26,9.26,0,0,1,1.89.27l5.1,1.26A6.47,6.47,0,0,0,173.83,546.3Z"/>
    <path class="cls-106" d="M182.46,551.83c1.22,2.44,2.18,5.07,4,7.14s4.41,3.46,6.91,4.75a30.32,30.32,0,0,0-9.84,3.74,21.59,21.59,0,0,1-1.9-4.72,14.94,14.94,0,0,0-2.79-4.62c-1.29-1.45-2.85-2.65-4.1-4.14a6.81,6.81,0,0,1-1.85-5.33C174.14,541.31,181.08,549.08,182.46,551.83Z"/>
    <path class="cls-60" d="M148.13,535.81a18.31,18.31,0,0,0-6.41,4.35l4.61,7.42a9.4,9.4,0,0,0,3.4,3.26l6.08,3.42L153,569.64a29.79,29.79,0,0,0,26.65,2.3l-.77-13.58s10.51,2,21.53-11.53l-5.64-4.62s-6.66,8.2-20.76,3.85H167.6S154.79,544,148.13,535.81Z"/>
    <path class="cls-100" d="M158.44,552.37c-.87,4.28-1.9,12.73,2.95,14.47a6.16,6.16,0,0,0,5.21-1l-1.89,4.07s4.74.26,6.72-1.84l1.12-6.32s8.93-12.77-5.45-15.38a5.63,5.63,0,0,0-.83-.1A7.56,7.56,0,0,0,158.44,552.37Z"/>
    <path class="cls-107" d="M155.22,583.94c-1.31-.28-2-8-2.73-12-.34-1.89-.79-3.86-.05-5.7a3.66,3.66,0,0,1,1.79-2c1.84-.87,3.42.36,4.14,1.84a12.65,12.65,0,0,1,.89,3.39c.8,4.29,2.35,8.52,2.16,12.86a.66.66,0,0,1-.46.6C159.79,583.31,156.6,584.24,155.22,583.94Z"/>
    <g>
      <path class="cls-100" d="M164.35,530.47c-1.26,3.65-2.61,10.88,3.94,13.5,0,0,8.74,2.69,10.88-9.69a8.17,8.17,0,0,0-2.36-7.38c-1.89-1.76-4.89-2.84-9.37-.22A7.06,7.06,0,0,0,164.35,530.47Z"/>
      <path class="cls-108" d="M162,525.71c-1.21-.51-.35,2.72.65,3.57a8.69,8.69,0,0,0,2.1,1.08,8.77,8.77,0,0,1,4.95,6.71,4.12,4.12,0,0,1,2.07-1.22,1.85,1.85,0,0,1,2,1,5.26,5.26,0,0,1,.17,1.19,9.12,9.12,0,0,0,1.78,3.9c3.69-2.18,5.62-7.34,4.15-11.16C175.57,519.52,166.07,527.43,162,525.71Z"/>
      <path class="cls-108" d="M178.41,526a7.54,7.54,0,0,1,5.93,3.21,11.77,11.77,0,0,1,1.23,2.73,6.3,6.3,0,0,1,.43,2.22c-.07,1.9-1.69,3.46-1.85,5.35a3.6,3.6,0,0,0,4.88,3.65,8.57,8.57,0,0,1-5.61,4.9,11.58,11.58,0,0,1-7.54-.58,3.94,3.94,0,0,1-1.29-.78,3.82,3.82,0,0,1-.63-3.59,56.17,56.17,0,0,1,2-5.53,7.91,7.91,0,0,0,.13-5.74c-.54-1.21-3.33-2.48-3.19-3.71C173.09,526.4,177.14,525.94,178.41,526Z"/>
      <path class="cls-100" d="M168.29,543.66l-.17,2.72s4.11,1.35,5.71-.08v-3.06S171.93,544.56,168.29,543.66Z"/>
    </g>
    <path class="cls-60" d="M165.42,526.07s8.85,7.3,10.77,13.84a16.5,16.5,0,0,0,8.46-1.93,15.64,15.64,0,0,0,3.26-2.33A6.69,6.69,0,0,0,186.79,525C182.48,522.31,175.43,520.53,165.42,526.07Z"/>
    <path class="cls-106" d="M166.12,543.53a8.53,8.53,0,0,1,3.69.09,5.55,5.55,0,0,0,3.63-.34c1.14-.66,2.06-2.1,3.34-1.82,1.08.24,1.47,1.57,1.54,2.68a3.62,3.62,0,0,1-.15,1.54c-.59,1.58-2.67,1.86-4.35,1.88l-7.39.07C163.52,547.66,163.57,544.31,166.12,543.53Z"/>
    <path class="cls-109" d="M158,563.46a5.51,5.51,0,0,0,4.51-.4,5.3,5.3,0,0,0,2.58-3.65,9.12,9.12,0,0,0-.1-2.9,6,6,0,0,0-.78-2.4c-1.12-1.71-3.72-1.81-5.17-3.26-1.13-1.12-1.42-3.9-1.17-4.87,2.3.6,5.12.22,7.5.32s5.35.27,7.2,1.75a13.39,13.39,0,0,1,2,1.93,9.55,9.55,0,0,1,2,5.46c.15,2.82-2.11,6.32-4.3,8.17.2-1.09-.75-3.5-1.87-3.69-1.58-.28-2.95,1.27-3.28,2.81s0,3.15-.13,4.73a8.38,8.38,0,0,1-6.83,7.3,4.25,4.25,0,0,1-2.4-.17,2.14,2.14,0,0,1-1.37-1.83,4.09,4.09,0,0,1,.61-1.73C158.1,568.92,158.91,565.64,158,563.46Z"/>
    <path class="cls-107" d="M166.72,582.09l2.81-11s1.06-4.85,4-6.13a2,2,0,0,1,2.48.81c.79,1.32,1.48,4-.42,8.63l-3.06,9.17S167.88,583.9,166.72,582.09Z"/>
    <path class="cls-102" d="M163.65,589.55c1,3.28.26,6.47-1.76,7.12s-4.51-1.49-5.56-4.78-.26-6.46,1.76-7.11S162.6,586.27,163.65,589.55Z"/>
    <ellipse class="cls-102" cx="168.09" cy="590.06" rx="6.24" ry="3.84" transform="translate(-443.13 536.73) rotate(-69.11)"/>
    <path class="cls-110" d="M167.47,582.91l-.58,3.72a3.47,3.47,0,0,1,3.31.66l1.32-3.55S168,583.57,167.47,582.91Z"/>
    <path class="cls-110" d="M156.15,584l1.65,4.46s1.65-1.74,3.22-1.24l-.41-4.13Z"/>
  </g>
</g>

  `
})

Vue.component('icon-facebook', {
  template: `
  <g>
    <circle class="cls-132" cx="607.99" cy="713.62" r="15"/>
    <path class="cls-122" d="M610.89,714.12l.4-2.4H609v-1.5a1.21,1.21,0,0,1,1.1-1.3h1.3v-2a11,11,0,0,0-1.8-.2,2.9,2.9,0,0,0-3.1,2.6v2.3h-2.1V714h2.1v5.7H609V714h1.9Z"/>
  </g>
  `
})

Vue.component('icon-twitter', {
  template: `
  <g>
    <circle class="cls-133" cx="645.49" cy="713.62" r="15"/>
    <path class="cls-122" d="M651.59,711a5,5,0,0,0,1.4-1.5,4.71,4.71,0,0,1-1.7.4,3.44,3.44,0,0,0,1.3-1.6,6.7,6.7,0,0,1-1.8.7,2.72,2.72,0,0,0-2.1-.9,2.9,2.9,0,0,0-2.9,2.9,2,2,0,0,0,.1.7,8,8,0,0,1-5.9-3,2.3,2.3,0,0,0-.4,1.4,2.81,2.81,0,0,0,1.3,2.4,2,2,0,0,1-1.3-.4,2.89,2.89,0,0,0,2.3,2.8,2,2,0,0,1-.8.1h-.5a2.88,2.88,0,0,0,2.7,2,5.78,5.78,0,0,1-3.6,1.2H639a8.39,8.39,0,0,0,4.4,1.3,8.22,8.22,0,0,0,8.2-8.1V711Z"/>
  </g>
  `
})

Vue.component('icon-share', {
  template: `
  <g>
    <circle class="cls-134" cx="758.01" cy="713.62" r="15"/>
    <path class="cls-122" d="M760.21,712c-.2-.1-.3-.3-.5-.4a.45.45,0,0,0-.5,0l-.5.5a.91.91,0,0,0-.3.7c0,.1.1.2.2.3s.2.1.2.2a1.63,1.63,0,0,1,0,2.4l-1.6,1.6a1.63,1.63,0,0,1-2.4,0,1.82,1.82,0,0,1,0-2.4l.3-.3a.6.6,0,0,0,.1-.4,5,5,0,0,1-.2-1.2.43.43,0,0,0-.4-.4c-.1,0-.2,0-.2.1l-.9.9a3.54,3.54,0,0,0,5,5l1.6-1.6a3.59,3.59,0,0,0,.1-5Zm3.3-3.3a3.5,3.5,0,0,0-5,0l-1.6,1.6a3.5,3.5,0,0,0,0,5c.2.1.3.3.5.4a.45.45,0,0,0,.5,0l.5-.5a.91.91,0,0,0,.3-.7c0-.1-.1-.2-.2-.3s-.2-.1-.2-.2a1.63,1.63,0,0,1,0-2.4l1.6-1.6a1.63,1.63,0,0,1,2.4,0,1.82,1.82,0,0,1,0,2.4l-.3.3a.6.6,0,0,0-.1.4,5,5,0,0,1,.2,1.2.43.43,0,0,0,.4.4c.1,0,.2,0,.2-.1l.9-.9a3.8,3.8,0,0,0-.1-5Z"/>
  </g>
  `
})

Vue.component('icon-linked-in', {
  template: `
  <g>
    <circle class="cls-135" cx="683" cy="713.62" r="15"/>
    <path class="cls-122" d="M680.4,717.12v-7h-2.2v7Zm-1.1-7.9a1.3,1.3,0,1,0-1.3-1.3A1.4,1.4,0,0,0,679.3,709.22Zm9.3,7.9v-3.9c0-1.9-.4-3.3-2.6-3.3a2.61,2.61,0,0,0-2.1,1.1v-1h-2.1v7H684v-3.5c0-.9.2-1.8,1.3-1.8s1.1,1,1.1,1.9V717h2.2Z"/>
  </g>
  `
})

Vue.component('icon-email', {
  template: `
  <g>
    <circle class="cls-136" cx="721.01" cy="713.62" r="15"/>
    <path class="cls-122" d="M726.71,708.62h-11.4a1.32,1.32,0,0,0-1.3,1.3v7.9a1.32,1.32,0,0,0,1.3,1.3h11.4a1.32,1.32,0,0,0,1.3-1.3v-7.9A1.32,1.32,0,0,0,726.71,708.62Zm0,1.4v1.1c-.6.5-1.6,1.3-3.7,2.9-.5.4-1.4,1.2-2,1.2s-1.5-.9-2-1.2c-2.1-1.6-3.1-2.4-3.7-2.9V710Zm-11.4,7.8v-5.1c.6.5,1.5,1.2,2.9,2.3a3.36,3.36,0,0,0,5.6,0c1.4-1.1,2.2-1.8,2.9-2.3v5.1Z"/>
  </g>
  `
})

Vue.component('icon-sound-on', {
  template: `
    <g id="sound-on">
      <path class="cls-30" d="M1313.17,28.07v24.4c0,1.2-.7,1.5-1.6.7l-4.3-4.2c-.9-.8-2.3-2.2-3.1-3l-.2-.2h-4.8a1.32,1.32,0,0,1-1.3-1.3V36a1.32,1.32,0,0,1,1.3-1.3h4.8l.2-.2c.9-.8,2.3-2.2,3.1-3l4.3-4.2C1312.47,26.57,1313.17,26.87,1313.17,28.07Z"/>
      <path class="cls-30" d="M1318,45.43a1,1,0,0,1-1.5-.2,1.19,1.19,0,0,1,.2-1.5s1.4-1,1.3-3.7a4.51,4.51,0,0,0-1.2-3.3,1.11,1.11,0,0,1-.2-1.5,1,1,0,0,1,1.4-.2,7.3,7.3,0,0,1,0,10.4Z"/>
      <path class="cls-30" d="M1322.47,49.91a1,1,0,0,1-1.5-.1,1.09,1.09,0,0,1,.1-1.5,11.47,11.47,0,0,0,0-16.1,1.09,1.09,0,0,1-.1-1.5,1,1,0,0,1,1.4-.1h.1a14,14,0,0,1,4.1,9.5A14.21,14.21,0,0,1,1322.47,49.91Z"/>
      <path class="cls-30" d="M1326.46,53.4a1,1,0,0,1-1.4,0,1.21,1.21,0,0,1,0-1.6,16.77,16.77,0,0,0,.3-23.1,1.21,1.21,0,0,1,0-1.6,1,1,0,0,1,1.4,0,19.93,19.93,0,0,1,5.2,13.1C1332,47.9,1326.46,53.4,1326.46,53.4Z"/>
    </g>
  `
})

Vue.component('icon-sound-off', {
  template: `
    <path id="sound-off" class="cls-30" d="M1313.17,28.07v24.4c0,1.2-.7,1.5-1.6.7l-4.3-4.2c-.9-.8-2.3-2.2-3.1-3l-.2-.2h-4.8a1.32,1.32,0,0,1-1.3-1.3V36a1.32,1.32,0,0,1,1.3-1.3h4.8l.2-.2c.9-.8,2.3-2.2,3.1-3l4.3-4.2C1312.47,26.57,1313.17,26.87,1313.17,28.07Z"/>
  `
})
  
var initData = function () {
  return {
    audioLink: './assets/christmas-cheer.wav',
    card: 1,
    isOpen: false,
    isSoundOn: false,
    isTransition: false,
    maxWindowCount: 5,
    step: 0,
  }
}

var vm = new Vue({
  el: '#app',
  data () {
    return initData()
    },
    methods: {
      delay: async function (seconds) {
        return await new Promise(resolve => {
          setTimeout(resolve, seconds);
        })
      },
      openWindow: async function () {
        this.isOpen = true
        await this.stepWindowOpen()
        this.transitionToCard2()
      },
      playAgain () {
        Object.assign(this.$data, initData())
      },
      stepWindowOpen: async function () {
        for (this.step; this.step <= this.maxWindowCount; this.step++) {
          await this.delay(300)
        }
      },
      transitionToCard2: async function () {
        this.isTransition = true
        await this.delay(1000)
        this.card = 2
        await this.delay(1000)
        this.isSoundOn = true
      },
    },
    watch: {
      isSoundOn: function (newValue, oldValue) {
        if (newValue === true) {
          audio = new Audio(this.audioLink)
          audio.loop = true
          audio.play()
        } else {
          audio.pause()
        }
      }
    }
  })


