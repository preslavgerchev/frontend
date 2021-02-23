import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export default function CommissionsIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 110 138">
      <path
        d="M82.5 77.2645V55.2C82.4904 49.5623 80.762 44.0627 77.547 39.4397C74.332 34.8167 69.7844 31.2919 64.515 29.3388L70.321 16.2288C70.4227 15.9987 70.4731 15.7491 70.4685 15.4974C70.4639 15.2457 70.4045 14.9981 70.2944 14.7719C70.1844 14.5457 70.0263 14.3465 69.8314 14.1881C69.6364 14.0297 69.4093 13.9161 69.166 13.8552L65.4621 12.9237C63.0183 12.3134 60.4378 12.5984 58.1849 13.7275C57.195 14.2208 56.1051 14.4782 55 14.4796V17.9296C56.6382 17.9264 58.2534 17.5432 59.7197 16.8101C61.2384 16.0491 62.9778 15.857 64.625 16.2685L66.3438 16.7014L61.1875 28.3331C59.1595 27.8532 57.0836 27.6073 55 27.6V31.05C61.3797 31.0568 67.4961 33.6034 72.0072 38.1309C76.5184 42.6584 79.0557 48.7971 79.0625 55.2V76.59C74.702 76.1151 70.3014 76.9954 66.4555 79.1119L66.0206 79.35H53.2813C52.2249 79.3501 51.1827 79.5945 50.2356 80.0642C49.2885 80.534 48.4621 81.2165 47.8204 82.0587C47.1787 82.901 46.739 83.8803 46.5355 84.9207C46.332 85.9611 46.3701 87.0346 46.6469 88.0578L32.7766 81.6753C32.1911 81.4195 31.5715 81.251 30.9375 81.175V55.2C30.934 53.0245 31.223 50.8585 31.7969 48.7606L28.4831 47.8394C27.8271 50.2374 27.4964 52.7133 27.5 55.2V81.6287C26.7101 81.9617 25.9941 82.4493 25.3939 83.063C24.7937 83.6766 24.3212 84.4041 24.0041 85.2029C23.4195 86.6581 23.3727 88.275 23.8719 89.7618C24.3712 91.2486 25.3837 92.5072 26.7266 93.3104L46.5111 105.225C48.3798 106.352 50.5185 106.948 52.6986 106.95H106.563V103.5H91.0938V84.525H106.563V81.075H89.9611C87.7468 79.3265 85.2118 78.0318 82.5 77.2645ZM48.2797 102.277L28.4952 90.3572C27.8534 89.9739 27.3696 89.3726 27.1313 88.6623C26.8929 87.952 26.9158 87.1795 27.1958 86.4846C27.4255 85.9098 27.8212 85.417 28.3321 85.0697C28.8429 84.7223 29.4456 84.5363 30.0627 84.5353C30.5059 84.5362 30.9437 84.6327 31.3466 84.8182L49.1288 92.993C49.353 93.0966 49.5969 93.1502 49.8438 93.15H67.0313C67.4871 93.15 67.9243 92.9682 68.2466 92.6447C68.5689 92.3213 68.75 91.8825 68.75 91.425C68.75 90.9675 68.5689 90.5287 68.2466 90.2052C67.9243 89.8817 67.4871 89.7 67.0313 89.7H53.2813C52.3696 89.7 51.4952 89.3365 50.8506 88.6895C50.2059 88.0425 49.8438 87.165 49.8438 86.25C49.8438 85.335 50.2059 84.4575 50.8506 83.8105C51.4952 83.1635 52.3696 82.8 53.2813 82.8H66.4589C66.7466 82.8001 67.0296 82.7277 67.2822 82.5895L68.1003 82.141C71.1515 80.4548 74.6261 79.6976 78.0992 79.962C81.5724 80.2264 84.8934 81.5009 87.6563 83.6297V103.5H52.7003C51.143 103.5 49.615 103.074 48.2797 102.27V102.277Z"
        fill="#4AC3FF"
      />
      <path d="M97.9688 96.6001H94.5312V100.05H97.9688V96.6001Z" fill="black" />
      <path
        d="M53.2812 41.3999V44.8499H52.3737C51.0291 44.8494 49.7236 45.3047 48.669 46.142C47.6144 46.9793 46.8725 48.1495 46.5635 49.4629C46.2546 50.7764 46.3967 52.1561 46.9668 53.3784C47.5369 54.6006 48.5016 55.5938 49.7045 56.1969L58.7589 60.7389C59.2691 60.9945 59.6783 61.4157 59.9202 61.9341C60.162 62.4524 60.2222 63.0376 60.091 63.5946C59.9599 64.1516 59.6451 64.6478 59.1977 65.0028C58.7503 65.3577 58.1965 65.5505 57.6262 65.5499H48.125V68.9999H53.2812V72.4499H56.7187V68.9999H57.6262C58.9709 69.0004 60.2764 68.5451 61.331 67.7078C62.3855 66.8705 63.1275 65.7003 63.4364 64.3869C63.7454 63.0734 63.6033 61.6937 63.0332 60.4714C62.4631 59.2492 61.4984 58.256 60.2955 57.6529L51.2411 53.1109C50.7308 52.8553 50.3216 52.4341 50.0798 51.9157C49.838 51.3974 49.7778 50.8122 49.9089 50.2552C50.0401 49.6982 50.3549 49.202 50.8023 48.847C51.2497 48.4921 51.8034 48.2993 52.3737 48.2999H61.875V44.8499H56.7187V41.3999H53.2812Z"
        fill="#4AC3FF"
      />
      <path
        d="M23.4902 37.95L36.7812 47.9549C37.0559 48.1614 37.3858 48.2806 37.7285 48.2973C38.0713 48.3139 38.4111 48.2272 38.7043 48.0483C38.9975 47.8695 39.2307 47.6066 39.3738 47.2936C39.5169 46.9806 39.5633 46.6318 39.5072 46.292L38.1236 37.95H42.9688C45.2471 37.9472 47.4314 37.0376 49.0424 35.4207C50.6535 33.8038 51.5598 31.6116 51.5625 29.3249V12.075C51.5598 9.7883 50.6535 7.59609 49.0424 5.97918C47.4314 4.36227 45.2471 3.45269 42.9688 3.44995H12.0312C9.75288 3.45269 7.56861 4.36227 5.95757 5.97918C4.34652 7.59609 3.44023 9.7883 3.4375 12.075V29.3249C3.44023 31.6116 4.34652 33.8038 5.95757 35.4207C7.56861 37.0376 9.75288 37.9472 12.0312 37.95H23.4902ZM6.875 29.3249V12.075C6.875 10.7025 7.41825 9.38617 8.38523 8.41567C9.35222 7.44517 10.6637 6.89995 12.0312 6.89995H42.9688C44.3363 6.89995 45.6478 7.44517 46.6148 8.41567C47.5818 9.38617 48.125 10.7025 48.125 12.075V29.3249C48.125 30.6974 47.5818 32.0137 46.6148 32.9842C45.6478 33.9547 44.3363 34.4999 42.9688 34.5H36.0938C35.8443 34.5001 35.5978 34.5547 35.3714 34.66C35.1451 34.7654 34.9443 34.9189 34.7831 35.11C34.6218 35.3011 34.5039 35.5251 34.4376 35.7665C34.3713 36.0079 34.3581 36.2608 34.3991 36.5078L35.4062 42.6074L25.0938 34.845C24.7962 34.621 24.4344 34.5 24.0625 34.5H12.0312C10.6637 34.4999 9.35222 33.9547 8.38523 32.9842C7.41825 32.0137 6.875 30.6974 6.875 29.3249Z"
        fill="#4AC3FF"
      />
      <path
        d="M34.8783 10.8547L17.691 28.1045L20.1217 30.544L37.309 13.2942L34.8783 10.8547Z"
        fill="#4AC3FF"
      />
      <path
        d="M18.9063 20.7001C19.9261 20.7001 20.923 20.3966 21.7709 19.828C22.6189 19.2593 23.2797 18.4511 23.67 17.5055C24.0603 16.5599 24.1624 15.5194 23.9634 14.5155C23.7645 13.5117 23.2734 12.5896 22.5523 11.8658C21.8312 11.1421 20.9124 10.6492 19.9122 10.4495C18.912 10.2499 17.8752 10.3523 16.933 10.744C15.9909 11.1357 15.1856 11.799 14.619 12.65C14.0524 13.501 13.75 14.5016 13.75 15.5251C13.75 16.8976 14.2932 18.2139 15.2602 19.1844C16.2272 20.1549 17.5387 20.7001 18.9063 20.7001ZM18.9063 13.8001C19.2462 13.8001 19.5785 13.9013 19.8611 14.0908C20.1438 14.2804 20.3641 14.5498 20.4942 14.865C20.6243 15.1802 20.6583 15.527 20.592 15.8616C20.5257 16.1962 20.362 16.5036 20.1216 16.7449C19.8812 16.9861 19.575 17.1504 19.2416 17.217C18.9082 17.2835 18.5626 17.2494 18.2485 17.1188C17.9345 16.9882 17.666 16.7671 17.4772 16.4835C17.2883 16.1998 17.1875 15.8663 17.1875 15.5251C17.1875 15.0676 17.3686 14.6288 17.6909 14.3053C18.0132 13.9818 18.4504 13.8001 18.9063 13.8001Z"
        fill="#4AC3FF"
      />
      <path
        d="M30.9375 25.875C30.9375 26.8985 31.2399 27.899 31.8065 28.75C32.3731 29.6011 33.1784 30.2643 34.1205 30.656C35.0627 31.0477 36.0995 31.1502 37.0997 30.9505C38.0999 30.7508 39.0187 30.258 39.7398 29.5342C40.4609 28.8105 40.952 27.8884 41.1509 26.8845C41.3499 25.8807 41.2478 24.8402 40.8575 23.8946C40.4672 22.949 39.8063 22.1407 38.9584 21.5721C38.1105 21.0035 37.1136 20.7 36.0938 20.7C34.7262 20.7 33.4147 21.2452 32.4477 22.2157C31.4807 23.1862 30.9375 24.5025 30.9375 25.875ZM37.8125 25.875C37.8125 26.2161 37.7117 26.5496 37.5228 26.8333C37.334 27.117 37.0655 27.3381 36.7515 27.4686C36.4374 27.5992 36.0918 27.6334 35.7584 27.5668C35.425 27.5002 35.1188 27.336 34.8784 27.0947C34.638 26.8535 34.4743 26.5461 34.408 26.2115C34.3417 25.8769 34.3757 25.53 34.5058 25.2148C34.6359 24.8996 34.8562 24.6302 35.1389 24.4407C35.4215 24.2511 35.7538 24.15 36.0938 24.15C36.5496 24.15 36.9868 24.3317 37.3091 24.6552C37.6314 24.9787 37.8125 25.4175 37.8125 25.875Z"
        fill="#4AC3FF"
      />
      <path
        d="M0.463867 141.275V139.151H0.0708008V138.633H0.463867V138.409C0.463867 138.112 0.548503 137.883 0.717773 137.72C0.888672 137.556 1.12712 137.474 1.43311 137.474C1.53076 137.474 1.65039 137.49 1.79199 137.522L1.78467 138.069C1.72607 138.055 1.65446 138.047 1.56982 138.047C1.30452 138.047 1.17188 138.172 1.17188 138.421V138.633H1.69678V139.151H1.17188V141.275H0.463867ZM3.54736 139.295C3.45133 139.282 3.3667 139.275 3.29346 139.275C3.02653 139.275 2.85156 139.366 2.76855 139.546V141.275H2.06299V138.633H2.72949L2.74902 138.948C2.89062 138.706 3.08675 138.584 3.3374 138.584C3.41553 138.584 3.48877 138.595 3.55713 138.616L3.54736 139.295ZM3.69141 139.93C3.69141 139.668 3.74186 139.434 3.84277 139.229C3.94368 139.024 4.08854 138.865 4.27734 138.753C4.46777 138.641 4.68831 138.584 4.93896 138.584C5.29541 138.584 5.58594 138.694 5.81055 138.912C6.03678 139.13 6.16292 139.426 6.18896 139.8L6.19385 139.981C6.19385 140.386 6.08073 140.712 5.85449 140.958C5.62826 141.202 5.32471 141.324 4.94385 141.324C4.56299 141.324 4.25863 141.202 4.03076 140.958C3.80452 140.713 3.69141 140.381 3.69141 139.961V139.93ZM4.39697 139.981C4.39697 140.232 4.44417 140.424 4.53857 140.557C4.63298 140.689 4.76807 140.755 4.94385 140.755C5.11475 140.755 5.24821 140.69 5.34424 140.56C5.44027 140.428 5.48828 140.218 5.48828 139.93C5.48828 139.684 5.44027 139.493 5.34424 139.358C5.24821 139.223 5.11312 139.156 4.93896 139.156C4.76644 139.156 4.63298 139.223 4.53857 139.358C4.44417 139.492 4.39697 139.699 4.39697 139.981ZM7.29004 138.633L7.31201 138.929C7.49919 138.699 7.75228 138.584 8.07129 138.584C8.41146 138.584 8.64502 138.719 8.77197 138.987C8.95752 138.719 9.22201 138.584 9.56543 138.584C9.85189 138.584 10.0651 138.668 10.2051 138.836C10.3451 139.002 10.415 139.253 10.415 139.588V141.275H9.70703V139.59C9.70703 139.441 9.67773 139.332 9.61914 139.263C9.56055 139.193 9.45719 139.158 9.30908 139.158C9.09749 139.158 8.95101 139.259 8.86963 139.461L8.87207 141.275H8.1665V139.593C8.1665 139.44 8.13639 139.329 8.07617 139.261C8.01595 139.192 7.91341 139.158 7.76855 139.158C7.56836 139.158 7.4235 139.241 7.33398 139.407V141.275H6.62842V138.633H7.29004ZM13.0493 137.984V138.633H13.501V139.151H13.0493V140.469C13.0493 140.567 13.068 140.637 13.1055 140.679C13.1429 140.722 13.2145 140.743 13.3203 140.743C13.3984 140.743 13.4676 140.737 13.5278 140.726V141.26C13.3895 141.303 13.2471 141.324 13.1006 141.324C12.6058 141.324 12.3535 141.074 12.3438 140.574V139.151H11.958V138.633H12.3438V137.984H13.0493ZM14.5825 138.921C14.7697 138.697 15.0049 138.584 15.2881 138.584C15.861 138.584 16.1515 138.917 16.1597 139.583V141.275H15.4541V139.603C15.4541 139.451 15.4215 139.34 15.3564 139.268C15.2913 139.195 15.1831 139.158 15.0317 139.158C14.825 139.158 14.6753 139.238 14.5825 139.397V141.275H13.877V137.525H14.5825V138.921ZM17.9077 141.324C17.5203 141.324 17.2046 141.205 16.9604 140.967C16.7179 140.73 16.5967 140.413 16.5967 140.018V139.949C16.5967 139.684 16.6479 139.447 16.7505 139.239C16.853 139.029 16.9979 138.868 17.1851 138.755C17.3739 138.641 17.5887 138.584 17.8296 138.584C18.1909 138.584 18.4749 138.698 18.6816 138.926C18.89 139.154 18.9941 139.477 18.9941 139.896V140.184H17.312C17.3348 140.356 17.4032 140.494 17.5171 140.599C17.6326 140.703 17.7783 140.755 17.9541 140.755C18.2259 140.755 18.4383 140.656 18.5913 140.459L18.938 140.848C18.8322 140.997 18.689 141.115 18.5083 141.199C18.3276 141.282 18.1274 141.324 17.9077 141.324ZM17.8271 139.156C17.6872 139.156 17.5732 139.203 17.4854 139.297C17.3991 139.392 17.3438 139.527 17.3193 139.703H18.3008V139.646C18.2975 139.49 18.2552 139.37 18.1738 139.285C18.0924 139.199 17.9769 139.156 17.8271 139.156ZM23.5791 141.275H22.8467L21.4209 138.936V141.275H20.6885V137.72H21.4209L22.8491 140.064V137.72H23.5791V141.275ZM24.0625 139.93C24.0625 139.668 24.113 139.434 24.2139 139.229C24.3148 139.024 24.4596 138.865 24.6484 138.753C24.8389 138.641 25.0594 138.584 25.3101 138.584C25.6665 138.584 25.957 138.694 26.1816 138.912C26.4079 139.13 26.534 139.426 26.5601 139.8L26.5649 139.981C26.5649 140.386 26.4518 140.712 26.2256 140.958C25.9993 141.202 25.6958 141.324 25.3149 141.324C24.9341 141.324 24.6297 141.202 24.4019 140.958C24.1756 140.713 24.0625 140.381 24.0625 139.961V139.93ZM24.7681 139.981C24.7681 140.232 24.8153 140.424 24.9097 140.557C25.0041 140.689 25.1392 140.755 25.3149 140.755C25.4858 140.755 25.6193 140.69 25.7153 140.56C25.8114 140.428 25.8594 140.218 25.8594 139.93C25.8594 139.684 25.8114 139.493 25.7153 139.358C25.6193 139.223 25.4842 139.156 25.3101 139.156C25.1375 139.156 25.0041 139.223 24.9097 139.358C24.8153 139.492 24.7681 139.699 24.7681 139.981ZM28.5815 141.006C28.4074 141.218 28.1665 141.324 27.8589 141.324C27.5757 141.324 27.3592 141.242 27.2095 141.08C27.0614 140.917 26.9857 140.678 26.9824 140.364V138.633H27.688V140.34C27.688 140.615 27.8133 140.752 28.064 140.752C28.3032 140.752 28.4676 140.669 28.5571 140.503V138.633H29.2651V141.275H28.6011L28.5815 141.006ZM30.4468 138.633L30.4688 138.938C30.6576 138.702 30.9106 138.584 31.228 138.584C31.508 138.584 31.7163 138.667 31.853 138.831C31.9897 138.995 32.0597 139.241 32.063 139.568V141.275H31.3574V139.585C31.3574 139.436 31.3249 139.327 31.2598 139.261C31.1947 139.192 31.0864 139.158 30.9351 139.158C30.7365 139.158 30.5876 139.243 30.4883 139.412V141.275H29.7827V138.633H30.4468ZM34.624 140.022V141.275H33.8916V137.72H35.2783C35.5452 137.72 35.7796 137.769 35.9814 137.867C36.1849 137.964 36.3411 138.104 36.4502 138.284C36.5592 138.463 36.6138 138.667 36.6138 138.897C36.6138 139.245 36.4941 139.52 36.2549 139.722C36.0173 139.922 35.6877 140.022 35.2661 140.022H34.624ZM34.624 139.429H35.2783C35.472 139.429 35.6193 139.384 35.7202 139.292C35.8228 139.201 35.874 139.071 35.874 138.902C35.874 138.728 35.8228 138.587 35.7202 138.479C35.6177 138.372 35.4761 138.317 35.2954 138.313H34.624V139.429ZM38.5571 139.295C38.4611 139.282 38.3765 139.275 38.3032 139.275C38.0363 139.275 37.8613 139.366 37.7783 139.546V141.275H37.0728V138.633H37.7393L37.7588 138.948C37.9004 138.706 38.0965 138.584 38.3472 138.584C38.4253 138.584 38.4985 138.595 38.5669 138.616L38.5571 139.295ZM38.7012 139.93C38.7012 139.668 38.7516 139.434 38.8525 139.229C38.9535 139.024 39.0983 138.865 39.2871 138.753C39.4775 138.641 39.6981 138.584 39.9487 138.584C40.3052 138.584 40.5957 138.694 40.8203 138.912C41.0465 139.13 41.1727 139.426 41.1987 139.8L41.2036 139.981C41.2036 140.386 41.0905 140.712 40.8643 140.958C40.638 141.202 40.3345 141.324 39.9536 141.324C39.5728 141.324 39.2684 141.202 39.0405 140.958C38.8143 140.713 38.7012 140.381 38.7012 139.961V139.93ZM39.4067 139.981C39.4067 140.232 39.4539 140.424 39.5483 140.557C39.6427 140.689 39.7778 140.755 39.9536 140.755C40.1245 140.755 40.258 140.69 40.354 140.56C40.45 140.428 40.498 140.218 40.498 139.93C40.498 139.684 40.45 139.493 40.354 139.358C40.258 139.223 40.1229 139.156 39.9487 139.156C39.7762 139.156 39.6427 139.223 39.5483 139.358C39.4539 139.492 39.4067 139.699 39.4067 139.981ZM42.3853 138.633V141.419C42.3853 141.71 42.3079 141.937 42.1533 142.098C41.9987 142.26 41.7757 142.342 41.4844 142.342C41.3623 142.342 41.2459 142.328 41.1353 142.3V141.741C41.2199 141.756 41.2939 141.763 41.3574 141.763C41.5706 141.763 41.6772 141.65 41.6772 141.424V138.633H42.3853ZM41.6211 137.95C41.6211 137.844 41.6561 137.757 41.7261 137.688C41.7977 137.62 41.8945 137.586 42.0166 137.586C42.1387 137.586 42.2347 137.62 42.3047 137.688C42.3763 137.757 42.4121 137.844 42.4121 137.95C42.4121 138.057 42.3755 138.145 42.3022 138.213C42.2306 138.282 42.1354 138.316 42.0166 138.316C41.8978 138.316 41.8018 138.282 41.7285 138.213C41.6569 138.145 41.6211 138.057 41.6211 137.95ZM44.1528 141.324C43.7655 141.324 43.4497 141.205 43.2056 140.967C42.9631 140.73 42.8418 140.413 42.8418 140.018V139.949C42.8418 139.684 42.8931 139.447 42.9956 139.239C43.0981 139.029 43.243 138.868 43.4302 138.755C43.619 138.641 43.8338 138.584 44.0747 138.584C44.436 138.584 44.7201 138.698 44.9268 138.926C45.1351 139.154 45.2393 139.477 45.2393 139.896V140.184H43.5571C43.5799 140.356 43.6483 140.494 43.7622 140.599C43.8778 140.703 44.0234 140.755 44.1992 140.755C44.471 140.755 44.6834 140.656 44.8364 140.459L45.1831 140.848C45.0773 140.997 44.9341 141.115 44.7534 141.199C44.5728 141.282 44.3726 141.324 44.1528 141.324ZM44.0723 139.156C43.9323 139.156 43.8184 139.203 43.7305 139.297C43.6442 139.392 43.5889 139.527 43.5645 139.703H44.5459V139.646C44.5426 139.49 44.5003 139.37 44.4189 139.285C44.3376 139.199 44.222 139.156 44.0723 139.156ZM46.7407 140.755C46.8709 140.755 46.9767 140.719 47.0581 140.647C47.1395 140.576 47.1818 140.481 47.1851 140.362H47.8467C47.8451 140.541 47.7962 140.705 47.7002 140.855C47.6042 141.003 47.4723 141.119 47.3047 141.202C47.1387 141.283 46.9548 141.324 46.7529 141.324C46.3753 141.324 46.0775 141.204 45.8594 140.965C45.6413 140.724 45.5322 140.392 45.5322 139.969V139.922C45.5322 139.515 45.6405 139.191 45.8569 138.948C46.0734 138.706 46.3704 138.584 46.748 138.584C47.0785 138.584 47.3429 138.679 47.5415 138.868C47.7417 139.055 47.8434 139.305 47.8467 139.617H47.1851C47.1818 139.48 47.1395 139.37 47.0581 139.285C46.9767 139.199 46.8693 139.156 46.7358 139.156C46.5715 139.156 46.4469 139.216 46.3623 139.336C46.2793 139.455 46.2378 139.649 46.2378 139.917V139.991C46.2378 140.263 46.2793 140.458 46.3623 140.577C46.4453 140.695 46.5715 140.755 46.7407 140.755ZM49.0942 137.984V138.633H49.5459V139.151H49.0942V140.469C49.0942 140.567 49.113 140.637 49.1504 140.679C49.1878 140.722 49.2594 140.743 49.3652 140.743C49.4434 140.743 49.5125 140.737 49.5728 140.726V141.26C49.4344 141.303 49.292 141.324 49.1455 141.324C48.6507 141.324 48.3984 141.074 48.3887 140.574V139.151H48.0029V138.633H48.3887V137.984H49.0942Z"
        fill="#4AC3FF"
      />
    </SvgIcon>
  )
}