
import React from 'react'

const Knocard = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M38.8628 0C50.9472 0.0264568 60.5979 3.65104 68.4887 11.7326C86.7296 30.4172 82.7431 61.1315 60.4182 74.366C41.1422 85.7913 16.3152 79.2809 5.21913 59.8901C-4.79878 42.3818 0.0138794 19.3806 16.1511 7.53408C23.2978 2.28546 31.302 0.0407028 38.8628 0ZM46.7341 30.8405C46.8884 34.8436 47.5056 38.57 49.7538 41.7834C52.8222 46.1712 57.3673 46.0796 60.3264 41.6023C62.2131 38.747 63.0198 35.5111 63.1292 32.1186C63.2894 27.1854 62.5393 22.474 59.006 18.7742C56.5782 16.2323 53.3769 16.2648 50.9218 18.7965C47.6639 22.1545 46.9627 26.4812 46.7361 30.8425L46.7341 30.8405ZM42.0875 67.007C47.9041 66.6264 53.6836 63.3457 58.2931 57.7043C59.1779 56.6216 60.0451 55.4759 60.6799 54.2263C61.4475 52.7142 60.7795 51.4056 59.0294 50.4776C57.2423 49.5292 56.2169 49.7856 55.2676 51.312C54.6406 52.3194 53.9707 53.3084 53.2285 54.2263C46.2497 62.8492 34.3099 63.0547 27.1026 54.6679C26.1886 53.6035 25.4112 52.413 24.5557 51.2936C23.5791 50.0176 22.3642 49.8731 21.1278 50.8622C19.1356 52.4577 18.8465 54.1876 20.5673 56.4039C25.7374 63.069 32.2688 67.0436 42.0875 67.0049V67.007ZM27.1476 35.7248C29.8644 35.7248 32.5813 35.7716 35.2963 35.7106C37.6713 35.6556 39.2905 33.8871 39.2339 31.5589C39.1792 29.3162 37.5522 27.7532 35.2123 27.7491C29.8117 27.7369 24.4092 27.7023 19.0086 27.7878C18.1102 27.802 17.0984 28.1867 16.3562 28.726C15.069 29.6601 14.7077 31.4714 15.2214 33.0425C15.7429 34.636 17.1512 35.6841 18.9989 35.7147C21.7138 35.7594 24.4307 35.7269 27.1476 35.7248Z" />
        </svg>

    )
}

export default Knocard


