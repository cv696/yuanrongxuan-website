export type ElementType = 'Metal' | 'Wood' | 'Water' | 'Fire' | 'Earth'

export const QUESTIONS = [
  {
    id: 1,
    text: 'Q1. 您最近的睡眠质量如何？',
    options: [
      { label: '入睡困难，多梦易醒', score: { Fire: 1 } },
      { label: '睡得死，但醒来身体沉重', score: { Earth: 1 } },
      { label: '睡眠正常，精力充沛', score: {} },
    ],
  },
  {
    id: 2,
    text: 'Q2. 您的情绪状态通常是？',
    options: [
      { label: '容易急躁、易怒', score: { Wood: 1 } },
      { label: '容易焦虑、心慌', score: { Fire: 1 } },
      { label: '情绪平稳', score: {} },
    ],
  },
  {
    id: 3,
    text: 'Q3. 您是否感到腰膝酸软？',
    options: [
      { label: '是，经常腰酸怕冷', score: { Water: 1 } },
      { label: '否，体能很好', score: {} },
    ],
  },
  {
    id: 4,
    text: 'Q4. 您的呼吸道状况如何？',
    options: [
      { label: '嗓子干痒、咳嗽', score: { Metal: 1 } },
      { label: '鼻塞、喷嚏', score: { Metal: 1 } },
      { label: '呼吸通畅', score: {} },
    ],
  },
  {
    id: 5,
    text: 'Q5. 您的消化情况如何？',
    options: [
      { label: '胃口差，腹胀', score: { Earth: 1 } },
      { label: '便秘或干结', score: { Metal: 1 } },
      { label: '消化正常', score: {} },
    ],
  },
  {
    id: 6,
    text: 'Q6. 您的眼睛感觉如何？',
    options: [
      { label: '干涩、视物模糊', score: { Wood: 1 } },
      { label: '红肿血丝', score: { Fire: 1 } },
      { label: '明亮舒适', score: {} },
    ],
  },
  {
    id: 7,
    text: 'Q7. 您的皮肤状态如何？',
    options: [
      { label: '干燥、过敏', score: { Metal: 1 } },
      { label: '暗沉、色斑', score: { Wood: 1 } },
      { label: '红润有光泽', score: {} },
    ],
  },
  {
    id: 8,
    text: 'Q8. 精力与生理状态？',
    options: [
      { label: '精力下降/月经量少', score: { Water: 1 } },
      { label: '容易疲劳乏力', score: { Earth: 1 } },
      { label: '一切正常', score: {} },
    ],
  },
  {
    id: 9,
    text: 'Q9. 您平时容易出汗吗？',
    options: [
      { label: '稍微一动就出汗', score: { Metal: 1 } },
      { label: '睡觉偷出汗', score: { Water: 1 } },
      { label: '正常', score: {} },
    ],
  },
]

export const PRODUCTS = [
  {
    id: 'p1',
    name: '【云开】清肺香',
    element: 'Metal',
    desc: '散结宽胸，深度清理呼吸道。',
    color: 'bg-gray-100 text-gray-800',
  },
  {
    id: 'p2',
    name: '【御风】通窍香',
    element: 'Metal',
    desc: '宣肺通气，抵御外邪。',
    color: 'bg-gray-100 text-gray-800',
  },
  {
    id: 'p3',
    name: '【破晓】醒脑香',
    element: 'Wood',
    desc: '疏肝理气，瞬间提神。',
    color: 'bg-green-100 text-green-800',
  },
  {
    id: 'p4',
    name: '【潜龙】固本香',
    element: 'Water',
    desc: '🔥温补肾阳，强腰固本。',
    color: 'bg-slate-800 text-white',
  },
  {
    id: 'p5',
    name: '【归元】安睡香',
    element: 'Fire',
    desc: '宁心安神，缩短入睡时间。',
    color: 'bg-red-100 text-red-800',
  },
  {
    id: 'p6',
    name: '【厚土】健脾香',
    element: 'Earth',
    desc: '健脾化湿，一身轻盈。',
    color: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: 'p7',
    name: '【丹心】护心香',
    element: 'Fire',
    desc: '强心活血，保养心脉。',
    color: 'bg-red-100 text-red-800',
  },
]

export const ELEMENT_TITLES: Record<ElementType, string> = {
  Metal: '金型 (肺气虚弱)',
  Wood: '木型 (肝气郁结)',
  Water: '水型 (肾阳不足)',
  Fire: '火型 (心火旺盛)',
  Earth: '土型 (脾胃虚寒)',
}

