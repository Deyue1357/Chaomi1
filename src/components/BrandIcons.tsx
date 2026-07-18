/**
 * 抖音 / 天猫 品牌图标
 * 用于官方店铺入口展示
 */

/** 抖音图标 — 音符造型 */
export function DouyinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 背景圆 */}
      <circle cx="24" cy="24" r="24" className="fill-current opacity-10" />
      {/* 音符主造型 */}
      <path
        d="M32 8C32 8 30 14 24 14V14V28C24 30.2 22.2 32 20 32C17.8 32 16 30.2 16 28C16 25.8 17.8 24 20 24V18C14.5 18 10 22.5 10 28C10 33.5 14.5 38 20 38C25.5 38 30 33.5 30 28V20C33 21.5 35 22 38 22V16C35 16 33 14 32 8Z"
        className="fill-current"
      />
    </svg>
  )
}

/** 天猫图标 — 官方风格猫头（红底黑猫） */
export function TmallIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" className="fill-current opacity-10" />
      {/* 猫头剪影 */}
      <path
        className="fill-current"
        d="
          M 8 22
          L 8 16
          Q 8 13 11 15
          L 14 18
          Q 18 22 24 22
          Q 30 22 34 18
            L 37 15
          Q 40 13 40 16
          L 40 22
          Q 40 24 40 26
          Q 40 42 24 42
          Q 8 42 8 26
          Q 8 24 8 22 Z
        "
      />
      {/* 左眼 */}
      <ellipse cx="17" cy="29" rx="5" ry="6.5" fill="white" />
      {/* 右眼 */}
      <ellipse cx="31" cy="29" rx="5" ry="6.5" fill="white" />
      {/* 左瞳孔 */}
      <ellipse cx="17" cy="29" rx="1.4" ry="5.5" className="fill-current" />
      {/* 右瞳孔 */}
      <ellipse cx="31" cy="29" rx="1.4" ry="5.5" className="fill-current" />
      {/* 鼻嘴三角 */}
      <path d="M24 32 L20 38 L28 38 Z" fill="white" />
    </svg>
  )
}


/** 抖音品牌色 */
export function DouyinIconColor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#1F1F1F" />
      <path
        d="M32 8C32 8 30 14 24 14V14V28C24 30.2 22.2 32 20 32C17.8 32 16 30.2 16 28C16 25.8 17.8 24 20 24V18C14.5 18 10 22.5 10 28C10 33.5 14.5 38 20 38C25.5 38 30 33.5 30 28V20C33 21.5 35 22 38 22V16C35 16 33 14 32 8Z"
        fill="#00F2EA"
      />
      <path
        d="M31 12C30.5 10.5 29 8.5 28 5V4H22.5V26C22.5 28.2 20.7 30 18.5 30C16.3 30 14.5 28.2 14.5 26C14.5 23.8 16.3 22 18.5 22V16C13 16 8.5 20.5 8.5 26C8.5 31.5 13 36 18.5 36C24 36 28.5 31.5 28.5 26V16.5C30.5 18 32 19 35 19V13.5C33 13.5 32 12.5 31 12Z"
        fill="#FE2C55"
      />
    </svg>
  )
}

/** 天猫品牌色 */
export function TmallIconColor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#FF0036" />
      <path
        fill="black"
        d="
          M 8 22
          L 8 16
          Q 8 13 11 15
          L 14 18
          Q 18 22 24 22
          Q 30 22 34 18
          L 37 15
          Q 40 13 40 16
          L 40 22
          Q 40 24 40 26
          Q 40 42 24 42
          Q 8 42 8 26
          Q 8 24 8 22 Z
        "
      />
      <ellipse cx="17" cy="29" rx="5" ry="6.5" fill="white" />
      <ellipse cx="31" cy="29" rx="5" ry="6.5" fill="white" />
      <ellipse cx="17" cy="29" rx="1.4" ry="5.5" fill="black" />
      <ellipse cx="31" cy="29" rx="1.4" ry="5.5" fill="black" />
      <path d="M24 32 L20 38 L28 38 Z" fill="white" />
    </svg>
  )
}
