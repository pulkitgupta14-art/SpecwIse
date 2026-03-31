/**
 * Maps phone IDs to real remote image URLs.
 * Used as fallback when local /phones/*.jpg images don't exist.
 */
export const phoneImageMap: Record<string, { front: string; back: string }> = {
  // Apple iPhones
  'iphone-16-pro-max': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg',
  },
  'iphone-16-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg',
  },
  'iphone-16': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg',
  },
  'iphone-16-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg',
  },
  'iphone-17-pro-max': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg',
  },
  'iphone-17-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg',
  },
  'iphone-17': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg',
  },
  'iphone-17-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg',
  },
  'iphone-15-pro-max': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg',
  },
  'iphone-15-pro-max-v2': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg',
  },
  'iphone-15': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg',
  },
  'iphone-15-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus.jpg',
  },
  'iphone-se-3': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg',
  },

  // Samsung
  'samsung-s25-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra.jpg',
  },
  'samsung-s25-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25plus.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25plus.jpg',
  },
  'samsung-s25': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25.jpg',
  },
  'samsung-s24-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg',
  },
  'samsung-s24': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g.jpg',
  },
  'samsung-s24-fe': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-fe.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-fe.jpg',
  },
  'samsung-s26-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra.jpg',
  },
  'samsung-s26-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25plus.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25plus.jpg',
  },
  'samsung-s26': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25.jpg',
  },
  'samsung-z-fold-6': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg',
  },
  'samsung-z-fold-7': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg',
  },
  'samsung-z-flip-6': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip6.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip6.jpg',
  },
  'samsung-z-flip-7': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip6.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip6.jpg',
  },
  'samsung-a55': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg',
  },
  'samsung-a54': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg',
  },
  'samsung-a35': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35.jpg',
  },
  'samsung-a34': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a34.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a34.jpg',
  },
  'samsung-a36-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35.jpg',
  },
  'samsung-a16-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a16-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a16-5g.jpg',
  },
  'samsung-m17-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m15-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m15-5g.jpg',
  },

  // Google Pixel
  'pixel-9-pro-xl': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-xl.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-xl.jpg',
  },
  'pixel-9-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro.jpg',
  },
  'pixel-9': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9.jpg',
  },
  'pixel-8-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel8-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/google-pixel8-pro.jpg',
  },
  'pixel-8': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel8.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/google-pixel8.jpg',
  },
  'pixel-8a': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8a.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8a.jpg',
  },
  'pixel-7a': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel7a.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/google-pixel7a.jpg',
  },

  // OnePlus
  'oneplus-15': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg',
  },
  'oneplus-13': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg',
  },
  'oneplus-13s': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg',
  },
  'oneplus-15r': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-12r.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-12r.jpg',
  },
  'oneplus-12': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg',
  },
  'oneplus-12r': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-12r.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-12r.jpg',
  },
  'oneplus-open': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-open.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-open.jpg',
  },
  'oneplus-nord-4': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-4.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-4.jpg',
  },
  'oneplus-nord-5': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-4.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-4.jpg',
  },
  'oneplus-nord-6': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-4.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-4.jpg',
  },
  'oneplus-nord-ce4': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce4.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce4.jpg',
  },
  'oneplus-nord-ce5': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce4.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce4.jpg',
  },
  'oneplus-nord-ce3-lite': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce3-lite.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce3-lite.jpg',
  },

  // Xiaomi / Redmi / POCO
  'xiaomi-15-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-ultra.jpg',
  },
  'xiaomi-15': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15.jpg',
  },
  'xiaomi-14': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg',
  },
  'redmi-note-15-pro-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-5g.jpg',
  },
  'redmi-note-15-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-5g.jpg',
  },
  'redmi-note-15': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-5g.jpg',
  },
  'redmi-note-14-pro-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-5g.jpg',
  },
  'redmi-note-14-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-5g.jpg',
  },
  'redmi-note-14-se': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-5g.jpg',
  },
  'redmi-note-13-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro.jpg',
  },
  'redmi-13-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-13-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-13-5g.jpg',
  },
  'redmi-12-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-12-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-12-5g.jpg',
  },
  'redmi-a4-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a3.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a3.jpg',
  },
  'redmi-a3': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a3.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a3.jpg',
  },
  'poco-f7-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg',
  },
  'poco-f7-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg',
  },
  'poco-f5-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-pro.jpg',
  },
  'poco-x8-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg',
  },
  'poco-x8': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6.jpg',
  },
  'poco-x7-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg',
  },
  'poco-x7': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6.jpg',
  },
  'poco-x6-neo': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6.jpg',
  },
  'poco-m8-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-5g.jpg',
  },
  'poco-m7-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-pro.jpg',
  },
  'poco-c71': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c65.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c65.jpg',
  },

  // Nothing
  'nothing-phone-2': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg',
  },
  'nothing-phone-3a': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a.jpg',
  },
  'nothing-phone-3a-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a-pro.jpg',
  },
  'nothing-phone-3a-lite': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a.jpg',
  },
  'nothing-phone-3': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg',
  },
  'nothing-phone-4': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg',
  },
  'nothing-phone-4a-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a-pro.jpg',
  },
  'nothing-phone-4a': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3a.jpg',
  },
  'nothing-phone-2a': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2a.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2a.jpg',
  },
  'nothing-phone-2a-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2a-plus.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2a-plus.jpg',
  },
  'nothing-phone-1': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-1.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-1.jpg',
  },

  // Motorola
  'motorola-edge-40-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-40-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-40-pro.jpg',
  },
  'motorola-edge-50-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg',
  },
  'motorola-edge-50-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg',
  },
  'motorola-edge-70-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg',
  },
  'motorola-edge-70-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg',
  },
  'motorola-edge-70-fusion': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-fusion.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-fusion.jpg',
  },
  'motorola-edge-60-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg',
  },
  'motorola-edge-60-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg',
  },
  'motorola-edge-60-fusion': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-fusion.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-fusion.jpg',
  },
  'motorola-razr-50-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-50-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-50-ultra.jpg',
  },
  'motorola-g96': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g85.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g85.jpg',
  },
  'motorola-g86': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g85.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g85.jpg',
  },
  'motorola-g76': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g75-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g75-5g.jpg',
  },
  'motorola-g57-power': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g75-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g75-5g.jpg',
  },

  // OPPO
  'oppo-find-x7-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg',
  },
  'oppo-find-x8-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
  },
  'oppo-find-x9-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
  },
  'oppo-find-x9-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
  },
  'oppo-find-x9': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
  },
  'oppo-reno-13-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13-pro.jpg',
  },
  'oppo-reno15-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13-pro.jpg',
  },
  'oppo-reno15': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13.jpg',
  },
  'oppo-reno14-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13-pro.jpg',
  },
  'oppo-reno14': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13.jpg',
  },
  'oppo-k13': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13.jpg',
  },
  'oppo-a5-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-a3-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-a3-pro.jpg',
  },
  'oppo-a3': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-a3.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/oppo-a3.jpg',
  },

  // vivo
  'vivo-x200-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg',
  },
  'vivo-x300-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg',
  },
  'vivo-x300-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg',
  },
  'vivo-x300': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200.jpg',
  },
  'vivo-v40-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg',
  },
  'vivo-v40': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40.jpg',
  },
  'vivo-v70-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg',
  },
  'vivo-v70': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40.jpg',
  },
  'vivo-v60-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg',
  },
  'vivo-v60': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-v40.jpg',
  },
  'vivo-t5-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-t3-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-t3-5g.jpg',
  },
  'vivo-t5x-5g': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-t3x-5g.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-t3x-5g.jpg',
  },
  'vivo-y200': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-y200.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/vivo-y200.jpg',
  },

  // ASUS ROG
  'asus-rog-phone-8': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8.jpg',
  },
  'asus-rog-phone-9-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8.jpg',
  },

  // Realme
  'realme-gt-5-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/realme-gt5-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/realme-gt5-pro.jpg',
  },
  'realme-gt-7-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/realme-gt7-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/realme-gt7-pro.jpg',
  },
  'realme-13-pro-plus': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/realme-13-pro-plus.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/realme-13-pro-plus.jpg',
  },

  // Sony
  'sony-xperia-1-v': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg',
  },
  'sony-xperia-5-vi': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-v.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-v.jpg',
  },

  // Honor / Huawei
  'honor-magic-7-pro': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic7-pro.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/honor-magic7-pro.jpg',
  },
  'huawei-pura-70-ultra': {
    front: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-pura-70-ultra.jpg',
    back:  'https://fdn2.gsmarena.com/vv/bigpic/huawei-pura-70-ultra.jpg',
  },
}

/**
 * Returns front and back image URLs for a phone.
 * Priority: local static file → phone image map → generic placeholder
 */
export function getPhoneImages(phoneId: string, localImageUrl: string, localBackUrl?: string | null) {
  const mapped = phoneImageMap[phoneId]
  
  // If local file is a real path (not a placeholder), use it
  const frontUrl = localImageUrl?.startsWith('/phones/') && !localImageUrl.includes('placeholder')
    ? localImageUrl
    : mapped?.front ?? '/placeholder.jpg'

  const backUrl = localBackUrl?.startsWith('/phones/') && !localBackUrl?.includes('placeholder')
    ? localBackUrl
    : mapped?.back ?? mapped?.front ?? '/placeholder.jpg'

  return { frontUrl, backUrl }
}
