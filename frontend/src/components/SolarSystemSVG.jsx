function SolarSystemSVG(props){
    return(
        <svg id="solar_system_svg" style={{"opacity": props.displayGallery === true ? "0" : "1"}} width="1274" height="815" viewBox="0 0 1274 815" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M691.245 356.742C691.245 360.801 689.354 364.708 685.852 368.306C682.348 371.906 677.254 375.171 670.92 377.924C658.252 383.429 640.718 386.847 621.324 386.847C601.93 386.847 584.395 383.429 571.728 377.924C565.394 375.171 560.3 371.906 556.796 368.306C553.294 364.708 551.403 360.801 551.403 356.742C551.403 352.682 553.294 348.775 556.796 345.177C560.3 341.577 565.394 338.312 571.728 335.559C584.395 330.054 601.93 326.636 621.324 326.636C640.718 326.636 658.252 330.054 670.92 335.559C677.254 338.312 682.348 341.577 685.852 345.177C689.354 348.775 691.245 352.682 691.245 356.742Z" stroke="white"/>
            <path d="M762.504 359.963C762.504 367.451 758.648 374.638 751.562 381.228C744.476 387.82 734.194 393.779 721.446 398.794C695.955 408.822 660.705 415.036 621.743 415.036C582.782 415.036 547.532 408.822 522.04 398.794C509.293 393.779 499.011 387.82 491.924 381.228C484.838 374.638 480.983 367.451 480.983 359.963C480.983 352.475 484.838 345.289 491.924 338.698C499.011 332.107 509.293 326.148 522.04 321.133C547.532 311.105 582.782 304.891 621.743 304.891C660.705 304.891 695.955 311.105 721.446 321.133C734.194 326.148 744.476 332.107 751.562 338.698C758.648 345.289 762.504 352.475 762.504 359.963Z" stroke="white"/>
            <path d="M832.925 363.99C832.925 375.371 827.097 386.266 816.448 396.229C805.798 406.192 790.359 415.188 771.241 422.754C733.006 437.883 680.151 447.252 621.744 447.252C563.336 447.252 510.481 437.883 472.246 422.754C453.128 415.188 437.689 406.192 427.039 396.229C416.39 386.266 410.562 375.371 410.562 363.99C410.562 352.609 416.39 341.715 427.039 331.752C437.689 321.788 453.128 312.792 472.246 305.227C510.481 290.098 563.336 280.729 621.744 280.729C680.151 280.729 733.006 290.098 771.241 305.227C790.359 312.792 805.798 321.788 816.448 331.752C827.097 341.715 832.925 352.609 832.925 363.99Z" stroke="white"/>
            <path d="M879.173 372.118C879.173 386.294 871.937 399.851 858.741 412.235C845.545 424.62 826.422 435.796 802.75 445.193C755.41 463.984 689.975 475.618 617.673 475.618C545.37 475.618 479.936 463.984 432.595 445.193C408.924 435.796 389.801 424.62 376.604 412.235C363.409 399.851 356.173 386.294 356.173 372.118C356.173 357.942 363.409 344.385 376.604 332.001C389.801 319.617 408.924 308.44 432.595 299.044C479.936 280.252 545.37 268.618 617.673 268.618C689.975 268.618 755.41 280.252 802.75 299.044C826.422 308.44 845.545 319.617 858.741 332.001C871.937 344.385 879.173 357.942 879.173 372.118Z" stroke="white"/>
            <path d="M980.173 397.118C980.173 416.53 969.702 435.083 950.636 452.017C931.57 468.951 903.953 484.223 869.783 497.059C801.448 522.73 707.01 538.618 602.673 538.618C498.335 538.618 403.897 522.73 335.562 497.059C301.393 484.223 273.776 468.951 254.71 452.017C235.644 435.083 225.173 416.53 225.173 397.118C225.173 377.706 235.644 359.153 254.71 342.219C273.776 325.286 301.393 310.013 335.562 297.177C403.897 271.506 498.335 255.618 602.673 255.618C707.01 255.618 801.448 271.506 869.783 297.177C903.953 310.013 931.57 325.286 950.636 342.219C969.702 359.153 980.173 377.706 980.173 397.118Z" stroke="white"/>
            <path d="M1100.17 414.618C1100.17 440.315 1086.45 464.853 1061.52 487.23C1036.58 509.606 1000.47 529.781 955.806 546.733C866.48 580.638 743.043 601.618 606.673 601.618C470.303 601.618 346.866 580.638 257.54 546.733C212.875 529.781 176.764 509.606 151.828 487.23C126.892 464.853 113.173 440.315 113.173 414.618C113.173 388.922 126.892 364.384 151.828 342.007C176.764 319.63 212.875 299.456 257.54 282.503C346.866 248.599 470.303 227.618 606.673 227.618C743.043 227.618 866.48 248.599 955.806 282.503C1000.47 299.456 1036.58 319.63 1061.52 342.007C1086.45 364.384 1100.17 388.922 1100.17 414.618Z" stroke="white"/>
            <path d="M1193.17 425.118C1193.17 455.581 1177.14 484.658 1148.03 511.161C1118.92 537.664 1076.77 561.555 1024.64 581.629C920.385 621.776 776.324 646.618 617.173 646.618C458.022 646.618 313.961 621.776 209.706 581.629C157.576 561.555 115.425 537.664 86.3139 511.161C57.2034 484.658 41.1731 455.581 41.1731 425.118C41.1731 394.656 57.2034 365.579 86.3139 339.076C115.425 312.572 157.576 288.681 209.706 268.607C313.961 228.46 458.022 203.618 617.173 203.618C776.324 203.618 920.385 228.46 1024.64 268.607C1076.77 288.681 1118.92 312.572 1148.03 339.076C1177.14 365.579 1193.17 394.656 1193.17 425.118Z" stroke="white"/>
            <path d="M80.3252 631.49C69.3863 606.415 74.3979 576.226 92.9996 543.036C111.598 509.852 143.74 473.746 186.899 436.906C273.213 363.229 403.5 286.687 557.304 224.762C711.109 162.836 859.27 127.268 974.471 119.811C1032.07 116.082 1081.41 119.383 1119.08 129.914C1156.75 140.446 1182.67 158.181 1193.61 183.257C1204.55 208.333 1199.53 238.521 1180.93 271.711C1162.33 304.896 1130.19 341.001 1087.03 377.841C1000.72 451.519 870.432 528.06 716.628 589.986C562.823 651.911 414.662 687.479 299.461 694.937C241.857 698.665 192.524 695.364 154.857 684.834C117.182 674.302 91.264 656.566 80.3252 631.49Z" stroke="white"/>
            <circle cx="1193.67" cy="240.118" r="15" fill="url(#paint0_radial_27_58)"/>
            <circle cx="1065.67" cy="563.118" r="15" fill="url(#paint1_radial_27_58)"/>
            <circle cx="172.712" cy="503.118" r="15" fill="url(#paint2_radial_27_58)"/>
            <path d="M187.712 502.118C220.303 510.679 123.518 509.537 156.712 502.118" stroke="url(#paint3_radial_27_58)" stroke-width="4"/>
            <circle cx="906.673" cy="311.118" r="15" fill="url(#paint4_radial_27_58)"/>
            <circle cx="744.673" cy="461.118" r="15" fill="url(#paint5_radial_27_58)"/>
            <circle cx="811.673" cy="397.118" r="15" fill="url(#paint6_radial_27_58)"/>
            <circle cx="685.673" cy="407.118" r="15" fill="url(#paint7_radial_27_58)"/>
            <circle cx="621.673" cy="357.118" r="45" fill="url(#paint8_radial_27_58)"/>
            <circle cx="614.173" cy="384.618" r="12.5" fill="url(#paint9_radial_27_58)"/>
            <defs>
                <radialGradient id="paint0_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1193.67 240.118) rotate(90) scale(15)">
                    <stop offset="0.822917" stop-color="#6F7DFF"/>
                    <stop offset="1" stop-color="#A63C00" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint1_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1065.67 563.118) rotate(90) scale(15)">
                    <stop offset="0.822917" stop-color="#3EB7AF"/>
                    <stop offset="1" stop-color="#A63C00" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint2_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(172.712 503.118) rotate(90) scale(15)">
                    <stop offset="0.822917" stop-color="#E7BB7A"/>
                    <stop offset="1" stop-color="#E7B400" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint3_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(172.712 505.118) rotate(-90) scale(3 25)">
                    <stop offset="0.755208" stop-color="#FFDEAC"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint4_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(906.673 311.118) rotate(90) scale(15)">
                    <stop offset="0.822917" stop-color="#E7B400"/>
                    <stop offset="1" stop-color="#E7B400" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint5_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(744.673 461.118) rotate(90) scale(15)">
                    <stop offset="0.822917" stop-color="#FF9900"/>
                    <stop offset="1" stop-color="#A63C00" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint6_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(811.673 397.118) rotate(90) scale(15)">
                    <stop offset="0.822917" stop-color="#0075FF"/>
                    <stop offset="1" stop-color="#A63C00" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint7_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(685.673 407.118) rotate(90) scale(15)">
                    <stop offset="0.791667" stop-color="#A63C00"/>
                    <stop offset="1" stop-color="#A63C00" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint8_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(621.673 357.118) rotate(90) scale(45)">
                    <stop offset="0.567708" stop-color="#FFF4B9"/>
                    <stop offset="1" stop-color="#FF9900" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint9_radial_27_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(614.173 384.618) rotate(90) scale(12.5)">
                    <stop offset="0.770833" stop-color="#A96F00"/>
                    <stop offset="1" stop-color="#2F2F2F" stop-opacity="0"/>
                </radialGradient>
            </defs>
        </svg>
    )
}

export default SolarSystemSVG;