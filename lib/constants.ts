export const SITE_CONFIG = {
  name: '篠島直送生しらす 虎丸水産',
  description: '愛知県篠島から朝獲れの生しらすを直送。篠島の漁師の手から直送でお届け。LINE注文で簡単。',
  url: 'https://example.com', // TODO: 実際のURLに変更
  ogImage: '/images/og-image.jpg',
}

export const LINE_CONFIG = {
  addUrl: '#line-add', // TODO: 実際のLINE URLに変更 (https://lin.ee/xxxxx)
  qrCodeImage: '/images/line-qr-placeholder.png',
}

export const COMPANY_INFO = {
  name: '株式会社いっぱち',
  address: '〒460-0003 愛知県名古屋市中区錦2丁目16番22号 第2ブラストンビル1F',
  tel: '000-0000-0000',
  email: 'info@example.com',
  businessHours: '平日 10:00–17:00',
  bank: {
    name: '豊川信用金庫 幸田支店',
    type: '普通',
    number: '4506941',
    holder: '株式会社いっぱち',
  },
  partner: '虎丸水産',
}

export const PRODUCTS = {
  fresh: {
    name: '生しらす',
    minOrder: '500g〜（100g単位で追加）',
    pricePerUnit: '100g 790円（参考価格）',
    priceExample: '500g = 3,950円',
    shelfLife: '到着後2日以内推奨',
    availability: '入荷不安定・当日発送（当日配送）',
    note: '会員限定・前日仮予約制。対象エリアは当日配送・送料無料。',
  },
  frozen: {
    name: '冷凍しらす',
    minOrder: '10パック（1kg）〜',
    pricePerUnit: '100g 790円（参考価格）',
    packaging: '100g個包装',
    shelfLife: '冷凍保管で6か月以内推奨',
    note: '100g個包装。業務に使いやすく、味はそのまま。B2Bは10パック〜のボリューム割（最大@600円/100g）。送料はお客様負担。',
    discount: {
      monthly2kg: '10パック〜のボリューム割あり',
      monthly5kg: '最大 @600円/100g（詳細はお問い合わせ）',
    },
  },
}

export const FAQ_DATA = [
  {
    question: '生しらすはいつ買えますか？',
    answer: 'LINE入荷速報で当日受付いたします。入荷状況により不定期となりますので、LINE友だち登録をお願いします。',
  },
  {
    question: '冷凍しらすの賞味期限は？',
    answer: '冷凍保管で6か月以内がおいしくお召し上がりいただける目安です。',
  },
  {
    question: '配送方法は？',
    answer: '生しらすは冷蔵便（当日発送、翌日到着）、冷凍しらすは冷凍便でお届けします。',
  },
  {
    question: '冷蔵と冷凍の同梱はできますか？',
    answer: '申し訳ございませんが、温度帯が異なるため同梱はできません。',
  },
  {
    question: '支払い方法は？',
    answer: '銀行振込のみとなります。入金確認後に出荷いたします。',
  },
  {
    question: '不在時の再配達は？',
    answer: '生鮮品のため、再配達による品質劣化のリスクがございます。確実にお受け取りいただける日時をご指定ください。',
  },
  {
    question: '領収書は発行できますか？',
    answer: 'PDFまたは商品同梱、どちらでも対応可能です。ご注文時にお申し付けください。',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: '山田太郎',
    restaurant: '和食処 花月',
    location: '名古屋市中区',
    comment: '鮮度が違います。お客様にも大好評で、看板メニューになりました。',
    avatar: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: '鈴木花子',
    restaurant: 'イタリアン ベルフィオーレ',
    location: '名古屋市東区',
    comment: '安定供給していただけるので助かります。パスタに最高です。',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: '佐藤健一',
    restaurant: '居酒屋 漁火',
    location: '豊田市',
    comment: '朝獲れの生しらすは格別。冷凍も常備して重宝しています。',
    avatar: '/images/testimonial-3.jpg',
  },
]

export const PURCHASE_FLOW = [
  {
    step: 1,
    title: 'LINE/フォームで注文',
    description: 'LINE友だち追加後、入荷速報から簡単注文',
    icon: 'MessageCircle',
  },
  {
    step: 2,
    title: '銀行振込',
    description: '請求書発行後、指定口座へお振込み',
    icon: 'CreditCard',
  },
  {
    step: 3,
    title: '発送・お届け',
    description: '入金確認後、クール便で即日発送',
    icon: 'Truck',
  },
]

export const DELIVERY_AREAS = {
  recommended: ['愛知県', '岐阜県（一部）', '三重県（一部）'],
  consultation: ['関東地方', '関西地方'],
  notRecommended: ['北海道', '九州地方', '沖縄県'],
}

export const ANALYTICS = {
  ga4: {
    measurementId: 'G-XXXXXXXXXX', // TODO: 実際のGA4 IDに変更
  },
  lineTag: {
    tagId: '00000000-0000-0000-0000-000000000000', // TODO: 実際のLINE Tag IDに変更
  },
}
